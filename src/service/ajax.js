import axios from 'axios'

export default function ajax( url='', parmas = {}, type = 'GET'){
	
	let promise;
	
	return new Promise((resolve, reject) => {
		if(type.toUpperCase() === 'GET'){
			let str = ''

			Object.keys(parmas).forEach( (key) => {
				str += key + '=' +parmas[key] + '&'
			})
			if(str){
				str = str.substr(0, str.lastIndexOf('&'))
			}
			url += '?'+str
			
			
			promise = axios.get(url)
		}else if(type.toUpperCase() === 'POST'){
			promise = axios.post(url, parmas)
		}
		
		promise.then((response)=>{
			resolve(response.data)
		}).catch(error=>{
			reject(error)
		})
	})
	
}