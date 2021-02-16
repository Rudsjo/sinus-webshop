import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    currentUser: {},
    loggedIn: false,
    productList: [],
    selectedProduct: {},
    orderHistory: [],
    orderHistoryItems: [],
    cart: [],
    token: "",
  },
  getters: {
    ordersInProcess: state => {
      return state.orderHistory.filter(order => order.status == 'inProcess')
    },
    ordersDone: state => {
      return state.orderHistory.filter(order => order.status == 'done')
    }

  },
  mutations: {
    getProducts(state, items){
      state.productList = items
    },
    fillHistory(state, items) {
      state.orderHistory = items
    },
    fillHistoryItems(state, item) {
      state.orderHistoryItems.push(item)
    },
    addToCart(state, item) {
      state.cart.push(item)
    },
    resetCart(state) {
      state.cart = []
    },
    resetHistoryItems(state) {
      state.orderHistoryItems = []
    },
    loginSuccess(state, user){
      state.currentUser = user
      state.loggedIn = true
      state.token = user.token
    },
    selectProduct(state,product) {
      state.selectedProduct = product
    }
  },
  actions: {
    async registerUser(_ , user){
      await axios.post('http://localhost:5000/api/register/', {
        name: user.name, 
        email: user.email, 
        password: user.password,
        repeatPassword: user.password,
        adress:{
          street: user.adress.street,
          zip: user.adress.zip,
          city: user.adress.city
        }
      })
    },
    async fetchProducts(context){
      await axios.get('http://localhost:5000/api/products/')
      .then((result) => context.commit('getProducts',result.data))
    },
    async fetchUser(context,user) {
      await axios.post('http://localhost:5000/api/auth/', {email: user.email, password: user.password})
      .then((response) => context.commit('loginSuccess', response.data))
      // .catch((response) => alert(response))
    },
    async fetchUserHistory(context) {
      await axios.get('http://localhost:5000/api/orders/', {
        headers: {
          Authorization: context.state.token
        }
      })
      .then((response) => context.commit('fillHistory', response.data))
      .catch((response) => alert(response))
    },
    async createOrder(context, order ){
      await axios.post('http://localhost:5000/api/orders/', {items: order}, {
        headers: {
          Authorization: context.state.token
        }
      })
    },
    async fetchProductById(context, id) {
      await axios.get(`http://localhost:5000/api/products/${id}`)
      .then((response) => context.commit('fillHistoryItems', response.data))
    },
    async createProduct(context, product){
      await axios.post('http://localhost:5000/api/products', {
        title: product.title,
        price: product.price,
        shortDesc: product.shortDesc,
        longDesc: product.longDesc,
        imgFile: product.imgFile
      },{
      headers: {
        Authorization: context.state.token
      }
    })
    },
    async updateProduct(context, product){ 
      await axios({
        method: 'PATCH',
        url: `http://localhost:5000/api/products/${product._id}`,
        headers: {
          Authorization: context.state.token
        },
        data: {
            title: product.title, 
            price: Number(product.price),
            shortDesc: product.shortDesc,
            longDesc: product.longDesc,
            imgFile: product.imgFile
        }
      })
    },
    async deleteProduct(context, id){
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: {
          Authorization: context.state.token
        }
      })
    }

  },
  modules: {
  }
})
