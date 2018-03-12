<template>
    <div id="order-all">
        <div class="order-none" v-if="orderList.length == 0">
            暂时没有订单信息哦
        </div>
        <div v-else class="order-list">
            这里是订单信息
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                orderList:[],
            }
        },
        methods:{
            
        }
    }
</script>
<style lang="less" scoped>
    
</style>