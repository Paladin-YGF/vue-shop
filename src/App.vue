<template>
    <div style="padding-top: 2.5rem; padding-bottom: 3.5rem;">
            <!-- 顶部 -->
			<mt-header fixed title="购物商城">
				<span slot="left" @click="getBack" v-show="$route.path!=='/home'">
					<mt-button icon="back">返回</mt-button>
				</span>
			</mt-header>
            <!-- 路由 -->
			<div class="container">
			<transition>
				<router-view></router-view>
			</transition>
			</div>
            <!-- 底部 -->
            <nav class="mui-bar mui-bar-tab">
				<!-- mui-tab-item 与mui.js冲突，导致底部无法切换路由-->
			<router-link class="mui-tab-items" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-items" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">手机</span>
			</router-link>
			<router-link class="mui-tab-items" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="box" ref="boxx">{{this.$store.getters.comput}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-items" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		   </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 123
        }
	},
	methods: {
		getBack() {
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="css"scoped>
	.mint-header.is-fixed {
		z-index: 999;
	}
	.container {
		overflow-x: hidden;
	}
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to  {
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active {
		transition: all 0.5s ease;
	}

	.mui-bar-tab .mui-tab-items.mui-active {
           color: #007aff;
   }
   .mui-bar-tab .mui-tab-items {
            display: table-cell;
            overflow: hidden;
            width: 1%;
            height: 50px;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #929292;
   }
   .mui-bar-tab .mui-tab-items .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0
   }
   .mui-bar-tab .mui-tab-items .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
   }
</style>