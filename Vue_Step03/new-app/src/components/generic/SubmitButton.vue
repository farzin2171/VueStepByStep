<template>
     <div>
        <button @click="$emit('click')">
            <span v-if="loading">loadding.....</span>
            <slot></slot>
        </button>
     </div>
</template>
<script>
export default {
    name:"a-sbutton",
    props:{
        loading:{
            required:false,
            type:Boolean
        }
    }
    
}
</script>
<style lang="stylus" scoped>
   button 
        color white
        background #3794c1
        border 1px solid #000
        padding 0.5erm 1erm
        box-shadow 0 1px 1px 0 #000
        border  non 
        transition ease-in 50ms
        &:focus
          outline 
        &:hover
          background-color #429dc
          box-shadow 0 1px 3px 0 #000
          cursor pointer
      
</style>