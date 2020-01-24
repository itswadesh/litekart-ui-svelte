<script>
  import { HOST } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  let features = [
    {
      img: "customization/building-solid.svg",
      icon: "building text-pink-600 ",
      key: "Build a beautiful and fast ecommerce website",
      val:
        "We create a fully customized, responsive online store that speaks to     your customers and showcases your products with all essential     feaures. Choose from high-converting online store designs optimized     for fast page-load across devices and designed especially for major     ecommerce industries. Our design includes Cloud Based Image     Optimizer to automatically optimize each image for browser and     device."
    },
    {
      img: "customization/wrench-solid.svg",
      icon: "wrench text-purple-600",
      key: " Completely customize your website",
      val:
        "Our highly customizable platform lets you create the unique      ecommerce store for you with perfect shopping experience quickly.    Work with a developer to customize any aspect of your website’s     design and shopping cart."
    },
    {
      img: "customization/comment-dots-solid.svg",
      icon: "comment-dots text-blue-600 ",
      key: "Deliver a personalized experience",
      val:
        " Personalize your site to better engage and convert shoppers using a   flexible modular code base, conditional logic and access to language     files."
    },
    {
      img: "customization/mobile-alt-solid.svg",
      icon: "mobile-alt text-pink-600 ",
      key: " The best solution for selling on mobile",
      val:
        " With over 60% of traffic coming from mobile devices, your store     needs to leave the perfect impression on every device. Our ecommerce     designs are fully responsive and come equipped with a     mobile-optimized checkout."
    },
    {
      img: "customization/file-signature-solid.svg",
      icon: "file-signature text-purple-600",
      key: " Faster sites, higher conversion",
      val:
        " A 1-second delay in page load can decrease conversion by 7%. Online     stores from Litekart are blazing fast on cloud infrastructure, with     an average page load time under 2 seconds – resulting in faster page     browsing times, improved conversion, and better customer experience."
    },
    {
      img: "customization/medal-solid.svg",
      icon: "medal text-blue-600",
      key: " Sitewide HTTPS boosts conversion and search rankings",
      val:
        " All Litekart plans offer HTTPS across your entire site. That builds     confidence amoung shoppers while they know your online store is     secure from the first page they visit through checkout, and ensures     you’re complying with Google’s latest guidelines to maximize SEO."
    },
    {
      img: "customization/search-solid.svg",
      icon: "search text-pink-600 ",
      key: "Rank higher with best-in-class SEO",
      val:
        " Our sites are built for better search engine rankings using     search-friendly html, sitewide HTTPS, optimized URLs, automatic     sitemaps, optimized images, microdata and more. We also give you            full control to customize your URLs, titles, header tags and            metadata."
    },
    {
      img: "customization/share-alt-solid.svg",
      icon: "share-alt text-purple-600",
      key: " Social",
      val: ""
    },
    {
      img: "customization/tape-solid.svg",
      icon: "tape text-blue-600",
      key: "Build your own integrations with our powerful API",
      val:
        " Our flexible, open API lets you build custom integrations with    whatever software you count on to run your business. Connect with            all the most important parts of our platform, including Products,            Customers, Orders, Payments, Shipping and more."
    },
    {
      img: "customization/arrow-down-solid.svg",
      icon: "arrow-down text-pink-600 ",
      key: "Recover 20% of abandoned carts",
      val:
        "Up to 60% of online shopping carts are abandoned before checkout.   Recover those lost sales with our abandoned cart saver and   optimize for the traffic you already receive. This conversion tool   automatically sends shoppers a customizable series of emails that   motivates them to complete a purchase."
    },
    {
      img: "customization/chart-bar-solid.svg",
      icon: "chart-bar text-purple-600",
      key: "Improve conversion rates by 22% with a streamlined checkout",
      val:
        " Our single-page checkout improves conversion up to 22% by making   it faster and easier to complete a purchase. We’ve built in   conversion-boosting features like mobile optimization, account   creation for faster checkouts, guest checkout, and dedicated SSL   support that enables shoppers to stay on your domain during   checkout."
    },
    {
      img: "customization/file-code-solid.svg",
      icon: "file-code text-blue-600",
      key: "A developer's dream",
      val:
        " Quickly develop elegant solutions to complex problems using our   open APIs. Our RESTful architecture allows you to code in the   language of your choice. Unthrottled API calls support hundreds of    requests per second without bottlenecks, letting you parallelize   work and improve efficiency. All APIs are documented using the   Postman."
    },
    {
      img: "customization/funnel-dollar-solid.svg",
      icon: "funnel-dollar text-pink-600 ",
      key: "Improve search effectiveness with filtering",
      val:
        " Faceted search helps shoppers quickly find the products they want   using filters like size, color, brand and even custom attributes.   Adding filters with faceted search can increase conversion by as  much as 30%"
    },
    {
      img: "customization/user-tag-solid.svg",
      icon: "user-tag text-purple-600",
      key: " Incentivize buyers with built-in coupons and discounting",
      val:
        "Win new customers and reward repeat buyers using our flexible   discounting tools. From a single location in your control panel,   you can set up cart based discount or product based percentage  discounts, dollar-off discounts, shipping discounts, or promotions  like buy one, get one free."
    },
    {
      img: "customization/star-solid.svg",
      icon: "star text-blue-600 ",
      key: " Boost shopper confidence with product reviews",
      val:
        " Featuring product reviews increases sales by 17% on average.   They’re built right into Litekart at no extra cost, and you can   automatically email buyers a few days after purchase to ask for a review."
    },
    {
      img: "customization/star-solid.svg",
      icon: "headset text-pink-600  ",
      key: "Get world-class support",
      val:
        "  Get expert help 24/7, with premium services available for   Enterprise merchants. Talk directly to our lead developer and   discuss about bug fixes or new feature requirements."
    },
    {
      img: "customization/hands-helping-solid.svg",
      icon: "hands-helping text-purple-600 ",
      key: "Migration and onboarding help",
      val:
        " Switching platforms or launching a new store can feel   overwhelming, but we dramatically simplify the process. You have   access to our onboarding dedicated personal consultant."
    }
  ];
