import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProductView from '../views/ProductView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'products',
    component: ProductView
  },
  {
    path: '/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (profile.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  }
 ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router




// import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/profile',
//     name: 'profile',
//     beforeEnter: [haveRoleGuard],
    
//     component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
//   },
//   {
//     path: '/products',
//     name: 'products',
//     beforeEnter: [haveRoleGuard],
    
//     component: () => import(/* webpackChunkName: "profile" */ '../views/ProductView.vue')
//   },
//   {
//     path: "/detail/:id",
//     name: "detail",
//     component: () =>
//       import(/*webpackChunkName: detail*/ "../views/DetailView.vue"),
//     props: (route) => {
//       const id = Product(route.params.id);
//       const productRole = localStorage.getItem("productRole");
//       return isNaN(id) ? { id: null, productRole } : { id, productRole };
//     },
//   },
//   {
//     path: "/:pathMatch(.*)",
//     component: import(/*webpackChunkName: notFound*/ "../views/NotFound.vue"),
//   },
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

// export default router
