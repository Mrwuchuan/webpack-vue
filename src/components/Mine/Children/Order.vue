<template>
    <div id="order">
        <div class="account-top">
           <div class="account-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="account-top-set">我的订单</span>
        </div>
        <div class="order-main">
            <router-link class="order-main-list" v-for="(item,index) in links" :key="index" :to="{path:item.linkTo}">{{item.title}}</router-link>
        </div>
        <router-view class="router-view"></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                links:[
                    {title:"全部",linkTo:"/mine/order/all"},
                    {title:"待付款",linkTo:"/mine/order/waitpay"},
                    {title:"待发货",linkTo:"/mine/order/waitsendgoods"},
                    {title:"待收货",linkTo:"/mine/order/receivegoods"},
                    {title:"待评价",linkTo:"/mine/order/waitdescription"}
                ]
            }
        },
        methods:{
            historyGo(){
//                window.history.go(-1);
                this.$router.push({path:'/mine'})
            }
        }
    }
</script>
<style lang="less" scoped>
    #order{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .account-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .account-top-back{
                display: flex;
                flex: 0 0 2rem;
                height: 100%;
                align-items: center;
                justify-content: center;
                span{
                    font-size: 0;
                    flex: 0 0 20px;
                    height: 20px;
                    background: url(/dist/static/images/goback.png) no-repeat 0px 0px;
                    background-size: 12px;
                }
            }
            .account-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
    }
    .order-main{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 2rem;
        .order-main-list{
            color: #757575;
/*            flex: 1;*/
        }
    }
    .router-link-active{
        color: red !important;
    }
    .router-link-exact-active{
        color: #757575;
    }
    .router-view{
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>