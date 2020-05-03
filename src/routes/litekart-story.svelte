<script>
  import Icon from "svelte-awesome";
  import { arrowUp } from "svelte-awesome/icons";
  import { lazyload } from "../actions/lazyload";
  import { CDN, host } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  let timeline = [
    {
      version: "v6",
      month: "January",
      year: "2020",
      description: [
        "Improved documentation",
        "introduced affilate features",
        "flash deals + deals api",
        "elastic search",
        "email templates"
      ],
      img: "affiliate.png"
    },
    {
      version: "v5",
      month: "July",
      year: "2019",
      description: [
        "fixed multilevel category issue",
        "introduced promo codes",
        "fixed memory leak",
        "introduced cloud based on fly image optimization",
        "faceted filters"
      ],
      img: "filters.png"
    },
    {
      version: "v4",
      month: "March",
      year: "2019",
      description: [
        "admin panel re-designed with material design principle",
        "guest checkout",
        "social login",
        "printable invoice",
        "multiple color options"
      ],
      img: "admin-panel.png"
    },
    {
      version: "v3",
      month: "August",
      year: "2018",
      description: [
        "multi vendor",
        "role based users",
        "PWA enabled",
        "multi level category",
        "multiple customer address",
        "ratings & reviews"
      ],
      img: "arialshop.png"
    },
    {
      version: "v2",
      month: "May",
      year: "2018",
      description: [
        "multi currency",
        "featured products",
        "related products",
        "multiple images for each product variant",
        "order mangement",
        "cash on delivery"
      ],
      img: "variants.png"
    },
    {
      version: "v1",
      month: "January",
      year: "2018",
      description: [
        "simple ecommerce product listing",
        "cart & checkout",
        "authentication & authorization",
        "wishlist",
        "admin panel",
        "customer multiple address"
      ],
      img: "login.png"
    }
  ];
</script>

<style>
  @media (min-width: 1000px) {
    #timeline .demo-card:nth-child(odd) .head::after,
    #timeline .demo-card:nth-child(even) .head::after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
    }
    #timeline .demo-card:nth-child(odd) .head::before,
    #timeline .demo-card:nth-child(even) .head::before {
      position: absolute;
      content: "";
      width: 9px;
      height: 9px;
      background-color: #bdbdbd;
      border-radius: 9px;
      box-shadow: 0px 0px 2px 8px #f7f7f7;
    }
  }
  /* Some Cool Stuff */
  .demo-card:nth-child(1) {
    order: 1;
  }
  .demo-card:nth-child(2) {
    order: 4;
  }
  .demo-card:nth-child(3) {
    order: 2;
  }
  .demo-card:nth-child(4) {
    order: 5;
  }
  .demo-card:nth-child(5) {
    order: 3;
  }
  .demo-card:nth-child(6) {
    order: 6;
  }
  #timeline {
    background: #f7f7f7;
    border-top: 1px solid rgba(191, 191, 191, 0.4);
    border-bottom: 1px solid rgba(191, 191, 191, 0.4);
  }
  #timeline h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 20px;
  }
  #timeline p.leader {
    text-align: center;
    max-width: 90%;
    margin: auto;
    margin-bottom: 45px;
  }
  #timeline .demo-card-wrapper {
    position: relative;
    margin: auto;
  }
  @media (min-width: 1000px) {
    #timeline .demo-card-wrapper {
      display: flex;
      flex-flow: column wrap;
      width: 1170px;
      height: 2350px;
      margin: 0 auto;
    }
  }
  #timeline .demo-card-wrapper::after {
    z-index: 1;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 1px solid rgba(191, 191, 191, 0.4);
  }
  @media (min-width: 1000px) {
    #timeline .demo-card-wrapper::after {
      border-left: 1px solid #bdbdbd;
    }
  }
  #timeline .demo-card {
    position: relative;
    display: block;
    margin: 10px auto 80px;
    max-width: 94%;
    z-index: 2;
  }
  @media (min-width: 480px) {
    #timeline .demo-card {
      max-width: 60%;
      box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);
    }
  }
  @media (min-width: 720px) {
    #timeline .demo-card {
      max-width: 40%;
    }
  }
  @media (min-width: 1000px) {
    #timeline .demo-card {
      max-width: 450px;
      height: 560px;
      margin: 90px;
      margin-top: 45px;
      margin-bottom: 45px;
    }
    #timeline .demo-card:nth-child(odd) {
      margin-right: 45px;
    }
    #timeline .demo-card:nth-child(odd) .head::after {
      border-left-width: 15px;
      border-left-style: solid;
      left: 100%;
    }
    #timeline .demo-card:nth-child(odd) .head::before {
      left: 491.5px;
    }
    #timeline .demo-card:nth-child(even) {
      margin-left: 45px;
    }
    #timeline .demo-card:nth-child(even) .head::after {
      border-right-width: 15px;
      border-right-style: solid;
      right: 100%;
    }
    #timeline .demo-card:nth-child(even) .head::before {
      right: 489.5px;
    }
    #timeline .demo-card:nth-child(2) {
      margin-top: 180px;
    }
  }
  #timeline .demo-card .head {
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 400;
  }
  #timeline .demo-card .head .number-box {
    display: inline;
    /* float: left; */
    margin: 15px;
    padding: 10px;
    font-size: 35px;
    line-height: 35px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.17);
  }
  #timeline .demo-card .head h2 {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: inherit;
    letter-spacing: 2px;
    margin: 0;
    padding-bottom: 6px;
    line-height: 1rem;
  }
  @media (min-width: 480px) {
    #timeline .demo-card .head h2 {
      font-size: 165%;
      line-height: 1.2rem;
    }
  }
  #timeline .demo-card .head h2 span {
    display: block;
    font-size: 0.6rem;
    margin: 0;
  }
  @media (min-width: 480px) {
    #timeline .demo-card .head h2 span {
      font-size: 0.8rem;
    }
  }
  #timeline .demo-card .body {
    background: #fff;
    border: 1px solid rgba(191, 191, 191, 0.4);
    border-top: 0;
  }
  /* @media (min-width: 1000px) {
    #timeline .demo-card .body {
    }
  } */
  #timeline .demo-card .body p {
    font-size: 14px;
    line-height: 18px;
  }
  #timeline .demo-card .body img {
    display: block;
    width: 100%;
  }
  #timeline .demo-card--step1 {
    background-color: #46b8e9;
  }
  #timeline .demo-card--step1 .head::after {
    border-color: #46b8e9;
  }
  #timeline .demo-card--step2 {
    background-color: #3ee9d1;
  }
  #timeline .demo-card--step2 .head::after {
    border-color: #3ee9d1;
  }
  #timeline .demo-card--step3 {
    background-color: #ce43eb;
  }
  #timeline .demo-card--step3 .head::after {
    border-color: #ce43eb;
  }
  #timeline .demo-card--step4 {
    background-color: #4d92eb;
  }
  #timeline .demo-card--step4 .head::after {
    border-color: #4d92eb;
  }
  #timeline .demo-card--step5 {
    background-color: #46b8e9;
  }
  #timeline .demo-card--step5 .head::after {
    border-color: #46b8e9;
  }
