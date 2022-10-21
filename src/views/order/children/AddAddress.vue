<template>
	<div class="addhost">
		<van-nav-bar
		  title="添加地址"
		  :fixed='true'
		  :border='true'
		  left-arrow
		  @click-left="onClickLeft"
		/>
		
		<van-address-edit
		  :area-list="areaList"
		  show-postal
		  show-delete
		  show-set-default
		  show-search-result
		  :search-result="searchResult"
		  :area-columns-placeholder="['请选择', '请选择', '请选择']"
		  @save="onSave"
		  @delete="onDelete"
		  @change-detail="onChangeDetail"
		/>
	</div>
</template>

<script>
	export default {
		name:'addhost',
		data(){
			return{
				searchResult:[],
				areaList:{}
			}
		},
		methods: {
			onClickLeft(){
				this.$router.go(-1)
			},
			onSave(){
				
			},
			onDelete(){},
			onChangeDetail(){
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.addhost{
		position: fixed;
		width: 100%;
		height: 100% !important;
		top:0;
		left: 0;
		right: 0;
		height: 0;
		background: #f5f5f5;
		z-index: 999;
	}
</style>