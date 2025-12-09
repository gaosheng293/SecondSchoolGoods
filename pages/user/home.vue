<!-- pages/user/home.vue -->
<template>
	<view class="user-home-page">
		<!-- 顶部状态栏占位 -->
		<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

		<!-- 用户信息卡片 -->
		<view class="user-card">
			<image :src="userInfo.avatar || '/static/default-avatar.png'" class="avatar" mode="aspectFill" />
			<view class="info">
				<text class="nickname">{{ userInfo.nickname || '匿名用户' }}</text>
				<text class="school">{{ userInfo.universityName || '暂未设置学校' }}</text>
				<view class="stats">
					<view class="stat-item">
						<text class="num">{{ userInfo.goodsCount || 0 }}</text>
						<text class="label">商品</text>
					</view>
				</view>
			</view>

		</view>

		<!-- Tab 切换 -->
		<view class="tabs">
			<view class="tab-item" :class="{ active: activeTab === 0 }" @click="activeTab = 0">
				淘的宝贝（{{ goodsList.length }}）
			</view>
			<view class="tab-item" :class="{ active: activeTab === 1 }" @click="activeTab = 1">
				我喜欢的（{{ likeList.length }}）
			</view>
		</view>

		<!-- 商品列表（网格） -->
		<view class="goods-grid" v-if="showList.length">
			<view class="goods-item" v-for="item in showList" :key="item.id" @click="toDetail(item.id)">
				<image :src="item.cover || item.images[0]" mode="aspectFill" class="cover" />
				<view class="item-info">
					<text class="title">{{ item.title }}</text>
					<text class="price">¥{{ item.price }}</text>
				</view>
			</view>
		</view>

		<!-- 空状态 -->
		<view class="empty" v-else>
			<image src="/static/empty.png" class="empty-img" mode="widthFix" />
			<text class="empty-text">{{ activeTab === 0 ? 'Ta 还没有发布商品哦~' : 'Ta 还没有喜欢的商品' }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userId: 0,              // 目标用户 id
			isMyself: false,        // 是否是自己的主页
			hasLogin: false,        // 当前是否已登录
			statusBarHeight: 0,
			activeTab: 0,           // 0=发布的商品 1=喜欢的商品

			userInfo: {},           // 用户信息
			goodsList: [],          // 发布的商品
			likeList: []            // 喜欢的商品
		}
	},

	computed: {
		showList() {
			return this.activeTab === 0 ? this.goodsList : this.likeList
		}
	},

	onLoad(options) {
		this.userId = Number(options.userId) || 0
		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
		
		const token = uni.getStorageSync('token')
		this.hasLogin = !!token
		
		// 判断是不是自己
		if (token) {
			const myInfo = uni.getStorageSync('userInfo') || {}
			this.isMyself = myInfo.id === this.userId
		}

		this.loadUserInfo()
		this.loadGoods()
		this.loadLikes()
	},

	methods: {
		// 加载用户信息
		async loadUserInfo() {
			const token = uni.getStorageSync('token')
			uni.request({
				url: `http://192.168.0.105:8080/api/user/info/${this.userId}`,
				header: token ? { Authorization: 'Bearer ' + token } : {},
				success: (res) => {
					if (res.statusCode === 200 && res.data) {
						this.userInfo = res.data
					}
				}
			})
		},

		// 加载发布的商品
		async loadGoods() {
		    uni.request({
		        url: `http://192.168.0.105:8080/api/user/goods/${this.userId}`,
		        success: (res) => {
		            if (res.statusCode === 200 && res.data?.list) {
		                let list = res.data.list
		                list.forEach(item => {
		                    // 关键修复：防止 images 是 null
		                    if (item.images === null || item.images === undefined) {
		                        item.images = []
		                    } else if (typeof item.images === 'string') {
		                        try {
		                            item.images = JSON.parse(item.images)
		                        } catch {
		                            item.images = item.images.split(',').map(s => s.trim()).filter(Boolean)
		                        }
		                    }
		                    // 确保是数组后再取第一张
		                    item.cover = Array.isArray(item.images) && item.images.length > 0 
		                        ? item.images[0] 
		                        : '/static/default-cover.png'  // 建议准备一张默认图
		                })
		                this.goodsList = list
		            }
		        }
		    })
		},
		
		// 加载喜欢的商品（同理）
		async loadLikes() {
		    if (!this.hasLogin && !this.isMyself) {
		        this.likeList = []
		        return
		    }
		
		    const token = uni.getStorageSync('token')
		    uni.request({
		        url: `http://192.168.0.105:8080/api/user/likes/${this.userId}`,
		        header: { Authorization: 'Bearer ' + token },
		        success: (res) => {
		            if (res.statusCode === 200 && res.data?.list) {
		                let list = res.data.list
		                list.forEach(item => {
		                    if (item.images === null || item.images === undefined) {
		                        item.images = []
		                    } else if (typeof item.images === 'string') {
		                        try {
		                            item.images = JSON.parse(item.images)
		                        } catch {
		                            item.images = item.images.split(',').map(s => s.trim()).filter(Boolean)
		                        }
		                    }
		                    item.cover = Array.isArray(item.images) && item.images.length > 0 
		                        ? item.images[0] 
		                        : '/static/default-cover.png'
		                })
		                this.likeList = list
		            }
		        }
		    })
		},


		toDetail(id) {
			uni.redirectTo({
				url: `/pages/detail/detail?id=${id}`
			})
		}
	}
}
</script>

