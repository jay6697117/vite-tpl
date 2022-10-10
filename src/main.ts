import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import pinia from './store';
import 'ant-design-vue/dist/antd.css';
import './style.css';

createApp(App).use(Antd).use(router).use(pinia).mount('#app');
