<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import Textbox from "./../components/ui/Textbox.svelte";
  import Textarea from "./../components/ui/Textarea.svelte";
  import { get, put, post } from "./../lib/api";
  import { lazyload } from "../actions/lazyload";
  import { fadeIn, fadeOut } from "./../actions/pageFade";
  import { CDN } from "./../config";

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
</style>

<svelte:head>
  <title>Litekart - Contact Us</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
  <Header />
  <div class="flex flex-col my-8 lg:my-32 mb-48 justify-center bg">
    <div class="flex flex-wrap px-2 lg:px-48 lg:mb-12">
      <div class="order-last lg:order-first w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
        <h1 class="text-4xl mb-8 font-bold">Contact Us</h1>
        {#if err}
          <p class="bg-red-200 border p-8 rounded mb-8 font-bold">{err}</p>
        {/if}
        {#if msg}
          <p class="bg-green-200 border p-8 rounded mb-8 font-bold">{msg}</p>
        {/if}
        <form
          novalidate
          on:submit|preventDefault={submit}
          class=" px-2 lg:px-24 flex flex-col leading-loose">
          <Textbox bind:value={email} label="Email" />
          <Textarea bind:value={message} label="Message" />
          <button
            disabled={loading}
            type="submit"
            class="rounded-full w-full px-auto py-1 btn-primary flex
            justify-center disabled:bg-gray-400 button">
            {#if !loading}
              <span>Send</span>
            {:else}
              <img use:lazyload src={`${CDN}../../loading.svg`} alt="" />
              Loading...
            {/if}
          </button>
        </form>
      </div>
      <div class="lg:order-last order-first w-full lg:w-1/2">
        <img
          use:lazyload
          src={`${CDN}../../img/rocket-img-1.png`}
          class="img m-auto mb-2"
          alt="" />
      </div>
    </div>
  </div>
  <Footer />
</main>
