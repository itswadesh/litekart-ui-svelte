<script>
  import Header from "./../components/Header.svelte";
  import Hero from "./../components/Hero.svelte";
  import Highlight from "./../components/Highlight.svelte";
  import Features from "./../components/Features.svelte";
  import Clients from "./../components/Clients.svelte";
  import Pricing from "./../components/Pricing.svelte";
  import Display from "./../components/Display.svelte";
  import Dad from "./../components/Dad.svelte";
  import Rocket from "./../components/Rocket.svelte";
  import Footer from "./../components/Footer.svelte";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { HOST } from "./../config";
</script>

<svelte:head>
  <title>Litekart - Most advanced javascript ecommerce of 2020</title>
  <meta
    data-hid="description"
    name="description"
    content="Free javascript ecommerce platform with essential enterprise level
    features. Only pay on customizations for your brand" />
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
    content="Litekart - Most advanced javascript ecommerce of 2020" />
  <meta name="og_url" property="og:url" content={`${HOST}`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Most advanced javascript ecommerce of 2020" />
  <meta
    name="twitter:description"
    content="Free javascript ecommerce platform with essential enterprise level
    features. Only pay on customizations for your brand" />
  <link rel="canonical" href={`${HOST}`} />
  <link rel="alternate" hreflang="en" href={`${HOST}`} />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <Header />
  <div>
    <Hero />
    <Features />
    <Rocket />
    <Highlight />
    <!-- <Clients /> -->
    <Pricing />
    <Display />
    <Dad />
  </div>
  <Footer />
</main>
