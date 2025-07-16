<svelte:head>
  <!-- Safari-specific meta tags -->
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
  />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />
  <meta name="format-detection" content="telephone=no" />

  <!-- Safari font preload -->
  <link
    rel="preconnect"
    href="https://fonts.cdnfonts.com"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="https://fonts.cdnfonts.com/css/post-no-bills-jaffna"
    as="style"
  />
</svelte:head>

<body>
  <div
    id="canvascontainer"
    class="min-h-screen bg-neutral-400 flex relative items-center justify-center bg-cover bg-center bg-no-repeat"
  >
    <div
      class="absolute inset-0 bg-no-repeat bg-contain bg-left pointer-events-none z-20 hidden md:block"
      style="background-image: url('/hero/L1L.png')"
    ></div>
    <div
      class="absolute inset-0 bg-no-repeat bg-contain bg-right pointer-events-none z-20 hidden md:block"
      style="background-image: url('/hero/L1R.png')"
    ></div>
    <div
      class="absolute inset-0 bg-no-repeat bg-contain bg-left pointer-events-none z-10 hidden md:block"
      style="background-image: url('/hero/L2L.png')"
    ></div>
    <div
      class="absolute inset-0 bg-no-repeat bg-contain bg-right pointer-events-none z-10 hidden md:block"
      style="background-image: url('/hero/L2R.png')"
    ></div>
    <div
      class="absolute inset-0 bg-no-repeat bg-contain bg-left pointer-events-none hidden md:block"
      style="background-image: url('/hero/L3L.png')"
    ></div>
    <div
      class="absolute inset-0 bg-no-repeat bg-contain bg-right pointer-events-none hidden md:block"
      style={`background-image: url('/hero/L3R.png')`}
    ></div>
    <div
      class="absolute inset-0 bg-no-repeat bg-contain bg-center pointer-events-none hidden md:block"
      style="background-image: url('/hero/L3C.png')"
    ></div>
    <div
      class="absolute left-0 top-0 hover:scale-105 motion-safe:transition-transform hover:-rotate-10 drop-shadow-[0_8px_4px_rgba(218,79,41,0.5)] z-50 -translate-x-2"
    >
      <a href="https://hackclub.com"
        ><img src="/flag_left.svg" alt="Hack Club" class="h-20" /></a
      >
    </div>

    <div class="flex flex-col space-y-12 items-center z-10 relative">
      <img
        src="/coin-flat-new.svg"
        alt="Svelted Coin"
        class="size-60 md:size-80"
        style="filter: drop-shadow(0 0 20px rgba(251, 146, 60, 0.8)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.4));"
        data-tilt
        data-tilt-reset="true"
        data-tilt-scale="1.2"
        data-tilt-glare
        data-tilt-max-glare="0.6"
      />
      <div
        class="text-center bg-center bg-no-repeat bg-contain p-18 text-2xl md:text-4xl mb-24 text-yellow-900 font-medium z-50"
        style="background-image: url('/hero/L4C.png')"
        data-tilt
        data-tilt-reset="true"
        data-tilt-scale="1.1"
      >
        <p>Smelt - A Hack Club YSWS</p>
        <p class="text-orange-700">Ends July 31</p>
      </div>
    </div>
    <img
      src="/S1.png"
      alt=""
      aria-hidden="true"
      class="absolute w-full bottom-0 z-50 translate-y-[50%] pointer-events-none"
    />
  </div>
  <div
    class="bg-neutral-400 flex flex-col items-center bg-no-repeat bg-contain"
  >
    <div
      class="w-full max-w-6xl relative min-h-[50rem] flex items-center justify-center -mt-10 pb-10"
    >
      <div
        class="absolute left-0 bottom-0 h-[40rem] right-0 bg-no-repeat bg-contain bg-left pointer-events-none z-20 translate-y-[5.5rem] -translate-x-[10rem] hidden md:block"
        style="background-image: url('/2L.png')"
      ></div>
      <div
        class="absolute left-0 bottom-0 h-[40rem] right-0 bg-no-repeat bg-contain bg-right pointer-events-none z-20 translate-y-[5rem] hidden md:block"
        style="background-image: url('/2R.png')"
      ></div>
      <div class="md:w-[20%]"></div>
      <div
        class="text-xl md:text-4xl text-neutral-700 text-right pt-20 flex flex-col space-y-7"
      >
        <div class="flex space-x-4 items-center">
          <p
            class="border-3 border-neutral-700 flex items-center justify-center size-10 md:size-14 rounded-full"
          >
            1
          </p>
          <p>
            Build a website with <span class="text-orange-700 hover:underline"><a href="https://svelte.dev">Svelte</a></span> or
            <span class="text-orange-700 hover:underline"><a href="https://kit.svelte.dev">SvelteKit</a></span>
          </p>
        </div>
        <div class="flex space-x-4 items-center">
          <p
            class="border-3 border-neutral-700 flex items-center justify-center size-10 md:size-14 rounded-full"
          >
            2
          </p>
          <p>
            Add a secret <span class="text-orange-700"><a href="https://hc-cdn.hel1.your-objectstorage.com/s/v3/138cdfc4d8700edf08b30f61138cc82c39fe5e97_1498dc64062685.5ac5abaa81fad.gif" class="cursor-text">easter egg</a></span> to your
            site
          </p>
        </div>
        <div class="flex space-x-4 items-center">
          <p
            class="border-3 border-neutral-700 flex items-center justify-center size-10 md:size-14 rounded-full"
          >
            3
          </p>
          <p>
            <span class="text-orange-700">Ship</span> your website
          </p>
        </div>
        <div class="flex space-x-4 items-center">
          <p
            class="border-3 border-neutral-700 flex items-center justify-center size-10 md:size-14 rounded-full"
          >
            4
          </p>
          <p>
            Redeem your hours for <span class="text-orange-700"
              >awesome swag</span
            >
          </p>
        </div>
        <div class="flex justify-center items-center mt-6">
         <a href="https://forms.hackclub.com/t/nGQ96A1Lnwus">
      <button class="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-500 to-orange-900 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none hover:scale-105 transition-transform duration-300 motion-safe:transition-transform">
          <span class="relative px-28 py-4 transition-colors bg-neutral cursor-pointer dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent text-3xl md:text-4xl hover:scale-105 font-bold">
          Submit Here!
          </span>
      </button>
    </a>
    </div>
      </div>
    </div>
    <div class="bottom-0 h-15 bg-neutral-700 z-20 w-screen"></div>
  </div>
  <div
    class="bg-neutral-700 justify-center text-2xl md:text-5xl text-neutral-300 flex flex-col items-center"
  >
    <p>The awesome swag!!</p>
    <p class="text-base md:text-xl">(to be revealed soon)</p>
    <div
      class="w-full bg-no-repeat h-[22rem] md:h-[52rem] bg-cover bg-center"
      style="background-image: url('/WS.png')"
    ></div>
  </div>
  <div>
    <!-- This will be a Carousel Showing Submissions -->
  </div>
  <div id="faqs" class="bg-neutral-700 py-16 px-8">
    <div class="max-w-4xl mx-auto">
      <h2
        class="text-3xl md:text-5xl font-bold text-orange-400 text-center mb-12"
      >
        FAQ
      </h2>

      <div class="space-y-8">
        <div
          class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
        >
          <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
            What is Smelt?
          </h3>
          <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
            A <a
              href="https://hackclub.com"
              class="text-orange-400 hover:underline cursor-pointer font-semibold"
              >Hack Club</a
            >
            <a
              href="https://ysws.hackclub.com"
              class="text-orange-400 hover:underline cursor-pointer font-semibold"
              >YSWS (You Ship, We Ship)</a
            > where you can build a Svelte/SvelteKit website and get Svelted Rewards
            for your efforts!
          </p>
        </div>

        <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              What are the prizes again?
            </h3>
            <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              The prizes for participating in Smelt are:
            </p>
            <ul class="list-disc list-inside ml-4 text-white">
              <li>
                1hr - Stickers
              </li>
                <li>
                  3hrs - Svelted Coin
                </li>
                <li>
                  5hrs - Svelted USB Stick
                </li>
                <li>
                  7hrs - Svelted Pin
                </li>
                <li>
                  12hrs - Svelted Mousepad
                </li>
                <li>
                  16hrs - Svelted T-Shirt
                </li>
              </ul>
          
          </div>

        <div class="space-y-8">
          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              I'm new here, where do I get started?
            </h3>
            <div class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
                To particpate in Smelt, you need to take the following steps:
              </p>
              <ul class="gap-y-1 list-inside space-y-2 ml-4 list-decimal">
                <li>
                  <a
                    href="https://hackclub.com/slack"
                    class="text-orange-400 hover:underline cursor-pointer font-semibold"
                    >Join the Hack Club Slack Workspace.</a
                  >
                </li>
                <li>
                  <a
                    href="https://hackclub.slack.com/archives/C09535Y8E83"
                    class="text-orange-400 hover:underline cursor-pointer font-semibold"
                    >Join the #smelt channel on Slack.</a
                  >
                </li>
                <li>
                  Ensure the <a
                    href="https://hackatime.hackclub.com"
                    class="text-orange-400 hover:underline cursor-pointer font-semibold"
                    >Hackatime</a
                  > extension is installed and running.
                </li>
                <li>
                  Build your <a
                    href="https://svelte.dev"
                    class="text-orange-400 hover:underline cursor-pointer font-semibold"
                    >Svelte/SvelteKit</a
                  > website!
                </li>
                <li>
                  Include an <a
                    href="https://en.wikipedia.org/wiki/Easter_egg_(media)"
                    class="text-orange-400 hover:underline cursor-pointer font-semibold"
                    >Easter Egg</a
                  > in your Site.
                </li>
                <li>
                  Submit your site using the <a
                    href="https://forms.hackclub.com/t/nGQ96A1Lnwus"
                    class="text-orange-400 hover:underline cursor-pointer font-semibold"
                    >Submission Form.</a
                  >
                </li>
              </ul>
            </div>
          </div>

      

          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              I've never used Svelte before, how do I get started?
            </h3>
            <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              We recommend starting out on the official tutorials, they're very
              good, and they get you to code in browser! You can check them out
              for <a
                href="https://svelte.dev/tutorial/svelte/welcome-to-svelte"
                class="text-orange-400 hover:underline cursor-pointer font-semibold"
                >Svelte</a
              >
              and for
              <a
                href="https://svelte.dev/tutorial/kit/introducing-sveltekit"
                class="text-orange-400 hover:underline cursor-pointer font-semibold"
                >SvelteKit.</a
              >
            </p>
          </div>

          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              Any tips on how to deploy my website, and make it public?
            </h3>
            <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              We recommend using Vercel, as it provides a simple way to deploy
              Svelte/SvelteKit applications. Vercel offers a <a
                href="https://vercel.com/pricing"
                class="text-orange-400 hover:underline cursor-pointer font-semibold"
                >free (hobby) tier</a
              >, that's perfect for hosting your Smelt project.
            </p>
          </div>

          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              What is <a
                href="https://svelte.dev/docs/svelte/overview"
                class="cursor-pointer hover:underline">Svelte</a
              >
              and
              <a
                href="https://svelte.dev/docs/kit/introduction"
                class="cursor-pointer hover:underline">SvelteKit</a
              >?
            </h3>
            <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              <span class="font-semibold text-orange-400"
                ><a
                  href="https://svelte.dev/docs/svelte/overview"
                  class="cursor-pointer hover:underline">Svelte</a
                ></span
              >
              is a modern JavaScript framework for building user interfaces that
              compiles your code to vanilla JavaScript.
              <span class="font-semibold text-orange-400"
                ><a
                  href="https://svelte.dev/docs/kit/introduction"
                  class="cursor-pointer hover:underline">SvelteKit</a
                ></span
              > is a framework built on top of Svelte that adds features like routing,
              server-side rendering, and file-based routing to help you build full-stack
              applications.
            </p>
          </div>

          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              When does Smelt end?
            </h3>
            <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              Smelt will end on <span class="text-orange-400 font-semibold"
                >July 31st</span
              >.
            </p>
          </div>

          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              How do you track my hours?
            </h3>
            <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              We track your hours through <a
                href="https://hackatime.hackclub.com"
                class="text-orange-400 hover:underline cursor-pointer font-semibold"
                >Hackatime</a
              >, an extension we made that automatically tracks your development
              time. Just install it, connect your account, and start coding!
              Your hours will be automatically logged and counted towards your
              progress. However, do note that in our review process, we will
              check your commit history to ensure that your hours logged are
              representative of your work.
            </p>
          </div>

          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              Are there any limitations on what I can submit?
            </h3>
            <div class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              <p class="mb-3">Yes, you:</p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>
                  Must include an <span class="text-orange-400 font-semibold"
                    >Easter Egg</span
                  > in your site
                </li>
                <li>
                  Must build your site with <span
                    class="text-orange-400 font-semibold"
                    >Svelte or SvelteKit</span
                  >
                </li>
                <li>
                  Your site must be <span class="text-orange-400 font-semibold"
                    >open sourced</span
                  > on GitHub
                </li>
                <li>
                  Must have your site accessible via a <span
                    class="text-orange-400 font-semibold">public URL</span
                  >
                </li>
                <li>
                  Must have started work on your site <span
                    class="text-orange-400 font-semibold"
                    >after July 10th, 2025</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              When will I receive my prizes?
            </h3>
            <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              Prizes will be shipped once we've reviewed your submission. Make
              sure to fill out the submission form completely with your correct
              shipping address, as otherwise your package might not get to you!
            </p>
          </div>
          <div
            class="faq-item bg-neutral-800 rounded-lg p-6 border-l-4 duration-100 border-orange-400 hover:scale-[102%] *:transition-colors"
          >
            <h3 class="text-lg md:text-2xl font-semibold text-orange-400 mb-3">
              My question wasn't answered!
            </h3>
            <p class="text-neutral-200 text-sm md:text-lg leading-relaxed">
              Feel free to ask us anything in the <a
                href="https://hackclub.slack.com/archives/C09535Y8E83"
                class="text-orange-400 hover:underline cursor-pointer font-semibold"
                >#smelt</a
              > channel on Slack! We're here to help!
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center mt-6">
         <a href="https://forms.hackclub.com/t/nGQ96A1Lnwus">
      <button class="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-500 to-orange-900 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none hover:scale-105 transition-transform duration-300 motion-safe:transition-transform">
          <span class="relative px-28 py-4 transition-colors bg-neutral cursor-pointer dark:bg-neutral-800 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent text-3xl md:text-4xl hover:scale-105 font-bold">
          Submit Your Site Now!
          </span>
      </button>
    </a>
    </div>
    </div>
    <script type="text/javascript" src="vanilla-tilt.min.js"></script>
  </div>
</body>

<footer class="bg-neutral-700 py-10">
  <p class="text-white text-center">
    Made with <span class="inline-block hover:animate-bounce cursor-pointer"
      >❤️</span
    >
    by Hack Club's
    <a
      href="https://github.com/vandorena"
      class="text-orange-400 hover:underline cursor-pointer">Alex Van Doren</a
    >
    and
    <a
      href="https://github.com/samdev-7"
      class="text-orange-400 hover:underline cursor-pointer">Sam Liu</a
    >
  </p>
</footer>