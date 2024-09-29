<template>
    <el-container>
        <el-aside height="500px" width="250px">
            <el-container id="top">
                <img style="width: 25px; height: 25px; margin: auto 40; margin-right: 0;" src="~@/assets/logo.png"
                    alt="">
                <div>电商管理后台</div>
            </el-container>
            <el-menu mode="vertical" :router="true" :unique-opened="true" :default-active="$route.path"
                style="height: 100%;" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
                @select="selectItem">
                <el-sub-menu index="1">
                    <template #title>
                        <!-- <i class="el-icon-s-order"></i> -->
                        <el-icon>
                            <ShoppingCart />
                        </el-icon>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="/home/order/0">普通订单</el-menu-item>
                    <el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <!-- <i class="el-icon-s-shop"></i> -->
                        <el-icon>
                            <Shop />
                        </el-icon>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="/home/goods/0">普通商品</el-menu-item>
                    <el-menu-item index="/home/goods/1">秒杀商品</el-menu-item>
                    <el-menu-item index="/home/goods/2">今日推荐</el-menu-item>
                    <el-menu-item index="/home/category">商品分类</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="3">
                    <template #title>
                        <!-- <i class="el-icon-s-custom"></i> -->
                        <el-icon>
                            <User />
                        </el-icon>
                        <span>店长管理</span>
                    </template>
                    <el-menu-item index="/home/ownerlist">店长列表</el-menu-item>
                    <el-menu-item index="/home/ownerreq">店长审批列表</el-menu-item>
                    <el-menu-item index="/home/ownerorder">店长订单</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="4">
                    <template #title>
                        <!-- <i class="el-icon-s-ticket"></i> -->
                        <el-icon>
                            <Tickets />
                        </el-icon>
                        <span>财务管理</span>
                    </template>
                    <el-menu-item index="/home/tradeinfo">交易明细</el-menu-item>
                    <el-menu-item index="/home/tradelist">财务对账</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="5">
                    <template #title>
                        <!-- <i class="el-icon-s-tools"></i> -->
                        <el-icon>
                            <Tools />
                        </el-icon>
                        <span>基础管理</span>
                    </template>
                    <el-menu-item index="/home/data">数据统计</el-menu-item>
                </el-sub-menu>


            </el-menu>
        </el-aside>
        <el-main style="padding: 0;">
            <el-header class="header">
                <el-container>
                    <div style="margin: auto; margin-left: 100px;">
                        <h1>欢迎登录后台管理系统</h1>
                    </div>
                    <div style="margin: auto; margin-right: 50px;">
                        <el-button type="primary" @click="logout">注销</el-button>
                    </div>
                </el-container>
            </el-header>
            <!-- 具体功能 -->
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import Store from '@/tools/Storage';
import Mock from '@/mock/Mock';
export default {
    name: 'HomeCom',
    data() {
        return {

        }
    },
    methods: {
        selectItem() {
            console.log(new Date())
            // this.$route.push()
            // return ''
        },
        logout() {
            console.log('注销')
            Store.commit('cleanUserInfo')
            this.$router.push({ name: 'login' })
        }
    },
    computed: {

    },
    mounted() {
        console.log('$route.path:', this.$route.path)
        const arr = Mock.getOrder(0)
        console.log('array:', arr)
    }
}
</script>

<style scoped>
#top {
    height: 60px;
    text-align: center;
    padding-top: 20px;
    padding-left: 50px;
    background-color: #65788b
}

.header {
    background-color: #eee836;
}
</style>