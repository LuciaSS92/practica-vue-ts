<template>
  <div class="login">
    <h1>Login</h1>
    <form action="" class="login-form" @submit.prevent="handleSubmit">
      <label class="form-label" for="#email">Email: </label>
      <input class="form-input" v-model="email" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password: </label>
      <input class="form-input" v-model="password" type="password" id="password" placeholder="Password">
      <input class="form-submit" type="submit" value="Login">
      <!-- <p v-if="error" class="error">Invalid email or password</p> -->
    </form>
  </div>
</template>

<script lang="ts">
import axios from 'axios';


export default {
  name: 'LoginView',
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email: this.email,
        password: this.password
      });
      console.log(response);
      localStorage.setItem('access_token', response.data.access_token); 
      const token = localStorage.getItem('access_token');   
      console.log(token);  
    }
  },
}


</script>



  <!-- export default {
    name: 'LoginView',
    data() {
      return {
        email: "",
        password: "",
      }
    },
    methods:{
      loginUser(){
        const credentials ={
          email: this.email,
          password: this.password,
        };
        axios
        .post('https://api.escuelajs.co/api/v1/auth/login', credentials)
        .then((response) => console.log(response.data))
        // .then((response) => localStorage.setItem('token', response.data.token))
        .catch((err) => console.log(err.response));
  
      }
    }
    
  } -->






<style lang="css" scoped>
.login {
  padding: 2rem;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin: 1rem;
  color: #42b983;
}

.form-input {
  padding: 5px;
  text-align: center;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: black;
  outline: 0;
  border-color: #42b983;
}


.form-submit {
  background: #42b983;
  border: none;
  color: white;
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
