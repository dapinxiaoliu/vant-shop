import axios from "axios";
import qs from 'qs'

export default function request(url,params='a',type='get'){
	//axios封装
	const instance = axios.create({
		baseURL: 'http://demo.itlike.com/web/xlmc/api',
		timeout: 5000
	})
	
	
	//请求拦截器
	instance.interceptors.request.use(config =>{
		return config
	})
	//响应拦截器
	instance.interceptors.response.use(config =>{
		return config
	})
	
	let promise = null
	return new Promise((resolve, reject)=>{
		
		if(type === 'get'){
			promise = instance.get(url)
		}else if(type === 'post'){
			promise = instance.post(url,params)
		}
		promise.then(response =>{
			resolve(response.data)
		}).catch(err => {
			reject(err.data)
		})
		
	})
	
}
