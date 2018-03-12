<template>
    <div id="recharge">
        <div class="recharge-top">
           <div class="recharge-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="recharge-top-set">我要充值</span>
        </div>
        <div class="recharge-main">
            <div class="recharge-main-list">
                <span class="recharge-main-list-lf">充值类型</span>
                <span>易豆</span>
            </div>
            <div class="recharge-main-list">
                <span class="recharge-main-list-lf">充值数量</span>
                <input class="inp" type="number" v-model="money" @keyup="numbers">
            </div>
            <div class="recharge-main-list">
                <span class="recharge-main-list-lf">付款金额</span>
                <span v-show="money">{{moneyRMB}}元</span>
            </div>
            <div class="recharge-main-list">
                <span class="recharge-main-list-lf">付款方式</span>
                <span class="recharge-main-pay">微信支付</span>
            </div>
        </div>
        <div class="recharge-pay">
           <div class="pay-money"><span v-show="money">应付:¥{{money}}</span></div>
            <button class="now-pay" @click="submitOrder">立即充值</button>
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                money:"",
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            numbers(){
                console.log(this.money.length);
                if(this.money.length >= 9){
                    this.money = this.money.slice(0,9);
                }
            },
            submitOrder(){
                if(this.money=="")return
                this.$router.push({name:'Confirmation',params:{id:this.money}});
            }
        },
        computed:{
            moneyRMB(){
                return this.money
            }
        },
        filters:{
            
        }
    }
</script>
<style lang="less" scoped>
    #recharge{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .recharge-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .recharge-top-back{
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
            .recharge-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        
    }
    .recharge-main{
        width: 100%;
        font-size: 0.75rem;
        .recharge-main-list{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 1rem;
            box-sizing: border-box;
            height: 2.5rem;
            .recharge-main-list-lf{
                flex: 0 0 4rem;
                color: #c9c9c9;
            }
            .inp{
                border: 1px solid #ccc;
                border-radius: 0.2rem;
                outline: 0;
                text-indent: 0.5em;
            }
            .recharge-main-pay{
                padding-left: 1.5rem;
                position: relative;
            }
            .recharge-main-pay:after{
                content: "";
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 1px solid red;
                position: absolute;
                left: 0;
                top: 0;
            }
            .recharge-main-pay:before{
                content: "";
                width: 16px;
                height: 16px;
                background: red;
                border-radius: 50%;
                position: absolute;
                left: 3px;
                top: 3px;
            }
        }
    }
    .recharge-pay{
        width: 100%;
        height: 2.55rem;
        background: #313131;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 0;
        .now-pay{
            flex:  0 0 7.5rem;
            height: 2.55rem;
            text-align: center;
            align-self: center;
            background:#ff5001;
            color: #fff;
            font-size: 0.65rem;
            border: 0;
            outline: 0;
        }
        .pay-money{
            text-indent: 1rem;
            color: #fff;
            align-self: center;
        }
    }
    .inp{
        text-indent: 0.2rem;
    }
    
</style>