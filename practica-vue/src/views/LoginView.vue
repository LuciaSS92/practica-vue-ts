<template>
  <div class="login">
    <h1>Login</h1>
    <form action="" class="login-form" @submit.prevent="handleSubmit">
      <label class="form-label" for="#email">Email: </label>
      <input class="form-input" v-model="email" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password: </label>
      <input class="form-input" v-model="password" type="password" id="password" placeholder="Password">
    </form>
    <input class="form-submit" type="submit" value="Login">

  </div>

</template>

<script lang="ts">
import axios from 'axios';
import router from '@/router';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'LoginView',
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email: this.email,
        password: this.password,
      });
      console.log(response);
      localStorage.setItem('access_token', response.data.access_token);
      const savedToken = localStorage.getItem('access_token');
      console.log(savedToken);
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

.form-submit {
  background: #42b983;
  border: none;
  color: white;
  margin: 1rem 47.25% 1rem;
  padding: 0.5rem;
  cursor: pointer;
  width: 5%;
  align-items: center;
}
</style>
