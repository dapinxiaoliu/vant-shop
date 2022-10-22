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
		  style="margin-top: 50px;"
		/>
	</div>
</template>

<script>
	import Area from '@/config/area'
	export default {
		name:'addhost',
		data(){
			return{
				searchResult:[],
				areaList: Area
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
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f5f5f5;
		z-index: 999;
	}
</style>