//Name Space - Safari compatible
var bg = bg || {};

//Get random int between two numbers - Safari Math.random() fix
function randomRange(from, to, seed) { 
  var random = seed ? seed : Math.random();
  return Math.floor(random * (to - from + 1) + from); 
}

//Fire - Safari compatible version
(function(b){
  var cntr, W, H, canvas, ctxs, C, angle, A, int;
  
  // Safari compatibility check
  function initializeCanvas() {
    cntr = document.getElementById("canvascontainer");
    if (!cntr) {
      console.warn("Canvas container not found, retrying...");
      setTimeout(initializeCanvas, 100);
      return;
    }
    
    W = cntr.offsetWidth || window.innerWidth;
    H = cntr.offsetHeight || window.innerHeight;
    canvas = [document.getElementById("canvas"), document.getElementById("buffer")];
    
    // Safari canvas context check
    if (!canvas[0] || !canvas[1]) {
      console.warn("Canvas elements not found");
      return;
    }
    
    try {
      ctxs = [canvas[0].getContext("2d"), canvas[1].getContext("2d")];
      if (!ctxs[0] || !ctxs[1]) {
        console.warn("Could not get 2D context");
        return;
      }
    } catch (e) {
      console.warn("Canvas context creation failed:", e);
      return;
    }
    
    C = 0;
    angle = 0;
    A = [];
    
    startAnimation();
  }
  
  function ash(o) {
    var i, j, m, p;
    
    // Safari-safe random generation
    try {
      m = Math.random();
      p = randomRange(4, 8, m);
    } catch (e) {
      m = 0.5;
      p = 6;
    }

    this.x = (o && typeof o.x !== 'undefined') ? o.x : m * W;
    this.y = (o && typeof o.y !== 'undefined') ? o.y : m * H;
    this.a = (o && typeof o.a !== 'undefined') ? o.a : m * (p - 4) + 1;
    this.r = randomRange(233, 265, m);
    this.g = randomRange(160, 180, m);
    this.b = randomRange(60, 70, m);
    
    if (o && o.dp) {
      this.dp = o.dp;
    } else {
      this.dp = [{x: 0, y: 0}];
      for (i = 0; i < p; i++) {
        j = (i === 0 || p / 2 > i) ? 1 : -1;
        this.dp.push({
          x: this.dp[i].x + (randomRange(5, 30) * j), 
          y: this.dp[i].y + (randomRange(5, 30) * j)
        });
      }
    }
  }
  
  function draw() {
    var grad, i, j, p, ctx;
    
    // Safari safety check
    if (!ctxs || !ctxs[C]) return;
    
    if (C === 0) {
      // Show the canvas
      if (canvas[0]) canvas[0].style.visibility = "visible";
      if (canvas[1]) canvas[1].style.visibility = "hidden";
      C = 1;
    } else {
      // Show the buffer
      if (canvas[1]) canvas[1].style.visibility = "visible";
      if (canvas[0]) canvas[0].style.visibility = "hidden";
      C = 0;
    }
    
    ctx = ctxs[C];
    if (!ctx) return;
    
    // Safari-safe clear
    try {
      ctx.clearRect(0, 0, W, H);
    } catch (e) {
      console.warn("Clear rect failed:", e);
      return;
    }

    for (i = 0; i < A.length; i++) {
      p = A[i];
      if (!p) continue;
      
      try {
        grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.a);
        grad.addColorStop(0, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", 1)");
        grad.addColorStop(0.9, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + randomRange(1, 10) / 10 + ")");
        grad.addColorStop(1, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", 0)");
        
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        for (j = 1; j < p.dp.length; j++) {
          ctx.lineTo(p.x + p.dp[j].x, p.y + p.dp[j].y);
        }
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      } catch (e) {
        // Safari gradient creation can fail, skip this particle
        continue;
      }
    }

    update(); 
  }
  
  function update() {
    var i, p;
    angle += 0.01;
    
    for (i = 0; i < A.length; i++) {
      p = A[i];
      if (!p) continue;

      p.y += Math.cos(angle + A.length) + 1 + p.a / 2;
      p.x += Math.sin(angle) * 2;
      
      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) {
          A[i] = new ash({y: -10, a: p.a, d: p.d, dp: p.dp});
        } else {
          // Enter from the left
          if (Math.sin(angle) > 0) {
            A[i] = new ash({x: -5, a: p.a, d: p.d, dp: p.dp});
          } else {
            // Enter from the right
            A[i] = new ash({x: W + 5, a: p.a, d: p.d, dp: p.dp});
          }
        }
      }
    }
  }
  
  function startAnimation() {
    // Safari-safe canvas sizing
    try {
      canvas[0].width = W;
      canvas[0].height = H;
      canvas[1].width = W;
      canvas[1].height = H;
      
      // Initialize particles
      for (var i = 0; i < 600; i++) {
        A.push(new ash());
      }
      
      // Use requestAnimationFrame for better Safari performance
      var lastTime = 0;
      function animate(currentTime) {
        if (currentTime - lastTime >= 33) { // ~30fps
          draw();
          lastTime = currentTime;
        }
        requestAnimationFrame(animate);
      }
      
      // Fallback to setInterval for older Safari versions
      if (typeof requestAnimationFrame === 'undefined') {
        setInterval(draw, 33);
      } else {
        requestAnimationFrame(animate);
      }
      
    } catch (e) {
      console.warn("Animation startup failed:", e);
    }
  }
  
  // Safari-safe initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCanvas);
  } else {
    initializeCanvas();
  }
  
})(bg);