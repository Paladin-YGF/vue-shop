//1.1导入路由模块
import VueRouter from 'vue-router';

import HeaderContainer from './components/tabbar/HeaderContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue';
import NewList from "./components/news/NewList.vue";
import NewInfo from './components/news/NewInfo.vue';
import Photos from './components/photos/Photos.vue';
import PhotoInfo from './components/photos/PhotoInfo.vue';
import GoodList from './components/goods/GoodList.vue';
import GoodsInfo from "./components/goods/GoodsInfo.vue";
import GoodsDes from "./components/goods/GoodsDes.vue";
import GoodsComment from "./components/goods/GoodsComment.vue"
//1.2创建路由对象
let router = new VueRouter({
    routes: [
        { path: "/", redirect: '/home' },
        { path: '/home', component: HeaderContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopCarContainer },
        { path: '/search', component: SearchContainer },
        { path: "/home/newlist", component: NewList },
        { path: "/home/newlist/newinfo/:id", component: NewInfo },
        {path:"/home/photos", component: Photos},
        {path: "/home/photo/photoinfo/:id", component:PhotoInfo},
        {path: "/home/goodslist", component:GoodList},
        {path: "/home/goodslist/goodsinfo/:id", component:GoodsInfo, name: "goodsinfo"},
        {path: "/home/goodslist/goodsinfo/goodsdes/:id", component:GoodsDes, name: "goodsdes"},
        {path: "/home/goodslist/goodsinfo/goodscomment/:id", component:GoodsComment, name: "goodscomment"},
    ],
    linkActiveClass: 'mui-active'     //覆盖默认点击路由显示的    router-link-active  类
})

//1.3导出路由对象
export default router;