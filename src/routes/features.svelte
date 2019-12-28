<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
</script>

<style>
  .scroll {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .scroll div {
    min-width: 150px;
  }
</style>

<Header />

<div class="flex justify-center lg:mb-10">
  <div class="scroll flex justify-between my-2">
    <div>
      <button
        class=" w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded ">
        <i class="fa fa-star text-2xl mb-3" />
        <h1 class="text-ms text-black ">Website Builders</h1>
      </button>
    </div>
    <div>
      <button
        class="w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded ">
        <i class="fa fa-shopping-cart text-2xl mb-3 " />
        <h1 class="text-ms text-black ">Shoping Cart</h1>
      </button>
    </div>
    <div>
      <button
        class="w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded ">
        <i class=" fa fa-store text-2xl mb-3 " />
        <h1 class="text-ms text-black ">Designe</h1>
      </button>
    </div>
    <div>
      <button
        class="w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded">
        <i class="fa fa-tools text-2xl mb-3" />
        <h1 class="text-ms text-black ">Manage Orders</h1>
      </button>
    </div>
    <div>
      <button
        class="w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded ">
        <i class=" fa fa-box text-2xl mb-3" />
        <h1 class="text-ms text-black ">Products</h1>
      </button>
    </div>
    <div>
      <button
        class="w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded ">
        <i class="fa fa-search text-2xl mb-3" />
        <h1 class="text-ms text-black ">Marketing & SEO</h1>
      </button>
    </div>
    <div>
      <button
        class="w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded ">
        <i class=" fa fa-shield-alt text-2xl mb-3 " />
        <h1 class="text-ms text-black ">Secure & Hosting</h1>
      </button>
    </div>
    <div>
      <button
        class="w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded">
        <i class=" fa fa-headset text-2xl mb-3" />
        <h1 class="text-ms text-black ">Costomer Support</h1>
      </button>
    </div>
    <div>
      <button
        class="w-32 h-32 m-2 flex flex-col text-gray-500 border hover:shadow-lg
        hover:text-red-400 border-b-8 hover:border-red-400 items-center p-4
        rounded">
        <i class=" fa fa-mobile text-2xl mb-3" />
        <h1 class="text-ms text-black ">Mobile & E-commerce</h1>
      </button>
    </div>
  </div>
</div>
<!-- 2nd section -->
<div class="flex flex-wrap bg-gray-100 px-2 lg:px-64 lg:mb-12">
  <div
    class="order-last lg:order-first leading-loose w-full lg:w-1/2 pr-0 lg:pr-12
    mb-8">
    <p class="mb-3">
      <b>
        Mobile shoppers make up the biggest eCommerce market, and mobile
        commerce is still growing with more online customers preferring to shop
        from mobile every year.
      </b>
      These days, a mobile-friendly website is essential for your business's
      growth and success, but it can be hard for a business to stay on top of
      emerging trends and technology.
    </p>
    3dcart is built from the ground up to be mobile-friendly, with no need for
    you to maintain multiple versions of your website or use custom code to
    implement important features like Google AMP. We're here to help your
    business meet the demand with cutting-edge mobile-first design, reach
    customers everywhere, and give them the shopping experience they're looking
    for.
  </div>
  <div class="lg:order-last order-first w-full lg:w-1/2">
    <img src="img/lady-left.png" class="w-full" alt="" />
  </div>
</div>
<!-- 2nd section -->
<!-- 3rd section -->
<div class="flex flex-wrap bg-gray-100 px-2 lg:px-64 lg:mb-12">
  <div class="leading-loose w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
    <img src="img/mobile-hand.png" class="w-full" alt="" />
  </div>
  <div class="w-full lg:w-1/2">
    <h1 class="text-4xl mb-2">What is Mobile Commerce?</h1>
    <p class=" flex align-left mb-3">
      Mobile commerce, or mCommerce, refers to all types of transactions
      performed on mobile devices, including mobile banking, money transfers,
      and of course shopping! Since mobile devices are so popular for browsing
      the internet, it's only natural that users love to do their shopping on
      mobile, too.
    </p>
    However, eCommerce and mobile commerce are not exactly the same. While
    mCommerce is similar to eCommerce, it requires a different approach that
    online store owners need to follow to ensure that their eCommerce websites
    are fully optimized for the mobile experience. As an eCommerce business
    owner, understanding of mobile optimization is essential to your success.
  </div>
</div>
<!-- 3rd section -->
<Footer />

<svelte:head>
  <title>Litekart - Experience the fastest ecommerce of 2020</title>
</svelte:head>
