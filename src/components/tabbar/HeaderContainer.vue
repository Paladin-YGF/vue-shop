<template>
    <div>
          
                 <!-- <mt-swipe :auto="1000" >
                    <mt-swipe-item v-for="item in list" :key="item.id">
                        <img :src="item.img">

                    </mt-swipe-item>
                 </mt-swipe> -->
                 <swiper :list="list" :isFull="true"></swiper>
  
             <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
                            <img src="../../img/menu1.png" alt="">
                            <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photos">
		                    <img src="../../img/menu2.png" alt="">
                            <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <img src="../../img/menu3.png" alt="">
                            <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../../img/menu4.png" alt="">
                            <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../../img/menu5.png" alt="">
                            <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		                    <img src="../../img/menu6.png" alt="">
                            <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import '../../lib/mui-master/dist/css/mui.min.css';
import swiper from "../subcomponents/swiper.vue"
export default {
    data() {
        return {
            list: ''
        }
    },
    created(){
        this.getLunbotu();
    },
    methods: {
        getLunbotu() {
            this.$http.get("api/getlunbo").then((data) => {
                console.log(data.body)
                if(data.body.status === 0) {
                    this.list = data.body.message;
                    console.log(this.list)
                    Toast('加载成功')
                    
                }else {
                    Toast('加载中...')
                }
            })
        }
    },
    components: {
        swiper
    }
}
</script>

<style lang="css" scoped>
    /* .mint-swipe {
        height: 10rem;
        overflow: hidden;
    }
    .mint-swipe img {
        height: 100%;
        width: 100%;
    } */
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
          /* padding-top: 0.5rem; */
          font-size: 0.8rem ;
    }
    .mui-grid-view.mui-grid-9 {
        background: #fff;
    }
   .mui-grid-view.mui-grid-9 img {
       width: 4rem;
       height: 4rem;
   }
</style>