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
    padding-right: 15px;
  }
  .button:hover span:after {
    opacity: 1;
    right: 0;
  }
</style>

<div class="px-2 py-12 my-2">
  <h2 class="pb-12 text-3xl font-bold text-center">
    Here’s how Litekart helps deliver the best sales
  </h2>
  <div class="flex flex-wrap justify-between  lg:flex-no-wrap">
    <div
      class="flex flex-col justify-center w-1/2 px-3 mb-6 text-center lg:w-1/4">
      <img
        use:lazyload
        src={CDN + '../../img/talent-work.svg?tr=w-3,h-2'}
        data-src={`${CDN}../../img/talent-work.svg`}
        alt="" />
      <h2 class="mb-2 text-lg font-bold">Scalable and secure</h2>
      Forget about visitors surge during a sale. The architecture takes care of
      it.
    </div>
    <div
      class="flex flex-col justify-center w-1/2 px-3 mb-6 text-center lg:w-1/4">
      <img
        use:lazyload
        src={CDN + '../../img/get-a-smater.svg?tr=w-3,h-2'}
        data-src={`${CDN}../../img/get-a-smater.svg`}
        alt="" />
      <h3 class="mb-2 text-lg font-bold">Superfast image processing</h3>
      Based on NodeJS, it empowers faster database and file system access.
    </div>
    <div
      class="flex flex-col justify-center w-1/2 px-3 mb-6 text-center lg:w-1/4">
      <img
        use:lazyload
        src={CDN + '../../img/manage-everythinng.svg?tr=w-3,h-2'}
        data-src={`${CDN}../../img/manage-everythinng.svg`}
        alt="" />
      <h4 class="mb-2 text-lg font-bold">Best in class uptime, performance</h4>
      Litekart takes advantage of the cloud platforms providing 99.99% uptime.
    </div>
    <div
      class="flex flex-col justify-center w-1/2 px-3 mb-6 text-center lg:w-1/4">
      <img
        use:lazyload
        src={CDN + '../../img/get-a-clear.svg?tr=w-3,h-2'}
        data-src={`${CDN}../../img/get-a-clear.svg`}
        alt="" />
      <h5 class="mb-2 text-lg font-bold">7 days money back guarantee</h5>
      Full refund if you feel the product does not fit your need.
    </div>
  </div>
  <div class="flex justify-center mt-6 ">
    <a
      href="/contact"
      class="px-8 py-2 ml-2 mr-5 text-white rounded-full button bg-primary">
      <span>Get started</span>
    </a>
    <a
      href="https://demo.litekart.in/"
      rel="noopener"
      target="blank"
      class="px-8 py-2 ml-2 bg-gray-100 border rounded-full button primary">
      <span>Get a Demo</span>
    </a>
  </div>
</div>
