<template>
  <h1>Profile</h1>  
  <img :src="avatar" class="avatar" />
  <div class="details">    
    <h2>Name: {{ name }}</h2>
    <h2>Email: {{ email }}</h2>
    <h2>ID: {{ id }}</h2>
    <button @click="handleLogout" class="btn btn-danger">Logout</button>
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

<style scoped>
h1 {
  padding: 2rem;
}

.details {
  float: right;
  margin-right: 20%;
  text-align: left;   
}

.avatar {
  width: 35%;
  float: left;
  margin-left:15% ;
  margin-bottom: 5%;
}


</style>