<script>
  import Nav from "./../components/features/Highlights.svelte";
  import BigContent from "./../components/features/BigContent.svelte";
  import SmallContent from "./../components/features/SmallContent.svelte";
  import { host } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
</script>

<svelte:head>
  <title>Litekart - NodeJS ecommerce features</title>
  <meta
    data-hid="description"
    name="description"
    content="Litekart offers cutting edge features which is a generation ahead
    of other ecommerce softwares." />
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
    content="Litekart - NodeJS ecommerce features" />
  <meta name="og_url" property="og:url" content={`${host}/features`} />
  <!-- Twitter -->
  <meta name="twitter:title" content="Litekart - NodeJS ecommerce features" />
  <meta
    name="twitter:description"
    content="Litekart offers cutting edge features which is a generation ahead
    of other ecommerce solutions." />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <h1 class="mt-8 mb-16 text-5xl font-bold text-center">
    <span class="underline">Features</span>
  </h1>
  <Nav />
  <BigContent />
  <!-- <SmallContent /> -->
</main>
