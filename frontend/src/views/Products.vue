<template>
<div class="product-container">
  <ProductItem v-for="(product,index) in productList"
  :key=index
  :product = 'product'
  />
</div>
</template>

<script>
import ProductItem from '@/components/ProductItem';
export default {
  name: 'Products',
  computed:{
    productList(){
      return this.$store.state.productList
    }
  },
  components:{
    ProductItem
  },
  created(){
    
      this.$store.dispatch('fetchProducts')
  }
  
}
</script>

<style lang="scss" scoped>

.product-container{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:10px;
    padding-top:1rem;
    padding-bottom: 1rem;
}

</style>
