<template>
    <div id="discover">
       <Footers></Footers>
       <div class="discover-top">
           <p>易券购</p>
           <router-link to="/search">
               <input type="text" placeholder="搜索">
           </router-link>
       </div>
       <div class="discover">
           <div class="swiper-container lunbo">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                        <img src="../../../static/images/598038e2N9767662b.jpg" alt="">
                    </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                      <img src="../../../static/images/598145a0N6d41a5c6.jpg" alt="">
                      </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                      <img src="../../../static/images/598302d6N37fe9549.jpg" alt="">
                  </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="hot-goods">
           <div class="hot-goods-title">
               <span>{{goods[0].hotGoods.name}}</span>
           </div>
            <div class="swiper-container swiper-container-horizontal lunbo2">
                <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                    <div v-for="(item,index) in goods[0].hotGoods.goodsList" class="swiper-slide hot-goods-list">
                        <div class="hot-goods-img">
                            <img :src="item.img" alt="">
                        </div>
                        <p class="hot-goods-desc">{{item.desc}}</p>
                        <div class="hot-goods-price">
                            <span>易券{{item.price}}</span>
                            <router-link to="">{{item.discuss}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="new-goods hot-goods">
            <div class="new-goods-title hot-goods-title">
                <span>{{goods[1].newGoods.name}}</span>
            </div>
            <div class="new-goods-main">
                <div class="new-goods-list" v-for="item in goods[1].newGoods.goodsList">
                    <div class="new-goods-img hot-goods-img">
                        <img :src="item.img" alt="">
                    </div>
                    <p class="new-goods-desc">
                        {{item.desc}}
                    </p>
                    <div class="hot-goods-price">
                        <span>易券{{item.price}}</span>
                        <router-link to="">{{item.discuss}}</router-link>
                    </div>
                </div>
            </div>
            <div class="change-goods">
                <span>换一换</span>
            </div>
        </div>
        <div class="goods-classifed">
            <div>
                <img src="/dist/static/images/5982c67fN994cdb68.jpg" alt="">
            </div>
            <div class="goods-classifed-list" v-for="item in goodsClassify">
                <div class="goods-list-title">
                   <p>{{item.name}}</p>
                   <router-link :to="{name:'Search',params:{id:item.name}}">更多</router-link>
               </div>
               <div class="goods-classfied-list-li">
                <div class="new-goods-list" v-for="pig in item.goodsList">
                    <div class="hot-goods-img goods-classfied-img">
                        <img :src="pig.img" alt="">
                    </div>
                    <p class="new-goods-desc">{{pig.desc}}</p>
                    <div class="hot-goods-price">
                        <span>易券{{pig.price}}</span>
                        <router-link to="">{{pig.discuss}}</router-link>
                    </div>
                </div>
               </div>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
    import Footers from '../Home/Footer'
    export default {
        data() {
            return {
                goods: [{
                        hotGoods: {
                            name: "热销商品",
                            goodsList: [{
                                    img: "/dist/static/images/5971ffa0N65e17615.jpg",
                                    desc: "真彩水笔24色(一大堆东西文字)",
                                    price: 60,
                                    discuss: 4
                                },
                                {
                                    img: "/dist/static/images/5976b3abN75809881.jpg",
                                    desc: "真彩水笔24色(一大堆东西文字)",
                                    price: 60,
                                    discuss: 4
                                },
                                {
                                    img: "/dist/static/images/5976eecdN85970df2.jpg",
                                    desc: "真彩水笔24色(一大堆东西文字)",
                                    price: 60,
                                    discuss: 4
                                },
                                {
                                    img: "/dist/static/images/5977f7a1N244d888c.jpg",
                                    desc: "真彩水笔24色(一大堆东西文字)",
                                    price: 60,
                                    discuss: 4
                                },
                                {
                                    img: "/dist/static/images/5979d1eaNfea2fa51.jpg",
                                    desc: "真彩水笔24色(一大堆东西文字)",
                                    price: 60,
                                    discuss: 4
                                }
                            ]
                        }
                    },
                    {
                        newGoods: {
                            name: "新品推荐",
                            goodsList: [{
                                    img: "/dist/static/images/5955eeb2Nc46246ce.jpg",
                                    desc: "ICOU/艾蔻16S苹果智能手表 手环学生老人定位等等巴拉巴拉的",
                                    price: 500,
                                    discuss: 0
                                },
                                {
                                    img: "/dist/static/images/5961b200N2f756c0d.jpg",
                                    desc: "ICOU/艾蔻16S苹果智能手表 手环学生老人定位等等巴拉巴拉的",
                                    price: 500,
                                    discuss: 0
                                },
                                {
                                    img: "/dist/static/images/5971c023N0af99fa4.jpg",
                                    desc: "ICOU/艾蔻16S苹果智能手表 手环学生老人定位等等巴拉巴拉的",
                                    price: 500,
                                    discuss: 0
                                },
                                {
                                    img: "/dist/static/images/5979d1eaNfea2fa51.jpg",
                                    desc: "ICOU/艾蔻16S苹果智能手表 手环学生老人定位等等巴拉巴拉的",
                                    price: 500,
                                    discuss: 0
                                },
                                {
                                    img: "/dist/static/images/5982b25dN120c3672.jpg",
                                    desc: "ICOU/艾蔻16S苹果智能手表 手环学生老人定位等等巴拉巴拉的",
                                    price: 500,
                                    discuss: 0
                                },
                                {
                                    img: "/dist/static/images/5979d1eaNfea2fa51.jpg",
                                    desc: "ICOU/艾蔻16S苹果智能手表 手环学生老人定位等等巴拉巴拉的",
                                    price: 500,
                                    discuss: 0
                                },
                            ]
                        }
                    }
                ],
                goodsClassify: [
                    {
                        name:"教育服务",
                        goodsList:[
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            }
                        ]
                    },
                    {
                        name:"珠宝手表",
                        goodsList:[
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            }
                        ]
                    },
                    {
                        name:"娱乐文化",
                        goodsList:[
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            },
                            {
                                img:"/dist/static/images/5955eeb2Nc46246ce.jpg",
                                desc:"这是一个无情的夜,大雨淋湿了你的头发,更冷你的心",
                                price:40,
                                discuss:5
                            }
                        ]
                    }
                ]
            }
        },
        methods: {

        },
        mounted() {
            new Swiper(".lunbo", {
                loop: true,
                pagination: '.swiper-pagination',
                autoplay: 3000,
                speed: 300,
                autoplayDisableOnInteraction: false,
            });
            new Swiper('.lunbo2', {
                normalizeSlideIndex: false,
                slidesPerView: 3.5,
                spaceBetween: 6,
                onSlideChangeStart: function(swiper) {
                    //                  console.log(swiper.activeIndex);
                }
            })
        },
        beforeCreate() {

        },
        components: {
            Footers
        }
    }
