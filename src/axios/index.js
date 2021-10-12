import axios from 'axios'

const instance = axios.create({
	baseURL: '/',
	timeout: 3000,
})

// 请求拦截器
instance.interceptors.request.use(
	function(config) {
		//判断如果不是login页，获取token,并通过请求头携带到后端
		if (!config.url !== 'login') {
			const token = localStorage.getItem('token')
			config.headers['Authorization'] = token
		}
		return config
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	},
)

// 添加响应拦截器
axios.interceptors.response.use(
	function(response) {
		// 对响应数据做点什么
		return response
	},
	function(error) {
		// 对响应错误做点什么
		return Promise.reject(error)
	},
)

export default instance
