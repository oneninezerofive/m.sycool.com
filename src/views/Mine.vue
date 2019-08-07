<template>
	<div class="mine-view">
		<!-- 导航栏 -->
		<van-nav-bar title="我的寺库" left-text="返回" left-arrow @click-left="onClickLeft">
			<van-icon name="close" slot="right" @click="logout" />
		</van-nav-bar>
		<!-- 分组1 -->
		<van-cell-group>
			<van-cell title="账户" icon="manager-o" :value="getname" is-link />
			<van-cell title="订单" icon="orders-o" is-link />
			<van-cell title="红包, 优惠券" icon="balance-o" is-link />
		</van-cell-group>
		<!-- 分组2 -->
		<van-cell-group>
			<van-cell title="我的竞拍" icon="aim" is-link />
			<van-cell title="我的拍卖券" icon="gift-card-o" is-link />
		</van-cell-group>
		<!-- 分组3 -->
		<van-cell-group>
			<van-cell title="关于寺库" icon="warning-o" is-link />
			<van-cell title="营业执照" icon="newspaper-o" is-link />
			<van-cell title="管理制度" icon="cluster-o" is-link />
			<van-cell title="在线客服" icon="service-o" is-link />
			<van-cell title="客服热线" icon="phone-o" value="400 875 6789" is-link />
			<van-cell title="海外站购买说明" icon="info-o" is-link />
		</van-cell-group>
		<ul class="other-link">
			<li @click="gohome">
				<van-icon name="shop-o" />
				<p>主页</p>
			</li>
			<li @click="gocar">
				<van-icon name="cart-o" />
				<p>购物袋</p>
			</li>
			<li>
				<van-icon name="user-o" />
				<p>我的寺库</p>
			</li>
		</ul>
		<footer class="footer">
			<p>北京寺库商贸有限公司 联系电话：400 875 6789</p>
			<p>地址：北京市东城区朝阳门内大街银河SOHO C座15层</p>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "mine",
		data() {
			return {
				username: ""
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			logout() {
				window.sessionStorage.clear();
				window.localStorage.clear();
				this.$router.push({
					name: 'login'
				})
			},
			gohome() {
				this.$router.push({
					name: 'home0'
				})
			},
			gocar() {
				this.$router.push({
					name: 'home3'
				})
			}
		},
		computed: {
			getname() {
				return sessionStorage.getItem('username');
			}
		}
	}
</script>

<style>
	.mine-view {
		background: #f5f5f5;
	}

	.van-icon-close {
		font-size: 22px;
	}

	.van-cell-group,
	.van-nav-bar {
		margin-bottom: 16px;
	}

	.other-link {
		display: flex;
		justify-content: space-around;
	}

	.other-link li {
		box-sizing: border-box;
		width: 80px;
		height: 70px;
		padding-top: 10px;
		border: 1px solid #ddd;
		background: white;
		text-align: center;
	}

	.other-link li .van-icon {
		font-size: 30px;
	}

	.other-link li p {
		font-size: 14px;
	}

	.footer {
		margin-top: 10px;
		border-top: 1px solid #eee;
		text-align: center;
	}

	.footer p {
		margin-top: 5px;
	}
</style>
