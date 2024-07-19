<template>
  <div>
    <div class="flex justify-center flex-col">
      <h1 class="text-center text-2xl font-bold mx-auto my-2">
        Add New Recipie
      </h1>
      <div class="w-4/12 bg-white p-6 rounded-lg my-4 mx-auto">
        <form
          action="http://localhost:8000/api/add-recipie"
          method="post"
          enctype="multipart/form-data"
          @submit="redirect"
        >
          <div class="mb-4">
            <label for="name" class="sr-only">RecicpieName</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Recipie Name"
              class="bg-gray-100 border-2 w-full p-4 rounded-lg"
              value=""
            />
          </div>
          <div class="mb-4">
            <label for="category" class="sr-only">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Enter Category (Beef,Chicken,Lamb,Seafood...)"
              class="bg-gray-100 border-2 w-full p-4 rounded-lg"
              value=""
            />
          </div>
          <div class="mb-4">
            <textarea
              name="ingredients"
              cols="30"
              rows="5"
              placeholder="Enter the Ingredients for the reciepie"
              class="bg-gray-100 border-2 pl-2 w-full h-24 rounded-lg"
              value=""
            ></textarea>
          </div>
          <div class="mb-4">
            <textarea
              name="instruction"
              cols="30"
              rows="5"
              placeholder="Enter the instructions for reciepie"
              class="bg-gray-100 border-2 pl-2 w-full h-24 rounded-lg"
              value=""
            ></textarea>
          </div>
          <div class="mb-4">
            <label for="link" class="sr-only">Video URL</label>
            <input
              type="text"
              name="link"
              id="link"
              placeholder="Enter youtube link of the recipie"
              class="bg-gray-100 border-2 w-full p-4 rounded-lg"
              value=""
            />
          </div>
          <div class="mb-4">
            <input type="file" name="picture" />
          </div>
          <div>
            <button
              type="submit"
              class="bg-lime-600 text-white px-4 py-3 rounded font-medium w-full"
            >
              Add Recipie
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
async function redirect() {
  router.push("/");
}
</script>

<style></style>
