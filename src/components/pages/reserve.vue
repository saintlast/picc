<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
                <el-breadcrumb-item>基础表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-button type="primary" icon="delete" class="handle-del mr10">批量删除</el-button>
            <el-select v-model="selectCate" placeholder="筛选省份" class="handle-select mr10">
                <el-option key="1" label="广东省" value="广东省"></el-option>
                <el-option key="2" label="湖南省" value="湖南省"></el-option>
            </el-select>
            <el-input v-model="selectWord" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search">搜索</el-button>
        </div>
        <div class="handle-box">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>

        <el-table ref="multipleTable" :data="reserveList" tooltip-effect="dark" style="width: 100%" border  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column
            type="index"
            :index="indexMethod">
            </el-table-column>
            <el-table-column label="预约时间" sortable>
               <template slot-scope="scope">{{ scope.row.reserveTime }}</template>
            </el-table-column>
            <el-table-column label="服务时间" sortable>
               <template slot-scope="scope">{{ scope.row.serverTime }}</template>
            </el-table-column>
            <el-table-column
            prop="carType"
            label="车型"
            width="120">
            </el-table-column>
            <el-table-column
            prop="carNo"
            label="车牌"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="content"
            label="预约项目"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="server"
            label="服务人员"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="status"
            label="状态" 
            :filters="[{ text: '预约中', value: 0 }, { text: '已接待', value: 2 }]" :filter-method="filterTag"
            filter-placement="bottom-end">
                <template slot-scope="scope">
                   <el-tag
          :type="scope.row.status == 0 ? 'warning' : 'primary'"
          close-transition>{{scope.row.status == 0 ? "预约中":"已接待"}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>

            <div style="margin-top: 20px">
                <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        </el-table>
        <div class="pagination">
             <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="limit"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import api from '../../libs/api';
export default {
	data() {
		return {
			limit: 10,
			offset: 0,
			reserveList: [],
			total: 0,
			currentPage: 1,
			multipleSelection: [],
			selectCate: '',
			selectWord: '',
		};
	},

	created() {
		this.getReserveList(this.limit, this.offset);
	},

	computed: {},

	methods: {
		getReserveList(limit, offset) {
			api
				.getReserveList(limit, offset)
				.then(response => {
					let res = response.data;
					if (res.code == 0) {
						this.$nextTick(() => {
							this.reserveList = res.data.list;
							this.total = res.data.total;
							this.currentPage = res.data.pageNum;
							this.currentPage = res.data.pageNum;
						});
					}
				})
				.catch(err => {});
		},
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},

		handleSelectionChange(val) {
			this.multipleSelection = val;
		},

		handleCurrentChange() {},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleClick(row) {
			console.log(row);
		},
		indexMethod(index) {
			return index;
		},

		statusFormatter(row, column) {
			let statusTxt = '';
			switch (row.status) {
				case 0:
					statusTxt = '<span class="text-warning">预约中</span>';
					break;
				case 1:
					statusTxt = '<span class="text-info">已接待</span>';
					break;
			}
			return statusTxt;
		},
		filterTag(value, row) {
			return row.tag === value;
		},
	},
};
</script>

<style scoped>
.handle-box {
	margin-bottom: 20px;
}

.handle-select {
	width: 120px;
}

.handle-input {
	width: 300px;

	display: inline-block;
}
</style>