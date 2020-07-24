<template>
     <div class="select-input">
        <label class="label">{{label}}</label>
        <div class="select is-primary">
          <select :value="value" @input="$emit('input',$event.target.value)">
          <option v-if="placeholder" value>{{placeholder}}</option>
          <option v-for="o in options" :value="o.value" :key="`opt-${o.value}-${o.text}`">{{o.text}}</option>
          </select>
        </div>
     </div>
</template>
<script lang="ts">
export default {
    name:"a-select",
    props:{
        label:{
            requred:false,
            type:String
        },
        value:{
            requred:true,
            type:String
        },
        placeholder:{
            requred:false,
            type:String
        },
        options:{
            requred:true,
            type:Array
        }
    }
}
</script>
<style lang="stylus">
 .select-input
    label 
      display block
    margin-left 10px  
    margin-right 10px
   
    
</style>