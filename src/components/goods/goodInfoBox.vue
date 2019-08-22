<template>
  <div class="mui-numbox" data-numbox-min="1" >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="getNmu" ref="ko"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button" disabled>+</button>
  </div>

        


</template>
<script>
import mui from "../../lib/mui-master/dist/js/mui.min.js"
export default {
     mounted() {
        mui(".mui-numbox").numbox()
    },
    props:['max'],
    methods:{
      getNmu() {
      console.log(this.$refs.ko.value)
      this.$emit("getcountt", parseInt(this.$refs.ko.value))
      console.log(666)
    }
    },
    watch: {
      max: function(newVal, oldVal) {
          mui('.mui-numbox').numbox().setOption("max", newVal)
          console.log(this.max)
      }
    }
};
</script>
<style scoped>
</style>