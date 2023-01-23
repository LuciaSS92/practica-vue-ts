<template>
  <div class="product-item">
    <div class="product-images">
      <img :src="`${product.images}`" :alt="product.title">
    </div>
    <div class="product-info">
      <div class="product-title">{{ product.title }}</div>
      <div class="product-price">${{ product.price }}</div>
      <div class="buttons">
        <button class="btn btn-sm btn-success" @click="$emit('goDetail', product)">
          Details
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
  width: 300px;
  display: flex;
  border: 1px solid black;
}

.product-images {
  width: 50%;
}

.product-images>img {
  width: 100%;
  height: auto;
}
</style>