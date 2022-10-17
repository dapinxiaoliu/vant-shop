import Vue from 'vue'
import VueRouter from 'vue-router'

//引入一级组件
import DashBoard from '../views/dashboard/DashBoard'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Mine = () => import('../views/mine/Mine')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
	redirect:'/dashboard'
  },
  {
	  path:'/dashboard',
	  name:'dashboard',
	  component: DashBoard,
	  children:[
		  {path:'/dashboard', redirect:'/dashboard/home'},
		  {path:'home', name:'home',component:Home},
		  {path:'category', name:'category',component:Category},
		  {path:'cart', name:'cart',component:Cart},
		  {path:'mine', name:'mine',component:Mine},
	  ]
  }
 
]

const router = new VueRouter({
  routes
})

export default router
