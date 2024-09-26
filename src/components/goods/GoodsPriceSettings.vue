<template>
    <div>
        <div>
            <div style="line-height: 35px; margin-left: 20px;">价格设置</div>
        </div>
        <el-container class="content-row">
            <div class="input-tip">市场价：</div>
            <div class="input-field">
                <el-input v-model="queryParam.markPrice"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">展示价：</div>
            <div class="input-field">
                <el-input v-model="queryParam.showPrice"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">积分数：</div>
            <div class="input-field">
                <el-input v-model="queryParam.coin"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">成本价：</div>
            <div class="input-field">
                <el-input v-model="queryParam.price"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">限购数：</div>
            <div class="input-field">
                <el-input v-model="queryParam.limit"></el-input>
            </div>
        </el-container>
        <div class="title">
            <div style="line-height: 35px; margin-left: 20px;">价格设置</div>
        </div>

        <el-container class="content-row">
            <div class="input-tip">库存数量：</div>
            <div class="input-field">
                <el-input v-model="queryParam.count"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">基础销量：</div>
            <div class="input-field">
                <el-input v-model="queryParam.sellCount"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">基础销量：</div>
            <div class="input-field">
                <el-input v-model="queryParam.viewCount"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <el-button type="success" plain @click="submit">提交</el-button>
            <div style="margin-left: 40px;"></div>
            <el-button type="warning" plain @click="cancel">取消</el-button>
        </el-container>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus';

export default {
    name: 'GoodsPriceSettings',
    data() {
        return {
            queryParam: {
                markPrice: 0,
                showPrice: 0,
                coin: 0,
                price: 0,
                limit: 0,
                count: 0,
                sellCount: 0,
                viewCount: 0,
            }
        }
    },
    methods: {
        cancel() {
            this.$router.go(-1)
        },
        submit() {
            ElMessage.success({
                message: '设置价格与库存:' + JSON.stringify(this.queryParam)
            })
        }
    }
}
</script>

<style scoped>
.title {
    background-color: #e1e1e1;
    height: 35px;
    margin-bottom: 15px;
}
</style>