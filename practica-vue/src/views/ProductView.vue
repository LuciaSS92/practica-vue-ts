<template>
  <div class="products">
    <h1>Product list</h1>
    <div v-if="isLoading">Loading...</div>
    <div class="product-list" v-else>
      <ProductItem v-for="product in products" :key="product.title" :product="product" @addCart="addElementToCart"
        @goDetail="goDetail" />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue"
import useProducts from "@/composables/useProducts"
import ProductItem from "@/components/ProductItem.vue";
import { Product } from "@/models/product";
import { useRouter } from "vue-router";
import { useCart } from "@/composables/useCart";
import fakeShopApi from "@/api/fakeShopApi";



export default defineComponent({
  name: 'ProductView',
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
    }
  },
  async loggedUSer() {
    await fakeShopApi.get('/auth/profile');
  },
});


</script>

<style scoped>
.product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
  justify-content: center;

}

h1 {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
</style>