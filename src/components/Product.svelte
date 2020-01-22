<script>
  import Icon from "svelte-awesome";
  import { lazyload } from "../actions/lazyload";
  export let product = {};
</script>

<style>
  /* img {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
  } */

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* .zoom {
    overflow: hidden;
  }
  .zoom img {
    transition: transform 0.7s;
  }
  .zoom:hover img {
    transform: scale(1.035);
  } */
</style>

{#if product}
  <div class="p-4 w-full md:w-1/2 lg:w-1/3 ">
    <a
      href={product.link}
      rel="prefetch"
      class="p-8 flex flex-col items-center border rounded-lg shadow-lg ">
      <Icon
        data={product.icon}
        class="mr-2 mb-4"
        style={`color:${product.color}`}
        label="product.icon"
        scale={5} />
      <div class=" flex justify-between p-4 ">
        <div class="flex flex-col text-center">
          <h3 class="text-3xl font-bold">{product.heading}</h3>
          <div class="text-sm tracking-wider mt-3">{product.content}</div>
        </div>
      </div>
    </a>
  </div>
{/if}
