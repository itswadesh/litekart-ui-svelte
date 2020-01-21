<script>
  import Icon from "svelte-awesome";
  import { bars, phone } from "svelte-awesome/icons";
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
  bg-white">
  <button
    class="focus:outline-none flex justify-around items-center"
    on:click={() => (showDrawer = true)}
    aria-label="menu">
    <Icon data={bars} label="bars" scale={2} />
    <!-- <i class="fa fa-bars text-black text-2xl" /> -->
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
  class="bg-gray-900 text-center p-2 text-white leading-loose tracking-wide
  md:tracking-widest text-sm md:text-md">
  800+ custom stores implementated since 2014
  <span>🚀</span>
</div>
<div
  class="sticky hidden md:flex md:shadow-lg md:justify-around md:items-center
  md:px-6 md:py-3 md:bg-white ">
  <a href="/" rel="prefetch">
    <img
      use:lazyload
      src={`${CDN}../../img/litekart-logo.png?tr=w-3,h-2`}
      data-src={`${CDN}../../img/litekart-logo.png?tr=h-48`}
      alt=""
      class="" />
  </a>
  <div class="items-center" />
  <div class=" flex justify-between md:text-gray-800 ">
    <a href="/features" rel="prefetch" class="link p-2 rounded text-lg ml-4">
      Features
    </a>
    <a
      href="/live-projects"
      rel="prefetch"
      class="link p-2 rounded text-lg ml-4">
      Live Projects
    </a>
    <a
      href="/litekart-story"
      rel="prefetch"
      class="link p-2 rounded text-lg ml-4">
      Story
    </a>
    <!-- <a
      href="/customizations"
      rel="prefetch"
      class="link p-2 rounded text-lg ml-4">
      Customizations
    </a>
    <a href="/details" rel="prefetch" class="link p-2 rounded text-lg ml-4">
      Details
    </a> -->
    <a href="/pricing" rel="prefetch" class="link p-2 rounded text-lg ml-4">
      Pricing
    </a>
    <a
      href="/contact"
      rel="prefetch"
      class="bg-primary text-white px-8 ml-6 flex items-center py-2 py-auto
      text-lg rounded-full">
      <Icon data={phone} label="phone" scale={1} class="mr-1" />
      Let's Talk
    </a>
  </div>
</div>
{#if showDrawer}
  <p in:fade out:fade>
    <MobileNav on:close={() => (showDrawer = false)} />
  </p>
{/if}
