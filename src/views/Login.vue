<script setup>
import GoogleSvg from "@/components/icons/GoogleSvg.vue";
import GitHubSvg from "@/components/icons/GitHubSvg.vue";
import TwitterSvg from "@/components/icons/TwitterSvg.vue";
</script>

<template>

  <section class="mx-auto max-w-xl mw-16 p-3">
    <div class="flex justify-center items-center my-5">
      <img src="../assets/Vote.svg" alt="" class="w-[200px]">
    </div>
    <div>
      <div class="text-center">
        <h1 class="text-xl sm:text-2xl text-bold">Log in to your account</h1>
        <p class="my-2">
          Or
          <RouterLink to="/signup">
            <button class="text-primary">create a free account</button>
          </RouterLink>
        </p>
      </div>
      <form class="mx-auto max-w-md p-4 space-y-2
      border-t-2 border border-t-primary
      rounded-md my-10">
        <div class="space-y-2 my-2 ">
          <label class="block">Email</label>
          <input type="text" class="w-full focus:outline-none p-2 border
          border-gray-408 rounded-md focus:ring-1 ring-primary focus:border-0">
        </div>

        <div class="space-y-2 my-1 ">
          <label class="block">Password</label>
          <input type="text" class="w-full focus:outline-none p-2 border
          border-gray-408 rounded-md focus:ring-1 ring-primary focus:border-0">
        </div>

        <button class="w-full bg-primary p-1 px-3 rounded-md text-white">Log in</button>
        <div>
          <div class="flex items-center space-x-2">
            <div class="w-full h-[2px] bg-gray-300"></div>
            <p class="shrink-0">Or Continue with</p>
            <div class="w-full h-[2px] bg-gray-300"></div>
          </div>
          <div class="flex item-center justify-evenly">
            <div class="flex items-center
          space-x-2
          border border-gray-400 p-3 rounded-md
          justify-center">
              <GoogleSvg/><p>Google</p>
            </div>
            <div class="flex items-center
          space-x-2
          border border-gray-400 p-3 rounded-md
          justify-center">
              <GitHubSvg/><p>GitHub</p>
            </div>
            <div class="flex items-center
          space-x-2
          border border-gray-400 p-3 rounded-md
          justify-center">
              <TwitterSvg/> <p>Twitter</p>
            </div>
          </div>


        </div>

      </form>
    </div>
  </section>

</template>



<style scoped>

</style>