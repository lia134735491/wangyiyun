import Vue from '../node_modules/vue/dist/vue.esm.js';
import app from './app.vue';
import VueRouter from 'vue-router';
import router from './js/router.js';
import '../static/myreset.css';
import '../static/Normalize.css';
import './font/iconfont.css';
import  VueAwesomeSwiper from 'vue-awesome-swiper';
import '../node_modules/swiper/swiper-bundle.css';
Vue.use(VueAwesomeSwiper,/* { default options with global component } */)
Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: c=>c(app),
    router
})
