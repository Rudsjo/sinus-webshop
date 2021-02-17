<template>
<main v-if="$store.state.currentUser.user.role == 'admin'" class="order-container">
  <h1>Order History</h1>
    <section>
        <div class="head">
            <h2>In progress</h2> <hr/>
        </div>
            <OrderHistory v-for="(order,index) in inProgress" :key="index"
            :order="order"/> 
    </section>
    <section>
        <div class="head">
            <h2>Done</h2> <hr/>
        </div>
        <OrderHistory v-for="(order,index) in done" :key="index"
        :order="order"/>
    </section>
</main>
</template>

<script>
import OrderHistory from '../components/OrderHistory.vue'
export default {
    name: 'AdminOrder',
    components: { OrderHistory },

    computed: {
        inProgress() {
            return this.$store.getters.ordersInProcess
        },
        done() {
            return this.$store.getters.ordersDone
        }
    },

    async created() {
      await this.$store.dispatch('fetchUserHistory')
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';

.order-container {
    padding-bottom: 2rem;

    h1{
        text-align: center;
        padding-top: 1rem;
    }
}

.head {
    display: flex;
    flex-direction: row;
    padding: 1rem 0;

    hr {
        border-bottom: 1px solid $bg-dark-grey;  
        opacity: .6; 
        flex-grow: 2;  
        align-self: center;
        margin-left: 1rem;
    }
}
</style>