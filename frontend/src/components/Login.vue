<template>
  <section class="login-drop">
    <input placeholder="Email" v-model="user.email">
    <input type="password" placeholder="Password" v-model="user.password">
    <div class="button-container">
      <button class="login" @click="openRegister">Register</button>
      <button class="login" @click="Login">Login</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',

  data() {return {
    user: {
      email: "",
      password: ""
    }
  }},
  
  methods: {
    openRegister(){
      this.$router.push('/register')
      this.$emit('close')
    },
    Login() {
      this.$store.dispatch('fetchUser', this.user)
      this.$emit('close')
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