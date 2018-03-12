<template>
    <div id="exchange">
        <div class="exchange-top">
           <div class="exchange-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="exchange-top-set">兑换商城</span>
            <div class="exchange-link">
                <router-link to="">历史兑换</router-link>
            </div>
        </div>
        <div class="exchange-main">
            <div class="exchange-main-lun">
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
            </div>
            <div class="exchange-main-paixu">
                <div class="paixu-all" :class="{fontred:bool}" @click="changeGoods($event)">全部</div>
                <div class="paixu-time" :class="{fontred:!bool}" @click="changeGoods($event)">
                    <p>时间</p>
                    <div class="paicu-icon">
                        <span class="paixu-icon-top"></span>
                        <span class="paixu-icon-bot"></span>
                    </div>
                </div>
                <div class="paixu-inp">
                    <input type="text" placeholder="搜索兑换商品/店铺">
                </div>
            </div>
            <div class="exchange-main-list">
                <div class="main-list">
                    <ul class="main-list-ul">
                        <li class="main-list-li" v-for="(item,index) in dataList.goodsList">
                            <router-link class="main-list-li-a" to="">
                                <div class="link-img">
                                    <img :src="item.imgSrc" alt="">
                                </div>
                                <p class="link-desc">{{item.desc}}</p>
                                <p class="link-price"><font style="color: red;">{{item.price}}</font>元宝</p>
                                <p class="link-activeprice"><del>¥{{item.activePrice}}</del></p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                bool:true,
                dataList:{
                    lunboImg:[
                        "/dist/static/images/598038e2N9767662b.jpg",
                        "/dist/static/images/598145a0N6d41a5c6.jpg",
                        "/dist/static/images/598302d6N37fe9549.jpg"
                    ],
                    goodsList:[
                        {
                            desc:'上啦的开饭啦可使肌肤蜡数据库里级大风',
                            imgSrc:'/dist/static/images/59782a1fNbbe5fdf5.jpg',
                            price:1232,
                            activePrice:999
                        },
                        {
                            desc:'上啦的开饭啦可使肌肤蜡数据库里级大风',
                            imgSrc:'/dist/static/images/59292b99N40772647.jpg',
                            price:1232,
                            activePrice:999
                        },
                        {
                            desc:'上啦的开饭啦可使肌肤蜡数据库里级大风',
                            imgSrc:'/dist/static/images/59310e0aN2de1ca36.jpg',
                            price:1232,
                            activePrice:999
                        },
                        {
                            desc:'上啦的开饭啦可使肌肤蜡数据库里级大风',
                            imgSrc:'/dist/static/images/59547cbdNf6c39f14.jpg',
                            price:1232,
                            activePrice:999
                        },
                        {
                            desc:'上啦的开饭啦可使肌肤蜡数据库里级大风',
                            imgSrc:'/dist/static/images/59570bc3N95721c73.jpg',
                            price:1232,
                            activePrice:999
                        },
                        {
                            desc:'上啦的开饭啦可使肌肤蜡数据库里级大风',
                            imgSrc:'/dist/static/images/59754c04N117c8b1e.jpg',
                            price:1232,
                            activePrice:999
                        },
                    ]
                }
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            changeGoods(e){
                var a = e.target.parentElement.className;
                var b = e.target.className;
                if(a.indexOf('fontred') == -1 && b.indexOf('fontred') == -1){
                    //这里做商品的排序代码
                    this.bool = !this.bool;
                }else{
                    return
                }
            }
            
        },
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                pagination: '.swiper-pagination',
                autoplay : 3000,
                speed:300,
                autoplayDisableOnInteraction : false,
            });
        },
        destroyed(){
            this.mySwiper = null;
        }
    }
</script>
<style lang="less" scoped>
    #exchange{
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .exchange-top{
            position:fixed;
            left: 0;
            top: 0;
            z-index: 99999;
            width:100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .exchange-top-back{
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
            .exchange-top-set{
                flex: 1;
                width: 100%;
                text-indent: 3em;
            }
            .exchange-link{
                flex: 0 0 4rem;
                a{
                    font-size: 0.6rem;
                    color: #fff;
                }
            }
        }
        .exchange-main{
            margin-top: 2rem;
            background: #e8e8e8;
            .exchange-main-lun{
                height: 8.4rem;
                overflow: hidden;
            }
            .exchange-main-paixu{
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 1.8rem;
                box-sizing: border-box;
                padding: 0 0.5rem;
                font-size: 0.8rem;
                color: #bbb;
                background: #fff;
                .paixu-all{
                    flex: 0 0 3rem;
                }
                .paixu-time{
                    flex: 0 0 3rem;
                }
                .paixu-inp{
                    input{
                        border: 1px solid #ddd;
                        font-size: 0.6rem;
                        text-indent: 1rem;
                        border-radius: 0.2rem;
                        height: 1.3rem;
                        line-height: 1.3rem;
                    }
                }
            }
            .exchange-main-list{
                width: 100%;
                .main-list{
                    width: 100%;
                    .main-list-ul{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        .main-list-li{
                            margin-top: 0.3rem;
                            flex: 0 0 9.2rem;   
                            background: #fff;
                            .main-list-li-a{
                                color: #595959;
                                display: block;
                                width: 100%;
                                font-size: 0.6rem;
                                .link-img{
                                    width: 100%;
                                    height: 7.6rem;
                                    text-align: center;
                                    vertical-align: middle;
                                    overflow: hidden;
                                    img{
                                        vertical-align: middle;
                                    }
                                }
                                .link-desc{
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    width: 9.2rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .fontred{
        color: red !important;
    }
</style>