<template>
     <a-form v-model="formValid" summary>
        <template  v-slot:summary="{errorList}" >
           <h3>Custom Summary</h3>
           <div>
              <ul>
                <li v-for="error in errorList" :key="`error-${error}`">{{error}}</li>
              </ul>
           </div>
        </template>
           <a-text v-model="form.firstName" :textLimit=15 label="firstName" :rules="firstNameRules"></a-text>
     <a-text v-model="form.lastName" :textLimit=15 label="lastName" :rules="lastNameRules"></a-text>
     <a-select label="Gender" v-model="form.gender" placeholder="select yourt gender" :options="genderList" ></a-select>
     <a-select label="Age" v-model="form.age" placeholder="select yourt age" :options="ageList" ></a-select>
     <ckeditor :editor="form.editor" v-model="form.editorData" :config="form.editorConfig"></ckeditor>
    
       
     <div>
        {{form.fullName}} - {{form.gender}} --{{form.age}}
      </div>

      <div>
        {{form}}
      </div>
      <button v-if="formValid">Validate</button> 
      <span v-else>Please fill out form</span>
      </a-form>
</template>
<script>

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
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
  }
}
</script>
<style lang="stylus" scoped>

</style>