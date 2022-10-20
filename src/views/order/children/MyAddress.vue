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
			
			
			<van-contact-list
			  v-model="chosenContactId"
			  :list="list"
			  default-tag-text="默认"
			  @add="onAdd"
			  @edit="onEdit"
			  @select="onSelect"
			style="margin-top: 50px;"
			/>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'',
		data(){
			return{
				chosenContactId:'',
				  list:[
					  {
					      id: '1',
					      name: '张三',
					      tel: '13000000000',
					      isDefault: true,
					    },
					    {
					      id: '2',
					      name: '李四',
					      tel: '1310000000',
					    }
				  ]
					
			}
		},
		methods: {
			onClickLeft(){
				this.$router.go(-1)
			},
			onAdd(){},
			onEdit(){},
			onSelect(){}
			
		}
	}
</script>

<style lang="less" scoped>
	.myaddress{
		width: 100%;
		height: 100%;
		.addwrap{
			position: absolute;
			width: 100%;
			z-index: 999;
			top: 0;
		}
		
		
	}
</style>