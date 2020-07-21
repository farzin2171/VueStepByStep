<template>
     <div class="text-input" >
       <div>
        <label class="label" >{{label}}</label>
        <input :value="value" :class="inputCss" @input="$emit('input',$event.target.value)" >
       </div>
       <div class="validation">
        <div v-if="textLimit>0"  >{{inputCount}}/{{textLimit}}</div>
        <div v-if="isValid !==true">{{isValid}}</div>
       </div>
     
     </div>
</template>
<script lang="ts">
export default{
  props:{
        value:{
            requred:true,
            type:String
        },
        textLimit:{
            requred:false,
            type:Number
        },
        label:{
            requred:false,
            type:String
        },
        rules:{
            requred:false,
            type:Array,
            default: ()=>[]
        }
  },
  data(){
    return{
        isValid:true,
        inputCss:"input is-danger"
    }
  },
  watch:{
    value:function(newValue,oldValue){
     if(this.rules.length>0)
     {
         for(let i=0;i<this.rules.length;i++)
         {
         
             this.isValid=this.rules[i](newValue);
             if(this.isValid !==true)
               {
                   this.inputCss="input is-danger"
               }
               else
               {
                   this.inputCss="input is-primary"
               }
             if(this.isValid !==true) break;
         }

     }
     if(newValue.length>this.textLimit) {
         this.$emit('input',oldValue);
           //this.valid();
         }

    }
  },
  computed:{
     inputCount(){
       return this.value.length
     },
     isEmpty(){
       return this.value.length ===0;
     },
     isExceededLimit(){
       return this.value.length >this.textLimit;
     },
     valid(){
         if(!this.isValid)
             return "input is-danger"
         else
             return "input is-primary"
       
     }
  }
    
}
</script>
<style lang="stylus">
   .validation
      text-align right   
      font-size 12px
      display flex
      justify-content space-between
</style>