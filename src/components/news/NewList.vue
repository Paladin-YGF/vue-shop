<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
        <router-link :to="'/home/newlist/newinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url"/>
          <div class="mui-media-body">
            <p>{{item.title}}</p>
            <p class="mui-ellipsis">
                <span>发表时间：{{item.add_time | dateFormat}}</span>
                <span>点击次数：{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import "../../lib/mui-master/dist/css/mui.min.css";
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            newlist: ''
        }
    },
    methods: {
        getList() {
            this.$http.get("api/getnewslist").then(data => {
                 console.log(data.body)
                if(data.body.status === 0) {
                    this.newlist = data.body.message;
                    Toast('加载成功')
                }else {
                    Toast('加载失败')
                }
            })
        }
    },
    created() {
        this.getList();
    }
};
</script>

<style lang="css" scoped>
    .mui-media-body p{
        font-size: 0.8rem;
        font-weight: 800;
    }
    .mui-ellipsis {
        display: flex;
        justify-content: space-between;
    }
    .mui-ellipsis>span {
        font-size: 0.6rem;
        color: #226aff;
    }

</style>