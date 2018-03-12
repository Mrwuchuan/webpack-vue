<template>
    <div id="enter">
        <div class="enter-top">
           <div class="enter-top-back" @click="historyGo">
               <span></span>
           </div>
            <span class="enter-top-set">商家入驻</span>
        </div>
        <div class="enter-main">
            <div class="enter-main-img">
                <img :src="imgSrc" alt="">
            </div>
            <div class="enter-main-desc">
                <p>尊敬的商户萌:</p>
                <p>奥斯卡级大富科技阿克苏电话费IEofISO积分的流口水的看法了解啊开始就的劳苦卡卢卡斯看风景拉伸的级分类就是看东方卡视角的弗兰克啊就是大连房价啊拉屎的风景埃里克森解放路凯撒京东方绿卡三等奖佛啊,东方斯卡拉,哈库喷那哈库呐玛塔塔,死肥婆IE皮肤科psokfpkpki9爱富婆开发票偶数的可怕可怕票房靠谱搜快递费屁啊说法平时的欧开始破口覅IOP 哦啊跑搜房跑is豆腐皮怕是泼妇破发看破恐怕破碎的看法破卡破是开发</p>
            </div>
            <div class="enter-link">
                <button class="btn" @click="enterShop">立即入住</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                imgSrc:"/dist/static/images/shopenter.jpg",
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            enterShop(){
                
            },
            hei(){
                var height = document.documentElement.clientHeight || document.body.clientHeight;
                var enter = document.querySelector('#enter');
                enter.style.height = height+'px';
            }
        },
        mounted(){
            window.addEventListener('onload',this.hei(),false);
        },
        destroyed(){
            window.removeEventListener('onload',this.hei,false);
        }
    }
</script>
<style lang="less" scoped>
    #enter{
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #f8ebbe;
        .enter-top{
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
            .enter-top-back{
                display: flex;
                flex: 0 0 2rem;
                height: 100%;
                align-items: center;
                span{
                    font-size: 0;
                    flex: 0 0 20px;
                    height: 20px;
                    background: url(/dist/static/images/goback.png) no-repeat 0px 0px;
                    background-size: 12px;
                    margin-left: 0.5rem;
                }
            }
            .enter-top-set{
                flex: 1;
                text-indent: -3em;
            }
        }
        .enter-main{
            margin-top: 2rem;
            width: 100%;
            
            .enter-main-img{
                width: 100%;
                img{
                    width: 100%;
                    vertical-align: middle;
                }
            }
            .enter-main-desc{
                font-size: 0.6rem;
                width: 85%;
                margin: 1rem auto;
                border: 0.15rem solid #f2a75f;
                border-radius: 0.5rem;
                padding: 0.3rem;
            }
        }
        .enter-link{
            width: 100%;
            display: flex;
            height: 2rem;
            justify-content: center;
            align-items: center;
            .btn{
                flex: 0 0 11.5rem;
                height: 1.8rem;
                text-align: center;
                background: #fa5207;
                color: #fff;
                font-size: 1rem;
                border: 0;
                outline: none;
                box-shadow: 0px 3px 0px 0px #af400e; 
                border-radius: 0.5rem;
            }
        }
    }
</style>