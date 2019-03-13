import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/index'
import login from '@/page/login'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'LogIn',
        component: login
    }, {
        path: '/home',
        name: 'Index',
        component: Index
    }]
})