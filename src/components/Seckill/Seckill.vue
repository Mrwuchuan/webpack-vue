<template>
    <div id="seckill">
        <div class="classfied">
            <span class="back" @click="historyGo">＜</span>
            <span class="classfied-son">{{theme}}</span>
        </div>
        <div class="main">
            <div class="seckill-logo">
                <img :src="logo" alt="">
            </div>
            <div class="seckill-goods">
               <div class="seckill-time">
                   <span>10点秒杀</span><span>秒杀已结束</span>
               </div>
                <ul class="seckill-goods-ul">
                    <router-link class="seckill-goods-list" :to="{name:'Details',params:{id:item.goodsId}}" tag="li" v-for="(item,index) in goods" :key="item.goodsId">
                        <span class="goods-img">
                            <img :src="item.images" alt="">
                        </span>
                        <div class="desc">
                            <p class="desc-name">
                                {{item.name}}
                            </p>
                            <p class="desc-name-donation">{{item.donation}}</p>
                            <div class="goods-price">
                                <div>
                                    <p class="native-price" style="color: red">¥{{item.activePrice}}</p>
                                    <p class="native-price"><del>¥{{item.price}}</del></p>
                                </div>
                                <button>立刻购买</button>
                            </div>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                path:"/details",
                logo:"../../../static/images/597e7e5eNa207dabb.jpg",
                theme:"秒杀专场",
                goods:[
                    {
                        name:"韩束红石榴六件套原价598秒杀价239",
                        price:598,
                        activePrice:239,
                        donation:"赠送10易豆",
                        images:"../../../static/images/597c63f8N0a6a2f93.jpg",
                        goodsId:7712
                    },
                    {
                        name:"韩束红石榴六件套原价598秒杀价239",
                        price:598,
                        activePrice:239,
                        donation:"赠送10易豆",
                        images:"../../../static/images/597c63f8N0a6a2f93.jpg",
                        goodsId:7712
                    },
                    {
                        name:"韩束红石榴六件套原价598秒杀价239",
                        price:598,
                        activePrice:239,
                        donation:"赠送10易豆",
                        images:"../../../static/images/597c63f8N0a6a2f93.jpg",
                        goodsId:7712
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
    #seckill{
        .classfied{
            width: 100%;
            display: inline-flex;
            justify-content: center;
            height: 2rem;
            align-items:center;
            background: #ff0000;
            color: #fff;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 999;
            .back{
                flex: 0 0 1.5rem;
                text-align: center;
            }
            .classfied-son{
                flex: 1;
                width: 100%;
                display: inline-block;
                text-align: center;
                margin-left: -2rem;
            }
        }
        .main{
            margin-top: 2rem;
            width: 100%;
            background: #f9f7f7;
            .seckill-goods{
                width: 100%;
                .seckill-time{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 1.5rem;
                    font-size: 0.7rem;
                    position: relative;
                    color: #171616;
                }
                .seckill-time:after{
                    content: "";
                    width: 100%;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    border-bottom: 1px solid #333;
                    transform: scaleY(.5);
                }
                .seckill-goods-ul{
                    width: 100%;
                    
                    overflow: hidden;
                    .seckill-goods-list{
                        width: 100%;
                        display:flex;
                        justify-content: space-between;
                        height: 6rem;
                        font-size: 0.8rem;
                        padding-bottom:0.3rem;
                        .goods-img{
                            flex: 0 0 6rem;
                            padding: 0 0.2rem;
                            vertical-align: middle;
                            height: 100%;
                            img{
                                height: 100%;
                            }
                        }
                        .desc{
                            flex: 1;
                            box-sizing: border-box;
                            padding-left: 0.5rem;
                            .desc-name{
                                color: #171616;
                            }
                            .desc-name-donation{
                                color: red;
                                font-size: 0.7rem;
                            }
                            .goods-price{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                button{
                                    border: 0;
                                    outline: 0;
                                    background: red;
                                    border-radius: 0.3rem;
                                    font-size: 0.7rem;
                                    padding: 0 1rem;
                                    margin-right: 1rem;
                                    color: #fff;
                                    margin-top: 1rem;
                                }
                            }
                        }
                    }
                }
                
            }
        }
    }
</style>