<style scoped>
.user-home-page { background: #f8f8f8; min-height: 100vh; padding-bottom: 40rpx; }

.user-card {
	background: #fff; padding: 60rpx 32rpx; display: flex; align-items: center;
	position: relative;
}
.avatar { width: 160rpx; height: 160rpx; border-radius: 50%; margin-right: 32rpx; }
.info { flex: 1; }
.nickname { font-size: 40rpx; font-weight: bold; color: #333; }
.school { font-size: 28rpx; color: #999; margin-top: 12rpx; display: block; }
.stats { display: flex; margin-top: 32rpx; }
.stat-item { text-align: center; margin-right: 60rpx; }
.stat-item .num { font-size: 36rpx; font-weight: bold; color: #333; display: block; }
.stat-item .label { font-size: 24rpx; color: #999; }

.follow-btn {
	position: absolute; right: 32rpx; top: 50%; transform: translateY(-50%);
	height: 64rpx; line-height: 64rpx; padding: 0 32rpx;
	border-radius: 64rpx; font-size: 28rpx;
	background: #ff4757; color: #fff;
}
.follow-btn.followed {
	background: #eee; color: #666;
}

.tabs {
	display: flex; background: #fff; margin-top: 20rpx;
}
.tab-item {
	flex: 1; text-align: center; padding: 32rpx 0; font-size: 32rpx; color: #666;
	position: relative;
}
.tab-item.active {
	color: #ff4757; font-weight: bold;
}
.tab-item.active::after {
	content: ''; position: absolute; bottom: 0; left: 50%;
	transform: translateX(-50%); width: 80rpx; height: 6rpx;
	background: #ff4757; border-radius: 3rpx;
}

.goods-grid {
	display: flex; flex-wrap: wrap; padding: 20rpx;
}
.goods-item {
	width: calc(50% - 12rpx); background: #fff; border-radius: 20rpx;
	overflow: hidden; margin: 12rpx 6rpx;
}
.cover { width: 100%; height: 340rpx; }
.item-info { padding: 16rpx; }
.item-info .title {
	font-size: 26rpx; color: #333; display: -webkit-box;
	-webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
	margin-bottom: 8rpx;
}
.item-info .price { font-size: 32rpx; color: #ff4757; font-weight: bold; }

.empty { text-align: center; padding-top: 160rpx; color: #999; }
.empty-img { width: 360rpx; }
.empty-text { display: block; margin-top: 40rpx; font-size: 30rpx; }
</style>