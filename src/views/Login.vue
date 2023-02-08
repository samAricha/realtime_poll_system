<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { auth } from "@/firebaseConfig";

import { signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider} from "firebase/auth";

import { ref, computed, onBeforeMount } from "vue";
import {useRouter} from "vue-router";



//credentials
const router = useRouter()
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const twitterProvider = new TwitterAuthProvider()
console.log(auth.currentUser)
const formDetails = ref({
  email: '',
  password: ''
})


const user = computed(() => {
  return auth.currentUser
})

onBeforeMount(() => {

  if(auth.currentUser) {

    router.push({  path: '/create-poll' })

  }

})

//METHODS
//sign-in with email and password
const emailPasswdLogin = () => {

  signInWithEmailAndPassword(
      auth,
      formDetails.value.email,
      formDetails.value.password)
      .then((userCredential) => {

        // Signed in
        const user = userCredential.user
        formDetails.value = {
          email: '',
          password: ''
        }

        alert(user+" logged in")

        router.push({
          path: '/create-poll'
        })

      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)

      }
      );
}

//log-in with google
const googleSignIn = () => {
  signInWithPopup(auth, googleProvider)
      .then(() => {
        router.push({
          path: '/create-poll'
        })
      })
      .catch(error => {
        console.log(error.message)
      })
}


//log-in with github
const githubSignIn = () => {
  signInWithPopup(auth, githubProvider)
      .then((user) => {
        console.log(user)
        router.push({
          path: '/create-poll'
        })
      })
      .catch(error => {
        console.log(error.message)
      })
}


//log-in with twitter
const twitterSignIn = () => {
  signInWithPopup(auth, twitterProvider)
      .then(() => {

        router.push({
          path: '/create-poll'
        })

      })
      .catch(error => {
        console.log(error.message)
      })
}



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
      <form @submit.prevent="emailPasswdLogin"
          class="mx-auto max-w-md p-4 space-y-2
      border-t-2 border border-t-primary
      rounded-md my-10">
        <div class="space-y-2 my-2 ">
          <label class="block">Email</label>
          <input type="text"
                 v-model="formDetails.email"
                 class="w-full focus:outline-none p-2 border
          border-gray-408 rounded-md focus:ring-1 ring-primary focus:border-0" >
        </div>

        <div class="space-y-2 my-1 ">
          <label class="block">Password</label>
          <input type="password"
                 v-model="formDetails.password"
                 class="w-full focus:outline-none p-2 border
          border-gray-408 rounded-md focus:ring-1 ring-primary focus:border-0">
        </div>

          <button type="submit" class="w-full bg-primary p-1 px-3 rounded-md text-white">
            Log in
          </button>

        <div>
          <div class="flex items-center space-x-3">
            <div class="w-full h-[2px] bg-gray-300"></div>
            <p class="shrink-0">Or Continue with</p>
            <div class="w-full h-[2px] bg-gray-300"></div>
          </div>

          <div class="flex item-center justify-evenly my-5">

            <div @click="googleSignIn" class="flex items-center
          space-x-2
          border border-gray-400 p-3 rounded-md
          justify-center cursor-pointer">
              <FontAwesomeIcon :icon="['fab', 'google']" class="w-6 h-6 text-primary"/>
              <p>Google</p>
            </div>
            <div @click="githubSignIn" class="flex items-center
          space-x-2
          border border-gray-400 p-3 rounded-md
          justify-center cursor-pointer">
              <FontAwesomeIcon :icon="['fab', 'github']" class="w-6 h-6 text-primary"/>
              <p>GitHub</p>
            </div>
            <div @click="twitterSignIn" class="flex items-center
          space-x-2
          border border-gray-400 p-3 rounded-md
          justify-center cursor-pointer">
              <FontAwesomeIcon :icon="['fab','twitter']" class="w-6 h-6 text-primary"/>
              <p>Twitter</p>
            </div>
          </div>

        </div>

      </form>
    </div>
  </section>

</template>



<style scoped>

</style>