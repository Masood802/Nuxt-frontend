<template>
  <div>
    <div
      class="w-full relative h-56 bg-[url('/public/img/bg-4.jpg')] bg-cover bg-center"
    >
      <h1
        class="text-center text-6xl font-extrabold my-3 absolute top-24 left-60 text-white"
      >
        Our Recipies
      </h1>
    </div>
    <div class="grid grid-cols-3 gap-4 w-[90%] mx-auto mt-16">
      <div
        class="shadow-md overflow-hidden flex flex-col h-[500px] my-6 mx-3 items-center justify-center border-0 border-gray-100"
        v-for="recipie in store.recipies"
        :key="recipie.id"
      >
        <img
          :src="`http://localhost:8000/storage/${recipie.picture}`"
          alt=""
          class="w-full h-[45%] rounded-t-md"
        />
        <h1 class="text-xl font-bold my-4 truncate">
          {{ recipie.name }}
        </h1>
        <ProductRatings />
        <p class="text-sm my-5 px-8 leading-6">
          A simple and easy to made recipie with minimal ingrediants and
          refreshing and good pricing.
        </p>
        <p class="px-8 text-sm">By Masood Malik</p>
        <div class="w-full flex justify-between items-center mt-6 h-10">
          <NuxtLink
            to=""
            class="border-t border-gray-300 p-3 w-[50%] border text-center text-gray-600 text-sm font-mono"
          >
            {{ recipie.category }}
          </NuxtLink>
          <NuxtLink
            :to="`/recipies/${recipie.id}`"
            class="border border-gray-300 p-3 w-[50%] text-center text-gray-600 text-sm font-mono"
          >
            view
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let page = ref(1);
const store = useRecipieStore();
</script>
