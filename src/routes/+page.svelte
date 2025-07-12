<body>
  <script src="falling-ash.js"></script>
  <div
    id="canvascontainer"
    class="min-h-screen bg-gray-300 flex relative items-center justify-center bg-cover bg-center bg-no-repeat"
    style="background-image: url('/section1background.png')"
  >
  <canvas id="canvas" style="z-index: 1; pointer-events: none;"></canvas>
  <canvas id="buffer" style="z-index: 1; pointer-events: none; visibility: hidden;"></canvas>
    <div class="flex flex-col space-y-12 items-center" style="z-index: 10; position: relative;">
      <img src="/coin-flat.svg" alt="Svelted Coin" class="size-80 drop-shadow-[0_10px_5px_rgba(57,58,76,0.5)]" style="filter: drop-shadow(0 0 20px rgba(251, 146, 60, 0.8)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.4));" data-tilt data-tilt-reset="true" data-tilt-scale="1.2" data-tilt-glare data-tilt-max-glare="0.6" />
      <div
        class="text-center text-white bg-gray-500 px-12 py-8 -rotate-3 text-3xl drop-shadow-[0_10px_5px_rgba(57,58,76,0.5)]"
      >
        <p>
          1. Ship a <a href="https://svelte.dev" class="text-orange-300 hover:underline">Svelte/SvelteKit</a> website
        </p>
        <p>
          2. Include an <span class="text-orange-300">Easter Egg</span>,
        </p>
        <p>
          3. Get a <span class="text-orange-300">Svelted Coin</span> & more!
        </p>
      </div>
    </div>
    <div
      class="absolute left-0 top-0 hover:scale-105 motion-safe:transition-transform hover:-rotate-10 drop-shadow-[0_8px_4px_rgba(218,79,41,0.5)]"
    >
      <a href="https://hackclub.com"
        ><img src="/flag_left.svg" alt="Hack Club" class="h-20" /></a
      >
    </div>
    <div class="absolute flex justify-center left-0 right-0 bottom-0">
      <div class="max-w-4xl w-full">
        <img src="/crucible.png" alt="Crucible" class=" h-44" />
      </div>
    </div>
  </div>
  <div class="bg-gray-500 flex justify-center">
    <div class="w-full max-w-4xl">
      <div class="text-4xl text-white text-right pt-20">
        The more hours you spend,<br /><span class="text-orange-300"
          >the more prizes you gain.</span
        >
      </div>
      <div class="space-y-12 text-2xl pb-12">
        <div class="grid grid-cols-2">
          <div class="text-white flex items-center space-x-12 ml-28">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              1h
            </p>
            <p>Get a ---</p>
          </div>
          <div class="text-white flex items-center space-x-12 pl-12 mt-12">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              1h
            </p>
            <p>Get a ---</p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="text-white flex items-center space-x-12 pl-10 mt-28">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              1h
            </p>
            <p>Get a ---</p>
          </div>
          <div class="text-white flex items-center space-x-12 ml-28">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              1h
            </p>
            <p>Get a ---</p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="text-white flex items-center space-x-12 pl-48">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              1h
            </p>
            <p>Get a ---</p>
          </div>
          <div class="text-white flex items-center space-x-12 pl-10 mt-20">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              1h
            </p>
            <p>Get a ---</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="vanilla-tilt.min.js"></script>
</body>

<footer class="bg-gray-600 py-10">
  <p class="text-white text-center">
    Made with <span class="inline-block hover:animate-bounce cursor-pointer">❤️</span> by Hack Club's <a
      href="https://github.com/vandorena"
      class="text-orange-300 hover:underline cursor-pointer">Alex Van Doren</a
    >
    and
    <a href="https://github.com/samdev-7" class="text-orange-300 hover:underline cursor-pointer">Sam Liu</a>
  </p>
</footer>
