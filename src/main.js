import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'


import Router from './tools/Router'
import Store from './tools/Storage'



const app = createApp(App)



app.use(ElementPlus)
app.use(Router)
app.use(Store)
app.mount('#app')
