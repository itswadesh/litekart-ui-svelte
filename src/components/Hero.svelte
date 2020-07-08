<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<style>
  img {
    filter: drop-shadow(-10px 0px 11px #eee);
  }
  .bg {
    /* background-image: url(/end-banner.png); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
  }

  .button {
    transition: all 0.5s;
  }
  .button span {
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  .button span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  .button:hover span {
    padding-right: 25px;
  }
  .button:hover span:after {
    opacity: 1;
    right: 0;
  }
</style>

<div class="flex bg">
  <div
    class="flex flex-col justify-center flex-1 px-4 py-4 mb-4 text-2xl lg:text-5xl md:py-16 lg:py-24 md:px-16 lg:px-24">
    <h1 class="text-3xl font-bold text-black  md:text-5xl">
      Fastest ecommerce software of 2020
    </h1>
    <h2 class="text-lg leading-loose primary md:text-2xl">
      Free for developers & startups
    </h2>
    <p class="text-xs leading-loose md:text-xl lg:text-2xl">
      Have a great startup idea? We do technology outsourcing for free.
    </p>
    <div class="flex my-6 text-lg text-center justify-left ">
      <a
        href="/features"
        class="w-1/2 py-2 mr-2 text-white rounded-full button lg:w-1/3 px-auto bg-primary focus:outline-none focus:shadow">
        <span>Features</span>
      </a>
      <a
        target="_blank"
        href="https://github.com/itswadesh/sapper-ecommerce"
        rel="noopener"
        class="w-1/2 py-2 bg-white border rounded-full button lg:w-1/3 px-auto primary focus:outline-none focus:shadow">
        <span>Download</span>
      </a>
    </div>
  </div>
  <div class="flex-1 hidden pt-6 lg:flex">
    <img
      use:lazyload
      src={CDN + '../../img/hero.png?tr=w-3,h-2'}
      data-src={CDN + '../../img/hero.png'}
      alt=""
      class="object-cover" />
  </div>
</div>
