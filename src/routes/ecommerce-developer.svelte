<script>
  import {
    book,
    code,
    wrench,
    history,
    hourglassStart
  } from "svelte-awesome/icons";
  import Product from "./../components/Product.svelte";
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

<h1 class="text-5xl mt-8 mb-16 text-center font-bold">
  For
  <span class="underline">Developers</span>
</h1>
<div class="flex flex-wrap m-2 xl:mb-16">
  {#each cards as c}
    <Product product={c} />
  {/each}
</div>
