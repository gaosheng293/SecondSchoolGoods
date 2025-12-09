<!-- pages/index/index.vue -->
<template>
	<view class="page">
		<!-- 顶部胶囊安全区 -->
		<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
		<!-- 只在开发环境显示的强制退出按钮 -->
		<view v-if="true" style="margin-top: 20px; text-align: center;">
		  <button 
		    size="mini" 
		    type="warn" 
		    plain 
		    @click="forceLogout"
		    style="font-size: 12px; padding: 4px 8px;"
		  >
		    ⚠️ 强制退出登录（调试专用）
		  </button>
		</view>
		<!-- 顶部导航栏 -->
		<view class="navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
		  <view class="navbar-left">
			<!-- 大学名字 -->
			<text class="school-name">{{ profile?.university?.name || '未选择大学' }}</text>
			
			<!-- 新版切换按钮：更小、更轻量、毛玻璃半透明、位置往上靠一点 -->
			<view class="change-university-btn" @click="changeUniversity">
			  <uni-icons type="refreshempty" size="14" color="#999" />
			  <text class="btn-text">切换</text>
			</view>
		  </view> 

		  <view class="navbar-right">
			<uni-icons type="search" size="22" color="#fff" @click="toSearch" />
		  </view>
		</view>

		<!-- Swiper 轮播图 -->
		<swiper class="banner-swiper" autoplay circular indicator-dots indicator-color="#fff" indicator-active-color="#007AFF">
			<swiper-item v-for="(item, i) in banners" :key="i">
				<image :src="item" mode="aspectFill" class="banner-img" @click="onBannerClick(i)" />
			</swiper-item>
		</swiper>

		<!-- 快捷入口 -->
		<view class="quick-entries">
