<template>
  <div class="products">    
      <h1>Products</h1>
    </div>
    <div v-if="isLoading">Loading...</div>
    <div class="product-list" v-else>
      <ProductItem v-for="product in products" :key="product.id" :product="product" @addCart="addElementToCart"
        @goDetail="goDetail" />
    </div>
  
</template>


<script lang="ts">
import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";
import ProductItem from "@/components/ProductItem.vue";
import { useCart } from "@/composables/useCart";
import { Product } from "@/models/product";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ProductView",
  components: {
    ProductItem,
  },
  setup() {
    const { products, isLoading, fetchProducts } = useProducts();
    const { addElementToCart } = useCart();
    const router = useRouter();

    fetchProducts();

    return {
      products,
      isLoading,
      addElementToCart,
      goDetail: (product: Product) =>
        router.push({ name: "detail", params: { id: product.id } }),
    };
  },
});
</script>

<style scoped >
.product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>


