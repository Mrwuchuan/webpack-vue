<template>
    <div id="wing">
        <div class="wing-top">
           <div class="wing-top-back" @click="historyGo">
               <span></span>
           </div>
            <span class="wing-top-set">元宝攻略</span>
        </div>
        <div class="wing-main">
            <div class="wing-main-con">
                <div class="wing-head">
                    
                </div>
                <div class="wing-container">
                    <div class="wing-container-top">
                        元宝攻略说明
                    </div>
                    <p class="first">元宝余额</p>
                    <p class="second">元宝余额=看广告转的+返利得的-消耗的</p>
                    <p class="first">会员角色介绍</p>
                    <p>会员:一星,二星,三星</p>
                    <p>商户:普通,一钻,二钻,三钻</p>
                    <br>
                    <p>会员如何获得更多元宝</p>
                    <p>易快中所有会员角色可通过看广告获得元宝(20元宝/人,30次/天)</p>
                    <p>成功推荐朋友看广告可得元宝</p>
                    <p>返利机制:星级会员返利最高15%,商户级别最高返利25%。</p>
                    <p>举例:</p>
                    <p>①三星推荐一星,一星捡一次元宝(20元宝),三星获得20*15%=3元宝,一天最多可获得返利3*30=90元宝</p>
                    <p>②三钻推荐二钻,二钻捡一次元宝,将获得20*25%=5元宝,三钻一天最多可获得返利30*5=150元宝.以此类推,推荐会员越多,会员等级越高,获得返利越多,真正实现元宝坐等入账</p>
                    <p>4、用易券、易豆或现金升级等级，收益大幅提升。</p>
                </div>
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
                var enter = document.querySelector('#wing');
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
    #wing{
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #f8ebbe;
        .wing-top{
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
            .wing-top-back{
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
            .wing-top-set{
                flex: 1;
                text-indent: -3em;
            }
        }
        .wing-main{
            margin-top: 2rem;
            
            .wing-main-con{
                width: 16rem;
                margin: 3rem auto 0;
                background: #f4f1df;
                .wing-head{
                    height: 0.5rem;
                    width: 100%;
                    background: #f4f1df;
                    background: linear-gradient(#f4f1df 60%,#a49e8b 100%);
                    box-shadow: 0px 0px 3px #a49e8b;
                }
                .wing-container{
                    height:24rem;
                    box-shadow: 0px 0px 3px #a49e8b;
                    background: linear-gradient(#a49e8b 0%,#f4f1df 0.5%,#f4f1df 100%);
                    padding-top: 0.5rem;
                    padding-left: 1rem;
                    box-sizing: border-box;
                    font-size: 0.6rem;
                    .wing-container-top{
                        width: 4.5rem;
                        text-align: center;
                        height: 1rem;
                        line-height:1.1rem;
                        color: #fff;
                        position: relative;
                        z-index: 1;
                    }
                    .wing-container-top:after{
                        content: "";
                        width: 100%;
                        height: 100%;
                        background: #f75004;
                        transform:skewX(-30deg);
                        box-shadow: 1px 1px 0px 1px #a49e8b;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: -1;
                    }
                    .first{
                        padding-top: 0.7rem;
                        font-size: 0.7rem;
                    }
                }
            }
        }

    }
</style>