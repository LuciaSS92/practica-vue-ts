<template>
  <div class="profile">
    <h1>Profile</h1>
    <div>
      <h1>Name: {{ name }}</h1>
      <h1>Email: {{ email }}</h1>
      <h1>ID: {{ id }}</h1>
      <h1>Avatar: {{ avatar }}</h1>
      <button @click="handleLogout" class="btn btn-danger">Logout</button>
    </div>
  </div>
</template>
<script lang="ts">

import axios from 'axios';
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfileView',  
  data() {
    return {
      id: "",
      name: '',
      email: "",
      avatar: "",
    };
  },
  async created() {
    const data = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token')
      },
    });
    this.name = data.data.name;
    this.email = data.data.email;
    this.id = data.data.id;
    this.avatar = data.data.avatar;
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('access_token');
      alert("You have successfully logged out");
      router.push({ name: "login" });
    }
  },
})
</script>
