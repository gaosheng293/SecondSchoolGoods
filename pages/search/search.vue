<template>
	<view class="page">
		<!-- 顶部安全区 -->
		<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

		<!-- 搜索导航栏 -->
		<view class="navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
			<view class="search-bar" @tap="focusInput">
				<uni-icons type="search" size="18" color="#999" />
				<input 
					v-model="keyword" 
					placeholder="搜索商品标题、描述..." 
					placeholder-class="placeholder"
					confirm-type="search"
					@confirm="doSearch"
					@input="onInput"
					:focus="autoFocus"
				/>
				<text v-if="keyword" class="clear-btn" @tap.stop="clearKeyword">×</text>
			</view>
			<text class="cancel-btn" @tap="goBack">取消</text>
		</view>

		<!-- 搜索历史 & 热门搜索 -->
		<view class="history-section" v-if="!showResult">
			<view class="section-title">
				<text>搜索历史</text>
				<uni-icons v-if="history.length" type="trash" size="20" color="#999" @tap="clearHistory" />
			</view>
			<view class="tags">
				<view 
					class="tag" 
					v-for="(item, i) in history" 
					:key="i"
					@tap="searchWithKeyword(item)"
				>{{ item }}</view>
			</view>

			<view class="section-title" style="margin-top: 40rpx;">
				<text>热门搜索</text>
			</view>
			<view class="tags">
				<view 
					class="tag hot" 
					v-for="(item, i) in hotKeywords" 
					:key="i"
					@tap="searchWithKeyword(item)"
				>{{ item }}</view>
			</view>
		</view>

		<!-- 搜索结果（瀑布流） -->
		<view class="result-section" v-else>
			<view class="goods-waterfall">
				<view class="column">
					<view v-for="item in leftGoods" :key="item.id" class="goods-card" @tap="toDetail(item.id)">
						<image :src="item.cover || '/static/c1.png'" mode="aspectFill" class="goods-cover" />
						<view class="goods-info">
							<text class="goods-title">{{ item.title }}</text>
							<view class="goods-bottom">
								<text class="goods-price">¥{{ item.price }}</text>
								<view class="goods-like" @tap.stop="toggleLike(item.id)">
									<uni-icons 
										:type="item.isLiked ? 'heart-filled' : 'heart'" 
										:color="item.isLiked ? '#ff4757' : '#999'" 
										size="20" 
									/>
									<text>{{ item.likeCount || 0 }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="column">
					<view v-for="item in rightGoods" :key="item.id" class="goods-card" @tap="toDetail(item.id)">
						<image :src="item.cover || '/static/c1.png'" mode="aspectFill" class="goods-cover" />
						<view class="goods-info">
							<text class="goods-title">{{ item.title }}</text>
							<view class="goods-bottom">
								<text class="goods-price">¥{{ item.price }}</text>
								<view class="goods-like" @tap.stop="toggleLike(item.id)">
									<uni-icons 
										:type="item.isLiked ? 'heart-filled' : 'heart'" 
										:color="item.isLiked ? '#ff4757' : '#999'" 
										size="20" 
									/>
									<text>{{ item.likeCount || 0 }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 加载状态 -->
			<view class="load-more" v-if="resultList.length > 0">
				<view v-if="loading" class="loading-text">加载中...</view>
				<view v-else-if="hasMore" class="load-more-btn" @tap="loadMore">点击加载更多</view>
				<view v-else class="no-more-text">没有更多了 ~</view>
			</view>

			<!-- 空状态 -->
			<view v-if="resultList.length === 0 && !loading && searched" class="empty">
				<image src="/static/c1.png" class="empty-img" />
				<text class="empty-text">未找到相关商品～</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
			keyword: '',
			autoFocus: true,           // 进入页面自动聚焦
			history: [],               // 搜索历史（本地存储）
			hotKeywords: ['AirPods', 'Switch', '机械键盘', '韩都衣舍', '九成新自行车', '考研资料'],
			showResult: false,         // 是否显示搜索结果
			searched: false,           // 是否已执行过搜索（用于空状态判断）

			// 搜索结果分页
			resultList: [],
			leftGoods: [],
			rightGoods: [],
			currentPage: 1,
			pageSize: 20,
			hasMore: true,
			loading: false
		}
	},
	onLoad() {
		// 读取本地搜索历史
		const h = uni.getStorageSync('searchHistory') || []
		this.history = h.slice(0, 10)  // 最多保留10条
	},
	methods: {
		// 返回上一页
		goBack() {
			uni.navigateBack()
		},
		focusInput() {
			this.autoFocus = true
		},
		clearKeyword() {
			this.keyword = ''
			this.showResult = false
			this.searched = false
		},
		onInput(e) {
			// 输入时实时搜索（可改成防抖）
			if (!this.keyword.trim()) {
				this.showResult = false
				this.searched = false
			}
		},
		// 保存搜索历史
		saveHistory(kw) {
			if (!kw.trim()) return
			let list = this.history.filter(v => v !== kw)
			list.unshift(kw)
			this.history = list.slice(0, 10)
			uni.setStorageSync('searchHistory', this.history)
		},
		// 清空历史
		clearHistory() {
			uni.showModal({
				title: '清空搜索历史',
				content: '确定要清空吗？',
				success: res => {
					if (res.confirm) {
						this.history = []
						uni.removeStorageSync('searchHistory')
					}
				}
			})
		},
		// 直接点标签搜索
		searchWithKeyword(kw) {
			this.keyword = kw
			this.doSearch()
		},
		// 执行搜索
		async doSearch() {
			const kw = this.keyword.trim()
			if (!kw) return uni.showToast({ title: '请输入关键词', icon: 'none' })

			this.saveHistory(kw)

			this.currentPage = 1
			this.resultList = []
			this.hasMore = true
			this.showResult = true
			this.searched = true

			await this.fetchSearchResult(true)
		},
		// 加载更多
		async loadMore() {
			if (this.loading || !this.hasMore) return
			await this.fetchSearchResult()
		},
		// 实际请求后端搜索接口
		async fetchSearchResult(refresh = false) {
			if (this.loading) return
			this.loading = true
			uni.showLoading({ title: '搜索中...' })

			const token = uni.getStorageSync('token')
			const profile = uni.getStorageSync('profile')
			if (!token || !profile?.university?.id) {
				uni.hideLoading()
				uni.showToast({ title: '请先登录并选择大学', icon: 'none' })
				this.loading = false
				return
			}
			const universityId = profile.university.id

			try {
				const res = await uni.request({
					url: 'http://192.168.0.105:8080/api/goods/search',
					method: 'POST',
					header: { Authorization: token ? 'Bearer ' + token : '' },
					data: {
						keyword: this.keyword.trim(),
						universityId,
						page: this.currentPage,
						size: this.pageSize
					}
				})

				const result = res[1] || res[0] || res
				if (result?.statusCode === 200) {
					const list = result.data || []
					if (refresh || this.currentPage === 1) {
						this.resultList = list
					} else {
						this.resultList = [...this.resultList, ...list]
					}
					this.hasMore = list.length === this.pageSize
					this.currentPage += 1
				} else {
					this.hasMore = false
				}
			} catch (e) {
				console.error(e)
				uni.showToast({ title: '搜索失败', icon: 'none' })
				this.hasMore = false
			} finally {
				this.loading = false
				uni.hideLoading()
				this.splitWaterfall()
			}
		},
		// 瀑布流分割（和首页一模一样）
		splitWaterfall() {
			this.leftGoods = []
			this.rightGoods = []
			this.resultList.forEach((item, i) => {
				if (i % 2 === 0) this.leftGoods.push(item)
				else this.rightGoods.push(item)
			})
		},
		// 点赞（和首页逻辑一致）
		toggleLike(goodsId) {
			const token = uni.getStorageSync('token')
			if (!token) return uni.showToast({ title: '请先登录', icon: 'none' })

			const item = this.resultList.find(g => g.id === goodsId)
			if (!item) return

			const oldLiked = item.isLiked
			const oldCount = item.likeCount

			item.isLiked = !oldLiked
			item.likeCount += item.isLiked ? 1 : -1

			uni.request({
				url: `http://192.168.0.105:8080/api/user/like/${goodsId}`,
				method: 'POST',
				header: { Authorization: 'Bearer ' + token },
				success: res => {
					const r = res.data
					if (!r.ok) {
						item.isLiked = oldLiked
						item.likeCount = oldCount
					} else {
						item.isLiked = r.isLiked
						item.likeCount = r.likeCount
					}
				},
				fail: () => {
					item.isLiked = oldLiked
					item.likeCount = oldCount
				}
			})
		},
		toDetail(id) {
			uni.navigateTo({ url: `/pages/detail/detail?id=${id}` })
		}
	}
}
</script>

