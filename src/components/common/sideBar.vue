<template>
    <div class="sidebar">

<el-menu
      default-active="onRoutes"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff" unique-opened router>
	  <el-menu-item index="dashBoard">
        <i class="el-icon-document"></i>
        <span slot="title">首页</span>
      </el-menu-item>



<el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基础</span>
        </template>
         <el-menu-item index="basetable">基础表格</el-menu-item>
          <el-menu-item index="baseform">基础表单</el-menu-item>
      </el-submenu>


      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
	  
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

    </div>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		onRoutes() {
			return this.$route.path.replace('/', '');
		},
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>

<style scoped>
.sidebar {
	display: block;
	position: absolute;
	width: 250px;
	left: 0;
	top: 70px;
	bottom: 0;
	background: #324157;
}
.sidebar > ul {
	height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 100%;
	min-height: 400px;
}
</style>
