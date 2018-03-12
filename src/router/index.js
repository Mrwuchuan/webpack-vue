import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/components/Home/Home.vue')), 'home')
const Search = r => require.ensure([], () => r(require('@/components/Search/Search')), 'search')
const Classfied = r => require.ensure([], () => r(require('@/components/Classfied/Classfied')), 'classfied')
const Seckill = r => require.ensure([], () => r(require('@/components/Seckill/Seckill')), 'seckill')
const Details = r => require.ensure([], () => r(require('@/components/Details/Details')), 'details')
const Kefu = r => require.ensure([], () => r(require('@/components/Kefu/Kefu')), 'kefu')
const Shopcate = r => require.ensure([], () => r(require('@/components/Shopcate/Shopcate')), 'Shopcate')
const Nowbuy = r => require.ensure([], () => r(require('@/components/Nowbuy/Nowbuy')), 'Nowbuy')
const Mine = r => require.ensure([], () => r(require('@/components/Mine/Mine')), 'Mine')
const Shoppingcat = r => require.ensure([], () => r(require('@/components/Shoppingcat/Shoppingcat')), 'Shoppingcat')
const Discover = r => require.ensure([], () => r(require('@/components/Discover/Discover')), 'Discover')
const Selfcenter = r => require.ensure([], () => r(require('@/components/Mine/Children/Selfcenter')), 'Selfcenter')
const Address = r => require.ensure([], () => r(require('@/components/Mine/Children/Address')), 'Address')
const Newaddress = r => require.ensure([], () => r(require('@/components/Mine/Children/Newaddress')), 'Newaddress')
const Mycode = r => require.ensure([], () => r(require('@/components/Mine/Children/Mycode')), 'Mycode')
const Setpage = r => require.ensure([], () => r(require('@/components/Mine/Children/Setpage')), 'Setpage')
const Account = r => require.ensure([], () => r(require('@/components/Mine/Children/Account')), 'Account')
const Updatepass = r => require.ensure([], () => r(require('@/components/Mine/Children/Updatepass')), 'Updatepass')
const Phone = r => require.ensure([], () => r(require('@/components/Mine/Children/Phone')), 'Phone')
const PhoneMessage = r => require.ensure([], () => r(require('@/components/Mine/Children/PhoneMessage')), 'PhoneMessage')
const PhonePass = r => require.ensure([], () => r(require('@/components/Mine/Children/PhonePass')), 'PhonePass')
const AboutUs = r => require.ensure([], () => r(require('@/components/Mine/Children/AboutUs')), 'AboutUs')
const Order = r => require.ensure([], () => r(require('@/components/Mine/Children/Order')), 'Order')
const All = r => require.ensure([], () => r(require('@/components/Mine/Children/All')), 'All')
const WaitPay = r => require.ensure([], () => r(require('@/components/Mine/Children/WaitPay')), 'WaitPay')
const WaitSendGoods = r => require.ensure([], () => r(require('@/components/Mine/Children/WaitSendGoods')), 'WaitSendGoods')
const ReceiveGoods = r => require.ensure([], () => r(require('@/components/Mine/Children/ReceiveGoods')), 'ReceiveGoods')
const WaitDescription = r => require.ensure([], () => r(require('@/components/Mine/Children/WaitDescription')), 'WaitDescription')
const Upgrade = r => require.ensure([], () => r(require('@/components/Mine/Children/Upgrade')), 'Upgrade')
const Recharge = r => require.ensure([], () => r(require('@/components/Mine/Children/Recharge')), 'Recharge')
const Management = r => require.ensure([], () => r(require('@/components/Mine/Children/Management')), 'Management')
const Invitation = r => require.ensure([], () => r(require('@/components/Mine/Children/Invitation')), 'Invitation')
const Security = r => require.ensure([], () => r(require('@/components/Mine/Children/Security')), 'Security')
const Service = r => require.ensure([], () => r(require('@/components/Mine/Children/Service')), 'Service')
const Personage = r => require.ensure([], () => r(require('@/components/Mine/Children/Personage')), 'Personage')
const Shopgrade = r => require.ensure([], () => r(require('@/components/Mine/Children/Shopgrade')), 'Shopgrade')
const Confirmation = r => require.ensure([], () => r(require('@/components/Mine/Children/Confirmation')), 'Confirmation')
const ConfirmOrder = r => require.ensure([], () => r(require('@/components/Shoppingcat/Children/ConfirmOrder')), 'ConfirmOrder')
const KuaiZhuan = r => require.ensure([], () => r(require('@/components/KuaiZhuan/KuaiZhuan')), 'KuaiZhuan')
const Favourable = r => require.ensure([], () => r(require('@/components/Favourable/Favourable')), 'Favourable')
const Banner = r => require.ensure([], () => r(require('@/components/Banner/Banner')), 'Banner')
const ExchangeShop = r => require.ensure([], () => r(require('@/components/ExchangeShop/ExchangeShop')), 'ExchangeShop')
const ShopEnter = r => require.ensure([], () => r(require('@/components/ShopEnter/ShopEnter')), 'ShopEnter')
const WingTips = r => require.ensure([], () => r(require('@/components/WingTips/WingTips')), 'WingTips')
const Rule = r => require.ensure([], () => r(require('@/components/Rule/Rule')), 'Rule')
const MyWing = r => require.ensure([], () => r(require('@/components/MyWing/MyWing')), 'MyWing')


