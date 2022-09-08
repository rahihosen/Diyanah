import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";

const router = createRouter({
  history: createWebHistory("/"),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/index.vue"),
    },
    {
      path: "/products",
      name: "product.index",
      component: () => import("../views/product.vue"),
    },
    {
      path: "/products/:categoryId",
      name: "product.show",
      component: () => import("../views/cat_product.vue"),
    },
    {
      path: "/checkout",
      name: "checkout.index",
      component: () => import("../views/checkout.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("../views/contact-us.vue"),
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import("../views/demo.vue"),
    },
    {
      path: "/search/:productName",
      name: "search",
      component: () => import("../views/search.vue"),
    },
    // {
    // 	path: '/login',
    // 	name: 'login',
    // 	component: () => import('../views/login.vue'),
    // }
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "error.404",
    //     component: () =>
    //         import ("../views/Error/404.vue"),
    // }
  ],
});

// guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
