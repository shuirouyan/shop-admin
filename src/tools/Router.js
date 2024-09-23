import { createRouter, createWebHashHistory } from "vue-router";
import HomeCom from "@/components/home/HomeCom.vue";
import LoginCom from "@/components/login/LoginCom.vue";
import OrderCom from "@/components/order/OrderCom.vue";
import Store from "./Storage";

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginCom
        },
        {
            path: '/home',
            name: 'home',
            component: HomeCom,
            children: [
                {
                    path: 'order/:type',
                    component: OrderCom,
                    name: 'Order'
                },
                {
                    path: 'goods/:type',
                    component: OrderCom,
                    name: 'Goods'
                },
                {
                    path: 'category',
                    component: OrderCom,
                    name: 'GoodsCategory'
                },
                {
                    path: 'ownerlist',
                    component: OrderCom,
                    name: 'ownerlist'
                },
                {
                    path: 'ownerreq',
                    component: OrderCom,
                    name: 'ownerreq'
                },
                {
                    path: 'ownerorder',
                    component: OrderCom,
                    name: 'ownerorder'
                },
                {
                    path: 'tradeinfo',
                    component: OrderCom,
                    name: 'tradeinfo'
                },
                {
                    path: 'tradelist',
                    component: OrderCom,
                    name: 'tradelist'
                },
                {
                    path: 'data',
                    component: OrderCom,
                    name: 'data'
                }
            ],
            redirect: '/home/order/0'
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: LoginCom
        }
    ]
})

Router.beforeEach((from) => {
    let isLogin = Store.getters.isLogin
    console.log('from.name:', from.name, ' isLogin:', isLogin)
    if (isLogin || from.name == 'login') {
        console.log('true:', from.name)
        return true
    } else {
        return { name: 'login' }
    }
})

export default Router;