<template>
  <section class="login-drop">
    <input placeholder="Username" :model="username">
    <input type="password" placeholder="Password" :model="password">
    <div class="button-container">
      <button class="login" @click="this.$router.push('/register')">Register</button>
      <button class="login" @click="Login">Login</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',

  data() {return {
    username: "",
    password: ""
  }},
  
  methods: {
    Login() {

    }
  }
}
</script>

<style lang="scss" scoped>

.login-drop {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding:1rem;
  height: 200px;
  width: 300px;
  background-color: white;
  box-shadow: 0px 0px 34px 5px rgba(0,0,0,0.17);
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>