<template>
    <div id="mine">
       <Footers></Footers>
        <div class="head-top">
            <router-link class="head-top-user" to="/mine/self" tag="div">
                <div class="user-photo">
                    <img :src="user.img" alt="">
                </div>
                <div class="user-info">
                    <p class="user-info-name">{{user.name}},你好!</p>
                    <p class="user-info-num">{{user.numId}}</p>
                    <p class="user-info-grade">{{user.grade}}</p>
                </div>
            </router-link>
            <router-link class="set-png" to="/mine/setpage" tag="div">
                <img :src="set" alt="">
            </router-link>  
        </div>
        <div class="my-order">
            <router-link class="my-order-top" tag="div" :to="{path:orderAll}">
                <span>我的订单</span>
                <span class="icons">查看全部订单</span>
            </router-link>
            <div class="my-order-main">
                <ul>
                    <router-link v-for="(item,index) in order" :key="index" tag="li" :to="{path:item.linkPath}">
                        <img :src="item.imgSrc" alt="">
                        <p class="main-order-desc">{{item.desc}}</p>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="my-wallet my-order">
            <div class="my-wallet-top my-order-top">
                <span>我的钱包</span>
                <span></span>
            </div>
            <div class="my-wallet-main my-order-main">
                <ul class="my-wallet-list">
                    <router-link to="" v-for="(io,index) in wallet" :key="index" tag="li">
                        <p>{{io.num | toFixeds}}</p>
                        <p>{{io.name}}</p>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="all-list">
            <ul class="all-list-ul">
                <router-link class="all-list-ul-li" :to="all.link.path" tag="li" v-for="(all,index) in allList" :key="index">
                    <img :src="all.img" alt="">
                    <p>{{all.desc}}</p>
                </router-link>
            </ul>
        </div>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import Footers from '../Home/Footer'
    import Self from './Children/Selfcenter'
    export default{
        data(){
            return{
                user:{
                    name:"小哥",
                    numId:2254748,
                    grade:"一星会员",
                    img:"/dist/static/images/597f10efNc94db2f9.jpg"
                },
                set:"/dist/static/images/shezhi.png",
                orderAll:"/mine/order/all",
                order:[
                    {
                        linkPath:"/mine/order/waitpay",
                        imgSrc:"/dist/static/images/daifukuan.png",
                        desc:'待付款'
                    },
                    {
                        linkPath:"/mine/order/waitsendgoods",
                        imgSrc:"/dist/static/images/daifahuo.png",
                        desc:'待发货'
                    },
                    {
                        linkPath:"/mine/order/receivegoods",
                        imgSrc:"/dist/static/images/daishouhuo.png",
                        desc:'待收货'
                    },
                    {
                        linkPath:"/mine/order/waitdescription",
                        imgSrc:"/dist/static/images/daipingjia.png",
                        desc:'待评价'
                    }
                ],
                wallet:[
                    {
                        num:100.00,
                        name:"易豆"
                    },
                    {
                        num:100.00,
                        name:"易券"
                    },
                    {
                        num:100.00,
                        name:"元宝"
                    }
                ],
                allList:[
                    {img:"/dist/static/images/kuaizhuandingdan.png",desc:"快赚订单",link:{path:'/mine/order/all',params:{}}},
                    {img:"/dist/static/images/woyaoshengji.png",desc:"我要升级",link:{path:'/mine/upgrade',params:{}}
},
                    {img:"/dist/static/images/chongzhi.png",desc:"我要充值",link:{path:'/mine/recharge',params:{}}
},
                    {img:"/dist/static/images/zijinguanli.png",desc:"资金管理",link:{path:'/mine/management',params:{}}
},
                    {img:"/dist/static/images/yaoqing.png",desc:"我的邀请",link:{path:'/mine/invitation',params:{}}
},
                    {img:"/dist/static/images/tuiguang.png",desc:"推广代码",link:{path:'/mine/aboutus',params:{}}
},
                    {img:"/dist/static/images/anquanshezhi.png",desc:"安全设置",link:{path:'/mine/security',params:{}}
},
                    {img:"/dist/static/images/zaixianliuyan.png",desc:"客服留言",link:{path:'/mine/service',params:{}}
}
                ]
            }
        },
        methods:{
            
        },
        mounted(){
            
        },
        beforeCreate(){
            
        },
        components:{
            Footers,
            Self
        },
        filters:{
            toFixeds(val){
                return val.toFixed(2);
            }
        }
    }
