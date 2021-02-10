<template>
  <section class="cart-drop">
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
        <button class="black" @click="processOrder()">Buy</button>
      </div>
  </section>
</template>

<script>
import CartItem from './CartItem';
export default {
    components:{
        CartItem,
    },
    computed:{
        productList(){
             return this.$store.state.cart
        },
        totalPrice(){
            let total = 0
            for(const item of this.productList){
                total += item.price
            }
            return total
        }
    },
    methods: {
      processOrder() {
        this.$router.push('/order')
        this.$emit('close')
      }
    }
}
</script>

<style lang="scss" scoped>
@import'~@/styles/globals.scss';

.cart-drop {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  border-radius: 5px;
 
  height: 15rem; // kanske ta bort då listan kan växa
  width: 14rem;
  background-color: white;
  box-shadow: 0px 0px 34px 5px rgba(0,0,0,0.17);
}

.bottom {
    display: flex;
    flex-direction: column;

    .total {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 .6rem 0 .6rem;
    }

    button {
        align-self: center;
        margin: 0.5rem 0 .5rem 0;
    }
    
    hr {
        width: 12rem;
        border-top: 1px solid $bg-light-grey;
        margin: .5rem 0 .5rem 1rem;
    }
}

</style>