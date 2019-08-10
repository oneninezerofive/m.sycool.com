<template>
	<div class="login-view">
		<el-form label-position="left" label-width="auto">
			<h2>欢迎使用寺库网后台管理系统</h2>
			<el-form-item label="用户名:">
				<el-input v-model="admin" autofocus clearable></el-input>
			</el-form-item>
			<el-form-item label="密码:">
				<el-input type="password" v-model="password" clearable></el-input>
			</el-form-item>
			<el-form-item label="验证码:">
				<el-input v-model="icode" clearable>
				</el-input>
			</el-form-item>
			<div class="identcode" @click="refreshCode">
				<sidentify :identifyCode="identifyCode"></sidentify>
			</div>
			<el-button class="loginbtn" size="medium" type="primary" @click="adminLogin">
				登录
			</el-button>
		</el-form>
	</div>
</template>

<script>
	import sidentify from '@/components/identify';
	export default {
		name: 'login',
		components: {
			sidentify
		},
		data() {
			return {
				admin: '',
				password: '',
				icode: "",
				geticode: true,
				identifyCodes: "abcdefghijklmnopqrstuvwxyz1234567890",
				identifyCode: "",
			}
		},
		methods: {
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			refreshCode() {
				this.identifyCode = "";
				this.makeCode(this.identifyCodes, 4);
			},
			makeCode(o, l) {
				for (let i = 0; i < l; i++) {
					this.identifyCode += this.identifyCodes[
						this.randomNum(0, this.identifyCodes.length)
					];
				}
			},
			adminLogin() {
				if(this.identifyCode === this.icode) {
					this.$axios({
            method: 'post',
            url: this.$store.getters.baseURL + '/login/admin',
            data: this.$qs.stringify({
              admin: this.admin,
              password: this.password
            })
          }).then((res) => {
						if(res.data.status) {
							sessionStorage.setItem("isLogin", true);
							sessionStorage.setItem("admin", res.data.admin);
							this.$router.push({
								name: 'navi'
							});
						} else {
							alert("登录失败");
						}
					}).catch(function (err) {
            alert(err);
          });
				} else {
					alert("验证码错误");
				}
			}
		},
		created() {
			this.refreshCode();
		}
	}
</script>
<style>
	.login-view {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		background: #F5F5F5;
		align-items: center;
	}

	h2 {
		margin-bottom: 20px;
		text-align: center;
	}

	.el-input-group__append {
		margin: 0;
		padding: 0;
		border: 0;
	}

	.el-button:first-child {
		margin: 0 !important;
		padding: 0;
		border: 0;
	}

	.el-button:first-child span {
		display: inline-block;
		font-size: 0;
	}

	.s-canvas {
		margin-bottom: 20px;
		height: 38px;
	}

	#s-canvas {
		cursor: pointer;
	}

	.loginbtn {
		width: 100%;
	}
</style>
