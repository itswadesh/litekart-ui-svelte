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
  <button class="flex justify-around items-center">
    <i class="fa fa-bars text-gray-700 text-2xl" />

  </button>
  <button class="text-gray-700 items-center">
    <img src="img/logo.svg" alt="" class="h-12 w-32" />
  </button>
  <button class="flex justify-around items-center">
    <i class="fa fa-search text-gray-700 text-2xl" />
  </button>
</div>
<!-- for desktop -->
<div
  class="sticky hidden md:flex md:mb-1 md:shadow md:justify-around
  md:items-center md:px-6 md:bg-white md:text-gray-200">
  <div>
    <img src="img/logo.svg" alt="" class="h-12 w-32" />
  </div>
  <div class="text-gray-700 items-center" />
  <div class=" flex justify-between text-gray-700 ">
    <button class="p-2 rounded text-xs ml-4">LOG IN</button>
    <button class="p-2 rounded text-xs ml-4">SIGN UP</button>
    <button
      class="post shadow py-1 px-4 ml-6 mx-auto rounded text-white text-xs ">
      <b>Post a Job</b>
    </button>
  </div>
</div>
