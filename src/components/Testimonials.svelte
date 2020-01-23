<script>
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";
</script>

<div class="bg-gray-200">
  <div class="max-w-6xl mx-auto px-8 py-16">
    <div class="relative">
      <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
        <div
          class="h-56 lg:h-auto lg:w-5/12 relative flex items-center
          justify-center">
          <img
            class="absolute h-full w-full object-cover"
            use:lazyload
            src={CDN + '../../working-team.jpg?tr=w-3,h-2'}
            data-src={CDN + '../../working-team.jpg'}
            alt="" />
          <div class="absolute inset-0 bg-indigo-900 opacity-75" />
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chart-line"
            class="relative fa-w-16 fill-current text-white"
            width="200"
            height="120"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M257.981 272.971L63.638 467.314c-9.373 9.373-24.569
              9.373-33.941 0L7.029
              444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99
              101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373
              24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0
              33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24
              10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745
              24-24z" />
          </svg>
        </div>
        <div class="relative lg:w-7/12 bg-white">
          <svg
            class="absolute h-full text-white w-24 -ml-12"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div
            class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700
            leading-relaxed">
            <p>

              <strong class="text-gray-900 font-medium">
                The Next Generation of Commerce
              </strong>
              - Get started selling within minutes. Featuring a complete
              e-commerce store designed for products and services with tons of
              free and exciting features.
            </p>
            <p class="mt-6">
              <a
                href="/customizations"
                class="font-medium text-indigo-600 hover:text-indigo-900">
                Learn more about our offerings &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 left-0 lg:flex lg:items-center">
        <button
          class="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3
          shadow-lg">
          <svg
            class="h-full w-full text-indigo-900"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42
              1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
          </svg>
        </button>
      </div>
      <div class="absolute inset-y-0 right-0 lg:flex lg:items-center">
        <button
          class="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3
          shadow-lg">
          <svg
            class="h-full w-full text-indigo-900"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7
              7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
