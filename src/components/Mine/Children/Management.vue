<template>
    <div id="management">
        <div class="management-top">
           <div class="management-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="management-top-set">资金管理</span>
            <span class="management-top-detail">资金明细</span>
        </div>
        <div class="management-main">
            <div class="management-main-list">
                <div class="management-main-item">
                    <span class="management-main-span">易券余额:</span><span class="management-main-color-red">{{dataList.yiquan.number}}</span>
                </div>
                <div class="management-main-item">
                    <span class="management-main-span">易豆余额:</span><span class="management-main-color-red">{{dataList.yidou.number}}</span>
                </div>
                <div class="management-main-item">
                    <span class="management-main-span">对方账号:</span><input type="number" name="userid" value="">
                </div>
                <div class="management-main-item">
                    <span class="management-main-span">选择类型:</span>
                    <span @click.prevent="changeType($event,dataList.yiquan.type)" :type="dataList.yidou.type"><i class="management-icon" :class="{'management-icon-click':bool}"></i><b>易券</b></span>
                    <span @click.prevent="changeType($event,dataList.yidou.type)" :type="dataList.yidou.type" class="management-yidou"><i class="management-icon"  :class="{'management-icon-click':!bool}"></i><b>易豆</b></span>
                </div>
                <div class="management-main-item">
                    <span class="management-main-span">转让数量:</span><input type="number" name="num" value="">
                </div>
                <div class="management-main-item">
                    <span class="management-main-span">支付密码:</span><input type="password" name="pass" value="">
                </div>
            </div>
        </div>
        <div class="management-btn">
            <button @click="submitZhuan">确定</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                bool:true,
                type:"yiquan",
                dataList:{
                    "yiquan":{number:33,type:"yiquan"},
                    "yidou":{number:22,type:"yidou"},
                }
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            changeType(eve,type){
                var s = eve.target.parentElement.childNodes[0].className.indexOf('management-icon-click');
                if(s != -1){return}
                this.type = type;
                this.bool = !this.bool;
            },
            submitZhuan(){
                var userId = document.getElementsByName('userid')[0].value;
                var pass = document.getElementsByName('pass')[0].value;
                var num = document.getElementsByName('num')[0].value;
                var type = this.type;
                if(type == 'yiquan'){
                    if(num>this.dataList.yiquan.number){
                        console.log(1);
                    }
                }else if(type == 'yidou'){
                    if(num>this.dataList.yidou.number){
                        console.log(2);
                    }
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    #management{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .management-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .management-top-back{
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
            .management-top-set{
                flex: 1;
                width: 100%;
                text-indent: 2.5em;
            }
            .management-top-detail{
                flex: 0 0 4rem;
                font-size: 0.75rem;
            }
        }
        .management-main{
            width: 100%;
            padding: 0.4rem 0 0 2rem;
            box-sizing: border-box;
            height: 23rem;
            .management-main-list{
                position: relative;
                color: #5c5c5c;
            }
            .management-main-item{
                position: relative;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 2.4rem;
                .management-main-span{
                    flex: 0 0 4rem;
                }
                input{
                    border-radius: 0.2rem;
                    outline: none;
                    border: 1px solid #ccc;
                    height: 1.5rem;
                    width: 8rem;
                }
            }
            .management-main-item:after{
                content: "";
                width: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
                border: 1px solid #dedede;
                transform: scaleY(0.3);
                
            }
        }
        .management-main-color-red{
            color: red;
        }
        .management-icon{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            vertical-align: top;
            border: 1px solid #ccc;
            border-radius: 50%;
            box-sizing: border-box;
            padding: 0.1rem;
            background-clip: content-box;
            margin-right: 0.2rem;
            margin-left: 0.2rem;
        }
        .management-icon-click{
            background: #009487;
            border-color: #009487;
            background-size: 0.4rem;
            -webkit-background-clip:content-box;
        }
        .management-yidou{
            margin-left: 1rem;
        }
        .management-btn{
            width: 100%;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                flex: 1;
                background: #f83905;
                color: #fff;
                border: 0;
                outline: none;
                font-size: 0.8rem;
                height: 100%;
            }
        }
    }
</style>