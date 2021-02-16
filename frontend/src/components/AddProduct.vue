<template>
  <main>
      <div class="main-container">
          <div class="left">
            <label>Product Photo</label>
            <div class="image border"></div>
          </div>
              <form>
                  <div class="middle">
                    <label for="title">Product Name</label>
                    <input v-model="product.title">
                    <label>Product short desc</label>
                    <input v-model="product.shortDesc">
                    <label>Product price</label>
                    <input v-model="product.price">
                  </div>
              </form>
              <form>
                  <div class="right">
                      <label>Product description</label>
                      <textarea class="border" v-model="product.longDesc"></textarea>
                  </div>
              </form>
              <div class="button-container">
                  <button @click="addProduct">Add</button>
              </div>
      </div>
  </main>
</template>

<script>
export default {

    data(){return{
        product: {
            title: "",
            price: "",
            shortDesc: "",
            longDesc: "",
            imgFile: "No-image.png",
        },
    }},

    methods:{
        async addProduct(){
            await this.$store.dispatch('createProduct', this.product)
            this.product = {}
            await this.$store.dispatch('fetchProducts')
        },
    }
    
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';
main{
    
    margin:0 .5rem .5rem .5rem;
    padding:0 .5rem .5rem .5rem;
    
    label{
        color: $bg-light-grey;
        display:inline-block;
    }
    input{
        background-color: transparent;
        color: $bg-light-grey;
        outline:none;
        border: 1px solid $bg-light-grey;
        opacity: .6;
        padding: .5rem;
        margin-top: .37rem;
        width:100%;
    }
    textarea{
        background-color: transparent;
        color: $bg-light-grey;
        resize: none;
        margin: 1rem;
        outline:none;
        height:85%;
        width:90%;
    }
}
.main-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: $bg-dark-grey;
}
.left{
    grid-column: 1/2;
    width:100%;
    padding: .5rem;
    label{
        margin-left: .5rem;
    }
    .image{
        height:85%;
        background-image: url('~@/assets/No-image.png');
        background-size:5rem;
        background-position: center;
        background-repeat: no-repeat;
    }
}
.middle{
    grid-column: 2/3;
    padding: .5rem;
}
.right{
    grid-column: 3/4;    
    padding: .5rem;
    height:100%;
    label{
        margin-left: .5rem;
    }
}
.border{
    border: 1px solid $bg-light-grey;
    margin: .5rem;
    opacity: .6;
}
.head {
    display: flex;
    flex-direction: row;
    padding: 1rem 0;

    hr {
        border-bottom: 1px solid $bg-dark-grey;  
        opacity: .6; 
        flex-grow: 2;  
        align-self: center;
        margin-left: 1rem;
    }
}
.button-container{
    grid-column: 3/4;
    display: flex;
    justify-content: flex-end;
    margin: .5rem;
    padding-right: 1rem;
    padding-bottom: .5rem;   

    button{
        padding: .4rem 1rem;
        background-color: transparent;
        color: $bg-light-grey;
        border: 1px solid $bg-light-grey;
        
        &:hover{
            background-color: $bg-light-grey;
            color: $bg-dark-grey;
        }
    }
}

</style>