Vue.use(Router)

export default new Router({
//    mode:'history',
    base:__dirname,
  routes: [
    { // 商品首页面
      path: '/',
      name: 'Home',
      component: Home
    },
    { // 商品首页面
      path: '/home',
      name: 'Home',
      component: Home
    },
    {   // 搜索页面
        path:'/search',
        name:"Search",
        component: Search
    },
    {   // 分类页面
        path:'/classify',
        name:'Classfied',
        component:Classfied
    },
    {   // 秒杀页面
        path:'/seckill',
        name:'Seckill',
        component:Seckill
    },
    {   // 商品详情页
        path:'/details/:id',
        name:'Details',
        component:Details
    },
    {   // 加入购物车,待确定
        path:'/shopcate/:id',
        name:'Shopcate',
        component:Shopcate
    },
    {   // 客服页面
        path:'/kefu/:id',
        name:'Kefu',
        component:Kefu
    },
    {   // 立刻购买
        path:'/nowbuy/:id',
        name:'Nowbuy',
        component:Nowbuy
    },
    {   // 购物车页面
        path:'/shoppingcat',
        name:'Shoppingcat',
        component:Shoppingcat,
        children:[
            {
                path:"confirmorder",
                name:"ConfirmOrder",
                component:ConfirmOrder
            }
        ]
    },
    {   // 我的详情页
        path:'/mine',
        name:'Mine',
        component:Mine,
        children:[
            {   // 个人中心页
                path:"self",  
                name:"Self",
                component:Selfcenter
            },
            {   // 地址管理页
                path:"address",
                name:"Address",
                component:Address
            },
            {   // 新建地址页
                path:"newaddress",
                name:"Newaddress",
                component:Newaddress
            },
            {   /// 我的推广页
                path:"mycode",
                name:"Mycode",
                component:Mycode
            },
            {   // 设置页面
                path:"setpage",
                name:"Setpage",
                component:Setpage
            },
            {   // 账单页面
                path:"account",
                name:"Account",
                component:Account
            },
            {   // 会员升级
                path:"upgrade",
                name:"Upgrade",
                component:Upgrade,
                children:[
                    {
                        path:"personage",
                        name:"Personage",
                        component:Personage
                    },
                    {
                        path:"shopgrade",
                        name:"Shopgrade",
                        component:Shopgrade
                    }
                ]
            },
            {   // 我要充值页
                path:"recharge",
                name:"Recharge",
                component:Recharge
            },
            {   // 资金管理
                path:"management",
                name:"Management",
                component:Management
            },
            {   // 我的邀请页
                path:"invitation",
                name:"Invitation",
                component:Invitation
            },
            {   // 安全设置页
                path:"security",
                name:"Security",
                component:Security
            },
            {   // 客服页
                path:"service",
                name:"Service",
                component:Service
            },
            {   // 修改密码页
                path:"updatepass",
                name:"Updatepass",
                component:Updatepass,
                children:[
                    {
                        path:"phone",
                        name:"Phone",
                        component:Phone
                    },
                    {
                        path:"phonemessage",
                        name:"PhoneMessage",
                        component:PhoneMessage
                    },
                    {
                        path:"phonepass",
                        name:"PhonePass",
                        component:PhonePass
                    },
                ]
            },
            {   // 关于易快页
                path:"aboutus",
                name:"AboutUs",
                component:AboutUs
            },
            {   // 确认交易
                path:'confirmation',
                name:'Confirmation',
                component:Confirmation
            },
            {   // 订单页面
                path:"order",
                name:"Order",
                component:Order,
                children:[
                    {   // 所有订单页
                        path:"all",
                        name:"All",
                        component:All
                    },
                    {   // 代付款页
                        path:"waitpay",
                        name:"WaitPay",
                        component:WaitPay
                    },
                    {   // 代发货页
                        path:"waitsendgoods",
                        name:"WaitSendGoods",
                        component:WaitSendGoods
                    },
                    {   // 待收货
                        path:"receivegoods",
                        name:"ReceiveGoods",
                        component:ReceiveGoods
                    },
                    {   // 待评论页
                        path:"waitdescription",
                        name:"WaitDescription",
                        component:WaitDescription
                    }
                ]
            }
        ]
    },
    {   // 发现页面
        path:'/discover',
        name:'Discover',
        component:Discover
    },
    {
        path:'/kuaizhuan',
        name:'KuaiZhuan',
        component:KuaiZhuan
    },
    {
        path:'/favourable',
        name:'Favourable',
        component:Favourable
    },
    {
        path:'/banner',
        name:'Banner',
        component:Banner
    },
    {
        path:'/exchangeshop',
        name:'ExchangeShop',
        component:ExchangeShop
    },
    {
        path:'/shopenter',
        name:'ShopEnter',
        component:ShopEnter
    },
    {
        path:'/wingtips',
        name:"WingTips",
        component:WingTips
    },
    {
        path:"/rule",
        name:"Rule",
        component:Rule
    },
    {
        path:'/mywing',
        name:'MyWing',
        component:MyWing
    }
  ]
})