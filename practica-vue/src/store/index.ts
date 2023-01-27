import { createStore } from "vuex";
import productsModule from "./products";
import { Product } from "@/models/product";
import cartModule from "./cart";



export interface IState {
  theProduct: Product | null;  
  token: null;
}

export default createStore({
  state: {
    authUser: null,
    theProduct: null,    
    token: null,
  },
  getters: {},
  mutations: {    
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {
    cart: cartModule,
    products: productsModule,        
  },
});
