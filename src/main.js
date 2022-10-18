import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


import '@/config/rem.js'


import '@/style/common.less' //全局样式
import '@/plugins/vant'	//UI组件库

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
