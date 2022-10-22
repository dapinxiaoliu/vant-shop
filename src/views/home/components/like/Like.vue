<template>
	<div class="like">
		<div class="wrapper">
		    <div class="titleWrapper">
		        <div class="title">猜你喜欢</div>
		    </div>
		    <div>
				<ul>
					<LikeItem  v-for="item in likedata" :item="item" :key="item.id" :cart="cart" @sendItem="sendTime"/>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import LikeItem from './LikeItem.vue'
	export default {
		name:'',
		props:['likedata','cart'],
		emits:['goodsToHome'],
		components:{
			LikeItem
		},
		data(){
			return{}
		},
		methods: {
			sendTime(goods){
				this.$emit('goodsToHome', goods)
			}
		}
	}
</script>

<style lang="less" scoped>
	.like{
		
		.wrapper {
			height: 5rem;
			.titleWrapper {
				position: relative;
				padding: 0 0.625rem;
				text-align: center; 
				margin-top: .2rem;
				height: .5rem;
				.title {
					position: absolute;
					left: 50%;
					padding: 0 .4rem;
					transform: translateX(-50%);
					display: inline-block;
					font-size: .3rem;
					background: #F5F5F5;
					bottom: -.1rem;
					z-index: 2;
				}
			}
			.titleWrapper::after{
				content: '';
				position: absolute;
				width: 90%;
				height: 1px;
				background: #D8D8D8;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				z-index: 1;
			}
			ul{
				display: flex;
				flex-wrap: wrap;
				margin-top: .5rem;
				padding-bottom: 1rem;
				justify-content: space-evenly;
			}
		}

		

		

		
	}
</style>