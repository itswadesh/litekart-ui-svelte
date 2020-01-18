<script>
  let features = [
    {
      img: "details/purple/search-solid.svg",
      icon: "search-plus text-purple-600",
      key: "Powerfull search",
      val:
        "Leveraging the power of elastic search technology, we achieve the exact match of the searched product, giving user the ease to use and enlightment."
    },
    {
      img: "details/pink/facets.svg",
      icon: "search text-pink-600",
      key: "Facets",
      val:
        "Facets helps to filter the search results further in the product listing/search/category page to narrow down the results. Facets can be based upon price range, brand, size, category, colors, key features."
    },
    {
      img: "details/purple/product details.svg",
      icon: "table text-purple-600 ",
      key: "Product details",
      val:
        "The Customers can click on a particular product and navigate to the product page to view complete display of the product, along with descriptions, offers and discounts that are applied to that product, and so on."
    },
    {
      img: "details/pink/wishlist.svg",
      icon: "cart-plus text-pink-600",
      key: "Wishlist",
      val:
        "Customers have option to add a product to Wishlist for later purchase"
    },
    {
      img: "details/purple/SEO.svg",
      icon: "globe text-purple-600",
      key: "SEO",
      val: "100% Search Engine Friendly URLs, Google SiteMap support."
    },
    {
      img: "details/pink/marketing&promotions.svg",
      icon: "ad text-pink-600",
      key: "Marketing & Promotions",
      val:
        "Catalog Promotional Pricing by percentage or fixed amount with ability to restrict to stores, categories, Products"
    },
    {
      img: "details/purple/Catalogue Browsing.svg",
      icon: "list-alt text-purple-600",
      key: "Catalogue Browsing",
      val:
        "Multiple images for products, options for extensive reviews, wishlists and much more."
    },
    {
      img: "details/pink/catlog-managment.svg",
      icon: "clipboard-list text-pink-600",
      key: "Catalog Management",
      val:
        "Inventory management, batch import and export of products, additional product attributes."
    },
    {
      img: "details/purple/Customer Accounts.svg",
      icon: "vote-yea text-purple-600",
      key: "Customer Accounts",
      val: "Order status and history, e-mail for products in the wishlist."
    },
    {
      img: "details/pink/analytic&reporting.svg",
      icon: "user-check text-pink-600",
      key: "Analytics & Reporting",
      val:
        "The script is integrated with Google Analytics and offers many different reports."
    },
    {
      img: "details/purple/Customer check.svg",
      icon: "user-alt text-purple-600",
      key: "Customer Service",
      val:
        "Enhanced features for customers' accounts, Contact Us form, comprehensive order tracking and history, customizable order e-mails."
    },
    {
      img: "details/pink/shipping-options.svg",
      icon: "truck-alt text-pink-600",
      key: "Shipping Options",
      val:
        "Option of free shipping, standard shipping, cart total based shipping"
    },
    {
      img: "details/purple/Order managment.svg",
      icon: "tasks text-purple-600",
      key: "Order Management",
      val:
        "Create orders through admin area, create multiple invoices shipments and credit memos, call center order creation option."
    },
    {
      img: "details/pink/network-wired-solid.svg",
      icon: "network-wired text-pink-600",
      key: "PWA for eCommerce",
      val: "The future of mobile apps is here"
    },
    {
      img: "details/purple/platform agnostic.svg",
      icon: "money-check-alt text-purple-600",
      key: "Platform agnostic",
      val:
        "With all major modules separated, we have the power of choosing any API, any Store Front, any No-SQL database, any image processing service, any API"
    },
    {
      img: "details/pink/banner.svg",
      icon: "money-bill-wave-alt text-pink-600",
      key: "Banners",
      val: ""
    },
    {
      img: "details/purple/product search.svg ",
      icon: "window-restore text-purple-600",
      key: "Product Search",
      val: "With help of elastic seach, the searching speed is improves by 5x"
    },
    {
      img: "details/pink/category-list.svg",
      icon: "th-list text-pink-600",
      key: "Category Listing",
      val:
        "Along with seach functionality, users have an option to browse products based on categories"
    },
    {
      img: "details/purple/Product details.svg  ",
      icon: "file-alt text-purple-600",
      key: "Product Detail Page",
      val:
        "Product details page is high SEO capable + has ability for html content + features + highlights + discounted pricing"
    },
    {
      img: "details/pink/javascript.svg  ",
      icon: "check-square text-pink-600",
      key: "Javascript Cart",
      val: "Add to cart is realtime with interation animations"
    },
    {
      img: "details/purple/payment-gateway.svg",
      icon: "wallet text-purple-600",
      key: "Payment Gateways",
      val:
        "Integrate any payment gateway into the API with little customizations"
    },
    {
      img: "details/pink/single-page.svg ",
      icon: "pager text-pink-600",
      key: "Single Page Checkout",
      val: "Cart Summary, Address Input, Payment options all in a single page"
    },
    {
      img: "details/purple/Guest Checkout.svg",
      icon: "file-alt text-purple-600",
      key: "Guest Checkout",
      val: "Option to checkout without even login"
    },
    {
      img: "details/pink/authendication.svg",
      icon: "user-lock text-pink-600",
      key: "Authentication & Authorization",
      val:
        "We have both phone + email based authentication as well as authorization architecture with hierarchy"
    },
    {
      img: "details/purple/Manage products.svg ",
      icon: "clipboard text-purple-600",
      key: "Manage Products",
      val: "Product details + stock can be managed by store manager"
    },
    {
      img: "details/pink/email.svg ",
      icon: "envelope text-pink-600",
      key: "Email Notifications",
      val: "There is an option to send email notifications with order details"
    },
    {
      img: "details/purple/settings.svg",
      icon: "wrench text-purple-600",
      key: "Settings",
      val: "Through Store Admin settings store information can be controlled"
    },
    {
      img: "details/pink/printable-invoice.svg",
      icon: "receipt text-pink-600",
      key: "Printable Invoice",
      val: "Every order generates an invoice which is temlate based"
    },
    {
      img: "details/purple/Related Products.svg",
      icon: "toolbox text-purple-600",
      key: "Related Products",
      val: "An API endpoint for products based on 1 referenced product"
    },
    {
      img: "details/pink/dashboard.svg",
      icon: "columns text-pink-600",
      key: "Dashboards & Analytics",
      val:
        "Store Dashboard which is accesed by admin have option for customizable reports"
    },
    {
      img: "details/purple/chart-line-solid.svg ",
      icon: "chart-line text-purple-600",
      key: "Sales Management",
      val:
        "Orders processing dashboard with complete details about that order + Option to create order from Admin Panel"
    },
    {
      img: "details/pink/user-roles.svg",
      icon: "user-circle text-pink-600",
      key: "Customers Management",
      val: "Customer details can be viewed, edited, exported"
    },
    {
      img: "details/purple/file-image-solid.svg",
      icon: "file-image text-purple-600",
      key: "CDN",
      val: "All static assets are served over CDN for faster content delivery"
    },
    {
      img: "details/pink/file-image-regular.svg",
      icon: "file-image text-pink-600",
      key: "Image Optimizations",
      val:
        "All images are optimized on the fly with microservice based image optimizations"
    },
    {
      img: "details/purple/lazy-loading.svg ",
      icon: "hourglass-half text-purple-600",
      key: "Lazy Loading",
      val:
        "Listing page images are lazy loaded to present a instant loading experience"
    },
    {
      img: "details/pink/folder-open-solid.svg",
      icon: "folder-open text-pink-600",
      key: "Page Preloading",
      val:
        "Preloader are enable automatically whenever there is a network response delay"
    },
    {
      img: "details/purple/animation.svg ",
      icon: "photo-video text-purple-600",
      key: "Animations",
      val:
        "Store front and Store admin has some user interation animation which ads to user experience"
    },
    {
      img: "details/pink/multilevel-categories.svg",
      icon: "layer-group text-pink-600",
      key: "Multi Level Categories",
      val: "We can nest categories upto 4 levels"
    },
    {
      img: "details/purple/megamenu.svg ",
      icon: "poll-h text-purple-600",
      key: "Megamenu",
      val: "Megamenu can be enalbed for a store with multi level category"
    },
    {
      img: "details/pink/cms-page.svg",
      icon: "money-bill-wave text-pink-600",
      key: "CMS Pages",
      val:
        "You can create unlimited number of static pages for the eCommerce store"
    },
    {
      img: "details/purple/banners.svg",
      icon: "money-bill-wave text-purple-600",
      key: "Banners",
      val:
        "Store banners can be uploaded directly from admin panel. There are 5 types of banners available for store front"
    },
    {
      img: "details/pink/size-chart.svg",
      icon: "money-bill-wave text-pink-600",
      key: "Sizechart",
      val:
        "Sizechart can be uploaded against a particular product or category or brand"
    },
    {
      img: "details/purple/brand-managment.svg",
      icon: "briefcase text-purple-600",
      key: "Brand Management",
      val:
        "There is a master repository for brands. Store manager has option to attach brand to a product"
    },
    {
      img: "details/pink/email-tamplets.svg",
      icon: "mail-bulk text-pink-600",
      key: "Email Templates",
      val: "Email Templates are completely customizable from store admin panel"
    },
    {
      img: "details/purple/Auto send invoice through emails.svg",
      icon: "envelope-open-text text-purple-600",
      key: "Auto send invoice through emails",
      val:
        "There is an option to automatically email invoice whenever an order is placed, or invoice is requested by user"
    },
    {
      img: "details/pink/ratings-review.svg",
      icon: "star-half-alt text-pink-600 ",
      key: "Ratings & Reviews",
      val: "Rating and Reviews have moderation option too"
    },
    {
      img: "details/purple/Promotions (Cart & Product).svg",
      icon: "cart-plus text-purple-600",
      key: "Promotions (Cart & Product)",
      val: "There are both Cart and Product promotions options"
    },
    {
      img: "details/pink/wishlist.svg",
      icon: "luggage-cart text-pink-600",
      key: "Wishlist",
      val: "Wishlist can be enalbed if a store admin wish so"
    },
    {
      img: "details/purple/Product Option Based Price.svg",
      icon: "tags text-purple-600 ",
      key: "Product Option Based Price",
      val:
        "In certain cases product price varies based on size, hence this requirement is already taken care of"
    },
    {
      img: "details/pink/multiple-delivery-address.svg",
      icon: "address-card text-pink-600",
      key: "Multiple Delivery Address",
      val:
        "All users address are stored and during checkout it is presented for selection"
    },
    {
      img: "details/purple/social login.svg ",
      icon: "sign-in-alt text-purple-600",
      key: "Social login",
      val:
        "Litekart has an option of Social login using Google, Facebook, Twitter, Github"
    },
    {
      img: "details/pink/server-rendered.svg",
      icon: "server text-pink-600",
      key: "Server rendered (Univarsal)",
      val:
        "The complete website is server rendered. Hence we get great speed, low memory requirement, high SEO score"
    },
    {
      img: "details/purple/report &analytics.svg",
      icon: "folder-minus text-purple-600",
      key: "Reports & Analytics",
      val:
        "Sales Report, Abandoned Cart, Best Purchased Products, Product Reviews"
    },
    {
      img: "details/pink/abadonned-carts.svg",
      icon: "dolly-flatbed text-pink-600",
      key: "Abandonned Carts",
      val:
        "We keep all cart activity in a database, may that be not loggedin users, later we can send promotional emails using this data"
    },
    {
      img: "details/purple/sort-alpha-up-alt-solid.svg",
      icon: "sort-alpha-up text-purple-600",
      key: "Featured Products",
      val:
        "Store manager has an option to feature a product at home page to push sell"
    },
    {
      img: "details/pink/recently-viewed.svg",
      icon: "eye text-pink-600",
      key: "Recently Viewed Products",
      val: "This sections displays the product browsing history of a customer"
    },
    {
      img: "details/purple/related products (2).svg",
      icon: "box text-purple-600",
      key: "Related Products",
      val:
        "When an customer browse a product, the system selects similar product and displays it bellow that products details"
    },
    {
      img: "details/pink/best-viewed-products.svg",
      icon: "users text-pink-600",
      key: "Best Viewed Products Report",
      val:
        "We keep track of each product views. This report selects products for which customers shown interest the most"
    },
    {
      img: "details/purple/ssl.svg",
      icon: "key text-purple-600",
      key: "SSL",
      val:
        "Easily deploy SSL certificates for your store adding more security and customer confidence"
    },
    {
      img: "details/pink/sms-mails.svg",
      icon: "sms text-pink-600",
      key: "SMS & Email Notifications for orders",
      val:
        "Both SMS and Email options are fully configurable, you can create your own SMS and Email templates"
    },
    {
      img: "details/purple/contact us from.svg",
      icon: "phone-square text-purple-600",
      key: "Contact Us form",
      val:
        "The Litekart has inbuild contact us form which collects user queries into system for later review"
    },
    {
      img: "details/pink/import-export.svg",
      icon: "file-upload text-pink-600",
      key: "Import and Export of catalog",
      val:
        "Users, Orders, Catalog can be imported into the database and the export option helps to easily take out and study the performance of a group of products"
    },
    {
      img: "details/purple/simple-configurable.svg",
      icon: "fill-drip text-purple-600",
      key: "Simple, Configurable (e.g. size, color, etc.) and Grouped Products",
      val:
        "A product can be Simple product, without variations or with combinations like different sizes. There is also an option to group products based on color"
    },
    {
      img: "details/pink/reviews-moderation.svg ",
      icon: "file-invoice text-pink-600",
      key: "Reviews Moderation",
      val:
        "Reviews and Ratings has option for direct publish or publish after moderation"
    },
    {
      img: "details/purple/multiple-images.svg",
      icon: "edit text-purple-600",
      key: "Multiple Images Per Product",
      val:
        "You can upload multiple image against a single product + Option to upload different image for each variant/option"
    },
    {
      img: "details/pink/inventory-managment.svg ",
      icon: "pencil-ruler text-pink-600",
      key: "Inventory Management",
      val:
        "Stock is automatically updated on item receipt and when order is placed"
    },
    {
      img: "details/purple/product-sharing.svg",
      icon: "people-carry text-purple-600",
      key: "Product sharing option",
      val:
        "From product details page, it can be directly shared through social websites"
    },
    {
      img: "details/pink/socila-media.svg",
      icon: "share-alt-square text-pink-600",
      key: "Social media optimized",
      val: ""
    },
    {
      img: "details/purple/layer-fatched.svg",
      icon: "layer-group text-purple-600",
      key:
        "Layered / Faceted Navigation for filtering of products in categories",
      val:
        "Along with powerful seach option, the search results can be further narrowed down using facets"
    },
    {
      img: "details/pink/Breadcrumbs.svg",
      icon: "bread-slice text-pink-600",
      key: "Breadcrumbs",
      val: "Automated breadcrumbs for all pages"
    },
    {
      img: "details/purple/product-moderation.svg",
      icon: "dice-d6 text-purple-600",
      key: "Product moderation",
      val: "Option to publish products after moderation by Store Manager"
    },
    {
      img: "details/pink/infinite-scroll.svg",
      icon: "scroll text-pink-600",
      key: "Infinite scroll",
      val:
        "For home page and product listing page there is option to enable infinite scrolling"
    },
    {
      img: "details/purple/cart-sync.svg ",
      icon: "laptop text-purple-600",
      key: "Cart sync across devices",
      val:
        "The items added into cart are automatically synced acroll all logged in devices of the user"
    },
    {
      img: "details/pink/instant-search.svg",
      icon: "search text-pink-600",
      key: "Instant search",
      val: "Search suggestions / instant search Using power of elastic search"
    },
    {
      img: "details/purple/morden-js.svg",
      icon: "stackpath text-purple-600",
      key: "Modern JS Stack",
      val:
        "Using VueJS, Nuxt, Svelte, Sapper, NodeJS, MongoDB, Webpack, Express"
    },
    {
      img: "details/pink/replace-your.svg",
      icon: "tv text-pink-600",
      key: "Replace your frontend without backend changes",
      val: "Attach any store front without changing the server architecture"
    },
    {
      img: "details/purple/bulletproof.svg",
      icon: "shield-alt text-purple-600",
      key:
        "Bulletproof infrastructure for seasonal traffic peaks like Black Friday",
      val:
        "With Horizontal scaling capability handle any traffic surge. The architecture will take care of it gracefully"
    },
    {
      img: "details/pink/cloud-hosting.svg",
      icon: "cloud-upload-alt text-pink-600",
      key: "Cloud hosting",
      val: "Leverage the power of speed, scalability and availability"
    },
    {
      img: "details/purple/automated-backups.svg",
      icon: "trash-restore text-purple-600",
      key: "Automated backups",
      val:
        "Backups are automatically generated everyday giving you peace of mind"
    },
    {
      img: "details/pink/cdn.svg",
      icon: "server text-pink-600",
      key: "static assets served from CDN",
      val:
        "Using CDN through out the world static assets are served with a greater speed"
    },
    {
      img: "details/purple/unlimited-products.svg",
      icon: "industry text-purple-600",
      key: "Unlimited product variants (color, size etc)",
      val:
        "You can attach unlimited number of products, product variants, product features"
    },
    {
      img: "details/pink/unlimited-products.svg  ",
      icon: "filter text-pink-600",
      key: "Unlimited product search filters",
      val:
        "Product search results can be narrowed down further using any number of filters"
    },
    {
      img: "details/purple/search-terms.svg ",
      icon: "filter text-purple-600",
      key: "Search terms report",
      val: "We keep track of all search terms of user for analytics purpose"
    },
    {
      img: "details/pink/retail-and-selling.svg ",
      icon: "dollar-sign text-pink-600",
      key: "Retail and Selling price",
      val: "There is 3 pricing options - Maximum Retail Price, Selling Price"
    },
    {
      img: "details/purple/customer-order-id.svg",
      icon: "id-card-alt text-purple-600",
      key: "Custom OrderID",
      val: "Order ID prefix can be choosen from API settings"
    },
    {
      img: "details/pink/inbuilt-editable.svg",
      icon: "keyboard text-pink-600",
      key: "Inbuilt editable fields for keywords, meta title and description",
      val:
        "Each page, product, category, brand has editable keywords, meta title and description fields"
    },
    {
      img: "details/purple/seo-optimized.svg ",
      icon: "globe text-purple-600",
      key: "SEO optimized themes for better brand presence",
      val: "Store front has been specially crafted with SEO in mind"
    },
    {
      img: "details/pink/most-advanceed.svg ",
      icon: "servicestack text-pink-600",
      key: "Most advanced technology stack",
      val:
        "With continuous software update we keep Litekart as par with latest technology enhancement and is free for lifetime"
    },
    {
      img: "details/purple/low-stock.svg",
      icon: "smile-beam text-purple-600",
      key: "Low Stock Report",
      val: "Store Manager will get notification of safety stock level"
    },
    {
      img: "details/pink/view-edit-create.svg",
      icon: "glasses text-pink-600 ",
      key: "View, edit, create and fulfill orders from admin panel",
      val: "Order can be created and fulfilled from admin panel"
    },
    {
      img: "details/purple/call-center.svg",
      icon: "headset text-purple-600",
      key: "Call Center (phone) order creation",
      val: ""
    },
    {
      img: "details/pink/user-roles.svg",
      icon: "users-cog text-pink-600",
      key: "User roles for better store administration",
      val: "Hierarchy based user roles keeps the abstraction level"
    },
    {
      img: "details/purple/web-service.svg",
      icon: "internet-explorer text-purple-600",
      key:
        "Web Services API for easy integration with any third-party application",
      val:
        "ReST architecture of litekart integrates easily with third-party plugins"
    },
    {
      img: "details/pink/fully-customizable.svg",
      icon: "marker text-pink-600",
      key: "Fully customizable design using templates",
      val: ""
    },
    {
      img: "details/purple/content-managment.svg",
      icon: "edit text-purple-600",
      key: "Content Management System for Informational Pages",
      val:
        "HTML/CSS based static pages can be created from Admin Panel by Store Manager"
    },
    {
      img: "details/pink/google.svg",
      icon: "google-plus text-pink-600",
      key: "Google and Fb analytics and pixel integration",
      val:
        "Google analytics, facebook pixel can be integrated with just proving the ID"
    },

    {
      img: "details/purple/auto-generated.svg",
      icon: "map-marked-alt text-purple-600",
      key: "Auto Generate Google Site Map",
      val:
        "Google sitemap is automatically generated everyday midnight through a cron job at server"
    },
    {
      img: "details/pink/meta-info.svg",
      icon: "info text-pink-600",
      key: "Meta-information for products and categories",
      val:
        "As a basic SEO requirement meta product and category information is enabled as per latest SEO standard which can be directly controlled from admin panel"
    },
    {
      img: "details/purple/integrated.svg",
      icon: "google-plus-g text-purple-600",
      key: "Integrated with Google Analytics",
      val: "Google Analytics can be configured from Admin panel"
    }
  ];
</script>

<style>
  /* .watch {
    color: #ff7426;
  } */
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
          <img src={f.img} class="text-6xl h-12 w-12 md:mr-8" alt="" />
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