</script>
<style lang="less" scoped>
    ul,li,ol{
        list-style: none;
    }
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(100%);
      opacity: 0;
    }
    #mine{
        width: 100%;
        padding-bottom: 3.1rem;
        .head-top{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: red;
            padding: 0.5rem 0;
            color: #fff;
            font-size: 0.8rem;
            border-bottom: 0.4rem solid #f3ecec;
            .head-top-user{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                align-content: center;
                .user-photo{
                    flex: 0 0 3.6rem;
                    border: 0.1rem solid rgba(255,0,0,.3);
                    border-radius:50%;
                    overflow: hidden;
                    background: #fff;
                }
                .user-info{
                    margin-left: 1rem;
                    p:nth-of-type(3){
                        background: orange;
                        border-radius: 0.5rem;
                        font-size: 0.6rem;
                        padding: 0.1rem;
                        width: 3rem;
                        text-align: center;
                    }
                }
            }
            .set-png{
                flex: 0 0 1.2rem;
                height: 3.5rem;
            }
        }
        .my-order{
            width: 100%;
            box-sizing: border-box;
            .my-order-top{
                box-sizing:border-box;
                width: 100%;
                display: flex;
                padding: 0.2rem 0.3rem;
                justify-content: space-between;
                position:relative;
                span{
                    color: #333;
                    font-size: 0.7rem;
                }
                span:first-of-type{
                    padding-left: 1rem;
                    
                }
                span:last-of-type{
                    position: relative;
                    padding-right: 1.5rem;
                }
                .icons{
                    position: relative;
/*                    display: inline-block;*/
                    
                }
                .icons:after{
                    content: "";
                    position: absolute;
                    right: 6px;
                    top: 3px;
                    width: 20px;
                    height: 20px;
                    background: url(/static/images/yikuaisprites.png)no-repeat -186px -49px;
                    background-size: 200px 200px;
                }
            }
            .my-order-top:after{
                content: "";
                width: 100%;
                position: absolute;
                left:0;
                bottom:0;
                border-bottom: 1px solid #ccc;
                transform: scaleY(.5);
            }
            .my-order-main{
                ul{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    height: 3.5rem;
                    align-items: center;
                    border-bottom: 0.3rem solid #f3ecec;
                    li{
                        flex: 0 0 2rem;
                        height: 2rem;
                        text-align: center;
                        img{
                            width: 1.1rem;
                        }
                        .main-order-desc{
                            font-size: 0.6rem;
                        }
                    }
                }
            }
        }
        .my-wallet{
            width: 100%;
            .my-wallet-main{
                width: 100%;
            }
            .my-wallet-list{
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                li{
                    text-align: center;
                    p{
                        text-align: center;
                        font-size: 0.8rem;
                        color: #333;
                    }
                    p:nth-of-type(2){
                        color: #aaa;
                        font-size: 0.6rem;
                    }
                }
            }
        }
        .all-list{
            width: 100%;
            border-bottom: 0.3rem solid #f3ecec;
            .all-list-ul{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                .all-list-ul-li{
                    flex: 0 0 4.68rem;
                    font-size: 0.7rem;
                    text-align: center;
                    padding:0.6rem 0;
                    position: relative;
                    img{
                        width: 2rem;
                        height: 2rem;
                        margin: 0 auto;
                    }
                }
                .all-list-ul-li:after{
                    content: "";
                    width: 100%;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    border-bottom: 1px solid #ccc;
                    transform:scaleY(.5);
                }
                .all-list-ul-li:before{
                    content:"";
                    height: 100%;
                    position: absolute;
                    top: 0;right: 0;
                    border-right: 1px solid #ccc;
                    transform: scaleX(.5);
                }
            }
        }
    }
    
</style>