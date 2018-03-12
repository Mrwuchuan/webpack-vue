<template>
    <div class="hello">
<!--       <Footers></Footers>-->
        <div class="header-top">
            <div class="header-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="header-top-set">快赚</span>  
        </div>
        <div class="swiper-container lunbo">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in dataList.lunboImg">
                    <router-link to="" class="lunbo-a">
                        <img :src="item" alt="">
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="classifed">
            <ul class="classifed-ul">
                <router-link to="/banner" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/5982b628Nbfe321b4.png" alt="">
                        <span>捡元宝</span>
                    </div>
                </router-link>
                <router-link to="/exchangeshop" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/5954cf81N3294a71c.png" alt="">
                        <span>兑换商城</span>
                    </div>
                </router-link>
                <router-link to="/mine/order/all" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d9456Naa85e195.png" alt="">
                        <span>快赚订单</span>
                    </div>
                </router-link>
                <router-link to="/mywing" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/59263c60N0aa922b7.png" alt="">
                        <span>我的元宝</span>
                    </div>
                </router-link>
                <router-link to="/shopenter" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d9475Na810c2eb.png" alt="">
                        <span>商家入驻</span>
                    </div>
                </router-link>
                <router-link to="/wingtips" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d9456Naa85e195.png" alt="">
                        <span>元宝攻略</span>
                    </div>
                </router-link>
                <router-link to="" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/59263c60N0aa922b7.png" alt="">
                        <span>敬请期待</span>
                    </div>
                </router-link>
                <router-link to="/rule" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d9475Na810c2eb.png" alt="">
                        <span>规则</span>
                    </div>
                </router-link>
            </ul>
        </div> 
        <div class="seckill bd-b">
            <div class="seckills bd-b">
               <div class="seckill-sec">超实惠</div>
               <div class="seckill-dao">换一换</div>
            </div>
            <ul class="seckill-img">
                <router-link to="" tag="li" class="seckill-img-list" v-for="(i,index) in dataList.shiHui" :key="index">
                    <div class="seckill-img-list-img">
                        <img :src="i.ImgSrc" alt="">
                    </div>
                    <div class="seckill-price">
                       <p>{{i.desc}}</p>
                        <span>{{i.price}}&nbsp;<font style="color: #595959;">元宝</font></span><span><del>¥{{i.activePrice}}</del></span>
                    </div>
                </router-link>
            </ul>
        </div>
         <div class="swiper-container lunbo2">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in dataList.lunboImg">
                    <router-link to="" class="lunbo-a">
                        <img :src="item" alt="">
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
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
                        <img src="/static/images/58a15473N19695315.jpg" alt="">
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
//    import Homeclassifed from './Home-classifed'
//    import Footers from './Footer'
    export default {
        data() {
            return {
                scroll:'',
                dataList:{
                    lunboImg:[
                        "/dist/static/images/598038e2N9767662b.jpg",
                        "/dist/static/images/598145a0N6d41a5c6.jpg",
                        "/dist/static/images/598302d6N37fe9549.jpg"
                    ],
                    shiHui:[
                        {ImgSrc:"/dist/static/images/55cef443Ne7ef7c7b.jpg",price:99,activePrice:99,desc:"生活苦一点不怕"},
                        {ImgSrc:"/dist/static/images/56f0a709Ne86c67f9.jpg",price:99,activePrice:99,desc:"工作累一点也不怕"},
                        {ImgSrc:"/dist/static/images/57ad8ceaNd37c55e5.jpg",price:99,activePrice:99,desc:"爱情遇到挫折更不怕"},
                        {ImgSrc:"/dist/static/images/55cef443Ne7ef7c7b.jpg",price:99,activePrice:99,desc:"生活苦一点不怕"},
                        {ImgSrc:"/dist/static/images/56f0a709Ne86c67f9.jpg",price:99,activePrice:99,desc:"工作累一点也不怕"},
                        {ImgSrc:"/dist/static/images/57ad8ceaNd37c55e5.jpg",price:99,activePrice:99,desc:"爱情遇到挫折更不怕"},
                    ]
                }
            }
        },
        methods: {
            historyGo(){
                window.history.go(-1);
            },
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
//            Homeclassifed,
//            Footers
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
            });
            
//            this.$http.jsonp('http://101.200.175.51/shops/goods/goodslist.php',{jsonp:"callback"}).then(res=>{
//                console.log(res);
//            },err=>{
//                console.log(err);
//            });
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

     .header-top{
         width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        background: red;
        color: #fff;
        text-align: center;
        font-size: 0.8rem;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
            .header-top-back{
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
            .header-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }

    .lunbo{
        margin-top: 2rem;
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
    .lunbo2{
        margin-top: 0.5rem;
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
/*        height: 11rem;*/
        position: relative;
        .seckills{
            display: flex;
            justify-content: space-between;
            height: 2rem;
            align-items: center;
            position: relative;
            font-size: 0.7rem;
            .seckill-sec{
                padding-left: 1.5rem;
                color: #333;
            }
            .seckill-dao{
                text-align: right;
                padding-left: 1.5rem;
                color: #333;
            }
        }
        .seckill-img{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .seckill-img-list{
                flex: 0 0 6.25rem;
                .seckill-img-list-img{
                    width: 100%;
                    position: relative;
                    text-align: center;
                }
                img{
                    width: 100%;
                    
                }
                .seckill-img-list-img:after{
                    content: "";
                    width: 100%;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    border-bottom: 1px solid #ccc;
                    transform: scaleY(0.5);
                }
                .seckill-price{
                    box-sizing: border-box;
                    padding: 0 0.3rem;
                    display:flex;
                    justify-content: space-between;
                    flex-direction: column;
                    color:#595959;
                    p{
                        font-size: 0.6rem;
                        height: 1.8rem;
                        overflow: hidden;
                    }
                    span{
                        font-size: 0.7rem;
                        line-height: 1.2;
                        color: red;
                        del{
                            color: #595959;
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
            .seckill-img-list:before{
                content: "";
                width: 100%;
                border-bottom: 1px solid #ccc;
                position: absolute;
                left: 0;
                bottom: 0;
                transform: scaleY(0.5);
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
     .classifed{
        width: 100%;
        .classifed-ul{
            display: flex;
            flex-wrap: wrap;
            position: relative;
            .classifed-li{
                width: 4.6rem;
                overflow: hidden;
                padding: 0.3rem 0;
                .classifed-li-div{
                    text-align: center;
                    img{
                        width: 2rem;
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


</style>
