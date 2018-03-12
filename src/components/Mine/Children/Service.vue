<template>
    <div id="service">
        <div class="service-top">
           <div class="service-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="service-top-set">在线客服</span>
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
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
    #service{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .service-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .service-top-back{
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
            .service-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        
    }
</style>