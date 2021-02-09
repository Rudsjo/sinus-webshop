<template>
  <div class="nav-container">
      <div class="logo"></div>
      <div class="router-container">        
        <router-link class="link" to="/products">Products</router-link>
        <router-link class="link" to="/account" v-if="loggedIn">My Account</router-link>
        <button class="nav-login" v-else @click="openLogin">Login</button>
        <button class="red" @click="openCart"></button>
      </div>
  </div>
</template>

<script>

export default {
    name: 'Navbar',
    data() {return {
        loggedIn: false
    }},

    methods: { 
        openCart() {
            console.log("cart open")
        },
        openLogin() {
            console.log("login open")
        }
    }
}
</script>

<style lang="scss" scoped>

.logo {
    background-image: url('~@/assets/sinus-logo.svg');
    background-position: left;
    background-repeat: no-repeat;
    width: 25%;
}

.nav-container {
    height: 10%;
    display: flex;
    justify-content: space-between;
}

.router-container {
    display: flex;
    align-self: center;  
    align-items: center;
}

</style>