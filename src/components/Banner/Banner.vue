<template>
    <div id="banner">
        <div class="banner-top">
           <div class="banner-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="banner-top-set">广告</span>
        </div>
        <div class="banner-main">
           <div class="banner-main-title">
               <p>碎片时间捡元宝兑换超值商品,分享也得元宝,小伙伴们赶紧行动起来吧!</p>
           </div>
            <div class="banner-main-list" v-for="(item,index) in imgSrc">
                <router-link :to="item.link" class="banner-main-link">
                    <img :src="item.srcList" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                imgSrc:[
                    {
                        link:"",
                        srcList:"/dist/static/images/59814822N7ea5198f.jpg"
                    },
                    {
                        link:"",
                        srcList:"/dist/static/images/59816499N17c9a9c2.jpg"
                    },
                    {
                        link:"",
                        srcList:"/dist/static/images/59814822N7ea5198f.jpg"
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
    #banner{
        
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #ededed;
        .banner-top{
            width: 100%;
            position:fixed;
            left: 0;
            top: 0;
            z-index: 99999;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .banner-top-back{
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
            .banner-top-set{
                flex: auto;
                width: 100%;
                text-indent: -3em;
            }
        }
        .banner-main{
            margin-top: 2rem;
            background: #ededed;
            .banner-main-title{
                width: 100%;
                height: 1.2rem;
                line-height: 1.2rem;
                font-size: 0.5rem;
                background:#fbfefd;
                color: #d4af6e;
                p{
                    text-indent: 1rem;
                }
            }
            .banner-main-list{
                box-sizing: border-box;
                padding: 0.6rem;
                padding-bottom: 0;
                width: 100%;
                .banner-main-link{
                    display: block;
                    box-sizing: border-box;
                    border: 0.4rem solid #fff;
                    img{
                        width: 100%;
                        height: 100%;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>