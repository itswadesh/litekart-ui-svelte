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
      post = await get(`litekart/${params.slug}`);
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

<main in:fadeIn out:fadeOut class="container flex flex-wrap mx-auto lg:mt-16">
  <div class="w-full p-4 pt-0 lg:w-3/5">
    <h1 class="mt-0 mb-2 text-4xl font-black leading-tight lg:text-5xl">
      {post.name}
    </h1>
    <div class="flex items-center text-xs author lg:text-sm">
      <img
        src={post.author.avatar}
        class="hidden object-cover w-16 h-16 mr-4 rounded-full md:block"
        alt="" />
      <div class="mx-2 font-bold tracking-wide">
        {post.author && post.author.name}
      </div>
      <div class="mx-2 text-gray-700">{date(post.published_at)}</div>
    </div>
    <div class="mb-12">
      <!-- <h2 class="mt-8 text-3xl font-extrabold leading-tight text-gray-900">
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
              class="px-4 py-2 mb-2 mr-2 text-xs bg-gray-100 border rounded-full shadow hover:bg-gray-200">
              {f}
            </button>
          {/each}
        </ul>
      {/if}
    </div>

  </div>
  <div class="w-full px-4 lg:w-2/5 lg:pl-8">
    <div class="ml-0 lg:ml-4">
      <div class="px-4 py-4 text-center pattern">
        <h3 class="my-0 text-3xl font-bold">Latest Posts</h3>
      </div>
      <ul>
        {#await getLatestPosts()}
          <li class="py-4 text-gray-700 border-b">
            <div class="flex items-center">
              <img class="w-16 h-16 mr-2 rounded" src={`/2x1.png`} alt />
              <div class="w-full text-lg font-bold bg-gray-100">&nbsp;</div>
            </div>
          </li>
        {:then latestPosts}
          {#each latestPosts as i}
            <li class="py-4 text-gray-800 border-b">
              <a
                rel="prefetch"
                href={`/blog/${i.slug}`}
                class="flex items-center">
                <img
                  class="object-cover w-16 h-16 mr-2 rounded"
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
