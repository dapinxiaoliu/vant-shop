<template>
	<div class="usercenter">
		<van-nav-bar
		  title="设置"
		  :fixed='true'
		  :border='true'
		  left-arrow
		  @click-left="$router.back()"
		/>
		<van-cell-group style="margin-top: 50px;text-align: center;">
		  <van-button type="default" style="border: none;" @click="logout">退出登录</van-button>
		</van-cell-group>
		
	</div>
</template>

<script>
	import {mapMutations} from 'vuex'
	import {Toast} from 'vant'
	export default {
		name:'',
		data(){
			return{}
		},
		methods: {
			...mapMutations(['RESET_USER_INFO','CLEAR_CART']),
			logout(){
				this.RESET_USER_INFO()
				this.CLEAR_CART()
				Toast('成功退出')
			}
		}
	}
</script>

<style lang="less" scoped>
	.usercenter{
		position: fixed;
		left: 0;
		top:0 ;
		right: 0;
		bottom: 0;
		z-index: 99999;
		background: #f5f5f5;
	}
</style>