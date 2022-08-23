<template>
  <div class="stat">
    <div class="chart" ref="chart"></div>
    <div class="text">
      <div class="top">
        <div class="item">
          <span class="num">{{ chartData[0].value }}</span>
          <span class="content">本月实际用电量(kwh)</span>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="item">
          <span class="num">{{ chartData[1].value + chartData[0].value }}</span>
          <span class="content">本月预计用电量(kwh)</span>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-item">
          <div class="point" style="background-color: #72ffcb;"></div>
          <span>{{ `使用占比${chartData[0].value}/${chartData[1].value + chartData[0].value}` }}</span>
        </div>
        <div class="bottom-item">
          <div class="point" style="background-color: #f6fffb;"></div>
          <span>{{ `余量占比${chartData[1].value}/${chartData[1].value + chartData[0].value}` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { stat } from "./defaultData"
export default {
  data() {
    return {
      chartData: stat
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      let chart = this.$echarts.init(this.$refs.chart)
      let option = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: "用电预期",
            type: 'pie',
            radius: ['60%', '85%'],
            avoidLabelOverlap: false,
            startAngle: 180,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            color: ["#72ffcb", "#f6fffb"],
            data: this.chartData
          }
        ]
      };
      chart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
.stat {
  width: 100%;
  height: 100%;
  display: flex;

  .chart {
    flex: 1;
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;

    .top {
      flex: 1;
      display: flex;
      border-top: 2px solid #648396;
      border-bottom: 2px solid #648396;

      .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        color: #fff;


        .num {
          flex: 3;
          font-family: "LcdD";
          font-size: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          flex: 2;
          font-size: 12px;
        }
      }

      .el-divider--vertical {
        display: inline-block;
        width: 2px;
        height: 90%;
        color: #648396;
        margin: 5px 0;
      }

    }

    .bottom {
      flex: 1;

      .bottom-item {
        margin-top: 10px;
        display: flex;
        align-items: center;

        .point {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        span{
          flex-grow: 1;
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
}
</style>