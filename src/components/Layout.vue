<script setup lang="ts">

</script>

<template>
   <div class="layout">
      <main>
         <slot/>
      </main>
      <nav>
         <router-link to="/tags">标签</router-link>
         <router-link to="/home">首页</router-link>
         <router-link to="/bill">账单</router-link>
      </nav>
   </div>
</template>

<style scoped lang="scss">
   .layout{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: space-between;
      nav{
         height: 80px;
         width: 100%;
         display: flex;
         justify-content: space-around;
         align-items: center;
         box-shadow: 0px 0px 8px #999;
         font-size: 18px;
         router-link{
            width: 33.33%;
            padding: 14px 24px;
         }
      }
   }
</style>
