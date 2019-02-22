<template>
  <div id="app">
    <router-link to='/home'>首页</router-link>
    <router-link to='/image'>图片</router-link>

    <router-link to='/mokuai'>拖拽实例</router-link>
   <transition>
   <router-view></router-view>
   </transition>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 组件过渡动画 */
 .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 1s ease;
  }
</style>
