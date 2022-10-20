<template>
	<div>
		<div class="swiper-slide">
			<div class="item">
				<img :src="item.name" alt="">
				<p>{{item.title}} {{item.biaoshi}}</p>
				<span>{{item.yj | moneyFormat}}</span>
				<div><em>{{item.xj | moneyFormat}}</em> <img :src="cart"> </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'',
		props:['item','cart'],
		data(){
			return{}
		},
		methods: {
		}
	}
</script>

<style lang="less" scoped>
	.swiper-slide{
		.item{
			margin: 0 .2rem;
			img{
				margin-bottom: .2rem;
			}
			p{
				font-size: .28rem;
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
					width: .3rem;
					margin-top: -.05rem;
				}
				
			}
		}
		
		
	}
</style>