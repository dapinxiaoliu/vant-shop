<template>
	<div id="home">
		首页
	</div>
</template>

<script>
	import request from '../../service/request.js'
	export default {
		name:'Home',
		data(){
			return{}
		},
		async created() {
			await request('/api/goods')
			.then(res => {
				console.log(res);
			}).catch(err =>{
				console.log(err);
			})
		},
		methods: {
			
			
		}
	}
</script>

<style lang="less" scoped>
	#home{
		
	}
</style>