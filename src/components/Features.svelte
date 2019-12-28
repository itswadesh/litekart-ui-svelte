<style>
  .scroll {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .flex {
    display: flex;
    flex-wrap: nowrap;
  }
  .scroll div {
    min-width: 150px;
  }
</style>

<div class="bg-gray-200 flex justify-center shadow flex-wrap">
  <div class="scroll flex">
    <div class="border-r border-gray-400 p-2 w-1/2 flex flex-col items-center">
      <img src="img/8.svg" alt="" class="m-5 h-12" />
      Web Dev
    </div>
    <div
      class="border-r border-gray-400 p-2 f w-1/2 flex flex-col items-center">
      <i class="fa fa-mobile text-gray-600 text-4xl" />
      mobile
    </div>
    <div class="border-r border-gray-400 p-2 w-1/2 flex flex-col items-center">
      <img src="img/10.svg" alt="" class="m-5 h-12" />
      Design
    </div>
    <div class="border-r border-gray-400 p-2 w-1/2 flex flex-col items-center">
      <img src="img/11.svg" alt="" class="m-5 h-12" />
      Writing
    </div>
    <div class="border-r border-gray-400 p-2 w-1/2 flex flex-col items-center">
      <img src="img/12.svg" alt="" class="m-5 h-12" />
      Marketing
    </div>
    <div
      class="border-r border-gray-400 p-2 f w-1/2 flex flex-col items-center">
      <img src="img/acc.svg" alt="" class="m-5 h-12" />
      Accounting
    </div>
    <a
      href="/"
      class=" flex flex-col justify-center text-sm p-5 text-red-700 underline ">
      see all 80+
      <br />
      categories
    </a>
  </div>
</div>
