<script>
  import { HOST } from "./../config";
  import {
    book,
    code,
    wrench,
    history,
    hourglassStart
  } from "svelte-awesome/icons";
  import Product from "./../components/Product.svelte";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  let cards = [
    {
      icon: code,
      color: "#000",
      heading: "API Reference",
      link: "https://docs.litekart.in/api.html",
      content:
        "Discover our RESTful API in detail, with example payloads, responses"
    },
    {
      icon: hourglassStart,
      color: "#24b47e",
      heading: "Getting Started",
      link: "https://docs.litekart.in/installation-instructions.html",
      content:
        "Installation instructions to get started with Litekart under 2 minutes"
    },
    {
      icon: book,
      color: "#3297d3",
      heading: "Guide",
      link: "https://docs.litekart.in/guide.html",
      content: "This guide describes concepts of Litekart to get you familiar"
    },
    {
      icon: wrench,
      color: "#8f6ed5",
      heading: "Settings",
      link: "https://docs.litekart.in/settings.html",
      content:
        "Settings that you can twick to suit your personal customization need"
    },
    {
      icon: history,
      color: "#e39f48",
      heading: "Development History",
      link: "https://docs.litekart.in/history.html",
      content: "A small walkthrough - evolution of Litekart from 2014 to 2019"
    }
  ];
</script>

<svelte:head>
  <title>Litekart - Trusted by 800+ developers arround the world</title>
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
    content="Litekart - Trusted by 800+ developers arround the world" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Save 1000hrs of development time and cost using litekart's pre
    prepared software. Customize it to any extend and make software deliveries
    in time. Made for developers by developers" />
  <meta name="og_url" property="og:url" content={`${HOST}`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Trusted by 800+ developers arround the world" />
  <meta
    name="twitter:description"
    content="Save 1000hrs of development time and cost using litekart's pre
    prepared software. Customize it to any extend and make software deliveries
    in time. Made for developers by developers" />
</svelte:head>

<main in:fadeIn out:fadeOut>
  <h1 class="text-5xl mt-8 mb-16 text-center font-bold">
    For
    <span class="underline">Developers</span>
  </h1>
  <div class="flex flex-wrap m-2 xl:mb-16">
    {#each cards as c}
      <Product product={c} />
    {/each}
  </div>
</main>
