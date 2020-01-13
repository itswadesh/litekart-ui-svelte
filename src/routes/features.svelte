<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import Nav from "./../components/features/Nav.svelte";
  import BigContent from "./../components/features/BigContent.svelte";
  import SmallContent from "./../components/features/SmallContent.svelte";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { HOST } from "./../config";
</script>

<svelte:head>
  <title>Litekart - Javascript ecommerce features</title>
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
    content="Litekart - Javascript ecommerce features" />
  <meta name="og_url" property="og:url" content={`${HOST}`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Javascript ecommerce features" />
  <meta
    name="twitter:description"
    content="Litekart offers cutting edge features which is a generation ahead
    of other ecommerce solutions." />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <Header />
  <Nav />
  <BigContent />
  <!-- <SmallContent /> -->
  <Footer />
</main>
