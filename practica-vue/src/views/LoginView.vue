<template>
  <div class="login">
    <h1>Login</h1>
    <form action="" class="login-form" @submit.prevent="login">
      <label class="form-label" for="#email">Email: </label>
      <input class="form-input" v-model="email" type="email" id="email" required placeholder="Email">
      <label class="form-label" for="#password">Password: </label>
      <input class="form-input" v-model="password" type="password" id="password" placeholder="Password">
      <input class="form-submit" type="submit" value="Login">
      <p v-if="error" class="error">Invalid email or password</p>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    error: false
  }),
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
    }
  }
};
</script>

<style lang="css" scoped>
.login {
  padding: 2rem;
}

.title {
  text-align: center;
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
