<template>
	<div class="editadd">
		<van-nav-bar
		  title="修改地址"
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
		<transition name="my-address" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>

</template>

<script>
	export default {
		name:'',
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
	.editadd{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 999;
		background: #f5f5f5;
	}
</style>