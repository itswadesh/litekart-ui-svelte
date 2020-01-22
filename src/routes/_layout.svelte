<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
</script>

<Header />
<div style="min-height:71.8vh" class="antialiased ">
  <slot />
</div>

<Footer />
