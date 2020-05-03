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
    @apply inline-block bg-gray-200 rounded-full flex items-center p-1 transition-transform duration-300 ease-in-out transform;
  }
  .download:hover {
    @apply -translate-y-px shadow;
  }
  .download:focus {
    @apply outline-none;
  } */
</style>

{#if post}
  <div class="p-8 w-full lg:w-1/2 rounded overflow-hidden">
    <a
      href={'/blog/' + post.slug + '?id=' + post._id}
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
        <!-- <p class="text-gray-700 text-base">{post.metaDescription}</p> -->
        <div class="author flex items-center text-xs lg:text-sm">
          <img
            src={post.author.avatar}
            class="object-cover w-16 h-16 rounded-full mr-4"
            alt="" />
          <div class="font-bold tracking-wide mx-2">{post.author.username}</div>
          <div class="text-gray-700 mx-2">{date(post.published_at)}</div>
        </div>
      </div>
      {#if post && post.items && post.items[0] && post.items[0].tags}
        <div class="px-6 py-4 truncate">
          {#each post.items[0].tags as t}
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
              font-semibold text-gray-700 mr-2 mb-1">
              #{t}
            </span>
          {/each}
        </div>
      {/if}
    </a>
  </div>
{/if}
