<script>
  let features = [
    {
      icon: "",
      key: "Powerfull search",
      val:
        "Leveraging the power of elastic search technology, we achieve the exact match of the searched product, giving user the ease to use and enlightment."
    },
    {
      icon: "",
      key: "Facets",
      val:
        "Facets helps to filter the search results further in the product listing/search/category page to narrow down the results. Facets can be based upon price range, brand, size, category, colors, key features."
    },
    {
      icon: "",
      key: "Product details",
      val:
        "The Customers can click on a particular product and navigate to the product page to view complete display of the product, along with descriptions, offers and discounts that are applied to that product, and so on."
    },
    {
      icon: "",
      key: "Wishlist",
      val:
        "Customers have option to add a product to Wishlist for later purchase"
    },
    {
      icon: "",
      key: "SEO",
      val: "100% Search Engine Friendly, Google SiteMap support."
    },
    {
      icon: "",
      key: "Marketing & Promotions",
      val: "Coupons, discounts and different promotion options."
    },
    {
      icon: "",
      key: "Catalogue Browsing",
      val:
        "Multiple images for products, options for extensive reviews, wishlists and much more."
    },
    {
      icon: "",
      key: "Catalog Management",
      val:
        "Inventory management, batch import and export of products, additional product attributes."
    },
    {
      icon: "",
      key: "Customer Accounts",
      val: "Order status and history, e-mail for products in the wishlist."
    },
    {
      icon: "",
      key: "Analytics & Reporting",
      val:
        "The script is integrated with Google Analytics and offers many different reports."
    },
    {
      icon: "",
      key: "Customer Service",
      val:
        "Enhanced features for customers' accounts, Contact Us form, comprehensive order tracking and history, customizable order e-mails."
    },
    {
      icon: "",
      key: "Order Management",
      val:
        "Create orders through admin area, create multiple invoices shipments and credit memos, call center order creation option."
    },
    {
      icon: "",
      key: "PWA for eCommerce",
      val: ""
    },
    {
      icon: "",
      key: "Platform agnostic",
      val: ""
    },
    {
      icon: "",
      key: "Banners",
      val: ""
    },
    {
      icon: "",
      key: "Product Search",
      val: ""
    },
    {
      icon: "",
      key: "Category Listing",
      val: ""
    },
    {
      icon: "",
      key: "Product Detail Page",
      val: ""
    },
    {
      icon: "",
      key: "Cart & Checkout",
      val: ""
    },
    {
      icon: "",
      key: "Payment Gateways",
      val: ""
    },
    {
      icon: "",
      key: "Single Page Checkout",
      val: ""
    },
    {
      icon: "",
      key: "Guest Checkout",
      val: ""
    },
    {
      icon: "",
      key: "Authentication & Authorization",
      val: ""
    },
    {
      icon: "",
      key: "Manage Products",
      val: ""
    },
    {
      icon: "",
      key: "Manage Orders",
      val: ""
    },
    {
      icon: "",
      key: "Email Notifications",
      val: ""
    },
    {
      icon: "",
      key: "Settings",
      val: ""
    },
    {
      icon: "",
      key: "Printable Invoice",
      val: ""
    },
    {
      icon: "",
      key: "Related Products",
      val: ""
    },
    {
      icon: "",
      key: "Dashboards & Analytics",
      val: ""
    },
    {
      icon: "",
      key: "Sales Management",
      val: ""
    },
    {
      icon: "",
      key: "Customers Management",
      val: ""
    },
    {
      icon: "",
      key: "Image Optimizations",
      val: ""
    },
    {
      icon: "",
      key: "Lazy Loading",
      val: ""
    },
    {
      icon: "",
      key: "Page Preloading",
      val: ""
    },
    {
      icon: "",
      key: "Animations",
      val: ""
    },
    {
      icon: "",
      key: "Multi Level Categories",
      val: ""
    },
    {
      icon: "",
      key: "Megamenu",
      val: ""
    },
    {
      icon: "",
      key: "CMS (Banners, Pages)",
      val: ""
    },
    {
      icon: "",
      key: "Brand Management",
      val: ""
    },
    {
      icon: "",
      key: "Email Templates",
      val: ""
    },
    {
      icon: "",
      key: "Auto send invoice through emails",
      val: ""
    },
    {
      icon: "",
      key: "Ratings and Reviews",
      val: ""
    },
    {
      icon: "",
      key: "Promotions (Cart & Product)",
      val: ""
    },
    {
      icon: "",
      key: "Wishlist",
      val: ""
    },
    {
      icon: "",
      key: "Product Option Based Price",
      val: ""
    },
    {
      icon: "",
      key: "Multiple Delivery Address",
      val: ""
    },
    {
      icon: "",
      key: "Featured Products",
      val: ""
    },
    {
      icon: "",
      key: "Social login",
      val: ""
    },
    {
      icon: "",
      key: "Server rendered (Univarsal)",
      val: ""
    },
    {
      icon: "",
      key: "Reports & Analytics",
      val: ""
    },
    {
      icon: "",
      key: "Abandonned Carts",
      val: ""
    },
    {
      icon: "",
      key: "Recently Viewed Products",
      val: ""
    },
    {
      icon: "",
      key: "Related Products",
      val: ""
    },
    {
      icon: "",
      key: "Best Viewed Products Report",
      val: ""
    },
    {
      icon: "",
      key: "SSL",
      val: ""
    },
    {
      icon: "",
      key: "SMS & Email Notifications for orders",
      val: ""
    },
    {
      icon: "",
      key: "Contact Us form",
      val: ""
    },
    {
      icon: "",
      key: "Import and Export of catalog",
      val: ""
    },
    {
      icon: "",
      key: "Simple, Configurable (e.g. size, color, etc.) and Grouped Products",
      val: ""
    },
    {
      icon: "",
      key: "Reviews Moderation",
      val: ""
    },
    {
      icon: "",
      key: "Multiple Images Per Product",
      val: ""
    },
    {
      icon: "",
      key: "Inventory Management(Optional)",
      val: ""
    },
    {
      icon: "",
      key: "Product sharing option",
      val: ""
    },
    {
      icon: "",
      key: "Social media optimized",
      val: ""
    },
    {
      icon: "",
      key:
        "Layered / Faceted Navigation for filtering of products in categories",
      val: ""
    },
    {
      icon: "",
      key: "Breadcrumbs",
      val: ""
    },
    {
      icon: "",
      key: "Product moderation",
      val: ""
    },
    {
      icon: "",
      key: "Infinite scroll",
      val: ""
    },
    {
      icon: "",
      key: "Cart sync across devices",
      val: ""
    },
    {
      icon: "",
      key: "Instant search",
      val: ""
    },
    {
      icon: "",
      key: "Modern JS Stack",
      val: ""
    },
    {
      icon: "",
      key: "Replace your frontend without backend changes",
      val: ""
    },
    {
      icon: "",
      key:
        "Bulletproof infrastructure for seasonal traffic peaks like Black Friday",
      val: ""
    },
    {
      icon: "",
      key: "Cloud hosting",
      val: ""
    },
    {
      icon: "",
      key: "Automated backups",
      val: ""
    },
    {
      icon: "",
      key: "static assets served from CDN",
      val: ""
    },
    {
      icon: "",
      key: "Unlimited product variants (color, size etc)",
      val: ""
    },
    {
      icon: "",
      key: "Unlimited product search filters",
      val: ""
    },
    {
      icon: "",
      key: "Retail and Selling price",
      val: ""
    },
    {
      icon: "",
      key: "Custom OrderID",
      val: ""
    },
    {
      icon: "",
      key: "Inbuilt editable fields for keywords, meta title and description",
      val: ""
    },
    {
      icon: "",
      key: "SEO optimized themes for better brand presence",
      val: ""
    },
    {
      icon: "",
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
  /* .c1 {
    height: 200px;
    width: 400px;
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
      <div class="w-1/2 lg:w-1/4 p-2">
        <div
          class="flex flex-col md:flex-row rounded-lg px-6 py-8 shadow-2xl
          text-center md:text-left">
          <i class="fa fa-clock text-indigo-500 text-6xl md:mr-8" />
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
