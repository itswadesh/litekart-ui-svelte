<script>
  import Header from "./../components/Header.svelte";
  import Footer from "./../components/Footer.svelte";
</script>

<style>
  .teacher {
    background-color: #ed64a6;
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
</style>

<Header />
<div class="teacher flex justify-around p-10">
  <!-- student 1 -->
  <div class="text-center border rounded shadow-lg bg-white p-12">
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
    <button class=" bg-green-800 text-white rounded p-2">Get Started</button>
  </div>
  <!-- student 1 -->
  <!-- student 2 -->
  <div class="text-center border rounded shadow-lg bg-white p-12">
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
    <button class="bg-indigo-700 text-white rounded p-2">Get Started</button>
  </div>
  <!-- student 2 -->
  <!-- student 3 -->
  <div
    class=" text-center shadow-lg border hover shadow:lg rounded bg-white p-12">

    <h1 class="sky text-3xl mb-6">1 Year Pay For 200$</h1>
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
    <button class="bg-blue-700 text-white p-2 rounded ">Get Started</button>
  </div>
  <!-- student 3 -->
</div>
<Footer />
