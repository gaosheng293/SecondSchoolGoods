<!-- pages/publish/history.vue -->
<template>
	<view class="my-goods-page">
		<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

		<view class="goods-grid" v-if="goodsList.length">
			<view class="goods-item" v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
				<image :src="item.cover || '/static/default-cover.png'" mode="aspectFill" class="cover" />
				<view class="item-info">
				  <text class="title">{{ item.title }}</text>
				  <text class="price">¥{{ item.price }}</text>
				  
				  <!-- 已下架标签 -->
				  <view class="status-tag" v-if="item.status === 2">
				    已下架
				  </view>
				
				  <!-- 编辑按钮：仅上架中显示 -->
				  <view class="edit-btn" v-if="item.status === 1" @click.stop="toEdit(item.id)">
				    <uni-icons type="compose" size="20" color="#007AFF" />
				    <text>编辑</text>
				  </view>
				</view>
			</view>
		</view>

		<view class="empty" v-else>
			<image src="/static/empty.png" class="empty-img" mode="widthFix" />
			<text class="empty-text">你还没有发布过商品</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: 0,
			goodsList: []
		}
	},

	onLoad() {
		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
		this.loadPublishedGoods()
	},

	methods: {
		loadPublishedGoods() {
			const token = uni.getStorageSync('token')
			if (!token) {
				uni.showToast({ title: '请先登录', icon: 'none' })
				return
			}

			uni.request({
				url: 'http://192.168.0.105:8080/api/goods/my-published',
				header: { Authorization: 'Bearer ' + token },
				success: (res) => {
					if (res.statusCode === 200 && res.data?.list) {
						this.goodsList = this.processImages(res.data.list)
					}
				}
			})
		},

		processImages(list) {
			return list.map(item => {
				if (!item.images) {
					item.images = []
				} else if (typeof item.images === 'string') {
					try { item.images = JSON.parse(item.images) }
					catch { item.images = item.images.split(',').map(s => s.trim()).filter(Boolean) }
				}
				item.cover = Array.isArray(item.images) && item.images.length
					? item.images[0]
					: '/static/default-cover.png'
				return item
			})
		},

		toDetail(id) {
			uni.redirectTo({ url: `/pages/detail/detail?id=${id}` })
		},
		
		// 在 methods 中添加
		toEdit(id) {
		  uni.redirectTo({
			url: `/pages/publish/edit?id=${id}`
		  })
		}
	}
}
</script>

<style scoped>
.my-goods-page { background: #f8f8f8; min-height: 100vh; padding: 20rpx; padding-bottom: 40rpx; }
.goods-grid { display: flex; flex-wrap: wrap; justify-content: space-between; }
.goods-item { width: calc(50% - 12rpx); background: #fff; border-radius: 20rpx; overflow: hidden; margin-bottom: 24rpx; position: relative; }
.cover { width: 100%; height: 340rpx; background: #f5f5f5; }
.item-info { padding: 16rpx; position: relative; }
.title { font-size: 26rpx; color: #333; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 8rpx; }
.price { font-size: 32rpx; color: #ff4757; font-weight: bold; }
.status-tag { position: absolute; top: 16rpx; right: 16rpx; background: rgba(0,0,0,0.6); color: #fff; font-size: 22rpx; padding: 4rpx 12rpx; border-radius: 8rpx; }
.empty { text-align: center; padding-top: 180rpx; color: #999; }
.empty-img { width: 360rpx; margin-bottom: 40rpx; }
.empty-text { font-size: 30rpx; }
.edit-btn {
  position: absolute;
  bottom: 16rpx;
  right: 16rpx;
  background: #007AFF;
  color: #fff;
  padding: 8rpx 20rpx;
  border-radius: 40rpx;
  font-size: 24rpx;
  display: flex;
  align-items: center;
  gap: 8rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,122,255,0.3);
}
</style>