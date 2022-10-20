<template>
	<div id="flashsale">
		<div class="flashwrap">
			<div class="flashheader">
				<h2>
					<div><strong>热点新闻</strong><span>18:30场</span><em>已结束</em></div>
</em>
					<a href="">更多</a>
				</h2>
			</div>
			<div class="flashcontent">
				<div class="swiper flashrun">
				  <div class="swiper-wrapper">
					  <div class="swiper-slide" v-for="item in flashdata" :key='item.id'>
					  	<div class="item">
					  		<img :src="item.name" alt="">
					  		<p>{{item.title}} {{item.biaoshi}}</p>
					  		<span>{{item.yj | moneyFormat}}</span>
					  		<div><em>{{item.xj | moneyFormat}}</em> <img :src="cart"> </div>
					  	</div>
					  </div>
					<!-- <FlashSaleItem v-for="item in flashdata" :cart='cart'  :item='item' :key='item.id'/> -->
				  </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import "swiper/css/swiper.min.css"
	// import FlashSaleItem from '../flashSale/FlashSaleItem.vue'
	export default {
		name:'',
		props:['flashdata','cart'],
		components:{
			// FlashSaleItem
		},
		data(){
			return{}
		},
		methods: {
		},
		mounted() {
			this.$nextTick(()=>{
				var swiper = new Swiper(".flashrun", {
					slidesPerView: 3,
					spaceBetween: 0,
					loop: true
				});
			})

				
			
		}
	}
</script>

<style lang="less" scoped>
	#flashsale{
		.flashwrap{
			background: #fff;
			margin: .2rem 0;
			.flashheader{
				
				h2{
					padding: 0 .2rem;
					display: flex;
					justify-content: space-between;
					height: .8rem;
					align-items: flex-end;
					position: relative;
					div{
						position: relative;
						strong{
							font-size: .35rem;
							font-weight: bold;
							padding-left: .2rem;
						}
						span{
							font-size: .26rem;
							margin-right: .2rem;
							margin-left: .2rem;
							color: red;
						}
						em{
							font-size: .26rem;
							border: 1px solid gray;
							padding: .03rem .08rem;
							border-radius: .06rem;
							color: gray;
						}
					}
					div::after{
						content: "";
						height: .3rem;
						width: .05rem;
						position: absolute;
						background: red;
						left: 0;
						top: 0;
					}
					
					a{
						font-size: .26rem;
						
					}
				}
			}
			.flashcontent{
				overflow: hidden;
				position: relative;
				margin-top: .5rem;
				.swiper-slide{
					.item{
						margin: 0 .2rem;
						img{
							margin-bottom: .2rem;
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
								width: .3rem;
								margin-top: -.05rem;
							}
							
						}
					}
					
					
				}
			}
		}
	}
</style>