import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homeComponent from '../page/home'
import imageComponent from '../page/image'
import mokuaiComponent from '../page/mokuiai'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path:'/home',component:homeComponent},
    { path:'/image',component:imageComponent},
    { path:'/mokuai',component:mokuaiComponent}
  ]
})
