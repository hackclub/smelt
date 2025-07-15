<svelte:head>
  <!-- Safari-specific meta tags -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="format-detection" content="telephone=no">
  
  <!-- Safari font preload -->
  <link rel="preconnect" href="https://fonts.cdnfonts.com" crossorigin>
  <link rel="preload" href="https://fonts.cdnfonts.com/css/post-no-bills-jaffna" as="style">
</svelte:head>

<body>
  <script src="falling-ash.js" defer></script>
  <div
    id="canvascontainer"
    class="min-h-screen bg-gray-300 flex relative items-center justify-center bg-cover bg-center bg-no-repeat"
    style="background-image: url('/section1background.png')"
  >
  <canvas id="canvas" style="z-index: 1; pointer-events: none;"></canvas>
  <canvas id="buffer" style="z-index: 1; pointer-events: none; visibility: hidden;"></canvas>
    <div class="flex flex-col space-y-12 items-center" style="z-index: 10; position: relative;">
      <img src="/coin-flat-new.svg" alt="Svelted Coin" class="size-80 drop-shadow-[0_10px_5px_rgba(57,58,76,0.5)]" style="filter: drop-shadow(0 0 20px rgba(251, 146, 60, 0.8)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.4));" data-tilt data-tilt-reset="true" data-tilt-scale="1.2" data-tilt-glare data-tilt-max-glare="0.6" />
      <div
        class="text-center text-white px-12 py-8 -rotate-3 text-3xl drop-shadow-[0_10px_5px_rgba(57,58,76,0.5)] bg-cover bg-center bg-no-repeat"
        style="background-image: url('/plate.png')" data-tilt data-tilt-reset="true" data-tilt-scale="1.2" data-tilt-glare data-tilt-max-glare="0.6"
      >
        <p>
          1. Ship a <a href="https://svelte.dev" class="text-orange-300 hover:underline">Svelte/SvelteKit</a> website
        </p>
        <p>
          2. Include an <span class="text-orange-300"><a href="https://hc-cdn.hel1.your-objectstorage.com/s/v3/138cdfc4d8700edf08b30f61138cc82c39fe5e97_1498dc64062685.5ac5abaa81fad.gif" class="cursor-text">Easter Egg</a></span>,
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
        <!-- Safari-compatible grid layout -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="text-white flex items-center space-x-8 justify-center md:justify-start">
            <p class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl flex-shrink-0">
              1h
            </p>
            <p>Get a set of Svelte/Smelt Stickers</p>
          </div>
          <div class="text-white flex items-center space-x-8 justify-center md:justify-start">
            <p class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl flex-shrink-0">
              3h
            </p>
            <p>Get a SmeltCoin</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="text-white flex items-center space-x-8 justify-center md:justify-start">
            <p class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl flex-shrink-0">
              5h
            </p>
            <p>Get a Smelted USB Stick</p>
          </div>
          <div class="text-white flex items-center space-x-8 justify-center md:justify-start">
            <p class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl flex-shrink-0">
              7h
            </p>
            <p>Get a Smelted Pin</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="text-white flex items-center space-x-8 justify-center md:justify-start">
            <p class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl flex-shrink-0">
              12h
            </p>
            <p>Get a Smelted Mousepad</p>
          </div>
          <div class="text-white flex items-center space-x-8 justify-center md:justify-start">
            <p class="size-20 bg-orange-400 flex items-center justify-center rounded-full text-4xl flex-shrink-0">
              16h
            </p>
            <p>Get a Smelted Shirt</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-500 py-10 flex justify-center">
    <!-- Safari-compatible button -->
     <a href="https://forms.hackclub.com/t/nGQ96A1Lnwus">
      <button class="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-slate-700 via-orange-400 to-yellow-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none hover:scale-105 transition-transform duration-300 motion-safe:transition-transform">
          <span class="relative px-8 py-4 transition-colors bg-white cursor-pointer dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent text-3xl md:text-4xl hover:scale-105 font-bold">
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
            A <a href="https://hackclub.com" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">Hack Club</a> <a href="https://ysws.hackclub.com" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">YSWS (You Ship, We Ship)</a> where you can build a Svelte/SvelteKit website and get Svelted Rewards for your efforts!
          </p>
        </div>

        <div class="space-y-8">
        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">I'm new here, where do I get started?</h3>
          <div class="text-gray-200 text-lg leading-relaxed">
          <p class="text-gray-200 text-lg leading-relaxed">
            To particpate in Smelt, you need to take the following steps:
             </p>
            <ul class="gap-y-1 list-inside space-y-2 ml-4 list-decimal">
              <li> <a href="https://hackclub.com/slack" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">Join the Hack Club Slack Workspace.</a></li>
              <li> <a href="https://hackclub.slack.com/archives/C09535Y8E83" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">Join the #smelt channel on Slack.</a></li>
              <li> Ensure the <a href="https://hackatime.hackclub.com" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">Hackatime</a> extension is installed and running.</li>
              <li> Build your Svelte/SvelteKit website!</li>
              <li> Include an <a href="https://en.wikipedia.org/wiki/Easter_egg_(media)" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">Easter Egg</a> in your Site.</li>
              <li> Submit your site using the <a href="https://forms.hackclub.com/t/nGQ96A1Lnwus" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">Submission Form.</a></li>
            </ul>
            </div>
        </div>

        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">When does Smelt end?</h3>
          <p class="text-gray-200 text-lg leading-relaxed">
            Smelt will end on <span class="text-orange-300 font-semibold">July 31st</span>.
          </p>
        </div>

        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">I've never used Svelte before, how do I get started?</h3>
          <p class="text-gray-200 text-lg leading-relaxed">
            We recommend starting out on the official tutorials, they're very good, and they get you to code in browser! You can check them out for <a href="https://svelte.dev/tutorial/svelte/welcome-to-svelte" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">Svelte</a> and for <a href="https://svelte.dev/tutorial/kit/introducing-sveltekit" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">SvelteKit.</a>
            </p>
        </div>


        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">Any tips on how to deploy my website, and make it public?</h3>
          <p class="text-gray-200 text-lg leading-relaxed">
            We recommend using Vercel, as it provides a simple way to deploy Svelte/SvelteKit applications.
            Vercel offers a <a href="https://vercel.com/pricing" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">free (hobby) tier</a>, that's perfect for hosting your Smelt project.
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
            <p class="mb-3">Yes, you:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Must include an <span class="text-orange-200 font-semibold">Easter Egg</span> in your site</li>
              <li>Must build your site with <span class="text-orange-200 font-semibold">Svelte or SvelteKit</span></li>
              <li>Must have your site accessible via a <span class="text-orange-200 font-semibold">public URL</span></li>
              <li>Must have created your site <span class="text-orange-200 font-semibold">after July 10th, 2025</span></li>
            </ul>
          </div>
        </div>

        <div class="faq-item bg-gray-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-105 *:transition-colors">
          <h3 class="text-2xl font-semibold text-orange-300 mb-3">When will I receive my prizes?</h3>
          <p class="text-gray-200 text-lg leading-relaxed">
            Prizes will be shipped once we've reviewed your submission.
            Make sure to fill out the submission form completely with your correct shipping address, as otherwise your package might not get to you!
          </p>
        </div>

        <h3 class="text-2xl font-semibold text-orange-300 mb-3">Any further questions?</h3>
        <h4 class="text-xl font-semibold text-orange-300 indent-10">Send us an <a href="mailto:alexvd@hackclub.com" class="text-orange-400 hover:text-orange-300 hover:underline cursor-pointer font-semibold">email</a></h4>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="vanilla-tilt.min.js"></script>
  </div>
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
