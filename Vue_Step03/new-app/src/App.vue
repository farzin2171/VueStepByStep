<template>
  <div id="app">
    <div>
        <div>
           <a @click="page='home'">Home</a>
           <a @click="page='login'">Login</a>
        </div> 

       <component :is="renderComponent"></component>
    </div>
  </div>
  
</template>

<script>

import Home from "./Pages/Home"
import Login from "./Pages/Login"


export default {
  name: "App",
  data(){
   return {
     page:"home",
     components:Home
   }
  },
  computed: {
     renderComponent(){
       if(this.page ==="home") return Home;
       else if (this.page === "login") return Login

       return Home
     }
  },
  components:{
    Home,
    Login
  }
  
};
</script>

<style lang="stylus">
#app
  margin-top 60px
  .text-input
    label 
      display block
    margin-left :10px  
    margin-right :10px
  input 
    display block
    width 100%
  select 
     display block
    width 100%
 
  input.valid
    border 1px solid green
  input.invalid
    border 1px solid red

</style>
