import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/Home.vue";
import Banner from "../views/Banner/Banner.vue";
import Search from "../views/Search/Search.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Banner",
    name: "Banner",
    component: Banner,
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
