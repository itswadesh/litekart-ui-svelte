<script>
  import SmallContent from "./../components/features/SmallContent.svelte";
  import { lazyload } from "../actions/lazyload";
  import { CDN, host } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
</script>

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

  <meta name="og_url" property="og:url" content={`${host}/technology`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Ecommerce software essential features for a unique brand presence" />
  <meta
    name="twitter:description"
    content="Litekart's powerful ecommerce software gives you all the features
    you need to get started with an online store in India." />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="bg-gray-100 px:8 lg:px-64">
    <h1 class="text-5xl mt-8 mb-2 text-center font-bold">
      Build using
      <span class="underline">Latest Technologies</span>
    </h1>
    <h2 class="text-center text-xl text-gray-900 mb-8 tracking-widest">
      Litekart is always updated with latest technologies
    </h2>
    <div class="flex justify-center flex-wrap ">
      <div class="w-full">
        <img
          use:lazyload
          src={`${CDN}../../img/mobile-layout-final.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/mobile-layout-final.png`}
          class="mb-12"
          alt="" />
      </div>
      <!-- <div class="w-full lg:w-1/2 flex items-center ">
        <ul class="text-2xl ">
          <li>
            <span class="font-bold">Nodejs</span>
            <span class="text-sm">Used for server side scripting.</span>
          </li>
          <li>
            <span class="font-bold">Docker</span>
            <span class="text-sm leading-none">
              Docker is a tool designed to make it easier to create, deploy, and
              run applications by using containers.
            </span>

          </li>
          <li class="font-bold">Svelte</li>
          <li class="font-bold">S3</li>
          <li class="font-bold">Serverless</li>
          <li class="font-bold">Express</li>
        </ul>
      </div> -->
    </div>
  </div>

  <div class="border border-gray-400 bg-white p-10 justify-around">
    <h2 class="text-4xl font-bold text-center mb-6 tracking-widest">
      Hosting Platforms
    </h2>

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
