<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import SmallContent from "./../components/features/SmallContent.svelte";
</script>

<Header />
<div class="border border-gray-400 bg-gray-300 p-10">
  <h1 class="text-2xl">Technologies Used</h1>
  <p>Serverless</p>
  <p>Docker</p>
  <p>Elastic Search</p>
  <p>MongoDB</p>
  <p>S3</p>
  <p>NodeJS</p>
  <p>VueJS</p>
  <p>Svelte</p>
  <p>Express</p>
</div>

<div class="border border-gray-400 bg-gray-300 p-10">
  <h1 class="text-2xl">Hosting Platforms</h1>
  <p>Digital Ocean</p>
  <p>Amazon Cloud</p>
  <p>Google Cloud</p>
  <p>Vultr</p>
</div>

<SmallContent />
<Footer />

<svelte:head>
  <title>Litekart - Features that power ecommerce</title>
</svelte:head>
