<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import Nav from "./../components/features/Nav.svelte";
  import BigContent from "./../components/features/BigContent.svelte";
  import SmallContent from "./../components/features/SmallContent.svelte";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
</script>

<main in:fadeIn out:fadeOut>
  <Header />
  <Nav />
  <BigContent />
  <!-- <SmallContent /> -->
  <Footer />
</main>
<svelte:head>
  <title>Litekart - Javascript ecommerce features</title>
</svelte:head>
