<template>
  <main>
    <button @click="toggle">Add</button>
    <button @click="toggle">Edit</button>
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

.product-container{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:10px;
    padding-top:2rem;
    padding-bottom: 1rem;
}
</style>