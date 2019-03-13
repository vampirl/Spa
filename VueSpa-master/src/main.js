// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
require('./mock/mock.js')

router.beforeEach(function(to, from ,next) {
    if(localStorage.getItem('data')) {
        store.commit('SET_TOKEN');
        if(to.path == '/') {
            next('/home')
        } else {
            next()
        }
    } else if(to.path =='/') {
        next()
    } else {
        next('/')
    }
})
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})