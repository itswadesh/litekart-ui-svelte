<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
</script>

<style>
  h1 {
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-weight: bold;
  }
</style>

<svelte:head>
  <title>Litekart - About Us</title>
</svelte:head>
<Header />
<div class="mb-16 mx-2 lg:mx-48">
  <h1 class="text-4xl text-center">About</h1>
  <div class="py-6 mx-5">
    <h1 class="flex justify-center text-4xl text-gray-600 ">
      “Helping You Build An Online Brand”
    </h1>
    <p
      class=" flex justify-center mb-4 text-center text-xl font-semibold
      leading-normal">
      Shiprocket 360, formerly Kartrocket, is a product of Delhi-based BigFoot
      Retail Solution. It offers an end-to-end eCommerce solution to Small and
      Medium-Sized Enterprise businesses to strengthen their footprints in the
      eCommerce space.
    </p>
    <p class="flex justify-center text-center text-ms mb-6 font-medium">
      Founded in 2012, Shiprocket 360 has acquired 5,000 happy clients to date.
      If you’re an eCommerce business owner, all you need to do is choose your
      goal and we will help you develop the optimal technology platform for your
      business.Our range of eCommerce solutions includes omnichannel retail
      solutions, multivendor website development, hyperlocal marketplace
      solutions and many more.We are continuously evolving to drive eCommerce
      for Indian merchants so that they can enable a better experience for their
      customers using our technology and analytics at every stage of the cycle.
    </p>
  </div>
</div>

<div class=" flex bg-gray-100 justify-between lg:py-12 lg:px-64 flex-wrap ">
  <div class="flex-1 flex flex-col bg-white text-center shadow m-6 rounded-lg">
    <img src="img/mission.png" alt=" " class=" " />
    <p class="p-4">
      With a mission of “Selling Online Simplified,” Shiprocket 360 aims to
      offer an easy ecommerce enablement platform where small retailers and
      SME’s can start their online store with their brand name, at the best
      prices.
    </p>
  </div>
  <div class="flex-1 flex flex-col bg-white text-center shadow m-6 rounded ">
    <img src="img/vison.png" alt="" class=" " />
    <p class="p-4">
      To simplify e-tailing for Indian merchants by offering the complete
      ecommerce solution, so that they can easily come up with their online
      store and start selling online.
    </p>
  </div>
  <div class="flex-1 flex flex-col bg-white text-center shadow m-6 rounded ">
    <img src="img/values.png" alt="" class=" " />
    <p class="p-4">
      Shiprocket 360 wants to reduce ecommerce to its bare bones for small
      retailers and SME’s. We bridge the gap between technology and innovation
      by providing an easy yet powerful ecommerce enablement platform,
      Shiprocket 360.
    </p>
  </div>
</div>

<div class="py-12 justify-center mx-5">
  <h3 class="text-center text-4xl font-medium ">
    Experience Work As A Rocketeer!
  </h3>
  <p class=" flex justify-center">__________________</p>
  <p class="py-6 flex justify-center text-center ">
    At Shiprocket 360, we don’t just offer jobs, but a career. If you are crazy
    about work and party, then we are waiting for you, eagerly!
  </p>
  <div class="flex justify-center">
    <button
      class=" flex jusify-center bg-primary m-6 px-4 py-2 rounded text-white">
      Apply Now
    </button>
  </div>
</div>
<Footer />
