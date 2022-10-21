<template>
	<div id="mine">
		<div v-if="userInfo.token">
			<van-nav-bar
			  title="我的"
			  :fixed='true'
			  :border='false'
			/>
			
			<van-cell-group style="margin-top: 45px;">
			  <van-cell style=" background-color: seagreen;">
				<!-- 使用 title 插槽来自定义标题 -->
				<template #title>
					<div class="personBox">
						<img src="@/images/nav6.png" alt="" style="width: 2rem;">
						<div class="personInfo">
							<p>小冠</p>
							<p>北京冠领律师事务所</p>
						</div>
					</div>
				  
				</template>
			  </van-cell>
			</van-cell-group>
			
			
			
			<van-cell-group>
			  <van-cell icon="bag" title="我的订单" value="查看所有订单" is-link/>
			</van-cell-group>
			
			<van-grid :column-num="4">
			  <van-grid-item v-for="item,index in orderShop" :key="index" :icon="item.icon" :text="item.title" />
			</van-grid>
			
			<van-cell-group>
			  <van-cell icon="bag" title="我的订单" value="查看所有订单" is-link/>
			  <van-cell icon="bag" title="我的订单" value="查看所有订单" is-link/>
			</van-cell-group>
			
			<van-cell-group>
			  <van-cell icon="bag" title="我的订单" value="查看所有订单" is-link/>
			  <van-cell icon="bag" title="我的订单" value="查看所有订单" is-link/>
			</van-cell-group>
			
			<van-cell-group>
			  <van-cell icon="bag" title="我的订单" value="查看所有订单" is-link/>
			</van-cell-group>
		</div>
		<SelectLogin v-else />
	</div>
</template>

<script>
	import SelectLogin from '../login/SelectLogin.vue'
	import {mapState} from 'vuex'
	export default {
		name:'Mine',
		components:{
			SelectLogin
		},
		data(){
			return{
				orderShop:[
					{icon:'cart', title:'待支付'},
					{icon:'graphic', title:'待收货'},
					{icon:'chat', title:'待评价'},
					{icon:'setting', title:'售后/退款'}
				]
			}
		},
		methods: {
		},
		computed:{
			...mapState(['userInfo'])
		},
		mounted(){
			
		}
	}
</script>

<style lang="less" scoped>
	#mine{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/deep/ .van-nav-bar{
			background-color:seagreen;
			.van-nav-bar__title{
				color: #fff;
			}
			
		}
		.personBox{
			display: flex;
			color: #fff;
			align-items: center;
			img{
				width: 1.3rem !important;
				height: 1.3rem;
				border-radius: 50%;
				margin-right: .3rem;
				border: .04rem solid #fff;
				overflow: hidden;
			}
		}
		.van-cell__left-icon{
			color: orange;
			font-size: .4rem;
		}
		.van-cell-group{
			margin-top: .1rem;
		}
		
		
	}
</style>