<template>
    <div id="mywing">
        <div class="mywing-top">
           <div class="mywing-top-back" @click="historyGo">
               <span></span>
           </div>
            <span class="mywing-top-set">我的元宝</span>
        </div>
        <div class="mywing-main">
            <div class="mywing-main-list mywing-main-first">
                <span>元宝余额</span><span>780</span>
            </div>
            <div class="mywing-main-list">
                <span>看广告赚的</span><span>780</span>
            </div>
            <div class="mywing-main-list">
                <span>返利的元宝</span><span>0</span>
            </div>
            <div class="mywing-main-list">
                <span>消耗的元宝</span><span>0</span>
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
                var enter = document.querySelector('#mywing');
                enter.style.height = height+'px';
            }
        },
        mounted(){
            window.addEventListener('load',this.hei(),false);
        },
        destroyed(){
            window.removeEventListener('load',this.hei,false);
            (function(){
                if(false){
                    function f(){console.log('innerside');}
                }
                f();
            })()
        }
    }
</script>
<style lang="less" scoped>
    #mywing{
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .mywing-top{
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
            .mywing-top-back{
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
            .mywing-top-set{
                flex: 1;
                text-indent: -3em;
            }
        }
        .mywing-main{
            width: 100%;
            margin: 2rem auto 0;
            box-sizing: border-box;
            color: #9d9d9d;
            display:flex;
            flex-direction: column;
            div.mywing-main-first{
                height: 3rem;
                background: #f0eff5;
                justify-content: flex-start;
                span:last-of-type{
                    font-size: 1rem;
                    color: #f1243c;
                    margin-left: 1rem;
                }
            }
            .mywing-main-list{
                flex: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 2.5rem;
                box-sizing: border-box;
                padding: 0 0.5rem;
                position: relative;
            }
            .mywing-main-list:after{
                content: "";
                width: 100%;
                border-bottom: 1px solid #ccc;
                transform: scaleY(0.5);
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }

    }
</style>