<template>
  <div>
      <h1 v-if="name===''"> Your Profile</h1>
      <h1 v-else>{{name}} profile</h1>
  </div>    
</template>
<script lang="ts">
export default {
    data(){
        return {
            name:""
        }
    },
    created(){
       console.log(this.$route); 
       let name=this.$route.params.name
       console.log(name);
       this.name= name===undefined ? "":name;
    }
}

</script>
<style>

</style>
