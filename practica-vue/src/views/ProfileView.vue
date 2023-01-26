<template>

  <div class="profile">
    <h1>Profile</h1>
    <!-- <div v-if="isLoading">Loading...</div> -->
    <!-- <div v-else> -->
    <div>
      <h1>Nombre: </h1>
      <h2>Email: </h2>
      <button @click="handleLogout" class="btn btn-danger">Logout</button>
    </div>
  </div>
</template>
<script lang="ts">

import axios from 'axios';
import router from '@/router';

export default {
  name: 'ProfileView',
  async created() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      }
    });
    console.log(response)
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('access_token');
      alert("You have succesfully logged out");
      router.push({ name: "login" });
    }
  },
}

</script>
