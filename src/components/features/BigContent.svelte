<script>
  let features = [
    {
      h: "Products Management",
      img: "img/lady-left.png",
      data: [
        "Sell physical products, services or digital products",
        "Unlimited product variants (color, size etc), categories and collections",
        "Minimum & maximum order quantity",
        "Description & attributes of products and other cus tom fields",
        "Upload files for product",
        "Catalogue only mode",
        "Inventory Management",
        "Embed Videos in Product Description",
        "Unlimited product search filters",
        "Retail and Selling price",
        "Reviews, comments, testimonials and product comparison",
        "Wishlist, Cart and Call for enquiry option"
      ]
    },
    {
      h: "Order Management",
      img: "lady-left.png",
      data: [
        "Abandoned Cart Recovery",
        "Single Page Checkout",
        "Guest Checkout",
        "Product update on the order page",
        "Use store credits to place the order",
        "Order options",
        "Custom checkout opt fields",
        "Order Tracking",
        "Email + SMS notifications to admin, customer and vendors",
        "Re­Order",
        "Custom OrderID",
        "Orders integration with Flipkart, Amazon, eBay, Snapdeal and offline orders"
      ]
    },
    {
      h: "Shopping Cart",
      img: "svg/shopping-cart.svg",
      data: [
        "Abandoned Cart Recovery",
        "Single Page Checkout",
        "Guest Checkout",
        "Product update on the order page",
        "Use store credits to place the order",
        "Order options",
        "Custom checkout opt fields",
        "Order Tracking",
        "Email + SMS notifications to admin, customer and vendors",
        "Re­Order",
        "Custom OrderID",
        "Orders integration with Flipkart, Amazon, eBay, Snapdeal and offline orders"
      ]
    },
    {
      h: "SEO Ready Sites",
      img: "svg/web.svg",
      data: [
        "SEO ready platform for faster SERP ranking",
        "Inbuilt features to automate and simplify digital marketing",
        "Unique product page URLs and image ALT tags",
        "Page optimization with title and meta details per product, collection and category",
        "Default and editable page title, meta details and keywords field",
        "SEO optimized themes for better brand presence",
        "Automatically generated HTML sitemap, XML sitemap and robots.txt",
        "Inbuilt blog feature to allow blogging even before you start selling",
        "Write now, edit and publish later blog feature",
        "Define blog categories and add multiple images or videos to blog",
        "Get user view count, comments and social sharing on each blog"
      ]
    },
    {
      h: "Performance and Analytics Tools",
      img: "svg/seo.svg",
      data: [
        "Top customers report",
        "Top selling products report",
        "Integration with Google Analytics",
        "Dashboard Reports to analyze store performance",
        "Visitor tracker through Zoho SalesIQ",
        "Top selling brands report",
        "Conversion rate",
        "COD vs Online payments report",
        "Category­wise and Collectionwise performance reports",
        "Reports export functionality for strategy and planning",
        "Performance comparison based upon dates/months/year"
      ]
    },
    {
      h: "Marketing, Discounts & Promotions",
      img: "svg/shopping-online.svg",
      data: [
        "Email marketing through MailChimp, Sendgrid etc",
        "Advanced discount engine for multi­tier discounting based on category, product, quantity order, device, seller and customer ",
        "Live Chat and notifications to engage customers in real-time",
        "Coupon code creation and expiry date",
        "Integration with shopping comparison sites",
        "Customer loyalty programme and redemption points",
        "Bulk Discounts and Combos (buy one get one free)",
        "Social plugins & Social media marketing",
        "Discounts specific promotional sliders and banners",
        "Newsletter subscriptions",
        "Affiliate & remarketing tracking code integration",
        "Google Adwords"
      ]
    },
    {
      h: "Security & Hosting",
      img: "svg/secure-payment.svg",
      data: []
    },
    {
      h: "Developer Tools",
      img: "svg/game-developer.svg",
      data: [
        "Mobile ready site design",
        "        Cross­device & Cross-browser compatibility",
        "Multiple Free Templates to choose from",
        "Drag and drop support to design and customize themes",
        "HTML/CSS Editing",
        "Unlimited Static Pages",
        "Support for Multi­Lingual Themes",
        "Customizable Navigation",
        "Editable Email & Invoice Templates",
        "Social Plugins",
        "Sliders & Banners",
        "Custom themes",
        "Theme based upon device, location or customer group"
      ]
    },
    {
      h: "Payment Gateways",
      img: "svg/payment.svg",
      data: [
        "Support for multiple payment gateways",
        "Wallets Store Credits",
        "SSL certified and secure payment gateways",
        "Location auto­detection for currency",
        "Offline payments &amp; Cash on Delivery",
        "Support for multiple payment gateways",
        "SSL certified and secure payment gateways",
        "Multiple payment options- Debit Card, Credit Card, Netbanking,            Prepaid Wallets Store Credits",
        "Offline payments & Cash on Delivery"
      ]
    },
    {
      h: "Technology, Hosting & Security",
      img: "svg/techonology.svg",
      data: [
        "Inherently Mobile Ready Platform",
        "Google-backed Progressive Web Apps(PWA) ",
        "FREE SSL",
        "99.99% uptime",
        "Horizontally and vertically scalable platform",
        "Microsoft Azure, AWS and Google Cloud hosting",
        "Custom URLs for product, category, collection, blog etc.",
        "Custom­ defined URL formats",
        "Bulk update for URLs",
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
        "Mobile Push Notifications",
        "SMS notifications ",
        "Customized mobile app",
        "Device-based content and design",
        "Product Comparison",
        "Integration with popular mobile apps like Whatsapp",
        "Track mobile visitors"
      ]
    }
  ];
</script>

<style>
  ul {
    list-style-type: disc;
  }
</style>

<!-- 2nd section -->
{#each features as f, ix}
  {#if ix % 2 == 0}
    <div class="flex flex-wrap bg-gray-100 px-2 lg:px-64 lg:mb-12">
      <div
        class="order-last lg:order-first leading-loose w-full lg:w-1/2 pr-0
        lg:pr-12 mb-8">
        <h1 id={'h1-' + ix} class="text-4xl mb-2">{f.h}</h1>
        <div class="flex">
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
      <div class="lg:order-last order-first w-full lg:w-1/2">
        <img src={`/${f.img}`} class="w-full" alt="" />
      </div>
    </div>
  {/if}
  <!-- 2nd section -->
  <!-- 3rd section -->
  {#if ix % 2 == 1}
    <div class="flex flex-wrap px-2 lg:px-64 lg:mb-12">
      <div class="leading-loose w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
        <img src={`/${f.img}`} class="w-full" alt="" />
      </div>
      <div class="w-full lg:w-1/2">
        <h1 id={'h1-' + ix} class="text-4xl mb-2">{f.h}</h1>
        <div class="flex">
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
