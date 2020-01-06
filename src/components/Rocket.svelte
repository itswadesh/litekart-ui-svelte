<script>
  let features = [
    {
      h: "Customized Design",
      img: "rocket-img-1.png",
      data: [
        "Bring your brand to life with carefully developed strategies based on        your customer profile. We help you develop a website that connects with        your audience at every step of your brand cycle! The cutting edge design        and UX practices will help you meet your business objectives by        fulfilling your customers’ expectations."
      ]
    },
    //   2nd
    {
      h: " Sales Channel Integration",
      img: "rocket-img-2.png",
      data: [
        "Managing multiple e-commerce channels and websites? Boost your efficiency      by giving the best-in-class architecture to your e-commerce and order      management process. Partner with us to experience uninterrupted      integration with all 3rd party platforms."
      ]
    },
    // 3rd
    {
      h: " Payment Gateway",
      img: "rocket-img-3.png",
      data: [
        "  Offer a secure payment gateway to your buyers. We have integrations with      over 15 gateways including EBS, CC Avenue, Citrus Pay, PayU, DirectPay      PayPal, 2Checkout, PayZippy, Mobikwik, Paytm, AtomPay, HDFC, Instamojo      Razorpay, Billdesk, and more. You can easily accept payments via credit      card, debit card, online wallets, and net banking."
      ]
    },
    // 4th
    {
      h: "  Shipping & Logistics",
      img: "rocket-img-4.png",
      data: [
        "Grow your business by shipping your orders with our automated, affordable and uncomplicated shipping solution – Shiprocket. This simple and fully       integrated logistics service will help you ship products using the best      courier companies of India like FedEx, Aramex, Delhivery, GoJavas FirstFlight, Ecom Express, etc."
      ]
    },
    // 4th
    {
      h: "Hosting",
      img: "rocket-img-4.png",
      data: [
        "We use AWS with SLAs as high as 99.99% to host our entire architecture to      mitigate any architecture-related issues. Everything is hosted inside a      VPC which helps us nullify security issues and optimize network      performance. Our EC2 backed application server nodes enable our      architecture to maintain a healthy balance of performance and costs. All      your data is stored in Amazon RDS, which mitigate the chances of a noisy      neighbor. With this, we have Akamai implemented over our architecture to      reduce network latencies and render device-optimized content delivery as a      feature of our platform."
      ]
    },
    // 4th
    {
      h: "Marketing",
      img: "rocket-img-4.png",
      data: [
        "Reach your buyers with automated marketing & engagement tools. Grow your      sales via advertisements, custom discount coupons, SEO tools, etc. Choose      one of our marketing partners to drive traffic to your website and      eventually grow your sales."
      ]
    }
  ];
</script>

<style>
  h1 {
    font-weight: bold;
  }
  img {
    filter: drop-shadow(-10px 0px 11px #eee);
  }
</style>

<!-- https://360.shiprocket.in/ecommerce-website-building/ -->
<div class="flex flex-col my-6 justify-center ">
  <!-- 1st section -->
  <!-- <div class="flex justify-center mb-10 px-8 ">
    <div class="flex flex-col lg:w-1/2 ">
      <h1 class="text-gray-700 text-4xl font-semibold mb-3 ">
        Customized Design
      </h1>
      <h2 class="text-ms font-semibold mb-1 leading-loose">Website:</h2>
      <p>
        Bring your brand to life with carefully developed strategies based on
        your customer profile. We help you develop a website that connects with
        your audience at every step of your brand cycle! The cutting edge design
        and UX practices will help you meet your business objectives by
        fulfilling your customers’ expectations.
      </p>
      <br />
      <h3 class="text-ms font-semibold mb-1">Mobile App:</h3>
      <p>
        Optimize your e-commerce operations with a mobile app. Sync the app with
        your website to give your customers ‘ONE’ experience at each point of
        their shopping behavior.
      </p>
    </div>
    <img src="img/rocket-img-1.png" class=" img mx-8 mb-3 p-6" alt="" />
  </div> -->
  <!-- 1st section -->

  {#each features as f, ix}
    <!-- Left -->
    {#if ix % 2 == 0}
      <div class="flex flex-wrap px-2 lg:px-64 lg:mb-12">
        <div
          class="order-last lg:order-first w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
          <h1 id={'h1-' + ix} class="text-4xl mb-2">{f.h}</h1>
          <div class="flex leading-loose">{f.data}</div>
        </div>
        <div class="lg:order-last order-first w-full lg:w-1/2">
          <img src={`/img/${f.img}`} class="img m-auto" alt="" />
        </div>
      </div>
    {/if}
    <!-- Right -->
    {#if ix % 2 == 1}
      <div class="flex flex-wrap px-2 lg:px-64 lg:mb-12">
        <div class=" w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
          <img src={`/img/${f.img}`} class="img m-auto" alt="" />
        </div>
        <div class=" w-full lg:w-1/2">
          <h1 id={'h1-' + ix} class="text-4xl mb-2">{f.h}</h1>
          <div class="flex leading-loose">{f.data}</div>
        </div>
      </div>
    {/if}
  {/each}
</div>
