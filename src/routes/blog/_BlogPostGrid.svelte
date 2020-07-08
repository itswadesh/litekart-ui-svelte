<script>
  import { lazyload } from "../../actions/lazyload";
  import { currency, truncate, date } from "./../../lib";
  import { CDN } from "./../../config";
  export let post = {};
</script>

<style>
  img {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .zoom {
    overflow: hidden;
  }
  .zoom img {
    transition: transform 0.7s;
  }
  .zoom:hover img {
    transform: scale(1.035);
  }
  /* .download {
    @apply bg-gray-200 rounded-full flex items-center p-1 transition-transform duration-300 ease-in-out transform;
  }
  .download:hover {
    @apply -translate-y-px shadow;
  }
  .download:focus {
    @apply outline-none;
  } */
</style>

{#if post}
  <div class="w-full p-8 overflow-hidden rounded lg:w-1/2">
    <a
      href={`/blog/${post.slug}`}
      rel="prefetch"
      class="block shadow-md avatar zoom hover:shadow-lg">
      <img
        use:lazyload
        src={'/2x1.png'}
        data-src={`${post.banner}`}
        alt=""
        class="object-cover min-w-full" />
      <div class="px-6 py-4">
        <div class="mb-2 text-3xl font-black">{truncate(post.name, 58)}</div>
        <!-- <p class="text-base text-gray-700">{post.metaDescription}</p> -->
        <div class="flex items-center text-xs author lg:text-sm">
          <img
            src={post.author.avatar}
            class="object-cover w-16 h-16 mr-4 rounded-full"
            alt="" />
          <div class="mx-2 font-bold tracking-wide">{post.author.username}</div>
          <div class="mx-2 text-gray-700">{date(post.published_at)}</div>
        </div>
      </div>
      {#if post && post.items && post.items[0] && post.items[0].tags}
        <div class="px-6 py-4 truncate">
          {#each post.items[0].tags as t}
            <span
              class="inline-block px-3 py-1 mb-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #{t}
            </span>
          {/each}
        </div>
      {/if}
    </a>
  </div>
{/if}
