import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { ICartState } from "./state";

const mutations: MutationTree<ICartState> = {
  addElement(state, element: Product) {
    state.products.push(element);
  },
  removeElement(state, element: Product) {
    const tmp = state.products.filter((p) => p.id !== element.id);
    state.products = tmp;
  },
  toggleCart(state) {
    state.isOpen = !state.isOpen;
  },
};

export default mutations;
