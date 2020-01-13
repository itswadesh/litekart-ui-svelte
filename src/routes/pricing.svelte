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
    <div class="flex flex-wrap lg:flex-no-wrap ">
      <!-- student 1 -->
      <div class="w-full lg:w-1/3 p-2 lg:pr-8 lg:pl-8 ">
        <div
          class="bg-gray-100 flex flex-col mb-3 lg:my-12 justify-between
          border-0 rounded-lg shadow-lg bg-white ">
          <div class="bg-white">
            <h1 class="text-4xl mb-2 font-bold">Free</h1>
            <h2 class="text-green-500 text-xl mb-6">For developers</h2>
          </div>

          <div class="text-center ">
            <ul
              class=" border-b bg-white border-gray-300 flex flex-col
              justify-center lg:px-12 px-12 pb-3 ">
              <li class="flex">
                <img
                  src="svg/checkgreen.svg"
                  alt=""
                  class=" items-center h-5 w-5" />
                Open Source
              </li>
              <li class="flex">
                <img
                  src="svg/checkgreen.svg"
                  alt=""
                  class="h-5 w-5 items-center " />
                Licensed
              </li>
              <li class="flex">
                <img
                  src="svg/checkgreen.svg"
                  alt=""
                  class="h-5 w-5 items-center " />
                Authentication
              </li>
              <li class="flex">
                <img
                  src="svg/checkgreen.svg"
                  alt=""
                  class="h-5 w-5 items-center " />
                Cart & Checkout
              </li>
              <li class="flex">
                <img
                  src="svg/checkgreen.svg"
                  alt=""
                  class="h-5 w-5 items-center" />
                Server Rendered
              </li>
              <li class="flex">
                <img
                  src="svg/checkgreen.svg"
                  alt=""
                  class="h-5 w-5 items-center" />
                Lazy loading
              </li>
              <li class="flex">
                <img
                  src="svg/checkgreen.svg"
                  alt=""
                  class="h-5 w-5 items-center" />
                Loading Indicators
              </li>
              <li class="flex">
                <img src="svg/checkgreen.svg" alt="" class="h-5 w-5 " />
                Carousels
              </li>
              <li class="flex">
                <img src="svg/checkgreen.svg" alt="" class="h-5 w-5 " />
                Community Support
              </li>
            </ul>
          </div>

          <p class=" text-2xl">
            <b class="font-bold text-black text-4xl">$0</b>
            /month
          </p>

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
          class=" bg-gray-100 flex flex-col mb-3 lg:my-12 justify-between
          border-0 rounded-lg shadow-lg bg-white ">
          <div class="bg-white">
            <h1 class="text-4xl mb-2 font-bold">Free</h1>
            <h2 class="text-pink-500 text-xl mb-6">For Startups</h2>
          </div>
          <div class=" ">
            <ul
              class="border-b border-gray-300 bg-white flex flex-col lg:px-12
              px-12 pb-3">
              <li class="mb-4 text-green-500 ">Complete Stack Setup</li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Unlimited Products
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Unlimited Checkouts
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                4 user roles
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Progressive web app
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Email/SMS Notifications
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Auto invoice generation
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                SEO Optimized
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Server Rendered
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Free SSL
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Reports & Analytics
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                1 click deploy to cloud
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Payment Gateway Integration
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Facebook optimized product
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Product Rating and Reviews
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Social Media Logins
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Faceted Search
              </li>
              <li class="flex my-6 ">
                <img src="svg/checkpurpel.svg" alt="" class="h-5 w-5 " />
                Premium Suport With 1 Day
              </li>
            </ul>
          </div>
          <p class=" text-2xl">
            <b class="text-4xl font-extrabold text-black">$20</b>
            /month
          </p>

          <button class="gs-2 text-white rounded shadow-lg m-3 py-3">
            Get Started
          </button>
        </div>
      </div>
      <!-- student 2 -->
      <!-- student 3 -->
      <div class="w-full lg:w-1/3 p-2 lg:pr-8">
        <div
          class=" bg-gray-100 flex flex-col mb-3 lg:my-12 justify-between
          text-center border-0 rounded-lg shadow-lg bg-white">
          <div class="bg-white">
            <h1 class="text-4xl mb-2 font-bold">Enterprise</h1>
            <h2 class="text-blue-500 text-xl mb-6">$24999.00</h2>
          </div>
          <div class="">
            <ul
              class="text-gray-600 bg-white border-b border-gray-300 flex
              flex-col lg:px-12 pb-3 px-12">
              <li class="mb-4 text-red-500">All features of Premium +</li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Custom Theme Integration
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Discount Coupons
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Promotions
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Android & IOS App
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Abandoned Cart
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Marketplace integration
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Multi seller
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Affiliate Management
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                99.95% Uptime SLA
              </li>
              <li class="flex my-6 ">
                <img src="svg/checksky.svg" alt="" class="h-5 w-5 " />
                Premium 24/7 Support
              </li>
            </ul>
          </div>

          <p class=" text-2xl">
            <b class="font-extrabold text-black text-4xl">$200</b>
            /month
          </p>
          <button class="gs-3 text-white rounded shadow-lg m-3 py-3 ">
            Get Started
          </button>
        </div>
      </div>
      <!-- student 3 -->
    </div>
  </div>
  <Footer />
</main>
