<template>
    <h1>Product details</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
        <div class="details">
            <h2>Title: {{ product.title }}</h2>
            <h2>Price: ${{ product.price }}</h2>
            <h2>ID: {{ product.id }}</h2>
            <h2>Description: {{ product.description }}</h2>
        </div>
        
        <!-- Showing available photos instead of carousel, sorry! -->
        <div class="photos-block">
            <img class="product-photo" :src="product.images[0]" alt="product-photos" />
            <img class="product-photo" :src="product.images[1]" alt="product-photos" />
            <img class="product-photo" :src="product.images[2]" alt="product-photos" />
        </div>
        <button @click="addElementToCart(product)" class="btn btn-success">Add to cart
        </button>
    </div>
</template>

<script lang="ts">
import { useCart } from "@/composables/useCart";
import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";
import axios from "axios";
import fakeShopApi from "@/api/fakeShopApi";

export default defineComponent({
    name: 'DetailView',
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
    async loggedUSer() {
        await fakeShopApi.get('/auth/profile'); 
    },
});
</script>


<style scoped>
h1 {
    padding: 2rem;
}

.details {
    text-align: left;
    margin: 0 10%;
}

.photos-block {
    margin: 0 5%;
}

.product-photo {
    margin: 10px 5px;
    width: 30%;
}
.btn {
    margin: 5px;
}
</style>