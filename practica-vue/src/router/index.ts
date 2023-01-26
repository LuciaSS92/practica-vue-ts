import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import haveRoleGuard from "./role-guard";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/products",
    name: "products",
    beforeEnter: [haveRoleGuard],
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/ProductView.vue"),
  },
  {
    path: "/products/:id",
    name: "detail",
    beforeEnter: [haveRoleGuard],
    component: () =>
      import(/*webpackChunkName: "detail"*/ "../views/DetailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      // const productRole = localStorage.getItem("productRole");
      return isNaN(id) ? { id: null,  } : { id,} ;
    },
  },
  {
    path: "/auth/profile",
    name: "profile",
    beforeEnter: [haveRoleGuard],
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

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   if (to.meta.Auth && !window.localStorage.getItem(‘_token’)) {
//      next({ path: ‘/login’ });
//   } else {
//      next();
//   }
// });

export default router;

