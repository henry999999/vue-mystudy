<template>
    <!-- template内只能有一个根节点 -->
    <div>
        <div class="home-container">
            <h1>{{ msg }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:123
        }
    }
}
</script>
<style lang="less" scoped>
    .home-container{
        h1{
            color: red;
        }
    }
</style>
