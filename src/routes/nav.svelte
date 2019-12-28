<style>
  .off {
    transition: transform 0.5s ease;
    transform: translateX(0);
  }
  .post {
    background-color: #37a000;
  }
  .footer {
    background-color: #f9f9f9;
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
        <hr class="mt-2" />
        <button class=" m-2 py-2 px-6 border-gray">LOG IN</button>
      </li>
      <li>
        <hr />
        <button class="flex m-2 px-6 py-2">SIGN IN</button>
      </li>
    </ul>
    <hr />

    <!-- </div> -->

  </div>
  <div
    class="footer py-3 mt-4 flex justify-center bg-gray-200 shadow border-t ">
    <button class="post px-6 py-1 rounded text-white text-xl">
      Post a Job
    </button>
  </div>
</div>
