import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Layout",
      component: layout,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: (resolve) => require(['@/views/index/index'], resolve)
        },
        {
          path: "manage",
          name: "Manage",
          component: () => import("@/views/manage/index")
        }
      ]
    },
  ]
})
