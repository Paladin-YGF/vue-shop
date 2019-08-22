<template>
    <div>
        <h1 class="title">{{list.title}}</h1>
        <hr/>
        <div v-html="list.content" class="content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            list: ''
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.$http.get("api/goods/getdesc/" + this.id).then(data => {
                if(data.body.status === 0){
                    this.list = data.body.message[0];
                    console.log(this.list)
                }
            })
        }
    }
}
</script>

<style >
    .title {
        font-size: 14px;
        color: skyblue;
        text-align: center;
        padding: 15px 0 15px 0;
        margin: 0;
         }
         hr {
             width: 96%;
             margin: auto;
             color: #eee;
         }
         .content img{
             width: 100%;
             height: 100%;
             margin-left: -10px;
            border: 0;
            padding: 0 13px 0 0px;
                }
         .content>p {
             text-indent: 15px;
             padding: 0 8px;
             box-sizing: border-box;
         }
</style>