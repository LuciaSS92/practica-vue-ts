<template>
    <div v-if="!isLoading">
        <h1>Title: {{ product.title }}</h1>
        <h2>Price: ${{ product.price }}</h2>
        <h2>Description: <h4>{{ product.description }}</h4>
        </h2>
        <h2>ID: {{ product.id }}</h2>
        <img :src="`${product.images}`" alt="product-photos" />
    </div>
    <div v-else>Loading...</div>
</template>

<script lang="ts">
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

        const { product, isLoading, fetchProductById } = useProducts();

        fetchProductById(props.id);
        return {
            product,
            isLoading
        };
    },
});
</script>