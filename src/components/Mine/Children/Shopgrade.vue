<template>
    <div id="shopgrade">
        <div class="shopgrade-top">
           <div class="shopgrade-top-back" @click="historyGo">
               <span>&lt;</span>
           </div>
            <span class="shopgrade-top-set">商户升级</span>
        </div>
        <div class="personage-main">
            <div class="personage-main-all personage-main-pay">
                <span class="personage-main-all-a">选择级别:</span>
                <input class="personage-main-b" disabled type="text" value="">
            </div>
            <div class="personage-main-all personage-main-pay">
                <span class="personage-main-all-a">经营区域:</span>
                <input class="personage-main-b" disabled type="text" v-model="detailAddress" value="">
            </div>
            <div class="personage-main-all">
                <span class="personage-main-all-a">升级方式:</span>
                <div class="personage-main-cc">
                    <div class="personage-main-dd">
                        <span class="personage-main-icon"></span>
                        <span>易券</span>
                    </div>
                    <div class="personage-main-dd">
                        <span class="personage-main-icon"></span>
                        <span>易豆</span>
                    </div>
                    <div class="personage-main-dd">
                        <span class="personage-main-icon"></span>
                        <span>现金</span>
                    </div>
                </div>
            </div>
            <div class="personage-main-yi">
               <div class="personage-main-kuai">
                   <span class="">易券余额:</span><span>{{0}}</span>
               </div>
                <div class="personage-main-kuai">
                    <span>易豆余额:</span><span>{{0}}</span>
                    <span v-show="">账户余额不足</span>
                </div>
            </div>
            <div class="personage-main-all">
                <span class="personage-main-all-a">需支付额:</span>
                <span class="personage-main-b"></span>
            </div>
            <div class="personage-main-all">
                <span class="personage-main-all-a">支付密码:</span>
                <input class="personage-main-b" type="password" placeholder="请输入支付密码">
            </div>
            <div class="submit-btn">
                <button class="btn">升级</button>
            </div>
        </div>
        <div>
            <mt-picker :slots="addressSlots" class="picker" @change="onAddressChanges" :visible-item-count="3" ></mt-picker >
            <div class="add-address-control">
               <button @click="closeAddress">取消</button>
               <button @click="addAddress">确定</button>
           </div>
        </div>
    </div>
</template>
<script>
    import s from '../../../../static/js/address4.json'
    export default {
        data(){
            return{
                name:"",
                phone:"",
                address:"",
                detailAddress:"",
                email:"",
                showPicker:false,
                companyName:'',
                addressSlots: [
                  {
                    flex: 1,
                    defaultIndex: 1,
                    values: Object.keys(s),
                    className: 'slot1',
                    textAlign: 'center'
                  }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                  }, {
                    flex: 1,
                    values: [],
                    className: 'slot3',
                    textAlign: 'center'
                  }, {
                    divider: true,
                    content: '-',
                    className: 'slot4'
                  }, {
                    flex: 1,
                    values: [],
                    className: 'slot5',
                    textAlign: 'center'
                  }
                ],
                addressProvince: '省',
                addressCity: '市',
                addressXian: '区',
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            onAddressChanges(picker,values){
                console.log(values);
                if(values[0] === undefined){return}
                function isEmptyObject(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                }
                var shiArr = [];
                var xianArr = [];
                if(isEmptyObject(s[values[0]])){
                    shiArr = [];xianArr = [];
                    picker.setSlotValues(1, shiArr);
                    picker.setSlotValues(2, xianArr);
                }else{
                    for(let i in s[values[0]]){
                        shiArr.push(i);
                    }
                    picker.setSlotValues(1, shiArr);
                    for(let i in s[values[0]][values[1]]){
                        xianArr.push(i);
                    }
                    picker.setSlotValues(2, xianArr);
                }
                this.addressProvince = values[0] || "";
                this.addressCity = values[1] || "";
                this.addressXian = values[2] || "";
                this.detailAddress = this.addressProvince + this.addressCity + this.addressXian;
            },
            closeAddress(){
                console.log(this.addressProvince);
                console.log(this.addressCity);
                console.log(this.addressXian)
            },
            addAddress(){
                
            }
        },
        mounted(){
            this.$nextTick(() => {
                setTimeout(() => {//这个是一个初始化默认值的一个技巧
                  this.addressSlots[0].defaultIndex = 0;
                }, 100);
            });
        }
    }
</script>
<style lang="less" scoped>
    #shopgrade{
        position:fixed;
        left: 0;
        top: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        overflow: auto;
        font-size: 0.8rem;
        background: #fff;
        .shopgrade-top{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            background: red;
            color: #fff;
            text-align: center;
            .shopgrade-top-back{
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
            .shopgrade-top-set{
                flex: 1;
                width: 100%;
                text-indent: -3em;
            }
        }
        
    }
    .personage-main{
            width: 100%;
            box-sizing: border-box;
            padding: 1rem;
            color: #757575;
            font-size: 0.8rem;
            .personage-main-all{
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 2rem;
                input{
                    width: 100%;
                    border-radius: 0.2rem;outline: 0;
                    text-indent: 0.5em;border: 1px solid #ccc;
                }
                .personage-main-all-a{
                    flex: 0 0 4rem;
                    
                }
            }
        }
    .personage-main-b{
        flex: 1;
    }
    .personage-main-yi{
        display: flex;
        justify-content: flex-start;
    }
    .personage-main-kuai{
        flex: 0 0 50%;
    }
    .personage-main-cc{
        display: flex;
        flex: 1;
        justify-content: space-around;
    }
    .personage-main-icon{
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        background: url(/dist/static/images/yikuaisprites.png) no-repeat -180px -70px;
        background-size: 200px 200px;
    }
    .personage-main-pos{
        background-position: -180px -90px !important;
    }
    .submit-btn{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        .btn{
            flex: 0 0 4rem;
            line-height: 1.5rem;
            height: 1.5rem;
            border-radius: 0.5rem;
            background: #00a1d8;
            color: #fff;
            border: 0;
            vertical-align: middle;
            font-size: 0.8rem;
        }
    }
    .add-address-control{
            display: flex;
            justify-content: space-around;
            padding: 0.3rem;
            box-sizing: border-box;
            width: 100%;
            align-items: center;
            margin-top: 2rem;
            
            button{
                flex: 0 0 4rem;
                font-size: 0.8rem;
                color: #fff;
                border-radius: 0.2rem;
                border: 0;
                outline:0;
                height: 2rem;
                line-height: 2rem;
            }
            button:first-child{
                background: cornflowerblue;
            }
            button:last-child{
                background: red;
            }
        }
</style>