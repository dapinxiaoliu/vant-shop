<template>
	<div class="nav">
		<div class="wrapper">
		    <div class="itemWrapper" v-for="item in navimg" :key="item.id">
		        <div class="imageWrapper">
		            <img class="image" :src="item.name" alt="广告图片">
		        </div>
		        <div class="titleWrapper">
		            <span class="title">{{item.title}}</span>
		        </div>
		    </div>
	
		</div>
	</div>
</template>

<script>
	
	export default {
		name:'navlist',
		props:['navimg'],
		data(){
			return{}
		},
		methods: {
		}
	}
</script>

<style lang="less" scoped>
	.wrapper {
		background: #FFF;
		display: flex;
		flex-wrap: wrap;
		padding-top: .5rem;
		padding-bottom: .2rem;
		.itemWrapper {
			width: 20%;
			margin-bottom: .3rem;
			.imageWrapper {
				overflow: hidden;
				text-align: center; 
				.image {
					width: .8rem;
					height: .8rem;
					display: inline-block; 
					border-radius: 50%;
				}
			}
			.titleWrapper {
				text-align: center;
				.title {
					display: block;
					line-height: .32rem;
					margin-top: .1rem;
					font-size: 0.26rem;
					color: #555555;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}









</style>