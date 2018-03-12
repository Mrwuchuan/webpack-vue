<template>
    <div id="favourables">
        <div class="favourables-top">
           <div class="favourables-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="favourables-top-set">最慧购</span>
        </div>
        <div class="favourable-main">
            <div class="main-list">
                <ul>
                    <li class="main-list-li" v-for="(item,index) in goodsList">
                        <router-link to="">
                            <div class="main-list-img">
                                <img :src="item.imgSrc" alt="">
                            </div>
                            <p class="main-list-desc">{{item.desc}}</p>
                            <p class="main-list-price">
                                <span class="main-active">¥{{item.activePrice}}</span>
                                <span class="main-price"><del>¥{{item.price}}</del></span>
                            </p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                goodsList:[
                    {
                        desc:"这里是商品描述,任意多字的但是多了会显示不出来哦",
                        price:999,
                        activePrice:666,
                        imgSrc:"/dist/static/images/58c7b962N47e83584.jpg"
                    },
                    {
                        desc:"这里是商品描述,任意多字的但是多了会显示不出来哦",
                        price:999,
                        activePrice:666,
                        imgSrc:"/dist/static/images/58d5ce2bN32a858fb.jpg"
                    },
                    {
                        desc:"这里是商品描述,任意多字的但是多了会显示不出来哦",
                        price:999,
                        activePrice:666,
                        imgSrc:"/dist/static/images/58c908f9Nb13c2a0d.jpg"
                    },
                    {
                        desc:"这里是商品描述,任意多字的但是多了会显示不出来哦",
                        price:999,
                        activePrice:666,
                        imgSrc:"/dist/static/images/582e70adN90202cf1.jpg"
                    },
                    {
                        desc:"这里是商品描述,任意多字的但是多了会显示不出来哦",
                        price:999,
                        activePrice:666,
                        imgSrc:"/dist/static/images/58c908f9Nb13c2a0d.jpg"
                    },
                    {
                        desc:"这里是商品描述,任意多字的但是多了会显示不出来哦",
                        price:999,
                        activePrice:666,
                        imgSrc:"/dist/static/images/58f8be94Ne4710d8f.jpg"
                    },
                ]
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            unique(arr){
                var a = [],hasNaN = false;
                for(let i = arr.length;i<arr.length;i++){
                    if(a.indexOf(arr[i]) == -1){
                        if(arr[i] !== arr[i]){
                            if(hasNaN){
                                continue;
                            }
                            hasNaN = true;
                        }
                        a.push(arr[i]);
                    }
                }
                return a;
            }
        }
    }
</script>
<style lang="less" scoped>
    #favourables{
        
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .favourables-top{
            position:fixed;
            left: 0;
            top: 0;
            z-index: 99999;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .favourables-top-back{
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
            .favourables-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        .favourable-main{
            width: 100%;
            margin-top: 2rem;
            .main-list{
                width: 100%;
                ul{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    .main-list-li{
                        flex: 0 0 9rem;
                        height: 11rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        a{
                            display: block;
                            color:#595959;
                            font-size: 0.7rem;
                            width: 100%;
                            height: 100%;
                        }
                        .main-list-img{
                            height: 7rem;
                            line-height: 7rem;
                            overflow: hidden;
                            img{
                                vertical-align: middle;
                            }
                        }
                        .main-list-desc{
                            height: 2.1rem;
                            overflow: hidden;
                            box-sizing: border-box;
                            padding: 0 0.3rem;
                        }
                        .main-list-price{
                            text-align: center;
                            .main-active{
                                color: red;
                            }
                            .main-price{
                                margin-left: 0.5rem;
                            }
                        }
                    }
                }
            }
        }
        
    }
</style>