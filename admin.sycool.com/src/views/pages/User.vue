<template>
	<div class="page">
		<div class="form">
			<el-form>
				<h3>查询用户</h3>
				<el-form-item>
					<el-input v-model="uid" placeholder="请输入用户id" autofocus></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="un" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-button type="primary" @click="finduser">查询用户</el-button>
			</el-form>
			<el-form>
				<h3>添加用户</h3>
				<el-form-item>
					<el-input v-model="addun" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="password" v-model="pw" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-button type="primary" @click="adduser">添加用户</el-button>
			</el-form>
		</div>
		<el-table :data="tableData">
			<el-table-column prop="_id" label="用户id">
			</el-table-column>
			<el-table-column prop="username" label="用户名">
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
	export default {
		name: 'user',
		data() {
			return {
				uid: "",
				un: "",
				addun: "",
				pw: "",
				tableData: []
			}
		},
		methods: {
			finduser() {
				if (this.uid.length != 0 || this.un.length != 0) {
					this.$axios({
						method: 'post',
						url: this.$store.getters.baseURL + '/user/find',
						data: this.$qs.stringify({
							uid: this.uid,
							un: this.un
						})
					}).then((res) => {
						this.tableData = res.data;
					}).catch((err) => {
						console.log(err);
					})
				}
			},
			adduser() {
				if (this.addun.length != 0 && this.pw.length != 0) {
					this.$axios({
						method: 'post',
						url: this.$store.getters.baseURL + '/user/add',
						data: this.$qs.stringify({
							addun: this.addun,
							pw: this.pw
						})
					}).then((res) => {
						if(res.data.ok === 1) {
							this.$message("成功添加用户");
						}
						
					}).catch((err) => {
						console.log(err);
					})
				}
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
		width: 30%;
		margin-right: 30px;
	}

	.form>* {
		margin-bottom: 20px;
	}
</style>
