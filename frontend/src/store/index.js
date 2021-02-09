import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    productList: [],
    cart: []
  },
  mutations: {
    getProducts(state, items){
      state.productList = items
    }
  },
  actions: {
    fetchProducts(context){
      axios.get('http://localhost:5000/api/products/')
      .then((result) => context.commit('getProducts',result.data) )
    }
  },
  modules: {
  }
})
