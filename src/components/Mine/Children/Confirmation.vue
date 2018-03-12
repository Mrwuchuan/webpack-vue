<template>
    <div id="confirmation">
        <div class="confirmation-top">
           <div class="confirmation-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="confirmation-top-set">确认交易</span>
        </div>
        <div class="confirmation-main">
            <p class="confirmation-main-des">易豆</p>
            <h1 class="confirmation-main-price">¥{{$route.params.id | toFiexds}}</h1>
            <div class="confirmation-main-recive">
                <span>收款方</span>
                <span>易快</span>
            </div>
            <div class="now-pay">
                <button>立即支付</button>
            </div>
            <div class="baoxian">
                <span>支付安全由中国人民财产保险股份有限公司承保</span>
            </div>
        </div>
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
        },
        filters:{
            toFiexds(val){
                return parseInt(val).toFixed(2);
            }
        }
    }
</script>
<style lang="less" scoped>
    *{margin: 0;padding: 0;}
    ul li{
        list-style: none;
    }
    #confirmation{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .confirmation-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: #393a3f;
            color: #fff;
            text-align: center;
            .confirmation-top-back{
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
            .confirmation-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        .confirmation-main{
            width: 100%;
            background: #ededed;
            height: 94%;
            .confirmation-main-des{
                width: 100%;
                height: 1.5rem;
                line-height: 1.5rem;
                text-align: center;
                padding-top: 0.4rem;
                font-size: 0.9rem;
            }
            .confirmation-main-price{
                font-size: 2rem;
                font-weight: 700;
                text-align: center;
            }
            .confirmation-main-recive{
                width: 100%;
                height: 2.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #fff;
                border: 1px solid #ccc;
                border-left: 0;
                border-right: 0;
                font-size: 0.75rem;
                span:first-of-type{
                    padding-left: 0.5rem;
                    color: #b0b0b0;
                }
                span:last-of-type{
                    padding-right: 0.5rem;
                }
            }
            .now-pay{
                display: flex;
                width: 100%;
                padding: 0.8rem;
                box-sizing: border-box;
                justify-content: center;
                align-items: center;
                button{
                    background: #1aad19;
                    height: 2.3rem;
                    align-self: center;
                    flex: 1;
                    color: #fff;
                    border: 0;
                    outline: 0;
                    border-radius: 0.2rem;
                    font-size: 0.9rem;
                }
            }
        } 
    }
    .baoxian{
        display: flex;
        width: 100%;
        justify-content: center;
        height: 1rem;
        font-size: 0.6rem;
        color: #ccc;
        align-items: center;
        position: absolute;
        left: 0;
        bottom: 0.5rem;
    }
</style>