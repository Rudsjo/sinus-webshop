<template>
  <div class="main">
      <div class="image-container">
          <p>Join the rolling family!</p>
      </div>
      <div class="text-container">
          <h1>Cowabongas</h1>
          <p><strong>Skate ipsum dolor sit amet, rip grip hip grab 540 pivot nose Tracker. Gnar bucket Skateboard Shuffle casper slide 180 boneless layback hardware nosebone.</strong></p>
          <p>Vans California Daze rock and roll chicken wing pogo transfer. Powerslide pivot slam Sidewalk Surfer durometer. Deck full-cab gap Old Ghost ho-ho. Invert melancholy feeble rocket air. Hanger rock and roll g-turn ledge. 50-50 Kevin Harris boarslide</p>
      </div>
      <div class="input-container">
          <h1>Register</h1>

          <label v-if="!validName" style="color: red">Invalid name</label>
          <label v-else for="name">Name</label>
          <input v-model="user.name">

          <label v-if="!validEmail" style="color: red">Invalid email</label>
          <label v-else for="email">Email</label>
          <input type="email" v-model="user.email">

          <label v-if="!validPassword" style="color: red">Invalid password</label>
          <label v-else for="password">Password</label>
          <input type="password" v-model="user.password">
          
          <label for="street">Street</label>
          <input v-model="user.adress.street">
          <div class="city-zip">
              <div>
                <label for="zip">ZIP</label>
                <input v-model="user.adress.zip">
              </div>
              <div>
                <label for="city">City</label>
                <input v-model="user.adress.city">
              </div>
          </div>
          <button class="login" @click="registerUser">Regga</button> 
      </div>
  </div>
</template>

<script>
export default {
    name: 'Register',
    
    data(){return{
       user:{
            name: "",
            email: "",
            password: "",
            adress:{
                street: "",
                zip: "",
                city: ""
            }
        },
        validName: true,
        validPassword: true,
        validEmail: true
    }},
    methods:{
        async registerUser(){ 
            this.validateName()
            this.validatePassword()
            this.validateEmail()
            if(this.validate) {
                await this.$store.dispatch('registerUser', this.user)
                .then(() =>  {
                    this.$router.push('/products')
                })
            }
        },
         validateName() {
            if(!this.user.name || this.user.name.length < 1 || this.user.name[0] == " ") {
                this.validName = false
            } else { this.validName = true }
        },
        validatePassword() {
            if(!this.user.password || this.user.password.includes(" ") || this.user.password.length < 4) {
                  this.validPassword = false
            } else {  this.validPassword = true }
        },
        validateEmail() {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.user.email)) {
                this.validEmail = true
            } else {
                this.validEmail = false
            }
        }
    },
    computed: {
        validate() {
            if(this.validName && this.validEmail && this.validPassword) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/globals.scss';
.main{
    padding-top:2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr .8fr ;
    gap:2rem;
}
.image-container{
    grid-row: 1 /2;
    grid-column: 1/3;
    display: flex;
    height:25rem;
    background-image: url('~@/assets/skate-hero-1.jpg');
    background-size:100%;
    background-repeat: no-repeat;
    background-position:center;
    justify-content: center;
    align-items: center;
    p{
        font-family: $header-font;
        color:white;
        font-size:2.5rem;
        opacity: 1;
    }
}
.text-container{
    grid-row: 2/3;
    grid-column: 1/2;
    
    p{
        margin:.6rem 0;
    }

}
.input-container{
    display: flex;
    flex-direction: column;    
    grid-row: 2/3;
    grid-column: 2/2;

    label{
        padding:.4rem 0;
    }
    input{
        background-color:transparent;
    }
    button{
        margin:.6rem 0;
        align-self: flex-end;
    }
    .city-zip{
        margin: .6rem 0;
        gap:10px;
        display: flex;
        flex-direction: row;
    }
}

</style>