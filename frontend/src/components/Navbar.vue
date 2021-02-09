<template>
  <div class="nav-container">
      <div class="logo"></div>
      <div class="router-container dropdown">        
        <router-link class="link" to="/products">Products</router-link>
        <router-link class="link" to="/account" v-if="loggedIn">My Account</router-link>
        <button class="nav-login" v-else @click="openLogin">Login</button>
        <div class="dropdown-content" v-if="showLogin">
            <Login/>
        </div>
        <button class="red" @click="openCart"></button>
      </div>
  </div>
</template>

<script>
import Login from './Login'
export default {
    name: 'Navbar',
    components: { Login },
    data() {return {
        loggedIn: false,
        showLogin: false
    }},

    methods: { 
        openCart() {
            console.log("cart open")
        },
        openLogin() {
            this.showLogin = !this.showLogin
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
    position: relative;
    display: inline-block;
    align-self: center;  
    align-items: center;
}

.dropdown-content {  
    position: absolute; 
    padding-top: .6rem;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}
</style>