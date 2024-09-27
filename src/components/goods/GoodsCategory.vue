<template>
    <div class="content-container" direction="vertical">
        <el-container class="content-row">
            <el-button type="primary" @click="addCatory">添加商品分类</el-button>
        </el-container>
        <div>
            <el-table :data="categoryList" tooltip-effect="dark" style="width: 100%;">
                <el-table-column prop="id" label="分类id" width="100"></el-table-column>
                <el-table-column prop="name" label="分类名称" width="100"></el-table-column>
                <el-table-column prop="manager" label="分类负责人" width="100"></el-table-column>
                <el-table-column prop="time" label="操作" width="100">
                    <template #default="scope">
                        <el-button size="default" @click="deleteCategory(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus';

export default {
    name: 'GoodsCategory',
    data() {
        return {
            categoryList: [
                { id: 12, name: '男装', manager: '管理用户01' },
                { id: 13, name: '男鞋', manager: '管理用户02' },
                { id: 14, name: '帽子', manager: '管理用户03' },
            ]
        }
    },
    methods: {
        deleteCategory(index) {
            this.categoryList.splice(index, 1)
        },
        addCatory() {
            ElMessageBox.prompt('请输入分类名称', '新增分类', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                if (value) {
                    ElMessage({
                        type: 'success',
                        message: `新增成功:${value}`,
                    })
                    this.categoryList.sort((e1, e2) => e1.id - e2.id)
                    this.categoryList.push({
                        id: this.categoryList[this.categoryList.length - 1].id + 1,
                        name: value,
                        manager: '管理员09'
                    })
                } else {
                    ElMessage({
                        type: 'warning',
                        message: '内容不能为空'
                    })
                }
            }).catch(() => {
                ElMessage({
                    type: 'info',
                    message: '新增取消',
                })
            })
        }
    }
}
</script>

<style scoped></style>