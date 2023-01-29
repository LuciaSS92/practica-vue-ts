<template>
  <div class="login">
    <h1>Login</h1>
    <form action="" class="login-form" @submit.prevent="handleSubmit">
      <label class="form-label" for="#email">Email: </label>
      <input class="form-input" v-model="email" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password: </label>
      <input class="form-input" v-model="password" type="password" id="password" placeholder="Password">
      <input class="btn btn-success" type="submit" value="Login">
    </form>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import fakeShopApi from "@/api/fakeShopApi";


export default defineComponent ({
  name: 'LoginView',
  data() {    
    return {      
      email: "",
      password: "",
    }       
  },
  methods: {
    async handleSubmit() {
      const response = await fakeShopApi.post('/auth/login', {
        email: this.email,
        password: this.password               
      });      
      localStorage.setItem('access_token', response.data.access_token);               
      alert("You have successfully logged it");
      router.push({ name: "profile" });      
    }
  },
})
</script>

<style lang="css" scoped>
.login {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-label {
  margin: 1rem;
  color: #42b983;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-input {
  padding: 5px;
  text-align: center;
  border: 1px solid white;
  color: black;
  border-color: #42b983;
}

.btn-success {  
  background: #42b983;  
  margin: 1rem 47.25% 1rem;  
  cursor: pointer; 
  
}
</style>
