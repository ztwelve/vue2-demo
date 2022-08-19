<template>
  <div class="tabtop">
    <div class="logo">
      <img style="width: 100%; height: 100%" src="@/assets/images/title-logo.png">
    </div>
    <div class="menu">
      <span :style="route == item.value ? 'color:#fff' : 'color:#6c6e71'" v-for="item in menus" :key="item.value"
        @click="handleMenu(item.value)">{{
            item.label
        }}</span>
    </div>
    <div class="time">
      <!-- <weather class="weather" /> -->
      <Time class="date" />
    </div>
  </div>

</template>
<script>
import weather from '@/layout/components/weather'
import Time from '@/layout/components/time'
import Time1 from './time.vue'
export default {
  components: { weather, Time, Time1 },
  name: "TabTop",
  data() {
    return {
      route: 'Index',
      menus: [
        { label: "首页", value: "Index" },
        { label: "后台", value: "Manage" },
        { label: "menu3", value: "menu1" },
        { label: "menu4", value: "menu4" }

      ]
    }
  },
  methods: {
    handleMenu(path) {
      this.route = path
      this.$router.push({ name: path })
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-menu {
  background-color: rgba(0, 0, 0, 0);
  color: #fff;

  &:hover {
    background-color: #686868;
  }
}

.tabtop {
  display: flex;
  padding: 10px;

  .logo {
    flex: 2;
  }

  .menu {
    flex: 6;
    margin-left: 10px;
    display: flex;
    border: 1px solid red;
    align-items: center;
    justify-content: space-around;

    span {
      cursor: pointer;
      caret-color: rgba(0, 0, 0, 0);

      &:hover {
        color: #fff !important;
      }
    }
  }

  .time {
    flex: 2;
    border: 1px solid red;
    display: flex;

    .date {
      flex: 2;
    }

    .weather {
      flex: 1;
    }
  }
}
</style>