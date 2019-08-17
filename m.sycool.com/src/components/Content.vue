<template>
	<div style="background:#fff">
		<!-- 头部搜索 -->
		<form action="/">
			<van-search v-model="value" placeholder="请输入搜索关键词" show-action @cancel="onCancel" />
		</form>

		<!-- 下拉菜单 -->

		<van-dropdown-menu style="margin-top:1.44rem">
			<van-dropdown-item v-model="value1" :options="option1" />
			<div class="van-dropdown-menu__item box1">销量</div>
			<div class="van-dropdown-menu__item box2">新品</div>
			<div class="van-dropdown-menu__item box3">折扣</div>
		</van-dropdown-menu>


		<!-- 内容区域 -->
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getShoplist">
			<div class="list_box">
				<ul>
					<li v-for="(item,index) in list" :key="index" :data-id="item._id" @click="jumpParticulars(item._id)">
						<div class="list_img">
							<img :src="item.imgSrc[0]" alt />
						</div>
						<div class="list_data">
							<p class="title"></p>
							<p class="font" v-text="item.gName"></p>
							<p class="price">
								<span class="price_peice" v-text="`￥${item.currentPrice}`">2213</span>
								<span class="price_icon">会员价</span>

							</p>
							<p class="del_price" v-text="`￥${item.currentPrice}`">132</p>
							<p class="name">自营</p>
						</div>
					</li>
				</ul>
			</div>
		</van-list>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				value: "",
				value1: 0,
				value2: "a",
				option1: [{
					text: "综合",
					value: 0
				}, {
					text: "新款商品",
					value: 1
				}],
				selected: true,

				list: [],
				loading: false,
				finished: false,
				num: 1
			};
		},
		methods: {
			//取消触发
			onCancel() {
				this.$router.go(-1)
			},
			jumpParticulars(id) {
				this.$router.push({
					name: "detapages",
					params: {
						id: id
					}
				});
			},
			async getShoplist() {
				if (this.$route.params.cla == "2") {
					//分类->品牌选项

					let list = await this.$axios.get(
						"http://10.3.132.244:12345/goods/brand?gName=" + this.$route.params.name + "&skip=" + this.num
					);
					this.list = [...this.list, ...list.data]
					this.loading = false;
				} else if (this.$route.params.cla == '1') {
					//分类->分类选项

					let classify = await this.$axios('http://10.3.132.244:12345/goods/type?type=' + this.$route.params.name +
						"&skip=" + this.num);
					this.list = [...this.list, ...classify.data];
					this.loading = false;
				}
				this.num++;
				if (this.list.length >= 50) {
					this.finished = true;
				}
			}
		},
		created() {

		}
	};
</script>

<style scoped src="../css/content.css"></style>
