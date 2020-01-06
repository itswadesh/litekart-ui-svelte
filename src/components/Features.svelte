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
  .icon {
    color: #ff7426;
  }
</style>

<div
  class="bg-gray-200 mt-6 text-black flex justify-center shadow-lg flex-wrap">
  <div class="scroll flex">
    <div
      class="flex-1 border-r border-gray-400 p-4 w-1/2 flex flex-col text-center
      ">
      <i class="fa fa-low-vision icon text-4xl m-2" />
      Cutting-edge Technologies
    </div>
    <div
      class="flex-1 border-r border-gray-400 p-4 w-1/2 flex flex-col text-center
      ">
      <i class="fa fa-tv icon text-4xl m-2" />
      Go live under 1 week
    </div>
    <div
      class="flex-1 border-r border-gray-400 p-4 f w-1/2 flex flex-col
      text-center">
      <i class="fa fa-tools icon text-4xl m-2" />
      No-Limit Customizations
    </div>
    <div
      class="flex-1 border-r border-gray-400 p-4 w-1/2 flex flex-col text-center">
      <i class="fa fa-sign-in-alt icon text-4xl m-2 " />
      PWA & NodeJS
    </div>
    <div
      class="flex-1 border-r border-gray-400 p-4 w-1/2 flex flex-col text-center">
      <i class=" fa fa-search-dollar icon text-4xl m-2" />
      High SEO friendly
    </div>
    <div
      class="flex-1 border-r border-gray-400 p-4 w-1/2 flex flex-col text-center">
      <i class="fa fa-chart-bar icon text-4xl m-2 " />
      Scalable & Performant
    </div>
    <div
      class="flex-1 border-r border-gray-400 p-4 f w-1/2 flex flex-col
      text-center">
      <i class="fa fa-universal-access icon text-4xl m-2 " />
      All devices & Platforms
    </div>
    <a
      href="/features"
      class=" flex flex-col justify-center text-sm p-5 icon underline ">
      see all 100+
      <br />
      features
    </a>
  </div>
</div>
