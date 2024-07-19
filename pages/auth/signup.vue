<template>
  <div class="flex justify-center my-4">
    <div class="w-4/12 bg-white p-6 rounded-lg">
      <div class="mb-4">
        <label for="name" class="sr-only">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          class="bg-gray-100 border-2 w-full p-4 rounded-lg"
          v-model="name"
        />
      </div>

      <div class="mb-4">
        <label for="username" class="sr-only">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          class="bg-gray-100 border-2 w-full p-4 rounded-lg"
          v-model="username"
        />
      </div>
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
      <div class="mb-4">
        <label for="password_confirmation" class="sr-only"
          >Password again</label
        >
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          placeholder="Repeat your password"
          class="bg-gray-100 border-2 w-full p-4 rounded-lg"
          v-model="confirmed_password"
        />
      </div>

      <div>
        <button
          @click="signup"
          class="bg-blue-500 text-white px-4 py-3 rounded font-medium w-full"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmed_password = ref("");
const cookie = useCookie("my_token");
async function signup() {
  axios
    .post("http://localhost:8000/api/signup", {
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmed_password.value,
    })
    .then((response) => {
      console.log(response);
      cookie.value = response;
    })
    .catch((error) => {
      console.log(error);
    });
  (name.value = ""),
    (username.value = ""),
    (email.value = ""),
    (password.value = ""),
    (confirmed_password.value = "");
  localStorage.setItem("cookie", cookie.value);
}
</script>
