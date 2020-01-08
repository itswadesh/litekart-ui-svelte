<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close", true);
  }
</script>

<style>
  .off {
    z-index: 13;
    transition: transform 0.5s ease;
    transform: translateX(0);
  }
  .job {
    background-color: #ff7426;
  }
  ul li a {
    display: block;
  }
</style>

<div
  class="off w-full h-screen fixed top-0 md:hidden flex flex-col justify-between
  bg-white">
  <!-- Header -->
  <div
    class="sticky md:hidden flex mb-1 shadow justify-between items-center px-6
    py-3 bg-yellow-400 font-bold">
    <button class="flex justify-around items-center" on:click={close}>
      <i class="fa fa-times text-gray-700 text-2xl" />
    </button>
    <a href="/" class="text-gray-700 items-center">
      <img src="img/litekart-logo.png" alt="" class="h-12 w-32" />
    </a>
    <button class="flex justify-around items-center">
      <i class="fa fa-search text-gray-700 text-2xl" />
    </button>
  </div>
  <!-- Content -->
  <div class="h-full">
    <ul class="px-2">
      <li class="border-b border-gray font-black">
        <a href="/features" class="px-6 py-4 " on:click={close}>Features</a>
      </li>
      <li class="border-b border-gray font-black">
        <a href="/customizations" class="px-6 py-4 " on:click={close}>
          Customizations
        </a>
      </li>
      <li class="border-b border-gray font-black">
        <a href="/details" class="px-6 py-4 " on:click={close}>Details</a>
      </li>
      <li class="border-gray font-black">
        <a href="/pricing" class="px-6 py-4 " on:click={close}>Pricing</a>
      </li>
    </ul>
  </div>
  <div
    class="bg-gray-200 py-3 mt-4 flex justify-center bg-gray-200 shadow border-t
    ">
    <a href="/" class="rounded px-8 py-2 btn-primary mr-2 button">Post a Job</a>
  </div>
</div>
