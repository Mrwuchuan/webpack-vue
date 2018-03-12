<template>
    <div id="rule">
        <div class="rule-top">
           <div class="rule-top-back" @click="historyGo">
               <span></span>
           </div>
            <span class="rule-top-set">快赚规则</span>
        </div>
        <div class="rule-main">
            <div class="rule-main-list">
                <p class="font-weight">看广告赚元宝</p>
                <p>快赚新上线,猛送元宝,会员点击快赚广告即可获得20元宝,看的越多赚的越多;每个用户每天至多可多得600元宝,快快加入吧.</p>
            </div>
            <div class="rule-main-list">
                <p class="font-weight">分享广告赚元宝</p>
                <p>分享广告,邀请朋友填写邀请码注册会员看广告,将有元宝返利,返利规则和升级规则一致(即:一星会员获5%的元宝返利,二星会员10%,三星会员15%,普通商户,一钻商户,二钻商户,三钻商户,荣誉商户25%的元宝返利);朋友看的越多,您也会赚的越多,自动进账;</p>
            </div>
            <div class="rule-main-list">
                <p class="font-weight">元宝兑换商品</p>
                <p>元宝可在兑换商城兑换商品,商品保质保量,满足生活所需,兑换商城的所有物品不全部包邮,其中不包邮的物品需自付邮费</p>
            </div>
            <div class="rule-main-list">
                <p class="font-weight">以上规则最终解释权归易快网所有</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                imgSrc:"/dist/static/images/shopenter.jpg",
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            enterShop(){
                
            },
            hei(){
                var height = document.documentElement.clientHeight || document.body.clientHeight;
                var enter = document.querySelector('#rule');
                enter.style.height = height+'px';
            }
        },
        mounted(){
            window.addEventListener('load',this.hei(),false);
        },
        destroyed(){
            window.removeEventListener('load',this.hei,false);
        }
    }
</script>
<style lang="less" scoped>
    #rule{
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .rule-top{
            position:fixed;
            left: 0;
            top: 0;
            z-index: 99999;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .rule-top-back{
                display: flex;
                flex: 0 0 2rem;
                height: 100%;
                align-items: center;
                span{
                    font-size: 0;
                    flex: 0 0 20px;
                    height: 20px;
                    background: url(/dist/static/images/goback.png) no-repeat 0px 0px;
                    background-size: 12px;
                    margin-left: 0.5rem;
                }
            }
            .rule-top-set{
                flex: 1;
                text-indent: -3em;
            }
        }
        .rule-main{
            width: 80%;
            margin: 2rem auto 0;
            box-sizing: border-box;
            padding-top: 1rem;
            color: #9d9d9d;
            
            .rule-main-list{
                padding-left: 1rem;
                position: relative;
                border-left: 1px solid #9d9d9d;
                p{
                    line-height: 1.2;
                    font-size: 0.6rem;
                    padding-bottom: 1rem;
                }
                .font-weight{
                    font-size: 0.7rem;
                    font-weight: 700;
                    padding-bottom: 0.2rem;
                }
            }
            .rule-main-list:after{
                content: "";
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 50%;
                background: #9d9d9d;
                position: absolute;
                left: -0.35rem;
                top: 0;
            }
            .rule-main-list:last-of-type{
                border-left: 0;
            }
        }

    }
</style>