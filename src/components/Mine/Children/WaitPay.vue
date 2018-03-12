<template>
    <div id="waitpay">
        <div class="waitpay-none" v-if="waitPay.length == 0">
            暂时没有待付款订单哦
        </div>
        <div class="waitpay-list" v-else>
            订单信息
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                waitPay:[],
            }
        },
        methods:{
            
        }
    }
</script>
<style lang="less" scoped>
   
</style>