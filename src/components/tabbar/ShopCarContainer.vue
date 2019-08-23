<template>
    <div class="container">
                <div class="goods-list" v-for="(item,index) in list" :key="item.id">
                    <div class="mui-card">
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                    <mt-switch ref="sw" v-model="$store.getters.getSelected[item.id]" 
                                    @change="getSwitch(item.id,$store.getters.getSelected[item.id])"></mt-switch>
                                    <img :src="item.thumb_path"/>
                                    <div class="info">
                                        <h2>{{item.title}}</h2>
                                        <div>
                                            <span class="price">￥{{item.sell_price}}</span>
                                                <goodsbox :count="$store.getters.getId[item.id]" :goodsId="item.id"></goodsbox>
                                            <a href="#" @click.prevent="del(item.id, index)">删除</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mui-card">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner jiesuan">
                            <div class="left">
                                <p>总计（不含运费）</p>
                                <p>已勾选商品<span class="red">{{$store.getters.getSum.count}}</span>件，总价格￥<span class="red">{{$store.getters.getSum.sum}}</span></p>
                            </div>
                            <mt-button type="danger">结算</mt-button>
                        </div>
                    </div>
                </div>
    </div>
</template>

<script>
import goodsbox from '../goods/goodsbox.vue'
export default {
    components: {
        goodsbox
    },
    data(){
        return {
            id: [],
            list: [],
            len: 0
        }
    },
    methods: {
        getList() {
                let idarr = []
            this.$store.state.car.forEach(item => {
                idarr.push(item.id)
            });
                if(idarr.length <=0){
                    return;
                }
            this.$http.get("api/goods/getshopcarlist/" + idarr.join(",")).then(data => {
                if(data.body.status === 0 ){
                    this.list = data.body.message
                    console.log(this.list)
                }
            })
        },
        del(id, index) {
            this.list.splice(index, 1);
            this.$store.commit('del', id)
        },
        getSwitch(id, val) {
            this.$store.commit('swSelected', {
                id: id,
                value: val
            })
        }
    },
    created() {
        this.getList()
    },
}
</script>

<style lang="css" scoped>
    .mui-card-content-inner {
        display: flex;
        align-items: center;   /*纵向居中*/
    }
    .container {
        background: #eee;
        overflow: hidden;
    }

    .container img {
        width: 60px;
        height: 60px;
        padding: 0 5px;
        box-sizing: border-box;
    }
    /* .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between
    } */
    .info h2 {
        font-size: 13px;
        
        margin: 15px 0;
        /* text-align: center; */
    }
    .info span {
        color: red;
        font-size: 15px;
        font-weight: 800;
        
    }
    .jiesuan {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   .mui-card-content-inner .red{
        color: red;
        font-size: 16px;
        font-weight: 800;
    }
</style>