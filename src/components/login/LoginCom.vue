<template>
    <div id="container">
        <div id="title">
            <h1>电商后台管理系统</h1>
        </div>
        <div class="input">
            <el-input v-model="name" prefix-icon="User" placeholder="请输入用户名" />
        </div>
        <div class="input">
            <el-input v-model="passwd" prefix-icon="Lock" :show-password="true" placeholder="请输入密码" />
        </div>
        <div class="input">
            <el-button @click="login" @key.enter="login" style="width: 500px;" type="primary"
                :disabled="disabled">登录</el-button>
        </div>
    </div>
</template>

<script>
import Storage from '@/tools/Storage'
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

export default {
    name: 'LoginCom',
    components: [User, Lock],
    data() {
        return {
            name: '',
            passwd: ''
        }
    },
    methods: {
        login() {
            Storage.commit('registerUserInfo', {
                userName: this.name,
                userPassword: this.passwd
            })
            ElMessage.success("登录成功")
            setTimeout(() => {
                this.$router.push({ name: 'home' })
            }, 3000)
        }
    },
    computed: {
        disabled() {
            console.log('disabled.....')
            return this.name.length == 0 || this.passwd.length == 0
        }
    },
    mounted() {
        this.name = 'a'
        this.passwd = 'u'
    }
}
</script>

<style scoped>
#container {
    background-color: #595959;
    background-image: url('~@/assets/login_bg.png');
    height: 100%;
    width: 100%;
    position: absolute;
}

#title {
    text-align: center;
    color: azure;
    margin-top: 200px;
}

.input {
    margin: 20px auto;
    width: 500px;
}
</style>