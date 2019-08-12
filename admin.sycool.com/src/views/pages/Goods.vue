<template>
	<div class="page">
		<div class="form">
			<el-form>
				<h3>查询商品</h3>
				<el-form-item>
					<el-input v-model="find.gid" placeholder="请输入商品id" autofocus></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="find.gn" placeholder="请输入商品名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="find.type" placeholder="请输入商品种类"></el-input>
				</el-form-item>
				<el-button type="primary" @click="findgoods">确定</el-button>
			</el-form>
			<el-form>
				<h3>添加商品</h3>
				<el-form-item>
					<el-input v-model="add.gn" placeholder="请输入商品名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="add.price" placeholder="请输入价格"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="add.type" placeholder="请输入类型"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="add.attr" placeholder="请输入商品信息, 以 ; 隔开"></el-input>
				</el-form-item>
				<el-button type="primary" @click="addgoods">确定</el-button>
			</el-form>
		</div>
		<div class="showgoods">
			<el-table :data="goods">
				<el-table-column prop="_id" label="商品id">
				</el-table-column>
				<el-table-column prop="gName" label="商品名">
				</el-table-column>
				<el-table-column prop="currentPrice" label="价格">
				</el-table-column>
				<el-table-column prop="gAttr" label="信息">
				</el-table-column>
				<el-table-column prop="type" label="类型">
				</el-table-column>
				<el-table-column prop="imgSrc" label="图片">
					<template slot-scope="scope">
						<el-image :src="scope.row.imgSrc" fit="contain"></el-image>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination @current-change="handleCurrentChange" :current-page.sync="skip" :page-size="10" layout="prev, pager, next, jumper"
			 :total="400">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'goods',
		data() {
			return {
				find: {
					gid: '',
					gn: '',
					type: ''
				},
				add: {
					gn: '',
					price: '',
					attr: '',
					type: ''
				},
				skip: 1,
				goods: []
			}
		},
		methods: {
			findgoods() {
				this.$axios({
					url: this.$store.getters.baseURL + '/goods/adminfind',
					params: {
						_id: this.find.gid,
						gName: this.find.gn,
						type: this.find.type,
						skip: this.skip
					}
				}).then((res) => {
					console.log(res);
					this.goods = res.data;
				}).catch((err) => {
					console.log(err);
				});
			},
			addgoods() {

			},
			handleCurrentChange(val) {
				this.skip = Number(val);
				this.$axios({
					url: this.$store.getters.baseURL + '/goods/adminfind',
					params: {
						_id: this.find.gid,
						gName: this.find.gn,
						type: this.find.type,
						skip: this.skip
					}
				}).then((res) => {
					console.log(res);
					this.goods = res.data;
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

<style>
	.page {
		width: 100%;
		height: 100%;
		display: flex;
	}

	h3 {
		margin: 0 0 10px 20px;
	}

	.form {
		box-sizing: border-box;
		width: 30%;
		margin-right: 20px;
	}

	.form>* {
		margin-bottom: 20px;
	}

	.showgoods {
		width: 70%;
		max-height: 660px;
		overflow-y: auto;
	}
	
	.el-table {
		margin-bottom: 32px;
	}
	
	.el-pagination {
		text-align: center;
	}
</style>
