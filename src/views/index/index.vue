<template>
  <div class="main">
    <Map>
      <div class="side" slot='left'>
        <mainCard class="item" title="月度用电统计">
          <Stat />
        </mainCard>
        <mainCard class="item" title="标题2"></mainCard>
        <mainCard class="item" title="标题2"></mainCard>
      </div>
      <div class="side" slot="right">
        <!-- <mainCard class="item" title="月度用电统计">
          <Stat />
        </mainCard>
        <mainCard class="item" title="标题2"></mainCard>
        <mainCard class="item" title="标题2"></mainCard> -->
      </div>
    </Map>
    <!-- <div class="index">
      <div class="side">
        <mainCard class="item" title="月度用电统计">
          <Stat />
        </mainCard>
        <mainCard class="item" title="标题2"></mainCard>
        <mainCard class="item" title="标题2"></mainCard>
      </div>
      <div class="center">
      </div>
      <div class="side"></div>
    </div> -->
  </div>

</template>
<script>
import mainCard from './componente/mainCard.vue';
import Stat from '@/views/index/componente/Stat.vue';
import Map from './componente/Map.vue';
export default {
  components: { mainCard, Stat, Map }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
.side {
    width: 300px;
    padding: 0 10px;
    backdrop-filter: saturate(150%) conreast(100%) blur(8px);
    -webkit-backdrop-filter: saturate(150%) contrast(100%) blur(5px);
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;

    .item {
      flex: 1;
    }
  }

.index {
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  // padding-top: 96px;
  z-index: 998;
  justify-content: space-between;

  .side {
    width: 300px;
    padding: 0 10px;
    backdrop-filter: saturate(150%) conreast(100%) blur(8px);
    -webkit-backdrop-filter: saturate(150%) contrast(100%) blur(5px);
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    flex-direction: column;

    .item {
      flex: 1;
    }
  }

  .center {
    flex: 3;
    z-index: 1;
    display: none;
  }

}
</style>