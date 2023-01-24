<template>
  <nav>
    <div class="title">
      <h4>{{ title }}</h4>
    </div>
    <div>
      <button @click="toggleCart" class="btn btn-warning">Cart</button>
      <button class="btn btn-danger">Logout</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, } from "vue";
import { useStore } from "vuex";
import { useCart } from "@/composables/useCart";

interface NavbarProps {
  title: string;

  color?: string;
}

export default defineComponent({
  name: "NavBar",
  props: {
    title: {
      type: String,
      required: true,
    },

    color: String,
  },
  setup() {
    useStore();
    const { toggleCart } = useCart();
    return {
      toggleCart,
    }
  },
},
);

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
  padding: 0.5rem;
}
</style>