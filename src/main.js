import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Mock from './mock'
// Vue.config.productionTip = false //  关闭生产模式下给出的提示

process.env.NODE_ENV !== 'production' && Mock.start();

createApp(App).use(store).use(router).mount('#app')
