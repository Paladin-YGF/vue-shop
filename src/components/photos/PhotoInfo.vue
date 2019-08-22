<template>
    <div>
        <h4>{{list.title}}</h4>
        <p class="content-top">
             <span>发表时间：{{list.add_time | dateFormat}}</span>
             <span>点击次数：{{list.click}}</span>
        </p>
        <hr/>
             <vue-preview :slides="photoList" @close="handleClose" ></vue-preview>

        <div class="content-body" v-html="list.content">

        </div>
        <comment :id="id"></comment>
    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
export default {
    data() {
        return {
            id: this.$route.params.id,
            list: '',
            photoList: [],
        }
    },
    methods: {
        getlist() {
            console.log(this.list, this.id)
            this.$http.get("api/getimageInfo/" + this.id).then(data => {
                if(data.body.status === 0){
                    this.list = data.body.message[0];
                    console.log(this.list,1689)
                }
            })
        },
        getPhoto() {
            console.log(555)
            this.$http.get("api/getthumimages/" + this.id).then(data => {
                console.log(data.body)
                if(data.body.status === 0){
                    this.photoList = data.body.message;
                    //vue-review 缩略图使用办法
                    this.photoList.forEach(item => {
                        item.w = 400;
                        item.h = 400;
                        item.msrc = item.src;
                    });
                    console.log(this.photoList)
                }else{
                    console.log(55555)
                }
            })
        },
        handleClose(){
            
        }
    },
    created() {
        this.getlist();
        this.getPhoto();
    },
    components: {
        comment
    }
}
</script>

<style lang="css"scoped>
    h4 {
        text-align: center;
        color: skyblue;
        padding: 1rem;
        font-size: 15px;
    }
    .content-top {
        display: flex;
        justify-content: space-between;
        margin: 0 10px;
    }
    .content-body {
        font-size: 13px;
        line-height: 30px;
        margin: 0 10px;
    }
    img{
        width: 50px;
        height: 50px;
    }
    
</style>