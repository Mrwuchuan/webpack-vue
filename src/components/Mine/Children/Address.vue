<template>
    <div id="address">
        <div class="address-top">
            <span @click="historyGo"></span>
            <span>管理收货地址</span>
            <router-link to="/mine/newaddress">新增</router-link>
        </div>
        <div class="no-address" v-if="hasAddress.length == 0">
           <div class="no-address-img">
               <img src="/dist/static/images/no-address.png" alt="">
           </div>
        </div>
        <div class="has-address" v-else>
            <div class="has-address-list" v-for="(item,index) in hasAddress" :key="index">
                <p class="has-address-list-name">{{item.name}}&nbsp;&nbsp;{{item.phone}} <span v-if="item.default">默认地址</span></p>
                <p class="has-address-list-address">{{item.address}},{{item.detailedAddress}}</p>
                <div class="management">
                    <div class="management-img" @click="detailAddress($event,index)">
                        <span :class="{resolve:item.default}"></span>
                        <span>设为默认地址</span>
                    </div>
                    <button class="compile-address"><router-link :to="{
                    name:'Newaddress',
                    params:{
                    name:item.name,
                    phone:item.phone,
                    address:item.address,
                    detailAddress:item.detailedAddress,
                    email:''}
                    }">编辑</router-link></button>
                    <button class="delete-address">删除</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                hasAddress:[
                    {
                        name:'吴川',
                        phone:'18618488238',
                        address:'河北省石家庄市封龙山',
                        email:'',
                        detailedAddress:'岳上村1',
                        default:true,
                    },
                    {
                        name:'吴川',
                        phone:'18618488238',
                        address:'河北省石家庄市封龙山',
                        email:'',
                        detailedAddress:'岳上村2',
                        default:false,
                    }
                ]
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            detailAddress(e,index){
                var a = this.hasAddress;
                var indexs = index;
                a.forEach((item,index)=>{
                    if(index == indexs){
                        item.default = true;
                    }else{
                        item.default = false;
                    }
                });
            }
        },
        mounted(){
//            console.log(this.$route.params);
        }
    }
</script>
<style lang="less" scoped>
    #address{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 100000;
        font-size: 0.8rem;
        .address-top{
            display:flex;
            justify-content: space-between;
            align-items: center;
            height: 2rem;
            background: red;
            text-align: center;
            span{
                color: #fff;
            }
            span:first-child{
                flex: 0 0 20px;
                margin-left: 0.5rem;
                height: 20px;
                background: url(/dist/static/images/goback.png)no-repeat 0 0;
                background-size: 12px;
            }
            span:nth-of-type(2){
                flex: 1;
                width: 100%;
                margin-left: 1.5rem;
            }
            a{
                flex: 0 0 3rem;
                text-align: center;
                color: #fff;
            }
        }
        .no-address{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 5rem;
            background: rgba(195, 197, 199, 0.3);
            .no-address-img{
                flex: 0 0 3rem;
            }
        }
        .has-address{
            display: flex;
            flex-direction: column;
            width: 100%;
            .has-address-list{
                padding: 0.3rem 0.3rem 0;
                box-sizing: border-box;
                border-bottom: 0.4rem solid #eaeaea;
                p{
                    height: 1.5rem;
                    line-height: 1.5rem;
                }
                .has-address-list-name{
                    color: #333;
                    font-weight: 700;
                    font-family: "微软雅黑";
                    span{
                        color: red;
                        font-size: 0.5rem;
                        font-family: cursive;
                    }
                }
                .has-address-list-address{
                    color: #757575;
                    width: 100%;
                    border-bottom: 1px dashed #757575;
                }
                .management{
                    display:flex;
                    height: 2rem;
                    justify-content: space-between;
                    align-items: center;
                    .compile-address a{
                        color: #333;
                    }
                    .management-img{
                        flex: 1;
                        span{
                            display: inline-block;
                            vertical-align: middle;
                        }
                        span:first-child{
                            width: 20px;
                            height: 20px;
                            background: url(/dist/static/images/shopping.cart.spirits.icns2.png) no-repeat 0 0px;
                            background-size: 50px 200px;
                        }
                    }
                    button{
                        flex: 0 0 2rem;
                        height: 1rem;
                        background: #fff;
                        outline: none;
                        border: 1px solid #333;
                        font-size: 0.6rem;
                        padding: 0 0.2rem;
                        margin-right: 0.5rem;
                        border-radius: 0.2rem;
                        line-height: 1rem;
                    }
                }
            }
        }
    }
    .resolve{
        background-position: -25px 0 !important;
    }
</style>