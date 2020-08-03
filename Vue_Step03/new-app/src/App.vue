<template>
  <div id="app">
    <div>
        <div>
           <!-- <a @click="page='home'">Home</a>
           <a @click="page='login'">Login</a> -->
           <router-link to="/">Home</router-link>
           <router-link to="/login">Login</router-link>
           <router-link to="/profile">Profile</router-link>
        </div> 
        <router-view></router-view>
        <!-- <button @click="goToLogin">Go To Login</button> -->
       <!-- <component :is="renderComponent"></component> -->
       <div class="menu">
          <router-link v-for="p in profiles" :key="p.id" :to="`/profile/${p.firstName}`">{{p.firstName}} - {{p.lastName}}</router-link>
       </div>
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
  created(){
    //Initilization
    this.$store.dispatch("LOAD_PROFILES",this.$api)
   
  },
  computed:{
    profiles(){
      return this.$store.getters.GET_PROFILES;
    }
  },
  methods:{
     goToLogin(){
        this.$router.push("/login");
     },
     loadProfiles(){
       

     }
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
  a
     padding 0 5px

</style>
