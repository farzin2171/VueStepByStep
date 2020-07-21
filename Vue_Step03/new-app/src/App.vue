<template>
  <div id="app">
    <div>
     <TextField v-model="firstName" :textLimit=15 label="firstName"></TextField>
     <TextField v-model="lastName" :textLimit=15 label="lastName"></TextField>

     <div>
        {{fullName}}
      </div>
    </div>
  </div>
  
</template>

<script>

import TextField from "./components/TextField"
export default {
  name: "App",
  data(){
    return {
       firstName:"",
       lastName:""
    }
  },
  computed:{
    fullName(){
      return this.firstName + " "+this.lastName
    }
  },
  components: {
    TextField
  }
};
</script>

<style lang="stylus">
#app
  margin-top 60px
  .text-input
    label 
      display block
  input 
    display block
    width 100%
  .validation
      text-align right 
      font-size 12px
  input.valid
    border 1px solid green
  input.invalid
    border 1px solid red

</style>
