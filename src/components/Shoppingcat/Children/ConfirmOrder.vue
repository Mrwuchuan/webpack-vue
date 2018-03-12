<template>
    <div id="confirm">
        <div class="confirm-top">
           <div class="confirm-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="confirm-top-set">确认订单</span>
        </div>
        <div class="confirm-main">
            <div class="address">
                <div class="address-img">
                    <img src="../../../../static/images/address-icon.png" alt="">
                </div>
                <div class="address-user">
                    <p class="address-user-name">
                        <span>收货人:</span><span>{{userinfo.username}}</span><span>{{userinfo.phone}}</span>
                    </p>
                    <p class="address-user-add">
                        <span>收货地址:</span><span>{{userinfo.address}}</span>
                    </p>
                </div>
                <div class="address-go">
                    <span></span>
                </div>
            </div>
            <div class="goods">
                <div class="goods-list" v-for="(item,index) in goodsList">
                    <div class="shopname">
                        <span></span><p>{{item.shopname}}</p>
                    </div>
                    <div class="goods-list-detail bor-b">
                        <div class="goods-list-detail-img">
                            <img :src="item.goodsImg" alt="">
                        </div>
                        <div class="goods-list-detail-des">
                            <p>{{item.goodsDes}}</p>
                            <div class="kuaidi">快递</div>
                        </div>
                        <div class="goods-list-detail-price">
                            <p>¥{{item.price}}</p>
                            <p>x{{item.goodsNum}}</p>
                        </div>
                    </div>
                    <div class="goods-pei bor-b" @click="changeKuaiDi(index)">
                        <span>配送方式:</span><span><font>{{item.kuaiDi}}</font><i></i></span>
                    </div>
                    <div class="goods-liu bor-b">
                        <span>给卖家留言:</span><input placeholder="选填,可填写和卖家达成一致的要求" type="text">
                    </div>
                    <div class="goods-totle bor-b">
                        <span>共计{{item.goodsNum}}件商品</span><span>合计:¥{{item.goodsNum*item.price}}</span>
                    </div>
                </div>
            </div>
            <div class="all-goods-totle">
                <span>合计 ¥:{{goodsPriceTotal}}</span><button class="confirm-btn">确认</button>
            </div>
        </div>
        <div class="change-sex" :class="{'change-sex-pin':sexShow,'change-sex-pout':sexOut}">
            <div class="change-sex-head change-sex-bus">请选择配送方式</div>
            <div v-for="(io,index) in kuaiDi" class="change-sex-man change-sex-bus" :class="{'active':!showRedio}" @click.prevent="changeRedio(io.name,io.price)">
                <span>{{io.name}}</span><span>{{io.price}}元</span>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                sexShow:false,
                sexOut:false,
                showRedio:false,
                nowIndex:-1,
                userinfo:{
                    username:'吴川',
                    phone:'18618488238',
                    address:'北京市朝阳区十八里店南桥自主城1号楼6层易快网'
                },
                goodsList:[
                    {
                        shopname:"回答就开始",
                        goodsImg:"../../../../static/images/5920448fN135432ac.jpg",
                        goodsDes:"收快递费了卡卡拉开距离快速登录付款撒地方",
                        price:999.03,
                        goodsNum:3,
                        kuaiDi:'EMS 平邮',
                        kuaiPrice:0
                    },
                    {
                        shopname:"阿萨德分开了",
                        goodsImg:"../../../../static/images/5980534bN556d5512.jpg",
                        goodsDes:"收快递费了卡卡拉开距离快速登录付款撒地方",
                        price:1999,
                        goodsNum:2,
                        kuaiDi:'EMS 平邮',
                        kuaiPrice:0
                    }
                ],
                kuaiDi:[
                    {name:'EMS 包邮',price:10},
                    {name:'快递',price:20},
                    {name:'平邮',price:30}
                ]
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            changeKuaiDi(index){
                this.nowIndex = index;
                this.sexShow = !this.sexShow;
                this.sexOut = !this.sexShow;
            },
            changeRedio(e,p){
                this.goodsList[this.nowIndex].kuaiDi = e;
                this.goodsList[this.nowIndex].kuaiPrice = p;
                this.showRedio = !this.showRedio;
                this.sexOut = true;
                this.sexShow = false;
            }
        },
        computed:{
            goodsPriceTotal(){
                var price = 0;
                this.goodsList.forEach((item,index)=>{
                     price += (item.price*item.goodsNum)+item.kuaiPrice;
                })
                return price;
            }
        }
    }
