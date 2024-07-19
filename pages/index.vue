<template>
  <div>
    <!-- Image and text -->
    <div class="relative w-full">
      <img src="../public/img/image1.jpg" alt="" class="h-auto w-full" />
      <span
        class="text-8xl text-white top-[35%] left-[20%] absolute font-extrabold"
        >Lets</span
      >
      <h1
        class="text-8xl text-white absolute top-[47%] left-[28%] font-extrabold"
      >
        Enjoy our
      </h1>
      <span
        class="text-white text-8xl top-[60%] left-[35%] absolute font-extrabold"
        >Delicius Recipies</span
      >
    </div>
    <!-- Category section -->
    <p class="text-center text-orange-600 font-light text-xl mt-4 pt-12">
      Choose a Category
    </p>
    <h1 class="text-6xl font-extrabold text-center my-2 text-gray-700">
      Our Categories
    </h1>
    <div class="flex justify-between items-center h-32 w-[90%] mx-auto my-12">
      <NuxtLink to="" v-for="category in store.categories" :key="category.id">
        <div class="flex items-center flex-col">
          <img
            :src="category.image"
            alt=""
            class="p-2 hover:scale-110 transition-all duration-500 ease-in-out w-28"
          />
          <h1 class="text-xl font-semibold py-2">{{ category.name }}</h1>
        </div>
      </NuxtLink>
    </div>
    <!-- Recipies section -->

    <p class="text-center text-orange-600 font-light text-xl mt-4 pt-12">
      Our Papular Recipies
    </p>
    <h1 class="text-6xl font-extrabold text-center my-2 text-gray-700">
      Recipies
    </h1>
    <div class="grid grid-cols-3 gap-4 w-[90%] mx-auto mt-6">
      <div
        class="shadow-md overflow-hidden flex flex-col h-[500px] my-6 mx-3 items-center justify-center border-0 border-gray-100"
        v-for="recipie in store.recipies.slice(0, 6)"
        :key="recipie.id"
      >
        <img
          :src="`http://localhost:8000/storage/${recipie.picture}`"
          alt=""
          class="w-full h-[45%] rounded-t-md"
        />
        <h1 class="text-xl font-bold my-5 px-8 truncate">
          {{ recipie.name }}
        </h1>
        <ProductRatings />
        <p class="text-sm my-5 px-8 leading-6">
          A simple and easy to made recipie with minimal ingrediants and
          refreshing and good pricing.
        </p>

        <p class="px-8 text-sm">By Masood Malik</p>
        <div class="w-full flex justify-between items-center mt-6 h-10">
          <p
            class="border border-gray-300 p-3 w-[50%] border-r text-center text-gray-600 text-sm font-mono"
          >
            {{ recipie.category }}
          </p>
          <NuxtLink
            :to="`/recipies/${recipie.id}`"
            class="border border-gray-300 p-3 w-[50%] text-center text-gray-600 text-sm font-mono"
          >
            view
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- button to view all recipies -->
    <div class="w-full flex items-center justify-center my-6 py-8">
      <NuxtLink
        to="/recipies"
        class="bg-lime-600 text-white text-center rounded-md w-40 h-10 px-4 py-2"
      >
        View All Recipies</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import { faCircle, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
const store = useRecipieStore();
onBeforeMount(() => {
  getrecipies();
  getcategories();
});
async function getcategories() {
  axios.get("http://localhost:8000/api/categories").then((response) => {
    store.categories = response.data.categories;
  });
}
async function getrecipies() {
  axios.get("http://localhost:8000/api/recipies").then((response) => {
    store.recipies = response.data.recipies;
  });
}
</script>
