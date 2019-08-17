<template>
	<!-- 购物车结算 -->
	<div>
		<!-- 头部导航栏 -->
		<van-nav-bar title="购物袋" left-text right-text="编辑" left-arrow @click-left="onClickLeft" @click-right="onClickRight"
		 :fixed="true" />
		<!-- 商品数据(无数据状态) -->
		<div class="list" v-show="!bool">
			<div class="list_k">
				<img src="//mstatic.secooimg.com/m_secoo/v1/shoppingCart/static/img/empty.28506d5.jpg" alt />
			</div>
			<p>千万好物等待您的挑选</p>
		</div>
		<div class="goodsbox" v-for="(v, i) in this.mycar" :key="i" :name="v">
			<van-card :num="v.number" :price="v.currentPrice" :desc="v.gName" :title="v.gName" :thumb="v.imgSrc[0]">
				<div slot="footer">
					<van-button size="mini">-</van-button>
					<van-button size="mini">+</van-button>
					<van-button size="mini" @click="delorder(v._id)">删除</van-button>
				</div>
			</van-card>
		</div>
		<!-- 底部结算 -->
		<van-submit-bar :price="totalPrice" button-text="去结算" @submit="onSubmit" v-show="bool">
			<van-checkbox style="margin-left:10px" v-model="allChecked">全选</van-checkbox>
		</van-submit-bar>

		<!-- 猜你喜欢 -->
		<div class="mylike">
			<h2>猜你喜欢</h2>
			<ul>
				<li v-for="(item,index) in mylike" :key="index" :data-id="item._id" @click="golist(item._id)">
					<div class="mylike_img">
						<img :src="item.imgSrc[0]" alt />
					</div>
					<div class="mylike_font">
						<p class="title" v-text="item.gName"></p>
						<p class="price">
							<span class="d_price" v-text="`￥${item.currentPrice}`"></span>
							<span class="d_icon">会员价</span>
						</p>
						<p class="del_price" v-text="`￥${item.currentPrice}`"></p>
						<p class="name">自营</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				mylike: [],
				mycar: [],
				totalPrice: 0,
				bool: false,
				allChecked: true
			}
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {},
			onSubmit() {},
			golist(id) {
				this.$router.push({
					name: 'detapages',
					params: {
						id: id
					}
				})
			},
			async delorder(oid) {
				let res = await this.$axios("http://10.3.132.244:12345/cart/del?oid=" + oid);
				this.$router.push({
					name: 'home3'
				})
			}
		},
		async created() {
			//购物车信息
			let uid = sessionStorage.getItem("uid");
			let mycar = await this.$axios('http://10.3.132.244:12345/cart?uid=' + uid);
			this.mycar = mycar.data;
			if (this.mycar.length != 0) {
				this.bool = true;
			}
			//猜你喜欢数据
			let mylike = await this.$axios('http://10.3.132.244:12345/goods/type?type=单肩包&skip=0');
			this.mylike = mylike.data;
		}
	}
</script>
<style scoped src="../css/shoppingbag.css" />
