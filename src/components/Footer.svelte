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
      <a
        href="https://www.facebook.com/codenx2"
        class="bg-primary mx-1 text-white text-xs rounded-full w-8 h-8 "
        target="blank"
        aria-label="facebook">
        <i class="fab fa-facebook-f" />
      </a>
      <a
        href="https://twitter.com/codenx2"
        target="blank"
        class="bg-primary mx-1 text-white rounded-full w-8 h-8 "
        aria-label="twitter">
        <i class="fab fa-twitter" />
      </a>
      <a
        href="https://www.github.com/itswadesh"
        target="blank"
        class="bg-primary mx-1 text-white rounded-full w-8 h-8 "
        aria-label="github">
        <i class="fab fa-github" />
      </a>
    </div>
  </div>
  <div class="text-white">
    <a href="/about-us" rel="prefetch" class="mr-2 link">About Us</a>
    <a href="/contact" rel="prefetch" class="mr-2 link">Contact Us</a>
    <a href="/terms" rel="prefetch" class="mr-2 link">Terms</a>
    <a href="/refund-policy" rel="prefetch" class="mr-2 link">
      Cancellation & Refund Policy
    </a>
    <a href="/privacy-policy" rel="prefetch" class="link">Privacy Policy</a>
  </div>
</div>
<div
  class="bg-gray-800 communication text-center text-white py-4 border-t
  border-gray-500">
  © 2015 - 2020 Misiki Technologies.
</div>
