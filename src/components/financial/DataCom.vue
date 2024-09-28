<template>
    <div class="content-container" direction="vertical">

        <el-container class="content-row">
            <div class="info">总交易额：{{ this.data.allTra }}</div>
            <div class="info">秒杀交易额：{{ this.data.speTra }}</div>
            <div class="info">普通商品交易额：{{ this.data.norTra }}</div>
            <div class="info">累计用户数：{{ this.data.userCount }}</div>
            <div class="info">分销用户数：{{ this.data.managerCount }}</div>
        </el-container>

        <el-container class="content-row">
            <el-radio-group v-model="type" @change="changeType" size="large">
                <el-radio-button value="总交易额" label="总交易额"></el-radio-button>
                <el-radio-button value="商品交易额" label="商品交易额"></el-radio-button>
                <el-radio-button value="新用户销量" label="新用户销量"></el-radio-button>
                <el-radio-button value="方可转化率" label="方可转化率"></el-radio-button>
                <el-radio-button value="下单转化率" label="下单转化率"></el-radio-button>
                <el-radio-button value="付款转化率" label="付款转化率"></el-radio-button>
                <el-radio-button value="流水" label="流水"></el-radio-button>
            </el-radio-group>
        </el-container>
        <Charts id="charts" :xData="xData" :data="chartsData"></Charts>
        <div class="realTime">
            <div class="info">
                实时数据-更新时间：{{ data.time }}
            </div>
        </div>
        <el-container class="content-row">
            <div class="block">
                <div class="title">付款金额：10000</div>
                <div class="subTitle">昨日：1100</div>
                <div class="subTitle">今日：8000</div>
            </div>
            <div class="block">
                <div class="title">支付订单数：10000</div>
                <div class="subTitle">昨日：1100</div>
                <div class="subTitle">今日：8000</div>
            </div>
            <div class="block">
                <div class="title">付款人数：10000</div>
                <div class="subTitle">昨日：1100</div>
                <div class="subTitle">今日：8000</div>
            </div>
            <div class="block">
                <div class="title">付款转化率：8000</div>
                <div class="subTitle">昨日：1100</div>
                <div class="subTitle">今日：8000</div>
            </div>
        </el-container>
        <el-container class="content-row">
            <div class="block">
                <div class="title">访客数：10000</div>
                <div class="subTitle">昨日：1100</div>
                <div class="subTitle">今日：8000</div>
            </div>
            <div class="block">
                <div class="title">访问次数：10000</div>
                <div class="subTitle">昨日：1100</div>
                <div class="subTitle">今日：8000</div>
            </div>
            <div class="block">
                <div class="title">新增用户：10000</div>
                <div class="subTitle">昨日：1100</div>
                <div class="subTitle">今日：8000</div>
            </div>
            <div class="block">
                <div class="title">累计用户数：8000</div>
                <div class="subTitle">昨日：1100</div>
                <div class="subTitle">今日：8000</div>
            </div>
        </el-container>
    </div>
</template>
<script>
import Mock from '@/mock/Mock';
import Charts from './Charts.vue';
export default {
    name: 'DataCom',
    components: {
        Charts: Charts
    },
    data() {
        return {
            xData: ['8月1日', '8月2日', '8月3日', '8月4日', '8月5日', '8月6日'],
            chartsData: [],
            name: '销量',
            type: '总交易额',
            data: {}
        }
    },
    methods: {
        changeType() {
            this.chartsData = Mock.getChartsData()
        }
    },
    mounted() {
        console.log('DataCom 组件挂载')
        this.chartsData = Mock.getChartsData()
        const data = Mock.getTradeData()
        console.log('data:', data)
        this.data = data
    }
}
</script>

<style scoped>
#charts {
    widows: 1200px;
    height: 400px;
}

.info {
    margin: 15px 40px;
    font-size: 20px;
    color: #777777;
}

.realTime {
    border: 1px solid 1px;
    width: 1200px;
    height: 300px;
}

.block {
    margin: auto;
    width: 300px;
    padding: 10px 30px;
}

.title {
    font-size: 20px;
    color: #777777;
    margin-bottom: 5px;
}

.subTitle {
    font-size: 18px;
    color: #777777;
    margin-top: 3px;
}
</style>