<script>
  import MobileNav from "./MobileNav.svelte";
  import { slide, fade } from "svelte/transition";
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
  let showDrawer = false;
</script>

<style>
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .link {
    position: relative;
  }
  .link:after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #ff7426;
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
  }
  .link:hover:after {
    width: 100%;
    left: 0;
    background: #ff7426;
  }
  .svg-inline--fa {
    width: 1rem;
    height: 1rem;
    color: #fff;
    margin-right: 3px;
  }
</style>

<!-- for mobile -->
<div
  class="sticky md:hidden flex shadow-lg justify-between items-center p-2
  bg-white text-black">
  <button
    class="focus:outline-none flex justify-around items-center"
    on:click={() => (showDrawer = true)}
    aria-label="menu">
    <i class="fa fa-bars text-black text-2xl" />
  </button>
  <a href="/" class="items-center" aria-label="logo">
    <img
      use:lazyload
      src={`${CDN}../../img/litekart-logo.png?tr=w-3,h-2`}
      data-src={`${CDN}../../img/litekart-logo.png`}
      alt=""
      class="h-12 w-32" />
  </a>
  <button class="flex justify-around items-center" aria-label="search" />
</div>
<!-- for desktop -->
<div
  class="sticky hidden md:flex md:shadow-lg md:justify-around md:items-center
  md:px-6 md:py-3 md:bg-white font-bold ">
  <a href="/">
    <img
      use:lazyload
      src={`${CDN}../../img/litekart-logo.png?tr=w-3,h-2`}
      data-src={`${CDN}../../img/litekart-logo.png`}
      alt=""
      class="h-12 w-32" />
  </a>
  <div class="items-center" />
  <div class=" flex justify-between md:text-gray-800 ">
    <a href="/features" rel="prefetch" class="link p-2 rounded text-lg ml-4">
      Features
    </a>
    <a
      href="/customizations"
      rel="prefetch"
      class="link p-2 rounded text-lg ml-4">
      Customizations
    </a>
    <a href="/details" rel="prefetch" class="link p-2 rounded text-lg ml-4">
      Details
    </a>
    <a href="/pricing" rel="prefetch" class="link p-2 rounded text-lg ml-4">
      Pricing
    </a>
    <a
      href="/contact"
      rel="prefetch"
      class="bg-primary text-white px-8 ml-6 flex items-center py-2 py-auto
      text-lg rounded-full">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="phone-alt"
        class="svg-inline--fa fa-phone-alt fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0
          0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16
          24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464
          464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
      </svg>
      Let's Talk
    </a>
  </div>
</div>
{#if showDrawer}
  <p in:fade out:fade>
    <MobileNav on:close={() => (showDrawer = false)} />
  </p>
{/if}
