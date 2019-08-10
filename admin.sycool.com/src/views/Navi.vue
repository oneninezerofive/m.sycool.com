<template>
	<el-container class="view">
		<!-- 头部 -->
		<el-header>
			<h3>欢迎使用寺库网后台管理系统</h3>
			<div>
				<span v-text="getAdmin"></span>
				<el-button class="logout" type="primary" @click="logout">退出</el-button>
			</div>
		</el-header>
		<el-container>
			<!-- 侧边导航 -->
			<el-aside width="200px">
				<el-menu :default-active="page" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
				 active-text-color="#ffd04b">
					<el-menu-item v-for="(v,i) in navitems" :key="i" :index="v.index" @click="navTo(v,page)">
						<i :class="v.icon"></i>
						<span slot="title">{{v.title}}</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<!-- main -->
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</el-container>
</template>
<script>
	export default {
		name: 'navi',
		data() {
			return {
				page: '',
				navitems: [{
					index: '1',
					title: "用户管理",
					icon: "el-icon-user",
					url: "user"
				}, {
					index: '2',
					title: "商品管理",
					icon: "el-icon-present",
					url: "goods"
				}, {
					index: '3',
					title: "订单管理",
					icon: "el-icon-shopping-cart-full",
					url: "order"
				}, 
				// {
				// 	index: '4',
				// 	title: "管理员",
				// 	icon: "el-icon-postcard",
				// 	url: "admin"
				// }
				]
			}
		},
		methods: {
			navTo(v, page) {
				if (v.index != page) {
					this.page = v.index;
					this.$router.push({
						name: v.url
					})
				}
			},
			logout() {
				sessionStorage.clear();
				this.$router.push({
					name: 'login'
				})
			}
		},
		computed: {
			getAdmin() {
				return "欢迎您，" + sessionStorage.getItem('admin')
			}
		}
	}
</script>

<style>
	.view {
		height: 100%;
	}

	.el-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #545c64;
		color: #fff;
	}
	
	.el-header .logout {
		margin-left: 30px;
	}

	.el-aside {
		background: #545c64;
	}

	.el-menu-item {
		width: 200px;
	}
</style>
