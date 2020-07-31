<template>
  <div>
      <h1 v-if="name===''"> Your Profile</h1>
      <h1 v-else>{{name}} profile</h1>
      <div>
          <router-view></router-view>
      </div>
      <div>
           <p v-for="p in profiles" :key="p.id">
               {{p.firstName}}
           </p>
      </div>
  </div>       
</template>
<script>
import  axios from 'axios'
export default {
    data(){
        return {
            name:"",
            profiles:[]
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log("Route Enter");
        next();
    },
    beforeRouteLeave (to,from,next) {
          console.log("Route Leave");
          next();
    },
    created(){
       console.log(this.$route); 
       let name=this.$route.params.name
       console.log(name);
       this.name= name===undefined ? "":name;
       axios.get("http://localhost:49905/api/profile").then(res=>{
           console.log(res.data);
           this.profiles=res.data
       })
    }
}

</script>
<style>

</style>
