<script setup>
import {RouterLink} from "vue-router";

</script>


<template>
  <header class="flex items-center justify-between p-4 b-white shadow-lg">
    <h1 class="text-xl">
      Fast<span class="text-[#4ad97d] ">Poll</span>
    </h1>
    <RouterLink to="/create-poll">
      <button class="bg-[#4ad97d] p-2 rounded-md text-white">Create Poll</button>
    </RouterLink>
    <div class="flex items-center justify-evenly space-x-3">
      <RouterLink to="/public-polls" >
        <button class="text-red-500">Public Polls</button>
      </RouterLink>
      <div class="space-x-2 border-l border-gray-300 px-3">
        <RouterLink to="/login" >
          <button class="text-gray-600">Login</button>
        </RouterLink>
        <RouterLink to="/signup" >
          <button class="bg-[#4097fe] text-white p-2 rounded-md"> Signup</button>
        </RouterLink>
      </div>
    </div>

  </header>
</template>


<style scoped>

</style>