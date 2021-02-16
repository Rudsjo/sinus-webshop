<template>
<div>
    <section class="image-container">
      <h1>One Skate shop to rule them all, One Skate shop to find them, One Skate shop to bring them all, and in the darkness bind them</h1>
      <h2></h2>
      <h2>One does not simply walk into the Skate shop</h2>
    <button class="enter-shop" @click="mellon">DEEAAAAAATH!</button>
    </section>
</div>
</template>

<script>
export default {
methods:{
  mellon(){
    this.$router.push('/products')
  }
}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';
.image-container{
    display: flex;
    flex-direction: column;
    height:41rem;
    background-image: url('~@/assets/skate.jpg');
    background-size:100%;
    background-repeat: no-repeat;
    background-position:center;
    justify-content: center;
    align-items: center;
    gap:20px;
    margin-bottom:1rem;
    h1{
        font-family: $header-font;
        text-align: center;
        color:black;
        font-size:2rem;
        opacity: .8;
    }
    h2{
      opacity:.8;
    }
    .enter-shop{
      height:2rem;
      width:10rem;
      border: 1px solid orangered;
      border-radius: 50px;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
      background-color: transparent;
      color:red;
    }
}

</style>