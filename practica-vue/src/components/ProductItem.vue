<template>
    <div class="product-item">
      <div class="product-images">
        <!-- <img :src="product.images" :alt="product.title" /> -->
      </div>
      <div class="product-info">
        <div class="product-id">{{ product.id }}</div>
        <div class="product-title">{{ product.title }}</div>
        <div class="product-price">{{ product.price }}</div>
                
        <div class="buttons">
          <button class="btn btn-sm btn-primary" @click="$emit('addCart', product)">
            Add to Cart
          </button>
          <button class="btn btn-sm btn-success" @click="$emit('goDetail', product)">
            Details
          </button>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { Product } from "@/models/product";
  import { defineComponent, PropType } from "vue";
  
  export default defineComponent({
    props: {
      product: {
        type: Object as PropType<Product>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  .product-item {
    width: 300px;
    display: flex;
    border: 1px solid black;
  }
  
  .product-avatar {
    width: 50%;
  }
  .product-avatar > img {
    width: 100%;
    height: auto;
  }
  </style>
  