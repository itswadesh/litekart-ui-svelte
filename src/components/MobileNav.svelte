<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close", true);
  }
</script>

<style>
  .off {
    z-index: 1;
    transition: transform 0.5s ease;
    transform: translateX(0);
  }
</style>

<div
  class="off w-full h-screen fixed top-0 md:hidden flex flex-col justify-between
  bg-white">
  <!-- Header -->
  <div
    class="sticky md:hidden flex mb-1 shadow justify-between items-center px-2
    bg-white text-gray-200">
    <button class="flex justify-around items-center" on:click={close}>
      <i class="fa fa-times text-gray-700 text-2xl" />
    </button>
    <button class="text-gray-700 items-center">
      <img src="img/logo.svg" alt="" class="h-12 w-32" />
    </button>
    <button class="flex justify-around items-center">
      <i class="fa fa-search text-gray-700 text-2xl" />
    </button>
  </div>
  <!-- Content -->
  <div class="h-full">
    <ul class="px-2">
      <li class="px-6 py-4 border-b border-gray">
        <a href="/login">LOG IN</a>
      </li>
      <li class="px-6 py-4 border-gray">
        <a href="/signin">SIGN IN</a>
      </li>
    </ul>
  </div>
  <div
    class="bg-gray-200 py-3 mt-4 flex justify-center bg-gray-200 shadow border-t
    ">
    <button class="bg-green-500 px-6 py-1 rounded text-white text-xl">
      Post a Job
    </button>
  </div>
</div>
