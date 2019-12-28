<script>
  import MobileNav from "./MobileNav.svelte";
  import { slide, fade } from "svelte/transition";
  let showDrawer = false;
</script>

<style>
  .post {
    background-color: #37a000;
  }
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
</style>

<!-- for mobile -->
<div
  class="sticky md:hidden flex mb-1 shadow justify-between items-center px-2
  bg-white text-gray-200">
  <button
    class="focus:outline-none flex justify-around items-center"
    on:click={() => (showDrawer = true)}>
    <i class="fa fa-bars text-gray-700 text-2xl" />
  </button>
  <a href="/" class="items-center">
    <img src="img/logo.svg" alt="" class="h-12 w-32" />
  </a>
  <button class="flex justify-around items-center">
    <i class="fa fa-search text-gray-700 text-2xl" />
  </button>
</div>
<!-- for desktop -->
<div
  class="sticky hidden md:flex md:mb-1 md:shadow md:justify-around
  md:items-center md:px-6 md:bg-white md:text-gray-200">
  <a href="/">
    <img src="img/logo.svg" alt="" class="h-12 w-32" />
  </a>
  <div class="text-gray-700 items-center" />
  <div class=" flex justify-between text-gray-700 ">
    <a href="/features" class="p-2 rounded text-xs ml-4">FEATURES</a>
    <a href="/pricing" class="p-2 rounded text-xs ml-4">PRICING</a>
    <a
      href="/"
      class="post shadow py-1 px-4 ml-6 mx-auto rounded text-white text-xs ">
      <b>Post a Job</b>
    </a>
  </div>
</div>
{#if showDrawer}
  <p in:fade out:fade>
    <MobileNav on:close={() => (showDrawer = false)} />
  </p>
{/if}
