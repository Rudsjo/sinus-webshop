<template>
  <main class="products-container">
    <div v-if="!isAdmin" class="noAccess">
      <h1>YOU SHALL NOT PASS!!</h1>
      <button class="login" @click="$router.push('/')">Fly, you fools!</button>
   </div>
   <div v-else>
      <h1>Admin products</h1>
      <div class="buttons">
        <button @click="openEdit = false">Add</button>
        <div class="border"></div>
        <button @click="openEdit = true">Edit</button>
      </div>
      <div>
        <AddProduct v-if="!openEdit"/>
        <ProductEdit v-else :selectedItem="productItem"
        :image="productItem.imgFile"/>
      </div>
      <div class="product-container">
        <ProductItem v-for="(product,index) in productList"
        :key=index
        :product='product'
        @click="selectProduct(product)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ProductItem from '../components/ProductItem'
import AddProduct from '../components/AddProduct'
import ProductEdit from '../components/ProductEdit'
export default {
  name:'AdminProducts',

  components:{ 
    ProductItem, 
    AddProduct, 
    ProductEdit
  },

  data() {return {
    openEdit: false,
    productItem: {}
  }},

  computed:{
    productList(){
      return this.$store.state.productList
    },
    isAdmin () {
      if(!this.$store.state.currentUser.user || this.$store.state.currentUser.user.role === 'customer') {
          return false
      } else {
          return true
      }
    }
  },
  methods: {
    selectProduct(product) {
      this.productItem = {...product}
    },
    toggle() {
      this.openEdit = !this.openEdit
    }
  },
  
  async beforeMount(){
    await this.$store.dispatch('fetchProducts')
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';

.products-container {
  padding-bottom: 2rem;
}

h1{
  margin-top:1rem;
  padding-left:1rem;
}
.product-container{
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:10px;
  padding-top:2rem;
  padding-bottom: 1rem;
}
.buttons{
  display: flex;
  justify-content: center;
  height:2rem;
  padding: 0 1rem;
  margin-top: 1rem;
  border-bottom: 1px solid $bg-light-grey;
  
  button{
    background-color: $bg-dark-grey;
    color: $bg-light-grey;
    width: 100%;
    &:focus{
      opacity: .5;
    }
  }
  .border{
    border-left: 1px solid $bg-light-grey;
  }
}

.noAccess {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
}
</style>