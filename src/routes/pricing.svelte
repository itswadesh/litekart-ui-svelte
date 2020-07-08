<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN, host } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  let p1 = [
    "Instant delivery",
    "Open source licensed",
    "Headless",
    "Authentication",
    "Cart & checkout",
    "Tailwind CSS",
    "Server rendered",
    "1 command deploy to production",
    "Lazy loading",
    "Animations",
    "Stores",
    "Proxy + API integrated",
    "Lazy loading",
    "Loading indicators",
    "Carousels",
    "Community support"
  ];
  let p2 = [
    "1 day delivery",
    "Unlimited products",
    "Unlimited checkouts",
    "4 user roles",
    "Progressive web app",
    "Email/SMS notifications",
    "Auto invoice generation",
    "SEO optimized",
    "Server rendered",
    "Reports & Analytics",
    "1 click deploy to cloud",
    "Payment gateway integration",
    "Facebook optimized product",
    "Product rating and reviews",
    "Social media logins",
    "Faceted search",
    "Free SSL",
    "Premium 24/7 support"
  ];
  let p3 = [
    "1 month delivery",
    "Custom theme integration",
    "Discount coupons",
    "Promotions",
    "Android & IOS app",
    "Abandoned cart",
    "Marketplace integration",
    "Multi seller",
    "Affiliate management",
    "99.95% uptime"
  ];
</script>

<style>
  h1,
  h2 {
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  ul > li {
    margin: 0.75rem 0;
  }
  ul > li img {
    margin-right: 0.75rem;
  }
  .gs-1 {
    background-color: black;
  }
  .gs-2 {
    background-color: #0070f3;
  }
  .gs-3 {
    background-color: rgb(106, 42, 196);
  }
</style>

<svelte:head>
  <title>Litekart - Pricing & fees</title>
  <meta
    data-hid="description"
    name="description"
    content="Litekart is essentially free for developers and startups. You only
    pay for customizations that are specific to your brand" />
  <meta
    name="keywords"
    content="free ecommerce software, opensource ecommerce, node js ecommerce,
    open source nodejs projects, online store front" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Litekart - Free for developers & startups" />

  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Litekart is essentially free for developers and startups. You only
    pay for customizations that are specific to your brand" />

  <meta name="og_url" property="og:url" content={`${host}/pricing`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Enterprise level ecommerce software free for developers
    & startups" />
  <meta
    name="twitter:description"
    content="Litekart is essentially free for developers and startups. You only
    pay for customizations that are specific to your brand" />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="px-4 py-8 text-center lg:px-48">
    <h1 class="mt-8 text-5xl font-bold text-center">
      <span class="underline">Grow</span>
      with us
    </h1>
    <h2 class="mb-8 text-xl leading-loose lg:text-2xl">
      Free for developers & startups
    </h2>
    <div class="flex flex-wrap lg:flex-no-wrap ">
      <!-- student 1 -->
      <div class="w-full p-2 lg:w-1/3 lg:pr-8 lg:pl-8 ">
        <div
          class="flex flex-col justify-between mb-3 bg-gray-100 border-0 rounded-lg shadow-lg lg:my-12 ">
          <div class="bg-white">
            <h3 class="mb-2 text-4xl font-bold">Free</h3>
            <h4 class="mb-6 text-green-500">For developers</h4>
          </div>

          <div class="text-center ">
            <ul
              class="flex flex-col justify-center px-12 pb-3 bg-white border-b border-gray-300 lg:px-12">
              {#each p1 as i}
                <li class="flex items-center text-left">
                  <img
                    src={`${CDN}../../svg/checkblack.svg`}
                    alt=""
                    class="w-5 h-5 " />
                  {i}
                </li>
              {/each}
            </ul>
          </div>

          <p class="m-8 text-2xl">
            <b class="text-4xl font-bold text-black">$0</b>
            /month
          </p>

          <a
            href="https://github.com/itswadesh/sapper-ecommerce"
            class="py-3 m-3 text-white rounded shadow-lg gs-1 ">
            Download
          </a>

        </div>
      </div>
      <!-- student 1 -->
      <!-- student 2 -->
      <div class="w-full p-2 lg:w-1/3 lg:pr-8">
        <div
          class="flex flex-col mb-3 bg-white border-0 rounded-lg shadow-lg lg:my-12">
          <div class="bg-white">
            <h3 class="mb-2 text-4xl font-bold">Free</h3>
            <h4 class="mb-4 text-pink-500">For Startups</h4>
          </div>
          <div class="">
            <ul
              class="flex flex-col px-12 pb-3 bg-white border-b border-gray-300 lg:px-12">
              <li class="flex items-center my-6 ">
                <img
                  src={`${CDN}../../svg/checkblue.svg`}
                  alt=""
                  class="w-5 h-5 " />
                Complete Stack Setup
              </li>
              {#each p2 as i}
                <li class="flex items-center my-6 text-left ">
                  <img
                    src={`${CDN}../../svg/checkblue.svg`}
                    alt=""
                    class="w-5 h-5 " />
                  {i}
                </li>
              {/each}
            </ul>
          </div>
          <p class="m-8 text-2xl">
            <b class="text-4xl font-extrabold text-black">$0</b>
            /month
          </p>

          <a href="/contact" class="py-3 m-3 text-white rounded shadow-lg gs-2">
            Get Started
          </a>
        </div>
      </div>
      <!-- student 2 -->
      <!-- student 3 -->
      <div class="w-full p-2 lg:w-1/3 lg:pr-8">
        <div
          class="flex flex-col justify-between mb-3 text-center bg-white border-0 rounded-lg shadow-lg lg:my-12">
          <div class="bg-white">
            <h3 class="mb-2 text-4xl font-bold">Enterprise</h3>
            <!-- <h3 class="mb-6 text-xl text-blue-500">$24999.00</h3> -->
          </div>
          <div class="">
            <ul
              class="flex flex-col px-12 pb-3 text-gray-600 bg-white border-b border-gray-300 lg:px-12">
              <li class="mb-4 text-red-500">All features of Premium +</li>
              {#each p3 as i}
                <li class="flex items-center my-6 text-left ">
                  <img
                    src={`${CDN}../../svg/checkpurpel.svg`}
                    alt=""
                    class="w-5 h-5 " />
                  {i}
                </li>
              {/each}
            </ul>
          </div>

          <p class="m-8 text-2xl">
            <b class="text-4xl font-extrabold text-black">Get a quote</b>
          </p>
          <a
            href="/contact"
            class="py-3 m-3 text-white rounded shadow-lg gs-3 ">
            Get Started
          </a>
        </div>
      </div>
      <!-- student 3 -->
    </div>
  </div>
</main>
