<script>
  let features = [
    {
      icon: "search-plus",
      key: "Powerfull search",
      val:
        "Leveraging the power of elastic search technology, we achieve the exact match of the searched product, giving user the ease to use and enlightment."
    },
    {
      icon: "search",
      key: "Facets",
      val:
        "Facets helps to filter the search results further in the product listing/search/category page to narrow down the results. Facets can be based upon price range, brand, size, category, colors, key features."
    },
    {
      icon: "table",
      key: "Product details",
      val:
        "The Customers can click on a particular product and navigate to the product page to view complete display of the product, along with descriptions, offers and discounts that are applied to that product, and so on."
    },
    {
      icon: "cart-plus",
      key: "Wishlist",
      val:
        "Customers have option to add a product to Wishlist for later purchase"
    },
    {
      icon: "globe",
      key: "SEO",
      val: "100% Search Engine Friendly URLs, Google SiteMap support."
    },
    {
      icon: "ad",
      key: "Marketing & Promotions",
      val:
        "Catalog Promotional Pricing by percentage or fixed amount with ability to restrict to stores, categories, Products"
    },
    {
      icon: "list-alt",
      key: "Catalogue Browsing",
      val:
        "Multiple images for products, options for extensive reviews, wishlists and much more."
    },
    {
      icon: "clipboard-list",
      key: "Catalog Management",
      val:
        "Inventory management, batch import and export of products, additional product attributes."
    },
    {
      icon: "vote-yea",
      key: "Customer Accounts",
      val: "Order status and history, e-mail for products in the wishlist."
    },
    {
      icon: "user-check",
      key: "Analytics & Reporting",
      val:
        "The script is integrated with Google Analytics and offers many different reports."
    },
    {
      icon: "user-alt",
      key: "Customer Service",
      val:
        "Enhanced features for customers' accounts, Contact Us form, comprehensive order tracking and history, customizable order e-mails."
    },
    {
      icon: "truck-alt",
      key: "Shipping Options",
      val:
        "Option of free shipping, standard shipping, cart total based shipping"
    },
    {
      icon: "tasks",
      key: "Order Management",
      val:
        "Create orders through admin area, create multiple invoices shipments and credit memos, call center order creation option."
    },
    {
      icon: "network-wired",
      key: "PWA for eCommerce",
      val: "The future of mobile apps is here"
    },
    {
      icon: "money-check-alt",
      key: "Platform agnostic",
      val:
        "With all major modules separated, we have the power of choosing any API, any Store Front, any No-SQL database, any image processing service, any API"
    },
    {
      icon: "money-bill-wave-alt",
      key: "Banners",
      val: ""
    },
    {
      icon: "window-restore",
      key: "Product Search",
      val: "With help of elastic seach, the searching speed is improves by 5x"
    },
    {
      icon: "th-list",
      key: "Category Listing",
      val:
        "Along with seach functionality, users have an option to browse products based on categories"
    },
    {
      icon: "file-alt",
      key: "Product Detail Page",
      val:
        "Product details page is high SEO capable + has ability for html content + features + highlights + discounted pricing"
    },
    {
      icon: "check-square",
      key: "Javascript Cart",
      val: "Add to cart is realtime with interation animations"
    },
    {
      icon: "wallet",
      key: "Payment Gateways",
      val:
        "Integrate any payment gateway into the API with little customizations"
    },
    {
      icon: "pager",
      key: "Single Page Checkout",
      val: "Cart Summary, Address Input, Payment options all in a single page"
    },
    {
      icon: "file-alt",
      key: "Guest Checkout",
      val: "Option to checkout without even login"
    },
    {
      icon: "user-lock",
      key: "Authentication & Authorization",
      val:
        "We have both phone + email based authentication as well as authorization architecture with hierarchy"
    },
    {
      icon: "clipboard",
      key: "Manage Products",
      val: "Product details + stock can be managed by store manager"
    },
    {
      icon: "envelope",
      key: "Email Notifications",
      val: "There is an option to send email notifications with order details"
    },
    {
      icon: "wrench",
      key: "Settings",
      val: "Through Store Admin settings store information can be controlled"
    },
    {
      icon: "receipt",
      key: "Printable Invoice",
      val: "Every order generates an invoice which is temlate based"
    },
    {
      icon: "toolbox",
      key: "Related Products",
      val: "An API endpoint for products based on 1 referenced product"
    },
    {
      icon: "columns",
      key: "Dashboards & Analytics",
      val:
        "Store Dashboard which is accesed by admin have option for customizable reports"
    },
    {
      icon: "chart-line",
      key: "Sales Management",
      val:
        "Orders processing dashboard with complete details about that order + Option to create order from Admin Panel"
    },
    {
      icon: "user-circle",
      key: "Customers Management",
      val: "Customer details can be viewed, edited, exported"
    },
    {
      icon: "file-image",
      key: "CDN",
      val: "All static assets are served over CDN for faster content delivery"
    },
    {
      icon: "file-image",
      key: "Image Optimizations",
      val:
        "All images are optimized on the fly with microservice based image optimizations"
    },
    {
      icon: "hourglass-half",
      key: "Lazy Loading",
      val:
        "Listing page images are lazy loaded to present a instant loading experience"
    },
    {
      icon: "folder-open",
      key: "Page Preloading",
      val:
        "Preloader are enable automatically whenever there is a network response delay"
    },
    {
      icon: "photo-video",
      key: "Animations",
      val:
        "Store front and Store admin has some user interation animation which ads to user experience"
    },
    {
      icon: "layer-group",
      key: "Multi Level Categories",
      val: "We can nest categories upto 4 levels"
    },
    {
      icon: "poll-h",
      key: "Megamenu",
      val: "Megamenu can be enalbed for a store with multi level category"
    },
    {
      icon: "money-bill-wave",
      key: "CMS Pages",
      val:
        "You can create unlimited number of static pages for the eCommerce store"
    },
    {
      icon: "money-bill-wave",
      key: "Banners",
      val:
        "Store banners can be uploaded directly from admin panel. There are 5 types of banners available for store front"
    },
    {
      icon: "money-bill-wave",
      key: "Sizechart",
      val:
        "Sizechart can be uploaded against a particular product or category or brand"
    },
    {
      icon: "briefcase",
      key: "Brand Management",
      val:
        "There is a master repository for brands. Store manager has option to attach brand to a product"
    },
    {
      icon: "mail-bulk",
      key: "Email Templates",
      val: "Email Templates are completely customizable from store admin panel"
    },
    {
      icon: "envelope-open-text",
      key: "Auto send invoice through emails",
      val:
        "There is an option to automatically email invoice whenever an order is placed, or invoice is requested by user"
    },
    {
      icon: "star-half-alt",
      key: "Ratings & Reviews",
      val: "Rating and Reviews have moderation option too"
    },
    {
      icon: "cart-plus",
      key: "Promotions (Cart & Product)",
      val: "There are both Cart and Product promotions options"
    },
    {
      icon: "luggage-cart",
      key: "Wishlist",
      val: "Wishlist can be enalbed if a store admin wish so"
    },
    {
      icon: "tags",
      key: "Product Option Based Price",
      val:
        "In certain cases product price varies based on size, hence this requirement is already taken care of"
    },
    {
      icon: "address-card",
      key: "Multiple Delivery Address",
      val:
        "All users address are stored and during checkout it is presented for selection"
    },
    {
      icon: "sign-in-alt",
      key: "Social login",
      val:
        "Litekart has an option of Social login using Google, Facebook, Twitter, Github"
    },
    {
      icon: "server",
      key: "Server rendered (Univarsal)",
      val:
        "The complete website is server rendered. Hence we get great speed, low memory requirement, high SEO score"
    },
    {
      icon: "folder-minus",
      key: "Reports & Analytics",
      val:
        "Sales Report, Abandoned Cart, Best Purchased Products, Product Reviews"
    },
    {
      icon: "dolly-flatbed",
      key: "Abandonned Carts",
      val:
        "We keep all cart activity in a database, may that be not loggedin users, later we can send promotional emails using this data"
    },
    {
      icon: "sort-alpha-up",
      key: "Featured Products",
      val:
        "Store manager has an option to feature a product at home page to push sell"
    },
    {
      icon: "eye",
      key: "Recently Viewed Products",
      val: "This sections displays the product browsing history of a customer"
    },
    {
      icon: "box",
      key: "Related Products",
      val:
        "When an customer browse a product, the system selects similar product and displays it bellow that products details"
    },
    {
      icon: "users",
      key: "Best Viewed Products Report",
      val:
        "We keep track of each product views. This report selects products for which customers shown interest the most"
    },
    {
      icon: "key",
      key: "SSL",
      val:
        "Easily deploy SSL certificates for your store adding more security and customer confidence"
    },
    {
      icon: "sms",
      key: "SMS & Email Notifications for orders",
      val:
        "Both SMS and Email options are fully configurable, you can create your own SMS and Email templates"
    },
    {
      icon: "phone-square",
      key: "Contact Us form",
      val:
        "The Litekart has inbuild contact us form which collects user queries into system for later review"
    },
    {
      icon: "file-upload",
      key: "Import and Export of catalog",
      val:
        "Users, Orders, Catalog can be imported into the database and the export option helps to easily take out and study the performance of a group of products"
    },
    {
      icon: "fill-drip",
      key: "Simple, Configurable (e.g. size, color, etc.) and Grouped Products",
      val:
        "A product can be Simple product, without variations or with combinations like different sizes. There is also an option to group products based on color"
    },
    {
      icon: "file-invoice",
      key: "Reviews Moderation",
      val:
        "Reviews and Ratings has option for direct publish or publish after moderation"
    },
    {
      icon: "edit",
      key: "Multiple Images Per Product",
      val:
        "You can upload multiple image against a single product + Option to upload different image for each variant/option"
    },
    {
      icon: "pencil-ruler",
      key: "Inventory Management",
      val:
        "Stock is automatically updated on item receipt and when order is placed"
    },
    {
      icon: "people-carry",
      key: "Product sharing option",
      val:
        "From product details page, it can be directly shared through social websites"
    },
    {
      icon: "share-alt-square",
      key: "Social media optimized",
      val: ""
    },
    {
      icon: "layer-group",
      key:
        "Layered / Faceted Navigation for filtering of products in categories",
      val:
        "Along with powerful seach option, the search results can be further narrowed down using facets"
    },
    {
      icon: "bread-slice",
      key: "Breadcrumbs",
      val: "Automated breadcrumbs for all pages"
    },
    {
      icon: "dice-d6",
      key: "Product moderation",
      val: "Option to publish products after moderation by Store Manager"
    },
    {
      icon: "scroll",
      key: "Infinite scroll",
      val:
        "For home page and product listing page there is option to enable infinite scrolling"
    },
    {
      icon: "laptop",
      key: "Cart sync across devices",
      val:
        "The items added into cart are automatically synced acroll all logged in devices of the user"
    },
    {
      icon: "search",
      key: "Instant search",
      val: "Search suggestions / instant search Using power of elastic search"
    },
    {
      icon: "stackpath",
      key: "Modern JS Stack",
      val:
        "Using VueJS, Nuxt, Svelte, Sapper, NodeJS, MongoDB, Webpack, Express"
    },
    {
      icon: "tv",
      key: "Replace your frontend without backend changes",
      val: "Attach any store front without changing the server architecture"
    },
    {
      icon: "shield-alt",
      key:
        "Bulletproof infrastructure for seasonal traffic peaks like Black Friday",
      val:
        "With Horizontal scaling capability handle any traffic surge. The architecture will take care of it gracefully"
    },
    {
      icon: "cloud-upload-alt",
      key: "Cloud hosting",
      val: "Leverage the power of speed, scalability and availability"
    },
    {
      icon: "trash-restore",
      key: "Automated backups",
      val:
        "Backups are automatically generated everyday giving you peace of mind"
    },
    {
      icon: "server",
      key: "static assets served from CDN",
      val:
        "Using CDN through out the world static assets are served with a greater speed"
    },
    {
      icon: "industry",
      key: "Unlimited product variants (color, size etc)",
      val:
        "You can attach unlimited number of products, product variants, product features"
    },
    {
      icon: "filter",
      key: "Unlimited product search filters",
      val:
        "Product search results can be narrowed down further using any number of filters"
    },
    {
      icon: "filter",
      key: "Search terms report",
      val: "We keep track of all search terms of user for analytics purpose"
    },
    {
      icon: "dollar-sign",
      key: "Retail and Selling price",
      val: "There is 3 pricing options - Maximum Retail Price, Selling Price"
    },
    {
      icon: "id-card-alt",
      key: "Custom OrderID",
      val: "Order ID prefix can be choosen from API settings"
    },
    {
      icon: "keyboard",
      key: "Inbuilt editable fields for keywords, meta title and description",
      val:
        "Each page, product, category, brand has editable keywords, meta title and description fields"
    },
    {
      icon: "globe",
      key: "SEO optimized themes for better brand presence",
      val: "Store front has been specially crafted with SEO in mind"
    },
    {
      icon: "servicestack",
      key: "Most advanced technology stack",
      val:
        "With continuous software update we keep Litekart as par with latest technology enhancement and is free for lifetime"
    },
    {
      icon: "smile-beam",
      key: "Low Stock Report",
      val: "Store Manager will get notification of safety stock level"
    },
    {
      icon: "glasses ",
      key: "View, edit, create and fulfill orders from admin panel",
      val: "Order can be created and fulfilled from admin panel"
    },
    {
      icon: "headset",
      key: "Call Center (phone) order creation",
      val: ""
    },
    {
      icon: "users-cog",
      key: "User roles for better store administration",
      val: "Hierarchy based user roles keeps the abstraction level"
    },
    {
      icon: "internet-explorer",
      key:
        "Web Services API for easy integration with any third-party application",
      val:
        "ReST architecture of litekart integrates easily with third-party plugins"
    },
    {
      icon: "marker",
      key: "Fully customizable design using templates",
      val: ""
    },
    {
      icon: "edit",
      key: "Content Management System for Informational Pages",
      val:
        "HTML/CSS based static pages can be created from Admin Panel by Store Manager"
    },
    {
      icon: "google-plus",
      key: "Google and Fb analytics and pixel integration",
      val:
        "Google analytics, facebook pixel can be integrated with just proving the ID"
    },

    {
      icon: "map-marked-alt",
      key: "Auto Generate Google Site Map",
      val:
        "Google sitemap is automatically generated everyday midnight through a cron job at server"
    },
    {
      icon: "info",
      key: "Meta-information for products and categories",
      val:
        "As a basic SEO requirement meta product and category information is enabled as per latest SEO standard which can be directly controlled from admin panel"
    },
    {
      icon: "google-plus-g",
      key: "Integrated with Google Analytics",
      val: "Google Analytics can be configured from Admin panel"
    }
  ];
