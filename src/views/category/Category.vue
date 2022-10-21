<template>
	<div id="category">
		<Header />
		<!-- <ContentView /> -->
		<div class="listWrapper">
			<!--左边-->
			<div class="leftWrapper" ref="leftNavBox">
				<ul class="wrapper">
					<li class="categoryItem" ref="itemli" v-for="item,index in categoryData" :key="item.id" :class="{selected : currentIndex === index}" @click="setCurrentIndex(index)">
						<span class="textWrapper">{{item.name}}</span>
					</li>
				</ul>
			</div>
			<!--右边-->
			<ContentView :rightData='rightData' :cart='cart'/>
		</div>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import ContentView from './components/ContentView.vue'
	import BetterScroll from 'better-scroll'
	export default {
		name:'Category',
		components:{
			Header,
			ContentView
		},
		data(){
			return{
				currentIndex:0,
				leftScroll:null,
				cart:require('@/images/tabbar/cart_selected.png'),
				categoryData:[
					{id:'recommend',name:'推荐'},
					{id:'0',name:'安心律师'},
					{id:'1',name:'定制律师'},
					{id:'2',name:'律师履历'},
					{id:'3',name:'案件分析'},
					{id:'4',name:'地域优势'},
					{id:'5',name:'胜诉案例'},
					{id:'6',name:'品牌历程'},
					{id:'7',name:'冠领心选'},
					{id:'8',name:'一路同行'},
					{id:'9',name:'优势'},
					{id:'10',name:'央视合作'},
					{id:'11',name:'公益项目'},
					{id:'12',name:'律所活动'},
					{id:'13',name:'最新动态'},
					{id:'14',name:'合作伙伴'},
					{id:'15',name:'风采天地'},
					{id:'16',name:'冠领人'},
					{id:'17',name:'关于我们'}
				],
				rightData:[
						
						{
							prodata:[
								{id:0,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:1,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍这里是介绍这里是介绍这里是介绍'},
								{id:2,name:'法律讲堂',yj:'28',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:3,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍'},
								{id:4,name:'法律讲堂',yj:'35',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:5,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:6,name:'法律讲堂',yj:'99',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:7,name:'十大要闻',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍'}
							]
						},
						{
							prodata:[
								{id:0,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:1,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:2,name:'法律讲堂',yj:'28',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:3,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:4,name:'法律讲堂',yj:'35',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:5,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:6,name:'法律讲堂',yj:'99',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'},
								{id:7,name:'法律讲堂',yj:'25',xj:'18',img:require('@/images/nav8.png'),intro:'这里是介绍'}
							]
						}
					
				]
			}
		},
		created() {
			//初始化滚动框架
			// this.getCategory()
			
			
		},
		mounted() {
			this.getCategory()
			console.log( window.screen.availHeight);
			this.$refs.leftNavBox.style.height = window.screen.height-100 + 'px'
			
		},
		methods: {
			getCategory(){
				this.$nextTick(()=>{
					this.leftScroll = new BetterScroll('.leftWrapper',{
						probeType: 3
					})
					
				})
				
			},
			setCurrentIndex(id){
				this.currentIndex = id
				let itemLis = this.$refs.itemli;
				let el = itemLis[id]
				this.leftScroll.scrollToElement(el,300)
			}
		}
	}
</script>

<style lang="less" scoped>
	#category{
		// padding-top: 1rem;
		.listWrapper {
			display: flex;
			width: 100%;
			height: 100%;
			overflow: hidden;
			padding-top: 1rem;
			.leftWrapper {
				height: 5rem;
			    background-color: #F4F4F4;
				.categoryItem {
					height: .8rem;
					line-height: .8rem;
				    border-bottom: solid 1px #E8E9E8;
				    position: relative;
					display: flex;
					align-items: center;
					padding: 0 .3rem;
					.textWrapper {
					    font-size: .3rem;
					    color: #666666;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				.categoryItem.selected {
				    background: #FFF;
					border-left: 2px solid red;
				}
						
				.categoryItem.selected .textWrapper {
				    border-left-color: red;
				    font-weight: bold;
				    font-size: 0.3rem;
				    color: #333333;
				}
			}
		}
	}
</style>