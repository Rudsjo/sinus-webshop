<template>
  <section class="cart-drop">
        <ul>
            <li>
                <div class="list-item-container">
                    <div class="left">
                        <img src="~@/assets/hoodie-ocean.png">
                        <div class="info-container">
                            <p class="big-t">Namn</p>
                            <p class="medium-t">Short</p>
                            <p class="small-t">art.nr</p>
                        </div>
                    </div>
                    <div class="right">
                        <p class="big-t">999</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="list-item-container">
                    <div class="left">
                        <img src="~@/assets/skateboard-greta.png">
                        <div class="info-container">
                            <p class="big-t">Namn</p>
                            <p class="medium-t">Short</p>
                            <p class="small-t">art.nr</p>
                        </div>
                    </div>
                    <div class="right">
                        <p class="big-t">999</p>
                    </div>
                </div>
            </li>
        </ul>
      <div class="bottom">
        <hr>
            <div class="total">
                <p>TOTAL</p>
                <p>2000</p>
            </div>
        <button class="black">Buy</button>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import'~@/styles/globals.scss';

.cart-drop {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  border-radius: 5px;
 
  height: 15rem; // kanske ta bort då listan kan växa
  width: 14rem;
  background-color: white;
  box-shadow: 0px 0px 34px 5px rgba(0,0,0,0.17);
}

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

.bottom {
    display: flex;
    flex-direction: column;

    .total {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 .6rem 0 .6rem;
    }

    button {
        align-self: center;
        margin: 0.5rem 0 .5rem 0;
    }
    
    hr {
        width: 12rem;
        border-top: 1px solid $bg-light-grey;
        margin: .5rem 0 .5rem 1rem;
    }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: $bg-dark-grey; 
}

</style>