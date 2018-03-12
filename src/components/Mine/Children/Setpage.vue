<template>
    <div id="setpage">
        <div class="setpage-top">
           <div class="setpage-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="setpage-top-set">设置</span>
        </div>
        <div class="setpage-main">
            <router-link :to="{name:'Self'}" tag="div" class="setpage-main-list">
                <div class="setpage-img">
                    <img :src="headImg" alt="">
                </div>
                <div class="setpage-center">个人资料</div>
                <div class="setpage-icon">
                    <span></span>
                </div>
            </router-link>
            <router-link :to="{name:'Account'}" tag="div" class="setpage-main-list">
                <div class="setpage-img">
                    <img :src="safeImg" alt="">
                </div>
                <div class="setpage-center">账户安全</div>
                <div class="setpage-icon">
                    <span></span>
                </div>
            </router-link>
            <router-link to="/mine/aboutus" tag="div" class="yikuai setpage-main-list">
                <div class="setpage-img">
                    <img src="/dist/static/images/guanyuyikuai.png" alt="">
                </div>
                <div class="setpage-center">关于易快</div>
                <div class="setpage-icon">
                    <span></span>
                </div>
            </router-link>
        </div>
        <div class="sigo-out">
            <button class="sigo-out-user">退出当前账户</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                headImg:"/dist/static/images/gerenziliao.png",
                safeImg:"/dist/static/images/anquan.png",
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
    #setpage{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .setpage-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .setpage-top-back{
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
            .setpage-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        .setpage-main{
            display: flex;
            flex-direction: column;
            .setpage-main-list{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem;
                position: relative;
                box-sizing: border-box;
                .setpage-img{
                    flex: 0 0 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    overflow: hidden;
                    
                }
                .setpage-center{
                    flex: 1;
                    text-indent: 1em;
                }
                .setpage-icon{
                    flex: 0 0 1rem;
                    span{
                        width: 20px;
                        height: 20px;
                        display: block;
                        background: url(/dist/static/images/yikuaisprites.png)no-repeat -185px -49px;
                        background-size: 200px 200px;
                    }
                }
            }
            .setpage-main-list:after{
                content: "";
                width: 100%;
                border-bottom: 1px solid #757575;
                position: absolute;
                left: 0;
                bottom: 0;
                transform: scaleY(.5);
            }
        }
        .yikuai{
            border-top: 0.4rem solid #ccc;
        }
        .sigo-out{
            position: absolute;
            left: 0;
            bottom: 1rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .sigo-out-user{
                flex: 0 0 17rem;
                height: 2.4rem;
                background: #FF5001;
                color: #fff;
                border-radius: 0.5rem;
                border: 0;
                outline: 0;
                font-size: 0.9rem;
            }
        }
    }
</style>