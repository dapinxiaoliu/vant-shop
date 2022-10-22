<template>
	<div>
		<li class="item">
			<van-image :src="item.name" class="litpic" style="width: 3.5rem;height: 2.5rem;background-color: #fff;">
			  <template v-slot:loading>
			    <van-loading type="spinner" size="30" />
			  </template>
			</van-image>
			<div class="itemwarp">
				<p>{{item.title}} {{item.biaoshi}}</p>
				<span>{{item.yj | moneyFormat}}</span>
				<div><em>{{item.xj | moneyFormat}}</em> <img :src="cart" @click.stop="addGoodsToCart(item)"> </div>
			</div>
		</li>
	</div>
</template>

<script>
	// import PubSub from 'pubsub-js'
	import {mapMutations} from 'vuex'
	import {Toast} from 'vant'
	export default {
		name:'',
		props:['item','cart'],
		emits:['sendItem'],
		data(){
			return{}
		},
		methods: {
			...mapMutations(['ADD_GOODS']),
			addGoodsToCart(goods){
				this.$emit('sendItem',goods)
			}
		}
	}
</script>

<style lang="less" scoped>

	.item{
		background: #fff;
		margin-bottom: .2rem;
		width: 3.5rem;
		overflow: hidden;
		.itemwarp{
			padding: 0 .1rem;
			margin-top: .2rem;
			.litpic{
				width: 3.5rem;
				height: 2.2rem;
			}
			p{
				font-size: .26rem;
				margin-bottom: .2rem;
				line-height: .32rem;
			}
			span{
				font-size: .26rem;
				margin-bottom: .2rem;
				display: block;
				color: #ccc;
				text-decoration: line-through;
			}
			div{
				display: flex;
				justify-content: space-between;
				padding-bottom: .3rem;
				em{
					font-size: .26rem;
					color: red;
				}
				img{
					width: .35rem;
					margin-top: -.08rem;
					
				}
				
			}
		}
		
	}
	
	
</style>