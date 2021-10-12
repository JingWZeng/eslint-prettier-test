import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)

// 全局路由的拦截
router.beforeEach((to, from, next) => {
	console.log(`from:${from}`)
	console.log(`to:${to}`)
	//if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
	//需要给meta添加requireAuth属性
	if (to.meta.auth) {
		const token = localStorage.getItem('token')
		if (!token) {
			// 当前的token不存在的话
			next({
				name: 'login',
				query: { redirect: to.fullPath }, // 意思就是如果token不存在的话，就跳回login页
			})
		} else {
			next()
		}
	} else {
		next()
	}
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
