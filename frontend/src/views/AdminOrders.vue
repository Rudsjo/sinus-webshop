<template>
<main class="order-container">
<div v-if="!isAdmin" class="noAccess">
    <h1>YOU SHALL NOT PASS!!</h1>
    <button class="login" @click="$router.push('/')">Fly, you fools!</button>
</div>
<div v-else>
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
    </div>
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
        },
        isAdmin () {
            if(!this.$store.state.currentUser.user || this.$store.state.currentUser.user.role === 'customer') {
                return false
            } else {
                return true
            }
        }
    },

    async created() {
      await this.$store.dispatch('fetchUserHistory')
    },
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

.noAccess {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
}
</style>