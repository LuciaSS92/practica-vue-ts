<template>

    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <h1>Title: {{ product.title }}</h1>
        <h2>Price: ${{ product.price }}</h2>
        <h2>Description: <h4>{{ product.description }}</h4>
        </h2>
        <h2>ID: {{ product.id }}</h2>
        <button @click="addElementToCart(product)" class="btn btn-success">Add to cart
        </button>
        <div class="product-photos"><img :src="product.images" alt="product-photos" /></div>
    </div>

</template>

<script lang="ts">
import { useCart } from "@/composables/useCart";
import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";
import axios from "axios";


export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const { addElementToCart } = useCart();

        const { product, isLoading, fetchProductById } = useProducts();

        fetchProductById(props.id);
        return {
            product,
            addElementToCart,
            isLoading
        };
    },
    async created() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    });
    console.log(response)
  }

});
</script>

