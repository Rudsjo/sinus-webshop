import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    currentUser: {},
    loggedIn: false,
    productList: [],
    cart: [],
  },
  mutations: {
    getProducts(state, items){
      state.productList = items
    },
    addToCart(state, item) {
      state.cart.push(item)
    },
    loginSuccess(state, user){
      state.currentUser = user
      state.loggedIn = true
    },
    addToOrderHistory(state, order){
      state.currentUser.orderHistory.push(order)
    }
  },
  actions: {
    fetchProducts(context){
      axios.get('http://localhost:5000/api/products/')
      .then((result) => context.commit('getProducts',result.data) )
    },
    fetchUser(context,user) {
      axios.post('http://localhost:5000/api/auth/', {email: user.email, password: user.password})
      .then((response) => { 
        context.commit('loginSuccess', response.data)
      })
      .catch((response) => alert(response))
    },
    createOrder(context,order,token){
      try{axios.post('http://localhost:5000/api/orders',order, 
      )
      .then((response) => {
        context.commit('addToOrderHistory', response.data)
      })
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
