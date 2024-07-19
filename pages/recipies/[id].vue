<template>
  <div>
    <h1
      class="text-center text-6xl my-3 font-extrabold border-t border-gray-200 py-6"
    >
      {{ store.recipie.name }}
    </h1>
    <div class="flex items-center justify-center text-2xl flex-col">
      <h2 class="text-xl font-light text-lime-500 py-4">
        {{ store.recipie.category }}
      </h2>
      <ProductRatings />
    </div>
    <div
      class="w-[70%] mx-auto flex item-center justify-center h-[500px] overflow-hidden rounded-lg shadow-md"
    >
      <img
        :src="`http://localhost:8000/storage/${store.recipie.picture}`"
        alt=""
        class="w-full hover:scale-105 transition-all duration-500 ease-in-out"
      />
    </div>
    <div class="bg-slate-50 flex items-center justify-center flex-col">
      <h1 class="text-2xl font-mono text-center py-10">Main Ingredients</h1>
      <p class="text-center border-2 border-gray-100 w-[70%] mx-auto py-8">
        {{ store.recipie.ingredients }}
      </p>
      <h2 class="text-2xl font-mono text-center py-4">Instructions</h2>
      <p class="text-center border-2 border-gray-100 w-[70%] mx-auto py-4">
        {{ store.recipie.instruction }}
      </p>
      <a
        :href="store.recipie.link"
        target="_blank"
        class="bg-orange-600 px-16 py-3 text-white rounded-sm mx-auto my-4"
        ><i class="fa-brands fa-youtube"></i> Watch</a
      >
      <NuxtLink
        to="/recipies"
        class="text-white w-44 text-center px-4 py-3 bg-lime-700 mx-auto"
        >Back</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
import ProductRatings from "~/components/ProductRatings.vue";
import axios from "axios";
const store = useRecipieStore();

const { id } = useRoute().params;
onBeforeMount(() => {
  get();
});
async function get() {
  axios.get(`http://localhost:8000/api/recipies/${id}`).then((response) => {
    store.recipie = response.data.recipie;
  });
}
</script>

<style scoped></style>
