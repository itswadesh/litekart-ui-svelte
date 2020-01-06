<script>
  // import { onMount } from "svelte";

  // onMount(() => {
  //   scrollTo("h1-1");
  // });
  let features = [
    { icon: "box", data: "Products Management" },
    { icon: "database", data: "Order Management" },
    { icon: "shopping-cart", data: "Shoping Cart" },
    { icon: "search", data: "SEO" },
    { icon: "chart-line", data: "Performance" },
    { icon: "users", data: "Marketing" },
    { icon: "shield-alt", data: "Secure & Hosting" },
    { icon: "terminal", data: "Developer Tools" },
    { icon: "credit-card", data: "Payment Gateways" },
    { icon: "microchip", data: "Technology" },
    { icon: "mobile", data: "Mobile & E-commerce" }
  ];
  function scrollTo(h1) {
    if (window) var elmnt = document.getElementById(h1);
    elmnt.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  }
</script>

<style>
  .scroll {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .scroll div {
    min-width: 150px;
  }
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: white;
  }
</style>

<div class="flex justify-center lg:mb-10 sticky shadow-lg">
  <div class="scroll flex justify-start my-2">
    {#each features as f, ix}
      <button on:click={() => scrollTo('h1-' + ix)}>
        <div
          class=" w-32 h-32 m-2 flex flex-col text-gray-500 border
          hover:shadow-lg hover:text-orange-500 border-b-8
          hover:border-orange-500 text-center items-center p-4 rounded ">
          <i class={'fa fa-' + f.icon + ' text-2xl mb-3'} />
          <h1 class="text-ms text-black ">{f.data}</h1>
        </div>
      </button>
    {/each}
  </div>
</div>
