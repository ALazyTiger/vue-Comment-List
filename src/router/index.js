import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['@/components/index'], resolve)//主页
Vue.use(Router)

export default new Router({
  mode: 'history',//（使用history模式）
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
