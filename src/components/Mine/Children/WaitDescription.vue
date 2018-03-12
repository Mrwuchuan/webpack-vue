<template>
    <div id="waitdescription">
        <div class="waitdescription-none" v-if="waitDescription.length == 0">
            暂时没有待评论订单哦
        </div>
        <div class="waitdescription-list" v-else>
            订单信息
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                waitDescription:[]
            }
        },
        methods:{
            
        }
    }
</script>
<style lang="less" scoped>
    
</style>