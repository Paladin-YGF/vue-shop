<template>
    <div class="newsInfo">
        <h2 class="title">{{list.title}}</h2>
        <p class="dateFormat">
              <span>发表时间：{{list.add_time | dateFormat}}</span>
              <span>点击次数：{{list.click}}</span>
        </p>
        <div v-html="list.content">
           
        </div>
        <comment :id="this.id"></comment>
    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            id: this.$route.params.id,
            list: ''
        }
    },
    created() {
        this.getNewInfoList();
    },
    methods: {
        getNewInfoList() {
            this.$http.get("api/getnew/" + this.id).then(data => {
                // console.log(data.bady)
                if(data.body.status === 0) {
                    this.list = data.body.message[0];
                    console.log(data.body.message[0])
                    Toast("加载成功")
                }else {
                    Toast('加载失败')
                }
            })
        }
    },
    components: {
        comment
    }
}
</script>

<style scoped>
        .newsInfo {
            padding: 0 10px;
        }
        .newsInfo .title {
            font-size: 1rem;
            text-align: center;
            margin: 0.5rem 0;
            color: rgba(233, 6, 6, 0.925);
        }
        .dateFormat {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
        }
        .dateFormat span {
            font-size: 0.8rem;
            color: blue;
        }
</style>