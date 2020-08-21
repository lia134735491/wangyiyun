console.log(222);
import Vue from '../node_modules/vue/dist/vue.esm.js';
import app from './app.vue';
new Vue({
    el: '#app',
    render: c=>c(app)
})
console.log(111)