// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import './permission'
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/styles/font.css"
import echarts from "echarts"
Vue.prototype.$echarts = echarts
Vue.use(elementUI)
Vue.config.productionTip = false
// Vue.use(permission)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