</style>

<svelte:head>
  <title>What's new - Open source Node js online shopping cart solution</title>
  <meta
    data-hid="description"
    name="description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. Only pay on customizations for your brand" />
  <meta
    name="keywords"
    content="litekart history, litekart story, lightweight ecommerce, enterprise
    level ecommerce software, fast ecommerce platform, fastest online shopping
    software,fastest online shopping platform" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="What's new - Open source Node js online shopping cart solution" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. Only pay on customizations for your brand" />
  <meta name="og_url" property="og:url" content={`${host}/litekart-story`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="What's new - Open source Node js online shopping cart solution" />
  <meta
    name="twitter:description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. Only pay on customizations for your brand" />
</svelte:head>

<main in:fadeIn out:fadeOut>
  <section id="timeline">
    <h1 class="text-5xl mt-8 mb-16 text-center font-bold">
      <span class="underline">Development</span>
      Story
    </h1>
    <p class="leader px-2 lg:px-64 tracking-widest leading-relaxed">
      It all started 2014 in the name of ShopNx. After 6 years of evolution, the
      software now powers more than 800 stores worldwide
    </p>
    <div class="demo-card-wrapper">
      {#each timeline as t, ix}
        <div class={`rounded-lg demo-card demo-card--step${ix}`}>
          <div class=" rounded shadow-lg">
            <div class="head">
              <div class="number-box rounded">
                <span>{t.version}</span>
              </div>
              <h2>
                <span class="small">{t.month}</span>
                {t.year}
              </h2>
            </div>
            <div class="body">
              <ul class="px-12 py-8 leading-loose tracking-widest">
                {#each t.description as d}
                  <li>{d}</li>
                {/each}
              </ul>
              <img
                use:lazyload
                src={`${CDN}../../${t.img}?tr=w-3,h-2`}
                data-src={`${CDN}../../${t.img}?tr=w-448,h-256`}
                alt=""
                class="object-cover h-64 shadow-lg" />
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
