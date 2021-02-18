<template>
  <main>    
      <div class="nav-container" v-if="$store.state.currentUser.user == null || $store.state.currentUser.user.role == 'customer'">
        <div class="logo" @click="$router.push('/')"></div>
        <div class="router-container dropdown">        
            <router-link class="link" to="/products" @click.native="closeDropdown">Products</router-link>
            <router-link class="link" to="/account" v-if="$store.state.loggedIn" @click.native="closeDropdown">My Account</router-link>
            <button class="nav-login" v-else @click="openLogin">Login</button>
                <transition name="fade">
                    <div class="dropdown-content login" v-if="showLogin">
                        <Login @close="showLogin = false"/>
                    </div>  
                </transition>
            <button class="red" @click="openCart"></button>
            <transition name="fade">
                    <div class="dropdown-content cart" v-if="showCart">
                        <Cart @close="showCart= false"/>
                    </div>  
                </transition>
        </div>
      </div>
    <div class="nav-container" v-else>
        <div class="logo"></div>
        <div class="router-container">
            <router-link class="link" to="/adminproducts">Products</router-link>
            <router-link class="link" to="/adminorders">Orders</router-link>
            <button class="login" @click="logout">Logout</button>
        </div>
    </div>
  </main>
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
            this.showLogin = false
        },
        openLogin() {
            this.showLogin = !this.showLogin
            this.showCart = false
        },
        logout() {
            this.closeDropdown()
            this.$store.commit('logout')
            this.$router.push('/products')
        },
        closeDropdown() {
            this.showLogin = false
            this.showCart = false
        },
    }
}
</script>

<style lang="scss" scoped>

.logo {
    background-image: url('~@/assets/sinus-logo.svg');
    background-position: left;
    background-repeat: no-repeat;
    cursor: pointer;
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
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>