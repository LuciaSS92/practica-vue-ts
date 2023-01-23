// import { Product } from "@/models/product";
import { createStore } from "vuex";
import productsModule from "./products";
import { Product } from "@/models/product";

export interface IState {
  products: Product | null;
}

export default createStore({
  state: {
    products: null,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    products: productsModule,
  },
});
