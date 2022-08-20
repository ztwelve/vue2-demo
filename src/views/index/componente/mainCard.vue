<template>
  <div class="box">
    <div class="header">
      <div class="title">
        <i class="el-icon-full-screen" style="color: rgb(24, 254, 254); font-size: 24px"></i>
        <span class="text">标题1</span>
      </div>
      <div class="line">
        <span class="left"></span>
        <span class="center"></span>
        <span class="right"></span>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.box {
  .header {
    background-color: rgba(0,0,0,0.7);
    .title {
      padding: 2px 5px;
      display: flex;
      align-items: center;

      .text {
        margin-left: 5px;
        color: #eceded;
      }
    }

    .line {
      width: 100%;
      height: 3px;
      display: flex;

      .left {
        flex: 2;
        background-color: #fff;
      }

      .center {
        flex: 9;
        background-color: rgb(128, 134, 137);
      }

      .right {
        flex: 1;
        margin-left: 5px;
        background-color: rgb(24, 254, 254);
      }
    }
  }
}
</style>