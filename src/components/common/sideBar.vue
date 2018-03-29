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
		<template  v-for="item in categorys">
			<el-submenu :index="item.index" v-if="item.subs">
				<template slot="title">
					<i :class="item.icon"></i>
					<span>{{item.title}}</span>
				</template>
				<el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
			</el-submenu>
			<el-menu-item :index="item.index" v-else>
				<i :class="item.icon"></i>{{ item.title }}
			</el-menu-item>
		</template>
    </el-menu>

    </div>
</template>

<script>
export default {
	data() {
		return {
			categorys: [
				// {
				// 	icon: 'el-icon-setting',
				// 	index: 'dashBoard',
				// 	title: '',
				// },
				{
					icon: 'el-icon-menu',
					index: '2',
					title: '运行管理',
					subs: [
						{
							index: 'reserve',
							title: '预约管理',
						},
						{
							index: 'order',
							title: '订单管理',
						},
						{
							index: 'comment',
							title: '评价管理',
						},
						{
							index: 'complaint',
							title: '投诉管理',
						},
					],
				},
				{
					icon: 'el-icon-date',
					index: '3',
					title: '会员管理',
					subs: [
						{
							index: 'member',
							title: '会员管理',
						},
					],
				},
				{
					icon: 'el-icon-star-on',
					index: 'basecharts',
					title: '俱乐部管理',
					subs: [
						{
							index: 'store',
							title: '门店信息维护',
						},
						{
							index: 'employee',
							title: '员工管理',
						},
					],
				},
			],
		};
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
