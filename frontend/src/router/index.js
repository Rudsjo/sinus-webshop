import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/Account.vue'
import Products from '../views/Products.vue'
import Register from '../views/Register.vue'
import Thanks from '../views/ThankYou.vue'
import Order from '../views/Order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/thankyou',
    component: Thanks
  },
  {
    path: '/order',
    component: Order
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
