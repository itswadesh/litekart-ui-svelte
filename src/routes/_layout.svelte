<script>
  import { stores } from "@sapper/app";
  import Nav from "./../components/Nav.svelte";
  import Footer from "./../components/Footer.svelte";
  import PreloadingIndicator from "./../components/ui/PreloadingIndicator.svelte";
  export let segment;
  const { preloading } = stores();
</script>

{#if $preloading}
  <PreloadingIndicator />
{/if}
<Nav {segment} />
<div style="min-height:71.8vh" class="antialiased ">
  <slot />
</div>

<Footer />
