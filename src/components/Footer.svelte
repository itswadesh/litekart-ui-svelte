<script>
  import Icon from "svelte-awesome";
  import { facebook, twitter, github, youtube } from "svelte-awesome/icons";
</script>

<style>
  a:hover {
    color: #ccc;
  }
  /* .link {
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
  } */
</style>

<div
  class="flex flex-wrap justify-between px-6 pt-5 pb-3 text-xs text-white bg-gray-900 shadow-lg lg:px-24">
  <div class="w-1/2 mb-4 lg:w-1/4">
    <h4 class="my-2 text-gray-600">SOCIAL</h4>
    <ul class="leading-loose">
      <li class="">
        <a
          class="flex items-center"
          href="https://www.facebook.com/codenx2"
          rel="nofollow"
          target="blank"
          aria-label="facebook">
          <Icon data={facebook} class="w-4 mr-1 text-white" label="facebook" />
          Facebook
          <!-- <img src="svg/facebook-brands.svg" alt="" /> -->
        </a>
      </li>
      <li class="">
        <a
          rel="nofollow"
          class="flex items-center"
          href="https://twitter.com/codenx2"
          target="blank"
          aria-label="twitter">
          <Icon data={twitter} class="w-4 mr-1 text-white" label="twitter" />
          Twitter
          <!-- <img src="svg/twitter-square-brands.svg" alt="" /> -->
        </a>
      </li>
      <li class="">
        <a
          rel="nofollow"
          class="flex items-center"
          href="https://github.com/itswadesh"
          target="blank"
          aria-label="github">
          <Icon data={github} class="w-4 mr-1 text-white" label="github" />
          Github
          <!-- <img src=" svg/github-brands.svg" alt="" /> -->
        </a>
      </li>
      <li class="">
        <a
          rel="nofollow"
          class="flex items-center"
          href="https://www.youtube.com/user/codenx2"
          target="blank"
          aria-label="youtube">
          <Icon data={youtube} class="w-4 mr-1 text-white" label="youtube" />
          Youtube
          <!-- <img src=" svg/github-brands.svg" alt="" /> -->
        </a>
      </li>
    </ul>
  </div>
  <div class="w-1/2 mb-4 lg:w-1/4">
    <h4 class="my-2 text-gray-600">ABOUT</h4>
    <ul class="leading-loose">
      <li>
        <a rel="prefetch" href="/contact">Contact Us</a>
      </li>
      <li>
        <a rel="prefetch" href="/about-us">About Us</a>
      </li>
      <li>
        <a rel="prefetch" href="/litekart-story">Litekart Stories</a>
      </li>
      <li>
        <a rel="prefetch" href="/videos">Videos</a>
      </li>
    </ul>
  </div>
  <div class="w-1/2 mb-4 lg:w-1/4">
    <h4 class="my-2 text-gray-600">HELP</h4>
    <ul class="leading-loose">
      <li>
        <a rel="prefetch" href="/refund-policy">Cancellation & Returns</a>
      </li>
      <li>
        <a rel="prefetch" href="/faq">FAQ</a>
      </li>
      <li>
        <a rel="prefetch" href="/customizations">Customizations</a>
      </li>
      <li>
        <a rel="prefetch" href="/pricing">Pricing</a>
      </li>
    </ul>
  </div>
  <div class="w-1/2 mb-4 lg:w-1/4">
    <h4 class="my-2 text-gray-600">POLICY</h4>
    <ul class="leading-loose">
      <li class="">
        <a rel="prefetch" href="/refund-policy">Return Policy</a>
      </li>
      <li class="">
        <a rel="prefetch" href="/terms">Terms Of Use</a>
      </li>
      <li class="">
        <a rel="prefetch" href="/privacy-policy">Privacy</a>
      </li>
      <li class="">
        <a rel="prefetch" href="/blog">Blog</a>
      </li>
    </ul>
  </div>
  <!-- <div class="w-1/2 mb-4 lg:w-1/4">
    <h4 class="text-white border border-left-1">Mail Us</h4>
    </div> -->
</div>
<div
  class="py-4 text-center text-white bg-gray-900 border-t border-gray-500 communication">
  © 2014 - {new Date().getFullYear()} Misiki Technologies.
</div>
