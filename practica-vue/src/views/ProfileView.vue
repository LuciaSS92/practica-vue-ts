<template>
  <div class="profile">
  <h1>Profile</h1>  
  <img :src="avatar" class="avatar" />
  <div class="details">    
    <h2>Name: {{ name }}</h2>
    <h2>Email: {{ email }}</h2>
    <h2>ID: {{ id }}</h2>
    <button @click="handleLogOut" class="btn btn-danger">Logout</button>
  </div>
</div>
</template>

<script lang="ts">
import fakeShopApi from "@/api/fakeShopApi";
import { defineComponent } from 'vue';
import logOut from "@/api/logOut";


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
  
  // Getting the information of the logged user
  async created() {
    const data = await fakeShopApi.get('/auth/profile');
    this.name = data.data.name;
    this.email = data.data.email;
    this.id = data.data.id;
    this.avatar = data.data.avatar;
  },
  setup() {
    const { handleLogOut} = logOut();
    return {      
      handleLogOut,
    };
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