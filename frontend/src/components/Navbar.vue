<template>
  <div class="nav-container">
      <img class="logo">        
      <router-link to="/products">Products</router-link>
      <router-link to="/account">My Account</router-link>
  </div>
</template>

<script>

export default {
    name: 'Navbar',
    data() {return {
        loggedIn: true
    }},
}
</script>

<style lang="scss" scoped>

.logo {
    background-image: url('~@/assets/sinus-logo.svg');
    background-position: left;
    background-repeat: no-repeat;

    height: 5rem;
}

.nav-container {
    height: 10%;
}

</style>