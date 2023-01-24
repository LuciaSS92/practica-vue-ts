// import { Product } from "@/models/product";
import { createStore } from "vuex";
import productsModule from "./products";
import { Product } from "@/models/product";
import cartModule from "./cart";

export interface IState {
  theProduct: Product | null;
}

export default createStore({
  state: {
    theProduct: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cart: cartModule,
    products: productsModule,
  },
});
