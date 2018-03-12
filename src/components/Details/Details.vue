<template>
    <div id="details">
        <div class="classfied">
            <span class="back" @click="historyGo">＜</span>
            <span class="classfied-son">{{theme}}</span>
        </div>
        <div class="main">
            <div class="swiper-container detail">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in main.detailImg" :key="index">
                        <img :src="item" alt="">
                    </div>
                    
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="main-des">
                <div class="main-des-p">
                    <p class="des-des">{{main.description}}</p>
                    <p class="des-p"><span>¥</span>{{main.price | date}}</p>
                    <p class="des-d">{{main.donation}}</p>
                    <div class="address">
                        {{main.address}}
                    </div>
                </div>
            </div>
            <div class="shop-detail">
                <div class="shop-name">
                    <div class="shop-img">
                        <img :src="main.titleImg" alt="">
                    </div>
                    <div class="shop-name-p">
                        <div class="shop-name-p-a">
                            <p>{{main.name}}</p>
                            <p>所在地区:{{main.address}}</p>
                        </div>
                        <div class="grade">
                            <div>
                                <span v-for="item in main.grade">
                                    <img :src="main.gradeImg" alt="">
                                </span>
                            </div>
                            <div>等级</div>
                        </div>
                    </div>
                </div>
                <div class="go-shop">
                    <router-link to="">联系卖家</router-link>
                    <router-link to="">进店逛逛</router-link>
                </div>
            </div>
            <div class="goods-detail">
                <img v-for="item in main.detailImg" :src="item" alt="">
            </div>
        </div>
        <div class="detail-footer">
            <router-link :to="{name:'Kefu',params:{id:'item.goodsId'}}">在线客服</router-link>
            <router-link to="">加入购物车</router-link>
            <router-link :to="{name:'Nowbuy',params:{id:7712}}">立即购买</router-link>
        </div>
    </div>
</template>

<script>
    export default{
        beforeCreate(){
            var a = this.$route.params.id || "";
            console.log(a);
            this.goodsId = a;
        },
        data(){
            return{
                theme:"商品详情",
                main:{
                    detailImg:[
                        "../../../static/images/597e833eN489c58e5.jpg",
                        "../../../static/images/597f5cfaN42a3cc67.jpg",
                        "../../../static/images/597f0160Nfafd95f6.jpg"
                    ],
                    price:1599.00,
                    donation:"赠送1易豆",
                    address:"四川省成都市",
                    description:"索菲亚整体衣柜 冲浪百叶 定制衣柜步入式衣帽间定做推拉门衣柜",
                    name:"成都索菲亚家居旗舰店",
                    grade:2,
                    id:7638,
                    titleImg:"../../../static/images/593fa0d4Nf0fe3c8d.jpg",
                    gradeImg:"../../../static/images/grade.gif"
                },
                goodsId:-1,
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            go(){
                console.log('this.goodsId');
            }
        },
        filters:{
            date(val){
                return val.toFixed(2);
            }
        },
        mounted(){
            new Swiper ('.detail', {
                loop: true,
                autoplay : 3000,
                pagination: '.swiper-pagination',
                paginationType : 'fraction',
                autoplayDisableOnInteraction : false,
            }) 
        }
    }
</script>

<style lang="less" scoped>
    #details{
        width: 100%;
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
            margin-bottom: 2rem;
            .detail{
                height: 8.4rem;
                overflow: hidden;
            }
            .main-des{
                width: 100%;
                box-sizing: border-box;
                padding: 0.2rem 0.3rem 0.2rem 0.2rem;
                border-bottom: 0.3rem solid #ccc;
                .main-des-p{
                    width: 100%;
                    .des-des{
                        color: #271919;
                        font-size: 0.8rem;
                    }
                    .des-p{
                        color: red;
                        font-size: 1.3rem;
                        font-weight: 700;
                        height: 1.4rem;
                        span{
                            font-size: 0.7rem;
                            font-weight: 500;
                        }
                    }
                    .des-d{
                        background: red;
                        color: #fff;
                        padding: 0 0.2rem;
                        font-size: 0.7rem;
                        display: inline-block;
                    }
                    .address{
                        text-align: right;
                        font-size: 0.7rem;
                        color: #271919;
                    }
                }
            }
            .shop-detail{
                width: 100%;
                overflow: hidden;
                padding: 0.3rem 0.3rem 0.5rem;
                box-sizing: border-box;
                border-bottom: 0.2rem solid #ccc;
                .shop-name{
                    display: flex;
                    justify-content: space-between;
                    .shop-img{
                        flex: 0 0 3rem;
                        vertical-align: middle;
                    }
                    .shop-name-p{
                        width: 100%;
                        font-size: 0.6rem;
                        display: flex;
                        justify-content: space-between;
                        .shop-name-p-a{
                            padding: 0.3rem;
                            box-sizing: border-box;
                            p:first-child{
                                font-size: 0.8rem;
                                color: #000;
                                padding-bottom: 0.4rem;
                                
                            }
                        }
                        .grade{
                            div:first-child{
                                display: flex;
                                box-sizing: border-box;
                                padding-top: 0.3rem;
                            }
                            text-align: center;
                        }
                    }
                }
                .go-shop{
                    width:100%;
                    display: flex;
                    justify-content: space-around;
                    a{
                        display: inline-block;
                        width: 6rem;
                        height: 1.5rem;
                        line-height: 1.5rem;
                        border: 1px solid red;
                        color: red;
                        border-radius: 0.3rem;
                        font-size: 0.7rem;
                        text-align: center;
                    }
                }
            }
            .goods-detail{
                font-size: 0;
            }
        }
        .detail-footer{
            width:100%;
            height: 2rem;
            line-height: 2rem;
            display: flex;
            justify-content: center;
            position: fixed;
            left: 0;
            bottom: 0;
            text-align: center;
            a{
                flex: 1;
                color: #fff;
                font-size: 0.6rem;
            }
            a:first-child{
                background: #fff;
                color: #333;
            }
            a:nth-of-type(2){
                background: #00cccc;
            }
            a:nth-of-type(3){
                background: red;
            }
        }
    }
</style>