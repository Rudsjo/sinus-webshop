<template>
  <div class="nav-container">
      <div class="logo"></div>
      <div class="router-container dropdown">        
        <router-link class="link" to="/products">Products</router-link>
        <router-link class="link" to="/account" v-if="$store.state.loggedIn">My Account</router-link>
        <button class="nav-login" v-else @click="openLogin">Login</button>
            <transition name="fade">
                <div class="dropdown-content login" v-if="showLogin">
                    <Login @close="showLogin = false"/>
                </div>  
            </transition>
        <button class="red" @click="openCart"></button>
        <transition name="fade">
                <div class="dropdown-content cart" v-if="showCart">
                    <Cart  @close="showCart= false"/>
                </div>  
            </transition>
      </div>
  </div>
</template>

<script>
import Login from './Login'
import Cart from './Cart'
export default {
    name: 'Navbar',
    components: { Login, Cart },
    data() {return {
        showLogin: false,
        showCart: false,
    }},

    methods: { 
        openCart() {
            this.showCart = !this.showCart
        },
        openLogin() {
            this.showLogin = !this.showLogin
        },
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
    height: 3rem; // bytt från procent
    display: flex;
    justify-content: space-between;
}

.router-container {
    position: relative;
    display: flex; //Bytt från inline block till flex. Finare linjering med cart-knappen
    align-self: center;  
    align-items: center;
}

.dropdown-content {  
    position: absolute; 
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;   

    &.login {
        margin-top: 16rem; // kanske finns ett bättre sätt att flytta denna!
        margin-left: -8.6rem;
    }

    &.cart {
        margin-top: 18.5rem; // kanske finns ett bättre sätt att flytta denna!
        margin-left: -1.1rem;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>