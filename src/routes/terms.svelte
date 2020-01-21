<script>
  import { HOST } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
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
  <title>Litekart - Terms & Policy</title>
  <meta
    data-hid="description"
    name="description"
    content="Litekart terms and policy are most suited for startups. We love to
    help people growing their business" />
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
    content="Litekart - Terms & Policy" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Litekart terms and policy are most suited for startups. We love to
    help people growing their business" />
  <meta name="og_url" property="og:url" content={`${HOST}`} />
  <!-- Twitter -->
  <meta name="twitter:title" content="Litekart - Terms & Policy" />
  <meta
    name="twitter:description"
    content="Litekart terms and policy are most suited for startups. We love to
    help people growing their business" />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="mb-16 mx-2 lg:mx-48 ">
    <h1 class="text-5xl mt-8 mb-16 text-center font-bold">
      Litekart
      <span class="underline">Terms</span>
    </h1>
    <h2 class="text-xl">Refund Policy</h2>
    <p>Full Refund witin 7 days if it does not work the way you wish</p>
    <h2 class="text-xl">Script Usage</h2>
    <p>
      The ecommerce Scripts located on codenx.com/shopnx.in Resources are made
      by Swadesh Behera, submitted by the author, or found in the public domain.
      They can be used freely on private or commercial sites unless stated
      otherwise by the script author in the copyright notice contained in the
      script and providing all credits to the author are left intact. They may
      be altered to conform with your site, but please leave all credit notes
      and copyright notices from the authors in place. The scripts remain the
      property of the author and any extra copyright policy by the author must
      be adheared to before using these scripts. codenx Resources retains the
      right to edit any copyrighted scripts it sees fit for display purposes
      only to make it conform with this site, it does not alter the script in
      any fashion from the authors original for download purposes.
    </p>
    <h2 class="text-xl">About The Script</h2>
    <p>
      These scripts are text files which can be opened with any text editor
      (notepad, word, etc), they have been compressed into .zip format to ensure
      the text format remains complete, as sending text files via standard html
      can destroy the format and present you with a corrupt script. You can open
      the .zip files with a program such as Winzip, a free program available
      from WinZip and extract the text file from inside into a directory of your
      choice. If you have any trouble using the scripts located on codenx
      Resources, please refer to the author page on this site for seeking help.
    </p>
    <h2 class="text-xl">Warranty</h2>
    <p>
      We do not guarantee they will function with all 3rd party scripts or web
      browsers. We are not responsible for any script compatibility conflicts
      that may occur. It is our policy to support our products as best we can
      and we will provide support for 3rd party scripts conflicts at our
      discretion or as time allows. We are not responsible for any data loss
      that may occur as a result of installing these products.
    </p>
    <h2 class="text-xl">License</h2>
    <p>Themes and Support are provided as is under the GPL 2.0 license.</p>
    <h2 class="text-xl">Browser Compatibility</h2>
    <p>
      Our Arialshop / ShopNx support all modern web browsers including (but not
      limited to) Firefox, Safari, Chrome (all on PC & Mac). Whilst we strive to
      give every a seamless & near-identical experience across each of these
      browsers, it is impossible to compensate for the lack of web standards
      support (relating to HTML & CSS) in some of these browsers. In the case of
      a browser not support certain web standards, we will include a generic
      workaround for that browser, which will degrade a specific function /
      feature gradually and in a way that doesn’t affect the user experience
      negatively.
    </p>
    <h2 class="text-xl">Ownership</h2>
    <p>
      You may not claim intellectual or exclusive ownership to any of our
      product, modified or unmodified. All products are property of codenx. Our
      products are provided “as is” without warranty of any kind, either
      expressed or implied. In no event shall our juridical person be liable for
      any damages including, but not limited to, direct, indirect, special,
      incidental or consequential damages or other losses arising out of the use
      of or inability to use our product.
    </p>
    <h2 class="text-xl">Support</h2>
    <p>Dedicated 24/7 support through email.</p>
  </div>
</main>
