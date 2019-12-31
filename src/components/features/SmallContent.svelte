<script>
  let features = [
    {
      key: "Powerfull search",
      val:
        "Leveraging the power of elastic search technology, we achieve the exact match of the searched product, giving user the ease to use and enlightment."
    },
    {
      key: "Facets",
      val:
        "Facets helps to filter the search results further in the product listing/search/category page to narrow down the results. Facets can be based upon price range, brand, size, category, colors, key features."
    },
    {
      key: "Product details",
      val:
        "The Customers can click on a particular product and navigate to the product page to view complete display of the product, along with descriptions, offers and discounts that are applied to that product, and so on."
    },
    {
      key: "Wishlist",
      val:
        "Customers have option to add a product to Wishlist for later purchase"
    },
    { key: "SEO", val: "100% Search Engine Friendly, Google SiteMap support." },
    {
      key: "Marketing & Promotions",
      val: "Coupons, discounts and different promotion options."
    },
    {
      key: "Catalogue Browsing",
      val:
        "Multiple images for products, options for extensive reviews, wishlists and much more."
    },
    {
      key: "Catalog Management",
      val:
        "Inventory management, batch import and export of products, additional product attributes."
    },
    {
      key: "Customer Accounts",
      val: "Order status and history, e-mail for products in the wishlist."
    },
    {
      key: "Analytics & Reporting",
      val:
        "The script is integrated with Google Analytics and offers many different reports."
    },
    {
      key: "Customer Service",
      val:
        "Enhanced features for customers' accounts, Contact Us form, comprehensive order tracking and history, customizable order e-mails."
    },
    {
      key: "Order Management",
      val:
        "Create orders through admin area, create multiple invoices shipments and credit memos, call center order creation option."
    }
  ];
</script>

<style>
  /* .c1 {
    height: 200px;
    width: 400px;
  } */
</style>

<div>
  <h1 class="text-center text-3xl mt-12 mb-2">
    <b>WHAT’S INCLUDED</b>
  </h1>
  <h2 class="text-center text-xl text-gray-900 mb-8">
    Get 100+ features out of the box with Next Cart's integrated per-transaction
    pricing
  </h2>
  <div class="flex justify-between flex-wrap">
    {#each features as f}
      <div class="w-1/2 lg:w-1/4 p-2">
        <div
          class="flex flex-col md:flex-row border rounded-lg px-6 py-8
          shadow-2xl text-center md:text-left">
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
