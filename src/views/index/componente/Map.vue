<template>
  <div class="map" id="map">
    <div class="side">
      <slot name='left'></slot>
    </div>
    <div class="side">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
window._AMapSecurityConfig = {
  securityJsCode: '05137464da74585b0d9c821086419f72',
}
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  data() {
    return {

    }
  },
  mounted() {
    const that = this
    AMapLoader.load({
      key: "fcb203bdac5a2a7e1a25ba4f4d4bb18e",  // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Weather'],   // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
      let map = new AMap.Map('map', {
        zoom: 18,//级别
        pitch: 50,
        center: [120.138036,30.17912],//中心点坐标
        viewMode: '3D',//使用3D视图
        mapStyle: "amap://styles/2af8385b89087f9ffefd43d4f960eaf8"
      })
    }).catch(e => {
      console.log(e); 
    })
  },

}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
  z-index: 99;

  .side {
    height:100%;
    top:80px;
    width: 300px;
    position: fixed;
    z-index: inherit;
    &:nth-child(2){
      right:0
    }
  }
}
</style>