<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
</script>

<style>
  .teacher {
    background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
  }
  .gs-1 {
    background-color: rgb(45, 182, 45);
  }
  .gs-2 {
    background-color: rgb(106, 42, 196);
  }
  .gs-3 {
    background-color: rgb(5, 213, 255);
  }
  .b-black {
    border-top-width: 32px;
    border-color: #111;
  }
  .b-yellow {
    border-top-width: 32px;
    border-color: #f6e05e;
  }
  .b-orange {
    border-top-width: 32px;
    border-color: #ff7426;
  }
</style>

<svelte:head>
  <title>Litekart - Pricing & fees</title>
</svelte:head>

<Header />
<div class="flex flex-wrap justify-center">
  <!-- student 1 -->
  <div class="w-full lg:w-1/3 p-2 lg:pr-8 lg:pl-8">
    <div
      class="b-black flex flex-col mb-3 lg:my-12 justify-between text-center
      border-0 rounded-lg shadow-lg bg-white p-10 lg:p-8">
      <h1 class="text-4xl mb-2 font-bold">Free</h1>
      <h2 class="text-green-500 text-xl mb-6">For developers</h2>
      <div class="text-center">
        <ul class="text-gray-600">
          <li class="mb-4">Open Source</li>
          <li class="mb-4">MIT Licensed</li>
          <li class="mb-4">Authentication</li>
          <li class="mb-4">Cart & Checkout</li>
          <li class="mb-4">Server Rendered</li>
          <li class="mb-4">Lazy loading</li>
          <li class="mb-4">Loading Indicators</li>
          <li class="mb-4">Carousels</li>
          <li class="mb-4">Community Support</li>
        </ul>
      </div>
      <a
        href="https://github.com/itswadesh/sapper-ecommerce"
        class="gs-1 text-white p-2 rounded-full shadow-lg ">
        Download
      </a>
    </div>
  </div>
  <!-- student 1 -->
  <!-- student 2 -->
  <div class="w-full lg:w-1/3 p-2 lg:pr-8">
    <div
      class="b-orange flex flex-col mb-3 lg:my-12 justify-between text-center
      border-0 rounded-lg shadow-lg bg-white p-8">
      <h1 class="text-4xl mb-2 font-bold">
        Premium
        <!-- <span class="text-sm text-mute">(For Store Owners)</span> -->
      </h1>
      <h2 class="text-pink-500 text-xl mb-6">$5999.00</h2>
      <div class="text-center">
        <ul class="text-gray-600">
          <li class="mb-4 text-green-500">Free setup</li>
          <li class="mb-4">Unlimited Products</li>
          <li class="mb-4">Unlimited Checkouts</li>
          <li class="mb-4">4 user roles</li>
          <li class="mb-4">Progressive web app</li>
          <li class="mb-4">Email/SMS Notifications</li>
          <li class="mb-4">Auto invoice generation</li>
          <li class="mb-4">SEO Optimized</li>
          <li class="mb-4">Server Rendered</li>
          <li class="mb-4">Free SSL</li>
          <li class="mb-4">Reports & Analytics</li>
          <li class="mb-4">1 click deploy to cloud</li>
          <li class="mb-4">Payment Gateway Integration</li>
          <li class="mb-4">Facebook optimized product</li>
          <li class="mb-4">Product Rating and Reviews</li>
          <li class="mb-4">Social Media Logins</li>
          <li class="mb-4">Faceted Search</li>
          <li class="mb-4">Premium Suport With 1 Day</li>
        </ul>
      </div>
      <button class="gs-2 text-white p-2 rounded-full shadow-lg">
        Get Started
      </button>
    </div>
  </div>
  <!-- student 2 -->
  <!-- student 3 -->
  <div class="w-full lg:w-1/3 p-2 lg:pr-8">
    <div
      class="b-yellow flex flex-col mb-3 lg:my-12 justify-between text-center
      border-0 rounded-lg shadow-lg bg-white p-8">
      <h1 class="text-4xl mb-2 font-bold">Enterprise</h1>
      <h2 class="text-blue-500 text-xl mb-6">$24999.00</h2>
      <div class="text-center">
        <ul class="text-gray-600">
          <li class="mb-4 text-red-500">All features of Premium +</li>
          <li class="mb-4">Custom Theme Integration</li>
          <li class="mb-4">Discount Coupons</li>
          <li class="mb-4">Promotions</li>
          <li class="mb-4">Android & IOS App</li>
          <li class="mb-4">Abandoned Cart</li>
          <li class="mb-4">Marketplace integration</li>
          <li class="mb-4">Multi seller</li>
          <li class="mb-4">Affiliate Management</li>
          <li class="mb-4">99.95% Uptime SLA</li>
          <li class="mb-4">Premium 24/7 Support</li>
        </ul>
      </div>
      <button class="gs-3 text-white p-2 rounded-full shadow-lg ">
        Get Started
      </button>
    </div>
  </div>
  <!-- student 3 -->
</div>
<Footer />
