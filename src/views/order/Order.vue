<template>
	<div class="order">
		<van-nav-bar
		  title="填写订单"
		  :fixed='true'
		  :border='true'
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		
		<van-contact-card 
			type="add" 
			@click="addressUse"
			add-text="选择收货地址"
			style="margin-top: 50px;"
		/>
		<transition name="my-address" mode="out-in">
			<router-view></router-view>
		</transition>
		
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return{}
		},
		methods: {
			onClickLeft(){
				this.$router.back(-1)
			},
			onClickRight(){
				
			},
			addressUse(){
				this.$router.push('/order/address')
			}
		}
	}
</script>

<style lang="less" scoped>
	.order{
		width: 7.5rem;
		height: 100%;
		background: #f5f5f5;
		.my-address-enter-active,
		.my-address-leave-active{
			transition: all .3s;
		}
		.my-address-enter,
		.my-address-leave-active{
			transform: translateY(10rem);
			opacity: 0;
		}
		
	}
</style>