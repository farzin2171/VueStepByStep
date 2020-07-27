<template>
  <div id="app">
    <div>
        <div>
           <!-- <a @click="page='home'">Home</a>
           <a @click="page='login'">Login</a> -->
           <router-link to="/">Home</router-link>
           <router-link to="/login">Login</router-link>
        </div> 
        <router-view></router-view>
        <button @click="goToLogin">Go To Login</button>
       <!-- <component :is="renderComponent"></component> -->
    </div>
  </div>
  
</template>

<script>
export default {
  name: "App",
  data(){
   return {
     page:"home"
    
   }
  },
  methods:{
     goToLogin(){
        this.$router.push("/login");
     }
  },
  computed: {
    //  renderComponent(){
    //    if(this.page ==="home") return Home;
    //    else if (this.page === "login") return Login

    //    return Home
    //  }
  },
  components:{
    
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
