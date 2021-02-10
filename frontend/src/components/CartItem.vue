<template>
    <li>
    <div class="list-item-container">
        <div class="left">
            <img :src='productImg'>
            <div class="info-container">
                <p class="big-t">{{product.title}}</p>
                <p class="medium-t">{{product.shortDesc}}</p>
                <p class="small-t">SN{{product.serial}}</p>
            </div>
        </div>
        <div class="right">
            <p class="big-t">{{product.price}}</p>
        </div>
    </div>
    </li>
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
}

.info-container {
    display: flex;
    flex-direction: column;
    
}
</style>