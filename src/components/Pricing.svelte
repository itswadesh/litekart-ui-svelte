<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<style>
  .button {
    transition: all 0.5s;
  }
  .button span {
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  .button span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
  .button:hover span {
    padding-right: 25px;
  }
  .button:hover span:after {
    opacity: 1;
    right: 0;
  }
</style>

<div class="flex flex-col p-2 bg-gray-200 shadow lg:p-12">
  <h2 class="mb-12 text-2xl text-center">
    We take the hassles of technology so you can focus on what you do best —
    selling
  </h2>

  <div class="flex flex-wrap justify-center">
    <!-- first-colom -->
    <div class="flex-1 mb-4 bg-white rounded shadow-lg  lg:mr-4">
      <div class="justify-center bg-gray-500">
        <div
          class="flex flex-col items-center py-8 text-4xl text-center bg-gray-900 shadow-lg">
          <h2 class="text-white">Free</h2>
          <a
            href="https://github.com/itswadesh/sapper-ecommerce"
            class="px-12 py-2 mt-3 text-lg text-white rounded button bg-primary ">
            <span>Download from github</span>
          </a>
        </div>
      </div>
      <div class="px-10 py-6 pr lg:px-20 ">
        <img
          use:lazyload
          src={`${CDN}../../img/hopyshopy-full.png?tr=w-3,h-2`}
          data-src={`${CDN}../../img/hopyshopy-full.png`}
          alt=""
          class="mb-8" />
        <h3 class="my-3 text-xl text-center primary">Open source & free</h3>
        <h2 class="text-2xl font-bold">Customize</h2>
        <div class="mt-2 mb-6">
          Download the project free and customize the way you want.
          <p>
            Sapper Commerce's headless architecture allows us with an option to
            choose from any technology stack
          </p>
        </div>
        <h2 class="text-2xl font-bold">Svelte / Sapper</h2>
        <div class="mt-2 mb-6">
          Store front build over the latest and lightweight javascript approach.
          This framework gained popularity withing few days of its launch.
          Maintained by an active community with over 28k starts on github.
        </div>
        <h2 class="text-2xl font-bold">
          Over 60 stars within 60 day of its launch
        </h2>
        <div class="mt-2 mb-6">
          Loved by people arround the world and growing.
          <p>* 70 github stars | * 17 github forks</p>
        </div>
        <h2 class="text-2xl font-bold">Ecommerce Essentials integrated</h2>
        <div class="mt-2 mb-6">
          Important features like Animations, lazy loading, Carousel are shipped
          out of the box. This adds up towards a great user experience.
        </div>
        <h2 class="text-2xl font-bold">PWA as standard</h2>
        <div class="mt-2 mb-6">
          <img
            use:lazyload
            src={`${CDN}../../img/light-house-search.jpg?tr=w-3,h-2`}
            data-src={`${CDN}../../img/light-house-search.jpg`}
            alt="" />
        </div>
      </div>
    </div>
    <!-- second-colom -->
    <div class="flex-1 lg:ml-4">
      <div class="mb-4 bg-white rounded shadow-lg">
        <div class="justify-center bg-gray-500">
          <div
            class="flex flex-col items-center py-8 text-4xl text-center bg-gray-900 shadow-lg">
            <h2 class="text-white">Free</h2>
            <a
              href="https://github.com/itswadesh/foodfire"
              class="px-12 py-2 mt-3 text-lg text-white rounded button bg-primary ">
              <span>Download from github</span>
            </a>
          </div>
        </div>
        <div class="px-10 py-6 pr lg:px-20 ">
          <img
            use:lazyload
            src={`${CDN}../../img/foodfire-full.png?tr=w-3,h-2`}
            data-src={`${CDN}../../img/foodfire-full.png`}
            alt=""
            class="mb-8" />
          <h3 class="my-3 text-xl text-center primary">Open source & free</h3>
          <h2 class="text-2xl font-bold">Standalone Opensource project</h2>
          <div class="mt-2 mb-6">
            This project is complete by itself, no backend requirement.
            Everything included in this food commerce app.
          </div>
          <h2 class="text-2xl font-bold">Firebase at back</h2>
          <div class="mt-2 mb-6">
            This app uses firebase for database and uses google social login for
            authentication need.
          </div>
          <h2 class="text-2xl font-bold">Great UI for mobile</h2>
          <div class="mt-2 mb-6">
            Created with mobile users in mind, this design is optimized for
            mobile devices.
          </div>
          <h2 class="text-2xl font-bold">Simple for developers</h2>
          <div class="mt-2 mb-6">
            Written in pure HTML & CSS + Clean code delights developers while
            working on it.
          </div>
          <h2 class="text-2xl font-bold">
            Progressive ecommerce based on VueJS
          </h2>
          <div class="mt-2 mb-6">
            Based on one of the most loved javascript frontend library (VueJS)
            with over 155k github stars
          </div>
          <!-- <h2 class="text-2xl font-bold">
            Seess developer experience
          </h2> -->
          <div class="mt-2 mb-6">
            <img
              use:lazyload
              src={`${CDN}../../img/foodfire-score.jpg?tr=w-3,h-2`}
              data-src={`${CDN}../../img/foodfire-score.jpg`}
              alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- third-colom -->
    <div class="flex-1 lg:ml-4">
      <div class="mb-4 bg-white rounded shadow-lg">
        <div class="justify-center bg-gray-500">
          <div
            class="flex flex-col items-center py-8 text-4xl text-center bg-gray-900 shadow-lg">
            <h2 class="text-white">Enterprise</h2>
            <a
              href="https://demo.litekart.in"
              rel="noopener"
              class="px-12 py-2 mt-3 text-lg text-white rounded button bg-primary ">
              <span>Demo fashion store</span>
            </a>
          </div>
        </div>
        <div class="px-10 py-6 pr lg:px-20 ">
          <img
            use:lazyload
            src={`${CDN}../../img/litekart-full.png?tr=w-3,h-2`}
            data-src={`${CDN}../../img/litekart-full.png`}
            alt=""
            class="mb-8" />
          <h3 class="my-3 text-xl text-center primary">Free for startups</h3>
          <h2 class="text-2xl font-bold">Headless API based architecture</h2>
          <div class="mt-2 mb-6">
            Store front, Store Administration, API, Images are separated. Hence
            gives us flexibility of choosing and integrating with any other
            service.
          </div>
          <h2 class="text-2xl font-bold">Custom settings</h2>
          <div class="mt-2 mb-6">
            An fully customizable interactive ecommerce dashboard created with
            latest javascript stack which delivers speed and ease of use for
            admin, managers, vendors
          </div>
          <h2 class="text-2xl font-bold">
            Lightweight and modern javascript full stack
          </h2>
          <div class="mt-2 mb-6">
            With NodeJS and MongoDB at back, all operations are just blazing
            fast
          </div>
          <h2 class="text-2xl font-bold">Great Search Experience</h2>
          <div class="mt-2 mb-6">
            With elastic search technology at the edge, it gives the end
            customers immence power of search with facet based filters.
          </div>
          <h2 class="text-2xl font-bold">
            Progressive ecommerce based on VueJS
          </h2>
          <div class="mt-2 mb-6">
            Based on one of the most loved javascript frontend library (VueJS)
            with over 155k github stars
          </div>
          <h2 class="text-2xl font-bold">Seemless developer experience</h2>
          <div class="mt-2 mb-6">
            <img
              use:lazyload
              src={`${CDN}../../img/litekart-banner.png?tr=w-3,h-2`}
              data-src={`${CDN}../../img/litekart-banner.png`}
              alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
