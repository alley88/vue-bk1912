<template>
  <div id="app">
    <router-view></router-view>
    <Alley-TabBar/>
  </div>
</template>
<script>
import TabBar from "@components/tabBar"
export default {
    name:"App",
    components:{
      [TabBar.name]:TabBar
    }
}
</script>
<style lang="scss">

</style>
