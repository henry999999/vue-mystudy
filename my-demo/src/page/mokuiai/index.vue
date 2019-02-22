<template>
    <div class="mokuai-container">
        <h1>组件实例</h1>
        <tz></tz>
        <vuetz></vuetz>
    </div>
</template>
<script>
import tz from '../../components/tz'
import vuetz from '../../components/vuetz'
import $ from 'jquery'
export default {
    data () {
        return {
            
        }
    },
    components:{
        tz,
        vuetz
    }
}
</script>
<style lang="less" scoped>
  @import '../../lib/tz/dist/css/gridstack.css';
@import '../../lib/tz/dist/css/default.css';
</style>