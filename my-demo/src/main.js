// The Vue build version to load with the `import` command     使用“导入”命令加载Vue构建版本
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.  (只在运行时或独立运行时)已在webpack.base.conf中使用别名设置。
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import $ from 'jquery'
// import './lib/tz/dist/css/gridstack.css'
// import './lib/tz/dist/css/default.css'
// import './lib/tz/dist/css/font-awesome.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
