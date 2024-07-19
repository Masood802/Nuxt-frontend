import { defineStore } from "pinia";
export const useRecipieStore = defineStore("recipie", {
  state: () => ({
    recipies: [],
    categories: [],
    cookie: null,
    isAuth: false,
    recipie: [],
  }),
});
