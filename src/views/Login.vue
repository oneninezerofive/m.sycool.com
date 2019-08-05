<template>
	<div class="login-view">
		<!-- 导航栏 -->
		<van-nav-bar title="账号密码登录" left-arrow @click-left="onClickLeft" />
		<!-- 表单 -->
		<van-cell-group>
			<van-field v-model="username" placeholder="手机号/用户名/邮箱" />
			<van-field v-model="password" type="password" placeholder="密码" />
			<van-field v-model="icode" placeholder="图形验证码" />
			<div class="code" @click="refreshCode">
				<sidentify :identifyCode="identifyCode"></sidentify>
			</div>
			</van-field>
		</van-cell-group>
		<van-button type="primary" size="large" @click="userlogin">登录</van-button>
		<div class="plus-options">
			<span @click="change">短信快捷登录</span>
			<span>忘记密码</span>
		</div>
		<div class="third-party">
			<div><img src="@/assets/icon_okvc34he0lr/wechat.png" alt=""><p>微信登录</p></div>
			<div><img src="@/assets/icon_okvc34he0lr/qq.png" alt=""><p>QQ登录</p></div>
			<div><img src="@/assets/icon_okvc34he0lr/baidu.png" alt=""><p>百度登录</p></div>
		</div>
	</div>
</template>

<script>
	import sidentify from '@/components/identify';
	export default {
		name: "login",
		components: {
			sidentify
		},
		data() {
			return {
				username: "",
				password: "",
				icode: "",
				identifyCodes: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
				identifyCode: ""
			};
		},
		methods: {
			onClickLeft() {
				Toast('返回');
			},
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
				// console.log(this.identifyCode);
			},
			userlogin() {
				
			},
			change() {
				
			}
		},
		mounted() {
			this.identifyCode = "";
			this.makeCode(this.identifyCodes, 4);
		},
	}
</script>

<style>
	.van-nav-bar {
		margin-bottom: 75px;
	}

	.code {
		position: absolute;
		right: 10px;
		top: 90px;
		width: 112px;
		height: 38px;
		border: 1px solid red;
	}

	.van-button--primary {
		background: #1a191e;
		color: white;
	}

	.van-button--large {
		width: 300px;
		margin: 10px;
	}

	.plus-options {
		display: flex;
		justify-content: space-between;
	}

	.plus-options>span {
		display: block;
		margin: 0 20px 0 20px;
		font-size: 12px;
	}
	
	.third-party {
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	
	.third-party div img{
		width: 30px;
		height: 30px;
		margin: 0 auto;
	} 
</style>
