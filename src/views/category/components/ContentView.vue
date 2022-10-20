<template>
	<div class="contentView">
		<div class="wrapper emptyWrapper">
		    <div>
				<ContentItem v-for="item,index in rightData" :key="item.id" :item="item" :cart="cart" />
		        <!--子列表-->
		    </div>
		</div>
	</div>
</template>

<script>
	import ContentItem from './ContentItem.vue'
	export default {
		name:'',
		props:{
			rightData: Array,
			cart:String
		},
		components:{
			ContentItem
		},
		data(){
			return{
				
			}
		},
		methods: {
		}
	}
</script>

<style lang="less" scoped>
		.contentView{
			.wrapper {
			    position: absolute;
			    left: 1.8rem;
			    right: 0;
			    bottom: 0;
			    top: 0;
			    background: #FFF;
				overflow-y: auto;
				-webkit-overflow-scrolling: touch;
				overflow-scrolling: touch;
			
			}
		}
        


</style>