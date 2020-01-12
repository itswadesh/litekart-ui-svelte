<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<style>
  img {
    filter: drop-shadow(-10px 0px 11px #eee);
  }
  .bg {
    background-image: url(/end-banner.png);
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

<div class="bg flex">
  <div
    class="flex-1 flex flex-col justify-center text-2xl lg:text-5xl py-4
    md:py-16 lg:py-24 leading-loose px-4 md:px-16 lg:px-24 mb-4">
    <h1 class=" text-black text-3xl md:text-5xl font-bold">
      Fastest Javascript ecommerce of 2020
    </h1>
    <h2 class="primary text-lg md:text-2xl">Free for Developers & Startups</h2>
    <p class="text-xs md:text-xl lg:text-2xl">
      Have a great startup idea? We do technology outsourcing for free.
    </p>
    <div class="flex text-center justify-left text-lg my-6 ">
      <a
        href="/features"
        class="rounded-full w-1/2 lg:w-1/3 px-auto py-1 btn-primary mr-2 button">
        <span>Features</span>
      </a>
      <a
        target="_blank"
        href="https://demo.litekart.in"
        class="button border rounded-full w-1/2 lg:w-1/3 px-auto py-1 bg-white
        primary">
        <span>Get a Demo</span>
      </a>
    </div>
  </div>
  <div class="hidden lg:flex flex-1 pt-6">
    <img
      use:lazyload
      src={`${CDN}../../img/hero.png`}
      alt=""
      class="object-cover" />
  </div>
</div>
