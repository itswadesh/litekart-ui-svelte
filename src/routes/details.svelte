<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import SmallContent from "./../components/features/SmallContent.svelte";
  import { lazyload } from "../actions/lazyload";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { CDN } from "./../config";
</script>

<style>
  /* .ipad {
    background: #a7e0c8;
  } */
</style>

<main in:fadeIn out:fadeOut>
  <Header />

  <div class=" justify-around bg-gray-400 px-2 lg:py-24 py-6 mt-3 ">

    <h1 class="text-4xl mb-6 mx-3 text-center font-bold ">
      Technologies Used
      <p class="text-2xl">
        All apps has been developed using open source softwares.
      </p>
    </h1>
    <div class="flex justify-center flex-wrap ">
      <div class="w-full lg:w-1/2">
        <img
          use:lazyload
          src={`${CDN}../../img/mobile-layout-final.png`}
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
    <h1 class="text-3xl text-center mb-6">Hosting Platforms</h1>

    <div class="flex text-center flex-wrap justify-center p-4 ">
      <p class="p-4">
        <img use:lazyload src={`${CDN}../../img/digitalocean.png`} alt="" />
      </p>
      <p class="p-4">
        <img use:lazyload src={`${CDN}../../img/amazoncloud.png`} alt="" />
      </p>
      <p class="p-4">
        <img use:lazyload src={`${CDN}../../img/googlecloud.png`} alt="" />
      </p>
      <p class="p-4">
        <img use:lazyload src={`${CDN}../../img/vurtle.png`} alt="" />
      </p>
    </div>
  </div>

  <SmallContent />
  <Footer />
</main>
<svelte:head>
  <title>Litekart - Details features for a unique brand presence</title>
</svelte:head>