<style lang="scss" scoped>
.page { background: #f5f5f5; min-height: 100vh; }

/* 导航栏 */
.navbar {
	position: fixed; top: 0; left: 0; right: 0; height: 88rpx; 
	background: linear-gradient(135deg, #667eea, #764ba2);
	display: flex; align-items: center; justify-content: space-between; 
	padding: 0 32rpx; z-index: 999; color: #fff;
}
.search-bar {
	flex: 1; height: 68rpx; background: rgba(255,255,255,0.25);
	backdrop-filter: blur(10px); border-radius: 34rpx; padding: 0 24rpx;
	display: flex; align-items: center; margin-right: 24rpx;
}
.search-bar input {
	flex: 1; margin-left: 12rpx; font-size: 28rpx; color: #fff;
	background: transparent;
}
.placeholder { color: #ddd; }
.clear-btn { font-size: 40rpx; color: #ddd; }
.cancel-btn { font-size: 32rpx; }

/* 历史 & 热门 */
.history-section { padding: 32rpx 32rpx 0; }
.section-title {
	display: flex; justify-content: space-between; align-items: center;
	font-size: 32rpx; font-weight: bold; color: #333; margin-bottom: 24rpx;
}
.tags { display: flex; flex-wrap: wrap; gap: 20rpx; }
.tag {
	padding: 12rpx 28rpx; background: #f8f8f8; border-radius: 40rpx;
	font-size: 28rpx; color: #666;
}
.tag.hot { background: #ffeaea; color: #ff4757; }

/* 搜索结果商品样式（复用首页） */
.result-section { padding: 24rpx 24rpx 0; }
.goods-waterfall { display: flex; }
.column { flex: 1; }
.column:first-child { margin-right: 16rpx; }
.goods-card { background: #fff; border-radius: 20rpx; overflow: hidden; margin-bottom: 24rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05); }
.goods-cover { width: 100%; height: 360rpx; }
.goods-info { padding: 16rpx; }
.goods-title { font-size: 28rpx; color: #333; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
.goods-bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 12rpx; }
.goods-price { font-size: 36rpx; color: #ff4757; font-weight: bold; }
.goods-like { display: flex; align-items: center; gap: 8rpx; font-size: 24rpx; color: #999; }

/* 加载更多 & 空状态（和首页一致） */
.load-more { padding: 40rpx 0; text-align: center; }
.load-more-btn { display: inline-block; padding: 16rpx 48rpx; background: #007AFF; color: #fff; border-radius: 50rpx; font-size: 28rpx; }
.loading-text, .no-more-text { color: #999; font-size: 28rpx; }

.empty { text-align: center; padding: 160rpx 0; }
.empty-img { width: 360rpx; height: 300rpx; opacity: 0.8; }
.empty-text { color: #999; margin-top: 32rpx; font-size: 32rpx; }
</style>