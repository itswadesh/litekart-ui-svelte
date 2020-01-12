<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import { lazyload } from "../actions/lazyload";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { CDN } from "./../config";
</script>

<style>
  h1,
  h2 {
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  ul > li {
    margin: 0.75rem 0;
  }
  ul > li img {
    margin-right: 0.75rem;
  }
  .gs-1 {
    background-color: rgb(45, 182, 45);
  }
  .gs-2 {
    background-color: rgb(106, 42, 196);
  }
  .gs-3 {
    background-color: rgb(5, 213, 255);
  }
  .b-black {
    border-top-width: 32px;
    border-color: #111;
  }
  .b-yellow {
    border-top-width: 32px;
    border-color: #f6e05e;
  }
  .b-orange {
    border-top-width: 32px;
    border-color: #ff7426;
  }
</style>

<svelte:head>
  <title>Litekart - Pricing & fees</title>
</svelte:head>
<main in:fadeIn out:fadeOut>
  <Header />
  <div class=" text-center px-4 lg:px-48 py-8 lg:py-32">
    <h1 class="text-3xl lg:text-5xl leading-loose font-black">Grow With Us</h1>
    <h2 class="text-xl lg:text-2xl leading-loose mb-8">
      Free for developers & Startups
    </h2>
    <div class="flex flex-wrap justify-center">
      <!-- student 1 -->
      <div class="w-full lg:w-1/3 p-2 lg:pr-8 lg:pl-8 lg:mx-16">
        <div
          class="b-black flex flex-col mb-3 lg:my-12 justify-between border-0
          rounded-lg shadow-lg bg-white py-10 ">
          <h1 class="text-4xl mb-2 font-bold">Free</h1>
          <h2 class="text-green-500 text-xl mb-6">For developers</h2>
          <div class=" ">
            <ul
              class=" border-b-2 border-gray-300 shadow flex flex-col
              justify-center lg:px-12 px-4 ">
              <li class="flex">
                <img
                  use:lazyload
                  src="svg/check.svg"
                  alt=""
                  class=" items-center h-5 w-5" />
                Open Source
              </li>
              <li class="flex">
                <img
                  use:lazyload
                  src="svg/check.svg"
                  alt=""
                  class="h-5 w-5 items-center " />
                Licensed
              </li>
              <li class="flex">
                <img
                  use:lazyload
                  src="svg/check.svg"
                  alt=""
                  class="h-5 w-5 items-center " />
                Authentication
              </li>
              <li class="flex">
                <img
                  use:lazyload
                  src="svg/check.svg"
                  alt=""
                  class="h-5 w-5 items-center " />
                Cart & Checkout
              </li>
              <li class="flex">
                <img
                  use:lazyload
                  src="svg/check.svg"
                  alt=""
                  class="h-5 w-5 items-center" />
                Server Rendered
              </li>
              <li class="flex">
                <img
                  use:lazyload
                  src="svg/check.svg"
                  alt=""
                  class="h-5 w-5 items-center" />
                Lazy loading
              </li>
              <li class="flex">
                <img
                  use:lazyload
                  src="svg/check.svg"
                  alt=""
                  class="h-5 w-5 items-center" />
                Loading Indicators
              </li>
              <li class="flex">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Carousels
              </li>
              <li class="flex">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Community Support
              </li>
            </ul>
          </div>

          <p class="font-bold text-black text-4xl">$0 /month</p>

          <a
            href="https://github.com/itswadesh/sapper-ecommerce"
            class="gs-1 text-white rounded shadow-lg m-3 py-3 ">
            Download
          </a>

        </div>
      </div>
      <!-- student 1 -->
      <!-- student 2 -->
      <div class="w-full lg:w-1/3 p-2 lg:pr-8">
        <div
          class="b-orange flex flex-col mb-3 lg:my-12 justify-between border-0
          rounded-lg shadow-lg bg-white p-8">
          <h1 class="text-4xl mb-2 font-bold">Free</h1>
          <h2 class="text-pink-500 text-xl mb-6">For Startups</h2>
          <div class="flex">
            <ul class="">
              <li class="mb-4 text-green-500 ">Complete Stack Setup</li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Unlimited Products
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Unlimited Checkouts
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                4 user roles
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Progressive web app
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Email/SMS Notifications
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Auto invoice generation
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                SEO Optimized
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Server Rendered
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Free SSL
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Reports & Analytics
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                1 click deploy to cloud
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Payment Gateway Integration
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Facebook optimized product
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Product Rating and Reviews
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Social Media Logins
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Faceted Search
              </li>
              <li class="flex my-6 ">
                <img use:lazyload src="svg/check.svg" alt="" class="h-5 w-5 " />
                Premium Suport With 1 Day
              </li>
            </ul>
          </div>
          <button class="gs-2 text-white p-2 rounded-full shadow-lg">
            Get Started
          </button>
        </div>
      </div>
      <!-- student 2 -->
      <!-- student 3 -->
      <div class="w-full lg:w-1/3 p-2 lg:pr-8">
        <div
          class="b-yellow flex flex-col mb-3 lg:my-12 justify-between
          text-center border-0 rounded-lg shadow-lg bg-white p-8">
          <h1 class="text-4xl mb-2 font-bold">Enterprise</h1>
          <h2 class="text-blue-500 text-xl mb-6">$24999.00</h2>
          <div class="text-center">
            <ul class="text-gray-600">
              <li class="mb-4 text-red-500">All features of Premium +</li>
              <li>Custom Theme Integration</li>
              <li>Discount Coupons</li>
              <li>Promotions</li>
              <li>Android & IOS App</li>
              <li>Abandoned Cart</li>
              <li>Marketplace integration</li>
              <li>Multi seller</li>
              <li>Affiliate Management</li>
              <li>99.95% Uptime SLA</li>
              <li>Premium 24/7 Support</li>
            </ul>
          </div>
          <button class="gs-3 text-white p-2 rounded-full shadow-lg ">
            Get Started
          </button>
        </div>
      </div>
      <!-- student 3 -->
    </div>
  </div>
  <Footer />
</main>
