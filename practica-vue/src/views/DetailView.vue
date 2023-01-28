<template>
    <h1>Product details</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
    </div>
    <div class="details">
        <h2>Title: {{ product.title }}</h2>
        <h2>Price: ${{ product.price }}</h2>
        <h2>ID: {{ product.id }}</h2>
        <h2>Description: {{ product.description }}</h2>
        
        

    </div>
    <div class="photos-block">
        <img class="product-photo" :src="product.images[0]" alt="product-photos" />
        <img class="product-photo" :src="product.images[1]" alt="product-photos" />
        <img class="product-photo" :src="product.images[2]" alt="product-photos" />
    </div>
    <button @click="addElementToCart(product)" class="btn btn-success">Add to cart
    </button>

    <!-- <div id="product-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active container-fluid">
                    <img class="d-block w-100" :src="product.images[0]" alt="product-photos" />
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" :src="product.images[1]" alt="product-photos" />
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100" :src="product.images[2]" alt="product-photos" />
                </div>
            </div> -->
    <!-- <a class="carousel-control-prev" href="#d-block w-100" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon"></span><span class="sr-only"></span>
            </a>
            <a class="carousel-control-next" href="#product-carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon"></span><span class="sr-only"></span>
                >
            </a> -->



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
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
        });

    }

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

.photos-block{
    margin: 0 5%;

}
.product-photo{
    margin: 10px 5px;
    width: 30%;    
}

.btn{
    margin: 5px;
}

</style>
