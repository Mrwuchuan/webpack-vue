<template>
    <div id="newaddress">
        <div class="address-top">
            <span @click="historyGo"></span>
            <span>新增收货地址</span>
        </div>
        <div class="newaddress-main">
            <div class="newaddress-main-list">
                <span>收货人姓名{{$route.params.id}}</span>
                <input type="text" id="user-name" value="" v-model="name">
            </div>
            <div class="newaddress-main-list">
                <span>手机号</span>
                <input type="text" id="user-name" value="" v-model="phone">
            </div>
            <div class="newaddress-main-list" @click="alertPicker">
                <span>所在地区</span>
                <input type="text" disabled id="user-name" value="" v-model="address">
            </div>
            <div class="newaddress-main-list">
                <span>详细地址</span>
                <input type="text" id="user-name" value="" v-model="detailAddress">
            </div>
            <div class="newaddress-main-list">
                <span>邮政编码</span>
                <input type="text" id="user-name" value="" v-model="email">
            </div>
            <div class="newaddress-main-list">
                <button @click="submitVal">完成</button>
            </div>
        </div>
        <div class="add-address" v-if="showPicker">
           
            <div class="add-address-res">
                <p>您当前选择的地址是:</p>
                <p>{{addressProvince}}{{addressCity}}{{addressXian}}{{addressStreet}}</p>
            </div>
            <mt-picker :slots="addressSlots" class="picker" @change="onAddressChanges" :visible-item-count="3" ></mt-picker >
            <mt-picker :slots="streetSlots" ref="picker" class="picker" @change="onStreetChange" :visible-item-count="3" ></mt-picker >
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
        name: 'address',
        data(){
            return {
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
                streetSlots: [
                  {
                    flex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                  }
                ],
                addressProvince: '省',
                addressCity: '市',
                addressXian: '区',
                addressStreet: '街道',
              }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            submitVal(){
                console.log(this.name)
            },
            closeAddress(){
                  this.showPicker = false;
            },
            alertPicker(){
                this.showPicker = true;
            },
            addAddress(){
                this.address = this.addressProvince+this.addressCity+this.addressXian+this.addressStreet;
                this.showPicker = false;
            },
            onStreetChange(picker, values){
//                console.log(values);
                this.addressStreet = values[0] || "";
              },
            onAddressChanges(picker,values){
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
                    this.streetSlots[0].values = [];
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
                if(values[0] == undefined || values[1] == undefined || values[2] == undefined){
                       this.streetSlots[0].values = []; return;
                }else{
                    this.streetSlots[0].values = s[values[0]][values[1]][values[2]];
                }
            }
        },
        mounted(){
            this.name = this.$route.params.name || "";
            this.phone = this.$route.params.phone || "";
            this.address = this.$route.params.address || "";
            this.detailAddress = this.$route.params.detailAddress || "";
            this.email = this.$route.params.email || "";
            
            this.$nextTick(() => {
                setTimeout(() => {//这个是一个初始化默认值的一个技巧
                  this.addressSlots[0].defaultIndex = 0;
                }, 100);
            });
            
        }
    }
</script>
<style lang="less" scoped>
    .add-address{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fafafa;
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
        .add-address-res{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 0.3rem;
            box-sizing: border-box;
            background: #fff;
            border-radius: 0.5rem;
            margin-top: 3rem;
            height:7rem;
            p{
                flex: 1;
                width: 100%;
            }
        }
        .picker{
            width: 100%;
            overflow: hidden;
        }
    }
    #newaddress{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        z-index: 100000;
        font-size: 0.8rem;
        background: #fafafa;
        overflow: auto;
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
                height: 20px;
                margin-left: 0.5rem;
                background: url(/dist/static/images/goback.png)no-repeat 0 0;
                background-size: 12px;
            }
            span:nth-of-type(2){
                flex: 1;
                width: 100%;
                text-indent: -1.5rem;
            }
        }
        .newaddress-main{
            padding: 0.3rem;
            box-sizing: border-box;
            width: 100%;
            flex-direction: column;
            background: #fff;
            .newaddress-main-list{
                display:flex;
                align-items: center;
                justify-content: space-between;
                height: 2rem;
                margin-bottom:0.5rem;
                span{
                    flex: 0 0 5rem;
                    text-align-last: justify;
                    color: #ada3a3;
                }
                input{
                    flex: 1;
                    border: 0;
                    outline: 0;
                    background: #e6e3e3;
                    border-radius: 0.2rem;
                    margin-left: 1rem;
                    width: 100%;
                    height: 1.5rem;;
                    text-indent: 0.3rem;
                }
            }
            .newaddress-main-list:last-child{
                position: fixed;
                left: 0;
                bottom: 0;
                align-self: flex-end;
                background: #fff;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                button{
                    flex: 0 0 5rem;
                    background: red;
                    color: #fff;
                    border-radius: 0.1rem;
                    text-align: center;
                    margin-right: 1.5rem;
                    font-size: 0.8rem;
                    border: 0;
                    outline: 0;
                    padding:0.3rem 0;
                }
            }
        }
    }
</style>