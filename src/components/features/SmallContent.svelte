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
      val: "100% Search Engine Friendly, Google SiteMap support."
    },
    {
      icon: "ad",
      key: "Marketing & Promotions",
      val: "Coupons, discounts and different promotion options."
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
      icon: "tasks",
      key: "Order Management",
      val:
        "Create orders through admin area, create multiple invoices shipments and credit memos, call center order creation option."
    },
    {
      icon: "network-wired",
      key: "PWA for eCommerce",
      val: ""
    },
    {
      icon: "money-check-alt",
      key: "Platform agnostic",
      val: ""
    },
    {
      icon: "money-bill-wave-alt",
      key: "Banners",
      val: ""
    },
    {
      icon: "window-restore",
      key: "Product Search",
      val: ""
    },
    {
      icon: "th-list",
      key: "Category Listing",
      val: ""
    },
    {
      icon: "file-alt",
      key: "Product Detail Page",
      val: ""
    },
    {
      icon: "check-square",
      key: "Cart & Checkout",
      val: ""
    },
    {
      icon: "wallet",
      key: "Payment Gateways",
      val: ""
    },
    {
      icon: "pager",
      key: "Single Page Checkout",
      val: ""
    },
    {
      icon: "file-alt",
      key: "Guest Checkout",
      val: ""
    },
    {
      icon: "user-lock",
      key: "Authentication & Authorization",
      val: ""
    },
    {
      icon: "clipboard",
      key: "Manage Products",
      val: ""
    },
    {
      icon: "clipboard-check",
      key: "Manage Orders",
      val: ""
    },
    {
      icon: "envelope",
      key: "Email Notifications",
      val: ""
    },
    {
      icon: "wrench",
      key: "Settings",
      val: ""
    },
    {
      icon: "receipt",
      key: "Printable Invoice",
      val: ""
    },
    {
      icon: "toolbox",
      key: "Related Products",
      val: ""
    },
    {
      icon: "columns",
      key: "Dashboards & Analytics",
      val: ""
    },
    {
      icon: "chart-line",
      key: "Sales Management",
      val: ""
    },
    {
      icon: "user-circle",
      key: "Customers Management",
      val: ""
    },
    {
      icon: "file-image",
      key: "Image Optimizations",
      val: ""
    },
    {
      icon: "hourglass-half",
      key: "Lazy Loading",
      val: ""
    },
    {
      icon: "buffer",
      key: "Page Preloading",
      val: ""
    },
    {
      icon: "reddit-square",
      key: "Animations",
      val: ""
    },
    {
      icon: "layer-group",
      key: "Multi Level Categories",
      val: ""
    },
    {
      icon: "poll-h",
      key: "Megamenu",
      val: ""
    },
    {
      icon: "scroll",
      key: "CMS (Banners, Pages)",
      val: ""
    },
    {
      icon: "briefcase",
      key: "Brand Management",
      val: ""
    },
    {
      icon: "mail-bulk",
      key: "Email Templates",
      val: ""
    },
    {
      icon: "envelope-open-text",
      key: "Auto send invoice through emails",
      val: ""
    },
    {
      icon: "star-half-alt",
      key: "Ratings and Reviews",
      val: ""
    },
    {
      icon: "cart-plus",
      key: "Promotions (Cart & Product)",
      val: ""
    },
    {
      icon: "luggage-cart",
      key: "Wishlist",
      val: ""
    },
    {
      icon: "tags",
      key: "Product Option Based Price",
      val: ""
    },
    {
      icon: "address-card",
      key: "Multiple Delivery Address",
      val: ""
    },
    {
      icon: "sort-alpha-up",
      key: "Featured Products",
      val: ""
    },
    {
      icon: "sign-in-alt",
      key: "Social login",
      val: ""
    },
    {
      icon: "server",
      key: "Server rendered (Univarsal)",
      val: ""
    },
    {
      icon: "folder-minus",
      key: "Reports & Analytics",
      val: ""
    },
    {
      icon: "dolly-flatbed",
      key: "Abandonned Carts",
      val: ""
    },
    {
      icon: "eye",
      key: "Recently Viewed Products",
      val: ""
    },
    {
      icon: "product-hunt",
      key: "Related Products",
      val: ""
    },
    {
      icon: "users",
      key: "Best Viewed Products Report",
      val: ""
    },
    {
      icon: "expeditedssl",
      key: "SSL",
      val: ""
    },
    {
      icon: "sms",
      key: "SMS & Email Notifications for orders",
      val: ""
    },
    {
      icon: "phone-square",
      key: "Contact Us form",
      val: ""
    },
    {
      icon: "file-upload",
      key: "Import and Export of catalog",
      val: ""
    },
    {
      icon: "fill-drip",
      key: "Simple, Configurable (e.g. size, color, etc.) and Grouped Products",
      val: ""
    },
    {
      icon: "file-invoice",
      key: "Reviews Moderation",
      val: ""
    },
    {
      icon: "edit",
      key: "Multiple Images Per Product",
      val: ""
    },
    {
      icon: "pencil-ruler",
      key: "Inventory Management(Optional)",
      val: ""
    },
    {
      icon: "people-carry",
      key: "Product sharing option",
      val: ""
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
      val: ""
    },
    {
      icon: "bread-slice",
      key: "Breadcrumbs",
      val: ""
    },
    {
      icon: "",
      key: "Product moderation",
      val: ""
    },
    {
      icon: "scroll",
      key: "Infinite scroll",
      val: ""
    },
    {
      icon: "laptop",
      key: "Cart sync across devices",
      val: ""
    },
    {
      icon: "search",
      key: "Instant search",
      val: ""
    },
    {
      icon: "js",
      key: "Modern JS Stack",
      val: ""
    },
    {
      icon: "tv",
      key: "Replace your frontend without backend changes",
      val: ""
    },
    {
      icon: "black-tie",
      key:
        "Bulletproof infrastructure for seasonal traffic peaks like Black Friday",
      val: ""
    },
    {
      icon: "cloud-upload-alt",
      key: "Cloud hosting",
      val: ""
    },
    {
      icon: "trash-restore",
      key: "Automated backups",
      val: ""
    },
    {
      icon: "server",
      key: "static assets served from CDN",
      val: ""
    },
    {
      icon: "industry",
      key: "Unlimited product variants (color, size etc)",
      val: ""
    },
    {
      icon: "filter",
      key: "Unlimited product search filters",
      val: ""
    },
    {
      icon: "dollar-sign",
      key: "Retail and Selling price",
      val: ""
    },
    {
      icon: "id-card-alt",
      key: "Custom OrderID",
      val: ""
    },
    {
      icon: "wpforms",
      key: "Inbuilt editable fields for keywords, meta title and description",
      val: ""
    },
    {
      icon: "globe",
      key: "SEO optimized themes for better brand presence",
      val: ""
    },
    {
      icon: "twitch",
      key: "Most advanced technology stack",
      val: ""
    },
    {
      icon: "",
      key: "Low Stock Report",
      val: ""
    },
    {
      icon: "",
      key: "View, edit, create and fulfill orders from admin panel",
      val: ""
    },
    {
      icon: "",
      key: "Call Center (phone) order creation",
      val: ""
    },
    {
      icon: "",
      key: "User roles for better store administration",
      val: ""
    },
    {
      icon: "",
      key:
        "Web Services API for easy integration with any third-party application",
      val: ""
    },
    {
      icon: "",
      key: "Fully customizable design using templates",
      val: ""
    },
    {
      icon: "",
      key: "Content Management System for Informational Pages",
      val: ""
    },
    {
      icon: "",
      key: "Google and Fb analytics and pixel integration",
      val: ""
    },
    {
      icon: "",
      key: "100% Search Engine Friendly URLs",
      val: ""
    },
    {
      icon: "",
      key: "Auto Generate Google Site Map",
      val: ""
    },
    {
      icon: "",
      key: "Meta-information for products and categories",
      val: ""
    },
    {
      icon: "",
      key: "Integrated with Google Analytics",
      val: ""
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
      <div class="w-1/2 lg:w-1/4 p-2">
        <div
          class="flex flex-col md:flex-row rounded-lg px-6 py-8 shadow-md
          text-center md:text-left">
          <i class={`fa fa-${f.icon} text-6xl md:mr-8`} />
          <!-- <img src="img/rocket.svg" class="flex " alt="" /> -->
          <div class="flex flex-col">
            <h1 class="mb-2 text-xl">{f.key}</h1>
            <div class="text-ms">{f.val}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
