<script context="module">
  import { get } from "./../../lib/api";
  import { fadeIn, fadeOut } from "./../../actions/pageFade";
  import { send, receive } from "./../../actions/crossfade";
  import Pagination from "./../../components/ui/Pagination.svelte";
  export async function preload({ params, query }) {
    let posts = [],
      err = null,
      loading = false;
    try {
      loading = true;
      let res = await get(`litekart?page=${query.page || 1}`);
      if (!res.data) this.error(500, "Post not found.");
      return { posts: res, query };
    } catch (e) {
      this.error(500, e.toString());
    } finally {
      loading = false;
    }
  }
</script>

<script>
  import { goto, stores } from "@sapper/app";
  const { page, session } = stores();
  import BlogPostGrid from "./_BlogPostGrid.svelte";
  import { constructQry, constructURL2 } from "./../../lib";
  export let posts, query;
  $: noOfPages = Math.ceil(posts.count / posts.pageSize);
  function changePage(e, p) {
    let fl = { ...query };
    delete fl.page;
    const url = constructURL2("/blog", fl);
    let page = parseInt(e.detail || 1);
    goto(`${url}page=${page}`);
  }
</script>

{#if posts && posts.data}
  <main in:fadeIn out:fadeOut class="mt-18">
    <div class="p-12 pattern">
      <div class="items-center my-2 text-xl font-hairline text-gray-700">
        <span class="text-3xl font-bold">{posts.count}</span>
        awesome collection articles
      </div>
      <p>Covering ecommerce, business solutions & technology advancements</p>
    </div>
    <div class="container flex flex-wrap justify-center m-2 mx-auto">
      {#each posts.data as post}
        <BlogPostGrid {post} />
      {/each}
      <Pagination
        count={noOfPages}
        current={parseInt(query.page || 1)}
        on:change={changePage} />
    </div>
  </main>
{/if}
<svelte:head>
  <title>Collections Archives - FrontendFun</title>
  <meta
    data-hid="description"
    name="description"
    content="The items in this collection of the best templates have been built
    for a wide range of projects." />
  <meta
    data-hid="og:title"
    name="og_title"
    content="Collections Archives - FrontendFun" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="The items in this collection of the best website templates have
    been built for a wide range of projects." />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="600" />
  <!-- Twitter -->
  <meta name="twitter:title" content="Collections Archives - FrontendFun" />
  <meta
    name="twitter:description"
    content="The items in this collection of the best website templates have
    been built for a wide range of projects." />
  <!-- Google / Schema.org markup: -->
  <meta
    hid="product_name"
    itemprop="name"
    content="Collections Archives - FrontendFun" />
  <meta
    hid="product_description"
    itemprop="description"
    content="The items in this collection of the best website templates have
    been built for a wide range of projects." />
</svelte:head>
