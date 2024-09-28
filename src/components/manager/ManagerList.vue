<template>
    <div class="content-container" direction="vertical">
        <div>
            <el-container class="content-row">
                <div class="input-tip">
                    店长手机：
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.phone"></el-input>
                </div>
                <div class="input-tip">
                    店长昵称：
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.name"></el-input>
                </div>
                <div class="input-tip">
                    店长状态：
                </div>
                <div class="input-field">
                    <el-select v-model="queryParam.state" placeholder="请选择" style="width: 150px">
                        <el-option key="0" label="后台开通" value="0"></el-option>
                        <el-option key="1" label="站台申请" value="1"></el-option>
                    </el-select>
                </div>
            </el-container>
            <el-container class="content-row">
                <el-button type="primary" @click="search">搜索</el-button>
                <el-button type="primary" @click="clear">清空搜索条件</el-button>
            </el-container>
        </div>

        <div>
            <el-table :data="managerData" tooltip-effect="dark" style="width: 100%;">
                <el-table-column label="分销人信息" width="200" prop="people"></el-table-column>
                <el-table-column label="微信信息" width="200" prop="weixin"></el-table-column>
                <el-table-column label="状态" width="200">
                    <template #default="scope">
                        <el-tag :type="scope.row.state ? 'success' : 'info'">
                            {{ scope.row.state ? '激活' : '审核中' }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="收入总额" width="200" prop="income"></el-table-column>
                <el-table-column label="退款" width="200" prop="back"></el-table-column>
                <el-table-column label="来源" width="200">
                    <template #default="scope">
                        <el-tag>
                            {{ scope.row.source }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="客户数" width="200" prop="customer"></el-table-column>
                <el-table-column label="更新时间" width="200" prop="time"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import Mock from '@/mock/Mock.js';
import { ElMessage } from 'element-plus';

export default {
    name: 'ManagerList',
    data() {
        return {
            queryParam: {
                phone: '',
                name: '',
                state: '',
            },
            managerData: []
        }
    },
    methods: {
        clear() {
            this.queryParam = {
                phone: '',
                name: '',
                state: '',
            }
            this.managerData = Mock.getManagerList()
        },
        search() {
            ElMessage.success({
                message: '请求参数:' + JSON.stringify(this.queryParam)
            })
        },
    },
    mounted() {
        const data = Mock.getManagerList()
        console.log('data:', data)
        this.managerData = data

    }
}
</script>

<style scoped></style>