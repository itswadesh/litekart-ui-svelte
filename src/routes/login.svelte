<script>
  import { fadeIn, fadeOut } from "./../actions/pageFade";
</script>

<style>
  .full {
    background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
  }
  .goo {
    background-color: #2196f3;
  }
  .submit {
    background-color: #3fcc3f;
  }
  .card {
    width: 500px;
  }
</style>

<svelte:head>
  <title>Litekart - Login</title>
</svelte:head>
<main in:fadeIn out:fadeOut>
  <div class="flex justify-center full">
    <div
      class="flex justify-center pb-12 m-12 bg-white rounded-lg shadow-lg card ">
      <div class="flex flex-col ">
        <h1 class="p-12 text-4xl text-center text-gray-600 ">Sign-In</h1>
        <button class="p-2 m-2 text-white bg-indigo-500 rounded shadow ">
          FACEBOOK
        </button>
        <button class="p-2 m-2 text-white rounded shadow goo">GOOGLE</button>
        <h2 class="m-6 text-center text-gray-500 cursor-pointer">or</h2>
        <input
          class="p-2 mb-4 border rounded shadow-2xl"
          type="Email or mobile number "
          placeholder="Email or mobile number"
          size="15"
          maxlength="60" />
        <input
          class="p-2 mb-4 border rounded shadow-2xl"
          type="password"
          placeholder="Password"
          size="15"
          maxlength="30" />
        <button class="p-2 text-white rounded shadow submit">SIGN IN</button>
        <div class="flex justify-around">
          <button class="p-2 text-gray-500">Forget Password</button>
          <button class="p-2 text-gray-500">Create A New Account</button>
        </div>
      </div>
    </div>
  </div>
</main>