</script>

<style>
  /* .titel {
    margin-bottom: 8px;
    margin-top: 4px;
    font-size: 22px;
    color: #000000;
    margin-bottom: 24px;
  } */
</style>

<svelte:head>
  <title>
    Litekart - Customize and build your brand with a unique presence
  </title>
  <meta
    data-hid="description"
    name="description"
    content="Litekart comes with most essential ecommerce features pre-built. Go
    live under a week" />
  <meta
    name="keywords"
    content="javasctipt ecommerce, image optimization, lazy loading, seo, fast ,
    search engine optimization, easy, headless, authentication, cart & checkout,
    tailwindcss, server rendered, proxy + api integrated, animations, stores,
    lazy loading, loading indicators, carousel, instant search, faceted filters" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Litekart - Customize and build your brand with a unique presence" />
  <meta name="og_url" property="og:url" content={`${HOST}/customizations`} />
  <!-- Twitter -->
  <meta
    name="twitter:description"
    content="Litekart comes with most essential ecommerce features pre-built. Go
    live under a week" />
  <meta
    name="twitter:title"
    content="Litekart - Customize and build your brand with a unique presence" />
  <meta
    name="twitter:description"
    content="Litekart comes with most essential features pre-built. Go live
    under a week" />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="bg-gray-100 px:8 lg:px-32 xl:px-48">
    <h2 class="text-center text-4xl mt-8 mb-2 font-bold">WHAT’S INCLUDED</h2>
    <h2 class="text-center text-xl text-gray-900 mb-8 tracking-widest">
      Get 100+ premium features out of the box with litekart's integrated
      one-time pricing
    </h2>
    <div class="flex justify-between flex-wrap">
      {#each features as f}
        <div class="p-4 w-full lg:w-1/2">
          <div
            class="border p-2 flex flex-col md:flex-row rounded-lg shadow-md
            px-6 py-8 shadow-md text-center md:text-left bg-white justify-center
            items-center">
            <img src={f.img} class="text-6xl h-12 w-12 md:mr-8" alt="" />
            <!-- <img use:lazyload src="img/rocket.svg" class="flex " alt="" /> -->
            <div class="flex flex-col">
              <h2 class="mb-2 text-xl font-bold">{f.key}</h2>
              <div class="text-ms w-full tracking-wide leading-relaxed">
                {f.val}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>
