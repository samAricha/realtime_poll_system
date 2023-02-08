<script setup>

</script>

<template>
  <section class="mx-auto  max-w-xl my-12 p-3">
    <div class="text-center">

      <h1 class="text-2xl">Create a Poll</h1>
      <p>Complete the below fields to create a poll</p>
    </div>

    <form class="border-t-4 border border-primary my-6 rounded-md p-3">

      <div class="space-y-2 my-2 ">

        <label class="block"> Title </label>
        <input type="text"
               class="w-full focus:outline-none p-2 border
          border-gray-408 rounded-md focus:ring-1 ring-primary focus:border-0" required
        placeholder="Type your question here">

        <label class="block">Description</label>
        <textarea type="text"
               class="w-full focus:outline-none p-2 border
          border-gray-408 rounded-md focus:ring-1 ring-primary focus:border-0" required>
        </textarea>

      </div>

    </form>

  </section>

</template>



<style scoped>

</style>