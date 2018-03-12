<template>
     <div class="classifed">
            <ul class="classifed-ul">
                <router-link to="/discover" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/5982b628Nbfe321b4.png" alt="">
                        <span>易券购</span>
                    </div>
                </router-link>
                <router-link to="/kuaizhuan" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/5954cf81N3294a71c.png" alt="">
                        <span>快赚</span>
                    </div>
                </router-link>
                <router-link to="" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d9456Naa85e195.png" alt="">
                        <span>周边</span>
                    </div>
                </router-link>
                <router-link to="/favourable" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/59263c60N0aa922b7.png" alt="">
                        <span>最慧购</span>
                    </div>
                </router-link>
                <router-link to="/mine/order/all" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d9475Na810c2eb.png" alt="">
                        <span>订单查询</span>
                    </div>
                </router-link>
<!--
                <router-link to="" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d94a1Nfde63a47.png" alt="">
                        <span>充值缴费</span>
                    </div>
                </router-link>
                <router-link to="" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/5983cfbeNcd241a5b.png" alt="">
                        <span>领易券</span>
                    </div>
                </router-link>
                <router-link to="" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/57aacab9N98edf989.png" alt="">
                        <span>领易豆</span>
                    </div>
                </router-link>
                <router-link to="" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d94c6Nc4711ad2.png" alt="">
                        <span>惠赚钱</span>
                    </div>
                </router-link>
                <router-link to="" tag="li" class="classifed-li">
                    <div class="classifed-li-div">
                        <img src="../../../static/images/591d94edNc42fb94d.png" alt="">
                        <span>物流查询</span>
                    </div>
                </router-link>
-->
            </ul>
        </div>   
</template>

<script>
    
</script>

<style lang="less" >
    .classifed{
        width: 100%;
        .classifed-ul{
            display: flex;
            flex-wrap: wrap;
            flex-flow: row wrap;
            align-items: flex-start;
/*            position: relative;*/
            .classifed-li{
                overflow: hidden;
/*                padding: 0.3rem 0;*/
                flex: 0 0 20%;
                box-sizing: border-box;
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
</style>