<template>
  <div>
    <header>
      <nav class="bg-gray-100 w-full h-12 text-semibold flex justify-between">
        <ul class="flex font-semibold items-center w-[30%] ml-20 text-gray-600">
          <li
            class="p-3 text-2xl hover:text-orange-600 transition-all duration-400 ease-in"
          >
            <font-awesome :icon="faYoutube" />
          </li>
          <li
            class="p-3 text-2xl hover:text-orange-600 transition-all duration-400 ease-in"
          >
            <font-awesome :icon="faFacebook" />
          </li>
          <li
            class="p-3 text-2xl hover:text-orange-600 transition-all duration-400 ease-in"
          >
            <font-awesome :icon="faInstagram" />
          </li>
          <li
            class="p-3 text-2xl hover:text-orange-600 transition-all duration-400 ease-in"
          >
            <font-awesome :icon="faTwitter" />
          </li>
        </ul>

        <div
          v-if="store.isAuth"
          class="flex font-semibold items-center mr-20 text-gray-600"
        >
          <h2
            class="p-3 hover:text-orange-600 transition-all duration-400 ease-in"
          >
            Welcome {{ store?.cookie?.data?.user?.username }}
          </h2>
          <button
            @click="logout"
            class="p-3 hover:text-orange-600 transition-all duration-400 ease-in"
          >
            logout
          </button>
        </div>
        <div v-else class="flex font-semibold items-center mr-20 text-gray-600">
          <NuxtLink
            to="/auth/signup"
            class="p-3 hover:text-orange-600 transition-all duration-400 ease-in"
            >Register</NuxtLink
          >
          <NuxtLink
            to="/auth/signin"
            class="p-3 hover:text-orange-600 transition-all duration-400 ease-in"
            >Login</NuxtLink
          >
        </div>
      </nav>
      <a href="/">
        <div class="h-24 shadow-sm mb-4 flex items-center justify-center">
          <div class="flex items-center">
            <img src="../public/img/cooking.png" alt="" class="w-14 mr-1" />
            <div>
              <h1 class="text-xl font-bold font-serif -mb-1">
                Masood's Recipies
              </h1>
              <p class="text-[14px] font-semibold">
                A Home of Delicius Recipies
              </p>
            </div>
          </div>
        </div>
      </a>
      <div class="h-16 flex justify-center items-center">
        <nuxt-link
          to="/"
          class="p-3 m-2 font-semibold hover:text-orange-600 transition-all duration-300 ease-in"
          >Home</nuxt-link
        >
        <nuxt-link
          to="/recipies"
          class="p-3 m-2 font-semibold hover:text-orange-600 transition-all duration-300 ease-in"
          >Recipies</nuxt-link
        >
        <nuxt-link
          to="/recipies/add-recipie"
          class="p-3 m-2 font-semibold hover:text-orange-600 transition-all duration-300 ease-in"
          >Add Recipies</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="p-3 m-2 font-semibold hover:text-orange-600 transition-all duration-300 ease-in"
          >Contact</nuxt-link
        >
      </div>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <div
        class="w-full bg-[url('/public/img/bg2.jpg')] shadow-md bg-cover bg-center text-white flex justify-between items-center h-[300px] mt-6"
      >
        <div class="w-[35%] border-r border-gray-50 h-full flex flex-col">
          <h1 class="text-xl text-white mt-24 ml-24 font-bold">Subscribe</h1>
          <p class="text-sm ml-24 my-4 mr-6">
            Register youself to get notified about exclusive offers and new
            recipies
          </p>
          <NuxtLink
            to="/auth/signup"
            class="bg-lime-600 text-white text-center rounded-sm w-40 h-8 p-1 ml-24"
            >Register</NuxtLink
          >
        </div>
        <div class="w-[25%] h-full flex flex-col text-white">
          <nuxt-link to="/" class="text-xl text-white mt-24 ml-24 font-bold"
            >Explore</nuxt-link
          >
          <nuxt-link to="/recipies" class="ml-24 text-base mt-4"
            >Recipies</nuxt-link
          >
          <nuxt-link to="/recipies/add-recipie" class="ml-24 text-base"
            >Add Recipie</nuxt-link
          >
          <nuxt-link to="#" class="ml-24 text-base">latest News</nuxt-link>
          <nuxt-link to="/contact" class="ml-24 text-base">Contact</nuxt-link>
        </div>
        <div
          class="w-[35%] border-l border-gray-50 h-full flex flex-col text-white"
        >
          <h1 class="text-xl text-white mt-24 ml-24 font-bold">Contact</h1>
          <h2 class="ml-24 text-base mt-4">
            <font-awesome :icon="faAddressBook" class="mx-2" />
            Street 5,Iqbal Raod Rawalpindi
          </h2>
          <h2 class="ml-24 text-base">
            <font-awesome :icon="faEnvelope" class="mx-2" />
            xyz@gmail.com
          </h2>
          <h2 class="ml-24 text-base">
            <font-awesome :icon="faPhone" class="mx-2" />
            +9231315512536
          </h2>
        </div>
      </div>
      <div class="bg-neutral-800 w-full h-20 flex items-center justify-between">
        <h3 class="text-white ml-10">All rights reserved @The Appmakers</h3>
        <ul class="flex font-semibold items-center w-[30%] ml-20 text-lime-700">
          <li
            class="p-3 text-2xl hover:text-blue-600 transition-all duration-400 ease-in"
          >
            <font-awesome :icon="faFacebook" class="mx-2" />
          </li>
          <li
            class="p-3 text-2xl hover:text-blue-600 transition-all duration-400 ease-in"
          >
            <font-awesome :icon="faTwitter" class="mx-2" />
          </li>
          <li
            class="p-3 text-2xl hover:text-pink-600 transition-all duration-400 ease-in"
          >
            <font-awesome :icon="faInstagram" class="mx-2" />
          </li>
          <li
            class="p-3 text-2xl hover:text-red-700 transition-all duration-400 ease-in"
          >
            <font-awesome :icon="faYoutube" class="mx-2" />
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup>
const store = useRecipieStore();
import {
  faCircle,
  faAddressBook,
  faEnvelope,
  faPhone,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
watchEffect(() => {
  if (store.cookie) {
    store.isAuth = true;
  } else {
    store.isAuth = false;
  }
});
async function logout() {
  console.log(store.cookie.data.token);
  const result = await $fetch("http://localhost:8000/api/logout", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${store.cookie.data.token}`,
    },
  });
  store.cookie = null;
  console.log(result);
}
</script>
