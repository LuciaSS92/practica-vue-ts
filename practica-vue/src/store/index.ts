// import { Product } from "@/models/product";
import { createStore } from "vuex";
import productsModule from "./products";
import { Product } from "@/models/product";
import cartModule from "./cart";

export interface IState {
  theProduct: Product | null;
  user: null,
    token: null,
}

export default createStore({
  state: {
    theProduct: null,
    user: null,
    token: null,
  },
  getters: {},
  mutations: {
    setuser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {
    cart: cartModule,
    products: productsModule,
    // login: loginModule,
  },
});
