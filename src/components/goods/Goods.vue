<template>
    <div class="content-container" direction="vertical">
        <!-- input -->
        <el-container class="content-row">
            <div class="input-tip">
                商品名称：
            </div>
            <div class="input-field">
                <el-input v-model="queryParam.name"></el-input>
            </div>
            <div class="input-tip">
                商品编号：
            </div>
            <div class="input-field">
                <el-input v-model="queryParam.id"></el-input>
            </div>
            <div class="input-tip">
                商品分类：
            </div>
            <div class="input-field" style="width: 150px">
                <el-select v-model="queryParam.category" :empty-values="[null, undefined]" :value-on-clear="null"
                    placeholder="请选择分类">
                    <el-option v-for="item in categorys" :key="item" :label="item" :value="item"> </el-option>
                </el-select>
            </div>
        </el-container>

        <el-container class="content-row">
            <div class="input-tip">
                是否上架：
            </div>
            <div class="input-field">
                <el-select v-model="sellModeString" style="width: 150px">
                    <el-option label="全部" :value="2"></el-option>
                    <el-option label="否" :value="0"></el-option>
                    <el-option label="是" :value="1"></el-option>
                </el-select>
                <!-- <el-select v-model="sellModeString" :empty-values="[null, undefined]" :value-on-clear="null" clearable
                    placeholder="Select" style="width: 240px">
                    <el-option key="1" label="汉字1" :value="1" />
                    <el-option key="2" label="汉字2" :value="2" />
                    <el-option key="3" label="汉字3" :value="3" />
                </el-select> -->
            </div>
            <div class="input-tip">
                是否过期：
            </div>
            <div class="input-field">
                <el-select v-model="expModeString" style="width: 150px">
                    <el-option key="2" label="全部" :value="2"></el-option>
                    <el-option key="0" label="否" :value="0"></el-option>
                    <el-option key="1" label="是" :value="1"></el-option>
                </el-select>
            </div>
        </el-container>
    </div>
    <!-- button -->
    <div class="content-row">
        <el-container>
            <el-button type="primary" @click="requestData">检索</el-button>
            <el-button type="primary" @click="requestData">显示全部</el-button>
            <el-button type="success" @click="requestData">新增商品</el-button>
        </el-container>
    </div>
    <!-- list -->
    <div>
        <el-table ref="multipleTable" :data="goodsData" tooltip-effect="dark" style="width: 100%;">
            <el-table-column label="商品" width="200" align="center">
                <template #default="scope">
                    <div>
                        <el-image :src="scope.row.img"></el-image>
                    </div>
                    <div>{{ scope.row.name }}</div>
                </template>
            </el-table-column>
            <el-table-column prop="price" label="价格" width="100"></el-table-column>
            <el-table-column prop="sellCount" label="销量" width="100"></el-table-column>
            <el-table-column prop="count" label="库存" width="100"></el-table-column>
            <el-table-column prop="back" label="退款数量" width="100"></el-table-column>
            <el-table-column prop="backPrice" label="退款金额" width="100"></el-table-column>

            <el-table-column prop="owner" label="管理员" width="100"></el-table-column>
            <el-table-column prop="time" label="更新时间" width="200"></el-table-column>

            <el-table-column prop="name" label="操作" width="100">
                <template #default="scope">
                    <el-button @click="operate(scope.row)" :type="scope.row.state ? 'danger' : 'success'">
                        {{ scope.row.state ? '上架' : '下架' }}
                    </el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
import Mock from '@/mock/Mock';
import { ElMessage } from 'element-plus';
export default {
    name: 'GoodsCom',
    data() {
        return {
            goodsData: [],
            categorys: ["全部", "男装", "女装"],
            queryParam: {
                name: '',
                id: '',
                category: '全部',
                sellMode: 2,// 0否 1是 2全部
                expMode: 2
            }
        }
    },
    methods: {
        requestData() {
            ElMessage.success({
                message: '筛选请求参数:' + JSON.stringify(this.queryParam)
            })
            this.goodsData = Mock.getGoods(this.$route.params.type)
        },
        operate(item) {
            item.state = !item.state;
        },
        clear() {
            this.queryParam = {
                name: '',
                id: '',
                category: "",
                sellMode: 2,
                expMode: 2
            }
            this.goodsData = Mock.getGoods(this.$route.params.type)
        },
        addGood() {
            this.$router.push({
                name: "AddGood",
                params: {
                    type: this.$route.params.type
                }
            })
        },
    },
    computed: {
        sellModeString: {
            get() {
                console.log('sellModeString sellMode:', this.queryParam.sellMode)
                if (this.queryParam.sellMode == 2) {
                    return '全部'
                }
                return this.queryParam.sellMode == 0 ? '否' : '是'
            },
            set(val) {
                this.queryParam.sellMode = val
            }
        },
        expModeString: {
            get() {
                if (this.queryParam.expMode == 2) {
                    return '全部'
                }
                return this.queryParam.expMode == 0 ? '否' : '是'
            },
            set(val) {
                this.queryParam.expMode = val
            }
        }
    },
    mounted() {
        console.log('date:', new Date())
        const arr = Mock.getGoods(this.$route.params.type)
        console.log('mounted arr:', arr)
        this.goodsData = arr
    },
    beforeRouteUpdate(to) {
        const arr = Mock.getGoods(to.params.type)
        console.log('BeforeRouteUpdate arr:', arr)
        this.goodsData = arr
    },
}
</script>