</script>
<style lang="less" scoped>
    .lunbo {
        height: 8.4rem;
    }
    .discover-top {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: red;
        font-size: 0.8rem;
        height: 2rem;
        p {
            flex: 0 0 3.5rem;
            text-align: center;
            color: #fff;
        }
        a {
            width: 100%;
            flex: 1;
            padding-right: 2rem;
            box-sizing: border-box;
            input {
                border: 0;
                outline: 0;
                border-radius: 0.2rem;
                text-indent: 1rem;
                width: 100%;
            }
        }
    }
    .hot-goods {
        width: 100%;
        font-size: 0.7rem;
        background: #f5eded;
        .hot-goods-list {
            background: #fff;
        }
        .hot-goods-title {
            width: 100%;
            height: 2rem;
            font-size: 0.7rem;
            color: #333;
            /*            background: #f5eded;*/
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                background: orange;
                border-radius: 0.3rem;
                padding: 0 0.2rem;
            }
        }
    }
    .hot-goods-img {
        height: 5.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .hot-goods-desc {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .hot-goods-price {
        display: flex;
        justify-content: space-between;
        color: red;
        a {
            color: #333;
        }
    }
    .new-goods-main {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .new-goods-list {
            flex: 0 0 6.2rem;
            background: #fff;
            margin-top: 0.1rem;
            .new-goods-desc {
                height: 2rem;
                width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    
    .change-goods {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        background: #fff;
        font-size: 0.7rem;
        position: relative;
        span {
            border: 1px solid #333;
            color: #333;
            border-radius: 0.5rem;
            padding: 0 0.3rem;
        }
    }
    
    .change-goods:after {
        content: "";
        width: 100%;
        border-top: 1px solid #ccc;
        position: absolute;
        left: 0;
        top: 0;
        transform: scaleY(.5);
    }
    
    #discover {
        padding-bottom: 3.3rem;
    }
    .goods-classifed{
        background: #f5eded;
    }
    .goods-classfied-img{
        height: 9rem !important;
    }
    .goods-classifed-list {
        font-size: 0.7rem;
        .goods-list-title{
            width: 100%;
            height: 2rem;
            align-items: center;
            display: flex;
            justify-content: space-between;
            color: orangered;
            p{
                text-align: center;
                flex: 1;
                margin-right: -1.5rem;
            }
            a{
                flex: 0 0 2rem;
                color: #939393;
            }
        }
    }
    .goods-classfied-list-li{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .new-goods-list{
            flex:  0 0 9.3rem;
        }
    }
</style>
