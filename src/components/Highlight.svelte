<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<div class="flex justify-center p-5">
  <div class="flex flex-wrap justify-around ">
    <div
      class="flex flex-col items-center justify-center w-full p-8 text-center lg:w-1/3">
      <img
        use:lazyload
        src={`${CDN}../../img/fastestexperience.svg?tr=w-3,h-2`}
        data-src={`${CDN}../../img/fastestexperience.svg`}
        alt=""
        class="h-24 m-8" />
      <div class="m-4">
        <h2 class="mb-2 text-3xl font-bold">Faster ecommerce</h2>
        Complete website loads under 3 second. API calls processed under 0.4s
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center w-full p-8 text-center  lg:w-1/3">
      <img
        use:lazyload
        src={`${CDN}../../img/flexiblescope.svg?tr=w-3,h-2`}
        data-src={`${CDN}../../img/flexiblescope.svg`}
        alt=""
        class="h-24 m-8" />
      <div class="m-4 ">
        <h2 class="mb-2 text-3xl font-bold">Flexible scope</h2>
        Customize it with your unique idea and create a unique brand presence.
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center w-full p-8 text-center  lg:w-1/3">
      <img
        use:lazyload
        src={`${CDN}../../img/building.svg?tr=w-3,h-2`}
        data-src={`${CDN}../../img/building.svg`}
        alt=""
        class="h-24 m-8" />
      <div class="m-4">
        <h2 class="mb-2 text-3xl font-bold">Enterprise standard</h2>
        Get started under 1 weeek with litekart's ready to use enterprise level
        ecommerce architecture.
      </div>
    </div>
  </div>
</div>
