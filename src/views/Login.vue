<script setup>

</script>

<template>
  <section class="mx-auto max-w-xl mw-16 p-3">
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

    </form>

  </section>

</template>



<style scoped>

</style>