<template>
    <div id="mycode">
        <div class="mycode-top">
           <div class="mycode-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="mycode-top-set">关于</span>
        </div>
        <div class="mycode-main">
            <div class="my-code-img">
               <img src="/dist/static/images/1ba12269ed13872077be6316f6e952e.png" alt="">
            </div>
            <p class="mycode-version">For Andriod V3.3</p>
            <div class="mycode-erweima">
                <img src="/dist/static/images/APPdownload.png" alt="">
            </div>
            <p class="mycode-version">扫描二维码,您的朋友也可以下载易快客户端</p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
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
    #mycode{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .mycode-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .mycode-top-back{
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
            .mycode-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        .mycode-main{
            display: flex;
            width: 100%;
            justify-content: center;
            flex-direction: column;
            .my-code-img{
                flex: 0 0 5rem;
                align-self: center;
                margin-top: 1.5rem;
            }
            .mycode-version{
                flex: 1;
                width: 100%;
                text-align: center;
                color: #757575;
            }
            .mycode-erweima{
                flex: 0 0 10rem;
                align-self: center;
                margin-top: 1rem;
            }
        }
    }
</style>