</script>
<style lang="less" scoped>
    #confirm{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .confirm-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .confirm-top-back{
                display: flex;
                flex: 0 0 2rem;
                height: 100%;
                align-items: center;
                justify-content: center;
                span{
                    font-size: 0;
                    flex: 0 0 20px;
                    height: 20px;
                    background: url(../../../../static/images/yikuaisprites.png) no-repeat -22px 0px;
                    background-size: 200px 200px;
                }
            }
            .confirm-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        .confirm-main{
            width: 100%;
            .address{
                color: #a29e9e;
                font-size: 0.7rem;
                width: 100%;
                height: 5rem;
                box-sizing: border-box;
                padding: 0.5rem 0;
                border: 0.3rem solid transparent;
                border-left: 0;
                border-right: 0;
                background: linear-gradient(white, white) padding-box, repeating-linear-gradient(25deg, #eccbcd 0, #eccbcd 5.5%, transparent 0, transparent 7%, #b5d4e1 0, #b5d4e1 12.5%, transparent 0, transparent 14%) 0 / 1rem 1rem;
                display: flex;
                justify-content: space-between;
                .address-img{
                    flex: 0 0 2rem;
                    padding: 0 0.5rem;
                    align-self: flex-start;
                    text-align: center;
                    img{
                        width: 2rem;
                    }
                }
                .address-user{
                    flex: 1;
                    .address-user-name{
                        font-size: 0.8rem;
                        span:nth-of-type(3){
                            margin-left: 1rem;
                        }
                    }
                }
                .address-go{
                    flex: 0 0 2rem;
                    height: 100%;
                    line-height: 4rem;
                    text-align: center;
                    span{
                        display: inline-block;
                        width: 20px;
                        height: 26px;
                        background: url(../../../../static/images/shopping.cart.spirits.icns2.png)no-repeat 0 -100px;
                    }
                }
            }
            .goods{
                width: 100%;
                padding-bottom: 2rem;
                .goods-list{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    color: #a29e9e;
                    border-bottom: 0.2rem solid #ccc;
                    .shopname{
                        padding-top: 0.2rem;    
                        width: 100%;
                        display:flex;
                        justify-content: flex-start;
                        font-size: 0.7rem;
                        span{
                            margin-left: 0.5rem;
                            flex: 0 0 25px;
                            height: 20px;
                            background: url(../../../../static/images/shopping.cart.spirits.icns2.png)no-repeat 0 -34px;
                            background-size: 70px 280px;
                        }
                        p{
                            padding-left: 0.2rem;
                        }
                    }
                    .goods-list-detail{
                        width: 100%;
                        height: 5.5rem;
                        display: flex;
                        justify-content: space-between;
                        font-size: 0.7rem;
                        .goods-list-detail-img{
                            flex: 0 0 4.5rem;
                            padding: 0 0.5rem;
                            text-align: center;
                            align-self: center;
                        }
                        .goods-list-detail-des{
                            flex: 0 0 7.6rem;
                            padding-left: 0.4rem;
                            p{
                                height: 2.5rem;
                                overflow: hidden;
                            }
                            .kuaidi{
                                border: 1px solid #ff0000;
                                width: 2rem;
                                text-align: center;
                                border-radius: 0.1rem;
                                margin-top: 0.5rem;
                            }
                        }
                        .goods-list-detail-price{
                            flex: 1;
                            text-align: right;
                            padding-right: 0.4rem;
                        }
                    }
                    .bor-b{
                        position: relative;
                        span{
                            font-size: 0.6rem;
                        }
                    }
                    .bor-b:after{
                        content: "";
                        width: 100%;
                        border-bottom:1px solid #ccc;
                        transform: scaleY(0.5);
                        position: absolute;
                        left: 0;
                        bottom: 0;
                    }
                    .goods-pei{
                        flex: 1;
                        padding: 0 0.5rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 2rem;
                        i{
                            display: inline-block;
                            width: 25px;
                            height: 20px;
                            background: url(../../../../static/images/shopping.cart.spirits.icns2.png)no-repeat -30px -67px;
                            vertical-align: middle;
                            background-size: 70px 280px;
                        }
                        font{
                            color: #333;
                        }
                    }
                    .goods-liu{
                        display: flex;
                        flex: 1;
                        justify-content: space-between;
                        padding: 0 0.5rem;
                        align-items: center;
                        height: 2rem;
                        input{
                            flex: 0 0 70%;
                            text-align: right;
                            border: 0;
                            outline: none;
                            font-size: 0.6rem;
                            color: #a29e9e;
                        }
                    }
                    .goods-totle{
                        display: flex;
                        flex: 1;
                        justify-content: flex-end;
                        padding: 0 0.5rem;
                        align-items: center;
                        height: 2rem;
                        color: #666;
                        span{
                            margin-left: 0.5rem;
                        }
                    }
                }
            }
            .all-goods-totle{
                width: 100%;
                box-sizing: border-box;
                background: #fff;
                position: fixed;
                left: 0;
                bottom: 0;
                height: 2rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding: 0 0.5rem;
                border-top: 1px solid #ccc;
                button{
                    background: #00a3cc;
                    border-radius: 0.3rem;
                    color: #fff;
                    text-align: center;
                    font-size: 0.8rem;
                    border: 0;
                    margin-left: 1rem;
                    width: 3.5rem;
                }
                span{
                        color: red;
                }
            }
        }
    }
    .change-sex{
            display: flex;
            flex-direction: column;
            width: 100%;
            text-align: center;    
            position: fixed;
            left: 0;
            bottom: -8rem;
            background: #F8F8FF;
            font-size: 0.7rem;
        }
        .change-sex-pin{
        animation: positions-in .5s linear 0s;
        animation-fill-mode:forwards;
    }
    .change-sex-pout{
        animation: positions-out .5s linear 0s;
        animation-fill-mode:forwards;
    }
    .change-sex-head{
        background: red;
        color: #fff;
        width:100%;
        justify-content: center !important;
    }
    .change-sex-man{
        color: #333;
    }
    .change-sex-bus{
        line-height: 2rem;
        height: 2rem;
        display:flex;
        justify-content: space-between;
        padding: 0 0.5rem;
    }
    @keyframes positions-in{
        0%{
            bottom: -8rem;
        }
        100%{
            bottom: 0rem;
        }
    }
    @keyframes positions-out{
        0%{
            bottom: 0rem;
        }
        100%{
            bottom: -8rem;
        }
    }
    .active{
        background: #fafafa !important;
    }
</style>

 
 