<!-- 			<view class="entry-item" @click="toPublish">
				<image src="/static/c1.png" class="entry-icon big" />
				<text class="entry-text">我要求</text>
			</view> -->
			<view class="entry-item" v-for="c in categories" :key="c.id" @click="toCategory(c.id)">
				<image :src="c.icon" class="entry-icon" />
				<text class="entry-text">{{ c.name }}</text>
			</view>
		</view>

		<!-- 推荐商品列表 -->
		<view class="section">
		  <view class="section-header">
			<text class="section-title">推荐闲置</text>
		  </view>

		  <view class="goods-waterfall">
			<view class="column">
			  <view v-for="item in leftGoods" :key="item.id" class="goods-card" @click="toDetail(item.id)">
				<image :src="item.cover || '/static/c1.png'" mode="aspectFill" class="goods-cover" />
				<view class="goods-info">
				  <text class="goods-title">{{ item.title }}</text>
				  <view class="goods-bottom">
					<text class="goods-price">¥{{ item.price }}</text>
					<!-- 喜欢图标和数量 -->
					<view class="goods-like" @click.stop="toggleLikeInList(item.id)">
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
			  <view v-for="item in rightGoods" :key="item.id" class="goods-card" @click="toDetail(item.id)">
				<image :src="item.cover || '/static/c1.png'" mode="aspectFill" class="goods-cover" />
				<view class="goods-info">
				  <text class="goods-title">{{ item.title }}</text>
				  <view class="goods-bottom">
					<text class="goods-price">¥{{ item.price }}</text>
					<!-- 喜欢图标和数量 -->
					<view class="goods-like" @click.stop="toggleLikeInList(item.id)">
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

		  <!-- 加载更多状态区域 -->
		  <view class="load-more" v-if="goodsList.length > 0">
			<!-- 加载中 -->
			<view v-if="loading" class="loading-text">
			  <text>加载中...</text>
			</view>
			<!-- 加载更多按钮 -->
			<view v-else-if="hasMore" class="load-more-btn" @click="loadMore">
			  <text>点击加载更多</text>
			</view>
			<!-- 没有更多 -->
			<view v-else class="no-more-text">
			  <text>没有更多了 ~</text>
			</view>
		  </view>

		  <!-- 空状态 -->
		  <view v-if="goodsList.length === 0 && !loading" class="empty">
			<image src="/static/c1.png" class="empty-img" />
			<text class="empty-text">暂无闲置商品～</text>
		  </view>
		</view>
	</view>
	<!-- 底部TabBar -->
	<!-- 自定义 tabBar（必须放在最后）-->
	<!-- <custom-tab-bar :index="0" /> -->
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
			profile: null,
			banners: [
				'/static/c1.png',
				'/static/c1.png',
				'/static/c1.png'
			],
			categories: [],
			goodsList: [],  // 原始数据
			leftGoods: [],
			rightGoods: [],
			// === 新增分页相关状态 ===
			currentPage: 1,
			pageSize: 20,
			hasMore: true,        // 是否还有更多数据
			loading: false        // 是否正在加载
		}
	},
	onLoad() {
		this.fetchProfile()
		this.fetchCategories()  // 新增：加载分类
	},
	onShow() {
		this.currentPage = 1
		this.fetchProfile()  
		this.fetchCategories()  // 刷新时也加载
	},
	onPullDownRefresh() {
	  Promise.all([
		this.fetchProfile(),
		this.fetchGoods(true),  // true 表示刷新
		this.fetchCategories()
	  ]).then(() => {
		uni.stopPullDownRefresh()
	  })
	},
	methods: {
		// 新增：从后端获取分类列表
		async fetchCategories() {
					const token = uni.getStorageSync('token')
					if (!token) return
		
					try {
						const res = await uni.request({
							url: 'http://192.168.0.105:8080/api/categories',
							header: { Authorization: 'Bearer ' + token }
						})
		
						const result = res[1] || res
						if (result?.statusCode === 200) {
							this.categories = result.data || []  // 后端返回数组 [{id:1, name:'数码', icon:'/static/c1.png'}]
						}
					} catch (e) {
						console.log('分类加载失败', e)
						// 兜底：用硬编码（防止后端出问题）
						this.categories = [
							{ id: 1, name: '数码', icon: '/static/c1.png'},
							{ id: 2, name: '服饰', icon: '/static/c2.png'},
							{ id: 3, name: '美妆', icon: '/static/c3.png'},
							{ id: 4, name: '运动', icon: '/static/c4.png'},
							{ id: 5, name: '书籍', icon: '/static/c5.png'},
							{ id: 6, name: '生活', icon: '/static/c6.png'},
							{ id: 7, name: '其他', icon: '/static/c7.png'},
							{ id: 8, name: '等等', icon: '/static/c8.png'},
						]
					}
				},
		  // 新增：强制退出登录（调试神器）
		  forceLogout() {
		    // 防止误触：再弹一个确认框
		    uni.showModal({
		      title: '强制退出登录',
		      content: '确定要清除 token 并重新登录吗？（用于调试）',
		      confirmText: '退出',
		      confirmColor: '#ff5a5f',
		      success: (res) => {
		        if (res.confirm) {
		          // 1. 清除所有本地登录痕迹
		          uni.removeStorageSync('token')
		          uni.removeStorageSync('userInfo')  // 如果你还存了其他信息
		          
		          // 2. 重置页面状态
		          this.loggedIn = false
		          this.token = ''
		          this.selectedUniversityId = ''
		          this.searchText = ''
		          this.searchResults = []
		
		          uni.showToast({
		            title: '已强制退出，将重新登录',
		            icon: 'none',
		            duration: 2000
		          })
		
		          // 3. 延迟跳转，避免 modal 和 toast 冲突
		          setTimeout(() => {
		            uni.reLaunch({
		              url: '/pages/login/login'
		            })
		          }, 800)
		        }
		      }
		    })
		  },
		async fetchProfile() {
		  const token = uni.getStorageSync('token')
		  if (!token) return (this.profile = null)

		  try {
			const res = await uni.request({
			  url: 'http://192.168.0.105:8080/api/user/profile',
			  header: { Authorization: 'Bearer ' + token }
			})

			// 万能取法：不管是 [err,res] 还是 {data} 都能拿到
			const result = res[1] || res[0] || res

			if (result?.statusCode === 200 && result?.data?.university) {
			  this.profile = result.data
			  this.fetchGoods()
			} else {
			  this.profile = null
			}
		  } catch (e) {
			this.profile = null
		  }
		},
		loadMore() {
		  if (!this.hasMore || this.loading) return
		  this.fetchGoods()  // 继续加载下一页
		},
		// 获取推荐商品（从后端 API 获取，替换模拟数据）
		async fetchGoods(refresh = false) {
		  if (this.loading) return // 防止重复点击
		  if (!refresh && !this.hasMore) return
		
		  const token = uni.getStorageSync('token')
		  const universityId = this.profile?.university?.id
		  if (!token || !universityId) {
		    uni.showToast({ title: '请先登录并选择大学', icon: 'none' })
		    return
		  }
		
		  // 如果是刷新，重置分页
		  if (refresh) {
		    this.currentPage = 1
		    this.hasMore = true
		    this.goodsList = []
		  }
		
		  this.loading = true
		  uni.showLoading({ title: '加载中...' })
		
		  try {
		    const res = await uni.request({
		      url: 'http://192.168.0.105:8080/api/goods/recommend',
		      data: {
		        universityId: universityId,
		        page: this.currentPage,
		        size: this.pageSize
		      },
		      header: { Authorization: 'Bearer ' + token }
		    })
		
		    const result = res[1] || res[0] || res
		    if (result?.statusCode === 200) {
		      const newGoods = result.data || []
		
		      // 如果是第一页或刷新，覆盖；否则追加
		      if (this.currentPage === 1) {
		        this.goodsList = newGoods
		      } else {
		        this.goodsList = [...this.goodsList, ...newGoods]
		      }
		
		      // 判断是否有更多（后端没返回总数时，用长度判断）
		      this.hasMore = newGoods.length === this.pageSize
		      this.currentPage += 1
		    } else {
		      uni.showToast({ title: '加载失败', icon: 'none' })
		      this.hasMore = false
		    }
		  } catch (e) {
		    console.error('加载商品失败', e)
		    uni.showToast({ title: '网络错误', icon: 'none' })
		    this.hasMore = false
		  } finally {
		    this.loading = false
		    uni.hideLoading()
		    this.splitWaterfall()  // 重新分割瀑布流
		  }
		},
		
		// 瀑布流分割
		splitWaterfall() {
			this.leftGoods = []
			this.rightGoods = []
			this.goodsList.forEach((item, i) => {
				if (i % 2 === 0) this.leftGoods.push(item)
				else this.rightGoods.push(item)
			})
		}, 
		
		toggleLikeInList(goodsId) {
		      const token = uni.getStorageSync('token')
		      if (!token) {
		        uni.showToast({ title: '请先登录', icon: 'none' })
		        return
		      }
		
		      const item = this.goodsList.find(g => g.id === goodsId)
		      if (!item) return
		
		      item.isLiked = !item.isLiked
		      item.likeCount += item.isLiked ? 1 : -1
		
		      uni.request({
		        url: `http://192.168.0.105:8080/api/user/like/${goodsId}`,
		        method: 'POST',
		        header: { Authorization: 'Bearer ' + token },
		        success: (res) => {
		          const result = res.data
		          if (result.ok) {
		            item.isLiked = result.isLiked
		            item.likeCount = result.likeCount
		            uni.$emit('likeUpdated', { goodsId, isLiked: item.isLiked, likeCount: item.likeCount })
		          } else {
		            item.isLiked = !item.isLiked
		            item.likeCount += item.isLiked ? 1 : -1
		          }
		        },
		        fail: () => {
		          item.isLiked = !item.isLiked
		          item.likeCount += item.isLiked ? 1 : -1
		        }
		      })
		    },


		toSearch() { uni.navigateTo({ url: '/pages/search/search' }) },
		// toPublish() { uni.navigateTo({ url: '/pages/publish/publish' }) },
		toCategory(id) { uni.navigateTo({ url: `/pages/category/category?id=${id}` }) },
		// toAllGoods() { uni.switchTab({ url: '/pages/goods/goods' }) },
		toDetail(id) { uni.navigateTo({ url: `/pages/detail/detail?id=${id}` }) },
		changeUniversity() {

		  
		  uni.navigateTo({  // 改成 navigateTo（销毁当前页）
			url: '/pages/login/login?from=change'
		  }).then(() => { 
			console.log('【index.vue】navigateTo 成功返回');
		  }).catch(err => {
			console.error('【index.vue】navigateTo 失败了！错误：', err);
		  });
		},
		onBannerClick(i) { console.log('点击了第', i + 1, '个轮播') }
	}
}
</script>

