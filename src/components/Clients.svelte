<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<div class="flex flex-col justify-center p-5 text-center">
  <h4 class="m-5">
    800+ developers and ecommerce business owners have adopted litekart for
    achieving speed, performance and scalability.
  </h4>
  <div class="flex justify-between overflow-x-auto ">
    <img
      use:lazyload
      src={CDN + '../../img/719fe55.svg?tr=w-3,h-2'}
      data-src={CDN + '../../img/719fe55.svg'}
      alt=""
      class="mx-4" />
    <img
      use:lazyload
      src={CDN + '../../img/2.svg?tr=w-3,h-2'}
      data-src={CDN + '../../img/2.svg'}
      alt=""
      class="mx-4" />
    <img
      use:lazyload
      src={CDN + '../../img/3.svg?tr=w-3,h-2'}
      data-src={CDN + '../../img/3.svg'}
      alt=""
      class="mx-4" />
    <img
      use:lazyload
      src={CDN + '../../img/5.svg?tr=w-3,h-2'}
      data-src={CDN + '../../img/5.svg'}
      alt=""
      class="mx-4" />
    <img
      use:lazyload
      src={CDN + '../../img/6.svg?tr=w-3,h-2'}
      data-src={CDN + '../../img/6.svg'}
      alt=""
      class="mx-4" />
    <img
      use:lazyload
      src={CDN + '../../img/7.svg?tr=w-3,h-2'}
      data-src={CDN + '../../img/7.svg'}
      alt=""
      class="mx-4" />
  </div>
</div>
