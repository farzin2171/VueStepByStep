<template>
  <div id="app">
    <div>
      <Form v-model="formValid" :summary="true">
           <TextField v-model="form.firstName" :textLimit=15 label="firstName" :rules="firstNameRules"></TextField>
     <TextField v-model="form.lastName" :textLimit=15 label="lastName" :rules="lastNameRules"></TextField>
     <SelectField label="Gender" v-model="form.gender" placeholder="select yourt gender" :options="genderList" ></SelectField>
     <SelectField label="Age" v-model="form.age" placeholder="select yourt age" :options="ageList" ></SelectField>
     <ckeditor :editor="form.editor" v-model="form.editorData" :config="form.editorConfig"></ckeditor>
    
       
     <div>
        {{form.fullName}} - {{form.gender}} --{{form.age}}
      </div>

      <div>
        {{form}}
      </div>
      <button v-if="formValid">Validate</button> 
      <span v-else>Please fill out form</span>
      </Form>
     
      <!-- <div>
          <button v-if="formValid">Validate</button> 
         {{errorList}}
      </div>
      <div>
         {{form.errors}}
      </div> -->
    </div>
  </div>
  
</template>

<script>

import Form from "./components/Form"
import TextField from "./components/TextField"
import SelectField from "./components/SelectField"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: "App",
  data(){
    return {
       formValid:false,
       firstNameRules:[
        v=>v.length>0 || "First name is requred",
        v=>v.length<10 || "First name has to be less than 10 charcetr" 
       ],
        lastNameRules:[
        v=>v.length>0 || "Last name is requred"
       ],
       form:{
      //  errors:{},
       firstName:"",
       lastName:"",
       gender:"",
       age:"",
       editor: ClassicEditor,
       editorData: '<p>Content of the editor.</p>',
       editorConfig: {
                      // The configuration of the editor.
                     }
       }
    }
  },
  methods:
  {
   
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
     },
  },
  components: {
    TextField,
    SelectField,
    Form
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
