// OPCIONAL: al final!!!

import { Product } from "@/models/product";
import { computed } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
  const store = useStore();

  return {
    // getters
    cartItems: computed(() => store.getters["cart/getCartElements"]),
    isCartOpen: computed(() => store.getters["cart/getIsOpen"]),

    // mutations
    addElementToCart: (product: Product) => store.commit("cart/addElement", product),
    removeElementFromCart: (product: Product) =>
      store.commit("cart/removeElement", product),
    toggleCart: () => store.commit("cart/toggleCart"),
  };
};
