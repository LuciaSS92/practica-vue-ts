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


export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true,
        },
        productRole: String,
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
});
</script>

