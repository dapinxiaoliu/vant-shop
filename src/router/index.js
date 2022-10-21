import Vue from 'vue'
import VueRouter from 'vue-router'
// const routerPush = VueRouter.prototype.push;

// VueRouter.prototype.push = function (location) {

//     return routerPush.call(this, location).catch(err => {})

// };

//引入一级组件
import DashBoard from '../views/dashboard/DashBoard'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Mine = () => import('../views/mine/Mine')

//订单
const Order = () => import('../views/order/Order')
const MyAddress = () => import('../views/order/children/MyAddress')
const AddHost = () => import('../views/order/children/AddAddress')
const EditAddress = () => import('../views/order/children/EditAddress')
const Login = () => import('../views/login/Login')

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
		  {path:'home', name:'home',component:Home, meta:{keepalive: true}},
		  {path:'category', name:'category',component:Category, meta:{keepalive: true}},
		  {path:'cart', name:'cart',component:Cart},
		  {path:'mine', name:'mine',component:Mine},
	  ]
  },
  {
	  path:'/order',
	  name:'order',
	  component: Order,
	  children:[
			{
			  path:'address', 
			  name:'address', 
			  component: MyAddress,
			  children:[
				  {path:'addhost',name:'addhost',component:AddHost},
				  {path:'edithost',name:'edithost',component:EditAddress}
			  ]
			}
	  ]
  },
  {
	  path:'/login',
	  name:'login',
	  component: Login
  }
 
]

const router = new VueRouter({
  routes
})

export default router
