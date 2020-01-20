<script>
  import SmallContent from "./../components/features/SmallContent.svelte";
  import { lazyload } from "../actions/lazyload";
  import { CDN, HOST } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
</script>

<main in:fadeIn out:fadeOut>
  <div class=" justify-around bg-gray-400 px-2 lg:py-24 py-6 mt-3 ">
    <h1 class="text-4xl mb-6 mx-3 text-center font-bold ">
      Build using Latest Technologies
      <p class="text-2xl">
        Litekart is always updated with latest technologies
      </p>
    </h1>
    <div class="flex justify-center flex-wrap ">
      <div class="w-full lg:w-1/2">
        <img
          use:lazyload
          src={`${CDN}../../img/mobile-layout-final.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/mobile-layout-final.png`}
          class=" mb-6"
          alt="" />
      </div>
      <div class="w-full lg:w-1/2 flex items-center ">
        <ul class="text-2xl ">
          <li class="font-bold">
            Nodejs-
            <b class="text-black">Used for server side scripting.</b>
          </li>
          <li class="font-bold">
            Docker-
            <b class="text-black">
              Docker is a tool designed to make it easier to create, deploy, and
              run applications by using containers.
            </b>

          </li>
          <li class="font-bold">Svelte-</li>
          <li class="font-bold">S3-</li>
          <li class="font-bold">Serverless-</li>
          <li class="font-bold">Express-</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="border border-gray-400 bg-gray-300 p-10 justify-around">
    <h2 class="text-3xl text-center mb-6">Hosting Platforms</h2>

    <div class="flex text-center flex-wrap justify-center p-4 ">
      <p class="p-4">
        <img
          use:lazyload
          src={`${CDN}../../img/digitalocean.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/digitalocean.png`}
          alt="" />
      </p>
      <p class="p-4">
        <img
          use:lazyload
          src={`${CDN}../../img/amazoncloud.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/amazoncloud.png`}
          alt="" />
      </p>
      <p class="p-4">
        <img
          use:lazyload
          src={`${CDN}../../img/googlecloud.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/googlecloud.png`}
          alt="" />
      </p>
      <p class="p-4">
        <img
          use:lazyload
          src={`${CDN}../../img/vurtle.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/vurtle.png`}
          alt="" />
      </p>
    </div>
  </div>

  <SmallContent />
</main>
<svelte:head>
  <title>
    Ecommerce software essential features for a unique brand presence
  </title>
  <meta
    data-hid="description"
    name="description"
    content="Litekart's powerful ecommerce software gives you all the features
    you need to get started with an online store in India." />
  <meta
    name="keywords"
    content="javasctipt ecommerce, image optimization, lazy loading, seo, fast ,
    search engine optimization, easy, headless, authentication, cart & checkout,
    tailwindcss, server rendered, proxy + api integrated, animations, stores,
    lazy loading, loading indicators, carousel, instant search, faceted filters" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Ecommerce software essential features for a unique brand presence" />

  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Litekart's powerful ecommerce software gives you all the features
    you need to get started with an online store in India." />

  <meta name="og_url" property="og:url" content={`${HOST}`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Ecommerce software essential features for a unique brand presence" />
  <meta
    name="twitter:description"
    content="Litekart's powerful ecommerce software gives you all the features
    you need to get started with an online store in India." />
</svelte:head>
