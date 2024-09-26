<template>
    <div>
        <goods-editor @contentChange="contentChange"></goods-editor>
    </div>

    <el-container class="content-row">
        <el-button type="success" plain @click="submit">提交</el-button>
        <div style="margin-left: 40px;"></div>
        <el-button type="warning" plain @click="cancel">取消</el-button>
    </el-container>
</template>

<script>
import { ElMessage } from 'element-plus';
import GoodsEditor from './GoodsEditor.vue';

export default {
    name: 'GoodsDetailSettings',
    components: {
        GoodsEditor: GoodsEditor
    },
    data() {
        return {
            content: ''
        }
    },
    methods: {
        contentChange(content) {
            this.content = content
        },
        cancel() {
            this.$router.go(-1)
        },
        submit() {
            ElMessage.success({
                message: '设置详情HTML:' + this.content
            })
        }
    },
}
</script>