<template>
  <nav>
    <div class="title">
      <h4>VueShop</h4>
    </div>
    <div>
      <button @click="toggleCart" class="btn btn-success">Cart</button>
      <button @click="handleLogout" class="btn btn-danger">Logout</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, } from "vue";
import { useStore } from "vuex";
import { useCart } from "@/composables/useCart";
import router from "@/router";

export default defineComponent({
  name: "NavBar",
  setup() {
    useStore();
    const { toggleCart } = useCart();
    return {
      toggleCart,
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('access_token');
      alert("You have succesfully logged out");
      router.push({ name: "login" });
    }
  },
});

</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #808080;
  color: white;
}

.title {
  padding: 5px;  
}

.btn{
  margin: 5px;
}
</style>