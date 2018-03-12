<template>
    <div id="updatepass">
        <div class="account-top">
           <div class="account-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="account-top-set">登录密码</span>
        </div>
        <div class="updatepass-main">
            <div class="link-all">
                 <router-link @click.native.prevent.stop="Go"  :to="{name:item.link,params:{}}" v-for="(item,index) in userData" :key="index" class="link-list">
                     {{item.name}}
                 </router-link>
            </div>
            <router-view></router-view>
        </div>
        <div class="mengban"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                userData:[
                    {
                        name:"① 验证手机号",
                        link:"Phone"
                    },
                    {
                        name:"② 验证信息",
                        link:"PhoneMessage"
                    },
                    {
                        name:"③ 设置密码",
                        link:"PhonePass"
                    }
                ]
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            Go(){
               return false;
            }
        }
    }
</script>
<style lang="less" scoped>
    #updatepass{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .account-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .account-top-back{
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
            .account-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        .updatepass-main{
            width: 100%;
            .link-all{
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 5rem;
                .link-list{
                    color: #757575;
                }
            }
        }
    }
    .mengban{
        width: 100%;
        height: 5rem;
        position: absolute;
        left: 0;
        top: 2rem;
        z-index: 1;
    }
    .router-link-active{
        color: red !important;
    }
    .router-link-exact-active{
        color: #757575;
    }
</style>