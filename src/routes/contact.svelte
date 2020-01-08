<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
  import Textbox from "./../components/ui/Textbox.svelte";
  import Textarea from "./../components/ui/Textarea.svelte";
</script>

<Header />
<div class="flex flex-col my-32 mb-48 justify-center bg">
  <div class="flex flex-wrap px-2 lg:px-48 lg:mb-12">
    <div class="order-last lg:order-first w-full lg:w-1/2 pr-0 lg:pr-12 mb-8">
      <h1 class="text-4xl mb-8 font-bold">Contact Us</h1>
      <p class=" px-24 lg:px-2 flex flex-col leading-loose">
        <Textbox label="Email" />
        <Textarea label="Message" />
        <button
          type="submit"
          class="rounded-full w-full px-auto py-1 btn-primary button">
          <span>Send</span>
        </button>
      </p>
    </div>
    <div class="lg:order-last order-first w-full lg:w-1/2">
      <img src={`/img/rocket-img-1.png`} class="img m-auto mb-2" alt="" />
    </div>
  </div>
</div>
<Footer />
