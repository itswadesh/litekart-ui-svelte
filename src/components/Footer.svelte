<style>
  .link {
    position: relative;
  }
  .link:after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #ff7426;
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
  }
  .link:hover:after {
    width: 100%;
    left: 0;
    background: #ff7426;
  }
</style>

<div
  class="bg-gray-800 justify-between flex flex-wrap px-6 lg:px-24 py-6 shadow-lg
  ">
  <div class="flex ">
    <div class=" flex items-center justify-left text-white">
      follow us on &nbsp;
      <button class="bg-primary mx-1 text-white text-xs rounded-full w-8 h-8 ">
        <a href="https://www.facebook.com">
          <i class="fa fa-apple-alt text-xl" />
        </a>
      </button>
      <button class="bg-primary mx-1 text-white rounded-full w-8 h-8 ">
        <a href="https://www.twitter.com">
          <i class="fa fa-apple-alt text-xl" />
        </a>
      </button>
      <button class="bg-primary mx-1 text-white rounded-full w-8 h-8 ">
        <a href="https://www.github.com">
          <i class="fa fa-apple-alt text-xl" />
        </a>
      </button>
    </div>
  </div>
  <div class="text-white">
    <a href="/terms" class="mr-2 link">Terms</a>
    <a href="/privacy-policy" class="link">Privacy Policy</a>
  </div>
</div>
<div
  class="bg-gray-800 communication text-center text-white py-4 border-t
  border-gray-500">
  © 2015 - 2020 Misiki Technologies.
</div>
