<template>
    <div class="product-card"
    :style="{'background-image': 'url('+ productImg +')'}"
    @click="$emit('click')">
    
        <div class="product-info">
            <h1>{{this.product.title}}</h1>
            <h2>{{this.product.shortDesc}}</h2>
            <button class="grey" @click.stop="addToCart"></button>
            <div class="price">
                <p>{{this.product.price}}</p>
                <p class="sek-p">SEK</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:{
        product: {}
    },
    computed:{
        productImg(){
            return require(`@/assets/${this.product.imgFile}`)
        }
    },

    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        }
    }
}
</script>

<style lang="scss" scoped>
.product-card{
    display: flex;
    flex-direction: column;
    position:relative;
    height:20rem;
    width:15rem;
    border-radius: 5px;
    background-color:white;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 10rem;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(140,140,140,0.21); 
    -moz-box-shadow: 0px 0px 5px 0px rgba(140,140,140,0.21); 
    box-shadow: 0px 0px 5px 0px rgba(140,140,140,0.21);
}
.product-info{
    padding:1rem;

    .price{
        display: flex; 
        position: absolute;
        left:25px;
        bottom:25px;
        background-color:black;
        color:white;
        border-radius: 25px;
        width:5rem;
        height:1.8rem;
        align-items: center;
        justify-content: center;
        p{
            opacity:1;
        }
        .sek-p{
            font-size:.6rem;
            padding-left:4px;
            padding-bottom:5px;
            opacity:.8;
        }

    }
    button{
        position: absolute;
        right:20px;
        top:20px;
    }
}
</style>