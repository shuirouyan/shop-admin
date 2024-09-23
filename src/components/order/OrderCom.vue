<template>
    <div class="content-container" direction="vertical">
        <!-- input -->
        <el-container class="content-row">
            <div class="input-tip">
                商品名称：
            </div>
            <div class="input-field">
                <el-input v-model="queryParam.good"></el-input>
            </div>
            <div class="input-tip">
                收货人：
            </div>
            <div class="input-field">
                <el-input v-model="queryParam.consignee"></el-input>
            </div>
            <div class="input-tip">
                支付时间：
            </div>
            <div class="input-field">
                <el-date-picker type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                    v-model="queryParam.sendTime"></el-date-picker>
            </div>
        </el-container>
    </div>
    <div class="content-row">
        <el-container>
            <el-button type="primary" @click="requestData">筛选</el-button>
            <el-button type="danger" @click="clear">情况筛选</el-button>
            <el-button type="primary" @click="exportData">导出</el-button>
            <el-button type="primary" @click="dispatchGoods">批量发货</el-button>
            <el-button type="primary" @click="exportDispatchGoods">下载批量发货样单</el-button>
        </el-container>
    </div>
    <!-- list -->
    <div>
        <el-tabs type="card" @tab-click="handlerClick">
            <el-tab-pane label="全部"></el-tab-pane>
            <el-tab-pane label="未支付"></el-tab-pane>
            <el-tab-pane label="已支付"></el-tab-pane>
            <el-tab-pane label="待发货"></el-tab-pane>
            <el-tab-pane label="已发货"></el-tab-pane>
            <el-tab-pane label="支付超时"></el-tab-pane>
        </el-tabs>
        <el-table ref="multipleTable" :data="orderList" tooltip-effect="dark" style="width: 100%;"
            @selection-change="handlerClickChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="商品" width="100"></el-table-column>
            <el-table-column prop="price" label="总价/数量" width="100"></el-table-column>
            <el-table-column prop="buyer" label="买家信息" width="100"></el-table-column>
            <el-table-column prop="time" label="交易时间" width="100"></el-table-column>
            <el-table-column label="分销信息" width="100">
                <template #default="scope">
                    <el-tag size="default" :type="scope.row.role ? 'primary' : 'info'">{{ scope.row.role ? '经理' : '分销员'
                        }}</el-tag>
                </template>
            </el-table-column>

            <el-table-column label="状态" width="100">
                <template #default="scope">
                    <el-tag size="default" :type="scope.row.state ? 'success' : 'danger'">{{ scope.row.state ? '已完成' :
                        '未完成'
                        }}</el-tag>
                </template>
            </el-table-column>

            <el-table-column label="支付方式" width="100">
                <template #default="scope">
                    <el-tag size="default" :type="scope.row.payType ? 'success' : 'info'">
                        {{ scope.row.payType ? '微信' : '支付宝' }}
                    </el-tag>
                </template>
            </el-table-column>

            <el-table-column label="来源" width="200" prop="source"></el-table-column>

            <el-table-column label="操作" width="200">
                <template #default="scope">
                    <el-button size="small" type="danger" @click="deleteItem(scope.$index)">删除</el-button>
                    <el-button size="small" type="primary" @click="callUser(scope.row)">联系客户</el-button>
                </template>
            </el-table-column>


        </el-table>
    </div>

</template>
<script>
import Mock from '@/mock/Mock';
import Tools from '@/tools/Tools';
import { ElMessage } from 'element-plus';
export default {
    name: "OrderCom",
    data() {
        return {
            orderList: [],
            queryParam: {
                good: '',
                consignee: '',
                phone: '',
                name: '',
                payTime: '',
                sendTime: '',
            },
            multipleSelection: []
        }
    },
    methods: {
        hello() {
            console.log('aaaa')
        },
        requestData() {
            ElMessage.success({
                message: '筛选请求参数' + JSON.stringify(this.queryParam)
            })
            this.orderList = Mock.getOrder(this.$route.params.type)
        },
        handlerClick(tab) {
            ElMessage.success({
                message: '切换tab刷新数据:' + tab.props.label
            })
            this.orderList = Mock.getOrder(this.$route.params.type)
        },
        clear() {
            this.queryParam = {
                good: '',
                consignee: '',
                phone: '',
                name: '',
                payTime: '',
                sendTime: '',
            }
            this.orderList = Mock.getOrder(this.$route.params.type)
        },
        exportData() {
            Tools.exportJson('订单.json', JSON.stringify(this.orderList))
        },
        exportDispatchGoods() {
            Tools.exportJson('发货单.json', JSON.stringify(this.multipleSelection))
        },
        handlerClickChange(val) {
            this.multipleSelection = val
        },
        dispatchGoods() {
            ElMessage.success({
                message: '发货商品:' + JSON.stringify(this.multipleSelection)
            })
        },
        deleteItem(item) {
            this.orderList.splice(item, 1)
        },
        callUser(item) {
            ElMessage.success({
                message: '联系客户:' + item.phone
            })
        }
    },
    mounted() {
        const data = Mock.getOrder(1)
        this.orderList = data
    }
}
</script>