import {ADD_GOODS,INIT_SHOP_CART,DEL_SHOP,SELECTED_GOODS_STATUS,CHECK_ALL,CLEAR_CART,USER_INFO,INIT_USER_INFO,RESET_USER_INFO} from './mutation-types.js'

import {setStrore, getStrore, removeStrore} from '@/config/global'
import Vue from 'vue'
export default{
	[ADD_GOODS](state, obj){
		let shopCart = state.shopCart;
		if(shopCart[obj.id] !== undefined){
			shopCart[obj.id]['num']++
		}else{
			shopCart[obj.id] = {
				'num': 1,
				'id': obj.id,
				'name': obj.title,
				'price': obj.xj,
				'img': obj.name,
				'checkbox': false
			}
		}
		
		state.shopCart = {...shopCart}
		
		setStrore('shopCart', state.shopCart)
	},
	[INIT_SHOP_CART](state){
		let initCart = getStrore('shopCart')
		if(initCart){
			state.shopCart = JSON.parse(initCart)
		}
	},
	[DEL_SHOP](state,id){
		let shopCart = state.shopCart
		let goods = shopCart[id]
		if(goods){
			if(goods['num'] > 0){
				goods['num']--
				if(goods['num'] === 0){
					delete shopCart[id]
				}
			}
		}else{
			goods = null
		}
		
		state.shopCart = {...shopCart}
		setStrore('shopCart', state.shopCart)
	},
	[SELECTED_GOODS_STATUS](state, id){
		let shopCart = state.shopCart
		let goods = shopCart[id]
		if(goods.checkbox){
			goods.checkbox = true
		}else{
			goods.checkbox = false
		}
		state.shopCart = {...shopCart}
		setStrore('shopCart', state.shopCart)
	},
	[CHECK_ALL](state,status){
		let shopCart = state.shopCart
		Object.values(shopCart).forEach( goods => {
			goods.checkbox = !status
		})
		state.shopCart = {...shopCart}
		setStrore('shopCart', state.shopCart)
	},
	[CLEAR_CART](state){
		state.shopCart = null
		state.shopCart = {...state.shopCart}
		setStrore('shopCart', state.shopCart)
	},
	[USER_INFO](state, userinfo){
		state.userInfo = userinfo
		setStrore('userinfo',state.userInfo)
	},
	[INIT_USER_INFO](state){
		let userinfo = getStrore('userinfo')
		if(userinfo){
			state.userInfo = JSON.parse(userinfo)
		}
		
	},
	[RESET_USER_INFO](state){
		state.userInfo = {}
		removeStrore('userinfo')
	}
}