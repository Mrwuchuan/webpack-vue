<template>
    <div id="receivegoods">
        <div class="receivegoods-none" v-if="receiveGoods.length == 0">
            暂时没有待收货订单哦
        </div>
        <div class="receivegoods-list" v-else>
            订单信息
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                receiveGoods:[]
            }
        },
        methods:{
            
        }
    }
</script>
<style lang="less" scoped>
    
</style>