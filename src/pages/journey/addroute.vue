<template>
   <div class="addroute_container">
     <div class="main" @click="$router.push({'name' : 'AddPeople'})">
       <img src="../../assets/images/jia3.png" alt="">
       <span>添加行程</span>
     </div>
     <p>暂无行程，添加如实信息即可<span class="blue">专车接送</span></p>
   </div>
   
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/css/addroute.scss";
</style>

