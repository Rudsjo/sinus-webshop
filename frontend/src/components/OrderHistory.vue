<template>
<div >
    
    <div class="order-info image">
        <p>Order ID: {{}}</p>
        <p>Date: {{}}</p>
        <p>Order value: {{}}</p>
    </div>
  <hr>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';

    .image{
        background-image: url('~@/assets/order-history.png');
        background-size: 3rem;
        background-repeat: no-repeat;
        background-position: right;
        margin-right: 2rem;
    }
    .order-info{
        cursor: pointer;
        display:flex;
        flex-direction: column;
        padding:1rem;
        &:hover{
            background-color: $bg-light-grey
        }   
    }
    hr{
        margin: 0 .8rem;
    } 
</style>