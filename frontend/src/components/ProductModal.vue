<template>
<div class="modal">
    <section class="left" :style="{'background-image': 'url('+ productImg +')'}"></section>
    <section class="right">
        <div>
            <h1>{{this.product.title}}</h1>
            <h2>{{this.product.shortDesc}}</h2>
        </div>
        <div>
            <p>{{this.product.longDesc}}</p>
            <p class="price">{{this.product.price}} sek</p>
        </div>
        <button class="black" @click="addToCart">Buy</button>
    </section>
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
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss" scoped>
@import'~@/styles/globals.scss';

.modal {
    display: flex;
    flex-direction: row;
    width: 600px;
    height: 400px;
    background-color: white;
}

.left {
    background-color: $bg-light-grey;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 20rem;
    height: 100%;
    width: 50%;
}

.right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    padding: 2rem;

    p {
        font-size: small;

        &.price {
            font-size: 1.1rem;
            font-weight: $heavy;
            opacity: 1;
            padding-top: .7rem;
        }
    }

    button {
        align-self: center;
    }
}

</style>