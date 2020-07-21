<template>
  <div id="app">
    <div>
     <TextField v-model="firstName" :textLimit=15 label="firstName"></TextField>
     <TextField v-model="lastName" :textLimit=15 label="lastName"></TextField>
     <SelectField label="Gender" v-model="gender" placeholder="select yourt gender" :options="genderList" ></SelectField>
     <SelectField label="Age" v-model="age" placeholder="select yourt age" :options="ageList" ></SelectField>

    
       
     <div>
        {{fullName}} - {{gender}} --{{age}}
      </div>
    </div>
  </div>
  
</template>

<script>

import TextField from "./components/TextField"
import SelectField from "./components/SelectField"
export default {
  name: "App",
  data(){
    return {
       firstName:"",
       lastName:"",
       gender:"",
       age:""
    }
  },
  computed:{
    fullName(){
      return this.firstName + " "+this.lastName
    },
    ageList(){
      let result=[];
      for (let i=16;i<65;i++) result.push({value:i,text:i});
      return result;
    },
    genderList(){
      return [
        {value:"0",text:"Male"},
        {value:"1",text:"Female"},
        {value:"2",text:"Other"},
      ]
    }
  },
  components: {
    TextField,
    SelectField
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
  .validation
      text-align right   
      font-size 12px
  input.valid
    border 1px solid green
  input.invalid
    border 1px solid red

</style>
