<template>
  <div>
    <div
      class="w-full relative h-72 bg-[url('/public/img/contact1.jpg')] bg-cover bg-center"
    >
      <h1
        class="text-center text-6xl font-extrabold my-3 absolute top-24 left-24 text-white"
      >
        Contact Us
      </h1>
    </div>
    <div
      class="w-full h-72 mt-4 text-xl text-white grid grid-cols-3 gap-2 px-10 justify-items-center items-center"
    >
      <div
        class="bg-neutral-600 h-[80%] w-full flex items-center justify-center"
      >
        <font-awesome :icon="faAddressBook" class="px-1" />
        <h2>Street 5,Iqbal Raod Rawalpindi</h2>
      </div>
      <div
        class="bg-neutral-600 h-[80%] w-full flex items-center justify-center"
      >
        <h2 class="">
          <font-awesome :icon="faEnvelope" class="px-1" />
          xyz@gmail.com
        </h2>
      </div>
      <div
        class="bg-neutral-600 h-[80%] w-full flex items-center justify-center"
      >
        <h2 class="">
          <font-awesome :icon="faPhone" class="px-1" />
          +9231315512536
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  faEnvelope,
  faAddressBook,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
</script>
