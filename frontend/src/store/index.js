import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import * as API from '../API/index.js'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    currentUser: {},
    loggedIn: false,
    productList: [],
    orderHistory: [],
    cart: [],
    token: "",
  },
  getters: {
    ordersInProcess: state => {
      return state.orderHistory.filter(order => order.status == 'inProcess')
    },
    ordersDone: state => {
      return state.orderHistory.filter(order => order.status == 'done')
    },
    getOrderHistoryItems: state => idArr => {
      let items = []
      for (const id of idArr) {
        items.push(state.productList.find((product) => product._id == id))
      }
      return items
    }
  },
  mutations: {
    getProducts(state, items){
      state.productList = items
    },
    fillHistory(state, items) {
      state.orderHistory = items
    },
    addToCart(state, item) {
      state.cart.push(item)
    },
    resetCart(state) {
      state.cart = []
    },
   
    loginSuccess(state, user){
      state.currentUser = user
      state.loggedIn = true
      state.token = user.token
    },
    logout(state) {
      state.currentUser = {}
      state.loggedIn = false
      state.token = ""
    },
    removeItemFromCart(state,itemIndex){
      state.cart.splice(itemIndex,1)
    },
  },
  actions: {
    async registerUser(_, user) {
      await API.registerUser(user)
    },

    async fetchProducts(context) {
      const result = await API.fetchProducts()
      context.commit('getProducts', result.data)
    },

    async fetchUser(context, user) {
      const result = await API.fetchUser(user)
      context.commit('loginSuccess', result.data)
    },

    async fetchUserHistory(context) { 
      const result = await API.fetchUserHistory(context.state.token)
      context.commit('fillHistory', result.data)
    },

    async createOrder(context, order) {
      await API.createOrder(context.state.token, order)
    },

    async createProduct(context, product) {
      await API.createProduct(context.state.token, product)
    },

    async updateProduct(context, product) {
      await API.updateProduct(context.state.token, product)
    },

    async deleteProduct(context, id) {
      await API.deleteProduct(context.state.token, id)
    },
    //ANVÄNDS INTE FÖR NU
    // async fetchProductById(_, id) {
    //   const result = await API.fetchProductById(id)
    //   context.commit('IMPLEMENT IF NEEDED', result.data)
    // }
  },
  modules: {
  }
})
