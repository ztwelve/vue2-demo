<template>
  <div class="box">
    <p class="boxTime">{{ dateDay }}</p>
    <div class="date">
      <p class="boxDate">{{ dateYear }} &nbsp;</p>
      <p style="color:#86898b">|</p>
      <p class="boxDay"> &nbsp;{{ dateWeek }}</p>
    </div>
  </div>
</template>
 
<script>
import dayjs from "dayjs";
export default {
  name: "Time",
  data() {
    return {
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      const date = dayjs(new Date());
      this.dateDay = date.format("HH:mm:ss");
      this.dateYear = date.format("YYYY-MM-DD");
      this.dateWeek = date.format(this.weekday[date.day()]);
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;

  .date {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.boxDay {
  font-size: 12px;
  color: #86898b;
}

.boxTime {
  font-size: 25px;
  margin: 0 15px;
  font-family: 'LcdD';
  font-weight: 600;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boxDate {
  font-size: 14px;
}
</style>
