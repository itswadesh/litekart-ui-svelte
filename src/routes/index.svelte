<script>
  // import Header from "./../components/Header.svelte";
  // import Hero from "./../components/Hero.svelte";
  // import Banners from "./../components/Banners.svelte";
  // import Deals from "./../components/Deals.svelte";
  // import ProductSkeleton from "./../components/ProductSkeleton.svelte";
 
</script>
  <style>
    .seperater {
      border-right: 1px solid #e0e0e0;
      padding: 22px;
      font-family: Gotham SSm, Helvetica, Arial, sans-serif;
      font-size: 13px;
      line-height: 1.42857;
    }
    .shadow {
      box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
    }
    .touch {
      background-color: #37a000;
    }
    .capital {
      color: #6fda44;
    }
  </style>
    <!-- header -->
    <div
      class="shadow flex bg-gray-300 justify-around items-center px-16 py-6  bg-white text-gray-200"
    >
      <div>
        <img src="img/logo.svg" alt="" class="h-12 w-32" />
      </div>
      <div class="text-gray-700 items-center">
        Best Quality & All Verity
      </div>
      <div class="  flex  text-gray-700 ">
        <button class="p-2">solutions</button>
        <button class="p-2">log in</button>
        <button class="p-2">sign up</button>
        <button class="  p-2 mx-auto bg-green-400">post a job</button>
      </div>
    </div>
    <!-- headerend -->
    <div class="flex   justify-center  bg-teal-800  ">
      <div>
        <div class="text-6xl   m-10 text-gray-200 ">
          In-demand talent on
          <div>demand.</div>
          <div class="capital   ">
            Upwork is how.
          </div>
          <div class=" text-2xl">
            Upwork expertly connects professionals and agencies to businesses
          </div>
          <div class="  text-2xl">seeking specialized talent.</div>
          <div class="   flex justify-left  m-0 p-2 text-lg my-6 ">
            <button
              class="touch text-sm justify-left text-white py-3 px-6 bg-green-300 mx-0"
            >
              Get started
            </button>
            <button
              class=" get demo text-sm text-green-400 py-3 px-6 bg-white mx-8"
            >
              Get a demo
            </button>
          </div>
        </div>
      </div>
      <div class="flex  item justify-end ">
        <img src="img/b img 2.svg" alt="" hight="860" width="660" />
      </div>
    </div>
    <div class="  bg-gray-200 flex justify-center  shadow ">
      <div class=" flex justify-around  bg-gray-200">
        <div class="seperater flex flex-col items-center">
          <img src="img/8.svg" alt="" class="m-5 h-6 w-12" /> Web Dev
        </div>
        <div class="seperater  flex flex-col items-center">
          <img src="img/mob.svg" alt="" class="m-5 h-6 w-12" /> mobile
        </div>
        <div class="seperater flex flex-col items-center">
          <img src="img/10.svg" alt="" class="m-5 h-6 w-12" /> Design
        </div>
        <div class="seperater  flex flex-col items-center">
          <img src="img/11.svg" alt="" class="m-5 h-6 w-12" /> Writing
        </div>
        <div class="seperater  flex flex-col items-center">
          <img src="img/12.svg" alt="" class="m-5 h-6 w-12" /> Marketing
        </div>
        <div class="seperater  flex flex-col items-center">
          <img src="img/acc.svg" alt="" class="m-5 h-6 w-12" /> Accounting
        </div>
        <a
          href="/"
          class="   flex flex-col justify-center text-sm p-5 text-red-700 underline "
        >
          see all 80+<br />
          categories
        </a>
      </div>
    </div>
    <!-- 3 columns section -->
    <div class="flex justify-center p-5">
      <div class=" flex justify-around ">
        <div class="flex flex-col item-center text-center items-center flex-1">
          <img src="img/img1.png" alt="" class="h-24 w-24 m-8" />
          <div class="text-2xl font-bold">Proven talent</div>
          Access the world’s largest talent network with visibility into every
          review.
        </div>
        <div
          class=" flex flex-col justify-center text-center items-center  flex-1"
        >
          <img src="img/b img 2.svg" alt="" class="h-24 w-24 m-8" />
          <div class="text-2xl font-bold">Flexible scope</div>
          short-term, longer-term, and complex jobs.
        </div>
        <div
          class=" flex flex-col justify-center  text-center items-center flex-1"
        >
          <img src="img/b-img-3.svg" alt="" class="h-24 w-24 m-8" />
          <div class="text-2xl font-bold">Enterprise-ready</div>
          Safeguard with comprehensive compliance services and results risk
          limitation.
        </div>
      </div>
    </div>

    <div
      class=" flex  text-lg justify-around m-lxg buttom text-center m-55 "
    ></div>
    <div class="flex flex-col text-center justify-center p-5">
      <hr />
      <h4>Trusted by 5M+ businesses</h4>
      <div class="flex mx-auto p-4 justify-between ">
        <img src="img/719fe55.svg" alt="" class="mx-8" />
        <img src="img/2.svg" alt="" class="mx-8" />
        <img src="img/3.svg" alt="" class="mx-8" />
        <img src="img/5.svg" alt="" class="mx-8" />
        <img src="img/6.svg" alt="" class="mx-8" />
        <img src="img/7.svg" alt="" class="mx-8" />
      </div>
      <h4>
        <div class="text-4xl text-gray-800">
          <b>Talent solutions for every business need </b>
        </div>
      </h4>
    </div>
    <div class="flex justify-center bg-gray-200   ">
      <div class="bg-teal-900   mx-6 flex-col  text-white px-24 ">
        <h1 class="text-3xl text-center  p-4 mx-5">Services</h1>
        <button class="bg-green-500   p-3 mx-12  my-6 ">
          Get started
        </button>

        <h1 class=" mx-24  py-4 text-2xl"><b>Verified work history</b></h1>
        <div class="mx-24">
          See client reviews and ratings, work history on
          <p>Upwork, portfolios, and more.</p>
        </div>
        <h2 class=" mx-24 py-4 text-2xl">
          <b> Powerful matching technology </b>
        </h2>
        <div class="mx-24">
          <p>Get a shortlist of proven talent in minutes with our AI-</p>
          <p>powered matching, leveraging the world’s largest pool of</p>
          <p>talent.</p>
        </div>

        <h3 class=" mx-24 py-4 text-2xl">
          <b> Convenient payment services</b>
        </h3>
        <div class=" mx-24">
          <p>Make safe, easy payments—hourly or fixed-price via</p>
          <p>escrow—only for work you authorize.</p>
        </div>
        <h4 class=" mx-24 py-4 text-2xl">
          <b>World-class customer support </b>
        </h4>
      </div>
      <div>
        <div
          class=" bg-teal-900 flex flex-col mx-6 justify-center text-white px-12 py-6 "
        >
          <h1 class="text-3xl text-center  p-4 mx-5 ">
            Enterprise
          </h1>
          <button class="bg-green-500   p-3 mx-12  my-6">
            Get a demo
          </button>
        </div>
        <div class="bg-white shadow mx-6">
          <h1 class="mx-24  py-4 text-2xl"><b>Custom engagements</b></h1>
          <div class="mx-24">
            Configure custom contracting and onboarding
            <p>programs, including compliance services.</p>
          </div>
          <h2 class="mx-24  py-4 text-2xl"><b>Custom settings </b></h2>
          <div class="mx-24">
            Create custom settings and controls, such as net
            <p>30 terms, purchase order requirements, and more.</p>
          </div>
          <h3 class="mx-24  py-4 text-2xl">
            <b> Flexible engagement options</b>
          </h3>
          <div class="mx-24 ">
            Engage with professionals on Upwork on a 1099
            <p>basis, W-2 (through Upwork Payroll), SOW, or</p>
            managed solution.
          </div>
          <h4 class="mx-24  py-4 text-2xl"><b>Professional services</b></h4>
          <div class="mx-24">
            Get white-glove support from our team to assist
            <p>
              with your job postings, shortlisting, onboarding,
            </p>
            <p>and driving company adoption. Plus, we design a</p>
            solution that aligns with your needs and existing
            <p>contingent worker policies.</p>
          </div>
        </div>
      </div>
    </div>