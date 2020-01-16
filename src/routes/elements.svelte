<script>
  let products = [
    "element-1.jpg",
    "element-2.jpg",
    "element-3.jpg",
    "element-4.jpg"
  ];
</script>

<style>

</style>

<div class="flex flex-wrap m-2 lg:m-16">
  {#each products as p}
    <div class="p-4 w-full sm:1/2 mv:w-1/3 lg:w-1/4">
      <div class="flex flex-col border rounded-lg shadow-lg ">
        <img src={`img/${p}`} alt="" class=" " />
        <div class=" flex p-4 ">
          <div class="flex flex-col ">
            <div class="font-bold text-xs tracking-wider text-black">
              Create a unique Brand presense with a custom
            </div>
            <div class="text-xs tracking-wide font-bold ">
              Abandonned cart & Wishlist feature
            </div>
          </div>
          <div class="flex flex-row p-3 ">
            <img src="svg/share.svg" alt="" class="h-8 m-3 " />
            <img src="download.svg" alt="" class="h-8 m-3 " />
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
