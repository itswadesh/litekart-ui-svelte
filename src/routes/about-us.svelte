<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN, HOST } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
</script>

<style>
  h1 {
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-weight: bold;
  }
</style>

<svelte:head>
  <title>Litekart - About Us</title>
  <meta
    data-hid="description"
    name="description"
    content="Here at litekart we love to see people grow & succeed. Hence our
    plans are designed accordingly to suit startups" />
  <meta
    name="keywords"
    content="website development for ecommerce, design of ecommerce website,
    ecommerce web site development, ecommerce storefront, ecommerce solution,
    best platform ecommerce, ecommerce development company india, indian
    ecommerce platform, ecommerce platform in india" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Litekart - About Us" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Here at litekart we love to see people grow & succeed. Hence our
    plans are designed accordingly to suit startups" />
  <meta name="og_url" property="og:url" content={`${HOST}`} />
  <!-- Twitter -->
  <meta name="twitter:title" content="Litekart - Who we are" />
  <meta
    name="twitter:description"
    content="Here at litekart we love to see people grow & succeed. Hence our
    plans are designed accordingly to suit startups" />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="mb-16 mx-2 lg:mx-48">
    <h1 class="text-4xl text-center">About</h1>
    <div class="py-6 mx-5">
      <h2 class="flex justify-center text-4xl text-gray-600 ">
        “Helping You Build An Online Brand”
      </h2>
      <div class=" flex justify-center mb-4 text-center leading-loose">
        Litekart, formerly Arialshop, is a product of Odisha, India based
        Javascript e-commerce Solution. It offers an fullstack eCommerce website
        to Enterprise businesses to strengthen their footprints in the eCommerce
        space.
      </div>
      <div class="flex justify-center text-center text-ms mb-6 font-medium">
        Founded in 2010, Litekart has acquired 5,000 happy clients to date. If
        you’re an eCommerce business owner, all you need to do is choose your
        goal and we will help you develop the optimal technology platform for
        your business. We are continuously evolving to drive eCommerce for
        global merchants so that they can enable a better experience for their
        customers using our technology and analytics at every stage of the
        cycle.
      </div>
    </div>
  </div>

  <div
    class=" flex flex-wrap bg-gray-100 justify-between md:px-16 md:py-8 lg:py-12
    lg:px-64 ">
    <!-- <div class=" w-full lg:w-1/3 px-4">
      <div class=" flex flex-col bg-white text-center shadow rounded" />
      <img
        use:lazyload
        src={`${CDN}../../img/mission.png?tr=w-3,h-2`}
        data-src={`${CDN}../../img/mission.png`}
        alt=""
        class="" />
      <div class="p-4">
        With a mission of “Amazing customer experience” Litekart aims to offer
        an easy ecommerce enablement platform where small retailers and SME’s
        can start their online store with their brand name, at the best prices.
      </div>
    </div> -->
    <div class=" w-full md:w-1/2 lg:w-1/3 px-4">
      <div class=" flex flex-col bg-white text-center shadow rounded">
        <img
          use:lazyload
          src={`${CDN}../../img/mission.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/mission.png`}
          alt=""
          class="object-cover" />
        <div class="p-4">
          With a mission of “Amazing customer experience” Litekart aims to offer
          an easy ecommerce enablement platform where small retailers and SME’s
          can start their online store with their brand name, at the best
          prices.
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/3 px-4">
      <div class=" flex flex-col bg-white text-center shadow rounded">
        <img
          use:lazyload
          src={`${CDN}../../img/vison.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/vison.png`}
          alt=""
          class="object-cover" />
        <div class="p-4">
          To simplify administration, cart checkout and payments for merchants
          by offering the complete ecommerce solution, so that they can easily
          come up with their online store and start selling online.
        </div>
      </div>
    </div>
    <div class=" w-full md:w-1/2 lg:w-1/3 px-4">
      <div class=" flex flex-col bg-white text-center shadow rounded">
        <img
          use:lazyload
          src={`${CDN}../../img/values.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/values.png`}
          alt=""
          class="object-cover" />
        <div class="p-4">
          Litekart wants to reduce ecommerce to its bare bones for small
          retailers. We bridge the gap between technology and innovation by
          providing an easy yet powerful ecommerce enablement platform,
          Litekart.
        </div>
      </div>
    </div>
    ''
    <!-- <div class=" w-full lg:w-1/3 px-4 ">trtg
      <div class=" flex flex-col bg-white text-center shadow rounded" />
      <img
        use:lazyload
        src={`${CDN}../../img/values.png?tr=w-3,h-2`}
        data-src={`${CDN}../../img/values.png`}
        alt=""
        class="" />
      <div class="p-4">
        Litekart wants to reduce ecommerce to its bare bones for small
        retailers. We bridge the gap between technology and innovation by
        providing an easy yet powerful ecommerce enablement platform, Litekart.
      </div>
    </div> -->
  </div>

  <div class="py-12 justify-center mx-5">
    <h3 class="text-center text-4xl font-medium ">
      Experience Work As A Innovator!
    </h3>
    <p class=" flex justify-center">__________________</p>
    <p class="py-6 flex justify-center text-center ">
      At Litekart, we don’t just offer jobs, but a career. If you are crazy
      about work and party, then we are waiting for you, eagerly!
    </p>
    <div class="flex justify-center">
      <button
        class=" flex jusify-center bg-primary m-6 px-4 py-2 rounded text-white">
        Apply Now
      </button>
    </div>
  </div>
</main>
