<script>
  import Textbox from "./../components/ui/Textbox.svelte";
  import Textarea from "./../components/ui/Textarea.svelte";
  import { get, put, post } from "./../lib/api";
  import { lazyload } from "../actions/lazyload";
  import { CDN, host } from "./../config";
  import { fadeIn, fadeOut } from "./../actions/pageFade";

  let email = "",
    message,
    err,
    msg,
    loading = false;
  $: isEmail = email.includes("@");
  async function submit() {
    msg = err = null;
    if (!email || !email.trim() === "") {
      err = "Did you forget to enter your email?";
      return;
    } else if (!isEmail) {
      err = "Entered email is not valid";
      return;
    } else if (!message || !message.trim() === "") {
      msg = "Did you forget to type a message?";
      return;
    } else {
      await emailLogin();
    }
  }
  async function emailLogin() {
    try {
      loading = true;
      const res = await post("email/contactus", {
        from: email,
        subject: "Conact from Litekart Landing Page",
        text: message
      });
      msg = "Thank you for message. We will get back to you soon";
    } catch (e) {
      err = e;
      console.log("err...", e.toString());
    } finally {
      loading = false;
    }
  }
</script>

<style>
  button:disabled {
    background: #dddddd;
    color: #4a5568;
  }
  button:focus {
    outline: 0;
  }
  .bg {
    background-image: url(../../img/contact.png);
    background-position: 80% 0%;
    /* background-size: cover !important; */
    background-repeat: no-repeat;
  }
</style>

<svelte:head>
  <title>Litekart - Contact Us</title>
  <meta
    data-hid="description"
    name="description"
    content="Get in touch with us to get recommendations and free ecommerce
    softwares for your small business" />
  <meta
    name="keywords"
    content="ecommerce software, how to sell product online free, about
    litekart, about superfast ecommerce software, smart store" />
  <meta
    data-hid="og:description"
    name="og_description"
    property="og:description"
    content="Litekart - Get a free consultation for your ecommerce startup" />
  <meta
    data-hid="og:title"
    name="og_title"
    property="og:title"
    content="Litekart - Talk to Us" />
  <meta name="og_url" property="og:url" content={`${host}/contact`} />
  <!-- Twitter -->
  <meta name="twitter:title" content="Litekart - Contact Us" />
  <meta
    name="twitter:description"
    content="Get in touch with us to get recommendations and free ecommerce
    softwares for your small business" />
</svelte:head>
<main in:fadeIn out:fadeOut class="bg">
  <h1 class="text-5xl mt-8 mb:8 lg:mb-16 text-center font-bold">
    <span class="underline">Contact</span>
    Us
  </h1>
  <div class="flex flex-col justify-center">
    <div class="flex flex-wrap px-2 lg:px-16 xl:px-48 lg:mb-12">
      <div
        class="my-4 py-8 bg-white lg:bg-transparent shadow lg:shadow-none
        rounded lg:rounded-none w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
        {#if err}
          <p class="bg-red-200 border p-8 rounded mb-8 font-bold">{err}</p>
        {/if}
        {#if msg}
          <p class="bg-green-200 border p-8 rounded mb-8 font-bold">{msg}</p>
        {/if}
        <form
          novalidate
          on:submit|preventDefault={submit}
          class="px-2 lg:px-24 flex flex-col leading-loose">
          <Textbox bind:value={email} label="Email" />
          <Textarea bind:value={message} label="Message" />
          <button
            disabled={loading}
            type="submit"
            class="rounded-full w-full px-auto py-1 btn-primary text-white flex
            justify-center uppercase">
            {#if !loading}
              <span>Send</span>
            {:else}
              <img src={`${CDN}../../loading.svg`} alt="..." />
              Sending...
            {/if}
          </button>
        </form>
      </div>
      <!-- <div class="w-full lg:w-1/2"> -->
      <!-- </div> -->
    </div>
  </div>
  <!-- <img
    use:lazyload
    src={`${CDN}../../img/contact.png?tr=w-3,h-2`}
    data-src={`${CDN}../../img/contact.png`}
    class="img m-auto mb-2 absolute top-0 right-0"
    alt="" /> -->
</main>
