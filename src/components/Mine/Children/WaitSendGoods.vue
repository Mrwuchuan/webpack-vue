<template>
    <div id="waitsendgoods">
        <div class="waitsendgoods-none" v-if="waitSendGoods.length == 0">
            暂时没有待发货订单哦
        </div>
        <div class="waitsendgoods-list" v-else>
            订单信息
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                waitSendGoods:[]
            }
        },
        methods:{
            
        }
    }
</script>
<style lang="less" scoped>
   
</style>