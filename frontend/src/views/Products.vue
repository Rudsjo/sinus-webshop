<template>
<div>
  <div class="product-container">
    <ProductItem v-for="(product,index) in productList"
    :key=index
    :product='product'
    @click.native="toggleModal(product)"
    />
  </div>
  <div v-if="showModal">
    <Overlay :show="showModal" @close="showModal = false">
      <ProductModal :product='chosenProduct'/>
    </Overlay> 
  </div>
</div>
</template>

<script>

import ProductItem from '@/components/ProductItem';
import Overlay from '@/components/Overlay';
import ProductModal from '@/components/ProductModal';

export default {
  name: 'Products',

  components:{
    ProductItem,
    Overlay,
    ProductModal
  },

  data() {return {
    showModal: false,
    chosenProduct: {}
  }},

  computed:{
    productList(){
      return this.$store.state.productList
    }
  },

  methods: {
    toggleModal(item){
      this.showModal = !this.showModal
      this.chosenProduct = item
    }
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
    padding-top:2rem;
    padding-bottom: 1rem;
}

</style>
