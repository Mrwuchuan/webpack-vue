<template>
    <div>
        <div class="search-goods">
            <span class='back' @click="historyGo"></span>
            <input @keyup.enter="keyUpSearch($event)" class="search-inp" type="text" v-model="searchs" placeholder="搜索" autofocus>
        </div>
        <ul v-show="someData.length!=0 && bool" class="datas">
            <li v-for="(item,index) in someData.s" :key="index" class="datalist" @click="checkedGoods(item)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                searchs:"",
                someData:[],
                bool:true,
            }
        },
        beforeCreate(){
            
            var name = this.$route.params.id || "你社会川哥";
            this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                params:{
                    wd:name
                },
                jsonp:'cb'
            }).then(res=>{
                this.someData = res.body;
                this.searchs = this.$route.params.id
            },err=>{
                console.log(err);
            });
            
        },
        methods:{
            keyUpSearch(e){
                this.bool = true;
                console.log(this.searchs);
                let name = this.searchs;
                //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su
                //说明:因为百度的callback更改为cb,所以下边的jsonp赋值为cb
//                this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
//                    params:{
//                        wd:name
//                    },
//                    jsonp:'cb'
//                }).then(response => {
//                    this.someData = response.body;
//                    console.log(this.someData.s);
//                }, response => {
//                    // error callback
//                    console.log(response);
//                });
                this.$http.jsonp("http://localhost/wuchuanphp/ajax.php",{jsonp:'_callback'}).then((res)=>{
                    console.log(res);
                },(res)=>{
                    console.log(res);
                })
            },
            historyGo(){
                window.history.go(-1);
            },
            checkedGoods(e){
                this.searchs = e;
                this.someData = [];
                this.keyUpSearch();
                this.bool = false;
            }
        },
        computed:{
            
        },
        mounted(){

        }
    }
</script>


<style scoped lang="less">
    .search-goods{
        height: 2rem;
        width: 100%;
        background: #ff0000;
        display: flex;
        justify-content: center;
        align-items: center;
        .back{
            flex: 0 0 20px;
            height: 20px;
            text-align: center;
            color: #fff;font-size: 1rem;
            background: url(../../../static/images/goback.png)no-repeat 0 0;
            background-size: 12px;
            margin-left: 0.5rem;
        }
        .search-inp{
            flex: 1;
            height: 1.3rem;
            border: 0;
            border-radius: .2rem;
            text-indent: 1em;
            font-size: 0.8rem;
            color: #333;
            box-sizing: border-box;
            margin-right: 0.5rem;
        }
    }
    .datas{
        width: 100%;
        position: absolute;
        left: 0;
        top: 2rem;
        z-index: 99;
        background: rgba(0,0,0,.2);
        .datalist{
            text-indent: 2rem;
        }
    }
</style>