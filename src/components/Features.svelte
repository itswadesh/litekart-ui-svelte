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
  class="bg-gray-200 mt-6 text-gray-700 flex justify-center shadow-lg flex-wrap">
  <div class="scroll flex">
    <div
      class="flex-1 border-r border-gray-400 px-6 py-4 flex flex-col text-center
      ">
      <i class="fa fa-low-vision icon text-4xl m-2" />
      Cutting-edge Technologies
    </div>
    <div
      class="flex-1 border-r border-gray-400 px-6 py-4 flex flex-col text-center
      ">
      <i class="fa fa-tv icon text-4xl m-2" />
      NodeJS + MongoDB + ES + Microservices
    </div>
    <div
      class="flex-1 border-r border-gray-400 px-6 py-4 f flex flex-col
      text-center">
      <i class="fa fa-tools icon text-4xl m-2" />
      Customize it the way you want
    </div>
    <div
      class="flex-1 border-r border-gray-400 px-6 py-4 flex flex-col text-center">
      <i class="fa fa-sign-in-alt icon text-4xl m-2 " />
      Progressive ecommerce app made with NodeJS
    </div>
    <div
      class="flex-1 border-r border-gray-400 px-6 py-4 flex flex-col text-center">
      <i class=" fa fa-search-dollar icon text-4xl m-2" />
      High on-page SEO + off-page ready
    </div>
    <div
      class="flex-1 border-r border-gray-400 px-6 py-4 flex flex-col text-center">
      <i class="fa fa-chart-bar icon text-4xl m-2 " />
      Scalable as well as Performant
    </div>
    <div
      class="flex-1 border-r border-gray-400 px-6 py-4 flex flex-col text-center">
      <i class="fa fa-universal-access icon text-4xl m-2 " />
      Modern API based architecture
    </div>
    <a
      href="/features"
      class="flex-1 flex flex-col items-center justify-center text-sm p-5 icon
      underline ">
      see all 100+
      <br />
      features
    </a>
  </div>
</div>
