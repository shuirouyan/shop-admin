import { createRouter, createWebHashHistory } from "vue-router";
import Store from "./Storage";
import HomeCom from "@/components/home/HomeCom.vue";
import LoginCom from "@/components/login/LoginCom.vue";
import OrderCom from "@/components/order/OrderCom.vue";
import AddGood from "@/components/goods/AddGood.vue";
import Goods from "@/components/goods/Goods.vue";
import GoodsCategory from "@/components/goods/GoodsCategory.vue";
import ManagerList from "@/components/manager/ManagerList.vue";
import DataCom from "@/components/financial/DataCom.vue";

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
                    component: Goods,
                    name: 'Goods'
                },
                {
                    path: 'addGood/:type',
                    component: AddGood,
                    name: 'AddGood'
                },
                {
                    path: 'category',
                    component: OrderCom,
                    name: 'GoodsCategory'
                },
                {
                    path: 'category/add',
                    component: GoodsCategory,
                    name: 'AddGoodsCategory'
                },
                {
                    path: 'ownerlist',
                    component: ManagerList,
                    name: 'OwnerList'
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
                    component: DataCom,
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