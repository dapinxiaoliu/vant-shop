<template>
	<div id="cart">
		<div v-if="userInfo.token">
			<div class="header">
				<strong>购物车</strong>
				<button @click="clearCart" >清空购物车</button>
			</div>
			<ul class="cartul">
				<li class="cartitem" v-for="item in shopCart" :key="item.id">
					<div class="itemleft">
						<van-checkbox v-model="item.checkbox" @click.stop="changeSelectedStatus(item.id)"></van-checkbox>
					</div>
					<div class="itemcenter"><img :src="item.img" alt=""></div>
					<div class="itemright">
						<p>{{item.name}}</p>
						<div>
							<em>价格: {{item.price | moneyFormat}}</em>
							<span>
								<i @click="downGoodsNum(item.id,item.num)">-</i>
								<input type="number" v-model="item.num">
								<i @click="upGoodsNum(item.id,item.name,item.price,item.img)">+</i>
							</span>
						</div>
					</div>
				</li>


			</ul>
			
			<div class="totalbox">
				<div class="checkall" @click.stop="checkAll(isAllChecked)"><van-checkbox :value="isAllChecked"> </van-checkbox></div>
				<div class="price"> 合计：<span>{{totalPrice | moneyFormat}}</span> </div>
				<div class="goToPay"> <a href="javascript:void(0)" @click="goToPay">去结算({{totalNum}})</a>  </div>
			</div>
		</div>
		<SelectLogin v-else />
	</div>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	import {Dialog,Toast} from 'vant'
	import SelectLogin from '../login/SelectLogin.vue'
	
	export default {
		name:'Cart',
		components:{
			SelectLogin
		},
		data(){
			return{
				
			}
		},
		computed:{
			...mapState(['shopCart','userInfo']),
			isAllChecked(){
				let cartEmpty = Object.values(this.shopCart).length
				let ischeck = cartEmpty > 0 
				if(ischeck){
					Object.values(this.shopCart).forEach(goods => {
						if(goods.checkbox !== true){
							ischeck = false
						}
						
					})
				}
				return ischeck	
			},
			totalPrice(){
				let total = 0
				Object.values(this.shopCart).forEach(goods => {
					if(goods.checkbox == true){
						total += goods.price * goods.num
					}
				})
				return total
			},
			totalNum(){
				let num = 0
				Object.values(this.shopCart).forEach(goods => {
					if(goods.checkbox == true){
						num += 1
					}
				})
				return num
			}
		},
		methods: {
			...mapMutations(['DEL_SHOP','ADD_GOODS','SELECTED_GOODS_STATUS','CHECK_ALL','CLEAR_CART']),
			downGoodsNum(id, num){
				if(num > 1){
					this.DEL_SHOP(id)
				}else if(num == 1){
					Dialog.confirm({
					  title: '小冠温馨提示',
					  message:
					    '确定删除该商品吗？',
					})
					.then(() => {
						this.DEL_SHOP(id)
					})
					.catch(() => {
						//不错任何操作
					});
				}
			},
			upGoodsNum(id,name,price,img){
				this.ADD_GOODS({
					'id': id,
					'title': name,
					'xj': price,
					'name': img
				})
			},
			changeSelectedStatus(id){
				this.SELECTED_GOODS_STATUS(id)
			},
			checkAll(status){
				
				this.CHECK_ALL(status)
			},
			clearCart(){
				let goodsSize = Object.values(this.shopCart).length
				if(goodsSize == 0) return Toast('购物车空空如也');
				Dialog.confirm({
				  title: '小冠温馨提示',
				  message:
				    '确定删除所有商品吗？',
				})
				.then(() => {
					this.CLEAR_CART()
				})
				.catch(() => {
					//不错任何操作
				});
				
			},
			goToPay(){
				let shopCart = Object.values(this.shopCart)
				if(shopCart.length == 0) return Toast('购物车空空如也');
				let goodsStatus = false
				shopCart.forEach(goods => {
					if(goods.checkbox == true) goodsStatus = true
				})
				if(goodsStatus){
					this.$router.push('/order')
				}else{
					Toast('您还没有选择商品哦');
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
	#cart{
		padding-bottom: 2.5rem;
		.header{
			height: 1rem;
			background: #fff;
			display: flex;
			align-items: center;
			strong{
				margin-left: 50%;
				transform: translateX(-50%);
				font-weight: bold;
				font-size: .32rem;
			}
			button{
				background: transparent;
				border: none;
				transform: translateX(50px);
				font-size: .28rem;
				color: red;
			}
		}
		.cartul{
			padding: .1rem .2rem .1rem;
			margin-top: .5rem;
			background: #fff;
			.cartitem:last-child{
				border: none;
			}
			.cartitem{
				display: flex;
				align-items: center;
				padding-bottom: .55rem;
				margin-top: .3rem;
				border-bottom: 1px solid #f0f0f0;
				.itemleft{
					
				}
				.itemcenter{
					width: 2.5rem;
					height: 1.6rem;
					background: skyblue;
					margin: 0 .2rem;
				}
				.itemright{
					width: 4rem;
					p{
						line-height: .38rem;
						font-size: .3rem;
						margin-bottom: .2rem;
					}
					div{
						display: flex;
						justify-content: space-between;
						em{
							font-size: .26rem;
							display: flex;
							align-items: center;
						}
						span{
							display: flex;
							align-items: center;
							input{
								font-size: .28rem;
								width: .6rem;
								height: .4rem;
								margin: 0 .1rem;
								text-align: center;
								line-height: .4rem;
								border: none;
								background: #ececec;
							}
							i{
								font-size: .4rem;
								margin-top: -.1rem;
							}
							
						}
					}
				}
			}
		}
		.totalbox{
			position: fixed;
			bottom: 50px;
			left: 50%;
			transform: translateX(-50%);
			width: 7.5rem;
			background: #fff;
			display: flex;
			align-items: center;
			height: 1rem;
			
			border-top: 1px solid #ececec;
			
			.checkall{
				display: flex;
				align-items: center;
				margin-right: .5rem;
				margin-left: .2rem;
				em{
					display: inline-block;
					width: .3rem;
					height: .3rem;
					border: 1px solid #ccc;
					margin-right: .1rem;
				}
			}
			.price{
				span{
					color: red;
					font-weight: bold;
				}
			}
			.goToPay{
				background:red;
				color: #fff;
				width: 1.8rem;
				height: .8rem;
				text-align: center;
				line-height: .8rem;
				border-radius: .4rem;
				position: absolute;
				right: .5rem;
				a{
					color: #fff;
				}
			}
		}
	}
</style>