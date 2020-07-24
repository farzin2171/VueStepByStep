<template>
    <div>
        <slot name="summary" v-bind:errorList="errorList">
           <div v-if="summary" class="error-summary">
                <h3>Default Summary</h3>
           <div v-for="error in errorList" :key="`error-${error}`">{{error}}</div>
           </div>
        </slot>
        <slot>
        </slot>
       
    </div>   
    
</template>
<script>
export default {
  name:"a-form",
    props:{
         value:{
             required:true,
             type:Boolean
         },
         summary:{
             required:false,
             type:Boolean
         }
    },
    watch:{
      formValid:{
          immediate:true,
          handler(newValue){
              this.$emit("input",newValue);
          }
      }
    },
    data(){
          return {
              form:{
                  errors:[]
              }
          }
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
    errorList(){
       var err=Object.values(this.form.errors).filter(v=>v !==true);
       return err;
    },
    formValid(){
      return this.errorList.length ===0
    }
  }
}
</script>
<style lang="stylus" scoped>
  .error-summary
     padding 0.75rem
     border 1px solid red
     border-redius 5px 
      
</style>