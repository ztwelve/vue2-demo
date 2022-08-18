<template>
  <div class="main">
    <TabTop></TabTop>
    <router-view></router-view>
  </div>
</template>
<script>
import TabTop from './components/TabTop';
export default {
  name: 'layout',
  components: { TabTop }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background: linear-gradient(#000308, #00a0d8, #000308);
}
</style>