<script>
  import Icon from "svelte-awesome";
  import { arrowUp } from "svelte-awesome/icons";
  import { lazyload } from "../actions/lazyload";
  import { CDN, host } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  let projects = [
    // {
    //   heading: `How clicky designed an agile and highperformance ecommerce`,
    //   data: `To serve over 1 million customers and 20k daily orders, clicky needed
    //       quick and reliable ecommerce solution, they tripled their sales and
    //       achieved 2nd milestone target under 6 months of migration their
    //       exising php based platform. With an expenditure of 1/4 of their
    //       investment in the exising platform`,
    //   img: `clicky.png`,
    //   link: `/live-projects`,
    //   stats: [185, 65, 250]
    // },
    // {
    //   heading: `How tesoro stays on top with a flexible e-commerce platform`,
    //   data: `For their growing jewellery store, there was a requirement to up-lift
    //       the exising ecommerce from wordpress (woocommerce) to a modern and
    //       more performant platform and they choose Litekart. The page loading
    //       and browing time decreased by 10 times resulting 3x increase in
    //       delightfull customers`,
    //   img: `tesoro.png`,
    //   link: `/live-projects`,
    //   stats: [232, 94, 320]
    // },
    {
      heading: `Litekart Grocery is a grocery flavour of litekart ecommerce stack`,
      data: `The project is written ground up based on cutting edge tech stack of 2020. NodeJS | GraphQL | Typescript | TailwindCSS | MongoDB | Vue makes it very powerfull and robust. Focussed on speed and customization capability.`,
      img: `grocery.png`,
      link: `https://grocery.litekart.in/`,
      stats: [121, 65, 100]
    },
    {
      heading: `Frontendfun`,
      data: `This is an website for free softwares, scripts, themes and more. Contains 10,000+ free alternative to most of the premium projects. Just download and use as an boilerplate for your own project`,
      img: `frontendfun.png`,
      link: `https://www.frontendfun.com/`,
      stats: [151, 96, 210]
    },
    {
      heading: `Misiki started its journey from Litekart`,
      data: `With an innovative idea in mind, Misiki Technologies started their
          journey with Litekart framework. As a food startup they had a
          stringent speed, availability, scalability. Project was delived in 1
          weeks`,
      img: `misiki.png`,
      link: `https://www.misiki.in/`,
      stats: [91, 88, 100]
    },
    {
      heading: `Hopyshopy - An amazon affiliate`,
      data: `With automation in mind, hopyshopy started with Flipkart affiliate, whereas Flipkart temporarily stopped its affiliate program. They contacted us again and we changed from flipkart affiliate to amazon affiliate within 1 day time`,
      img: `hopyshopy.png`,
      link: `https://www.hopyshopy.com/`,
      stats: [166, 92, 200]
    },
    {
      heading: `Arialshop - Ready to use single page ecommerce built using NodeJS & VueJS`,
      data: `This project is available at Codecanyon for download and is ready to use for any ecommerce requirement. It's license is designed so that you can modify and use it the way you wish. Only restrication is reselling`,
      img: `arialshop-mobile.png`,
      link: `https://www.arialshop.com/`,
      stats: [71, 67, 253]
    },
    {
      heading: `Foodfire - An open source food ordering app with firebase`,
      data: `This project can be directly downloaded from github. With a growing community support it is the most comprehensive project for food ordering using firebase for authentication and catalogue listing`,
      img: `foodfire.png`,
      link: `https://www.foodfire.info/`,
      stats: [82, 84, 195]
    },
    {
      heading: `ShopNx - The older friend of Litekart`,
      data: `We started ecommerce development from ShopNx, which subsequently grown into Arialshop and after a lot of itterations now its ready for enterprise level application`,
      img: `shopnx.png`,
      link: `https://www.shopnx.in/`,
      stats: [88, 63, 156]
    },
    {
      heading: `Lalavish - A modern saloon & spa`,
      data: `With innovative product catalogue and service catalogue, lalavish is still a growing destination in city.`,
      img: `lalavish.png`,
      link: `/`,
      stats: [89, 78, 124]
    }
  ];
</script>

<svelte:head>
  <title>Litekart - Live projects delivered using litekart technology</title>
  <meta
    data-hid="description"
    name="description"
    content="The speed increased by 3x, usability improvement by 5x, user
    happiness index improved by 10x, SEO ranking improved" />
  <meta
    name="keywords"
    content="ecommerce software, image optimization, lazy loading, headless,
    authentication, tailwindcss, headless ecommerce, carousel, instant
    search,vuejs pwa, opensource ecommerce, faceted filters, headless commerce" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Litekart - Live projects delivered using litekart technology" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="The speed increased by 3x, usability improvement by 5x, user
    happiness index improved by 10x, SEO ranking improved" />
  <meta name="og_url" property="og:url" content={`${host}/live-projects`} />
  <!-- Twitter -->
  <meta
    name="twitter:title"
    content="Litekart - Live projects delivered using litekart technology" />
  <meta
    name="twitter:description"
    content="The speed increased by 3x, usability improvement by 5x, user
    happiness index improved by 10x, SEO ranking improved" />
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="mx-2 lg:mx-16 xl:mx-48 xxl:mx-64">
    <h1 class="mt-8 mb-16 text-5xl font-bold text-center">
      <span class="underline">Live</span>
      Projects
    </h1>
    {#each projects as p, ix}
      <div class="flex flex-wrap mb-32">
        <div
          class="flex justify-center w-full lg:w-2/6"
          class:order-2={ix % 2 == 1}>
          <img
            use:lazyload
            src={`${CDN}../../${p.img}?tr=w-3,h-2`}
            data-src={`${CDN}../../${p.img}?tr=w-508,h-1032`}
            alt=""
            class="object-cover" />
        </div>
        <div class="order-1 w-full px-2 pt-8 lg:w-4/6 lg:pt-0 lg:px-24">
          <h2
            class="text-xl font-black leading-tight tracking-wide lg:text-3xl">
            {p.heading}
          </h2>
          <p class="mt-8 tracking-widest">{p.data}</p>
          <div class="flex justify-center my-16">
            <div class="mr-4 text-center stats">
              <div class="flex items-center justify-center">
                <Icon
                  data={arrowUp}
                  class="mr-2 text-green-500"
                  label="growth"
                  scale={2} />
                <div class="text-xl font-black lg:text-6xl">{p.stats[0]}%</div>
              </div>
              <p class="tracking-wider">growth of daily visitors</p>
            </div>
            <div class="mx-4 text-center stats">
              <div class="flex items-center justify-center">
                <Icon
                  data={arrowUp}
                  class="mr-2 text-green-500"
                  label="growth"
                  scale={2} />
                <div class="text-xl font-black lg:text-6xl">{p.stats[1]}%</div>
              </div>
              <p class="tracking-wider">improve in SEO ranking</p>
            </div>
            <div class="ml-4 text-center stats">
              <div class="flex items-center justify-center">
                <Icon
                  data={arrowUp}
                  class="mr-2 text-green-500"
                  label="growth"
                  scale={2} />
                <div class="text-xl font-black lg:text-6xl">{p.stats[2]}%</div>
              </div>
              <p class="tracking-wider">improved loading times</p>
            </div>
          </div>
          <div class="my-24 text-center">
            <a
              class="inline-block w-1/2 py-3 text-lg text-center text-white border rounded-full button lg:w-1/3 px-auto bg-primary"
              href={p.link}
              target="_blank">
              Live demo
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>
