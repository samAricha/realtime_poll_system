<script setup>
import {RouterLink} from "vue-router";

</script>


<template>
  <section class="grid md:grid-cols-2 my-6 gap-2 items-center">
    <img src="../assets/poll.png" alt="">
    <div class="p-3">
      <h1 class="text-4xl font-bold">Make your own polling and Share easily with <span class="text-[#4ad97d]">Fast Poll</span></h1>

      <div class="p-2 space-y-3">
        <p >Share your polling and receive your friend polling. Its totally free and you
          are able to get realtime results.</p>
        <div class="grid flex sm:grid-cols-2 items-center">
          <h2 class="text-2xl font-bold">Let's create your own polling app with Fast Poll</h2>

          <div class="sm:p-3 space-y-2">
            <p class="mb-3">Sign up and enjoy the Fast Poll app</p>
            <RouterLink to="/create-poll" >
              <button class="bg-[#4ad97d] text-white rounded-xl p-2 w-full">Create Poll</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>