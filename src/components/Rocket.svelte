<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
  let features = [
    {
      h: "Customized Design",
      img: "hero-banner.png",
      data: [
        "Create a unique brand presense with a custom ecommerce store. We help you develop a UI/UX that impacts your customer thought process and connects with your audience. The cutting edge design and UX practices will help you meet your business objectives faster with a fluid & unique customer experience."
      ],
      ul: [
        "A fully custom designed product & listing page",
        "Ability to show product variations and size/color filters",
        "Bulk import/export and categorization",
        "Abandonned cart & Wishlist feature",
        "‘bought together’ & ‘simmilar products’ suggestions",
        "Low inventory alert",
        "Dynamic transactional emails",
        "Advanced single page checkout",
        "Unlimited static pages"
      ]
    },
    // {
    //   h: " Sales Channel Integration",
    //   img: "rocket-img-2.png",
    //   data: [
    //     "Managing multiple e-commerce channels and websites? Boost your efficiency      by giving the best-in-class architecture to your e-commerce and order      management process. Partner with us to experience uninterrupted      integration with all 3rd party platforms."
    //   ]
    // },
    {
      h: " Payment Gateway",
      img: "secure.png",
      data: [
        "Offer a secure payment gateway to your buyers. We have integrations with over 10 gateways including CC Avenue, PayU, PayPal, PayZippy, Mobikwik, Paytm, Instamojo, Razorpay, Cashfree and more. You can easily accept payments via credit card, debit card, online wallets and net banking."
      ]
    },
    // {
    //   h: "  Shipping & Logistics",
    //   img: "rocket-img-4.png",
    //   data: [
    //     "Grow your business by shipping your orders with our automated, affordable and uncomplicated shipping solution – Shiprocket. This simple and fully       integrated logistics service will help you ship products using the best      courier companies of India like FedEx, Aramex, Delhivery, GoJavas FirstFlight, Ecom Express, etc."
    //   ]
    // },
    {
      h: "Hosting",
      img: "amazon-node.png",
      data: [
        "Based on cloud architecture, it gives uptime as high as 99.99%. Everything is hosted inside a personal VPS which helps us nullify security issues and optimize network performance. Further to that we are using Serverless / Microservices / FaaS to separate different modules. It gives highest speed, uptime as well as maintainance free"
      ]
    },
    {
      h: "Marketing",
      img: "prod-detail.png",
      data: [
        "Reach your buyers with automated marketing & engagement tools. Grow your sales via advertisements, custom discount coupons, SEO tools, etc. Choose one of our marketing partners to drive traffic to your website and eventually grow your sales."
      ]
    }
  ];
</script>

<style>
  img {
    filter: drop-shadow(-10px 0px 11px #eee);
  }
  /* .bg {
    background-image: url(/end-banner.png);
    background-repeat: no-repeat;
    background-size: contain;
  } */
  ul {
    margin-left: 20px;
    list-style-type: disc;
  }
</style>

<!-- https://360.shiprocket.in/ecommerce-website-building/ -->
<div class="flex flex-col justify-center my-6">
  <!-- 1st section -->
  <!-- <div class="flex justify-center px-8 mb-10 ">
    <div class="flex flex-col lg:w-1/2 ">
      <h1 class="mb-3 text-4xl font-semibold text-gray-700 ">
        Customized Design
      </h1>
      <h2 class="mb-1 font-semibold leading-loose text-ms">Website:</h2>
      <p>
        Bring your brand to life with carefully developed strategies based on
        your customer profile. We help you develop a website that connects with
        your audience at every step of your brand cycle! The cutting edge design
        and UX practices will help you meet your business objectives by
        fulfilling your customers’ expectations.
      </p>
      <br />
      <h3 class="mb-1 font-semibold text-ms">Mobile App:</h3>
      <p>
        Optimize your e-commerce operations with a mobile app. Sync the app with
        your website to give your customers ‘ONE’ experience at each point of
        their shopping behavior.
      </p>
    </div>
    <img use:lazyload  src="img/rocket-img-1.png" class="p-6 mx-8 mb-3  img" alt="" />
  </div> -->
  <!-- 1st section -->

  {#each features as f, ix}
    <!-- Left -->
    {#if ix % 2 == 0}
      <div class="flex flex-wrap px-2 lg:px-48 lg:mb-12">
        <div
          class="order-last w-full pr-0 mb-8 lg:order-first lg:w-1/2 lg:pr-12">
          <h2 id={'h1-' + ix} class="mb-2 text-4xl font-bold">{f.h}</h2>
          <div class="flex leading-loose tracking-wider">{f.data}</div>
          <br />
          {#if f.ul}
            <ul class="leading-loose tracking-wider ">
              {#each f.ul as li}
                <li>{li}</li>
              {/each}
            </ul>
          {/if}
        </div>
        <div class="order-first w-full lg:order-last lg:w-1/2">
          <img
            use:lazyload
            src={`${CDN}../../img/${f.img}?tr=w-3,h-2`}
            data-src={`${CDN}../../img/${f.img}`}
            class="m-auto mb-2 img"
            alt="" />
        </div>
      </div>
    {/if}
    <!-- Right -->
    {#if ix % 2 == 1}
      <div class="flex flex-wrap px-2 lg:px-48 lg:mb-12">
        <div class="w-full pr-0 mb-8  lg:w-1/2 lg:pr-12">
          <img
            use:lazyload
            src={`${CDN}../../img/${f.img}?tr=w-3,h-2`}
            data-src={`${CDN}../../img/${f.img}`}
            class="m-auto img"
            alt="" />
        </div>
        <div class="w-full  lg:w-1/2">
          <h2 id={'h1-' + ix} class="mb-2 text-4xl font-bold">{f.h}</h2>
          <div class="flex leading-loose tracking-wider">
            {f.data}
          </div>
        </div>
      </div>
    {/if}
  {/each}
</div>
