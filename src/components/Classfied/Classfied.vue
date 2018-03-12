<template>
    <div id="classfied">
        <div class="classfied">
            <span class="back" @click="historyGo"></span>
            <span class="classfied-son">分类</span>
        </div>
        <div class="search">
            <router-link to="/search">搜索商品/店铺</router-link>
        </div>
        <div class="fenlei">
            <ul>
                <router-link :to="{name:'Search',params:{id:item.name}}" tag="li" v-for="(item,index) in message" :key="index">
                    <span :class="[item.class,item.gong]"></span>
                    <div class="fenlei-list">{{item.name}}</div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                message:[
                    {name:"教育服务",class:"search-1",gong:"backg"},
                    {name:"美容护理",class:"search-2",gong:"backg"},
                    {name:"珠宝手表",class:"search-3",gong:"backg"},
                    {name:"娱乐文化",class:"search-4",gong:"backg"},
                    {name:"美食酒水",class:"search-5",gong:"backg"},
                    {name:"箱包鞋靴",class:"search-6",gong:"backg"},
                    {name:"服装配饰",class:"search-7",gong:"backg"},
                    {name:"运动户外",class:"search-8",gong:"backg"},
                    {name:"家电手机",class:"search-9",gong:"backg"},
                    {name:"家居家纺",class:"search-10",gong:"backg"},
                    {name:"营养保健",class:"search-11",gong:"backg"},
                    {name:"本地生活",class:"search-12",gong:"backg"}
                ]
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            }
        }
    }
</script>


<style lang="less" scoped>
    .classfied{
        width: 100%;
        display: inline-flex;
        justify-content: center;
        height: 2rem;
        align-items:center;
        background: #ff0000;
        color: #fff;
        .back{
            flex: 0 0 20px;
            text-align: center;
            height: 20px;
            background: url(/dist/static/images/goback.png)no-repeat 0 0;
            background-size: 12px;
            margin-left: 0.5rem;
        }
        .classfied-son{
            flex: 1;
            width: 100%;
            display: inline-block;
            text-align: center;
            text-indent: -2rem;
        }
    }
    .search{
        display: flex;
        height: 1.5rem;
        justify-content: space-between;
        align-items: center;
        background: rgba(192, 208, 208, 0.2);
        font-size: 0.4rem;
        a{
            flex: 1;
            text-indent: 2rem;
            color: #ccc;
        }
     }
    .fenlei{
        width: 100%;
        ul{
            li{
                display: flex;
/*                justify-content: space-between;*/
                align-items: center;
                width: 100%;
                height: 2rem;
                .backg{
                    flex: 0 0 2.5rem;
                }
                .fenlei-list{
                    flex: 1;
                    font-size: 0.8rem;
                    position: relative;
                    text-indent: 0.5rem;
                    line-height: 2rem;
                }
                .fenlei-list:after{
                    content: "";
                    width: 100%;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    transform: scaleY(.5);
                    border-bottom: 1px solid #ccc;
                }
            }
        }
    }
    
</style>