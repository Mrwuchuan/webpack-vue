<template>
    <div id="account">
        <div class="account-top">
           <div class="account-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="account-top-set">账户安全</span>
        </div>
        <div class="account-main">
            <router-link :to="{name:item.addressPage}" class="account-main-list" v-for="(item,index) in loginPass" :key="index">
                <span>{{item.projectName}}</span>
                <span></span>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                loginPass:[
                    {
                        projectName:"登录密码",
                        addressPage:"Phone"
                    },
                    {
                        projectName:"修改手机号",
                        addressPage:"Updatephone"
                    },
                    {
                        projectName:"支付密码",
                        addressPage:"Updatepaypass"
                    }
                ]
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            }
        }
    }
</script>
<style lang="less" scoped>
    #account{
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
        .account-main{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-left: 1rem;
            box-sizing: border-box;
            .account-main-list{
                flex: 1;
                width: 100%;
                height: 2.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #757575;
                position: relative;
                span:first-child{
                    flex: 1;
                    width: 100%;
                    
                }
                span:last-child{
                    flex: 0 0 20px;
                    height: 20px;
                    background: url(/dist/static/images/yikuaisprites.png) no-repeat -185px -49px;
                    background-size: 200px 200px;
                }
            }
            .account-main-list:after{
                content: "";
                width: 100%;
                border-bottom: 1px solid #ccc;
                position: absolute;
                left: 0;
                bottom: 0;
                transform: scaleY(.5);
            }
        }
    }
</style>