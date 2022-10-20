import Vue from 'vue'

Vue.filter('moneyFormat', (val)=>{
	return '¥'+Number(val).toFixed(2)
})