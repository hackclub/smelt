//Name Space
var bg = bg || {};

//Get random int between two numbers
function randomRange(from, to, seed){ return Math.floor((seed?seed:Math.random())*(to-from+1)+from); }

//Fire
(function(b){
  var cntr   = document.getElementById("canvascontainer"),
      W      = cntr.offsetWidth,
      H      = cntr.offsetHeight,
      canvas = [document.getElementById("canvas"), document.getElementById("buffer")],
      ctxs   = [canvas[0].getContext("2d"), canvas[1].getContext("2d")],
      C      = 0, 
      angle  = 0,
      A      = [],
      int;
  
  function ash(o) {
    var i,
        j,
        m = Math.random(),
        p = randomRange(4, 8, m);

    if(o && o.x) this.x = o.x;
    else this.x = m*W;
    if(o && o.y) this.y = o.y;
    else this.y = m*H;
    if(o && o.a) this.a = o.a;
    else this.a = m*(p-4)+1;
    this.r = randomRange(233, 255, m);
    this.g = randomRange(181, 192, m);
    this.b = randomRange(72, 88, m);
    
    if(o && o.dp) this.dp = o.dp;
    else {
      this.dp = [{x:0,y:0}];
      for(i = 0; i < p; i++) {
        j = (i == 0 || p/2 > i ? 1 : -1);
        this.dp.push({x:this.dp[i].x+(randomRange(5, 30)*j), y:this.dp[i].y+(randomRange(5, 30)*j)});
      }
    }
  }
  
  function draw() {
    var grad, i, j, p, ctx;
    if(C == 0) {
      //Show the canvas
      canvas[0].style.visibility = "visible";
      canvas[1].style.visibility = "hidden";
      C = 1;
    } else {
      //Show the buffer
      canvas[1].style.visibility = "visible";
      canvas[0].style.visibility = "hidden";
      C = 0;
    }
    
    ctx = ctxs[C];
    ctx.clearRect(0, 0, W, H);

    for(i = 0; i < A.length; i++) {
			p    = A[i];
      grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.a);
      grad.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", 1)");
			grad.addColorStop(0.9, "rgba("+p.r+", "+p.g+", "+p.b+", "+randomRange(1,10)/10+")");
			grad.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
      
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      for(j = 1; j < p.dp.length; j++) ctx.lineTo(p.x+p.dp[j].x, p.y+p.dp[j].y);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.globalAlpha = 0.7;
		  ctx.fill();
		}

    update(); 
  }
  
  function update() {
    var i, p;
		angle += 0.01;
    
    for(i = 0; i < A.length; i++) {
			p = A[i];

      p.y += Math.cos(angle+A.length) + 1 + p.a/2;
			p.x += Math.sin(angle) * 2;
      
      if(p.x > W+5 || p.x < -5 || p.y > H) {
        if(i % 3 > 0) A[i] = new ash({y: -10, a: p.a, d: p.d, dp: p.dp});
        else {
          //Enter from the left
					if(Math.sin(angle) > 0) A[i] = new ash({x: -5, a: p.a, d: p.d, dp: p.dp});
          //Enter from the right
					else A[i] = new ash({x: W+5, a: p.a, d: p.d, dp: p.dp});
        }
      }
    }
  }
  
  //Run
  canvas[0].width = W;
  canvas[0].height = H;
  canvas[1].width = W;
  canvas[1].height = H;
  for(var i = 0; i < 50; i++) A.push(new ash());
  setInterval(draw, 33);
})(bg);