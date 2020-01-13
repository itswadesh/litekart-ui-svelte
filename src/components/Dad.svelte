<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<style>
  .green {
    color: #6fda44;
  }
</style>

<div class="flex flex-wrap justify-center mb-0 px-2 lg:px-12 ">
  <!-- blue -->
  <div class="flex bg-gray-800 flex-col py-12 shadow rounded">
    <div class="text-white text-center">
      <h1 class="text-5xl text-white">Performance</h1>
      <p class="mx-2 lg:mx-48">
        A 1-second delay in page load can decrease conversion by 7%. Online
        stores from Litekart are blazing fast on cloud infrastructure, with an
        average page load time under 2 seconds – resulting in faster page
        browsing times, improved conversion, and better customer experience.
        Progressive web app are the future of Mobile APP. All our products are
        PWA in built
      </p>
    </div>
    <p class="text-center p-12 text-white ">
      Here are some of the google lighthouse / page speed stats, that proves
      what we say.
    </p>
    <div class="flex flex-wrap justify-around mx-2 lg:mx-48">
      <div
        class="flex flex-col items-center justify-center center mb-6 text-center
        text-white">
        <div
          class="border-8 border-white w-24 h-24 rounded-full flex
          justify-center items-center">
          <h1 class="green text-3xl font-black">91+</h1>
        </div>
        <p class="text-xl">Performance</p>
      </div>
      <div
        class="flex flex-col items-center center mb-6 text-center text-white">
        <div
          class="border-8 border-white w-24 h-24 rounded-full flex
          justify-center items-center">
          <h2 class="green text-3xl font-black">100</h2>
        </div>
        <p class="text-xl">Accessibility</p>
      </div>
      <div
        class="flex flex-col items-center center mb-6 text-center text-white">
        <div
          class="border-8 border-white w-24 h-24 rounded-full flex
          justify-center items-center">
          <h3 class="green text-3xl font-black">100</h3>
        </div>
        <p class="text-xl">Best practices</p>
      </div>
      <div
        class="flex flex-col items-center center mb-6 text-center text-white">
        <div
          class="border-8 border-white w-24 h-24 rounded-full flex
          justify-center items-center">
          <h3 class="green text-3xl font-black">100</h3>
        </div>
        <p class="text-xl">SEO</p>
      </div>
    </div>

  </div>
  <!-- blue end-->
  <div class="flex mt-8 justify-between flex-wrap">
    <!-- pink -->
    <div class="w-full lg:w-1/2">
      <div class="flex flex-col mb-8 p-6 items-center rounded shadow lg:mr-2">
        <img
          use:lazyload
          src={CDN + '../../img/clicky_logo.png?tr=w-3,h-2'}
          data-src={CDN + '../../img/clicky_logo.png'}
          class="h-12"
          alt="" />
        <h1 class="primary text-xl my-6 ">
          How Clicky designed an agile and highperformance ecommerce.
        </h1>
        <p class="leading-loose">
          To serve over 1 million customers and 20k daily orders, clicky needed
          quick and reliable ecommerce solution, they tripled their sales and
          achieved 2nd milestone target under 6 months of migration their
          exising php based platform. With an expenditure of 1/4 of their
          investment in the exising platform.
        </p>
        <!-- <h2 class="text-center pt-12 text-white ">Read full customer story</h2> -->
      </div>
    </div>
    <!-- pink -->
    <!-- yellow -->
    <div class="w-full lg:w-1/2">
      <div
        class="flex flex-col items-center mb-8 p-6 items-center rounded shadow
        lg:ml-2">
        <img
          use:lazyload
          src={CDN + '../../img/tesoro_logo.png?tr=w-3,h-2'}
          data-src={CDN + '../../img/tesoro_logo.png'}
          class="h-12"
          alt="" />
        <h1 class="primary text-xl my-6">
          How Tesoro stays on top with a flexible e-commerce platform.
        </h1>
        <p class="leading-loose">
          For their growing jewellery store, there was a requirement to up-lift
          the exising ecommerce from wordpress (woocommerce) to a modern and
          more performant platform and they choose Litekart. The page loading
          and browing time decreased by 10 times resulting 3x increase in
          delightfull customers.
        </p>
        <!-- <h2 class="text-center pt-12 text-white ">Read full customer story</h2> -->
      </div>
    </div>
    <!-- yellow -->
  </div>
</div>
