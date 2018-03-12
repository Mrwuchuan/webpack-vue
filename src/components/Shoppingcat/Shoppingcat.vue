<template>
    <div id="shoppingcat">
       <Footers></Footers>
        <div class="top">
            <div class="top-title">
                {{theme}}
            </div>
            <div class="top-compile" @click="compileCat">
                {{compile}}
            </div>
        </div>
        <div class="goods-list" v-for="item in shoplist">
            <div class="goods-list-shop" :data-shopId="item.shopId" @click="checkShop(item.shopId)">
                <div class="checkboxs">
                    <span class="checkboxs-block" :class="{'checkboxs-back':item.check}"></span>
                </div>
                <div class="shopname"><img src="https://st.360buyimg.com/order/images/cart5.0/POPshopTitle.png?v=20170726" alt=""><span>{{item.shopname}}</span></div>
            </div>
            <ul class="goods-list-ul">
                <li class="ul-list" v-for="(io,index) in item.goodsList">
                    <div class="ul-list-checkboxs" @click="checkboxToF(io.goodsId,item.shopId)">
                        <span class="checkboxs-block" :class="{'checkboxs-back':io.check}"></span>
                    </div>
                    <div class="desc">
                        <div class="desc-img">
                            <img :src="io.img" alt="">
                            <p>小计:¥{{io.price*io.goodsNum | floateOne}}</p>
                        </div>
                        <div class="desc-p">
                            <p>{{io.desc}}</p>
                            <p>¥{{io.price | floateNum}}</p>
                            <div class="computeds">
                                <button @click="computedNum($event,io.goodsId)">-</button>
                                <input type="text" v-model="io.goodsNum">
                                <button @click="computedNum($event,io.goodsId)">+</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="totil">
            <div class="totil-block" @click="checkAll">
                <span class="checkboxs-block" :class="{'checkboxs-back':trues}"></span><span>全选</span>
            </div>
            <div>¥:{{totals}}</div>
            <a v-show="!totalShow" class="account" @click="goAccount">结算({{totalNum}})</a>
            <button v-show="totalShow" class="delete-cat" @click="deleteGoods">删除</button>
        </div>
        <div class="alert-g" v-show="alertShow">
            <div class="alert-goods">
               <h1 class="alert-h1">提示</h1>
                <p class="alert-des">你确定要删除所选商品吗?</p>
                <div class="alert-btn">
                    <button @click="cancleDel">取消</button>
                    <button @click="yesDel">确定</button>
                </div>
            </div>
        </div>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import Footers from '../Home/Footer'
    export default{
        data(){
            return{
                alertShow:false,
                totalShow:false,
                trues:true,
                theme:"购物车",
                compile:"编辑",
                shoplist:[
                    {
                        shopname:"成都索菲亚家居旗舰店",
                        shopId:7638,
                        check:true,
                        goodsList:[
                            {
                                img:"../../../static/images/597c63f0Ndbb35156.jpg",
                                desc:"索菲亚整体衣柜 冲浪百叶 定制衣柜步入式衣帽间定做推拉门衣柜",
                                price:1599.00,
                                goodsId:11,
                                goodsNum:1,
                                check:true
                            },
                            {
                                img:"../../../static/images/593fb4f3Ne0f713c5.jpg",
                                desc:"索菲亚 多功能电视柜+转角书桌+手拿柜定做 全屋家居组合定制",
                                price:20000.00,
                                goodsId:12,
                                goodsNum:1,
                                check:true
                            },
                            {
                                img:"../../../static/images/595dd3bfN50eee6be.jpg",
                                desc:"索菲亚整体衣柜 梳妆台 床榻塔米定做",
                                price:21899.00,
                                goodsId:23,
                                goodsNum:1,
                                check:true
                            }
                        ]
                    },
                    {
                        shopname:"悦达通讯",
                        shopId:7778,
                        check:true,
                        goodsList:[
                            {
                                img:"../../../static/images/596e06c6N63a32ee1.jpg",
                                desc:"小米 红米2 增强版 4G手机 双卡双待",
                                price:999.00,
                                goodsId:77,
                                goodsNum:1,
                                check:true
                            }
                        ] 
                    }
                ]
            }
        },
        methods:{
            computedNum(e,number){ // 计算商品的小计  点击 + - 的时候小计变化 
                let shopList = this.shoplist;
                shopList.forEach((item,index)=>{
                    item.goodsList.forEach((item,index)=>{
                        if(item.goodsId == number && e.target.innerHTML == "+"){
                            item.goodsNum++;
                        }else if(item.goodsId == number && e.target.innerHTML == "-"){
                            if(item.goodsNum<=1){return}
                            item.goodsNum--; 
                        }
                    })
                })
            },
            checkboxToF(e,s){ // e是货物goodsID s 是商家shopID  选择商品
                var len = 0;
                let shoplist = this.shoplist;
                shoplist.forEach((item,index)=>{
                    let shopid = item.shopId;
                    if(shopid == s){
                        let checks = item;
                        checks.check = false;
                        this.trues = false;
                        item.goodsList.forEach((item)=>{
                            if(item.goodsId == e){
                                item.check = !item.check;
                            }
                            if(item.check == true){
                                len++;
                            }
                        })
                        if(len == item.goodsList.length){
                            checks.check = true;
                            this.trues = true;
                        }
                    }
                })
            },
            checkShop(e){ // 选择店铺
                let bool = true;
                let shoplist = this.shoplist;
                shoplist.forEach((item,index)=>{
                    if(!item.check){bool = false}
                    if(item.shopId == e){
                        item.check = !item.check;
                        if(item.check == false){bool = false}
                        let s = item.check;
                        item.goodsList.forEach((item,index)=>{
                            item.check = s;
                        })
                    }
                })
                this.trues = bool;
            },
            checkAll(){ // 全选/反选
                this.trues = !this.trues;
                let torf = this.trues;
                let shoplist = this.shoplist;
                shoplist.forEach((item,index)=>{
                    item.check = torf;
                    item.goodsList.forEach((item)=>{
                        item.check = torf;
                    })
                })
            },
            goAccount(){
                this.$router.push({name:'ConfirmOrder'});
            },
            compileCat(){
                this.compile == "编辑" ? this.compile = "完成" : this.compile = "编辑";
                this.totalShow = !this.totalShow;
                this.trues = false;
                let torf = this.trues;
                let shoplist = this.shoplist;
                shoplist.forEach((item,index)=>{
                    item.check = torf;
                    item.goodsList.forEach((item)=>{
                        item.check = torf;
                    })
                })
            },
            deleteGoods(){
                this.alertShow = true;
            },
            cancleDel(){ // 取消删除
                this.alertShow = false;
            },
            yesDel(){ // 确定删除
                if(this.trues){this.shoplist = []}
                let shoplist = this.shoplist;
                shoplist.forEach((item,index)=>{
                    if(item.check){
                        shoplist.splice(index,1);
                    }else{
                        let ind = index;
                        item.goodsList.forEach((item,index)=>{
                            if(item.check){
                                shoplist[ind].goodsList.splice(index,1);
                            }
                        })
                    }
                })
                this.alertShow = false;
            }
        },
        mounted(){
            
        },
        beforeCreate(){
            
        },
        components:{
            Footers
        },
        filters:{ // 商品价格后面的小数的过滤器
            floateNum(val){
                return val.toFixed(2);
            },
            floateOne(val){
                return val.toFixed(1);  
            }
        },
        computed:{
            totals(){ // 计算商品总价
                let total = 0;
                let shoplist = this.shoplist;
                shoplist.forEach((item,index)=>{
                    item.goodsList.forEach((item,index)=>{
                        if(item.check){
                            total += item.price*item.goodsNum;
                        }
                    })
                })
                return total ? total : 0;
            },
            totalNum(){ // 计算商品数量总数
                let num = 0;
                let shoplist = this.shoplist;
                shoplist.forEach((item,index)=>{
                    item.goodsList.forEach((item,index)=>{
                        if(item.check){
                            num += item.goodsNum;
                        }
                    })
                })
                return num ? num : 0;
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
    #shoppingcat{
        width: 100%;
        padding-bottom: 4.6rem;
        .top{
            width: 100%;
            z-index: 999;
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            text-align: center;
            background: red;
            font-size: 0.8rem;
            color: #fff;
            height: 2rem;
            .top-title{
                flex: 1;
                text-align: center;
                margin-right:-1.5rem;
            }
            .top-compile{
                flex: 0 0 3rem;
                
            }
        }
        .goods-list{
            margin-top: 2rem;
            width: 100%;
            border-bottom: .2rem solid #ccc;
            .goods-list-shop{
                width: 100%;
                box-sizing: border-box;
                color: #333;
                height: 1.5rem;
                font-size: 0.8rem;
                display: flex;
                align-items: center;
                .checkboxs{
                    flex: 0 0 30px;
                    margin-left: 10px;
                    
                }
                .shopname{
                    flex: 1;
                    span{
                        padding-left: 0.2rem;
                    }
                    img{
                        width: 16px;
                        height: 13px;
                        margin-top: -2px;
                    } 
                }
            }
            
            .goods-list-ul{
                width: 100%;
                .ul-list{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    box-sizing: border-box;
                    padding: 0.2rem 0.2rem 0.2rem 10px;
                    .desc{
                        display: flex;
                        align-items: center;
                        .desc-img{
                            flex: 0 0 5rem;
                            font-size: 0.7rem;
                            color: red;
                        }
                        .desc-p{
                            font-size: 0.7rem;
                            color: #232323;
                        }
                        .computeds{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            overflow: hidden;
                            button{
                                border: 0;
                                width: 1rem;
                                height: 1.2rem;
                                border: 1px solid #a99090;
                                line-height: 0.8rem;
                                background: #fafafa;
                            }
                            button:first-of-type{
                                border-radius:0.2rem 0 0 0.2rem;
                            }
                            button:last-of-type{
                                border-radius: 0 0.2rem 0.2rem 0;
                            }
                            input{
                                width: 1.5rem;
                                text-align: center;
                                border: 1px solid #a99090;
                                border-left: 0;
                                border-right: 0;
                                height: 1.1rem;
                            }
                        }
                    }
                }
                .ul-list:after{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                border-bottom: 1px solid #ccc;
                transform: scaleY(.5);
                width: 100%;
            }
            }
        }
    }
    .checkboxs-block{
         display: inline-block; 
         width: 20px;
         height: 20px;
         background: url(../../../static/images/shopping.cart.spirits.icns2.png) no-repeat 0 1px;
         background-size: 50px 200px;
    }
    .checkboxs-back{
         background-position: -25px 0px;               
    }
    .totil{
        display: flex;
        position: fixed;
        left: 0;
        bottom: 3.1rem;
        justify-content: space-between;
        width: 100%;
        background: #696666;
        height: 1.5rem;
        font-size: 0.7rem;
        align-items: center;
        border-radius: 0.5rem;
        overflow: hidden;
        color: #fff;
        .account{
            background: #00cccc;
            height: 100%;
            line-height: 1.5rem;
            width: 3.5rem;
            text-align: center;
            color: #fff;
        }
        .totil-block{
            display: flex;
            align-items: center;
            margin-left: 0.5rem;
        }
    }
    .delete-cat{
        border: 0;
        outline: 0;
        background: #ff0000;
        font-size: 0.7rem;
        color: #fff;
        padding: 0 0.5rem;
        flex: 0 0 3.5rem;
        height: 100%;
    }
    .alert-goods{
        display: flex;
        flex: 0 0 15rem;;
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 20px #ccc;
        box-sizing: border-box;
        padding: 0 0.5rem 1rem;
        flex-direction: column;
        .alert-h1{
            font-size: 0.8rem;
            color: #7d7d7d;
            flex: 0 0 2rem;
            text-align: center;
            position: relative;
            line-height: 2rem;
        }
        .alert-h1:after{
            content: "";
            width: 100%;
            border-bottom: 1px solid #ccc;
            position: absolute;
            left: 0;
            bottom: 0;
            transform: scaleY(.5);
        }
        .alert-des{
            flex:  0 0 2rem;
            line-height: 2rem;
            text-indent: 1rem;
            color: #7d7d7d;
        }
        .alert-btn{
            flex: 0 0 1rem;
            line-height: 1rem;
            display: flex;
            justify-content: center;
            height: 1rem;
            align-items: center;
            button{
                font-size: 0.7rem;
                flex:  0 0 4.5rem;
                line-height: 1.2rem;
                border-radius: 0.2rem;
            }
            button:first-child{
                border: 1px solid red;
                background: #fff;
                color: red;
            }
            button:last-child{
                border-color: red;
                background: red;
                color: #fff;
                outline: 0;
                margin-left: 1.5rem;
            }
        }
    }
    .alert-g{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.7);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        color: #ff0000;
        
    }
</style>                        