<template>
  <div>
      <h1 v-if="name===''"> Your Profile</h1>
      <h1 v-else>{{name}} profile</h1>
      <div>
          <router-view></router-view>
      </div>
      <div>
           {{profile.firstName}} - {{profile.lastName}}
           <br>
           {{profile.age}} {{profile.gender}} {{profile.bio}}
      </div>
  </div>       
</template>
<script>

export default {
    data(){
        return {
            profile:{}
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
    watch:{
      "$route.params.name":{
          immediate:true,
          handler(name){
              this.loadProfile(name);
          }
      }
    },
    methods:{
        loadProfile(name){
      
       console.log(name);
       this.name= name===undefined ? "":name;
       this.$api.get("profile/"+name).then(res=>{
           console.log(res.data);
           this.profile=res.data
       })
        }
    }
    
}

</script>
<style>

</style>
