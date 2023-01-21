import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
  const store = useStore();

  return {
    // GETTERS
    products: computed(() => store.getters["users/getProducts"]),
    isLoading: computed(() => store.getters["users/getIsLoading"]),
    product: computed(() => store.getters["users/getProduct"]),

    // ACTIONS
    fetchProducts: () => store.dispatch("users/fetchProducts"),
    fetchProductById: (productId: number) =>
      store.dispatch("users/fetchProductById", productId),
  };
};

export default useProducts;
