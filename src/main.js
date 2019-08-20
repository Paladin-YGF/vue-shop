import Vue from 'vue';
import app from "./App.vue";
import { Header , Swipe , SwipeItem, Button} from 'mint-ui';
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

Vue.http.options.root = "http://www.liulongbin.top:3005";
//基于moment.js处理时间格式
import moment from "moment";
Vue.filter('dateFormat', (data, pattern = "YYYY-MM-DD HH:mm:ss") => {
    return moment(data).format(pattern);
})
//注册mint-ui组件，用于首页顶部
Vue.component(Header.name, Header);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
let vm = new Vue({
    el: "#app",
    data:{
        msg: '123'
    },
    methods: {

    },
    render: creatte => creatte(app),
    router
})