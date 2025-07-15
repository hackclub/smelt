<body>
  <script src="falling-ash.js" defer></script>
  <script src="faq_script.js" defer></script>
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
        class="text-center text-white px-12 py-8 -rotate-3 text-3xl drop-shadow-[0_10px_5px_rgba(57,58,76,0.5)] bg-cover bg-center bg-no-repeat"
        style="background-image: url('/plate.png')" data-tilt data-tilt-reset="true" data-tilt-scale="1.2" data-tilt-glare data-tilt-max-glare="0.6"
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
  <div class="bg-gray-500 flex justify-center" style="background-image: url('/texturedsection.jpg')">
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
            <p>Get a set of Svelte/Smelt Stickers</p>
          </div>
          <div class="text-white flex items-center space-x-12 pl-12 mt-12">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              3h
            </p>
            <p>Get a SmeltCoin</p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="text-white flex items-center space-x-12 pl-10 mt-28">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
            7h
            </p>
            <p>Get a Smelted Pin</p>
          </div>
          <div class="text-white flex items-center space-x-12 ml-28">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              5h
            </p>
            <p>Get a Smelted USB Stick</p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="text-white flex items-center space-x-12 pl-48">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              12h
            </p>
            <p>Get a Smelted Mousepad</p>
          </div>
          <div class="text-white flex items-center space-x-12 pl-10 mt-20">
            <p
              class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl"
            >
              16h
            </p>
            <p>Get a Smelted Shirt</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-500 py-10 flex justify-center">
    <!-- This will be a Submission Section-->
     <a href="https://forms.hackclub.com/t/nGQ96A1Lnwus">
      <button class="relative w-m inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-slate-700 via-orange-400 to-yellow-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none hover:scale-105 transition-transform duration-1000 motion-safe:transition-transform">
          <span class="relative w-m px-5 py-2.5 transition-colors bg-white cursor-pointer dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent text-2xl hover:scale-105">
          Submit your Site!
          </span>
      </button>
    </a>
  </div>
  <div>
    <!-- This will be a Carousel Showing Submissions -->
  </div>
  <div id="faqs" class="bg-gray-700 py-16 px-8">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-5xl font-bold text-orange-300 text-center mb-12">Frequently Asked Questions</h2>
      
      <div class="space-y-8">
        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">What is Smelt?</h3>
          <p class="text-gray-200 text-lg leading-relaxed">
            A Hack Club YSWS (You Ship, We Ship) where you can build a Svelte/SvelteKit website and get Svelted Rewards for your efforts! 
            It's all about learning, building, and getting awesome prizes while you code.
          </p>
        </div>

        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">What is <a href="https://svelte.dev/docs/svelte/overview" class="cursor-pointer  hover:text-orange-300 hover:underline">Svelte</a> and <a href="https://svelte.dev/docs/kit/introduction" class="cursor-pointer hover:text-orange-300 hover:underline">SvelteKit</a>?</h3>
          <p class="text-gray-200 text-lg leading-relaxed">
            <span class="font-semibold text-orange-400"><a href="https://svelte.dev/docs/svelte/overview" class="cursor-pointer  hover:text-orange-300 hover:underline">Svelte</a></span> is a modern JavaScript framework for building user interfaces that compiles your code to vanilla JavaScript. 
            <span class="font-semibold text-orange-400"><a href="https://svelte.dev/docs/kit/introduction" class="cursor-pointer hover:text-orange-300 hover:underline">SvelteKit</a></span> is a framework built on top of Svelte that adds features like routing, 
            server-side rendering, and file-based routing to help you build full-stack applications.
          </p>
        </div>

        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">How do you track my hours?</h3>
          <p class="text-gray-200 text-lg leading-relaxed">
            We track your hours through <a href="https://hackatime.hackclub.com" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">Hackatime</a>, 
            an extension we made that automatically tracks your development time. Just install it, connect your account, and start coding! 
            Your hours will be automatically logged and counted towards your progress. However, do note that in our review process, we will check your commit history to ensure that your hours logged are representative of your work.
          </p>
        </div>

        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">Are there any limitations on what I can submit?</h3>
          <div class="text-gray-200 text-lg leading-relaxed">
            <p class="mb-3">Yes, here are the requirements:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Must include an <span class="text-orange-200 font-semibold">Easter Egg</span> in your site</li>
              <li>Must be built with <span class="text-orange-200 font-semibold">Svelte or SvelteKit</span></li>
              <li>Must be hosted on a <span class="text-orange-200 font-semibold">public URL</span></li>
              <li>Your first commit must be <span class="text-orange-200 font-semibold">after July 10th, 2025</span></li>
            </ul>
          </div>
        </div>

        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">When will I receive my prizes?</h3>
          <p class="text-gray-200 text-lg leading-relaxed">
            Prizes will be shipped after the event ends and we've verified your submission. 
            Make sure to fill out the submission form completely with your correct shipping address!
          </p>
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
