<template>
    <div class="hello">
       <Footers></Footers>
        <div class="hearder-top">
            <span>
                <img width="100%" src="../../../static/images/favicon.png" alt="">
            </span>
            <router-link class="search" to="/search">
                <input type="text" placeholder="搜索">
            </router-link>
            <router-link class="classify" to="/classify" tag="button">
                <span class="classify-item"></span>
                <span class="classify-item"></span>
                <span class="classify-item"></span>
            </router-link>  
        </div>
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
        <Homeclassifed></Homeclassifed>
        <div class="seckill bd-b">
            <div class="seckills bd-b">
               <div class="seckill-sec">秒杀专场</div>
               <div class="seckill-dao">距秒杀结束&nbsp;20:20:20</div>
            </div>
            <ul class="seckill-img">
                <router-link to="/seckill" tag="li" class="seckill-img-list">
                    <img src="../../../static/images/55cef443Ne7ef7c7b.jpg" alt="">
                    <div class="seckill-price">
                        <span>¥99</span><span><del>¥99</del></span>
                    </div>
                </router-link>
                <router-link to="/seckill" tag="li" class="seckill-img-list">
                    <img src="../../../static/images/56f0a709Ne86c67f9.jpg" alt="">
                    <div class="seckill-price">
                        <span>¥99</span><span><del>¥99</del></span>
                    </div>
                </router-link>
                <router-link to="/seckill" tag="li" class="seckill-img-list">
                    <img src="../../../static/images/57ad8ceaNd37c55e5.jpg" alt="">
                    <div class="seckill-price">
                        <span>¥99</span><span><del>¥99</del></span>
                    </div>
                </router-link>
            </ul>
        </div>
        <div class="swiper-container lunbo2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                        <img src="../../../static/images/58edcf13Nddb1be06.jpg" alt="">
                    </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                      <img src="../../../static/images/597ec6aaN64cf6943.jpg" alt="">
                      </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                      <img src="../../../static/images/597e7e5eNa207dabb.jpg" alt="">
                  </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="discover">
            <div class="discover-hearder">发现更多</div>
            <ul class="discover-list">
                <router-link class="bd-r bd-b" to="" tag="li">
                    <img src="../../../static/images/598038e2N9767662b.jpg" alt="">
                </router-link>
                <router-link class="bd-r bd-b" to="" tag="li">
                    <img src="../../../static/images/598145a0N6d41a5c6.jpg" alt="">
                </router-link>
                <router-link class="bd-r bd-b" to="" tag="li">
                    <img src="../../../static/images/598302d6N37fe9549.jpg" alt="">
                </router-link>
                <router-link class="bd-r bd-b" to="" tag="li">
                    <img src="../../../static/images/598038e2N9767662b.jpg" alt="">
                </router-link>
            </ul>
            <div class="swiper-container lunbo2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                        <img src="../../../static/images/58edcf13Nddb1be06.jpg" alt="">
                    </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                      <img src="../../../static/images/597ec6aaN64cf6943.jpg" alt="">
                      </router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="" class="lunbo-a">
                      <img src="../../../static/images/597e7e5eNa207dabb.jpg" alt="">
                  </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        </div>
        <div class="recommend">
            <span></span><span>为 您 推 荐</span><span></span>
        </div>
        <div class="recommend-goods">
            <ul class="recommend-goods-ul">
                <router-link to="" tag="li">
                    <div class="recommend-img">
                        <img src="../../../static/images/58a7fa5eNb07dd023.jpg" alt="">
                    </div>
                    <p class="goods-desc">商品描述</p>
                    <p class="goods-price">¥1000</p>
                </router-link>
                <router-link to="" tag="li">
                    <div>
                        <img src="../../../static/images/58a15473N19695315.jpg" alt="">
                    </div>
                    <p class="goods-desc">商品描述</p>
                    <p class="goods-price">¥1000</p>
                </router-link>
                <router-link to="" tag="li">
                    <div>
                        <img src="../../../static/images/58a15473N19695315.jpg" alt="">
                    </div>
                    <p class="goods-desc">商品描述sdfa啊客服金卡价都是抗</p>
                    <p class="goods-price">¥1000</p>
                </router-link>
                <router-link to="" tag="li">
                    <div>
                        <img src="../../../static/images/58a15473N19695315.jpg" alt="">
                    </div>
                    <p class="goods-desc">商品描述</p>
                    <p class="goods-price">¥1000</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    import Homeclassifed from './Home-classifed'
    import Footers from './Footer'
    export default {
        data() {
            return {
                scroll:''
            }
        },
        methods: {
            handleChange(index) {
//                console.log(index);
            },
            menu(){
                this.scroll = document.body.scrollTop || document.documentElement.scrollTop;
                var scrollT = this.scroll;
                var scrollH = document.body.scrollHeight || document.documentElement.scrollHeight;
                var screenH = window.screen.availHeight;
                if((scrollT+screenH)>=scrollH){
                    console.log("发送ajax请求新数据");
                }
            }
        },
        components:{
            Homeclassifed,
            Footers
        },
        computed:{
            
        },
        mounted() {
            window.addEventListener('scroll', this.menu);
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                pagination: '.swiper-pagination',
                autoplay : 3000,
                speed:300,
                autoplayDisableOnInteraction : false,
          })
        },
        destroyed(){
            window.removeEventListener('scroll',this.menu);
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .hello{
        margin-bottom: 3.3rem;
        height: 100%;
        overflow: scroll;
    }
    .hearder-top{
        padding: 0.3rem 0.3rem;
        display: flex;
        line-height: 1.9rem;
        height: 1.8rem;
/*        background: #C23131;*/
    }
    .hearder-top span{
        flex: 0 0 1.7rem;
        display: inline-block;
        vertical-align: middle;
    }
    .hearder-top .search{
        flex: 1;
    }
    .hearder-top .search input{
        outline: 0;
        border-radius: .3rem;
        text-indent: 0.6em;
        border: 1px solid black;
        width: 100%;
        font-size: 0.8rem;
        height: 100%;
        padding-left: 1rem;
        background: rgba(135, 142, 148, 0.1) url(../../../static/images/05003-lv.png) no-repeat left 0;
        background-size: 0.75rem;
        box-sizing: border-box;
        border: 0;
        vertical-align: top;
    }
    .hearder-top .classify{
        flex: 0 0 2rem;
        background: rgba(7,17,27,0);
        outline: none;
        border: 0;
        box-sizing: border-box;
        padding-left: 0.4rem;
        padding-bottom: 0.2rem;
        .classify-item{
            width: 90%;
            height: 0.1rem;
            background: #C23131;
            display: block;
            margin-top: 0.3rem;
            
        }
    }
    .lunbo{
        height: 8.5rem;
    }
    .lunbo img{
        width: 100%;
    }
    .lunbo-a{
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .classifed{
        width: 100%;
        .classifed-ul{
            display: flex;
            flex-wrap: wrap;
            position: relative;
            .classifed-li{
                width: 3.7rem;
                overflow: hidden;
                padding: 0.3rem 0;
                .classifed-li-div{
                    text-align: center;
                    img{
                        width: 55%
                    }
                    span{
                        display: block;
                        height: 1rem;
                        font-size: 0.6rem;
                        color: #333;
                    }
                }
            }
        }
        .classifed-ul:after{
            content: "";
            width: 100%;
            border-bottom: 1px solid #ccc;
            transform: scaleY(0.5);
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
    .seckill{
        width: 100%;
        height: 9.5rem;
        position: relative;
        .seckills{
            display: flex;
            justify-content: space-between;
            height: 1.5rem;
            line-height: 1.5rem;
            position: relative;
            .seckill-sec{
                padding-left: 1.5rem;
                font-size: 0.7rem;
                color: #333;
            }
            .seckill-dao{
                text-align: right;
                padding-left: 1.5rem;
                font-size: 0.4rem;
                color: #333;
            }
        }
        .seckill-img{
            display: flex;
            justify-content: flex-start;
            .seckill-img-list{
                flex: 1;
                height: 8rem;
                img{
                    width: 100%;
                }
                .seckill-price{
                    box-sizing: border-box;
                    padding: 0 0.3rem;
                    display:flex;
                    justify-content: space-between;
                    span{
                        font-size: 0.8rem;
                        color: red;
                        del{
                            color: #333;
                        }
                    }
                }
            }
            .seckill-img-list{
                position: relative;
            }
            .seckill-img-list:after{
                content: "";
                height: 100%;
                border-left: 1px solid #ccc;
                transform: scaleX(.5);
                position: absolute;
                left: 0;
                top: 0;
            }
            .seckill-img-list:nth-of-type(3n+1):after{
                border-left: 0;
            }
        }
    }
    .lunbo2{
/*        height: 5rem;*/
    }
    .lunbo2 img{
        width: 100%;
    }
    .discover{
        .discover-hearder{
            box-sizing: border-box;
            padding-left: 1.5rem;
            color: #333;
            font-size: 0.7rem;
        }
        .discover-list{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 0.5rem;
            li{
                flex: 1 7rem;
                height: 4.5rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .bd-r:nth-of-type(2n):before{
                border-right: 0 !important;
            }
        }
    }
    .recommend-goods{
        width: 100%;
        overflow-x: hidden;
        .recommend-goods-ul{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                flex: 0 0 9rem;
                position: relative;
                margin: 0.2rem 0;
                padding: 1px;
                .recommend-img{
                     width: 100%;   
                }
                .goods-desc{
                    font-size: 0.8rem;
                    color: #333;
                    box-sizing: border-box;
                    padding: 0 0.5rem;
                    text-overflow: ellipsis;
                    height: 2.2rem;
                }
                .goods-price{
                    padding:0 0.5rem;
                    color: red;
                    font-size: 0.8rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                }
            }
            li:after{
                content: "";
                width: 200%;
                height: 200%;
                border: 1px solid #ccc;
                transform-origin: 0 0;
                transform: scale(0.5,0.5);
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
            }
            li:nth-of-type(2n-1):after{
                border-left: 0;
            }li:nth-of-type(2n):after{
                border-right: 0;
            }
        }
    }
    .recommend{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        display: inline-flex;
        justify-content: center;
        align-items:center;
        span{
            width: 100%;
            border-bottom: 1px solid #ccc;
            transform: scaleY(.5);
            width: 5rem;
        }
        span:nth-of-type(2){
            font-size: .9rem;
            border: 0;
            text-align: center;
            transform: scaleY(1);
            width: auto;
            padding: 0 0.5rem;
            color:#626767;
        }
    }
    
    .bd-b{
        position: relative;
    }
    .bd-b:after{
        content: "";
        width: 100%;
        border-bottom: 1px solid #ccc;
        transform: scaleY(0.5);
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 10;        
    }
    .bd-r{
        position: relative;
    }
    .bd-r:before{
        content: "";
        height: 100%;
        border-right: 1px solid #ccc;
        transform: scaleX(0.5);
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 10;
    }
    
    img{
        width: 100%;
        vertical-align: middle;
    }
    


</style>
