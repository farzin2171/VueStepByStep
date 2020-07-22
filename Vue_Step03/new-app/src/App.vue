<template>
  <div id="app">
    <div>
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
      <div>
          <button v-if="formValid">Validate</button> 
         {{errorList}}
      </div>
      <div>
         {{form.errors}}
      </div>
    </div>
  </div>
  
</template>

<script>

import TextField from "./components/TextField"
import SelectField from "./components/SelectField"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  name: "App",
  data(){
    return {
       firstNameRules:[
        v=>v.length>0 || "First name is requred",
        v=>v.length<10 || "First name has to be less than 10 charcetr" 
       ],
        lastNameRules:[
        v=>v.length>0 || "Last name is requred"
       ],
       form:{
       errors:{},
       formValid:false,
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
    // validated(){
    //    console.log(this.$children);
    //    for(let i=0;i<this.$children.length;i++)
    //    {
    //      let child=this.$children[i];
    //      console.log(child.isValid);
    //      this.form.formValid=child.isValid===undefined || child.isValid==true;
    //      if(!this.form.isValid)return;
    //    }
    // }
  },
  mounted(){
    this.$children
      .filter(c=>c.isValid !==undefined)
      .forEach(c=>{
         c.$watch("isValid",v=>{
            console.info("Custome Watcher: ",c,v);
            //this.form.errors[c._uid]=v;
            this.$set(this.form.errors,c._uid,v);
         },{immediate:true})
      });
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
    errorList(){
       var err=Object.values(this.form.errors).filter(v=>v !==true);
       return err;
    },
    formValid(){
      return this.errorList.length ===0
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
 
  input.valid
    border 1px solid green
  input.invalid
    border 1px solid red

</style>
