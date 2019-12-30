<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
</script>

<style>
  .teacher {
    background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
  }
  .voulate {
    color: rgb(106, 42, 196);
  }
  .sky {
    color: rgb(5, 213, 255);
  }
  .green {
    color: rgb(45, 182, 45);
  }
  .gs-1 {
    background-color: rgb(45, 182, 45);
  }
  .gs-2 {
    background-color: rgb(106, 42, 196);
  }
  .gs-3 {
    background-color: rgb(5, 213, 255);
  }
  .c1 {
    border-top-width: 16px;
    border-color: rgb(45, 182, 45);
  }
  .c2 {
    border-top-width: 16px;
    border-color: rgb(106, 42, 196);
  }
  .c3 {
    border-top-width: 16px;
    border-color: rgb(5, 213, 255);
  }
</style>

<svelte:head>
  <title>Litekart - Pricing & fees</title>
</svelte:head>

<Header />
<div class="teacher flex flex-wrap justify-center">
  <!-- student 1 -->
  <div
    class="c1 flex flex-col mb-3 lg:my-12 lg:mr-8 justify-between text-center
    border-0 rounded-lg shadow-lg bg-white p-10 lg:p-8">
    <h1 class="green text-3xl mb-6">Free 1 Month For Trial</h1>
    <div class="text-center">
      <ul class="text-gray-600">
        <li class="mb-4">Persional Account</li>
        <li class="mb-4">Unlimited Public Scopes</li>
        <li class="mb-4">Up to 3 free private scopes</li>
        <li class="mb-4">Community Support</li>
        <li class="mb-4">Shared Component CI</li>
      </ul>
    </div>
    <button class="gs-1 text-white p-2 rounded shadow-lg ">Get Started</button>
  </div>
  <!-- student 1 -->
  <!-- student 2 -->
  <div
    class="c2 flex flex-col mb-3 lg:my-12 lg:mr-8 justify-between text-center
    border-0 rounded-lg shadow-lg bg-white p-8">
    <h2 class="voulate text-3xl mb-6">6 Months Pay For 130$</h2>
    <div class="text-center">
      <ul class="text-gray-600">
        <li class="mb-4">Organizatio Account</li>
        <li class="mb-4">Unlimited Public Scopes</li>
        <li class="mb-4">Unlimited Private Scopes</li>
        <li class="mb-4">Primium Suport With 3 Days</li>
        <li class="mb-4">Responsive Time</li>
        <li class="mb-4">Priority Component CI</li>
      </ul>
    </div>
    <button class="gs-2 text-white p-2 rounded shadow-lg">Get Started</button>
  </div>
  <!-- student 2 -->
  <!-- student 3 -->
  <div
    class="c3 flex flex-col mb-3 lg:my-12 justify-between text-center shadow-lg
    border-0 shadow:lg rounded-lg bg-white p-10 lg:p-8">
    <h1 class="sky text-3xl mb-6">1 Year Pay For m 200$</h1>
    <div class="text-center">
      <ul class="text-gray-600">
        <li class="mb-4">Organization Account</li>
        <li class="mb-4">Unlimited Private Scopes</li>
        <li class="mb-4">Unlimited Public Scopes</li>
        <li class="mb-4">Primium 24/5 Support With 8</li>
        <li class="mb-4">Hours Responsive Time.</li>
        <li class="mb-4">99.95% Uptime SLA</li>
        <li class="mb-4">Dedicated Component CI</li>
      </ul>
    </div>
    <button class="gs-3 text-white p-2 rounded shadow-lg ">Get Started</button>
  </div>
  <!-- student 3 -->
</div>
<Footer />
