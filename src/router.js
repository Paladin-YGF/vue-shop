//1.1导入路由模块
import VueRouter from 'vue-router';

import HeaderContainer from './components/tabbar/HeaderContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue';
import NewList from "./components/news/NewList.vue";
import NewInfo from './components/news/NewInfo.vue';
//1.2创建路由对象
let router = new VueRouter({
    routes: [
        { path: "/", redirect: '/home' },
        { path: '/home', component: HeaderContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopCarContainer },
        { path: '/search', component: SearchContainer },
        { path: "/home/newlist", component: NewList },
        { path: "/home/newlist/newinfo/:id", component: NewInfo }
    ],
    linkActiveClass: 'mui-active'     //覆盖默认点击路由显示的    router-link-active  类
})

//1.3导出路由对象
export default router;