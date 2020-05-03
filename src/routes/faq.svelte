<script>
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { host } from "./../config";

  let faq = [
    {
      key:
        "I own a Physical Store and I want to have an e-commerce website for my business. However, I do not have any technical knowledge?",
      val:
        "Do not worry. We are expert in ecommerce technology. We will take care of everything required for an ecommerce setup. You only need to concentrate on marketing and logistics. The team of Litekart will arrange multiple mettings towards education of product usage. You will be assigned with an personal manager who will be always there a phone call away. The customer support team is alwais always ready to help people with no or less coding knowledge.  For availing our development services, kindly write to support[@]Litekart.in."
    },
    {
      key: "I have a woo-commerce store. can I migrate",
      val:
        "Yes. We will assist you migrating any ecommerce store to Litekart. All hassles will be ours, from product migration to orders shift, payment gateway integration, SMS email integration, cloud infrastructure setup."
    },
    {
      key: "How do I purchase litekart 'Enterprise?",
      val: `
        1. Visit https://www.litekart.in/contact
2. Mention your business type
3. Let us know about your requirement in details.
4. We will do full setup litekart on your own server
`
    },
    {
      key: "Do you provide any extended support?",
      val:
        "Litekart 'Enterprise' has been completely tested for bugs to make it zero defect and bug free. However, should you encounter any bug, or should you face any issues in installation or deployment process, kindly connect with the Litekart team and they shall help you out."
    },
    {
      key: "Can you customize and add the features?",
      val:
        "Yes, we do understand that eCommerce requirement of every business owner is unique, while Litekart has standard eCommerce features. If your business is unique, we shall take a detailed requirement from you on the features you are looking for. Then, we shall analyze the requirement and provide customization services accordingly. After customization, the final eCommerce product you will be getting will be exclusive for you and we shall not distribute it to any other customer of ours. For customization services, you may send an email to support[@]Litekart.in."
    },
    {
      key: "Why should I use Litekart instead of other open source solutions?",
      val:
        "What makes this solution unique is the technology stack on which it is built. It is built on the futuristic technologies of NodeJS and VueJS. NodeJS is an asynchronous powerful framework that can make an eCommerce application 10x faster than other websites. The end result will be a light weight application that guarantees minimum time for page upload and 0.01 percent downtime. The project architecture is made so that it can be infinite horizontal scalable"
    },
    {
      key: "Will you be adding new features to the solution in future?",
      val:
        "Since last 6 years we are continuously improving the litekart with feedback from all out clients. As a open source project, we also receive feedbacks, suggestions, feature requests, code pull request from the open source community. We do understand that eCommerce is one of the industries, which has seen a tremendous change in the trends in these years and it is growing at an unprecedented rate all over the globe. We need to be always on our toes when it comes to improving the solution and upgrading the solution with newer and more features to catch up with the latest ecommerce trends. We shall constantly make improvements and bring upgraded versions to the solution."
    },
    {
      key:
        "Will the Litekart solution I have downloaded get automatically upgraded to the newer version, every time when a new version is released?",
      val:
        "No, the solution will not get automatically upgraded. Whenever there is a release of new and improved version of Litekart, we shall intimate you on the release through email, along with the link to download and upgrade the existing version of the solution to the new version."
    },
    {
      key: "Can I make modifications to the solution and sell it?",
      val:
        "Litekart is a 'Community Version' and this means, it is free to download and free to use, for a cause of making the eCommerce development process faster and hassle-free, among the Developers' community. When you got the solution for free, then, every other person should also get the solution for free, with or without modifications. Selling this solution is strictly prohibited."
    }
  ];
</script>

<style>
  details {
    width: 75%;
    min-height: 5px;
    max-width: 700px;
    padding: 45px 70px 45px 45px;
    margin: 0 auto;
    position: relative;
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-sizing: border-box;
    transition: all 0.3s;
  }

  details + details {
    margin-top: 20px;
  }

  details[open] {
    min-height: 50px;
    background-color: #f6f7f8;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  }

  details p {
    color: #96999d;
    font-weight: 300;
  }

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
  }

  summary:focus {
    outline: none;
    box-shadow: 0 0 0 4px #f6f7f8, 0 0 0 5px rebeccapurple;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  .control-icon {
    fill: rebeccapurple;
    transition: 0.3s ease;
    pointer-events: none;
  }

  .control-icon-close {
    display: none;
  }

  details[open] .control-icon-close {
    display: initial;
    transition: 0.3s ease;
  }

  details[open] .control-icon-expand {
    display: none;
  }

  details[open] summary:hover::after {
    animation: pulse 1s ease;
  }

  @keyframes pulse {
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

<svelte:head>
  <title>Litekart - Frequently Asked Questions</title>
  <meta
    data-hid="description"
    name="description"
    content="I tried to answer to your queries, but if anything missing, please
    feel free to contact through the contact form, I will be happy to help" />
  <meta
    name="keywords"
    content="ecommerce software, image optimization, lazy loading, headless,
    authentication, tailwindcss, headless ecommerce, carousel, instant
    search,vuejs pwa, opensource ecommerce, faceted filters, headless commerce" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Litekart - Frequently Asked Questions" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="I tried to answer to your queries, but if anything missing, please
    feel free to contact through the contact form, I will be happy to help" />
  <meta name="og_url" property="og:url" content={`${host}/faq`} />
  <!-- Twitter -->
  <meta name="twitter:title" content="Litekart - Frequently Asked Questions" />
  <meta
    name="twitter:description"
    content="I tried to answer to your queries, but if anything missing, please
    feel free to contact through the contact form, I will be happy to help" />
</svelte:head>

<main in:fadeIn out:fadeOut>
  <h1 class="text-5xl my-8 text-center font-bold">
    Frequently Asked
    <span class="underline">Questions</span>
  </h1>

  <div style="visibility: hidden; position: absolute; width: 0px; height: 0px;">
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol viewBox="0 0 24 24" id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </symbol>
      <symbol viewBox="0 0 24 24" id="close">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12
          13.41 17.59 19 19 17.59 13.41 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </symbol>
    </svg>
  </div>

  {#each faq as q, ix}
    <details open={ix == 0}>
      <summary>
        {q.key}
        <svg
          class="control-icon control-icon-expand"
          width="24"
          height="24"
          role="presentation">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#expand-more" />
        </svg>
        <svg
          class="control-icon control-icon-close"
          width="24"
          height="24"
          role="presentation">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" />
        </svg>
      </summary>
      <p class="mt-4">{q.val}</p>
    </details>
  {/each}
</main>
