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
</script>

<svelte:head>
  <title>
    Litekart - Experience the most advanced javascript ecommerce of 2020
  </title>
</svelte:head>
<main in:fadeIn out:fadeOut>
  <Header />
  <div>
    <Hero />
    <Features />
    <Rocket />
    <Highlight />
    <Clients />
    <Pricing />
    <Display />
    <Dad />
  </div>
  <Footer />
</main>
