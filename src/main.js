import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import {fb}   from './firebase';

window.$ = window.jQuery = jQuery;

import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

// Sweet Alert 提醒功能
import Swal from 'sweetalert2';
window.Swal = Swal;

Vue.config.productionTip = false;



// 阿順新增系列 
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// // Make BootstrapVue available throughout your project
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
// // Vue.use(VueTailwind, settings)

// import Element from 'element-ui'

// Vue.use(Element)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// End -.-.- OK


// 可於各檔案加入
Vue.component('Navbar',require('./components/Navbar.vue').default);
Vue.component('Login',require('./components/Login.vue').default);

//當驗證狀態改變時才會mount資料，避免登入後/未登出回首頁需重新登入
let app = '';
fb.auth().onAuthStateChanged(function(user) {
  if(!app){
    new Vue({
      router, 
      render: h => h(App)
    }).$mount("#app");
  }
});