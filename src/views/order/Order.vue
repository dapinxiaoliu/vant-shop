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
		
		<van-cell-group>
		  <van-cell title="送达时间" :value="currentMsg" @click="showSendTime" is-link/>
		  <van-cell value="共5件商品" is-link :center='true'>
		    <!-- 使用 title 插槽来自定义标题 -->
		    <template #title>
		      <img src="@/images/nav6.png" alt="" style="width: 2rem;">
		    </template>
		  </van-cell>
		</van-cell-group>
		
		<van-cell-group>
		  <van-cell title="支付方式" value="微信"/>
		</van-cell-group>
		
		<van-cell-group>
		  <van-cell title="备注">
			  <input type="text" placeholder="选填,备注您的需求" style="border: none;">
		  </van-cell>
		</van-cell-group>
		
		<van-cell-group>
		  <van-cell title="商品金额" value="¥58"/>
		  <van-cell title="配送费" value="¥0.00"/>
		</van-cell-group>
		
		<van-cell-group>
		  <van-cell title="共计优惠" value="¥56" is-link/>
		</van-cell-group>
		
		<van-submit-bar label="合计" :price="3050" button-text="提交订单" @submit="onSubmit" />
		
		
		<van-popup
		  v-model:show="show"
		  round
		  position="bottom"
		  :style="{ height: '30%' }"
		>
			<van-datetime-picker
				v-model="currentDate"
				type="date"
				:min-date="minDate"
				title="选择年月日"
				@cancel="cancelTime"
				@confirm="successTime"
			/>
		</van-popup>
		
		
		<transition name="my-address" mode="out-in">
			<router-view></router-view>
		</transition>
		
		
		
	</div>
</template>

<script>
	import Moment from 'moment'
	export default {
		name:'',
		data(){
			return{
				show: false,
				minDate: new Date(),
				currentDate: new Date(),
				currentMsg: '请选择送达时间',
			}
		},
		computed:{
			
		},
		methods: {
			onClickLeft(){
				this.$router.back(-1)
			},
			onClickRight(){
				
			},
			addressUse(){
				this.$router.push('/order/address')
			},
			onSubmit(){
				
			},
			showSendTime(){
				this.show = true
			},
			cancelTime(){
				this.show = false
			},
			successTime(value){
				this.show = false
				this.currentMsg = Moment(value).format('YYYY-MM-DD')
			}
		}
	}
</script>

<style lang="less" scoped>
	.order{
		width: 7.5rem;
		height: 100%;
		background: #f5f5f5;
		.van-cell-group{
			margin-top: .1rem;
		}
		.van-submit-bar__text{
			span{
				vertical-align: top;
			}
			
		}
		
	}
</style>