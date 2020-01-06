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
  }
</style>

<!-- for mobile -->
<div
  class="sticky md:hidden flex mb-1 shadow-lg justify-between items-center p-2
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
  class="sticky hidden md:flex md:mb-1 md:shadow-lg md:justify-around
  md:items-center md:px-6 md:py-3 md:bg-yellow-400 font-bold ">
  <a href="/">
    <img src="img/litekart-logo.png" alt="" class="h-12 w-32" />
  </a>
  <div class="items-center" />
  <div class=" flex justify-between md:text-gray-700 ">
    <a href="/features" class="p-2 rounded text-lg ml-4">Features</a>
    <a href="/customizations" class="p-2 rounded text-lg ml-4">
      Customizations
    </a>
    <a href="/details" class="p-2 rounded text-lg ml-4">Details</a>
    <a href="/pricing" class="p-2 rounded text-lg ml-4">Pricing</a>
    <a
      href="/"
      class="btn-primary px-4 ml-6 flex items-center py-2 py-auto text-lg
      rounded-full">
      Contact Us
    </a>
  </div>
</div>
{#if showDrawer}
  <p in:fade out:fade>
    <MobileNav on:close={() => (showDrawer = false)} />
  </p>
{/if}
