<template>
    	<div class="container-fluid">
        <div class="grid-stack">
            <div class="grid-stack-item" data-gs-x="4" data-gs-y="0" data-gs-width="4" data-gs-height="4">
                <div class="grid-stack-item-content">
                        <div class="grid-stack">
                            <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content">1</div></div>
                            <div class="grid-stack-item" data-gs-x="3" data-gs-y="0" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content">2</div></div>
                            <div class="grid-stack-item" data-gs-x="6" data-gs-y="0" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content">3</div></div>
                            <div class="grid-stack-item" data-gs-x="9" data-gs-y="0" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content">4</div></div>
                            <div class="grid-stack-item" data-gs-x="0" data-gs-y="1" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content">5</div></div>
                            <div class="grid-stack-item" data-gs-x="3" data-gs-y="1" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content">6</div></div>
                            <div class="grid-stack-item" data-gs-x="0" data-gs-y="1" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content">5</div></div>
                            <div class="grid-stack-item" data-gs-x="3" data-gs-y="1" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content">6</div></div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
</template>
<script>
// import '../../lib/tz/css/gridstack.css'
// import '../../lib/tz/css/default.css'
// import '../../lib/tz/css/font-awesome.min.css'
// import '../../lib/tz/js/jquery-ui.min.js'
// import '../../lib/tz/js/gridstack.js'
// import '../../lib/tz/js/lodash.min.js'

export default {
    data(){
        return {
            
        }
    }
}
</script>
<style lang="less" scoped>

     .grid-stack {
            background: lightgoldenrodyellow;
        }

        .grid-stack-item-content {
            color: #2c3e50;
            text-align: center;
            background-color: #18bc9c;
        }

        .grid-stack .grid-stack {
            /*margin: 0 -10px;*/
            background: rgba(255, 255, 255, 0.3);
        }

        .grid-stack .grid-stack .grid-stack-item-content {
            background: lightpink;
        }
</style>