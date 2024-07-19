<template>
  <div class="flex justify-center my-4">
    <div class="w-4/12 bg-white p-6 rounded-lg">
      <div class="mb-4">
        <label for="email" class="sr-only">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Your email"
          class="bg-gray-100 border-2 w-full p-4 rounded-lg"
          v-model="email"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="sr-only">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Choose a password"
          class="bg-gray-100 border-2 w-full p-4 rounded-lg"
          v-model="password"
        />
      </div>
      <div>
        <button
          @click="signin"
          class="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full"
        >
          signin
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const email = ref("");
const password = ref("");
const store = useRecipieStore();
const cookie = useCookie("my_token");
async function signin() {
  axios
    .post("http://localhost:8000/api/signin", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      cookie.value = response;
      console.log(cookie.value);
      store.cookie = cookie.value;
    })
    .catch((error) => {
      console.log(error);
    });
  email.value = "";
  password.value = "";
  localStorage.setItem("cookie", cookie.value);
}
</script>
