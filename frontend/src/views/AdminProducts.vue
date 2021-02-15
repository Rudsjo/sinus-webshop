<template>
  <main>
    <div>
      <ProductEdit />
    </div>
    <div class="product-container">
      <ProductItem v-for="(product,index) in productList"
      :key=index
      :product='product'
      @click="toggleModal(product)"
      />
    </div>
  </main>
</template>

<script>
import ProductItem from '../components/ProductItem'
import ProductEdit from '../components/ProductEdit'
export default {
  name:'AdminProducts',

  components:{ ProductItem, ProductEdit},

  computed:{
    productList(){
      return this.$store.state.productList
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