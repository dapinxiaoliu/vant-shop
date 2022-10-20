<template>
	<div class="contentitem">
		<ul>
			<li v-for="val in item.prodata" :key="val.id">
				<img :src="val.img" alt="" class="litpic">
				<div class="info">
					<strong>{{val.name}}</strong>
					<p>{{val.intro}}</p>
					<div><em>{{val.xj | moneyFormat}}</em> <img :src="cart"> </div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'',
		props:['item','cart'],
		data(){
			return{}
		},
		created(){
			
		},
		methods: {
		}
	}
</script>

<style lang="less" scoped>
	.contentitem:first-child{
		padding-top: 1.3rem;
	}
	.contentitem:last-child{
		padding-bottom: 1rem;
	}
	.contentitem{
		
		ul{
			margin-left: .3rem;
			li{
				display: flex;
				margin-bottom: .3rem;
				padding-bottom: .3rem;
				border-bottom: 1px solid #e7e7e7;
				margin-right: .3rem;
				.litpic{
					width: 2rem;
					margin-right: .2rem;
					border-radius: .1rem;
				}
				.info{
					width: 3rem;
					strong{
						font-size: .32rem;
						font-weight: bold;
					}
					p{
						font-size: .26rem;
						color: gray;
						margin: .1rem 0 .2rem;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						line-height: .32rem;
					}
					div{
						display: flex;
						justify-content: space-between;
						em{
							font-size: .26rem;
						}
						img{
							width: .4rem;
							margin-right: .2rem;
							margin-top: -.1rem;
						}
					}
				}
			}
		}
	}
</style>