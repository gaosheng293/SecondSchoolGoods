<!-- pages/detail/detail.vue -->
<template>
	<view class="detail-page">
		<!-- 顶部状态栏占位 -->
		<view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

		<!-- 商品轮播图 -->
		<swiper class="goods-swiper" :indicator-dots="true" :autoplay="true" :interval="4000" :duration="500">
			<swiper-item v-for="(img, i) in goods.images" :key="i">
				<image :src="img" mode="aspectFill" class="swiper-img" @click="previewImage(i)" />
			</swiper-item>
		</swiper> 

		<!-- 商品基本信息 -->
		<view class="goods-base">
			<view class="price-row">
				<text class="price">¥{{ goods.price }}</text>
				<text class="origin-price" v-if="goods.originalPrice">¥{{ goods.originalPrice }}</text>
			</view>
			<view class="title">{{ goods.title }}</view>
			<view class="info-row">
				<text class="tag">全新</text>
				<text class="tag" v-if="goods.isNegotiable">可小刀</text>
				<text class="tag" v-if="goods.isFreeShipping">包邮</text>
				<text class="view-count">浏览 {{ goods.viewCount || 0 }}</text>
			</view>
		</view>

		<!-- 卖家信息 -->
		<view class="seller-card" @click="toUserHome(goods.userId)">
			<image :src="goods.avatar || '/static/default-avatar.png'" class="avatar" />
			<view class="seller-info">
				<text class="nickname">{{ goods.nickname || '匿名用户' }}</text>
				<text class="school">{{ goods.universityName }}</text>
			</view>
			<view class="arrow">
				<uni-icons type="arrowright" size="18" color="#999" />
			</view>
		</view>

		<!-- 商品详情描述（富文本） -->
		<view class="desc-section">
			<view class="section-title">商品详情</view>
			<rich-text :nodes="goods.description"></rich-text>
		</view>

		<!-- 猜你喜欢（简易瀑布流） -->
		<view class="section" v-if="recommendList.length">
			<view class="section-title">猜你喜欢</view>
			<view class="recommend-waterfall">
				<view class="column">
					<view v-for="item in recommendLeft" :key="item.id" class="rec-card" @click="toDetail(item.id)">
						<image :src="item.cover" mode="aspectFill" class="rec-cover" />
						<text class="rec-title">{{ item.title }}</text>
						<text class="rec-price">¥{{ item.price }}</text>
					</view>
				</view>
				<view class="column">
					<view v-for="item in recommendRight" :key="item.id" class="rec-card" @click="toDetail(item.id)">
						<image :src="item.cover" mode="aspectFill" class="rec-cover" />
						<text class="rec-title">{{ item.title }}</text>
						<text class="rec-price">¥{{ item.price }}</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 底部操作栏 -->
		<view class="bottom-bar">
			<view class="bar-left">
				<view class="action-item" @click="toggleLike">
					<uni-icons :type="goods.isLiked ? 'heart-filled' : 'heart'" :color="goods.isLiked ? '#ff4757' : '#666'" size="24" />
					<text>{{ goods.likeCount || 0 }}</text>
				</view>
				<view class="action-item" @click="toChat">
					<uni-icons type="chat" size="24" color="#666" />
					<text>聊聊</text>
				</view>
			</view>
			<button class="add-cart-btn" @click="addToCart">加入购物车</button>
			<button class="buy-btn" @click="showContact">联系Ta</button>
		</view>

		<!-- 联系方式弹窗 -->
		<uni-popup ref="contactPopup" type="center" background-color="#fff">
			<view class="contact-popup">
				<text class="popup-title">联系卖家</text>
				<view class="contact-item" v-if="goods.wechat">
					<text class="label">微信号：</text>
					<text class="value" selectable>{{ goods.wechat }}</text>
					<button size="mini" type="primary" plain @click="copy(goods.wechat)">复制</button>
				</view>
				<view class="contact-item" v-if="goods.phone">
					<text class="label">手机号：</text>
					<text class="value" selectable>{{ goods.phone }}</text>
					<button size="mini" type="primary" plain @click="makeCall(goods.phone)">拨打</button>
				</view>
				<view class="contact-item" v-if="goods.qq">
					<text class="label">QQ号：</text>
					<text class="value" selectable>{{ goods.qq }}</text>
					<button size="mini" type="primary" plain @click="copy(goods.qq)">复制</button>
				</view>
				<view v-if="!goods.wechat && !goods.phone && !goods.qq" class="no-contact">卖家未提供联系方式</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
  data() {
    return {
      goodsId: 0,
      goods: {},
      recommendList: [],  // 猜你喜欢列表
      recommendLeft: [],  // 瀑布流左列
      recommendRight: [], // 瀑布流右列
      statusBarHeight: 0
    }
  },

  onLoad(options) {
    this.goodsId = Number(options.id) || 0
    if (!this.goodsId) {
      uni.showToast({ title: '参数错误', icon: 'none' })
      setTimeout(() => uni.navigateBack(), 1500)
      return
    }

    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
    this.loadGoods()
	// 监听全局喜欢更新事件
	  uni.$on('likeUpdated', this.handleLikeUpdate)
  },
	// handleLikeUpdate(data) {
	//   if (this.goodsId === data.goodsId) {
	// 	this.goods.isLiked = data.isLiked
	// 	this.goods.likeCount = data.likeCount
	//   }
	// },

	// 清理监听（防止内存泄漏）
	onUnload() {
	  // uni.$off('likeUpdated', this.handleLikeUpdate)
	},
  methods: {
    async loadGoods() {
        const token = uni.getStorageSync('token')
        uni.request({
          url: 'http://192.168.0.105:8080/api/goods/detail/' + this.goodsId,
          header: { Authorization: 'Bearer ' + token },
          success: (res) => {
            if (res.statusCode === 200 && res.data) {
              let goods = res.data
    
              // 一句话搞定 images 字符串 → 数组（兼容所有情况）
              if (goods.images && typeof goods.images === 'string') {
                try {
                  // 情况1：是 ["url1","url2"] 这种 JSON 字符串
                  goods.images = JSON.parse(goods.images)
                } catch (e) {
                  // 情况2：是 url1.jpg,url2.jpg 这种逗号分隔
                  goods.images = goods.images.split(',')
                                            .map(s => s.trim())
                                            .filter(s => s)
                }
                
                // 再保险一点：确保一定是数组
                if (!Array.isArray(goods.images)) {
                  goods.images = []
                }
              }
    
              this.goods = goods
            } else {
              uni.showToast({ title: '加载失败', icon: 'none' })
            }
          }
        })
      },


    previewImage(index) {
      uni.previewImage({
        urls: this.goods.images,
        current: index
      })
    },

    copy(text) {
      uni.setClipboardData({ data: text, showToast: true })
    },

    makeCall(phone) {
      uni.makePhoneCall({ phoneNumber: phone })
    },

    showContact() {
      this.$refs.contactPopup.open()
    },

    toChat() {
      uni.navigateTo({
        url: '/pages/chat/chat',
        success: (res) => {
          res.eventChannel.emit('acceptData', {
            friendId: Number(this.goods.userId),
            nickname: this.goods.nickname || '用户',
            avatar: this.goods.avatar || ''
          })
        }
      })
    },

    toUserHome(userId) {
      uni.navigateTo({ url: `/pages/user/home?userId=${userId}` })
    },

    toDetail(id) {
      if (id === this.goodsId) return
      uni.redirectTo({ url: `/pages/detail/detail?id=${id}` })
    },

    // 点赞（可扩展真实接口）
	toggleLike() {
	  const token = uni.getStorageSync('token')
	  if (!token) {
		uni.showToast({ title: '请先登录', icon: 'none' })
		return
	  }

	  // 乐观更新（本地先变 UI）
	  this.goods.isLiked = !this.goods.isLiked
	  this.goods.likeCount += this.goods.isLiked ? 1 : -1

	  uni.request({
		url: `http://192.168.0.105:8080/api/user/like/${this.goodsId}`,
		method: 'POST',
		header: { Authorization: 'Bearer ' + token },
		success: (res) => {
		  const result = res.data
		  if (result.ok) {
			// 更新成功，使用后端值
			this.goods.isLiked = result.isLiked
			this.goods.likeCount = result.likeCount

			// 关键：广播事件，让其他页面更新
			uni.$emit('likeUpdated', {
			  goodsId: this.goodsId,
			  isLiked: this.goods.isLiked,
			  likeCount: this.goods.likeCount
			})
		  } else {
			// 失败回滚
			this.goods.isLiked = !this.goods.isLiked
			this.goods.likeCount += this.goods.isLiked ? 1 : -1
			uni.showToast({ title: '操作失败', icon: 'none' })
		  }
		},
		fail: () => {
		  // 网络失败回滚
		  this.goods.isLiked = !this.goods.isLiked
		  this.goods.likeCount += this.goods.isLiked ? 1 : -1
		  uni.showToast({ title: '网络错误', icon: 'none' })
		}
	  })
	},

    // 新增：加入购物车
    addToCart() {
      let cart = uni.getStorageSync('cart') || []
      const existing = cart.find(item => item.goodsId === this.goodsId)

      if (existing) {
        existing.quantity += 1  // 已存在，数量+1
      } else {
        // 新增商品到购物车
        cart.push({
          goodsId: this.goodsId,
          title: this.goods.title,
          price: this.goods.price,
          cover: this.goods.images[0] || '',  // 用第一张图作为封面
          quantity: 1,
          selected: true  // 默认选中
        })
      }

      uni.setStorageSync('cart', cart)
      uni.showToast({ title: '已加入购物车', icon: 'success' })
    }
  }
}
</script>

