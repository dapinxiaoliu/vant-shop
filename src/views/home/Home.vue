<template>
	<div id="home">
		
		<div v-if="showhome">
			<Header />
			<Swiper :swiperimg='swiperimg'/>
			<Navlist :navimg="navimg"/>
			<FlashSale :flashdata='flashData' :cart='cart'/>
			<Like :likedata="flashData" :cart='cart'/>
		</div>
		<van-loading class="homeloading" v-else size="24px">小冠奋力加载中...</van-loading>
		
	</div>
</template>

<script>
	import request from '@/service/request.js'
	import Header from './components/header/Header.vue'
	import Swiper from './components/swiper/Swiper.vue'
	import Navlist from './components/nav/Navlist.vue'
	import FlashSale from './components/flashSale/FlashSale.vue'
	import Like from './components/like/Like.vue'
	export default {
		name:'Home',
		components:{
			Header,
			Swiper,
			Navlist,
			FlashSale,
			Like
		},
		data(){
			return{
				showhome: false,
				cart: require('@/images/tabbar/cart_selected.png'),
				swiperimg:[
					{id:0,name:require('@/images/1.jpg')},
					{id:1,name:require('@/images/2.jpg')},
					{id:2,name:require('@/images/3.jpg')}
				],
				navimg:[
					{id:0,title:'冠领新闻',name:require('@/images/nav1.png')},
					{id:1,title:'冠领机构',name:require('@/images/nav2.jpg')},
					{id:2,title:'法律讲堂',name:require('@/images/nav3.jpg')},
					{id:3,title:'冠领荣誉',name:require('@/images/nav4.png')},
					{id:4,title:'胜诉案例',name:require('@/images/nav5.png')},
					{id:5,title:'律师团队',name:require('@/images/nav6.png')},
					{id:6,title:'冠领公告',name:require('@/images/nav7.png')},
					{id:7,title:'新闻动态',name:require('@/images/nav8.png')},
					{id:8,title:'信息公开',name:require('@/images/nav3.jpg')},
					{id:9,title:'关于我们',name:require('@/images/nav6.png')},
				],
				flashData:[
					{id:0,title:'十大要闻法讲书籍',biaoshi:'500页',yj:'69',xj:'48.6',name:require('@/images/nav1.png')},
					{id:1,title:'十大要闻法讲书籍',biaoshi:'500页',yj:'69',xj:'48.6',name:require('@/images/nav3.jpg')},
					{id:2,title:'十大要闻法讲书籍',biaoshi:'500页',yj:'69',xj:'48.6',name:require('@/images/nav2.jpg')},
					{id:3,title:'十大要闻法讲书籍',biaoshi:'500页',yj:'69',xj:'48.6',name:require('@/images/nav3.jpg')},
					{id:4,title:'十大要闻法讲书籍',biaoshi:'500页',yj:'69',xj:'48.6',name:require('@/images/nav3.jpg')},
					{id:5,title:'十大要闻法讲书籍',biaoshi:'500页',yj:'69',xj:'48.6',name:require('@/images/nav3.jpg')},
				]
			}
		},
		async created() {
			// await request('/api/goods')
			// await request('/api/homeApi')
			// .then(res => {
			// 	console.log(res);
			// }).catch(err =>{
			// 	console.log(err);
			// })
			setTimeout(()=>{
				this.showhome = true
			},500)
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	#home{
		.homeloading{
			position: absolute;
			top: 40%;
			left: 50%;
			transform: translateX(-50%);
		}
	}
</style>