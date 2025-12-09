<!-- pages/category/category.vue -->
<template>
	<view class="category-page">
		<!-- 顶部分类导航（纯动态） -->
		<scroll-view scroll-x class="tab-bar" v-if="categories.length">
			<view class="tab-item" 
				v-for="tab in categories" 
				:key="tab.id"
				:class="{ active: currentTab === tab.id }"
				@click="switchTab(tab.id)">
				{{ tab.name }}
			</view> 
		</scroll-view>

		<!-- 商品列表（瀑布流） -->
		<view class="goods-list">
			<view class="column">
				<view v-for="item in leftList" :key="item.id" class="goods-card" @click="toDetail(item.id)">
					<image :src="item.cover || defaultCover" mode="aspectFill" class="cover" />
					<view class="info">
						<text class="title">{{ item.title }}</text>
						<text class="price">¥{{ item.price }}</text>
						<view class="tags" v-if="item.isNegotiable || item.isFreeShipping">
							<text class="tag" v-if="item.isNegotiable">可刀</text>
							<text class="tag" v-if="item.isFreeShipping">包邮</text>
						</view>
					</view>
				</view>
			</view>
			<view class="column">
				<view v-for="item in rightList" :key="item.id" class="goods-card" @click="toDetail(item.id)">
					<image :src="item.cover || defaultCover" mode="aspectFill" class="cover" />
					<view class="info">
						<text class="title">{{ item.title }}</text>
						<text class="price">¥{{ item.price }}</text>
						<view class="tags" v-if="item.isNegotiable || item.isFreeShipping">
							<text class="tag" v-if="item.isNegotiable">可刀</text>
							<text class="tag" v-if="item.isFreeShipping">包邮</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 各种状态提示 -->
		<view v-if="!categories.length && !loadingCategories" class="empty">
			<text>加载分类失败，请下拉刷新</text>
		</view>

		<view v-if="categories.length && !goodsList.length && !loading && !firstLoad" class="empty">
			<image src="/static/empty.png" mode="widthFix" class="empty-img" />
			<text>该分类暂无商品~</text>
		</view>

		<view v-if="hasMore && goodsList.length > 0" class="load-more" @click="loadMore">
			加载更多
		</view>
		<view v-else-if="!hasMore && goodsList.length > 0" class="no-more">没有更多了~</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			defaultCover: 'https://img.yzcdn.cn/vant/cat.jpeg',
			
			categories: [],      // 纯动态
			currentTab: null,    // 初始为 null，加载完 categories 后再设默认选中第一个
			
			page: 1,
			size: 20,
			goodsList: [],
			leftList: [],
			rightList: [],
			
			loading: false,
			loadingCategories: false,
			hasMore: true,
			firstLoad: true
		}
	},

	onLoad(options) {
		// 如果从首页点某个分类进来，预设 id
		if (options.id) {
			this.currentTab = Number(options.id)
		}
		this.fetchCategories()
	},

	onPullDownRefresh() {
		this.page = 1
		this.goodsList = []
		Promise.all([this.fetchCategories(), this.loadGoods()]).finally(() => {
			uni.stopPullDownRefresh()
		})
	},

	onReachBottom() {
		if (this.hasMore && !this.loading) this.loadMore()
	},

	methods: {
		// 加载分类（和 index.vue 完全一致）
		async fetchCategories() {
			this.loadingCategories = true
			const token = uni.getStorageSync('token')
			if (!token) {
				this.loadingCategories = false
				return
			}

			try {
				const res = await uni.request({
					url: 'http://192.168.0.105:8080/api/categories',
					header: { Authorization: 'Bearer ' + token }
				})
				const result = res[1] || res

				if (result?.statusCode === 200 && Array.isArray(result.data)) {
					this.categories = result.data

					// 关键：如果当前没有选中任何 tab，默认选中第一个
					if (!this.currentTab && this.categories.length > 0) {
						this.currentTab = this.categories[0].id
					}

					// 如果当前选中的 tab 已经不在列表里了（比如被管理员删了），自动切到第一个
					if (this.currentTab && !this.categories.find(c => c.id === this.currentTab)) {
						this.currentTab = this.categories[0].id
					}

					// 分类加载完后立即加载对应商品
					if (this.page === 1) this.loadGoods()
				}
			} catch (e) {
				console.log('分类加载失败', e)
				uni.showToast({ title: '加载分类失败', icon: 'none' })
			} finally {
				this.loadingCategories = false
			}
		},

		switchTab(tabId) {
			if (this.currentTab === tabId) return
			this.currentTab = tabId
			this.page = 1
			this.goodsList = []
			this.hasMore = true
			this.firstLoad = true
			this.loadGoods()
		},

		async loadGoods() {
			if (this.loading || !this.currentTab) return
			this.loading = true
			if (this.page === 1) uni.showLoading({ title: '加载中...' })

			const token = uni.getStorageSync('token')
			const profile = uni.getStorageSync('profile')
			if (!token || !profile?.university?.id) {
				uni.hideLoading()
				uni.showToast({ title: '请先登录并选择大学', icon: 'none' })
				this.loading = false
				return
			}

			try {
				const res = await uni.request({
					url: 'http://192.168.0.105:8080/api/goods/category',
					data: {
						categoryId: this.currentTab,           // 直接传真实的分类 id
						universityId: profile.university.id,
						page: this.page,
						size: this.size
					},
					header: { Authorization: 'Bearer ' + token }
				})

				const result = res[1] || res
				if (result.statusCode === 200) {
					let list = result.data || []

					list.forEach(item => {
						if (item.images && typeof item.images === 'string') {
							try {
								const imgs = JSON.parse(item.images)
								item.cover = imgs[0] || item.cover
							} catch (e) {}
						}
						item.cover = item.cover || this.defaultCover
					})

					if (this.page === 1) {
						this.goodsList = list
					} else {
						this.goodsList = this.goodsList.concat(list)
					}

					this.leftList = this.goodsList.filter((_, i) => i % 2 === 0)
					this.rightList = this.goodsList.filter((_, i) => i % 2 === 1)
					this.hasMore = list.length === this.size
					this.firstLoad = false
				}
			} catch (e) {
				uni.showToast({ title: '加载商品失败', icon: 'none' })
			} finally {
				this.loading = false
				uni.hideLoading()
			}
		},

		loadMore() {
			this.page++
			this.loadGoods()
		},

		toDetail(id) {
			uni.navigateTo({ url: `/pages/detail/detail?id=${id}` })
		}
	}
}
</script>

