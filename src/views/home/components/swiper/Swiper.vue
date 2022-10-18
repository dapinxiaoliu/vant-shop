<template>
	<div id="swiper">
		<div class="swiper mySwiper">
		  <div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in swiperimg" :key="item.id"><img :src="item.name" alt=""></div>
		  </div>
		  <div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import '@/style/swiper.less'
	import Swiper from 'swiper'
	import "swiper/css/swiper.min.css"
	export default {
		name:'',
		props:['swiperimg'],    
		data(){
			return{
				
			}
		},
		components:{
		},
		create(){
			
		},
		mounted(){
			this.$nextTick(()=>{
				var swiper = new Swiper(".mySwiper", {
					slidesPerView: 1,
					spaceBetween: 30,
					loop: true,
					pagination: {
					  el: ".swiper-pagination",
					  clickable: true,
					  bulletActiveClass: 'my-bullet-active'
					}
				});
			})

		}

	}
</script>

<style lang="less" scoped>
#swiper{
	padding-top: 1rem;
}
</style>