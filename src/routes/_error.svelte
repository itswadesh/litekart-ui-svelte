<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>Litekart - {status}</title>
</svelte:head>
<div class="mx-auto my-16 lg:mx-48">
  <h1 class="text-4xl text-center">{status}-{error.message}</h1>
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</div>
