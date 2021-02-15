<template>
  <main>
    <div>
      <AddProduct />
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
export default {
  name:'AdminProducts',

  data() {return {
    openEdit: false
  }},
  components:{ ProductItem, AddProduct},

  computed:{
    productList(){
      return this.$store.state.productList
    }
  },
  methods: {
    selectProduct(product) {
      this.$store.commit('selectProduct', product)
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