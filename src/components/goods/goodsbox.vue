<template>
  <div class="mui-numbox" data-numbox-min="1" style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="count" @change="getNmu" ref="ko" readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button" disabled>+</button>
  </div>

        


</template>
<script>
import mui from "../../lib/mui-master/dist/js/mui.min.js"
export default {
     mounted() {
        mui(".mui-numbox").numbox()
    },
    props:["count", "goodsId"],
    methods:{
      getNmu() {
          console.log(this.goodsId, this.$refs.ko.value);
          this.$store.commit('updatedCar',{
              id: this.goodsId,
              count: this.$refs.ko.value
          })
    }
    },
    data() {
        return{

        }
    }
};
</script>
<style scoped>
</style>