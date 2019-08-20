<template>
    <div ref="container">
        <h2>发表评论</h2>
        <textarea placeholder="请输入评论内容"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
       <div class="list">
           <div class="list-item" v-for="(item,index) in list" :key="index">
                <div class="list-item-title">
                    <span class="one">第{{index + 1}}楼 <span></span>用户：{{item.user_name}}<span></span></span>
                    <span class="two">发表时间：{{item.add_time | dateFormat}}</span>
                </div>
                <div class="list-item-content">
                    {{item.content === 'undefined' ? "用户很懒，什么都没说" : item.content }}
                </div>
           </div>
       </div>
        <!-- <mt-button type="danger" size="large" plain>加载更多</mt-button> -->
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui";
export default {
    props: ["id"],
    data() {
        return {
            list: [],
            pageindex: 1
        }
    },
    methods: {
        getList() {
            this.$http.get("api/getcomments/"+this.id+"?pageindex=" + this.pageindex).then(data => {
                // console.log(data.body);
                if(data.body.status === 0 ){
                    this.list = this.list.concat(data.body.message);
                    Toast("加载成功")
                }else {
                    Toast("加载失败")
                }         
            })
        },
        getMore() {
            this.pageindex ++;
            this.$http.get("api/getcomments/"+this.id+"?pageindex=" + this.pageindex).then(data => {
                // console.log(data.body);
                if(data.body.status === 0 ){
                    this.list = this.list.concat(data.body.message);
                    Toast("加载成功")
                }else {
                    Toast("没有新数据咯......")
                }         
            })
        }
    },
    created() {
        this.getList();
    },
    beforeDestroy(){
        console.log(this.$refs.container)
        this.$refs.container.innerHTML = '';
    }
}
</script>

<style lang="css" scoped>
    h2 {
        border-bottom: 1px solid #ccc;
        font-size: 1.2rem;
        padding-bottom: 0.8rem;
    }
    textarea {
        font-size: 0.8rem;
        height: 6rem;
        margin: 0 0 0.2rem 0;
    }
    .one>span{
        display: inline-block;
        width: 2rem;
        height: 1rem;
    }
    .list-item-title {
        font-size: 1rem;
        padding: 0.3rem;
        box-sizing: border-box;
        margin: 0.3rem;
        background-color: #ccc;
    }
    .list-item-content {
       /* padding-left: 2.5rem; */
       box-sizing: border-box;
       padding: 0.2rem 0 0.2rem 2.5rem;
       font-size: 0.8rem;
    }
</style>