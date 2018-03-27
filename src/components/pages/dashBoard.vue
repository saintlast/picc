<template>
    <div class="dash-board">
        <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
        <div>
            <div class="block">
            <el-cascader
                placeholder="试试搜索：指南"
                :options="options1"
                filterable
            ></el-cascader>
            </div>
            <div class="block">
            <el-cascader
                placeholder="试试搜索：指南"
                :options="options1"
                filterable
                change-on-select
            ></el-cascader>
            </div>
        </div>     

        <div>
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>    
        </div>   
        <div>
<el-input
  placeholder="输入关键字进行过滤"
  v-model="filterText">
</el-input>
<el-tree
  class="filter-tree"
  :data="data2"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  ref="tree2">
</el-tree>


        </div>
        <div>
<el-button
    plain
    @click="open3">
    成功
  </el-button>
  <el-button
    plain
    @click="open4">
    警告
  </el-button>
  <el-button
    plain
    @click="open5">
    消息
  </el-button>
  <el-button
    plain
    @click="open6">
    错误
  </el-button>

        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			options1: [
				{
					value: 'zhinan',
					label: '指南',
					children: [
						{
							value: 'shejiyuanze',
							label: '设计原则',
							children: [
								{
									value: 'yizhi',
									label: '一致',
								},
								{
									value: 'fankui',
									label: '反馈',
								},
								{
									value: 'xiaolv',
									label: '效率',
								},
								{
									value: 'kekong',
									label: '可控',
								},
							],
						},
						{
							value: 'daohang',
							label: '导航',
							children: [
								{
									value: 'cexiangdaohang',
									label: '侧向导航',
								},
								{
									value: 'dingbudaohang',
									label: '顶部导航',
								},
							],
						},
					],
				},
				{
					value: 'zujian',
					label: '组件',
					children: [
						{
							value: 'basic',
							label: 'Basic',
							children: [
								{
									value: 'layout',
									label: 'Layout 布局',
								},
								{
									value: 'color',
									label: 'Color 色彩',
								},
								{
									value: 'typography',
									label: 'Typography 字体',
								},
								{
									value: 'icon',
									label: 'Icon 图标',
								},
								{
									value: 'button',
									label: 'Button 按钮',
								},
							],
						},
						{
							value: 'form',
							label: 'Form',
							children: [
								{
									value: 'radio',
									label: 'Radio 单选框',
								},
								{
									value: 'checkbox',
									label: 'Checkbox 多选框',
								},
								{
									value: 'input',
									label: 'Input 输入框',
								},
								{
									value: 'input-number',
									label: 'InputNumber 计数器',
								},
								{
									value: 'select',
									label: 'Select 选择器',
								},
								{
									value: 'cascader',
									label: 'Cascader 级联选择器',
								},
								{
									value: 'switch',
									label: 'Switch 开关',
								},
								{
									value: 'slider',
									label: 'Slider 滑块',
								},
								{
									value: 'time-picker',
									label: 'TimePicker 时间选择器',
								},
								{
									value: 'date-picker',
									label: 'DatePicker 日期选择器',
								},
								{
									value: 'datetime-picker',
									label: 'DateTimePicker 日期时间选择器',
								},
								{
									value: 'upload',
									label: 'Upload 上传',
								},
								{
									value: 'rate',
									label: 'Rate 评分',
								},
								{
									value: 'form',
									label: 'Form 表单',
								},
							],
						},
						{
							value: 'data',
							label: 'Data',
							children: [
								{
									value: 'table',
									label: 'Table 表格',
								},
								{
									value: 'tag',
									label: 'Tag 标签',
								},
								{
									value: 'progress',
									label: 'Progress 进度条',
								},
								{
									value: 'tree',
									label: 'Tree 树形控件',
								},
								{
									value: 'pagination',
									label: 'Pagination 分页',
								},
								{
									value: 'badge',
									label: 'Badge 标记',
								},
							],
						},
						{
							value: 'notice',
							label: 'Notice',
							children: [
								{
									value: 'alert',
									label: 'Alert 警告',
								},
								{
									value: 'loading',
									label: 'Loading 加载',
								},
								{
									value: 'message',
									label: 'Message 消息提示',
								},
								{
									value: 'message-box',
									label: 'MessageBox 弹框',
								},
								{
									value: 'notification',
									label: 'Notification 通知',
								},
							],
						},
						{
							value: 'navigation',
							label: 'Navigation',
							children: [
								{
									value: 'menu',
									label: 'NavMenu 导航菜单',
								},
								{
									value: 'tabs',
									label: 'Tabs 标签页',
								},
								{
									value: 'breadcrumb',
									label: 'Breadcrumb 面包屑',
								},
								{
									value: 'dropdown',
									label: 'Dropdown 下拉菜单',
								},
								{
									value: 'steps',
									label: 'Steps 步骤条',
								},
							],
						},
						{
							value: 'others',
							label: 'Others',
							children: [
								{
									value: 'dialog',
									label: 'Dialog 对话框',
								},
								{
									value: 'tooltip',
									label: 'Tooltip 文字提示',
								},
								{
									value: 'popover',
									label: 'Popover 弹出框',
								},
								{
									value: 'card',
									label: 'Card 卡片',
								},
								{
									value: 'carousel',
									label: 'Carousel 走马灯',
								},
								{
									value: 'collapse',
									label: 'Collapse 折叠面板',
								},
							],
						},
					],
				},
				{
					value: 'ziyuan',
					label: '资源',
					children: [
						{
							value: 'axure',
							label: 'Axure Components',
						},
						{
							value: 'sketch',
							label: 'Sketch Templates',
						},
						{
							value: 'jiaohu',
							label: '组件交互文档',
						},
					],
				},
			],
			data: [
				{
					label: '一级 1',
					children: [
						{
							label: '二级 1-1',
							children: [
								{
									label: '三级 1-1-1',
								},
							],
						},
					],
				},
				{
					label: '一级 2',
					children: [
						{
							label: '二级 2-1',
							children: [
								{
									label: '三级 2-1-1',
								},
							],
						},
						{
							label: '二级 2-2',
							children: [
								{
									label: '三级 2-2-1',
								},
							],
						},
					],
				},
				{
					label: '一级 3',
					children: [
						{
							label: '二级 3-1',
							children: [
								{
									label: '三级 3-1-1',
								},
							],
						},
						{
							label: '二级 3-2',
							children: [
								{
									label: '三级 3-2-1',
								},
							],
						},
					],
				},
			],
			filterText: '',
			data2: [
				{
					id: 1,
					label: '一级 1',
					children: [
						{
							id: 4,
							label: '二级 1-1',
							children: [
								{
									id: 9,
									label: '三级 1-1-1',
								},
								{
									id: 10,
									label: '三级 1-1-2',
								},
							],
						},
					],
				},
				{
					id: 2,
					label: '一级 2',
					children: [
						{
							id: 5,
							label: '二级 2-1',
						},
						{
							id: 6,
							label: '二级 2-2',
						},
					],
				},
				{
					id: 3,
					label: '一级 3',
					children: [
						{
							id: 7,
							label: '二级 3-1',
						},
						{
							id: 8,
							label: '二级 3-2',
						},
					],
				},
			],
			defaultProps: {
				children: 'children',
				label: 'label',
			},
		};
	},
	watch: {
		filterText(val) {
			this.$refs.tree2.filter(val);
		},
	},
	methods: {
		handleNodeClick(data) {
			console.log(data);
		},
		filterNode(value, data) {
			if (!value) return true;
			return data.label.indexOf(value) !== -1;
		},
		open3() {
			this.$notify({
				title: '成功',
				message: '这是一条成功的提示消息',
				type: 'success',
			});
		},

		open4() {
			this.$notify({
				title: '警告',
				message: '这是一条警告的提示消息',
				type: 'warning',
			});
		},

		open5() {
			this.$notify.info({
				title: '消息',
				message: '这是一条消息的提示消息',
			});
		},

		open6() {
			this.$notify.error({
				title: '错误',
				message: '这是一条错误的提示消息',
			});
		},
	},
};
</script>
<style scoped>

</style>
