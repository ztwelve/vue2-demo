<template>
  <div class="main">
    <TabTop class="top" />
    <div class="content">
      <router-view></router-view>
    </div>
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
  display: flex;
  flex-direction: column;
  .top{
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 999;
  }
  .content{
    height: 100%;
  }
}

.flex-flex {
  display: flex;
  flex-direction: column;

  .flex-top {
    flex: 1;
    padding: 10px;
  }

  .flex-center {
    flex: 13;
  }

  .flex-bottom {
    flex: 1;
  }
}
</style>