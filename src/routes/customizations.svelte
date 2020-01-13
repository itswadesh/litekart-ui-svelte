<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { HOST } from "./../config";
</script>

<style>
  .titel {
    margin-bottom: 8px;
    margin-top: 4px;
    font-size: 22px;
    color: #000000;
    margin-bottom: 24px;
  }
</style>

<svelte:head>
  <title>
    Litekart - Customize and build your brand with a unique presence
  </title>
  <meta
    data-hid="description"
    name="description"
    content="Litekart comes with most essential features pre-built. Go live
    under a week." />
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
  <meta name="og_url" property="og:url" content={`${HOST}`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Customize and build your brand with a unique presence" />
  <meta
    name="twitter:description"
    content="Litekart comes with most essential features pre-built. Go live
    under a week." />
</svelte:head>

<main in:fadeIn out:fadeOut>
  <Header />
  <div class="flex flex-wrap lg:flex-no-wrap lg:p-6 p-2 justify-between ">
    <!-- 1st -->
    <div class=" m-4">
      <div class="border flex flex-col lg:p-6 p-4 rounded-lg shadow-lg ">
        <div class="flex lg:flex-row flex-col ">
          <div class="flex justify-center ">
            <i class="fa fa-building text-6xl mx-6 lg:mb-4 mb-6" />
          </div>
          <div class=" flex items-center">
            <h1 class="titel flex text-center items-center mb-4 font-bold ">
              Build a beautiful and fast ecommerce website
            </h1>
          </div>
        </div>
        <div>
          <p class="leading-loose text-center">
            We create a fully customized, responsive online store that speaks to
            your customers and showcases your products with all essential
            feaures. Choose from high-converting online store designs optimized
            for fast page-load across devices and designed especially for major
            ecommerce industries. Our design includes Cloud Based Image
            Optimizer to automatically optimize each image for browser and
            device.
          </p>
        </div>
      </div>
      <!-- sub1 -->
      <div class="border flex flex-col my-3 lg:p-6 p-4 rounded-lg shadow-lg ">
        <div class="flex lg:flex-row flex-col ">
          <div class="flex justify-center ">
            <i
              class="fa fa-wrench text-indigo-500 text-6xl mx-6 lg:mb-4 mb-6 " />
          </div>
          <div class="flex items-center">
            <h1 class="titel flex text-center items-center mb-4 font-bold">
              Completely Customize your website
            </h1>
          </div>
        </div>
        <div>
          <p class="leading-loose text-center ">
            Our highly customizable platform lets you create the unique
            ecommerce store for you with perfect shopping experience quickly.
            Work with a developer to customize any aspect of your website’s
            design and shopping cart.
          </p>
        </div>
        <div />
      </div>
      <!-- sub1 -->
      <!-- sub2 -->
      <div class="border flex flex-col my-3 lg:p-6 p-4 rounded-lg shadow-lg ">
        <div class="flex lg:flex-row flex-col ">
          <div class="flex justify-center ">
            <i class="fa fa-comment-dots text-6xl mx-6 lg:mb-4 mb-6 " />
          </div>

          <div class="flex items-center">
            <h1 class="titel flex text-center items-center mb-4 font-bold">
              Deliver a personalized experience
            </h1>
          </div>
          <div>
            <p class="leading-loose text-center">
              Personalize your site to better engage and convert shoppers using
              a flexible modular code base, conditional logic and access to
              language files.
            </p>
          </div>
        </div>
      </div>
      <div class="border flex my-3 lg:p-6 p-4 rounded-lg shadow-lg">
        <i class="fa fa-mobile-alt text-6xl mr-6 " />
        <div>
          <h1 class="titel font-bold">
            The best solution for selling on mobile
          </h1>
          <p class="leading-loose">
            With over 60% of traffic coming from mobile devices, your store
            needs to leave the perfect impression on every device. Our ecommerce
            designs are fully responsive and come equipped with a
            mobile-optimized checkout.
          </p>
        </div>
      </div>
      <!-- sub3 -->
      <!-- sub4 -->
      <div class="border flex items-center my-3 px-6 py-6 rounded-lg shadow-lg">
        <i class="fa fa-file-signature text-6xl mr-6 " />
        <div>
          <h1 class="titel font-bold">Faster sites, higher conversion</h1>
          <p class="leading-loose">
            A 1-second delay in page load can decrease conversion by 7%. Online
            stores from Litekart are blazing fast on cloud infrastructure, with
            an average page load time under 2 seconds – resulting in faster page
            browsing times, improved conversion, and better customer experience.
          </p>
        </div>
      </div>
      <!-- sub4 -->
      <!-- sub5 -->

      <div
        class="border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-medal text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">
            Sitewide HTTPS boosts conversion and search rankings
          </h1>
          <p class="leading-loose">
            All Litekart plans offer HTTPS across your entire site. That builds
            confidence amoung shoppers while they know your online store is
            secure from the first page they visit through checkout, and ensures
            you’re complying with Google’s latest guidelines to maximize SEO.
          </p>
        </div>
      </div>
      <!-- sub5 -->
      <!-- sub6 -->
      <div
        class="border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-search text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">Rank higher with best-in-class SEO</h1>
          <p class="leading-loose">
            Our sites are built for better search engine rankings using
            search-friendly html, sitewide HTTPS, optimized URLs, automatic
            sitemaps, optimized images, microdata and more. We also give you
            full control to customize your URLs, titles, header tags and
            metadata.
          </p>
        </div>
      </div>
      <!-- sub6 -->
      <!-- sub7 -->
      <div
        class=" border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-share-alt text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">Social</h1>
        </div>
      </div>
      <!-- sub7 -->
      <!-- sub8 -->
      <div
        class="border flex items-center my-3 px-6 py-6 rounded-lg leading-loose
        md:w-full shadow-lg">
        <i class="fa fa-tape text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">
            Build your own integrations with our powerful API
          </h1>
          <p class="leading-loose">
            Our flexible, open API lets you build custom integrations with
            whatever software you count on to run your business. Connect with
            all the most important parts of our platform, including Products,
            Customers, Orders, Payments, Shipping and more.
          </p>
        </div>
      </div>
    </div>
    <!-- sub8 -->
    <!-- 1st -->
    <!-- 2nd -->
    <div class="m-4">
      <!-- sub9 -->
      <div
        class=" border flex items-center px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-cart-arrow-down text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">Recover 20% of abandoned carts</h1>
          <p class="leading-loose">
            Up to 60% of online shopping carts are abandoned before checkout.
            Recover those lost sales with our abandoned cart saver and optimize
            for the traffic you already receive. This conversion tool
            automatically sends shoppers a customizable series of emails that
            motivates them to complete a purchase.
          </p>
        </div>
      </div>
      <!-- sub9 -->
      <!-- sub10 -->
      <div
        class="border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-chart-bar text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold ">
            Improve conversion rates by 22% with a streamlined checkout
          </h1>
          <p class="leading-loose">
            Our single-page checkout improves conversion up to 22% by making it
            faster and easier to complete a purchase. We’ve built in
            conversion-boosting features like mobile optimization, account
            creation for faster checkouts, guest checkout, and dedicated SSL
            support that enables shoppers to stay on your domain during
            checkout.
          </p>
        </div>
      </div>
      <!-- sub10 -->
      <!-- sub11 -->
      <div
        class="border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-file-code text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">A developer's dream</h1>
          <p class="leading-loose">
            Quickly develop elegant solutions to complex problems using our open
            APIs. Our RESTful architecture allows you to code in the language of
            your choice. Unthrottled API calls support hundreds of requests per
            second without bottlenecks, letting you parallelize work and improve
            efficiency. All APIs are documented using the Postman.
          </p>
        </div>
      </div>
      <!-- sub11 -->
      <!-- sub12 -->
      <div
        class="border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-funnel-dollar text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">
            Improve search effectiveness with filtering
          </h1>
          <p class="leading-loose">
            Faceted search helps shoppers quickly find the products they want
            using filters like size, color, brand and even custom attributes.
            Adding filters with faceted search can increase conversion by as
            much as 30%.
          </p>
        </div>
      </div>
      <!-- sub12 -->
      <!-- sub13 -->

      <div
        class="border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-user-tag text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">
            Incentivize buyers with built-in coupons and discounting
          </h1>
          <p class="leading-loose">
            Win new customers and reward repeat buyers using our flexible
            discounting tools. From a single location in your control panel, you
            can set up cart based discount or product based percentage
            discounts, dollar-off discounts, shipping discounts, or promotions
            like buy one, get one free.
          </p>
        </div>
      </div>
      <!-- sub14 -->
      <!-- sub15 -->
      <div
        class=" border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-star text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">
            Boost shopper confidence with product reviews
          </h1>
          <p class="leading-loose">
            Featuring product reviews increases sales by 17% on average. They’re
            built right into Litekart at no extra cost, and you can
            automatically email buyers a few days after purchase to ask for a
            review.
          </p>
        </div>
      </div>
      <!-- sub15 -->
      <!-- sub16 -->
      <div
        class=" border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class=" fa fa-headset text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">Get world-class support</h1>
          <p class="leading-loose">
            Get expert help 24/7, with premium services available for Enterprise
            merchants. Talk directly to our lead developer and discuss about bug
            fixes or new feature requirements.
          </p>
        </div>
      </div>
      <!-- sub16 -->
      <!-- sub17 -->
      <div
        class="border flex items-center my-3 px-6 py-6 rounded-lg md:w-full
        shadow-lg">
        <i class="fa fa-hands-helping text-6xl mr-6" />
        <div>
          <h1 class="titel font-bold">Migration and onboarding help</h1>
          <p class="leading-loose">
            Switching platforms or launching a new store can feel overwhelming,
            but we dramatically simplify the process. You have access to our
            onboarding dedicated personal consultant.
          </p>
        </div>
      </div>
      <!-- sub17 -->
    </div>
    <!-- 2nd -->
  </div>

  <Footer />
</main>
