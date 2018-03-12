// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import { Picker, DatetimePicker } from 'mint-ui'
import Vuex from 'vuex'
//import store from './store/'

Vue.component(Picker.name, Picker);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.use(Vuex)

//Vue.config.productionTip = false

//Vue.use(Mint)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//  store,
  template: '<App/>',
  components: { App }
})
