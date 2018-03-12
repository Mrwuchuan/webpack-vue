<template>
    <div id="self">
        <div class="self-top">
            <span @click="historyGo"></span>
            <span>个人资料</span>
        </div>
        <div class="self-main">
            <div class="self-main-head self-main-bus">
                <span>用户头像</span>
                <span>
                    <img src="/dist/static/images/top-jdlogo.png" alt="">
<!--                    <input type="file">-->
                </span>
                <span class="self-main-goicon"></span>
            </div>
            <div class="self-main-username self-main-bus">
                <span>用户名</span>
                <span>小哥</span>
                <span class="self-main-goicon"></span>
            </div>
            <div class="self-main-name self-main-bus">
                <span>姓名</span>
                <span><input type="text" value="Mr.wu"></span>
                <span class="self-main-goicon"></span>
            </div>
            <div class="self-main-sex self-main-bus" @click="changeSex">
                <span>性别</span>
                <span>{{userSex}}</span>
                <span class="self-main-goicon"></span>
            </div>
            <div class="self-main-birthday self-main-bus" @click="open('picker1')">
                <span>出生日期</span>
                <span v-model="birthday">{{birthday}}</span>
                <span class="self-main-goicon"></span>
            </div>
            <router-link :to="{name:'Mycode',params:{id:'wuchuan'}}" tag="div" class="self-main-er self-main-bus">
                <span>我的二维码</span>
                <span>
<!--                    <img :src="" alt="">-->
                </span>
                <span class="self-main-goicon"></span>
            </router-link>
            <router-link :to="{path:'/mine/address',params:{id:'chuange'}}" tag="div" class="self-main-address self-main-bus">
                <span>管理地址</span>
                <span></span>
                <span class="self-main-goicon"></span>
            </router-link>
        </div>
        <div class="change-sex" :class="{'change-sex-pin':sexShow,'change-sex-pout':sexOut}">
            <div class="change-sex-head change-sex-bus">请选择性别</div>
            <div class="change-sex-man change-sex-bus" :class="{'active':!showRedio}" @click="changeRedio($event)">男</div>
            <div class="change-sex-women change-sex-bus" :class="{'active':showRedio}" @click="changeRedio($event)">女</div>
        </div>
        <mt-datetime-picker
          v-model="pickerVisible"
          type="date"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          :startDate="startDate"
          :endDate="endDate"
          ref="picker1"
          @confirm="handleChange"
          >
        </mt-datetime-picker>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                birthday:"1989-01-02",
                userSex:"男",
                sexShow:false,
                sexOut:false,
                showRedio:false,
                pickerVisible:null,
                startDate: new Date('1949'),
                endDate:new Date(),
                value:new Date()
            }
        },
        methods:{
            historyGo(){
                window.history.go(-1);
            },
            changeSex(){
                this.sexShow = !this.sexShow;
                this.sexOut = !this.sexShow;
            },
            changeRedio(e){
                this.userSex = e.target.innerHTML;
                this.showRedio = !this.showRedio;
                this.sexOut = true;
                this.sexShow = false;
            },
            open(picker){
                this.$refs[picker].open();
            },
            handleChange(value){
                var year = value.getFullYear();
                var month = value.getMonth();
                var date = value.getDate();
                this.birthday = year+"-"+(month+1)+"-"+date;
            }
        },
        beforeCreate(){
            
        }
    }
</script>
<style lang="less" scoped>
    #self{
        overflow: scroll;
        position: fixed;
        left: 0;
        top: 0;
        background: #f5f3f4;
        width: 100%;
        height: 100%;
        z-index:99999;
        font-size: 0.8rem;
        .self-top{
            width: 100%;
            height: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: red;
            color: #fff;
            span:first-child{
                display: inline-block;
                flex: 0 0 20px;
                height: 20px;
                background: url(/dist/static/images/goback.png)no-repeat 0 0;
                background-size: 12px;
                margin-left: 0.5rem;
            }
            span{
                flex: 1;    
                text-align: center;
            }
            span:nth-of-type(2){
                text-indent: -1.5rem;    
            }
        }
        .self-main-bus{
            background:#fff;    
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            height: 3rem;
            span{
                color: #757575;
                flex: 1;
            }
            span:last-child{
                flex: 0 0 1.2rem;
                height: 1.2rem;
                background: url(/dist/static/images/shopping.cart.spirits.icns2.png) no-repeat 0 -100px;
            }
            span:first-child{
                flex: 1;
                padding-left: 1rem;
            }
            span:nth-of-type(2){
                text-align: right;
                margin-right: 0.5rem;
            }
        }
        .self-main-bus:after{
            content: "";
            border-bottom: 1px solid #ccc;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            transform: scaleY(.5);
        }
        .self-main-head{
            height: 5rem;
            span:nth-of-type(2){
                display: block;
                height: 3rem;
                border-radius: 50%;
                overflow: hidden;
                flex: 0 0 3rem;
                background: green;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .self-main-name{
            span:nth-of-type(2){
                
            }
        }
        input{
            outline:none;
            border: 0;
            text-align: right;
            font-size: 1rem;
        }
        .change-sex{
            display: flex;
            flex-direction: column;
            width: 100%;
            text-align: center;    
            position: fixed;
            left: 0;
            bottom: -6rem;
            background: #F8F8FF;
        }
    }
    .change-sex-pin{
        animation: positions-in .5s linear 0s;
        animation-fill-mode:forwards;
    }
    .change-sex-pout{
        animation: positions-out .5s linear 0s;
        animation-fill-mode:forwards;
    }
    .change-sex-head{
        background: rgb(0,0,0);
        color: #fff;
    }
    .change-sex-man{
        color: #333;
    }
    .change-sex-bus{
        line-height: 2rem;
        height: 2rem;
    }
    @keyframes positions-in{
        0%{
            bottom: -6rem;
        }
        100%{
            bottom: 0rem;
        }
    }
    @keyframes positions-out{
        0%{
            bottom: 0rem;
        }
        100%{
            bottom: -6rem;
        }
    }
    .active{
        background: #DCDCDC !important;
    }
    a{
        color: #757575;
    }
</style>