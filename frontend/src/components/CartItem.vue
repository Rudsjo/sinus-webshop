<template>
    <li>
    <div class="list-item-container">
        <div class="left">
            <img :src='productImg'>
            <div class="info-container">
                <p class="big-t">{{checkedProduct.title}}</p>
                <p class="medium-t">{{checkedProduct.shortDesc}}</p>
                <p class="small-t">SN{{checkedProduct.serial}}</p>
            </div>
        </div>
        <div class="right">
            <p class="big-t">{{checkedProduct.price}}</p>
            <button v-if="!checkRoute" class="trash" @click="removeItem"></button>
        </div>
    </div>
    </li>
</template>

<script>
export default {
    name: 'CartItem',
    
    props:{
        product: {},
        index: Number
    },
    computed:{
        productImg(){
            if(this.product) {
                return require(`@/assets/${this.product.imgFile}`)
            } else {
                 return require(`@/assets/${this.checkedProduct.imgFile}`)
            }
        },
        checkRoute(){
            return this.$router.history.current.path == '/account' 
                   || this.$router.history.current.path == '/adminorders'  
        },
        checkedProduct() {
            if(!this.product) {
                let newProduct = {
                    title: "Item has been removed",
                    shortDesc: "",
                    price: "",
                    serial: "",
                    imgFile: "No-image.png" 
                }
                return newProduct
            } else {
                return this.product
            }
        }
    },
    methods:{
        removeItem(){
            this.$store.commit('removeItemFromCart', this.index)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';

.list-item-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .6rem;
    cursor: pointer;
    
    img {
        width: 3rem;
        object-fit: contain;
        margin-right: .4rem;
    }

    li {
        width: 12rem;
        height: 3rem; 
    }
        &:hover {
            background-color: $bg-light-grey;
        }
}

.big-t {
    font-weight: $heavy;
    opacity: 1;
}

.medium-t {
    font-size: small;
}

.small-t {
    font-size: xx-small;
}

.left {
    display: flex;
}

.right {
    align-self: flex-start;
    padding-right:.4rem;

    button{
        background-color:transparent;
        margin-top:.5rem;
        height:1.3rem;
        width:1.3rem;
        &:hover{
            opacity: .5;
        }
    }
}
.trash{
    background-image: url('~@/assets/trash.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.3rem;
}

.info-container {
    display: flex;
    flex-direction: column;
}
</style>