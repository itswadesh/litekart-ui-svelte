<script>
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { HOST } from "./../config";
</script>

<style>
  h1 {
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-weight: bold;
  }
  /* h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  } p {
    margin-bottom: 2rem;
  } */
  ul {
    list-style-type: disc;
  }
  .hfull {
    min-height: 70vh;
  }
</style>

<svelte:head>
  <title>Litekart - Refund Policy</title>
  <meta
    data-hid="description"
    name="description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. Only pay on customizations for your brand" />
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
  <meta name="og_url" property="og:url" content={`${HOST}`} />
  <meta
    property="og:description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. Only pay on customizations for your brand" />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Most advanced nodejs ecommerce of 2020" />
  <meta
    name="twitter:description"
    content="Free and open source nodejs ecommerce platform with essential
    enterprise level features. Only pay on customizations for your brand" />
  <link rel="canonical" href={`${HOST}`} />
  <link rel="alternate" hreflang="en" href={`${HOST}/refund-policy`} />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="hfull mb-16 mx-2 lg:mx-48 leading-loose">
    <h1 class="text-5xl mt-8 mb-16 text-center font-bold">
      <span class="underline">Refund</span>
      & Cancellation Policy
    </h1>
    <ul class="leading-loose tracking-wider">
      <li>
        You may cancel your account at anytime by emailing support[@]litekart.in
      </li>
      <li>
        Once your account is cancelled all of your Content will be immediately
        deleted from the Service. Since deletion of all data is final please be
        sure that you do in fact want to cancel your account before doing so.
      </li>
      <li>
        If you cancel the Service in the middle of the month, you will receive
        one final invoice via email. Once that invoice has been paid you will
        not be charged again.
      </li>
      <li>
        We reserve the right to modify or terminate the Litekart service for any
        reason, without notice at any time.
      </li>
      <li>
        Fraud: Without limiting any other remedies, Litekart may suspend or
        terminate your account if we suspect that you (by conviction,
        settlement, insurance or escrow investigation, or otherwise) have
        engaged in fraudulent activity in connection with the Site.
      </li>
      <li>
        Note: no refunds are offered, even if a plan is canceled mid-month.
      </li>
    </ul>
  </div>
</main>
