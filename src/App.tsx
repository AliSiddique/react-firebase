
export default function Home() {
  return (
    <>
<section className="bg-regent-500 overflow-hidden relative border-b border-black/5">
  <div className="w-full mx-auto max-w-7xl relative">
    <div
      className="relative flex flex-col w-full p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-16">
      <div
        className="flex flex-row items-center justify-between text-regent-900 text-sm lg:justify-start">
        <a href="/">
          <div className="text-xl inline-flex items-center">
            <span>
              {/* <svg
                className="w-6 h-6"
                viewBox="0 0 147 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                  fill="currentColor"></path>
                <path
                  d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M147 70.0938H0V77.2021H147V70.0938Z"
                  fill="currentColor"></path>
                <path
                  d="M147 70.0938H0V77.2021H147V70.0938Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                  fill="currentColor"></path>
                <path
                  d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                  fill="currentColor"></path>
                <path
                  d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                  fill="currentColor"></path>
                <path
                  d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                  fill="currentColor"></path>
                <path
                  d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                  fill="currentColor"></path>
                <path
                  d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                  fill="currentColor"></path>
                <path
                  d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
              </svg> */}
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-full h-10 w-10' />
            </span>
            <span className="ml-3">Remoteview</span>
          </div>
        </a>
        <button
          className="inline-flex items-center justify-center p-2 text-regent-900 hover:text-regent-900 focus:outline-none focus:text-regent-900 md:hidden">
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              className="inline-flex"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
            <path
              className="hidden"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav
        className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
        <a
          className="px-2 lg:px-6 py-2 md:px-3 text-sm text-regent-900 font-medium hover:text-regent-900/70 lg:ml-auto"
          href="/">Home</a>
        <a
          className="px-2 lg:px-6 py-2 md:px-3 text-sm text-regent-900 font-medium hover:text-regent-900/70"
          href="/style-guide">
          Pricing</a>
          <a
          className="px-2 lg:px-6 py-2 md:px-3 text-sm text-regent-900 font-medium hover:text-regent-900/70"
          href="/style-guide">
          Contact</a>

        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
          <a
            href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/e2d91f04-5944-495e-a679-b3df5c08b196"
            className="inline-flex items-center justify-center px-4 py-2 text-sm text-regent-900 bg-regent-300 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white/5 active:bg-fuchsia-50 active:text-[#0c1824] focus-visible:outline-fuchsia-50">
            Login
          </a>
        </div>
      </nav>
    </div>
  </div>
</section>
<section className="overflow-hidden bg-regent-500">
  <div>
    <div
      className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-36">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-32">
        <div className="text-left">
          <div>
            <p
              className="text-4xl lg:text-7xl tracking-tighter font-medium text-regent-900">
              Revolutionize your coding experience
            </p>
            <p className="max-w-xl mt-4 text-lg text-regent-900/80">
              Say goodbye to endless hours of frustration and hello to a
              seamless, intuitive platform designed to boost your productivity
              and efficiency.
            </p>
          </div>
          <div className="flex mt-10 w-full">
            <a
              className="inline-flex items-center lg:text-xl justify-center w-auto lg:px-12 px-6 py-4 text-center text-regent-900 duration-200 bg-white font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-white focus:ring-regent-900 ring-offset-2 hover:bg-regent-900"
              href="/">See all pages</a>
          </div>
        </div>

        <div className="w-full mx-auto max-w-7xl">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="747"
            height="490"
            className="lg:absolute drop-shadow-regent-900"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="pb-12">
  <section>
  <div
    className="max-w-7xl px-8 md:px-12 lg:px-24 mx-auto py-12 lg:py-24 justify-center">
    <div className="text-center justify-center lg:justify-start">
      <span
        className="text-base items-center inline-flex uppercase tracking-wide font-medium text-white">
        Our beloved customers</span >
    </div>
    <div
      className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="/logos/basecamp.svg"
        alt=" logo"
        width="158"
        height="48"
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="/logos/dribbble.svg"
        alt=" logo"
        width="158"
        height="48"
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        src="/logos/stripe.svg"
        alt=" logo"
        width="158"
        height="48"
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        src="/logos/pipe.svg"
        alt=" logo"
        width="158"
        height="48"
      />
      <img
        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        src="/logos/github.svg"
        alt=" logo"
        width="158"
        height="48"
      />
    </div>
  </div>
</section>

  </div>



</section>
<section>
  <div
    className="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-32">
    <div>
      <span
        className="text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
        Interface
      </span>
      <p className="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
        With our user-friendly interface, you can easily create and manage your
        projects, collaborate with your team, and streamline your workflow. Sign
        up today and experience the future of coding with our SaaS programming
        product."
      </p>
    </div>
  </div>
  <div
    className="flex flex-col -mb-px lg:grid-cols-2 justify-between lg:grid items-start mt-24">
    <div className="grid lg:grid-cols-1 gap-12 items-start p-8 md:px-12 lg:px-32">
      <div>
        <p className="text-regent-600 text-lg text-medium font-mono">01</p>
        <p className="text-regent-900 mt-8 font-medium text-xl">
          Advanced email analytics
        </p>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Gain deep insights into your email campaigns with our advanced
          analytics suite.
        </p>
      </div>
      <div>
        <p className="text-regent-600 text-lg text-medium font-mono">02</p>
        <p className="text-regent-900 mt-8 font-medium text-xl">
          Personalized email automation
        </p>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Save time and boost engagement with our powerful personalized email
          automation feature.
        </p>
      </div>
      <div>
        <p className="text-regent-600 text-lg text-medium font-mono">03</p>
        <p className="text-regent-900 mt-8 font-medium text-xl">
          Drag-and-drop email composer
        </p>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Create stunning email campaigns effortlessly using our intuitive
          drag-and-drop email composer.
        </p>
      </div>
    </div>
    <div className="bg-regent-500 p-8 md:px-12 lg:px-32 h-full">
      <img alt="" src="/images/ui1.png" className="w-full h-full" />
    </div>
  </div>
</section>
<section>
  <div
    className="items-center w-full px-8 pt-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
      <div>
        <span
          className="text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
          Discover
        </span>
        <p className="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
          Discover what Snowpeak includes and what is made.
        </p>
      </div>
      <div>
        <p className="text-slate-500 text-lg lg:text-xl tracking-wide">
          With our user-friendly interface, you can easily create and manage
          your projects, collaborate with your team, and streamline your
          workflow.
        </p>
      </div>
    </div>
  </div>
  <div className="mx-auto mt-24 pb-12 lg:pb-32">
    <div className="flex flex-col -mb-px gap-12 items-stretch">
      <div
        className="grid gap-12 lg:grid-cols-3 items-center w-full px-8 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div>
          <p className="text-regent-600 text-lg text-medium font-mono">01</p>
          <p className="text-regent-900 mt-8 font-medium text-xl">
            Advanced email analytics
          </p>
          <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
            Gain deep insights into your email campaigns with our advanced
            analytics suite.
          </p>
        </div>
        <div>
          <p className="text-regent-600 text-lg text-medium font-mono">02</p>
          <p className="text-regent-900 mt-8 font-medium text-xl">
            Personalized email automation
          </p>
          <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
            Save time and boost engagement with our powerful personalized email
            automation feature.
          </p>
        </div>
        <div>
          <p className="text-regent-600 text-lg text-medium font-mono">03</p>
          <p className="text-regent-900 mt-8 font-medium text-xl">
            Drag-and-drop email composer
          </p>
          <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
            Create stunning email campaigns effortlessly using our intuitive
            drag-and-drop email composer.
          </p>
        </div>
      </div>
      <div className="relative hidden lg:block overflow-hidden">
        <div className="overflow-hidden w-full bg-lila-500">
          <img alt="" src="/images/ui6.png" className="w-full" />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative overflow-hidden">
  <div
    className="items-center w-full px-8 pt-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-32">
    <div>
      <span
        className="text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
        demo pages
      </span>
      <p className="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
        Discover what Snowpeak includes and what is made of, you will find a ton
        of demo pages and components.
      </p>
    </div>
  </div>
  <div className="mt-24">
    <div className="grid gap-12 lg:gap-0 lg:grid-cols-2 items-center">
      <section className="relative md:px-12 lg:px-32 px-8">
        <div className="overflow-hidden">
          <div className="text-left">
            <div>
              <p
                className="text-2xl font-normal tracking-tight lg:text-4xl text-regent-900 mt-12 lg:mt-0">
                Protecting your data with cutting-edge security
              </p>
              <p className="max-w-xl mt-4 text-lg text-regent-900/80">
                Whether you're a beginner or an experienced programmer, our SaaS
                product offers the tools you need to be successful.
              </p>
            </div>
            <div className="mt-10">
              <a
                className="inline-flex items-center lg:text-xl justify-center w-full px-6 py-4 text-center text-yellow-900 duration-200 bg-yellow-500 font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ring-offset-2 hover:bg-yellow-100 lg:w-auto"
                href="/">Explore all pages</a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-regent-500 overflow-hidden">
        <div className="overflow-hidden h-full">
          <img alt="" src="/images/ui9.png" className="w-full" />
        </div>
      </section>
    </div>
    <div className="grid gap-12 lg:gap-0 lg:grid-cols-2 items-center">
      <section className="relative md:px-12 lg:px-32 px-8 lg:order-last">
        <div className="overflow-hidden">
          <div className="text-left">
            <div>
              <p
                className="text-2xl font-normal tracking-tight lg:text-4xl text-regent-900 mt-12 lg:mt-0">
                Advanced tools for every developer
              </p>
              <p className="max-w-xl mt-4 text-lg text-regent-900/80">
                Whether you're a beginner or an experienced programmer, our SaaS
                product offers the tools you need to be successful.
              </p>
            </div>
            <ul className="list-none mt-10" role="list">
              <li>
                <div className="relative flex items-start py-2">
                  <p className="text-regent-900/80 text-sm leading-6">
                    <strong className="font-medium text-regent-900"
                      >The future of coding is here</strong> — in your dreams.
                  </p>
                </div>
              </li><li>
                <div className="relative flex items-start py-2">
                  <p className="text-regent-900/80 text-sm leading-6">
                    <strong className="font-medium text-regent-900"
                      >Improved collaboration for faster results
                    </strong>— ain't no big deal.
                  </p>
                </div>
              </li><li>
                <div className="relative flex items-start py-2">
                  <p className="text-regent-900/80 text-sm leading-6">
                    <strong className="font-medium text-regent-900"
                      >The most affordable coding solution</strong> — Collaboration is key.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative bg-yellow-300 overflow-hidden">
        <div className="overflow-hidden h-full">
          <img alt="" src="/images/ui10.png" className="w-full" />
        </div>
      </section>
    </div>
    <div className="grid gap-12 lg:gap-0 lg:grid-cols-2 items-center">
      <section className="relative md:px-12 lg:px-32 px-8">
        <div className="overflow-hidden">
          <div className="text-left">
            <div>
              <p
                className="text-2xl font-normal tracking-tight lg:text-4xl text-regent-900 mt-12 lg:mt-0">
                Improved Collaboration for Faster Results
              </p>
              <p className="max-w-xl mt-4 text-lg text-regent-900/80">
                Collaboration is key to successful programming, and our SaaS
                product makes it easy to work with others.
              </p>
            </div>
            <ul className="list-none mt-10" role="list">
              <li>
                <div className="relative flex items-start py-2">
                  <p className="text-regent-900/80 text-sm leading-6">
                    <strong className="font-medium text-regent-900"
                      >The future of coding is here</strong> — in your dreams.
                  </p>
                </div>
              </li><li>
                <div className="relative flex items-start py-2">
                  <p className="text-regent-900/80 text-sm leading-6">
                    <strong className="font-medium text-regent-900"
                      >Improved collaboration for faster results
                    </strong>— ain't no big deal.
                  </p>
                </div>
              </li><li>
                <div className="relative flex items-start py-2">
                  <p className="text-regent-900/80 text-sm leading-6">
                    <strong className="font-medium text-regent-900"
                      >The most affordable coding solution</strong> — Collaboration is key.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative bg-lila-500 overflow-hidden">
        <div className="overflow-hidden h-full">
          <img alt="" src="/images/ui11.png" className="w-full" />
        </div>
      </section>
    </div>
    <div className="grid gap-12 lg:gap-0 lg:grid-cols-2 items-center">
      <section className="relative md:px-12 lg:px-32 px-8 lg:order-last">
        <div className="overflow-hidden">
          <div className="text-left">
            <div>
              <p
                className="text-2xl font-normal tracking-tight lg:text-4xl text-regent-900 mt-12 lg:mt-0">
                The most affordable coding solution
              </p>
              <p className="max-w-xl mt-4 text-lg text-regent-900/80">
                Our SaaS programming product offers a powerful platform that
                makes coding easier, faster and more efficient.
              </p>
            </div>
            <div className="mt-10">
              <a
                className="inline-flex items-center lg:text-xl justify-center w-full px-6 py-4 text-center text-regent-900 duration-200 bg-regent-500 font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regent-500 ring-offset-2 hover:bg-regent-100 lg:w-auto"
                href="/">Explore all pages</a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-yellow-500 overflow-hidden">
        <div className="overflow-hidden h-full">
          <img alt="" src="/images/ui12.png" className="w-full" />
        </div>
      </section>
    </div>
  </div>
</section>
<section>
  <div
    className="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-32">
    <div>
      <p
        className="text-2xl font-normal tracking-tight lg:text-4xl text-regent-900">
        So much love everywhere
      </p>
    </div>
    <ul
      className="grid grid-cols-1 lg:mt-24 mt-12 lg:grid-cols-3 list-none"
      role="list">
      <li className="p-4 lg:p-8 h-full bg-slate-50">
        <p className="text-regent-900/80 text-lg lg:text-xl tracking-wide">
          I absolutely love Snowpeak! The quality of their products is unmatched
          and I always feel confident when I use them on my outdoor adventures.
          The customer service is top-notch and I never have to worry about
          anything. Thanks Snowpeak!
        </p>
        <div className="group block flex-shrink-0 mt-6">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://phanatik.lexingtonthemes.com/a.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p
                className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Kev SMith
              </p>
              <p
                className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                CEO of Adventure.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li
        className="p-4 lg:p-8 flex w-full flex-col h-full items-start flex-1 justify-between">
        <p className="text-regent-900/80 text-lg lg:text-xl tracking-wide">
          Snowpeak has completely changed my camping experience for the better.
          Their gear is durable, reliable, and makes every trip so much more
          enjoyable. I can't imagine going back to my old gear. Thanks Snowpeak!
        </p>
        <div className="group block flex-shrink-0 mt-6">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://phanatik.lexingtonthemes.com/a.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p
                className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                David Johnson
              </p>
              <p
                className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                Owner of Camping Adventures Inc.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="p-4 lg:p-8 h-full bg-slate-50">
        <p className="text-regent-900/80 text-lg lg:text-xl tracking-wide">
          I've been a fan of Snowpeak for years and their products have never
          let me down. The design and functionality of their gear is
          unparalleled and I always recommend them to my friends. Keep up the
          great work Snowpeak!
        </p>
        <div className="group block flex-shrink-0 mt-6">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://phanatik.lexingtonthemes.com/a.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p
                className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Emily Davis
              </p>
              <p
                className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                Director of Outdoor Ventures LLC.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li
        className="p-4 lg:p-8 flex w-full flex-col h-full items-start flex-1 justify-between">
        <p className="text-regent-900/80 text-lg lg:text-xl tracking-wide">
          Snowpeak's attention to detail is what sets them apart from the rest.
          Their gear is always well thought out and makes my time in the great
          outdoors so much more enjoyable. Thank you Snowpeak!
        </p>
        <div className="group block flex-shrink-0 mt-6">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://phanatik.lexingtonthemes.com/a.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p
                className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Michael Brown
              </p>
              <p
                className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                CEO of Nature Lovers Inc.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li className="p-4 lg:p-8 h-full bg-slate-50">
        <p className="text-regent-900/80 text-lg lg:text-xl tracking-wide">
          I've tried a lot of different outdoor gear brands over the years, but
          Snowpeak is by far my favorite. The quality and performance of their
          products is impressive and I love the peace of mind that comes with
          using them. Thanks Snowpeak!
        </p>
        <div className="group block flex-shrink-0 mt-6">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://phanatik.lexingtonthemes.com/a.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p
                className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Sarah Miller
              </p>
              <p
                className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                President of Adventure Tours Inc.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li
        className="p-4 lg:p-8 flex w-full flex-col h-full items-start flex-1 justify-between">
        <p className="text-regent-900/80 text-lg lg:text-xl tracking-wide">
          I never knew camping could be this comfortable until I started using
          Snowpeak gear. Their products are well made and always deliver. I'm a
          customer for life!
        </p>
        <div className="group block flex-shrink-0 mt-6">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://phanatik.lexingtonthemes.com/a.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p
                className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                John Smith
              </p>
              <p
                className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                CEO of Camping Supply Co.
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
<section className="overflow-hidden bg-regent-500">
  <div
    className="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl lg:pt-36 lg:pb-0">
    <div className="max-w-6xl text-center">
      <span
        className="text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-900">
        Accessible pricing
      </span>
      <p
        className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-tighter font-medium text-regent-900">
        Equip your business <span className="block">with world className software</span>
      </p><p className="max-w-xl mt-4 text-lg text-regent-900/80 mx-auto">
        We help sales teams increase their outbound with scalable and high
        quality customized emails for every prospect.
      </p>
    </div>
  </div>
  <div className="mt-12 overflow-hidden pt-12">
    <div className="grid lg:grid-cols-2">
      <div className="md:p-12 lg:p-24 p-8 h-full bg-white">
        <div className="flex-col flex text-center h-full flex-1 justify-between">
          <div>
            <div className="">
              <h3
                className="text-lg text-regent-900 lg:text-2xl font-medium uppercase tracking-wide">
                Monthly
              </h3>
              <p className="py-12">
                <span className="text-lg text-regent-900 lg:text-6xl">$1,999/m</span>
              </p>
            </div>
            <p className="mt-2 text-base text-slate-500">
              50% off for the 3 first clients!
            </p>

            <div className="mt-8 lg:px-20 text-left">
              <ul
                className="text-xl space-y-3 flex flex-col gap-y-3 text-regent-900"
                role="list">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Limited number of users (up to 5)</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Limited storage (1 GB)</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Basic support (email only)</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Basic analytics</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Limited integrations</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-8">
            <a
              className="inline-flex items-center lg:text-xl justify-center w-full px-6 py-4 text-center text-regent-900 duration-200 bg-regent-500 font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regent-500 ring-offset-2 hover:bg-regent-100"
              href="#">Get started</a>
          </div>
        </div>
      </div>
      <div className="md:p-12 lg:p-24 p-8 h-full bg-regent-500">
        <div className="flex flex-col text-center h-full flex-1 justify-between">
          <div>
            <div className="">
              <h3
                className="text-lg text-regent-900 lg:text-2xl font-medium uppercase tracking-wide">
                Anual
              </h3>
              <p className="py-12">
                <span className="text-lg text-regent-900 lg:text-6xl">$999/m</span>
              </p>
            </div>
            <p className="mt-2 text-base text-regent-900">Save $300 per month.</p>

            <div className="mt-8 lg:px-20 text-left">
              <ul
                className="text-xl space-y-3 flex flex-col gap-y-3 text-regent-900"
                role="list">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Unlimited number of users</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Unlimited storage</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Advanced support</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Advanced analytics</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Multiple integrations</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">Advanced customization options</span>
                </li><li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-regent-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    stroke-width="1.5"
                    ><path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path></svg>
                  <span className="ml-4">99.9% SLA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-8">
            <a
              className="inline-flex items-center lg:text-xl justify-center w-full px-6 py-4 text-center text-regent-900 duration-200 bg-white font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-white focus:ring-regent-900 ring-offset-2 hover:bg-regent-900"
              href="#">Get started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div
    className="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-32">
    <div>
      <span
        className="w-auto text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
        <svg
          className="w-6 h-6"
          viewBox="0 0 147 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
            fill="currentColor"></path>
          <path
            d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
            fill="currentColor"
            fill-opacity="0.2"></path>
          <path d="M147 70.0938H0V77.2021H147V70.0938Z" fill="currentColor"
          ></path>
          <path
            d="M147 70.0938H0V77.2021H147V70.0938Z"
            fill="currentColor"
            fill-opacity="0.2"></path>
          <path
            d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
            fill="currentColor"></path>
          <path
            d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
            fill="currentColor"
            fill-opacity="0.2"></path>
          <path
            d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
            fill="currentColor"></path>
          <path
            d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
            fill="currentColor"
            fill-opacity="0.2"></path>
          <path
            d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
            fill="currentColor"></path>
          <path
            d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
            fill="currentColor"
            fill-opacity="0.2"></path>
          <path
            d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
            fill="currentColor"></path>
          <path
            d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
            fill="currentColor"
            fill-opacity="0.2"></path>
          <path
            d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
            fill="currentColor"></path>
          <path
            d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
            fill="currentColor"
            fill-opacity="0.2"></path>
          <path
            d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
            fill="currentColor"></path>
          <path
            d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
            fill="currentColor"
            fill-opacity="0.2"></path>
        </svg>
        <span className="ml-4">FAQ 1</span>
      </span>
      <p className="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
        We understand that choosing the right email service provider is
        essential for your business or personal needs, and we're here to address
        any uncertainties you may have.
      </p>
    </div>
    <ul
      role="list"
      className="grid grid-cols-1 lg:mt-24 mt-12 gap-6 lg:gap-12 lg:grid-cols-3 list-none">
      <li>
        <h3 className="text-regent-900 mt-8 font-medium text-xl">
          How do I sign up for your email service?
        </h3>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Signing up for our email service is quick and easy! Simply visit our
          website and click on the "Sign Up" button. Fill in the required
          information, choose your subscription plan, and you'll be ready to
          start sending emails in no time.
        </p>
      </li>
      <li>
        <h3 className="text-regent-900 mt-8 font-medium text-xl">
          Can I import my existing email list into your platform?
        </h3>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Yes, absolutely! We understand the importance of your existing
          contacts. Our platform allows you to seamlessly import your email
          lists in various formats, such as CSV or Excel. You can then organize
          your contacts into different segments for targeted campaigns.
        </p>
      </li>
      <li>
        <h3 className="text-regent-900 mt-8 font-medium text-xl">
          Is my data and email content secure with your service?
        </h3>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Your data security is our top priority. We employ industry-standard
          encryption protocols to safeguard your information and ensure your
          email content remains confidential. Rest assured that your data is
          stored securely on our servers and will never be shared with third
          parties.
        </p>
      </li>

      <li>
        <h3 className="text-regent-900 mt-8 font-medium text-xl">
          Can I schedule emails to be sent at a later time?
        </h3>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Yes, you can schedule your emails to be sent at a specific date and
          time that best suits your audience's preferences. Our intuitive email
          scheduler allows you to plan your campaigns in advance, ensuring
          timely delivery to maximize engagement.
        </p>
      </li>
      <li>
        <h3 className="text-regent-900 mt-8 font-medium text-xl">
          Does your platform support email automation?
        </h3>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Absolutely! Our platform offers robust email automation capabilities.
          You can set up automated email sequences based on triggers like user
          behavior, time-based events, or specific interactions. Automating your
          emails streamlines your marketing efforts and ensures personalized
          communication with your subscribers.
        </p>
      </li>
      <li>
        <h3 className="text-regent-900 mt-8 font-medium text-xl">
          What kind of customer support do you provide?
        </h3>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          We take customer support seriously and are here to help you every step
          of the way. Our dedicated support team is available via email and live
          chat during business hours. Whether you have technical questions, need
          assistance with campaign optimization, or want general guidance, we're
          here to provide prompt and helpful support.
        </p>
      </li>
    </ul>
  </div>
</section>
<section>
  <div
    className="items-center w-full px-8 pt-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py32">
    <div className="mx-auto text-center max-w-4xl">
      <div>
        <p
          className="text-2xl font-normal tracking-tight lg:text-4xl text-regent-900">
          Ready to supercharge your email campaigns?
        </p>
      </div>
      <div>
        <p className="text-slate-500 text-lg lg:text-xl tracking-wide">
          Sign up today and unlock the full potential of our Email Services!
        </p>
        <div className="mt-10">
          <a
            className="inline-flex items-center lg:text-xl justify-center w-full px-6 py-4 text-center text-regent-900 duration-200 bg-regent-500 font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regent-500 ring-offset-2 hover:bg-regent-100 md:w-auto"
            href="/">Get started today</a>
        </div>
      </div>
    </div>
    <div className="w-full mx-auto max-w-7xl mt-12">
      <img
        src="/images/device2.png"
        width="747"
        height="490"
        className="drop-shadow-regent-900 w-full"
      />
    </div>
  </div>
</section>
<footer className="bg-white">
  <div
    className="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-32">
    <div className="xl:gap-8 xl:grid xl:grid-cols-3">
      <div className="text-regent-900 xl:col-span-3">
        <div className="lg:inline-flex lg:items-center justify-between w-full">
          <div>
            <a href="/">
              <div className="text-xl inline-flex items-center font-medium">
                <span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 147 148"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                      fill="currentColor"></path>
                    <path
                      d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M147 70.0938H0V77.2021H147V70.0938Z"
                      fill="currentColor"></path>
                    <path
                      d="M147 70.0938H0V77.2021H147V70.0938Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                      fill="currentColor"></path>
                    <path
                      d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                      fill="currentColor"></path>
                    <path
                      d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                      fill="currentColor"></path>
                    <path
                      d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                      fill="currentColor"></path>
                    <path
                      d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                      fill="currentColor"></path>
                    <path
                      d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                      fill="currentColor"></path>
                    <path
                      d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                  </svg>
                </span>
                <span className="ml-3">Snowpeak</span>
              </div>
            </a>
            <p className="mt-6">
              <span className="text-slate-500 mt-6 text-base tracking-wide"
                >The latest nonsense news, articles, and resources, sent to your
                spam-box daily.
              </span>
            </p>
          </div>
          <form className="mt-4 flex max-w-xl flex-col items-center">
            <div className="mt-3 flex w-full flex-col gap-1 sm:flex-row">
              <input
                name="email"
                type="email"
                className="lg:px-12 px-6 py-4 bg-white placeholder-slate-400 border border-slate-300 duration-200 focus:outline-none focus:ring focus:ring-regent-100 focus:border-regent-300 w-full rounded-full"
                placeholder="Enter your email..."
                required/>
                <button
                type="button"
                className="inline-flex items-center justify-center w-auto lg:px-12 px-6 py-4 text-center text-regent-900 duration-200 bg-regent-500 font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-white focus:ring-regent-900 ring-offset-2 hover:bg-regent-900"
                ><div style={{position:"relative"}}></div>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 xl:col-span-3 border-t pt-12">
        <div className="md:gap-8 md:grid md:grid-cols-2">
          <div>
            <h3 className="text-regent-900 font-medium lg:text-xl text-lg">
              Navigation
            </h3><ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  className="text-base text-slate-500 inline-flex items-center hover:text-regent-600"
                  href="/">
                  <span>Overview</span>
                  <span
                    className="rounded-full items-center bg-regent-100 font-medium inline-flex ml-4 px-3 py-0.5 text-regent-700 text-xs"
                    >30+ Pages</span>
                </a>
              </li><li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="/style-guide">Style Guide</a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-regent-900 font-medium lg:text-xl text-lg">
              Socials
            </h3><ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://twitter.com/lexingtonthemes">@lexingtonthemes</a>
              </li><li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://twitter.com/Mike_Andreuzza">@Mike_Andreuzza</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:gap-8 md:grid md:grid-cols-2">
          <div>
            <h3 className="text-regent-900 font-medium lg:text-xl text-lg">
              Stay updated
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://www.lexingtonthemes.com/license">License</a>
              </li><li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://www.lexingtonthemes.com/documentation"
                  >Documentation</a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-regent-900 font-medium lg:text-xl text-lg">
              More themes
            </h3><ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://lexingtonthemes.com">Lexington Themes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div><div className="w-full lg:px-16 max-w-7xl md:px-12 mx-auto px-8 py-4">
    <div className="md:flex md:items-center md:justify-between">
      <div className="mt-8 md:mt-0 md:order-1">
        <p>
          <span className="text-sm text-regent-900 mt-2 mx-auto">© 2022 Lexington Themes. All rights reserved - Beautifully designed
            HTML, Astro.js and Tailwind themes! Save months of time and build
            your startup landing page in minutes.
          </span>
        </p>
      </div>
    </div>
  </div>
</footer>

</>
  )
}
