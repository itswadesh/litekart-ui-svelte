<script>
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { HOST } from "./../config";
</script>

<style>
  p {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 2rem;
    margin-top: 2rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>

<svelte:head>
  <title>Litekart - Privacy Policy</title>
  <meta
    data-hid="description"
    name="description"
    content="Free and open source javascript ecommerce platform with essential
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
    content="Litekart - Most advanced javascript ecommerce of 2020" />
  <meta name="og_url" property="og:url" content={`${HOST}/privacy-policy`} />
  <meta
    property="og:description"
    content="Free and open source javascript ecommerce platform with essential
    enterprise level features. Only pay on customizations for your brand" />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Most advanced javascript ecommerce of 2020" />
  <meta
    name="twitter:description"
    content="Free and open source javascript ecommerce platform with essential
    enterprise level features. Only pay on customizations for your brand" />
  <link rel="canonical" href={`${HOST}`} />
  <link rel="alternate" hreflang="en" href={`${HOST}`} />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="mb-16 mx-2 lg:mx-48">
    <h1 class="text-5xl mt-8 mb-16 text-center font-bold">
      <span class="underline">Privacy</span>
      Policy
    </h1>
    <h2 class="text-xl">Promise! we never spam</h2>
    <p class="leading-loose tracking-wider">
      Litekart collects e-mail addresses and other contact details of people who
      register at our website and send us e-mail. The information we collect is
      not shared with or sold to others except under the certain circumstances
      and which your use of the Service is deemed to provide to us a valid
      consent to disclose the following: In order to investigate, prevent, or
      take action regarding illegal activities, suspected fraud, situations
      involving potential threats to the physical safety of any person,
      violations of Litekart’s terms of use, or as otherwise required by law. We
      share information about our Members with third parties, such as
      advertisers or partners, for marketing and promotional purposes. However,
      except as otherwise Litekart does not rent, sell, or share personal
      information about you with other companies. Litekart uses your information
      on a cumulative basis to help operate our web sites and enhance our web
      sites design, improve our content, our services and usability. We may also
      use the information we collect to occasionally notify you about important
      functionality changes to the web site, new Services, and special offers.
      We always use a secure connection when collecting personal financial
      information from you. However, no data transmission over the Internet can
      be guaranteed to be 100% secure. Your Litekart account is
      password-protected and you are free to create further users and user
      groups to whom you shall assign Usernames and Passwords, so only you and
      those you designate can access it and view the member information relevant
      to your account. Ultimately, you are responsible for maintaining the
      secrecy of your passwords and any account information. Litekart reserve
      the right to modify this privacy policy at any time, so please review it
      frequently. If we make material changes to this policy, we will notify you
      here or by means of a notice on our homepage so that you are aware of what
      information we collect. We are committed to conducting our business in
      accordance with these principles in order to ensure that the
      confidentiality of personal information is protected and maintained.
    </p>
  </div>
</main>
