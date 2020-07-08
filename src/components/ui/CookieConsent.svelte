<script>
  let closed = false;
</script>

{#if !closed}
  <div class="fixed inset-x-0 bottom-0 z-50 flex px-4 pb-6">
    <div
      class="flex items-center justify-between w-full max-w-6xl px-2 py-3 mx-auto text-sm text-white bg-gray-900 rounded-lg shadow lg:text-base lg:w-auto">
      <div class="flex items-center">
        <svg
          viewBox="0 0 644 644"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-0 h-0 mr-2 sm:w-6 sm:h-6 lg:w-8 lg:h-8 lg:mr-4">
          <path
            d="M642.106 99.572C503.785 74.76 446.597 56.384 321.749 0 196.9
            56.384 139.712 74.76 1.391 99.572-23.67 496.748 297.896 633.894
            321.749 643.5c23.852-9.606 345.417-146.752 320.357-543.928z"
            fill="#FF5A1F" />
          <path
            d="M418.919 130c-48.09 0-80 29.54-96.92
            51-16.88-21.49-48.83-51-96.92-51-60.62 0-110.45 50.54-111.08
            112.65-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46
            131.39 112.81a31.843 31.843 0 0036 0c78.59-53.35 112.62-89.93
            131.39-112.81 40-48.74 59.15-98.8
            58.61-153-.63-62.11-50.46-112.65-111.08-112.65zm-96.92
            352V273.58c0-19.63 5.23-38.76
            14.21-56.22.023-.055.05-.109.08-.16a123.005 123.005 0
            0121.77-28.51c18.13-17.69 38.6-26.69 60.86-26.69 43.15 0 78.62 36.32
            79.07 81 1.01 104.61-88.36 179.51-175.99 239z"
            fill="#fff" />
        </svg>
        <span>
          <span class="hidden md:inline">Have a great startup idea?</span>
          I will do
          <a
            href="https://www.litekart.in/pricing"
            class="font-medium border-b">
            technology outsourcing
          </a>
          for free
        </span>
      </div>
      <button
        on:click={() => (closed = true)}
        aria-label="Close Modal"
        class="ml-4 focus:outline-none">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 fill-current">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.707 5.293a1 1 0 010 1.414l-12 12a1 1 0 01-1.414-1.414l12-12a1
            1 0 011.414 0z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.293 5.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414 1.414l-12-12a1
            1 0 010-1.414z" />
        </svg>
      </button>
    </div>
  </div>
  <div class="fixed bottom-0 left-0 w-full pb-20 pl-6 pr-6 lg:pb-28 lg:w-auto">
    <span />
  </div>
{/if}
