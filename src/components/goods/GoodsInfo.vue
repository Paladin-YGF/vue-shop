<template>
            <div class="GOODS-LIST">
        
                <div class="mui-card">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                           <swiper :list="list" :isFull="false"></swiper>
                        </div>
                    </div>
                </div>
                
                    <transition
                    @before-enter="before"
                    @enter="enter"
                    @after-enter="after">
                        <div class="ball" v-show="flag" ref="boll"></div>
                    </transition>

			<div class="mui-card">
				<div class="mui-card-header">商品的名称</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price"> 
                            市场价:<del>￥{{listt.market_price}}</del>&nbsp;&nbsp;&nbsp;销售价:<span>￥{{listt.sell_price}}</span>
                        </p>
                        <p>购买数量:
                           <goodInfoBox @getcountt="getCount" :max="listt.stock_quantity"></goodInfoBox>
                        </p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addCar">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>

            <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:&nbsp;&nbsp;&nbsp;{{listt.goods_no}}</p>
                        <p>库存情况:&nbsp;&nbsp;&nbsp;{{listt.stock_quantity}}件</p>
                        <p>上架时间:&nbsp;&nbsp;&nbsp;{{listt.add_time | dateFormat("YYYY-MM-DD")}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                            <!-- <mt-button type="primary" size="large">图文介绍</mt-button>
                            <mt-button type="danger" size="large">商品评论</mt-button>                     -->
                            <mt-button type="primary" size="large" @click="ToOne(id)">图文介绍</mt-button>
                            <mt-button type="danger" size="large" @click="ToTwo(id)">商品评论</mt-button>   
                </div>
			</div>
			
    </div>
</template>

<script>
import swiper from "../subcomponents/swiper.vue";
import goodInfoBox from "../goods/goodInfoBox.vue";
export default {
    data() {
        return {
            id: this.$route.params.id,
            list: [],
            listt: {},
            flag:false,
            selectCount: 1
        }
    },
    methods:  {
        getGoodsList() {
            this.$http.get('api/getthumimages/' + this.id).then(data => {
                if(data.body.status === 0 ){
                    this.list = data.body.message ;
                    this.list.forEach(item => {
                        item.img = item.src
                    })
                    console.log(this.list,156)
                }
            });
        },
        getList(){
            this.$http.get("api/goods/getinfo/" + this.id).then(data=>{
                console.log(data.body)
                if(data.body.status === 0) {
                     this.listt = data.body.message[0];        
                }
            })
        },
        ToOne(id) {
            this.$router.push({name: "goodsdes", params: id})
        },
        ToTwo(id) {
            this.$router.push({name: "goodscomment", params: id})
        },
        addCar() {
            this.flag = !this.flag;
            
            let carrList = {
                id: this.id,
                count: this.selectCount,
                price: this.listt.sell_price,
                selected: true
            }
            this.$store.commit('addCarList', carrList)
        },
        before(el) {
            el.style.transform = "translate(0, 0)"
               
        },
        enter(el, done) {
            el.offsetWidth
            // el.style.transform = "translate(95px,270px)";
            // const x = el.getList
            // console.log(el.getBoundingClientRect())
            // console.log(this.$refs.boll.getBoundingClientRect())
            // console.log(document.getElementById('box').getBoundingClientRect())
            const x = document.getElementById('box').getBoundingClientRect().x - this.$refs.boll.getBoundingClientRect().x;
            const y = document.getElementById('box').getBoundingClientRect().y - this.$refs.boll.getBoundingClientRect().y;
            console.log(x,y)
             el.style.transform = "translate("+x+"px,"+y+"px)";
            el.style.transition = "all 1s cubic-bezier(0,0,0.25,1)";
            done();
        },
        after(el) {
                this.flag = !this.flag;
        },
        getCount(num) {
            this.selectCount = num;
            console.log("父组件:" + this.selectCount)
        }
    },
    created(){
        this.getGoodsList();
        this.getList();
    },
    components: {
        swiper,
        goodInfoBox
    }
 }
</script>

<style lang="css" scoped>
    .GOODS-LIST {
        background: #EEE;
        overflow: hidden;
        /* 解决塌陷问题 */
    }
    .price span {
        font-size: 20px;
        font-weight: 800;
        color: red;
    }
    .mui-card-footer, .mui-card-header {
        flex-direction: column;
    }
    .mint-button {
        margin-bottom: 10px;
    }
    .ball {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: red;
        position: absolute;
        left: 142px;
        top: 350px;
        z-index: 999;
    }
</style>