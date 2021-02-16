<template>
<ul> 
    <li class="order-info image" @click="toggleHistory">
        <p>Order ID: {{order._id}}</p>
        <p>Date: {{order.timeStamp}}</p>
        <p>Order value: {{order.orderValue}}</p>
    </li>
        <ul v-if="showItems">
            <CartItem v-for="(product,index) in getOrderHistoryItems" :key="index"
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
            return idList
        },

        getOrderHistoryItems() {
            return this.$store.getters.getOrderHistoryItems(this.orderIdList)  
        }
    },

    methods: {
        toggleHistory() { 
            if(this.$store.state.currentUser.user.role == 'customer' || this.$store.state.currentUser.user.role == 'admin') {
                this.showItems = !this.showItems
            }  
        },
    },
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