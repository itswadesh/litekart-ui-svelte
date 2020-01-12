<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<div class="flex justify-center p-5">
  <div class=" flex justify-around flex-wrap">
    <div
      class="flex flex-col justify-center text-center items-center p-8 w-full
      lg:w-1/3">
      <img
        use:lazyload
        src={`${CDN}../../img/fastestexperience.svg`}
        alt=""
        class="h-24 m-8" />
      <div class="m-4">
        <h1 class="text-3xl mb-2 font-bold">Faster eCommerce</h1>
        Complete website loads under 3 second. API calls processed under 0.4s
      </div>
    </div>
    <div
      class=" flex flex-col justify-center text-center items-center p-8 w-full
      lg:w-1/3">
      <img
        use:lazyload
        src={`${CDN}../../img/flexiblescope.svg`}
        alt=""
        class="h-24 m-8" />
      <div class="m-4 ">
        <h1 class="text-3xl mb-2 font-bold">Flexible scope</h1>
        Customize it with your unique idea and create a unique brand presence.
      </div>
    </div>
    <div
      class=" flex flex-col justify-center text-center items-center p-8 w-full
      lg:w-1/3">
      <img
        use:lazyload
        src={`${CDN}../../img/building.svg`}
        alt=""
        class="h-24 m-8" />
      <div class="m-4">
        <h1 class="text-3xl mb-2 font-bold">Enterprise standard</h1>
        Get started under 1 weeek with Litekart's ready to use enterprise level
        ecommerce architecture.
      </div>
    </div>
  </div>
</div>
