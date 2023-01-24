<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{ name: 'products' }">Products</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'profile' }">Profile</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'login' }">Login</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped>
nav {
    padding: 0.5rem;
    background-color: rgb(102, 224, 167);
}

ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

li {
    padding: 1rem;
    font-weight: bold;
}

a:visited {
    color: rgb(255, 255, 255);
}
</style>
