<script>
  import { lazyload } from "../../actions/lazyload";
  let features = [
    {
      h: "Products Management",
      img: "svg/box.svg",
      data: [
        "Sell physical products, services or digital products",
        "Unlimited product variants (color, size etc), categories and collections",
        "Description & attributes of products",
        "Inventory Management",
        "Unlimited product search filters",
        "Retail and Selling price",
        "Product Reviews",
        "Wishlist, Cart",
        "You may also like (Similar) products section",
        "Items on sale section",
        "Recenyly viewed products section",
        "Grouped similar products with different color options"
      ]
    },
    {
      h: "Order Management",
      img: "svg/factory.svg",
      data: [
        "Single Page Checkout",
        "Guest Checkout",
        "Product update on the order page",
        "Order Tracking",
        "Email + SMS notifications to admin, customer and vendors",
        "Re­Order",
        "Custom OrderID",
        "Orders integration with Flipkart, Amazon, eBay, Snapdeal and physical store"
      ]
    },
    {
      h: "Shopping Cart",
      img: "svg/shopping-cart.svg",
      data: [
        "Auto sync shopping cart across devices (Desktop, mobile)",
        "Realtime shopping cart qty and price update and sync with database",
        "Abandoned Cart Recovery",
        "Move to wishlist option from cart"
      ]
    },
    {
      h: "SEO Ready Sites",
      img: "svg/web.svg",
      data: [
        "SEO optimized platform for faster & efficient SERP ranking",
        "Inbuilt features to automate and simplify digital marketing",
        "Unique product page URLs and image ALT tags",
        "Page optimization with title and meta details per product, collection and category",
        "Default and editable page title, meta details and keywords field",
        "Automatically generated XML sitemap and robots.txt"
      ]
    },
    {
      h: "Performance and Analytics Tools",
      img: "svg/seo.svg",
      data: [
        "Top customers report",
        "Top selling products report",
        "Top selling brands report",
        "Top selling categories report",
        "Find missing image against products",
        "Out of stock alert",
        "Integration with Google Analytics",
        "Reports export functionality for strategy and planning"
      ]
    },
    {
      h: "Security & Hosting",
      img: "svg/secure-payment.svg",
      data: []
    },
    {
      h: "Developer Tools",
      img: "devloperimg.png",
      data: [
        "Mobile first website design",
        "Cross­device & Cross-browser compatibility",
        "HTML/CSS Editing",
        "Unlimited Static Pages",
        "Support for Multi­Lingual Themes",
        "Customizable Navigation",
        "Editable Email & Invoice Templates",
        "Sliders & Banners"
      ]
    },
    {
      h: "Payment Gateways",
      img: "svg/payment.svg",
      data: [
        "Support for multiple payment gateways",
        "Integrations with over 15 gateways including PayU, PayPal, Paytm, Instamojo, Razorpay and more.",
        "SSL certified and secure payment gateways",
        "Offline payments & Cash on Delivery",
        "Multiple payment options- Debit Card, Credit Card, Netbanking, Prepaid/Postpaid Wallets"
      ]
    },
    {
      h: "Technology, Hosting & Security",
      img: "svg/techonology.svg",
      data: [
        "Google-backed Progressive Web Apps(PWA) ",
        "FREE SSL",
        "99.99% uptime",
        "Horizontally and vertically scalable platform",
        "Microsoft Azure, AWS and Google Cloud hosting",
        "Custom URLs for product, category, collection, blog etc.",
        "Automatic 301 redirects",
        "Correct use of robots.txt file",
        "HTML easily parsed by search spiders"
      ]
    },
    {
      h: "Mobile Commerce Advantage",
      img: "svg/online-shop.svg",
      data: [
        "Mobile Ready Store Front",
        "Mobile Apps",
        "Mobile Application for Store Management(mobile apps page)",
        "SMS notifications ",
        "Customized mobile app",
        "Device-based content and design",
        "Integration with popular mobile apps like Whatsapp",
        "Track mobile visitors"
      ]
    }
  ];
</script>

<style>
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  img {
    filter: drop-shadow(0px 27px 11px gray);
    z-index: 0;
  }
  .img {
    height: 350px;
    width: 350px;
  }
  .bg {
    background-image: url(/end-banner.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

<!-- 2nd section -->
{#each features as f, ix}
  {#if ix % 2 == 0}
    <div class="bg flex flex-wrap px-2 lg:px-48 lg:mb-12">
      <div class="order-last lg:order-first w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
        <h1 id={'h1-' + ix} class="text-4xl mb-2 font-bold">{f.h}</h1>
        <div class="flex leading-loose">
          <ul class="w-1/2 ">
            {#each f.data as i, ix}
              {#if ix % 2 == 0}
                <li>{i}</li>
              {/if}
            {/each}
          </ul>
          <ul class="w-1/2 mx-6 py-4 ">
            {#each f.data as i, ix}
              {#if ix % 2 == 1}
                <li>{i}</li>
              {/if}
            {/each}
          </ul>
        </div>
      </div>
      <div class="lg:order-last order-first w-full lg:w-1/2">
        <img use:lazyload  src={`/${f.img}`} class="img m-auto" alt="" />
      </div>
    </div>
  {/if}
  <!-- 2nd section -->
  <!-- 3rd section -->
  {#if ix % 2 == 1}
    <div class="flex flex-wrap px-2 lg:px-48 lg:mb-12">
      <div class=" w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
        <img use:lazyload  src={`/${f.img}`} class="img m-auto" alt="" />
      </div>
      <div class=" w-full lg:w-1/2">
        <h1 id={'h1-' + ix} class="text-4xl mb-2 font-bold">{f.h}</h1>
        <div class="flex leading-loose">
          <ul class="w-1/2 mx-6">
            {#each f.data as i, ix}
              {#if ix % 2 == 0}
                <li>{i}</li>
              {/if}
            {/each}
          </ul>
          <ul class="w-1/2 mx-6">
            {#each f.data as i, ix}
              {#if ix % 2 == 1}
                <li>{i}</li>
              {/if}
            {/each}
          </ul>
        </div>
      </div>
    </div>
  {/if}
{/each}

<!-- 3rd section -->
