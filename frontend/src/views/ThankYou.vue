<template>
  <div class="main">
      <div class="image-container">
          <p>Thank you!</p>
      </div>
      <div class="text-container">
          <h1>Your order has been processed, go out and skate while you wait!</h1>
          <p>Skate ipsum dolor sit amet, rip grip hip grab 540 pivot nose Tracker. Gnar bucket Skateboard Shuffle casper slide 180 boneless layback hardware nosebone.
             Vans California Daze rock and roll chicken wing pogo transfer. Powerslide pivot slam Sidewalk Surfer durometer. Deck full-cab gap Old Ghost ho-ho. Invert melancholy feeble rocket air. Hanger rock and roll g-turn ledge. 50-50 Kevin Harris boarslide</p>
          <button class="login" @click="goHome">Go home</button>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        goHome(){
            this.$router.push('/products')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';
.main{
    padding-top:2rem;
    display: grid;
    grid-template-rows: 1fr .8fr ;
    gap:2rem;
}
.image-container{
    grid-row: 1 /2;
    display: flex;
    height:25rem;
    background-image: url('~@/assets/skate-hero-1.jpg');
    background-size:100%;
    background-repeat: no-repeat;
    background-position:center;
    justify-content: center;
    align-items: center;
    p{
        font-family: $header-font;
        color:white;
        font-size:2.5rem;
        opacity: 1;
    }
}
.text-container{
    grid-row: 2/3;    
    p{
        margin:.6rem 0;
    }

}


</style>