<style scoped>
.detail-page { background: #f8f8f8; min-height: 100vh; padding-bottom: 140rpx; }

.goods-swiper { height: 750rpx; }
.swiper-img { width: 100%; height: 100%; }

.goods-base { background: #fff; padding: 32rpx; }
.price-row { display: flex; align-items: baseline; }
.price { font-size: 56rpx; color: #ff4757; font-weight: bold; margin-right: 20rpx; }
.origin-price { font-size: 28rpx; color: #999; text-decoration: line-through; }
.title { font-size: 36rpx; color: #333; margin: 20rpx 0; line-height: 1.5; }
.info-row { display: flex; align-items: center; flex-wrap: wrap; gap: 16rpx; }
.tag { background: #fff0f0; color: #ff4757; padding: 4rpx 12rpx; border-radius: 8rpx; font-size: 24rpx; }
.view-count { color: #999; font-size: 28rpx; margin-left: auto; }

.seller-card {
	display: flex; align-items: center; background: #fff; padding: 32rpx; margin: 20rpx 0;
	border-top: 1rpx solid #eee; border-bottom: 1rpx solid #eee;
}
.avatar { width: 100rpx; height: 100rpx; border-radius: 50%; margin-right: 24rpx; }
.seller-info { flex: 1; }
.nickname { font-size: 32rpx; color: #333; }
.school { font-size: 26rpx; color: #999; margin-top: 8rpx; }

.desc-section { background: #fff; padding: 32rpx; margin-bottom: 20rpx; }
.section-title { font-size: 36rpx; font-weight: bold; margin-bottom: 32rpx; }

.recommend-waterfall { display: flex; }
.recommend-waterfall .column { flex: 1; }
.recommend-waterfall .column:first-child { margin-right: 16rpx; }
.rec-card { background: #fff; border-radius: 20rpx; overflow: hidden; margin-bottom: 24rpx; }
.rec-cover { width: 100%; height: 320rpx; }
.rec-title { display: block; padding: 12rpx 16rpx; font-size: 26rpx; color: #333; 
	-webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.rec-price { display: block; padding: 0 16rpx 16rpx; font-size: 32rpx; color: #ff4757; font-weight: bold; }

/* 底部操作栏 */
.bottom-bar {
	position: fixed; bottom: 0; left: 0; right: 0; height: 120rpx;
	background: #fff; border-top: 1rpx solid #eee;
	display: flex; align-items: center; padding: 0 32rpx;
	z-index: 999;
}
.bar-left { display: flex; align-items: center; }
.action-item { text-align: center; margin-right: 60rpx; }
.action-item text { display: block; font-size: 24rpx; color: #666; margin-top: 8rpx; }
.add-cart-btn { background: #ff9f43; color: #fff; height: 88rpx; line-height: 88rpx; border-radius: 88rpx; padding: 0 40rpx; font-size: 32rpx; margin-right: 20rpx; }
.buy-btn { background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: #fff; 
	height: 88rpx; line-height: 88rpx; border-radius: 88rpx; padding: 0 60rpx; font-size: 32rpx; }

/* 联系方式弹窗 */
.contact-popup { width: 600rpx; padding: 40rpx; border-radius: 24rpx; }
.popup-title { font-size: 36rpx; font-weight: bold; text-align: center; margin-bottom: 40rpx; }
.contact-item { display: flex; align-items: center; margin-bottom: 32rpx; font-size: 32rpx; }
.contact-item .label { color: #666; margin-right: 20rpx; }
.contact-item .value { flex: 1; color: #333; }
.no-contact { text-align: center; color: #999; padding: 60rpx 0; font-size: 30rpx; }
</style>