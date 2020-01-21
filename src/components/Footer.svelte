<script>
  import Icon from "svelte-awesome";
  import { facebook, twitter, github } from "svelte-awesome/icons";
</script>

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
  class="bg-gray-900 justify-between flex flex-wrap px-6 lg:px-24 py-6 shadow-lg
  ">
  <div class="flex ">
    <div class="flex text-white items-center">
      follow us on &nbsp;
      <a
        href="https://www.facebook.com/codenx2"
        target="blank"
        class="bg-primary mx-1 flex justify-center items-center text-xs
        rounded-full w-8 h-8"
        aria-label="facebook">
        <Icon data={facebook} class="" label="facebook" />

        <!-- <img src="svg/facebook-brands.svg" alt="" /> -->
      </a>
      <a
        href="https://twitter.com/codenx2"
        target="blank"
        class="bg-primary mx-1 flex justify-center items-center text-xs
        rounded-full w-8 h-8"
        aria-label="twitter">
        <Icon data={twitter} class="" label="twitter" />
        <!-- <img src="svg/twitter-square-brands.svg" alt="" /> -->
      </a>
      <a
        href="https://github.com/itswadesh"
        target="blank"
        class="bg-primary mx-1 flex justify-center items-center text-xs
        rounded-full w-8 h-8"
        aria-label="github">
        <Icon data={github} class="" label="github" />

        <!-- <img src=" svg/github-brands.svg" alt="" /> -->
      </a>
    </div>
  </div>
  <div class="text-white leading-loose flex flex-wrap items-center">
    <a href="/about-us" rel="prefetch" class="link mr-4 my-2 ">
      <span class="">About Us</span>
    </a>
    <a href="/contact" rel="prefetch" class="link mr-4 my-2 ">
      <span class="">Contact Us</span>
    </a>
    <a href="/terms" rel="prefetch" class="link mr-4 my-2 ">
      <span class="">Terms</span>
    </a>
    <a href="/refund-policy" rel="prefetch" class="link mr-4 my-2">
      <span class="">Cancellation & Refund Policy</span>
    </a>
    <a href="/privacy-policy" rel="prefetch" class="link">
      <span>Privacy Policy</span>
    </a>
  </div>
</div>
<div
  class="bg-gray-900 communication text-center text-white py-4 border-t
  border-gray-500">
  © 2015 - {new Date().getFullYear()} Misiki Technologies.
</div>
