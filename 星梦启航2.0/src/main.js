import { createApp } from 'vue'
import App from './App.vue'
import '../src/style.css'

import router from './router/index.js'

import store from './store/index.js'

import axios from 'axios'

import ECharts from 'vue-echarts'
import 'echarts'

import $ from 'jquery'
window.$=$

import alerts from './assets/js/alerts'
window.$alerts = alerts

const app=createApp(App)

// app.config.globalProperties.$store= store

app.use(store).use(router).mount('#app')
app.component('e-charts',ECharts)
app.config.globalProperties.$http= axios