<style scoped>
.page { background: #f5f5f5; min-height: 100vh; }

/* 顶部导航 */
.navbar {
	position: fixed; top: 0; left: 0; right: 0; height: 88rpx; background: linear-gradient(135deg, #667eea, #764ba2); 
	display: flex; align-items: center; justify-content: space-between; padding: 0 32rpx; z-index: 999; color: #fff;
}
.school-name { font-size: 36rpx; font-weight: bold; max-width: 360rpx; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.change-btn { font-size: 24rpx; opacity: 0.9; margin-left: 12rpx; }
.change-university-btn {
  position: absolute;
  top: -80rpx;                        /* 正常 rpx 可以这样写 */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(12px);        /* 改成 px，微信小程序完全支持 */
  border: 1rpx solid rgba(255, 255, 255, 0.35);
  border-radius: 32rpx;
  padding: 8rpx 20rpx;
  display: flex;
  align-items: center;
  gap: 8rpx;
  font-size: 24rpx;
  color: #666;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);
  z-index: 10;
}

.change-university-btn .btn-text {
  font-weight: 500;
}

.navbar-left {
  position: relative;
  padding-top: 20rpx;
}
/* 轮播 */
.banner-swiper { height: 360rpx; }
.banner-img { width: 100%; height: 100%; }

/* 快捷入口 */
.quick-entries {
	display: flex; flex-wrap: wrap; background: #fff; padding: 32rpx 20rpx 20rpx; margin-bottom: 20rpx;
}
.entry-item { width: 25%; text-align: center; margin-bottom: 32rpx; }
.entry-icon { width: 96rpx; height: 96rpx; border-radius: 24rpx; }
.entry-icon.big { width: 124rpx; height: 124rpx; background: linear-gradient(135deg, #ff6b6b, #ee5a52); }
.entry-text { display: block; margin-top: 16rpx; font-size: 28rpx; color: #333; }

/* 推荐商品 */
.section { padding: 0 24rpx; }
.section-header { display: flex; justify-content: space-between; align-items: center; height: 88rpx; }
.section-title { font-size: 36rpx; font-weight: bold; }
.section-more { font-size: 28rpx; color: #999; }

.goods-waterfall { display: flex; }
.column { flex: 1; }
.column:first-child { margin-right: 16rpx; }

.goods-card { background: #fff; border-radius: 20rpx; overflow: hidden; margin-bottom: 24rpx; box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05); }
.goods-cover { width: 100%; height: 360rpx; }
.goods-info { padding: 16rpx; }
.goods-title { font-size: 28rpx; color: #333; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
.goods-bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 12rpx; }
.goods-price { font-size: 36rpx; color: #ff4757; font-weight: bold; }
.goods-like { font-size: 24rpx; color: #999; }

/* 空状态 */
.empty { text-align: center; padding: 120rpx 0; }
.empty-img { width: 360rpx; height: 300rpx; opacity: 0.8; }
.empty-text { color: #999; margin-top: 32rpx; font-size: 32rpx; }

.load-more {
  padding: 32rpx 0;
  text-align: center;
}

.load-more-btn {
  display: inline-block;
  padding: 16rpx 48rpx;
  background: #007AFF;
  color: #fff;
  border-radius: 50rpx;
  font-size: 28rpx;
}

.loading-text,
.no-more-text {
  color: #999;
  font-size: 28rpx;
}
</style>