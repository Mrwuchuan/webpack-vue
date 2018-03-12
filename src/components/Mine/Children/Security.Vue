<template>
    <div id="security">
        <div class="security-top">
           <div class="security-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="security-top-set">安全设置</span>
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
    *{margin: 0;padding: 0;}
    ul li{
        list-style: none;
    }
    #security{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .security-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .security-top-back{
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
            .security-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        
    }
</style>