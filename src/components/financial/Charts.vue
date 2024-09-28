<template>
    <div ref="charts">

    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'ChartsCom',
    props: ['xData', 'data'],
    data() {
        return {

        }
    },
    methods: {
        refresh() {
            let charts = echarts.init(this.$refs.charts)
            charts.clear()
            charts.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                xAxis: {
                    data: this.xData
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: this.name,
                        data: this.data,
                        type: 'line'
                    }
                ]

            })
        }
    },
    mounted() {
        this.refresh()
    },
    watch: {
        xData() {
            this.refresh()
        },
        data() {
            this.refresh()
        }
    }
}
</script>

<style scoped></style>