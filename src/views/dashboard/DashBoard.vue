<template>
	<div id="dashboard">
		<van-tabbar v-model="active" active-color="#75a342">
		  <van-tabbar-item>
		    <span>首页</span>
		    <template #icon="props">
		      <img :src="props.active ? icon.active : icon.inactive" />
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item>
		    <span>分类</span>
		    <template #icon="props">
		      <img :src="props.active ? icon.active : icon.inactive" />
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item>
		    <span>购物车</span>
		    <template #icon="props">
		      <img :src="props.active ? icon.active : icon.inactive" />
		    </template>
		  </van-tabbar-item>
		  <van-tabbar-item>
		    <span>我的</span>
		    <template #icon="props">
		      <img :src="props.active ? icon.active : icon.inactive" />
		    </template>
		  </van-tabbar-item>
		</van-tabbar>
		
		<router-view></router-view>
	</div>
</template>

<script>
	import { ref } from 'vue';
	export default {
		name:'Dashboard',
		setup() {
		  const active = ref(0);
		  console.log(ref);
		  const icon = {
		    active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
		    inactive:
		      'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
		  };
		  return {
		    icon,
		    active,
		  };
		}
	}
</script>

<style scoped>
	#dashboard{
		
	}

</style>