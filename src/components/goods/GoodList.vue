<template>
    <div class="list" v-if="list.length != 0">
       <!-- <router-link class="list-item" v-for="item in list" :key="item.id" :to="'/home/goodsinfo/' +item.id" tag='div'>
            <img :src="item.img_url"/>
            <h2 class="title">{{item.title}}</h2>
            <div class="info">
                <Div class="price">
                   <span class="now">￥{{item.sell_price}}</span>
                  <span class="old">￥{{item.market_price}}</span>
                </Div>
                <Div class="sell">
                  <span>热卖中</span>
                  <span>剩余{{item.stock_quantity}}件</span>
                </Div>
            </div>
       </router-link> -->
       <div class="list-item" v-for="item in list" :key="item.id" @click="getRouter(item.id)">
            <img :src="item.img_url"/>
            <h2 class="title">{{item.title}}</h2>
            <div class="info">
                <Div class="price">
                   <span class="now">￥{{item.sell_price}}</span>
                  <span class="old">￥{{item.market_price}}</span>
                </Div>
                <Div class="sell">
                  <span>热卖中</span>
                  <span>剩余{{item.stock_quantity}}件</span>
                </Div>
            </div>
       </div>
       <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
    data() {
        return {
            pageindex: 1,
            list: [],
            lengthh: ''
        }
    },
    methods: {
        getGoodsList() {
            this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(data =>{
                if(data.body.status === 0 ){
                    this.list = this.list.concat(data.body.message) ;
                    console.log(this.list , 156)
                }
                // console.log(this.list.length)
                if(this.list.length === this.lengthh) {
                    Toast('没有更多数据咯...')
                }
                this.lengthh =  this.list.length
            })
        },
        getMore() {
            this.pageindex ++;
            this.getGoodsList();
        },
        getRouter(id) {
            //1.this.$router.push("/home/goodsinfo/" + id)
            //2.this.$router.push({path: "/home/goodsinfo/" + id)
            this.$router.push({name: "goodsinfo", params: {id: id}})
        }
    },
    created() {
        this.getGoodsList()
    }
}
</script>

<style  lang="css" scoped>
    .title {
        font-size: 14px;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        justify-content: space-between;
    }
    .list-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 10px #ccc;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
     .list-item img {
         width: 100%;
     }
     .info {
         background: #eee;
         padding: 5px 10px;
         margin: 2px;
     }
     .info .now {
         color: red;
         font-weight: 800;
         font-size: 16px;
        margin-right: 20px;
     }
     .info .old {
         text-decoration: line-through;
         font-size: 12px;
        color: #ccc;
        font-weight: 800;
     }
     .sell  {
         font-size: 10px;
         color: #ccc; 
     }
     .sell span {
         margin-right: 10px;
     }
</style>