<template>
  <div>
      <div id="app" class="main-container">
          <Navbar />
          <transition name="fade">
            <router-view/>
          </transition>
    </div>
      <footer>
        <h2>Author: Mcuzz & P</h2>
      </footer>
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
  h2{
    display:flex;
    text-align: bottom;
    justify-content: center;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
