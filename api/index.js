import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
//网页的超时时间
axios.defaults.timeout = 5000;
// 不用重复去传token
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.request.use(config=>{
	if(config.method == 'get'){
		config.headers = {
			'Content-Type':'application/json;charset=utf8',
			// 'withCredentials':true
		}
		config.data = qs.stringify(config.data)
	}else if(config.method == 'post'){
		var token = window.localStorage.getItem('zimo');
		config.headers = {
			'Content-Type':'application/x-www-form-urlencoded;charset=utf8',
			// 'x-auth-token':`{$token}`,
			// 'Credentials':false
		}
		config.data = qs.stringify(config.data)
	}
	return config;
})

axios.interceptors.response.use(
	response =>{
		const data = response.data;
		if(data){
			return data;
		}else{
			const err = new Error('请求错误，请重试');
			err.data = data;
			err.response = response;
			throw err;
		}
		// console.log(response);
		return response;
	},
	error =>{
		console.log(error);
		return Promise.reject(error);
	}
)
//获取全部商品
export const allList = () =>{
	return axios.get('/alllist')
}

export default axios;