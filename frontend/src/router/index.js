import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/game",
      name: "game",
      component: () => import("../views/TeamplateView.vue"),
    },
  ],
});

export default router;