</script>

<style>
  .watch {
    color: #ff7426;
  }
</style>

<!-- CATEGORIES
SITE MANAGEMENT
CATALOGUE MANAGEMENT
PRODUCT BROWSING
CATALOGUE BROWSING
SEO
REPORTS
MARKETING
ORDER MANAGEMENT
CUSTOMER CARE
CUSTOMER ACCOUNTS
ADDITIONAL FEATURES
CODING / DEVELOPMENT -->

<div>
  <h1 class="text-center text-3xl mt-12 mb-2">
    <b>WHAT’S INCLUDED</b>
  </h1>
  <h2 class="text-center text-xl text-gray-900 mb-8">
    Get 100+ premium features out of the box with Litekart's integrated onetime
    pricing
  </h2>
  <div class="flex justify-between flex-wrap">
    {#each features as f}
      <div class="w-full lg:w-1/2 p-2">
        <div
          class="flex flex-col md:flex-row rounded-lg px-6 py-8 shadow-md
          text-center md:text-left">
          <i class={`fa fa-${f.icon} text-6xl md:mr-8`} />
          <!-- <img use:lazyload  src="img/rocket.svg" class="flex " alt="" /> -->
          <div class="flex flex-col">
            <h1 class="mb-2 text-xl">{f.key}</h1>
            <div class="text-ms">{f.val}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
