<script context="module">
  import { get } from "./../../lib/api";
  import { date } from "./../../lib";
  import { lazyload } from "./../../actions/lazyload";
  import { fadeIn, fadeOut } from "./../../actions/pageFade";
  import { send, receive } from "./../../actions/crossfade";
  import { CDN } from "./../../config";

  export async function preload({ params }) {
    let post = {},
      err = null,
      loading = false;
    try {
      loading = true;
      post = await get(`litekart/one.ts?slug=${params.slug}`);
      if (!post) this.error(500, "Post not found.");
      return { post };
    } catch (e) {
      this.error(500, e.toString());
    } finally {
      loading = false;
    }
  }
</script>

<script>
  import { stores } from "@sapper/app";
  const { session } = stores();
  export let post;
  let latestPosts = [],
    loading = false;
  async function getLatestPosts() {
    try {
      loading = true;
      const res = await get("litekart");
      latestPosts = res.data;
      return latestPosts;
    } catch (e) {
      console.log("Err:: blog detail page... ", e);
      return [];
    } finally {
      loading = false;
    }
  }
  // getLatestPosts();
  function generateUrl(name, url, demo = "") {
    let firstWord = name.split(" ")[0];
    return "/blog/go/" + firstWord.toLowerCase() + demo + "?url=" + url; // encodeURIComponent(url)
  }
</script>

<main in:fadeIn out:fadeOut class="lg:mt-16 container mx-auto flex flex-wrap">
  <div class="w-full lg:w-3/5 p-4 pt-0">
    <h1 class="mt-0 text-4xl lg:text-5xl mb-2 font-black leading-tight">
      {post.name}
    </h1>
    <div class="author flex items-center text-xs lg:text-sm">
      <img
        src={post.author.avatar}
        class="hidden md:block object-cover w-16 h-16 rounded-full mr-4"
        alt="" />
      <div class="font-bold tracking-wide mx-2">
        {post.author && post.author.name}
      </div>
      <div class="text-gray-700 mx-2">{date(post.published_at)}</div>
    </div>
    <div class="mb-12">
      <!-- <h2 class="font-extrabold text-3xl text-gray-900 mt-8 leading-tight">
        {post.name}
      </h2> -->
      <div class="my-4 ">
        <img
          class="object-contain"
          use:lazyload
          src={`${post.banner}?tr=w-3,h-2`}
          data-src={`${post.banner}`}
          alt="" />
      </div>
      <div class="leading-loose" style="">
        {@html post.body}
      </div>
      {#if post.tags}
        <ul class="flex flex-wrap my-4">
          {#each post.tags as f}
            <button
              class="text-xs border shadow rounded-full mr-2 mb-2 bg-gray-100
              hover:bg-gray-200 px-4 py-2">
              {f}
            </button>
          {/each}
        </ul>
      {/if}
    </div>

  </div>
  <div class="w-full px-4 lg:w-2/5 lg:pl-8">
    <div class="ml-0 lg:ml-4">
      <div class="pattern py-4 px-4 text-center">
        <h3 class="text-3xl my-0 font-bold">Latest Posts</h3>
      </div>
      <ul>
        {#await getLatestPosts()}
          <li class="border-b py-4 text-gray-700">
            <div class="flex items-center">
              <img class="w-16 h-16 rounded mr-2" src={`/2x1.png`} alt />
              <div class="text-lg font-bold w-full bg-gray-100">&nbsp;</div>
            </div>
          </li>
        {:then latestPosts}
          {#each latestPosts as i}
            <li class="border-b py-4 text-gray-800">
              <a
                rel="prefetch"
                href={`/blog/${i.slug}`}
                class="flex items-center">
                <img
                  class="w-16 h-16 rounded mr-2 object-cover"
                  src={`${i.banner}`}
                  alt />
                <span class="font-semibold">{i.name}</span>
              </a>
            </li>
          {/each}
        {/await}
      </ul>
    </div>
  </div>
</main>

<svelte:head>
  <title>{post.name} - Litekart</title>
  <meta data-hid="description" name="description" content={post.name} />
  <meta data-hid="og:title" name="og_title" content={post.name} />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content={post.description} />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="800" />
  <!-- Twitter -->
  <meta name="twitter:title" content={post.name} />
  <meta name="twitter:description" content={post.description} />
  <!-- Google / Schema.org markup: -->
  <meta hid="product_name" itemprop="name" content={post.name} />
  <meta
    hid="product_description"
    itemprop="description"
    content={post.description} />
</svelte:head>
