<script setup lang="ts">
   import { login } from '@/request/api';
   import router from '@/router/router';
   const handleLogin = () => {
      console.log(2);
      
      login("/api/login", "post", {
         phone: "18608645531",
         password: "~123qwer"
      }).then(fn => {
         const res = fn();
         if(res.token && res.status === 200){
            localStorage.setItem("bill_token", res.token);
            router.push("/")
         }
      })
   }
</script>
<template>
   <input type="text">
   <el-button type="primary" @click="handleLogin">登录</el-button>
</template>

<style scoped>
</style>
   