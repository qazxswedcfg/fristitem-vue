import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Main from '../pages/Main.vue';
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
import Order from '../pages/Order.vue'
import Mine from '../pages/Mine.vue'
import Detail from '../pages/Detail.vue'
import List from '../pages/List.vue'
import Bannerlist from '../pages/Bannerlist.vue'
import Detail1 from '../pages/Detail1.vue'
import Eatbar from '../pages/Eatbar.vue'
import Login from '../pages/Login.vue'
const routes = [{
        path: '/main',
        name: 'main',
        component: Main,
        children: [{
            path: 'home',
            name: 'home',
            component: Home
        }, {
            path: 'recover',
            name: 'recover',
            component: Recover
        }, {
            path: 'eatbar',
            name: 'eatbar',
            component: Eatbar
        }, {
            path: 'order',
            name: 'order',
            component: Order
        }, {
            path: 'mine',
            name: 'mine',
            component: Mine
        }]
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    },
    {
        path: '/detail1/:id',
        name: 'detail1',
        component: Detail1
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/list',
        name: 'list',
        component: List
    },
    {
        path: '/bannerlist',
        name: 'bannerlist',
        component: Bannerlist
    },
    {
        path: '/',
        redirect: '/main/home'
    }
]

const router = new VueRouter({
    routes
})
export default router