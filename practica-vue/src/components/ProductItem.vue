<template>
  <div class="product-item">
    <div class="product-images">
      <img :src="`${product.images[0]}`" :alt="product.title">
    </div>
    <div class="product-info">
      <div class="product-title">{{ product.title }}</div>
      <div class="product-price">${{ product.price }}</div>
      <div class="buttons">
        <button class="btn btn-sm btn-info" @click="$emit('goDetail', product)">
          Details
        </button>
        <button class="btn btn-sm btn-success" @click="$emit('addCart', product)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '@/models/product';

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
})

</script>

<style scoped>
.product-item {  
  width: 400px;
  border: 2px solid black;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;

}

.product-images {
  width: 60%;
  margin: 0 5px 0;
}

.product-images>img {
  width: 100%;
  height: auto;
}

.btn-info {
  margin: 10px;
}
</style>