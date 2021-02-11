<template>
  <div class="main">
    <section class="right">
      <div class="img"></div>
      <div class="text-container">
        <h2>Name: {{}}</h2>
        <hr>
        <p>Email: {{}}</p>
        <hr>
        <p>BigCityLife: {{}}</p>
        <hr>
      </div>
    </section>
    <section class="left">
      <div class="button-container">
        <button @click="tabToggle = true">Orders</button>
        <div class="seperator"></div>
        <button @click="tabToggle = false">Payment</button>
      </div>
      <hr>
      <section v-if="tabToggle">
        <OrderHistory/>
      </section>
      <section v-else>
        <div class="image"></div>
        <div class="info-text-container">
          <div class="text-box">
            <p>Street: </p>
            <p>My street</p>
          </div>
          <div class="text-box">
            <p>Zip: </p>
            <p>Secret</p>
          </div>
          <div class="text-box">
            <p>City: </p>
            <p>MankanJao</p>
          </div>
          <hr>
          <div class="text-box">
            <p>Card Number: </p>
            <p>13371337</p>
          </div>
          <div class="text-box">
            <p>Valid until</p>
            <p>2021</p>
          </div>
          <div class="text-box">
            <p>CVV</p>
            <p>232</p>
          </div>
        </div>
            
      </section>
    </section>
  </div>
</template>

<script>
import OrderHistory from '../components/OrderHistory'
export default {
  
  name: 'Account',
  components:{
    OrderHistory,
  },
  data(){return{
    tabToggle: false
  }},
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';

  .main{
    display:grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    gap:2rem;
    h1{
      padding-top:1rem;
      text-align: center;
    }
  }
  .right{
    grid-column: 1/2;
    height: 28rem;
    background-color: $bg-dark-grey;
    color:white;

    .img{
      height: 10rem;
      background-image: url('~@/assets/photo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin:2rem;
    }
    .text-container{
      margin:2rem;
      letter-spacing: .1rem;

      h2{
        margin:1rem 0;
      }
      hr{
        margin: .5rem 0;
        opacity: .2;
      }
      p{
        margin:1rem 0;
      }
    }
  }
  .left{
    grid-column: 2/3;
    height: 28rem;
    background-color:white;
  }
  .button-container{
    width:100%;
    height:3rem;
    display: flex;
    justify-content: space-evenly;
    button{
      width:50%;
      background-color:white;
      transition: background-color .3s;
      &:hover{
        background-color: $bg-light-grey;
        opacity: .5;
      }
    }
    .seperator{
      border-left:1px solid $bg-dark-grey;
      opacity: .2;
      height:80%;
      align-self: center;
    }
    hr{
      width:90%;
    }
  }
  .info-text-container{
    display: flex;
    flex-direction: column;
    padding:1rem;
    
    .text-box{
      display:flex;
      justify-content: space-between;
      margin:.5rem;
    }
  }
    .image{
        height:5rem;
        background-image: url('~@/assets/banken.png');
        background-size: 5rem;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>