<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import Nav from "./../components/features/Nav.svelte";
  import BigContent from "./../components/features/BigContent.svelte";
  import SmallContent from "./../components/features/SmallContent.svelte";
  function scrollTo() {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: 0
    });
  }
</script>

<Header />
<Nav />
<BigContent />
<!-- <SmallContent /> -->
<Footer />

<svelte:head>
  <title>Litekart - Features that power ecommerce</title>
</svelte:head>