<style scoped>
/* 样式完全不变，你原来的样式直接保留 */
.category-page { background: #f8f8f8; min-height: 100vh; padding-top: 90rpx; }
.tab-bar { position: fixed; top: 0; left: 0; right: 0; height: 90rpx; background: #fff; white-space: nowrap; z-index: 999; border-bottom: 1px solid #eee; }
.tab-item { display: inline-block; padding: 0 32rpx; height: 100%; line-height: 90rpx; font-size: 30rpx; }
.tab-item.active { color: #ff4757; position: relative; }
.tab-item.active::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 60rpx; height: 6rpx; background: #ff4757; border-radius: 3rpx; }

/* 其他样式保持不变 */
.goods-list { display: flex; padding: 20rpx 16rpx; }
.column { flex: 1; }
.column:first-child { margin-right: 16rpx; }
.goods-card { background: #fff; border-radius: 20rpx; overflow: hidden; margin-bottom: 24rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05); }
.cover { width: 100%; height: 360rpx; }
.info { padding: 16rpx; }
.title { display: block; font-size: 28rpx; color: #333; line-height: 1.4; height: 80rpx; overflow: hidden; }
.price { display: block; font-size: 36rpx; color: #ff4757; font-weight: bold; margin: 8rpx 0; }
.tags { display: flex; gap: 12rpx; }
.tag { background: #fff0f0; color: #ff4757; padding: 4rpx 12rpx; border-radius: 8rpx; font-size: 22rpx; }
.empty { text-align: center; padding: 100rpx 0; color: #999; }
.empty-img { width: 300rpx; height: 300rpx; opacity: 0.6; }
.load-more, .no-more { text-align: center; padding: 30rpx; color: #999; font-size: 28rpx; }
</style>