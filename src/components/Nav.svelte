<script>
  import Icon from "svelte-awesome";
  import { bars, phone } from "svelte-awesome/icons";
  import MobileNav from "./MobileNav.svelte";
  import { slide, fade } from "svelte/transition";
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
  let showDrawer = false;
  export let segment;
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
    right: 0;
    background-image: linear-gradient(
      to right,
      rgb(250, 112, 154) 0%,
      rgb(254, 225, 64) 100%
    );
    background-repeat: no-repeat;
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
  }
  .link:hover:after {
    width: 100%;
    left: 0;
  }
  /* .svg-inline--fa {
    width: 1rem;
    height: 1rem;
    color: #fff;
    margin-right: 3px;
  } */
</style>

<!-- for mobile -->
<div
  class="sticky flex items-center justify-between p-2 bg-white shadow-lg md:hidden">
  <button
    class="flex items-center justify-around focus:outline-none"
    on:click={() => (showDrawer = true)}
    aria-label="menu">
    <Icon data={bars} label="bars" scale={2} />
    <!-- <i class="text-2xl text-black fa fa-bars" /> -->
  </button>
  <a href="/" rel="prefetch" class="items-center" aria-label="logo">
    <img
      use:lazyload
      src={`${CDN}../../img/litekart-logo.png?tr=w-3,h-2`}
      data-src={`${CDN}../../img/litekart-logo.png?tr=h-48`}
      alt=""
      class="" />
  </a>
  <button class="" aria-label="search" />
</div>
<!-- for desktop -->
<div
  class="p-2 text-sm leading-loose tracking-wide text-center text-white bg-gray-900 md:tracking-widest md:text-md">
  800+ custom stores implementated since 2014
  <span>🚀</span>
</div>
<div
  class="sticky hidden md:flex md:shadow-lg md:justify-around md:items-center md:px-6 md:py-3 md:bg-white ">
  <a href="/" rel="prefetch">
    <img
      use:lazyload
      src={`${CDN}../../img/litekart-logo.png?tr=w-3,h-2`}
      data-src={`${CDN}../../img/litekart-logo.png?tr=h-48`}
      alt=""
      class="" />
  </a>
  <div class="items-center" />
  <div class="flex justify-between  md:text-gray-800">
    <a
      href="/features"
      rel="prefetch"
      class="p-2 ml-4 text-lg rounded link"
      class:underline={segment === 'features'}>
      Features
    </a>
    <a
      href="/live-projects"
      rel="prefetch"
      class="p-2 ml-4 text-lg rounded link"
      class:underline={segment === 'live-projects'}>
      Live Projects
    </a>
    <a
      href="/litekart-story"
      rel="prefetch"
      class="p-2 ml-4 text-lg rounded link"
      class:underline={segment === 'litekart-story'}>
      Story
    </a>
    <a
      href="/technology"
      rel="prefetch"
      class="p-2 ml-4 text-lg rounded link"
      class:underline={segment === 'technology'}>
      Technology
    </a>
    <a
      href="/ecommerce-developer"
      rel="prefetch"
      class="p-2 ml-4 text-lg rounded link"
      class:underline={segment === 'ecommerce-developer'}>
      Developer
    </a>
    <a
      href="/pricing"
      rel="prefetch"
      class="p-2 ml-4 text-lg rounded link"
      class:underline={segment === 'pricing'}>
      Pricing
    </a>
    <a
      href="/contact"
      rel="prefetch"
      class="flex items-center px-8 py-2 ml-6 text-lg text-white rounded-full bg-primary py-auto"
      class:underline={segment === 'contact'}>
      <Icon data={phone} label="phone" scale={1} class="mr-1 text-white" />
      Let's Talk
    </a>
  </div>
</div>
{#if showDrawer}
  <p in:fade out:fade>
    <MobileNav on:close={() => (showDrawer = false)} />
  </p>
{/if}
