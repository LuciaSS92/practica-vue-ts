<template>
  <NavBar title="VueShop" />
  <NavBarLinks />
  <router-view />
  <CartList v-show="isCartOpen" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import NavBarLinks from "@/components/NavBarLinks.vue";
import CartList from "./components/CartList.vue";
import { useCart } from "./composables/useCart";

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    NavBarLinks,
    CartList
  },
  setup() {
    const { isCartOpen } = useCart();

    return {
      isCartOpen,
    };
  },
});

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
