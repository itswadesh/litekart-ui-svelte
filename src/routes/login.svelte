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

<div class="full flex justify-center">
  <div
    class="card rounded-lg shadow-lg flex bg-white m-12 pb-12 justify-center ">
    <div class="flex flex-col ">
      <h1 class="text-center text-gray-600 text-4xl p-12 ">
        <b>Sign-In</b>
      </h1>
      <button class="bg-indigo-500 shadow rounded text-white p-2 m-2 ">
        <b>FACEBOOK</b>
      </button>
      <button class="goo text-white shadow rounded p-2 m-2">
        <b>GOOGLE</b>
      </button>
      <h2 class="text-center text-gray-500 m-6 cursor-pointer">or</h2>
      <input
        class="mb-4 shadow-2xl border rounded p-2"
        type="Email or mobile number "
        placeholder="Email or mobile number"
        size="15"
        maxlength="60" />
      <input
        class="mb-4 shadow-2xl border rounded p-2"
        type="password"
        placeholder="Password"
        size="15"
        maxlength="30" />
      <button class="submit shadow text-white p-2 rounded">
        <b>SIGN IN</b>
      </button>
      <div class="flex justify-center justify-around">
        <button class="text-gray-500 p-2">Forget Password</button>
        <button class="text-gray-500 p-2">Create A New Account</button>
      </div>
    </div>
  </div>
</div>
