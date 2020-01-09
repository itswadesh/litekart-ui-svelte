<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import SmallContent from "./../components/features/SmallContent.svelte";
</script>

<style>
  .ipad {
    background: #a7e0c8;
  }
</style>

<Header />
<div class=" border-gray-400 bg-gray-300 p-3">
  <h1 class="text-2xl flex justify-center ">Technologies Used</h1>
  <div
    class="border flex text-center justify-around border-gray-400 ipad bg-black
    p-4 flex-wrap">
    <img src="img/mobile-layout-final.png" alt="" />
    <div class="flex ">
      <ul class="text-2xl text-black">
        <li>Nodejs</li>
        <li>Docker</li>
        <li>Svelte</li>
        <li>S3</li>
        <li>Serverless</li>
        <li>Express</li>
      </ul>
    </div>
  </div>

</div>

<div class="border border-gray-400 bg-gray-300 p-10 justify-around">
  <h1 class="text-3xl text-center mb-6">Hosting Platforms</h1>
  <div class="flex flex-col ">
    <div class="flex text-center justify-center p-4 ">
      <p class="p-4">
        <img src="img/digitalocean.png" alt="" />
      </p>
      <p class="p-4">
        <img src="img/amazoncloud.png" alt="" />
      </p>
      <p class="p-4">
        <img src="img/googlecloud.png" alt="" />
      </p>
      <p class="p-4">
        <img src="img/vurtle.png" alt="" />
      </p>
    </div>
  </div>
</div>

<SmallContent />
<Footer />

<svelte:head>
  <title>Litekart - Features that power ecommerce</title>
</svelte:head>
