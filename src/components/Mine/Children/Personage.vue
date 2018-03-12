<template>
    <div id="personage">
        <div class="personage-top">
           <div class="personage-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="personage-top-set">会员升级</span>
        </div>
        <div class="personage-main">
            <div class="personage-main-all personage-main-pay">
                <span class="personage-main-all-a">选择级别:</span>
                <input class="personage-main-b" disabled type="text" value="">
            </div>
            <div class="personage-main-all">
                <span class="personage-main-all-a">升级方式:</span>
                <div class="personage-main-cc">
                    <div class="personage-main-dd">
                        <span class="personage-main-icon"></span>
                        <span>易券</span>
                    </div>
                    <div class="personage-main-dd">
                        <span class="personage-main-icon"></span>
                        <span>易豆</span>
                    </div>
                    <div class="personage-main-dd">
                        <span class="personage-main-icon"></span>
                        <span>现金</span>
                    </div>
                </div>
            </div>
            <div class="personage-main-yi">
               <div class="personage-main-kuai">
                   <span class="">易券余额:</span><span>{{0}}</span>
               </div>
                <div class="personage-main-kuai">
                    <span>易豆余额:</span><span>{{0}}</span>
                    <span v-show="">账户余额不足</span>
                </div>
            </div>
            <div class="personage-main-all">
                <span class="personage-main-all-a">需支付额:</span>
                <span class="personage-main-b"></span>
            </div>
            <div class="personage-main-all">
                <span class="personage-main-all-a">支付密码:</span>
                <input class="personage-main-b" type="password" placeholder="请输入支付密码">
            </div>
            <div class="submit-btn">
                <button class="btn">升级</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                personage:{
                   
                }
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
    #personage{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .personage-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .personage-top-back{
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
            .personage-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        .personage-main{
            width: 100%;
            box-sizing: border-box;
            padding: 1rem;
            color: #757575;
            font-size: 0.8rem;
            .personage-main-all{
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 2rem;
                input{
                    width: 100%;
                    border-radius: 0.2rem;outline: 0;
                    text-indent: 0.5em;border: 1px solid #ccc;
                }
                .personage-main-all-a{
                    flex: 0 0 4rem;
                    
                }
            }
        }
    }
    .personage-main-b{
        flex: 1;
    }
    .personage-main-yi{
        display: flex;
        justify-content: flex-start;
    }
    .personage-main-kuai{
        flex: 0 0 50%;
    }
    .personage-main-cc{
        display: flex;
        flex: 1;
        justify-content: space-around;
    }
    .personage-main-icon{
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        background: url(/dist/static/images/yikuaisprites.png) no-repeat -180px -70px;
        background-size: 200px 200px;
    }
    .personage-main-pos{
        background-position: -180px -90px !important;
    }
    .submit-btn{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        .btn{
            flex: 0 0 4rem;
            line-height: 1.5rem;
            height: 1.5rem;
            border-radius: 0.5rem;
            background: #00a1d8;
            color: #fff;
            border: 0;
            vertical-align: middle;
            font-size: 0.8rem;
        }
    }
</style>