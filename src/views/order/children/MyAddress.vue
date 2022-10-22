<template>
	<div class="myaddress">
		<div class="addwrap">
			<van-nav-bar
			  title="我的地址"
			  :fixed='true'
			  :border='true'
			  left-arrow
			  @click-left="onClickLeft"
			/>
			
			
			<van-address-list
			  v-model="chosenAddressId"
			  :list="list"
			  :disabled-list="disabledList"
			  disabled-text="以下地址超出配送范围"
			  default-tag-text="默认"
			  @add="onAdd"
			  @edit="onEdit"
			  style="margin-top: 50px;"
			/>
			
			
			<transition name="my-address" mode="out-in">
				<router-view></router-view>
			</transition>
			
		</div>
		
	</div>
</template>

<script>

	export default {
		name:'',
		data(){
			return{
				chosenAddressId: 1,
				disabledList:[
				      {
				              id: '1',
				              name: '张三',
				              tel: '13000000000',
				              address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
				              isDefault: true,
				            },
				            {
				              id: '2',
				              name: '李四',
				              tel: '1310000000',
				              address: '浙江省杭州市拱墅区莫干山路 50 号',
				        },
				],
				list:[
					 {
					         id: '1',
					         name: '张三',
					         tel: '13000000000',
					         address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
					         isDefault: true,
					       },
					       {
					         id: '2',
					         name: '李四',
					         tel: '1310000000',
					         address: '浙江省杭州市拱墅区莫干山路 50 号',
					       },
				  ]
					
			}
		},
		methods: {
			onClickLeft(){
				this.$router.go(-1)
			},
			onAdd(){
				this.$router.push('/order/address/addhost')
			},
			onEdit(){
				this.$router.push('/order/address/edithost')
			}
			
		}
	}
</script>

<style lang="less" scoped>
	.myaddress{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f5f5f5;
		z-index: 200;
		.addwrap{
			.van-contact-list__bottom{
				bottom: 0 !important;
			}
		}
		
		
		
	}
</style>