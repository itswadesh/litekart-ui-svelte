<script>
  import MobileNav from "./MobileNav.svelte";
  import { slide, fade } from "svelte/transition";
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
</style>

<!-- for mobile -->
<div
  class="sticky md:hidden flex shadow-lg justify-between items-center p-2
  bg-yellow-400 text-black">
  <button
    class="focus:outline-none flex justify-around items-center"
    on:click={() => (showDrawer = true)}>
    <i class="fa fa-bars text-black text-2xl" />
  </button>
  <a href="/" class="items-center">
    <img src="img/litekart-logo.png" alt="" class="h-12 w-32" />
  </a>
  <button class="flex justify-around items-center">
    <i class="fa fa-search text-black text-2xl" />
  </button>
</div>
<!-- for desktop -->
<div
  class="sticky hidden md:flex md:shadow-lg md:justify-around md:items-center
  md:px-6 md:py-3 md:bg-yellow-400 font-bold ">
  <a href="/">
    <img src="img/litekart-logo.png" alt="" class="h-12 w-32" />
  </a>
  <div class="items-center" />
  <div class=" flex justify-between md:text-gray-800 ">
    <a href="/features" class="link p-2 rounded text-lg ml-4">Features</a>
    <a href="/customizations" class="link p-2 rounded text-lg ml-4">
      Customizations
    </a>
    <a href="/details" class="link p-2 rounded text-lg ml-4">Details</a>
    <a href="/pricing" class="link p-2 rounded text-lg ml-4">Pricing</a>
    <a
      href="/"
      class="btn-primary px-8 ml-6 flex items-center py-2 py-auto text-lg
      rounded-full">
      <i class="fa fa-phone-alt mr-1 text-sm" />
      Let's Talk
    </a>
  </div>
</div>
{#if showDrawer}
  <p in:fade out:fade>
    <MobileNav on:close={() => (showDrawer = false)} />
  </p>
{/if}
