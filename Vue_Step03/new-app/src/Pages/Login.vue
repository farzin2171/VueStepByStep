<template>
    <a-form>
           <a-text v-model="form.userName" :textLimit=15 label="user Name"></a-text>
           <a-text v-model="form.password" :textLimit=15 label="password"></a-text>
           <button @click="login">Login</button>
    </a-form>
</template>
<script>

export default {
  data(){
    return {
        form:{
            userName:"",
            password:""
        },
        formValid:true
    }
  },
  methods:{
    login(){
      this.$router.push("profile");
    }
  }
}
</script>
<style>

</style>