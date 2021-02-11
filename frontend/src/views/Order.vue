<template>
  <div class="order-container">
      <h1>Pay</h1>
      <section class="left">
          <h1>Your order</h1>        
          <div class="order-card">
            <ul>
                <CartItem v-for="(product, index) in productList"
                :key="index"
                :product='product'/>          
            </ul>   
            <div class="bottom">
                <hr>
                <div class="total">
                    <p>TOTAL</p>
                    <p>{{totalPrice}}</p>
                </div>
            </div>
          </div>
      </section>
      <section class="right">
        <section class="details">
            <h1>Your Details</h1>
            <label>Your name</label>
            <input v-model="name">
            <label>Street</label>
            <input v-model="street">
            <div class="lower-details">
                <div>
                    <label>ZIP code</label>
                    <input v-model="zipcode">
                </div>
                <div>
                    <label>City</label>
                    <input v-model="city">
                </div>
            </div>
        </section>
        <section class="payment">
            <h1>Payment</h1>
            <label>Card Owner</label>
            <input v-model="cardOwner">
            <label>Card Number</label>
            <input v-model="cardNumber">
            <div class="lower-details"> 
                <div>
                    <label>Valid until</label>
                    <input v-model="validUntil">
                </div>
                <div>
                    <label>CVV</label>
                    <input v-model="cvv">
                </div>
            </div>
        </section>
        <button @click="addOrder" class="black">Order</button>
      </section>
  </div>
</template>

<script>
import CartItem from '../components/CartItem';
export default {
    data(){return{
        name:"",
        street:"",
        zipcode:"",
        city:"",
        cardOwner:"",
        cardNumber:"",
        validUntil:"",
        cvv:""
    }},
    components:{
        CartItem,
    },
    computed:{
        productList(){
             return this.$store.state.cart
        },
        orderIdList() {
            let idList = []
            for(const item of this.productList) {
                idList.push(item._id)           
            }
            return idList
        },
        totalPrice(){
            let total = 0
            for(const item of this.productList){
                total += item.price
            }
            return total
        }
    },
    methods:{
        addOrder(){
            this.$store.dispatch('createOrder', this.orderIdList)
        }
    }
}
</script>

<style lang="scss" scoped>
@import'~@/styles/globals.scss';

.order-container {
    display: grid;
    gap: 15px;
    padding-top: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .1fr 1fr;

    .left {
        grid-column: 1/2;
        grid-row: 2/3;
        max-width: 25rem;
    }

    .right {
        display: flex;
        flex-direction: column;
        max-width: 25rem;
        grid-column: 2/3;
        grid-row: 2/3;

        .lower-details {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        input {
            width: 100%;
            margin: .2rem 0;
        }
        h1 {
            padding-bottom: 1rem;
        }     
    }

    button {
        align-self: flex-end;
        margin-top: .5rem;
    }

    h1 {
        grid-row: 1/2;
    }
}

.order-card {
    background-color: white;
    box-shadow: 0px 0px 34px 5px rgba(0,0,0,0.17);
    padding: 1rem 0;
    margin: 1.5rem 0;
    height: 28rem;
    overflow: auto;

    p {
        opacity: 1;
        font-weight: $heavy;
    }
}

input {
    background-color: transparent;
}


.bottom {
    display: flex;
    flex-direction: column;

    .total {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 1rem 0 1rem;
    }

    hr {
        border-top: 2px solid $bg-dark-grey;
        margin: .5rem 1rem .5rem 1rem;
    }
}


</style>