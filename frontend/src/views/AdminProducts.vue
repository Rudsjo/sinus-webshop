<template>
  <main>
    <h1>Admin products</h1>
    <div class="buttons">
      <button @click="toggle">Add</button>
      <div class="border"></div>
      <button @click="toggle">Edit</button>
    </div>
    <div>
      <AddProduct v-if="openEdit"/>
      <ProductEdit :selectedItem="productItem" v-else/>
    </div>
    <div class="product-container">
      <ProductItem v-for="(product,index) in productList"
      :key=index
      :product='product'
      @click="selectProduct(product)"
      />
    </div>
  </main>
</template>

<script>
import ProductItem from '../components/ProductItem'
import AddProduct from '../components/AddProduct'
import ProductEdit from '../components/ProductEdit'
export default {
  name:'AdminProducts',

  data() {return {
    openEdit: false,
    productItem: {}
  }},
  components:{ ProductItem, AddProduct, ProductEdit},

  computed:{
    productList(){
      return this.$store.state.productList
    }
  },
  methods: {
    selectProduct(product) {
      this.productItem = {...product}
    },
    toggle() {
      this.openEdit = !this.openEdit
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';

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
</style>