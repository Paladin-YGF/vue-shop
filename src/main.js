import Vue from 'vue';
import app from "./App.vue";
// import { Header , Swipe , SwipeItem, Button, Lazyload} from 'mint-ui';
import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

import './lib/mui-master/dist/css/mui.min.css';
import './lib/mui-master/dist/fonts/mui-icons-extra.ttf';
import './lib/mui-master/dist/css/icons-extra.css';
//1.1导入路由包
import VueRouter from 'vue-router';
//1.2安装路由
Vue.use(VueRouter);

// Vue.use(Lazyload);

//1.3导入路由对象模块
import router from './router.js';

import VueResource from 'vue-resource';

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.root = "http://www.liulongbin.top:3005";
//基于moment.js处理时间格式
import moment from "moment";
Vue.filter('dateFormat', (data, pattern = "YYYY-MM-DD HH:mm:ss") => {
    return moment(data).format(pattern);
})
// //注册mint-ui组件，用于首页顶部
// Vue.component(Header.name, Header);
import Vuex from 'vuex'
Vue.use(Vuex)

let car = JSON.parse(localStorage.getItem('car') || '[]')//判断本地存储是否有 购物车数据
let store = new Vuex.Store({
    state: {//this.$store.state.xxx
        car: car
    },
    mutations: {//this.$store.commit('方法名',参数)
        addCarList(state, arg) {
           let flag = state.car.some(item => {
                if(item.id === arg.id){
                    item.count += arg.count;
                    return true
                }
            });
            console.log(flag)
            if(!flag){
                state.car.push(arg)
            }
            window.localStorage.setItem('car', JSON.stringify(state.car))

        },
        updatedCar (state, arg) {
            state.car.some(item => {
                console.log(item.id,item.id == arg.id)
                if(item.id == arg.id) {
                    item.count = parseInt(arg.count)
                    // console.log(item.count, arg.count)
                  
                    return true;
                }
            })
            window.localStorage.setItem('car', JSON.stringify(state.car))
            console.log(state.car)
        },
        del(state, id) {
            state.car.some((item,index) => {
                if(item.id == id){
                    state.car.splice(index, 1);
                }
            })
            window.localStorage.setItem('car', JSON.stringify('car'))
        },
        swSelected(state,obj) {
            state.car.some(item=>{
                if(item.id == obj.id) {
                    item.selected = obj.value;
                    return true;
                }
            })
            window.localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {//this.$store.getters.xxx
        comput: function(state){
            let countt = 0;
            state.car.forEach(item => {
                countt += item.count;
            })
            localStorage.setItem('counttt', JSON.stringify(countt))
            return countt;
        },
        getId: function(state) {
            let obj = {};
            state.car.forEach(item =>{
                obj[item.id] = item.count
            })
            return obj
        },
        getSelected: function(state) {
            let obj = {};
            state.car.forEach(item =>{
                obj[item.id] = item.selected
            })
            return obj
        },
        getSum(state) {
            let obj = {
                count: 0,
                sum: 0
            };
            state.car.forEach(item => {
                if(item.selected) {
                    obj.count += item.count;
                    obj.sum = item.price * obj.count;
                }
            });
            console.log(obj)
            return obj
        }
    }
})
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
let vm = new Vue({
    el: "#app",
    data:{
        msg: '123'
    },
    methods: {

    },
    render: creatte => creatte(app),
    router,
    store
})