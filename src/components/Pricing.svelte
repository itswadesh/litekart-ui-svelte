<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<style>
  h1 {
    color: black;
    font-weight: bold;
  }
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

<div class="flex flex-col p-2 lg:p-12 bg-gray-200 shadow">
  <h1 class="text-center text-2xl mb-12">
    We take the hassles of technology so you can focus on what you do best —
    selling
  </h1>

  <div class="flex justify-center flex-wrap">
    <!-- first-colom -->
    <div class=" lg:mr-4 bg-white shadow-lg mb-4 flex-1 rounded">
      <div class="justify-center bg-gray-500">
        <div
          class="bg-yellow-400 flex text-center py-8 text-4xl flex-col
          items-center shadow-lg">
          <h1>Free</h1>
          <a
            href="https://github.com/itswadesh/sapper-ecommerce"
            class="button text-white bg-primary text-lg py-2 px-12 mt-3 rounded ">
            <span>Download from github</span>
          </a>
        </div>
      </div>
      <div class="pr px-10 lg:px-20 py-6 ">
        <img src="../../img/hopyshopy-full.png" alt="" />
        <h3 class="primary text-center text-xl my-3">Open source & free</h3>
        <h1 class="text-white text-2xl">Customize</h1>
        <div class="mb-6 mt-2">
          Download the project free and customize the way you want.
          <p>
            Sapper Commerce's headless architecture allows us with an option to
            choose from any technology stack
          </p>
        </div>
        <h1 class="text-2xl">
          <b>Svelte / Sapper</b>
        </h1>
        <div class="mb-6 mt-2">
          Store front build over the latest and lightweight javascript approach.
          This framework gained popularity withing few days of its launch.
          Maintained by an active community with over 28k starts on github.
        </div>
        <h1 class="text-2xl">
          <b>Over 60 stars within 60 day of its launch</b>
        </h1>
        <div class="mb-6 mt-2">
          Loved by people arround the world and growing.
          <p>* 64 github stars | * 15 github forks</p>
        </div>
        <h1 class="text-2xl">
          <b>Ecommerce Essentials integrated</b>
        </h1>
        <div class="mb-6 mt-2">
          Important features like Animations, lazy loading, Carousel are shipped
          out of the box. This adds up towards a great user experience.
        </div>
        <h1 class="text-2xl">
          <b>PWA as standard</b>
        </h1>
        <div class="mb-6 mt-2">
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
      <div class="bg-white shadow-lg mb-4 rounded">
        <div class="justify-center bg-gray-500">
          <div
            class="bg-yellow-400 flex text-center py-8 text-4xl flex-col
            items-center shadow-lg">
            <h1>Free</h1>
            <a
              href="https://github.com/itswadesh/foodfire"
              class="button bg-primary text-white text-lg py-2 px-12 mt-3
              rounded ">
              <span>Download from github</span>
            </a>
          </div>
        </div>
        <div class="pr px-10 lg:px-20 py-6 ">
          <img src="../../img/foodfire-full.png" alt="" />
          <h3 class="primary text-center text-xl my-3">Open source & free</h3>
          <h1 class="text-2xl">
            <b>Standalone Opensource project</b>
          </h1>
          <div class="mb-6 mt-2">
            This project is complete by itself, no backend requirement.
            Everything included in this food commerce app.
          </div>
          <h1 class="text-2xl">
            <b>Firebase at back</b>
          </h1>
          <div class="mb-6 mt-2">
            This app uses firebase for database and uses google social login for
            authentication need.
          </div>
          <h1 class="text-2xl">
            <b>Great UI for mobile</b>
          </h1>
          <div class="mb-6 mt-2">
            Created with mobile users in mind, this design is optimized for
            mobile devices.
          </div>
          <h1 class="text-2xl">
            <b>Simple for developers</b>
          </h1>
          <div class="mb-6 mt-2">
            Written in pure HTML & CSS + Clean code delights developers while
            working on it.
          </div>
          <h1 class="text-2xl">
            <b>Progressive ecommerce based on VueJS</b>
          </h1>
          <div class="mb-6 mt-2">
            Based on one of the most loved javascript frontend library (VueJS)
            with over 155k github stars
          </div>
          <!-- <h1 class="text-2xl">
            <b>Seemless developer experience</b>
          </h1> -->
          <div class="mb-6 mt-2">
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
      <div class="bg-white shadow-lg mb-4 rounded">
        <div class="justify-center bg-gray-500">
          <div
            class="bg-yellow-400 flex text-center py-8 text-4xl flex-col
            items-center shadow-lg">
            <h1>Enterprise</h1>
            <a
              href="https://demo.litekart.in"
              class="button bg-primary text-white text-lg py-2 px-12 mt-3
              rounded ">
              <span>Demo fashion store</span>
            </a>
          </div>
        </div>
        <div class="pr px-10 lg:px-20 py-6 ">
          <img src="../../img/litekart-full.png" alt="" />
          <h3 class="primary text-center text-xl my-3">Free for startups</h3>
          <h1 class="text-2xl">
            <b>Headless API based architecture</b>
          </h1>
          <div class="mb-6 mt-2">
            Store front, Store Administration, API, Images are separated. Hence
            gives us flexibility of choosing and integrating with any other
            service.
          </div>
          <h1 class="text-2xl">
            <b>Custom settings</b>
          </h1>
          <div class="mb-6 mt-2">
            An fully customizable interactive ecommerce dashboard created with
            latest javascript stack which delivers speed and ease of use for
            admin, managers, vendors
          </div>
          <h1 class="text-2xl">
            <b>Lightweight and modern javascript full stack</b>
          </h1>
          <div class="mb-6 mt-2">
            With NodeJS and MongoDB at back, all operations are just blazing
            fast
          </div>
          <h1 class="text-2xl">
            <b>Great Search Experience</b>
          </h1>
          <div class="mb-6 mt-2">
            With elastic search technology at the edge, it gives the end
            customers immence power of search with facet based filters.
          </div>
          <h1 class="text-2xl">
            <b>Progressive ecommerce based on VueJS</b>
          </h1>
          <div class="mb-6 mt-2">
            Based on one of the most loved javascript frontend library (VueJS)
            with over 155k github stars
          </div>
          <h1 class="text-2xl">
            <b>Seemless developer experience</b>
          </h1>
          <div class="mb-6 mt-2">
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
