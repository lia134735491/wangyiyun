import Vue from '../node_modules/vue/dist/vue.esm.js';
import app from './app.vue';
import $ from 'jquery';
import VueRouter from 'vue-router';
import router from './js/router.js';
import '../static/myreset.css';
import '../static/Normalize.css';
import './font/iconfont.css';
import  VueAwesomeSwiper from 'vue-awesome-swiper';
import '../node_modules/swiper/swiper-bundle.css';
import { Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper,/* { default options with global component } */)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Pagination)
new Vue({
    el: '#app',
    render: c=>c(app),
    router
})
