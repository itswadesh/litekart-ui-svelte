<script>
  import Hero from "./../components/Hero.svelte";
  import Highlight from "./../components/Highlight.svelte";
  import Features from "./../components/Features.svelte";
  import Clients from "./../components/Clients.svelte";
  import Pricing from "./../components/Pricing.svelte";
  import Display from "./../components/Display.svelte";
  import Dad from "./../components/Dad.svelte";
  import Rocket from "./../components/Rocket.svelte";
  import Carousel from "./../components/unused/Carousel.svelte";
  import Collapsible from "./../components/unused/Collapsible.svelte";
  import Login from "./../components/unused/Login.svelte";
  import Testimonials from "./../components/Testimonials.svelte";
  import ForgotPassword from "./../components/unused/ForgotPassword.svelte";
  import { host } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
</script>

<svelte:head>
  <title>Litekart - Lightening fast ecommerce software of 2020</title>
  <meta
    data-hid="description"
    name="description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. Highly scalable, customizable, headless,
    superfast" />
  <meta
    name="keywords"
    content="ecommerce software, image optimization, lazy loading, headless,
    authentication, tailwindcss, headless ecommerce, carousel, instant
    search,vuejs pwa, opensource ecommerce, faceted filters, headless commerce" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Litekart - Most advanced nodejs ecommerce of 2020" />
  <meta name="og_url" property="og:url" content={`${host}`} />
  <meta
    property="og:description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. highly scalable, headless, fast" />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Most advanced nodejs ecommerce of 2020" />
  <meta
    name="twitter:description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. Highly scalable, headless, fast" />
  <link rel="canonical" href={`${host}`} />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <!-- <ForgotPassword />
  <Login />
  <Carousel />
  <Collapsible /> -->
  <Hero />
  <Features />
  <Rocket />
  <Testimonials />
  <Highlight />
  <Clients />
  <Pricing />
  <Display />
  <Dad />
  <a
    class="fixed bottom-0 right-0 mb-24 mr-5"
    href="https://api.whatsapp.com/send?phone=918249028220"
    target="_blank">
    <img src="/whatsapp-chat.png" style="width: 57px;" alt="#" />
  </a>
</main>
