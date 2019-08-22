<template>
            <Div> 
                    <mt-swipe :auto="1800" >
                        <mt-swipe-item v-for="item in list" :key="item.id">
                            <img :src="item.img" :class="{isfull: isFull}">

                        </mt-swipe-item>
                    </mt-swipe>
            </Div>
</template>

<script>
export default {
    props: ["list", "isFull"],
    data() {
        return {

        }
    },
    methods: {

    }

}
</script>

<style lang="css" scoped>
    .mint-swipe {
        height: 10rem;
        overflow: hidden;
        /* background: red; */
    }
    .mint-swipe-item img {
        height: 100%;
        /* text-align: center; */
        /* width: 100%; */
        display: block;
        margin: auto;
    }
    .isfull {
        width: 100%;
    }
</style>