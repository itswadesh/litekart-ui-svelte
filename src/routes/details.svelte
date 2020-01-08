<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import SmallContent from "./../components/features/SmallContent.svelte";
</script>

<Header />
<div class=" border-gray-400 bg-gray-300 p-10">
  <h1 class="text-2xl flex justify-center ">Technologies Used</h1>
  <div
    class="border flex text-center justify-around border-gray-400 bg-gray-300
    p-10">
    <img src="img/techused.png" />
  </div>
  <div class="flex">
    <ul>
      <li>nodejs</li>
      <li>docker</li>
      <li>svelte</li>
    </ul>
  </div>
</div>

<div class="border border-gray-400 bg-gray-300 p-10 justify-around">
  <h1 class="text-3xl text-center mb-6">Hosting Platforms</h1>
  <div class="flex flex-col ">
    <div class="flex text-center justify-center p-4 ">
      <p class="p-4">
        <img src="img/digitalocean.png" />
      </p>
      <p class="p-4">
        <img src="img/amazoncloud.png" />
      </p>
    </div>
    <div class=" flex text-center justify-center">
      <p class="p-4">
        <img src="img/googlecloud.png" />
      </p>
      <p class="p-4">
        <img src="img/vurtle.png" />
      </p>
    </div>
  </div>
</div>
<SmallContent />
<Footer />

<svelte:head>
  <title>Litekart - Features that power ecommerce</title>
</svelte:head>
