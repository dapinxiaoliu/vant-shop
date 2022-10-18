<template>
	<div id="dashboard">
		<van-tabbar v-model="active" active-color="#75a342">
		  <van-tabbar-item>
		    <span>首页</span>
		    <template #icon="props">
		      <img :src="props.active ? Home_icon.active : Home_icon.inactive" />
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item>
		    <span>分类</span>
		    <template #icon="props">
		      <img :src="props.active ? Category_icon.active : Category_icon.inactive" />
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item>
		    <span>购物车</span>
		    <template #icon="props">
		      <img :src="props.active ? Cart_icon.active : Cart_icon.inactive" />
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item>
		    <span>我的</span>
		    <template #icon="props">
		      <img :src="props.active ? Mine_icon.active : Mine_icon.inactive" />
		    </template>
		  </van-tabbar-item>
		</van-tabbar>
		<BackTop v-if="backTopStatus" :backTop="backTop"/>
		<router-view></router-view>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import BackTop from '../../components/backtop/BackTop.vue'
	import $ from 'jquery'
	export default {
		name:'Dashboard',
		components:{
			BackTop
		},
		data() {
			return {
				backTopStatus: false
			}
			
		},
		methods:{
			backTop(){
				$('html,body').animate({
					scrollTop: 0
				})
			}
		},
		created() {
			let that = this
			$(window).scroll(function(){
				// 滚动条距离顶部的距离 大于 200px时
				if($(window).scrollTop() >= 400){
					that.backTopStatus = true
				} else{
					that.backTopStatus = false
				}
			});
		},
		setup() {
			
			
			
		  const active = ref(0);
		  const Home_icon = {
		    active: require('@/images/tabbar/home_selected.png'),
		    inactive: require('@/images/tabbar/home_default.png'),
		  };
		  const Category_icon = {
		    active: require('@/images/tabbar/category_selected.png'),
		    inactive: require('@/images/tabbar/category_default.png'),
		  };
		  const Cart_icon = {
		    active: require('@/images/tabbar/cart_selected.png'),
		    inactive: require('@/images/tabbar/cart_default.png'),
		  };
		  const Mine_icon = {
		    active: require('@/images/tabbar/mine_selected.png'),
		    inactive: require('@/images/tabbar/mine_default.png'),
		  };
		  return {
			Home_icon,
			Category_icon,
			Cart_icon,
			Mine_icon,
		    active,
		  };
		}
	}
</script>

<style lang="less" scoped>
	#dashboard{
		.van-tabbar--fixed{
			z-index: 999;
		}
	}

</style>