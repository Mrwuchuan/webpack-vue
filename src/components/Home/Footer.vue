<template>
<div class="foot-fiexd">
   <ul class="foot-fiexd-ul">
       <router-link to="/home" tag="li">
           <img src="../../../static/images/n-catergry.png" alt="">
       </router-link>
       <router-link to="/discover" tag="li">
           <img src="../../../static/images/n-find.png" alt="">
       </router-link>
       <router-link to="/shoppingcat" tag="li">
           <img src="../../../static/images/n-cart.png" alt="">
       </router-link>
       <router-link to="/mine" tag="li">
           <img src="../../../static/images/n-me.png" alt="">
       </router-link>
   </ul>
</div>
</template>
<script>

</script>
<style lang="less">
    .foot-fiexd{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
/*        height: 3.4rem;*/
        z-index: 9999;
        .foot-fiexd-ul{
            display: flex;
            justify-content: space-around;
            background: #fff;
            li{
/*                flex: 1;*/
                width: 3.5rem;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>