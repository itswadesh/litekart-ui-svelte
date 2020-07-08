<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<style>
  .green {
    color: #6fda44;
  }
</style>

<div class="flex flex-wrap justify-center px-2 mb-0 lg:px-12 ">
  <!-- blue -->
  <div class="flex flex-col py-12 bg-gray-800 rounded shadow">
    <div class="text-center text-white">
      <h2 class="text-5xl text-white">Performance</h2>
      <p class="mx-2 lg:mx-48">
        A 1-second delay in page load can decrease conversion by 7%. Online
        stores from Litekart are blazing fast on cloud infrastructure, with an
        average page load time under 2 seconds – resulting in faster page
        browsing times, improved conversion, and better customer experience.
        Progressive web app are the future of Mobile APP. All our products are
        PWA in built
      </p>
    </div>
    <p class="p-12 text-center text-white ">
      Here are some of the google lighthouse / page speed stats, that proves
      what we say.
    </p>
    <div class="flex flex-wrap justify-around mx-2 lg:mx-48">
      <div
        class="flex flex-col items-center justify-center mb-6 text-center text-white center">
        <div
          class="flex items-center justify-center w-24 h-24 border-8 border-white rounded-full">
          <h2 class="text-3xl font-black green">91+</h2>
        </div>
        <p class="text-xl">Performance</p>
      </div>
      <div
        class="flex flex-col items-center mb-6 text-center text-white center">
        <div
          class="flex items-center justify-center w-24 h-24 border-8 border-white rounded-full">
          <h2 class="text-3xl font-black green">100</h2>
        </div>
        <p class="text-xl">Accessibility</p>
      </div>
      <div
        class="flex flex-col items-center mb-6 text-center text-white center">
        <div
          class="flex items-center justify-center w-24 h-24 border-8 border-white rounded-full">
          <h3 class="text-3xl font-black green">100</h3>
        </div>
        <p class="text-xl">Best practices</p>
      </div>
      <div
        class="flex flex-col items-center mb-6 text-center text-white center">
        <div
          class="flex items-center justify-center w-24 h-24 border-8 border-white rounded-full">
          <h3 class="text-3xl font-black green">100</h3>
        </div>
        <p class="text-xl">SEO</p>
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-wrap justify-between mt-8">
    <div class="w-full lg:w-1/2">
      <div class="flex flex-col items-center p-6 mb-8 rounded shadow lg:mr-2">
        <img
          use:lazyload
          src={CDN + '../../img/clicky_logo.png?tr=w-3,h-2'}
          data-src={CDN + '../../img/clicky_logo.png'}
          class="h-12"
          alt="" />
        <h2 class="my-6 text-xl primary ">
          How Clicky designed an agile and highperformance ecommerce.
        </h2>
        <p class="leading-loose">
          To serve over 1 million customers and 20k daily orders, clicky needed
          quick and reliable ecommerce solution, they tripled their sales and
          achieved 2nd milestone target under 6 months of migration their
          exising php based platform. With an expenditure of 1/4 of their
          investment in the exising platform.
        </p>
      </div>
    </div>
    <div class="w-full lg:w-1/2">
      <div
        class="flex flex-col items-center p-6 mb-8 rounded shadow lg:ml-2">
        <img
          use:lazyload
          src={CDN + '../../img/tesoro_logo.png?tr=w-3,h-2'}
          data-src={CDN + '../../img/tesoro_logo.png'}
          class="h-12"
          alt="" />
        <h2 class="my-6 text-xl primary">
          How Tesoro stays on top with a flexible e-commerce platform.
        </h2>
        <p class="leading-loose">
          For their growing jewellery store, there was a requirement to up-lift
          the exising ecommerce from wordpress (woocommerce) to a modern and
          more performant platform and they choose Litekart. The page loading
          and browing time decreased by 10 times resulting 3x increase in
          delightfull customers.
        </p>
      </div>
    </div>
  </div> -->
</div>
