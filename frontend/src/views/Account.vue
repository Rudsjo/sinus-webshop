<template>
  <div class="main">
    <section class="left">
      <div class="img"></div>
      <div class="text-container">
        <h2>Name: {{user.name}}</h2>
        <hr>
        <p>Email: {{user.email}}</p>
        <hr>
        <p>BigCityLife: {{user.adress.city}}</p>
        <hr>
        <div class="logout">
          <button class="login" @click="logout">Logout</button>
        </div>
      </div>
    </section>
    <section class="right">
      <div class="button-container">
        <button @click="openOrders">Orders</button>
        <div class="seperator"></div>
        <button @click="tabToggle = false">Payment</button>
      </div>
      <hr>
      <section v-if="tabToggle">
        <OrderHistory v-for="(order,index) in orderHistory" :key="index"
        :order="order"/>
      </section>
      <section v-else>
        <div class="image"></div>
        <div class="info-text-container">
          <div class="text-box">
            <p>Street: </p>
            <p>{{user.adress.street}}</p>
          </div>
          <div class="text-box">
            <p>Zip: </p>
            <p>{{user.adress.zip}}</p>
          </div>
          <div class="text-box">
            <p>City: </p>
            <p>{{user.adress.city}}</p>
          </div>
          <hr>
          <div class="text-box">
            <p>Card Number: </p>
            <p>Secret</p>
          </div>
          <div class="text-box">
            <p>Valid until</p>
            <p>Secret</p>
          </div>
          <div class="text-box">
            <p>CVV</p>
            <p>Secret</p>
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

  computed: {
    user() {
      return this.$store.state.currentUser.user
    },
    orderHistory() {
      return this.$store.state.orderHistory
    }
  },
  methods: {
    logout() {
      this.$store.state.loggedIn = false
      this.$store.state.currentUser = {}
      this.$store.state.token = ""
      this.$router.push('/products')
    },
    async openOrders() {
      this.tabToggle = true
      await this.$store.dispatch('fetchUserHistory')
    }
  },
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
  .left{
    grid-column: 1/2;
    height: 28rem;
    background-color: $bg-dark-grey;
    color:white;

    .img{
      height: 9rem;
      background-image: url('~@/assets/photo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin:1rem;
    }
    .text-container{
      margin:1rem 2rem;
      letter-spacing: .1rem;

      h2{
        margin:1rem 0;
      }
      hr{
        margin: .5rem 0;
        opacity: .2;
      }
      p{
        font-size: small;
        margin:1rem 0;
      }
    }

    .logout {
      display: flex;
      justify-content: center;
      margin-top: .8rem;

      button {
        background-color: $bg-red;
        color: $bg-dark-grey;
      }
    }
  }
  .right{
    grid-column: 2/3;
    height: 28rem;
    background-color:white;
    overflow: auto;
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
      &:focus{
         background-color: $bg-light-grey;
        opacity: .5;
      }
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