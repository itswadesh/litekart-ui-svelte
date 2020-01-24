<script>
  import { HOST } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
</script>

<style>
 
</style>

<svelte:head>
  <title>Litekart - Videos and tutorials</title>
  <meta
    data-hid="description"
    name="description"
    content="Litekart educational videos explaining features, how to use, how to customize." />
  <meta
    name="keywords"
    content="javasctipt ecommerce, image optimization, lazy loading, seo, fast ,
    search engine optimization, easy, headless, authentication, cart & checkout,
    tailwindcss, server rendered, proxy + api integrated, animations, stores,
    lazy loading, loading indicators, carousel, instant search, faceted filters" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Litekart - Videos and tutorials" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Litekart educational videos explaining features, how to use, how to customize." />
  <meta name="og_url" property="og:url" content={`${HOST}/terms`} />
  <!-- Twitter -->
  <meta name="twitter:title" content="Litekart - Videos and tutorials" />
  <meta
    name="twitter:description"
    content="Litekart educational videos explaining features, how to use, how to customize." />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="mb-16 mx-2 lg:mx-48 ">
    <h1 class="text-5xl mt-8 mb-16 text-center font-bold">
      <span class="underline">Videos</span>
    </h1>
    <h2 class="text-xl">Coming Soon...</h2>
  </div>
</main>
