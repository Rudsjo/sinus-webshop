<template>
<ul> 
    <li class="order-info image" @click="toggleHistory">
        <p>Order ID: {{order._id}}</p>
        <p>Date: {{order.timeStamp}}</p>
        <p>Order value: {{order.orderValue}}</p>
    </li>
        <ul v-if="showItems">
            <CartItem v-for="(product,index) in orderHistoryItems" :key="index"
            :product="product"/>
        </ul>
  <hr>
</ul>
</template>

<script>
import CartItem from './CartItem'
export default {
    components: { CartItem },
    name: 'OrderHistory',
    props: {
        order: {}
    },

    data() {return {
        showItems: false,
    }},

    computed: {
        orderIdList() {
            let idList = []
            for(const item of this.order.items) {
                idList.push(item)
            }
            console.log(idList)
            return idList
        },
        orderHistoryItems() {
            return this.$store.state.orderHistoryItems
        }
    },

    methods: {
        toggleHistory() { 
            if(this.$store.state.currentUser.user.role == 'customer') {
                this.getOrderItem()
                this.showItems = !this.showItems
            }  
        },

        getOrderItem() {
            this.$store.commit('resetHistoryItems')
            for(const id of this.orderIdList) {
                this.$store.dispatch('fetchProductById', id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';

    .image{
        background-image: url('~@/assets/order-history.png');
        background-size: 2.5rem;
        background-repeat: no-repeat;
        background-position: right 10px bottom 10px;      
    }
    .order-info{
        cursor: pointer;
        display:flex;
        flex-direction: column;
        padding:1rem;
        overflow: auto;
        &:hover{
            background-color: $bg-light-grey
        }   
    }
    hr{
        margin: 0 .8rem;
    } 
</style>