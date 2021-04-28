import { createApp } from 'vue'
import App from './App.vue'
import './scss/main.scss'
import VueRouter from './router/index'

createApp(App).use(VueRouter).mount('#app');
