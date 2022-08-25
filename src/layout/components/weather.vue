<template>
  <div class="weather">
    <div class="icon">
      <img style="height:100%;width:100%;color:aliceblue" :src="require(`../../assets/images/weather/${wdata.name}.png`)" alt="">

    </div>
    <div class="text">
      <span class="temp">{{ wdata.temp }} <span class="unit">℃</span> </span>
      <span class="name">{{ wdata.name }}</span>
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
      wdata: {
        temp: "",
        name: "阴"
      },
      imgUrl: ""
    }
  },
  mounted() {
    const that = this
    AMapLoader.load({
      key: "fcb203bdac5a2a7e1a25ba4f4d4bb18e",  // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Weather'],   // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
      let weather = new AMap.Weather();
      weather.getLive('杭州市', function (err, data) {
        console.log("data", data)
        that.wdata.temp = data.temperature
        that.wdata.name = data.weather
        that.imgUrl = `../../assets/images/weather/${that.wdata.name}.png`
        console.log("that.imgUrl ", that.imgUrl)
      });
    }).catch(e => {
      console.log(e);
    })
  }
}
</script>
<style lang="scss" scoped>
.weather {
  display: flex;

  .icon {
    flex: 1;
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;

    .temp {
      flex: 1;
      font-family: 'LcdD';
      font-size: 22px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      .unit {
        font-size: 12px;
        margin-left: 3px;
      }
    }



    .name {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #86898b;
      border-top: 1px solid #fff;
    }
  }
}
</style>