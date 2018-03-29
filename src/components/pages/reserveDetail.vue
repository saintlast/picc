<template>
    <div class="detail">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-menu"></i> 运行管理</el-breadcrumb-item>
            <el-breadcrumb-item>预约管理</el-breadcrumb-item>
            <el-breadcrumb-item>预约详情</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="detail-box">
            
            <div class="detail-hd">基础信息</div>
            <div class="detail-bd">
                <el-row :gutter="10"  class="handle-box">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">联系人:</span>
                        <el-input v-model="dataDetail.contact" placeholder="联系人" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.contact}}
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">联系电话:</span>
                        <el-input v-model="dataDetail.phone" placeholder="联系电话" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.phone}}
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">品牌型号:</span>
                        <el-input v-model="dataDetail.carType" placeholder="品牌型号" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.carType}}
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">车牌号码:</span>
                        <el-input v-model="dataDetail.carNo" placeholder="车牌号码" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.carNo}}
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">上次预约时间:</span>
                        <el-input v-model="dataDetail.lastReserveTime" placeholder="上次预约时间" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.lastReserveTime}}
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">上次预约项目:</span>
                        <el-input v-model="dataDetail.lastReserveContent" placeholder="上次预约项目" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.lastReserveContent}}
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="detail-hd">基础信息</div>
            <div class="detail-bd">
                <el-row :gutter="10"  class="handle-box">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">预约时间:</span>
                        <el-input v-model="dataDetail.reserveTime" placeholder="预约时间" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.reserveTime}}
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">服务时间:</span>
                        <el-input v-model="dataDetail.serverTime" placeholder="服务时间" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.serverTime}}
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">预约项目:</span>
                        <el-input v-model="dataDetail.reserveContent" placeholder="预约项目" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.reserveContent}}
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" class="form-group">
                         <span class="form-label">预约备注:</span>
                        <el-input v-model="dataDetail.remark" placeholder="预约备注" class="form-control" v-if="isEdit"></el-input>
                        <div class="form-control" v-if="!isEdit">
                            {{dataDetail.remark}}
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="detail-footer text-center">
            <el-button type="danger" round>服务完成</el-button>
            <div class="pt10">
                <el-button type="text" @click="cancelDialogVisible = true">服务取消</el-button>
            </div>
        </div>

        <el-dialog
            title="未完成原因"
            :visible.sync="cancelDialogVisible"
            width="30%"
            center>
            <div>
                <el-radio v-model="cancelReason" label="1" border>客户未赴约</el-radio>
                <el-radio v-model="cancelReason" label="2" border>其他原因</el-radio>
            </div>
            <div class="mt10" v-if="cancelReason == 2">
                <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入原因"
                v-model="otherReason">
                </el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="cancel">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
import apis from '../../libs/api';
export default {
	data() {
		return {
			dataDetail: {},
			isEdit: false,
			cancelDialogVisible: false,
			cancelReason: 1,
			otherReason: '',
		};
	},
	created() {
		this.getDetail();
	},
	computed: {
		id() {
			return this.$route.params.id;
		},
	},
	methods: {
		getDetail() {
			apis
				.getReserveDetail(this.id)
				.then(response => {
					let res = response.data;
					if (res.code == 0) {
						this.$nextTick(() => {
							this.dataDetail = res.data;
						});
					}
				})
				.catch(err => {});
		},
		cancel() {
			this.cancelDialogVisible = false;
		},
	},
};
</script>
<style lang="scss" scoped>
.detail-box {
	padding: 20px;
	.detail-hd {
		font-size: 20px;
		padding: 30px 20px 15px;
	}
	.detail-bd {
		padding: 0 20px;
		border: 1px solid #ddd;
		border-radius: 10px;
	}
	.form-label {
		display: inline-block;
		width: 110px;
	}
	.form-control {
		width: 300px;
	}
}
</style>
