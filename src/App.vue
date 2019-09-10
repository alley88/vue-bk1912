<template>
  <div id="app">
   <keep-alive>
      <router-view></router-view>
   </keep-alive>
   
    <Alley-TabBar v-if="$route.meta.flag"/>
  </div>
</template>
<script>
import TabBar from "@components/tabBar"
import axios from "axios"
export default {
    name:"App",
    components:{
      [TabBar.name]:TabBar
    }
}
</script>
<style lang="scss">
#app{
  height: 100%;
}
</style>
