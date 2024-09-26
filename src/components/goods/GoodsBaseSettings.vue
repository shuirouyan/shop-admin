<template>
    <div>
        <el-container class="content-row">
            <div class="input-tip">商品名称：</div>
            <div class="input-field">
                <el-input v-model="queryParam.name"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">商品简介：</div>
            <div class="input-field">
                <el-input type="textarea" :rows="3" v-model="queryParam.desc"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">商品封面：</div>
            <div class="input-field">
                <el-upload :auto-upload="false" :limit="1" list-type="picture-card">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">列表图片：</div>
            <div class="input-field">
                <el-upload :auto-upload="false" :limit="1" list-type="picture-card">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">上架日期：</div>
            <div class="input-field">
                <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                    v-model="queryParam.timeRange"></el-date-picker>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="input-tip">
                商品分类：
            </div>
            <div class="input-field">
                <el-select v-model="queryParam.category" style="width: 150px">
                    <el-option label="男装" :value="0"></el-option>
                    <el-option label="男鞋" :value="1"></el-option>
                    <el-option label="围巾" :value="2"></el-option>
                </el-select>
            </div>
            <div style="margin-top: 6px;">
                <el-button type="primary" size="default" round>添加分类</el-button>
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
    name: 'GoodsBaseSettings',
    data() {
        return {
            queryParam: {
                name: '',
                desc: '',
                timeRange: '',
                category: 0
            }
        }
    },
    methods: {
        submit() {
            ElMessage.success({
                message: '设置商品基本属性:' + JSON.stringify(this.queryParam)
            })
        }
    }
}
</script>