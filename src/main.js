import Vue from 'vue';
import app from "./App.vue";
import { Header , Swipe , SwipeItem} from 'mint-ui';
import './lib/mui-master/dist/css/mui.min.css';
import './lib/mui-master/dist/fonts/mui-icons-extra.ttf';
import './lib/mui-master/dist/css/icons-extra.css';
//1.1导入路由包
import VueRouter from 'vue-router';
//1.2安装路由
Vue.use(VueRouter);

//1.3导入路由对象模块
import router from './router.js';

import VueResource from 'vue-resource';

Vue.use(VueResource);

//注册mint-ui组件，用于首页顶部
Vue.component(Header.name, Header);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
let vm = new Vue({
    el: "#app",
    data:{
        
    },
    methods: {

    },
    render: creatte => creatte(app),
    router
})