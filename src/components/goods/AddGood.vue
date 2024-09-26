<template>
    <div class="content-container" direction="vertical">
        <el-tabs v-model="activeTab" type="card" @tab-click="handlerClick">
            <el-tab-pane label="基础设置" name="1">
                <base-settings></base-settings>
            </el-tab-pane>
            <el-tab-pane label="价格库存" name="2">
                <price-settings></price-settings>
            </el-tab-pane>
            <el-tab-pane label="商品详情" name="3">
                <detail-settings></detail-settings>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import GoodsBaseSettings from './GoodsBaseSettings.vue';
import GoodsDetailSettings from './GoodsDetailSettings.vue';
import GoodsPriceSettings from './GoodsPriceSettings.vue';
export default {
    name: 'AddGood',
    components: {
        BaseSettings: GoodsBaseSettings,
        DetailSettings: GoodsDetailSettings,
        PriceSettings: GoodsPriceSettings,
    }
}
</script>