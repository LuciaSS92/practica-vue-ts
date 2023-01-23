import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/products",
    name: "products",

    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductView.vue"),
  },
  {
    path: "/products/:id",
    name: "detail",
    component: () =>
      import(/*webpackChunkName: "detail"*/ "../views/DetailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      const productRole = localStorage.getItem("productRole");
      return isNaN(id) ? { id: null, productRole } : { id, productRole };
    },
  },
  {
    path: "/profile",
    name: "profile",

    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ProfileView.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: import(/*webpackChunkName: "notFound"*/ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

