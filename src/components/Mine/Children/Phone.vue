<template>
    <div id="phone">
        <div class="phone-main">
            <p class="place-write place-all">请输入手机号</p>
            <input class="phone-inp place-all" type="text">
            <button @click="submitPhone" class="phone-btn place-all">验证</button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                
            }
        },
        methods:{
            submitPhone(){
                this.$router.push({name:'PhoneMessage'})
            }
        }
    }
</script>
<style lang="less" scoped>
    #phone{
        display: flex;
        justify-content: center;
        align-items: center;
        .phone-main{
            flex: 0 0 80%;
            background: #fde9ea;
            border-radius:0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 1rem;
            .place-write{
                font-size: 1rem;
                color: #746b6b;
                height: 6rem;
                line-height: 6rem;
            }
            .phone-inp{
                border: 0;
                outline: 0;
                height: 2rem;
                line-height: 2rem;
                text-indent: 1em;
                border-radius: 0.1rem;
            }
            .phone-btn{
                border: 0;
                outline: 0;
                background: #00a1d9;
                color: #fff;
                margin: 1rem 0 1.5rem;
                padding: 0.3rem 0;
                border-radius: 0.3rem;
            }
            .place-all{
                width: 100%;
                flex: 1;
            }
        }
    }
</style>