<style>
  .off {
    transition: transform 0.5s ease;
    transform: translateX(0);
  }
</style>

<div class="off w-full h-screen fixed md:hidden flex flex-col justify-between">
  <!-- Header -->
  <div
    class="sticky md:hidden flex mb-1 shadow justify-between items-center px-2
    bg-white text-gray-200">
    <button class="flex justify-around items-center">
      <i class="fa text-gray-700 text-2xl" />
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
    <!-- <div class="flex flex-col justify-center items-start"> -->
    <ul>
      <li>
        <button class=" m-2 P-4 border-gray">LOG IN</button>
      </li>
      <li>
        <button class=" m-2 P-4">SIGN IN</button>
      </li>
    </ul>
    <!-- </div> -->

  </div>
  <div class="flex ">
    <button class="post">Features</button>
  </div>
</div>
