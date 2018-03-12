<template>
    <div id="upgrade">
        <div class="upgrade-top">
           <div class="upgrade-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="upgrade-top-set">我要升级</span>
        </div>
        <div class="upgrade-main">
            <div class="upgrade-main-check">
                <router-link to="/mine/upgrade/personage">会员升级</router-link>
                <router-link to="/mine/upgrade/shopgrade">商户升级</router-link>
            </div>
            <div class="upgrade-main-des">
                <h2>升级规则</h2>
                <p>会员包含:一星会员、二星会员、三星会员</p>
                <p>商家包含:普通商户、一钻商户、二钻商户、三钻商户、荣誉商户(三钻直接推荐3个三钻)</p>
            </div>
        </div>
        <router-view class="fiexds"></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
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
    #upgrade{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .upgrade-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .upgrade-top-back{
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
            .upgrade-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        
    }
    .upgrade-main{
        .upgrade-main-check{
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 22rem;
            a{
                flex: 0 0 2.3rem;
                color: #666;
                border-radius: 50%;
                background: radial-gradient(circle at center 1.1rem,#fff 50%,#b5babb 100%);
                box-shadow: 0px 2px 3px 3px #b5babb;
                text-align: center;
            }
        }
        .upgrade-main-des{
            width: 100%;
            box-sizing: border-box;
            padding: 0 1rem;
            color: #757575;
            h2{
                text-align: center;
                width: 100%;
            }
        }
    }
    .fiexds{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
    }
</style>