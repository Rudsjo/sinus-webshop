<template>
  <div>
    <div id="app" class="main-container">
        <Navbar/>
      <router-view/>
    
    </div>
      <footer></footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar }
  
}
</script>
<style lang="scss">

@import'~@/styles/globals.scss';

.main-container {
  padding: 5% 10% 0 10%;
}

footer {
  height: 200px; 
  background-color: $bg-dark-grey;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
