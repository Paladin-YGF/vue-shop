<template>
    <div>
            <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id ==0 ?'mui-active' : '']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in list" :key="item.id" @tap="getImg(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>
            <ul class="photo-list">
                <router-link v-for="item in listImg" :key="item.id" tag="li" :to="'/home/photo/photoinfo/' + item.id">
                    <img v-lazy="item.img_url"/>
                     <div class="content">
                        <div class="p-l-title">
                            {{item.title}}
                        </div>
                        <div class="p-l-content">
                            {{item.zhaiyao}}
                        </div>
                    </div>
                </router-link>
            </ul>
    </div>
</template>

<script>
import mui from '../../lib/mui-master/dist/js/mui.min.js';
export default {
    data() {
        return {
            list: '',
            listImg: ''
        }
    },
    created() {
        this.getList();
        this.getImg(0);
    },
    methods: {
        getList() {
            this.$http.get("api/getimgcategory").then(data=>{
                if(data.body.status === 0) {
                    // console.log(data.body.message)
                    this.list = data.body.message;
                    this.list.unshift({title: "全部", id: 0});
                    console.log(this.list,156)
                }
            })
        },
        getImg(ImgId){
            this.$http.get("api/getimages/" + ImgId).then(data=>{
                console.log(data.body,ImgId)
                if(data.body.status === 0) {
                     this.listImg = data.body.message;        
                }
            })
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style lang="css" scoped>
    *{
        touch-action: pan-y;    /* 谷歌提高页面滑动流畅度*/
    }
    .photo-list {
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: #fff;
       
    }
    .photo-list li {
        /* background-color: #ccc; */
        text-align: center;
        padding: 0.5rem;
        box-shadow: 0 0 10px #ccc;
        position: relative;
    }
    .photo-list li img {
        width: 100%;
        vertical-align: bottom;
        border-radius: 10px;
        opacity: 0.8;
    }
    .photo-list img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    .content {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(0,0,0,0.4);
        color:#fff;
        text-align: left;
        font-size: 14px;
        margin: 0.5rem;
        max-height: 80px;
        overflow: hidden;
        }
        .content .p-l-content {
            font-size: 13px;
        }
</style>