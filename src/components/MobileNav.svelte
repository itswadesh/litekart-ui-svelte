<script>
  import Icon from "svelte-awesome";
  import { times, code, eye, history } from "svelte-awesome/icons";
  import { createEventDispatcher } from "svelte";
  import { lazyload } from "../actions/lazyload";
  import { CDN } from "./../config";

  const dispatch = createEventDispatcher();
  function close() {
    dispatch("close", true);
  }
</script>

<style>
  .off {
    z-index: 13;
    transition: transform 0.5s ease;
    transform: translateX(0);
  }
  ul li a {
    display: flex;
  }
  ul li a:hover {
    background: #eee;
  }
</style>

<div
  class="off w-full h-screen fixed top-0 md:hidden flex flex-col justify-between
  bg-white">
  <!-- Header -->
  <div
    class="sticky md:hidden flex shadow-lg justify-between items-center p-2
    bg-white">
    <button
      class="focus:outline-none flex justify-around items-center"
      on:click={close}
      aria-label="close">
      <Icon data={times} label="bars" scale={2} />
      <!-- <i class="fa fa-times text-gray-700 text-2xl" /> -->
    </button>
    <a href="/" rel="prefetch" class="items-center" aria-label="logo">
      <img
        use:lazyload
        src={`${CDN}../../img/litekart-logo.png?tr=w-3,h-2`}
        data-src={`${CDN}../../img/litekart-logo.png?tr=h-48`}
        alt=""
        class="" />
    </a>
    <button class="" aria-label="search" />
  </div>
  <!-- Content -->
  <div class="h-full">
    <ul class="px-2 py-4">
      <li class="">
        <a
          href="/features"
          rel="prefetch"
          class="px-6 py-3 items-center inline-block"
          style="color:#6772e5"
          on:click={close}>
          <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224">
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal">
              <path d="M0,224v-224h224v224z" fill="none" />
              <g fill="#6772e5">
                <path
                  d="M186.66667,28h-149.33333c-10.26667,0 -18.57333,8.4
                  -18.57333,18.66667l-0.09333,168l37.33333,-37.33333h130.66667c10.26667,0
                  18.66667,-8.4 18.66667,-18.66667v-112c0,-10.26667
                  -8.4,-18.66667
                  -18.66667,-18.66667zM102.66667,65.33333h18.66667v18.66667h-18.66667zM102.66667,102.66667h18.66667v37.33333h-18.66667z" />
              </g>
            </g>
          </svg>
          <span class="px-3">Features</span>
        </a>
      </li>

      <li class="">
        <a
          href="/pricing"
          rel="prefetch"
          class="px-6 py-3 "
          style="color:#24b47e"
          on:click={close}>
          <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224">
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal">
              <path d="M0,224v-224h224v224z" fill="none" />
              <g fill="#24b47e">
                <g id="surface1">
                  <path
                    d="M149.33333,18.66667c-21.47396,0 -39.08333,11.15625
                    -48.41667,28.875c13.05209,1.85938 25.88542,6.52604
                    36.16667,14v-5.54167l24.5,-9.33333v38.20833c7.47396,11.19271
                    13.01562,24.42709 14.875,39.375c16.80729,-9.33333
                    28.875,-28.18229 28.875,-48.70833c0,-31.71875
                    -25.19271,-56.875 -56,-56.875zM88.66667,65.33333c-38.28125,0
                    -70,31.71875 -70,70c0,38.28125 31.71875,70 70,70c38.28125,0
                    70,-31.71875 70,-70c0,-38.28125 -31.71875,-70
                    -70,-70zM67.08333,93.33333h45.79167v13.125h-31.79167l-1.75,19.54167l5.54167,-2.91667c1.85938,-0.94791
                    4.77604,-0.875 7.58333,-0.875c7.47396,0 14.07292,1.96875
                    17.79167,7.58333c3.71875,5.61459 6.41667,12.03125
                    6.41667,20.41667c0,7.47396 -2.91667,13.92709
                    -7.58333,19.54167c-4.66667,5.61459 -11.01041,7.58333
                    -21.29167,7.58333c-7.47396,0 -13.92708,-1.82291
                    -19.54167,-5.54167c-5.61458,-3.71875 -8.53125,-9.44271
                    -7.58333,-16.91667l15.75,-0.875c0,3.71875 1.05729,6.59896
                    2.91667,8.45833c1.85938,1.85938 4.73959,2.625
                    8.45833,2.625c3.71875,0 6.59896,-0.69271
                    8.45833,-3.5c1.85938,-2.80729 2.625,-6.70833
                    2.625,-11.375c0,-4.66667 -0.76562,-8.27604
                    -2.625,-11.08333c-1.85938,-2.80729 -4.73958,-4.66667
                    -8.45833,-4.66667c-2.80729,0 -5.72396,0.80209
                    -7.58333,1.75c-1.85938,0.94792 -2.84375,2.80729
                    -3.79167,4.66667l-14,-0.875z" />
                </g>
              </g>
            </g>
          </svg>
          <span class="px-3">Pricing</span>
        </a>
      </li>
      <li class="">
        <a
          href="/contact"
          rel="prefetch"
          class="px-6 py-3 "
          style="color: #3297d3;"
          on:click={close}>
          <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224">
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal">
              <path d="M0,224v-224h224v224z" fill="none" />
              <g fill="#3297d3">
                <path
                  d="M177.33333,28c-15.43733,0 -28,12.56267 -28,28c0,4.30975
                  1.05983,8.34395
                  2.80729,11.99479l-34.67187,34.67188h-44.51563c-3.86649,-10.83835
                  -14.1381,-18.66667 -26.28646,-18.66667c-15.43733,0
                  -28,12.56267 -28,28c0,15.43733 12.56267,28 28,28c12.14835,0
                  22.41996,-7.82832
                  26.28646,-18.66667h44.51563l34.67187,34.67188c-1.74746,3.65085
                  -2.80729,7.68505 -2.80729,11.99479c0,15.43733 12.56267,28
                  28,28c15.43733,0 28,-12.56267 28,-28c0,-15.43733 -12.56267,-28
                  -28,-28c-4.30974,0 -8.34394,1.05983
                  -11.99479,2.80729l-30.8073,-30.80729l30.8073,-30.80729c3.65085,1.74746
                  7.68505,2.80729 11.99479,2.80729c15.43733,0 28,-12.56267
                  28,-28c0,-15.43733 -12.56267,-28 -28,-28z" />
              </g>
            </g>
          </svg>
          <span class="px-3">Contact</span>
        </a>
      </li>
      <li class="">
        <a
          href="/customizations"
          rel="prefetch"
          class="px-6 py-3 "
          style="color:#8f6ed5"
          on:click={close}>
          <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224">
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal">
              <path d="M0,224v-224h224v224z" fill="none" />
              <g fill="#8f6ed5">
                <path
                  d="M65.33333,18.66667c-5.152,0 -9.33333,4.18133
                  -9.33333,9.33333v74.66667h-9.33333v18.66667h9.33333h112h9.33333v-18.66667h-9.33333v-74.66667c0,-5.152
                  -4.18133,-9.33333 -9.33333,-9.33333zM28,37.33333c-10.31333,0
                  -18.66667,8.35333 -18.66667,18.66667v93.33333c0,10.31333
                  8.35333,18.66667
                  18.66667,18.66667h65.33333v18.66667h-18.66667v18.66667h74.66667v-18.66667h-18.66667v-18.66667h65.33333c10.31333,0
                  18.66667,-8.35333 18.66667,-18.66667v-93.33333c0,-10.31333
                  -8.35333,-18.66667
                  -18.66667,-18.66667h-9.33333v18.66667h9.33333v93.33333h-168v-93.33333h9.33333v-18.66667zM83.17969,37.33333h57.64063c1.41036,3.9752
                  4.53781,7.10266
                  8.51302,8.51302v56.82031h-11.04688c-3.85551,-10.85315
                  -14.10996,-18.66667 -26.28646,-18.66667c-12.1765,0
                  -22.43095,7.81352
                  -26.28646,18.66667h-11.04688v-56.82031c3.9752,-1.41036
                  7.10266,-4.53782 8.51302,-8.51302zM112,56c-5.16133,0
                  -9.33333,4.18133 -9.33333,9.33333c0,5.152 4.172,9.33333
                  9.33333,9.33333c5.16133,0 9.33333,-4.18133
                  9.33333,-9.33333c0,-5.152 -4.172,-9.33333 -9.33333,-9.33333z" />
              </g>
            </g>
          </svg>
          <span class="px-3">Customizations</span>
        </a>
      </li>

      <li class="">
        <a
          href="/about-us"
          rel="prefetch"
          class="px-6 py-3 "
          style="color:#e39f48"
          on:click={close}>
          <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224">
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal">
              <path d="M0,224v-224h224v224z" fill="none" />
              <g fill="#e39f48">
                <g id="surface1">
                  <path
                    d="M124.25,32.375c-3.20833,0.03646 -6.16146,0.4375
                    -9.04167,0.875c-17.28125,2.55209 -28.4375,11.99479
                    -32.66667,16.91667l14,12.25c1.93229,-2.22396
                    14.07292,-13.78125 35,-10.5c13.81771,2.1875 19.43229,9.1875
                    23.04167,16.91667c3.60938,7.72917 4.04688,15.64062
                    4.08333,17.20833v0.29167c0.18229,3.02604 -1.45833,11.08333
                    -1.45833,11.08333l-3.79167,15.75l15.75,-4.66667c0,0
                    7.47396,-2.11458 10.5,-2.625c-0.29167,0.03646
                    2.22396,-0.21875 4.95833,0.29167c2.73438,0.51042
                    6.05209,1.67709 9.04167,3.20833c6.01562,3.09896
                    10.64583,7.32812 11.66667,16.04167c1.42188,12.06771
                    -2.07812,17.28125 -7.29167,21c-5.21354,3.71875
                    -13.52604,4.92188 -20.125,3.79167c-16.98958,-2.91667
                    -33.86979,-19.43229 -46.95833,-38.20833c-4.95833,-7.10938
                    -15.20312,-21.14583 -30.04167,-32.66667c-14.83854,-11.52083
                    -35.40104,-20.74479 -58.33333,-14.875c-14.07291,3.60938
                    -24.60938,10.42709 -31.5,19.25c-6.89062,8.82292
                    -10.02604,19.35938 -10.79167,29.75c-1.93229,26.03125
                    13.96354,44.77083 31.5,51.91667c20.5625,8.38542
                    39.15625,6.67188 53.66667,0.875c14.51042,-5.79688
                    25.04688,-15.16667 32.375,-21.875l-12.54167,-14c-7,6.41667
                    -16.00521,14.32812 -26.83333,18.66667c-10.82812,4.33854
                    -23.33333,5.50521 -39.66667,-1.16667c-11.04688,-4.52083
                    -21.18229,-15.13021 -19.83333,-33.25c0.58333,-7.76562
                    2.58854,-14.25521 6.70833,-19.54167c4.11979,-5.28646
                    10.57292,-9.73438 21.58333,-12.54167c15.96875,-4.08333
                    29.78646,1.89583 42,11.375c12.21354,9.47917
                    21.61979,22.23959 26.25,28.875c14.32812,20.48959
                    33.72396,41.67188 59.5,46.08333c11.01042,1.89583
                    23.47917,0.07292 33.83333,-7.29167c10.35417,-7.36458
                    17.24479,-21.21875 15.16667,-38.5c-1.82291,-15.3125
                    -12.10417,-25.30208 -21.875,-30.33333c-4.88541,-2.51562
                    -9.69791,-4.15625 -14,-4.95833c-4.19271,-0.80208
                    -7.47396,-1.13021 -11.08333,-0.58333c0,-0.875 0.32812,-0.875
                    0.29167,-1.75c0,-0.03646 0,-0.25521
                    0,-0.29167c-0.07291,-2.07812 -0.47396,-12.6875
                    -5.83333,-24.20833c-5.43229,-11.66667 -17.13541,-24.57291
                    -37.04167,-27.70833c-3.57291,-0.54688 -7,-0.91146
                    -10.20833,-0.875z" />
                </g>
              </g>
            </g>
          </svg>
          <span class="px-3">About Us</span>
        </a>
      </li>
      <li class="">
        <a
          href="/details"
          rel="prefetch"
          class="px-6 py-3 "
          style="color:#b7ac4b"
          on:click={close}>
          <svg x="0px" y="0px" width="24" height="24" viewBox="0 0 224 224">
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal">
              <path d="M0,224v-224h224v224z" fill="none" />
              <g fill="#b7ac4b">
                <g id="surface1">
                  <path
                    d="M112,18.66667c-51.55208,0 -93.33333,41.78125
                    -93.33333,93.33333c0,51.55209 41.78125,93.33333
                    93.33333,93.33333c51.55209,0 93.33333,-41.78125
                    93.33333,-93.33333c0,-22.42188 -7.83854,-42.83854
                    -21,-58.91667l-13.41667,13.125c9.84375,12.65104
                    15.75,28.54688 15.75,45.79167c0,38.31771 -28.76562,69.78125
                    -65.91667,74.08333c-1.75,5.6875 -7.14583,9.91667
                    -13.41667,9.91667c-6.96354,0 -12.61458,-5.03125
                    -13.70833,-11.66667c-32.30208,-8.23958 -56.29167,-37.47917
                    -56.29167,-72.33333c0,-13.67188 3.79167,-26.32291
                    10.20833,-37.33333c-0.47396,-1.42188 -0.875,-3.0625
                    -0.875,-4.66667c0,-7.72917 6.27083,-14 14,-14c0.61979,0
                    1.13021,0.21875 1.75,0.29167c13.16146,-11.70312
                    30.58854,-18.95833 49.58333,-18.95833c17.24479,0
                    33.14062,5.90625
                    45.79167,15.75l13.125,-13.41667c-16.07812,-13.16146
                    -36.49479,-21 -58.91667,-21zM112,46.66667c-15.42188,0
                    -29.67708,5.35938 -40.83333,14.29167c2.07812,2.44271
                    3.5,5.57812 3.5,9.04167c0,7.72917 -6.27083,14
                    -14,14c-2.47917,0 -4.70312,-0.61979
                    -6.70833,-1.75c-4.59375,8.93229 -7.29167,18.99479
                    -7.29167,29.75c0,30.26042 20.48959,55.5625
                    48.41667,63c2.40625,-4.22917 7.03646,-7 12.25,-7c5.86979,0
                    10.75521,3.60938 12.83333,8.75c32.15625,-4.08333
                    57.16667,-31.5 57.16667,-64.75c0,-14.65625
                    -4.95833,-28.18229
                    -13.125,-39.08333l-13.41667,13.41667c4.88542,7.36459
                    7.875,16.15104 7.875,25.66667c0,5.32292 -0.98438,10.39062
                    -2.625,15.16667c1.67709,2.29688 2.625,5.06771
                    2.625,8.16667c0,7.72917 -6.27083,14 -14,14c-1.42188,0
                    -2.77083,-0.18229 -4.08333,-0.58333c-7.91146,6.16146
                    -17.75521,9.91667 -28.58333,9.91667c-25.77604,0
                    -46.66667,-20.89062 -46.66667,-46.66667c0,-25.77604
                    20.89062,-46.66667 46.66667,-46.66667c9.51562,0
                    18.30209,2.98959
                    25.66667,7.875l13.41667,-13.41667c-10.90104,-8.16667
                    -24.42708,-13.125
                    -39.08333,-13.125zM112,74.66667c-20.63541,0
                    -37.33333,16.69792 -37.33333,37.33333c0,20.63542
                    16.69792,37.33333 37.33333,37.33333c7.76562,0
                    15.02083,-2.36979 21,-6.41667c-1.42188,-2.1875
                    -2.33333,-4.77604 -2.33333,-7.58333c0,-7.72917 6.27083,-14
                    14,-14c1.09375,0 2.1875,0.03646
                    3.20833,0.29167c0.83854,-3.13541 1.45833,-6.23438
                    1.45833,-9.625c0,-6.92708 -1.96875,-13.41667
                    -5.25,-18.95833l-25.375,25.66667c-1.67708,1.67709
                    -4.11979,2.625 -6.70833,2.625c-5.14062,0 -9.33333,-4.19271
                    -9.33333,-9.33333c0,-2.58854 0.94792,-5.03125
                    2.625,-6.70833l25.66667,-25.375c-5.54167,-3.28125
                    -12.03125,-5.25 -18.95833,-5.25z" />
                </g>
              </g>
            </g>
          </svg>
          <span class="px-3">Details</span>
        </a>
      </li>
      <li class="">
        <a
          href="/litekart-story"
          rel="prefetch"
          class="px-6 py-3 flex items-center"
          style="color:#b24592"
          on:click={close}>
          <Icon data={history} class="" label="history" scale={1.5} />
          <span class="px-3">Development Story</span>
        </a>
      </li>
      <li class="">
        <a
          href="/live-projects"
          rel="prefetch"
          class="px-6 py-3 flex items-center"
          style="color:#24b47e"
          on:click={close}>
          <Icon data={eye} class="" label="code" scale={1.5} />
          <span class="px-3">Live Projects</span>
        </a>
      </li>
      <li class="">
        <a
          href="/ecommerce-developer"
          rel="prefetch"
          class="px-6 py-3 flex items-center"
          style="color:#000"
          on:click={close}>
          <Icon data={code} class="" label="code" scale={1.5} />
          <span class="px-3">For Developers</span>
        </a>
      </li>
    </ul>
  </div>
  <div
    class="bg-gray-200 py-3 mt-4 flex justify-center bg-gray-200 shadow border-t
    ">
    <a
      href="/contact"
      rel="prefetch"
      class="rounded px-8 py-2 btn-primary mr-2 button">
      Lets Talk
    </a>
  </div>
</div>
