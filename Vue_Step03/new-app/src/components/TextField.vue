<template>
     <div class="text-input" >
       <div>
        <label class="label" >{{label}}</label>
        <input :value="value" :class="valid" @input="$emit('input',$event.target.value)" >
       </div>
     <div v-if="textLimit>0" class="validation" >{{inputCount}}/{{textLimit}}</div>
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
        }
  },
  watch:{
    value:function(newValue,oldValue){
     if(newValue.length>this.textLimit) {
         this.$emit('input',oldValue);
           this.valid();
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
         if(this.isEmpty || this.isExceededLimit)
             return "input is-danger"
         else
             return "input is-primary"
       
     }
  }
    
}
</script>
<style lang="stylus">

</style>