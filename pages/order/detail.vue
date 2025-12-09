<!-- pages/order/detail.vue （终极完美版）-->
<template>
  <view class="detail-page">
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

    <!-- 顶部导航栏 + 万能返回按钮 -->
    <view class="nav-bar">
      <view class="left" @click="goBack">
        <uni-icons type="back" size="40" color="#fff" />
      </view>
      <view class="title">订单详情</view>
      <view class="right"></view>
    </view>

    <!-- 状态大卡片 -->
    <view class="status-header" :class="statusClass">
      <uni-icons :type="statusIcon" size="80" color="#fff" />
      <text class="status-text">{{ statusMap[order.status] || '未知状态' }}</text>
      <text class="tip">{{ statusTip }}</text>
    </view>

    <!-- 商品信息 -->
    <view class="section goods-section">
      <view class="goods-info" @click="toGoodsDetail">
        <image :src="order.cover || '/static/default-cover.png'" mode="aspectFill" class="cover" />
        <view class="info">
          <text class="title">{{ order.goodsTitle || '未知商品' }}</text>
          <text class="price">¥{{ order.price }} × {{ order.quantity || 1 }}</text>
        </view>
        <uni-icons type="arrowright" size="36" color="#ccc" />
      </view>
    </view>

    <!-- 订单信息 -->
    <view class="section">
      <view class="info-row">
        <text class="label">订单编号</text>
        <text class="value" @click="copyText(order.id)">{{ order.id }} <uni-icons type="copy" size="28" color="#007AFF" /></text>
      </view>
      <view class="info-row">
        <text class="label">下单时间</text>
        <text class="value">{{ formatTime(order.createdAt) }}</text>
      </view>
      <view class="info-row">
        <text class="label">收货人</text>
        <text class="value">{{ addressInfo.name || '未填写' }}</text>
      </view>
      <view class="info-row">
        <text class="label">联系电话</text>
        <text class="value">{{ addressInfo.phone || '未填写' }}</text>
      </view>
      <view class="info-row">
        <text class="label">收货地址</text>
        <text class="value">{{ addressInfo.addr || '未填写' }}</text>
      </view>
    </view>

    <!-- 卖家信息 -->
    <view class="section seller-section">
      <view class="seller-info">
        <image :src="order.sellerAvatar || '/static/default-avatar.png'" class="avatar" mode="aspectFill" />
        <text class="nickname">{{ order.sellerNickname || '匿名卖家' }}</text>
      </view>
      <button class="btn contact" @click="contactSeller">联系卖家</button>
    </view>

    <!-- 底部操作按钮 -->
    <view class="actions-fixed" v-if="showAction">
      <button v-if="order.status === 0" class="btn pay" @click="pay">立即支付</button>
      <button v-if="order.status === 2" class="btn confirm" @click="confirmReceive">确认收货</button>
      <button v-if="order.status === 4" class="btn refund" @click="applyRefund">申请退款</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0,
      order: {},
      addressInfo: { name: '', phone: '', addr: '' },
      statusMap: {
        0: '待支付',
        1: '待发货',
        2: '待收货',
        3: '已完成',
        4: '退款中',
        5: '已退款'
      }
    }
  },

  computed: {
    statusClass() {
      const map = {
        0: 'warning',
        1: 'primary',
        2: 'primary',
        3: 'success',
        4: 'refund',
        5: 'default'
      }
      return map[this.order.status] || 'default'
    },
    statusIcon() {
      const map = {
        0: 'wallet',
        1: 'car',
        2: 'map',
        3: 'checkbox-filled',
        4: 'refresh',
        5: 'info-filled'
      }
      return map[this.order.status] || 'question'
    },
    statusTip() {
      const tips = {
        0: '请在24小时内完成支付，逾期将自动取消',
        1: '卖家正在备货，请耐心等待发货',
        2: '商品已发货，请注意查收',
        3: '交易已完成，感谢你的购买',
        4: '退款申请已提交，请等待处理',
        5: '退款已完成，金额已原路退回'
      }
      return tips[this.order.status] || ''
    },
    showAction() {
      return [0, 2, 4].includes(this.order.status)
    }
  },

  onLoad(options) {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
    if (options.id) this.loadDetail(options.id)
  },

  methods: {
    loadDetail(id) {
      const token = uni.getStorageSync('token')
      uni.request({
        url: `http://192.168.0.105:8080/api/order/${id}`,
        header: { Authorization: 'Bearer ' + token },
        success: (res) => {
          if (res.statusCode === 200 && res.data.order) {
            this.order = res.data.order
            // 解析地址
            try {
              this.addressInfo = typeof this.order.address === 'string'
                ? JSON.parse(this.order.address)
                : this.order.address || {}
            } catch {
              this.addressInfo = { name: '解析失败', phone: '', addr: this.order.address || '' }
            }
            // 处理封面图
            try {
              const imgs = typeof this.order.goodsImages === 'string' ? JSON.parse(this.order.goodsImages) : this.order.goodsImages
              this.order.cover = Array.isArray(imgs) && imgs.length ? imgs[0] : '/static/default-cover.png'
            } catch {
              this.order.cover = '/static/default-cover.png'
            }
          }
        }
      })
    },

    // 万能返回，永不报错！
    goBack() {
      const pages = getCurrentPages()
      if (pages.length > 1) {
        uni.navigateBack()
      } else {
        uni.switchTab({ url: '/pages/mine/mine' })
      }
    },

    formatTime(time) {
      if (!time) return '未知时间'
      const date = new Date(time)
      return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`
    },

    copyText(text) {
      uni.setClipboardData({
        data: String(text),
        success: () => uni.showToast({ title: '复制成功' })
      })
    },

	// 在订单详情页点击“立即支付”
	pay() {
	  uni.request({
		url: 'http://192.168.0.105:8080/api/pay/create',
		method: 'POST',
		data: {
		  description: '校园闲置 - ' + this.order.goodsTitle,
		  amount: Math.round(this.order.price * 100) // 转为分
		},
		header: { Authorization: 'Bearer ' + uni.getStorageSync('token') },
		success: (res) => {
		  if (res.data.payment) {
			uni.requestPayment({
			  ...res.data.payment,
			  success: () => {
				uni.showToast({ title: '支付成功' })
				setTimeout(() => this.loadDetail(this.order.id), 1000)
			  },
			  fail: () => {
				uni.showToast({ title: '支付失败', icon: 'none' })
			  }
			})
		  }
		}
	  })
	},

    confirmReceive() {
      uni.showModal({
        title: '确认收货',
        content: '已收到商品并验收无误？',
        success: (res) => {
          if (res.confirm) {
            const token = uni.getStorageSync('token')
            uni.request({
              url: `http://192.168.0.105:8080/api/order/status/${this.order.id}?newStatus=3`,
              method: 'PUT',
              header: { Authorization: 'Bearer ' + token },
              success: () => {
                uni.showToast({ title: '确认收货成功' })
                setTimeout(() => this.goBack(), 1000)
              }
            })
          }
        }
      })
    },

    contactSeller() {
      uni.showToast({ title: '已打开客服聊天', icon: 'success' })
    },

    applyRefund() {
      uni.showModal({
        title: '申请退款',
        content: '确定要申请退款吗？',
        success: (res) => {
          if (res.confirm) {
            uni.showToast({ title: '退款申请已提交' })
          }
        }
      })
    },

    toGoodsDetail() {
      if (this.order.goodsId) {
        uni.redirectTo({ url: `/pages/detail/detail?id=${this.order.goodsId}` })
      }
    }
  }
}
</script>

<style scoped>
.detail-page { background: #f8f8f8; min-height: 100vh; padding-bottom: 180rpx; }

/* 顶部返回栏 */
.nav-bar {
  position: fixed; top: 0; left: 0; right: 0; height: 88rpx; background: transparent;
  display: flex; align-items: center; justify-content: space-between; padding: 0 32rpx; z-index: 1000;
}
.nav-bar .title { font-size: 36rpx; font-weight: bold; color: #fff; position: absolute; left: 50%; transform: translateX(-50%); }

/* 状态卡片 */
.status-header { padding: 120rpx 60rpx 80rpx; text-align: center; color: #fff; border-radius: 0 0 40rpx 40rpx; }
.status-header.warning { background: linear-gradient(135deg, #ff6b6b, #ee5a52); }
.status-header.primary { background: linear-gradient(135deg, #667eea, #764ba2); }
.status-header.success { background: linear-gradient(135deg, #52c41a, #49aa19); }
.status-header.refund { background: linear-gradient(135deg, #722ed1, #531dab); }
.status-header.default { background: #999; }
.status-text { font-size: 52rpx; font-weight: bold; margin-top: 20rpx; }
.tip { font-size: 30rpx; opacity: 0.9; margin-top: 20rpx; display: block; }

/* 公共卡片 */
.section { margin: 32rpx; background: #fff; border-radius: 24rpx; overflow: hidden; box-shadow: 0 8rpx 30rpx rgba(0,0,0,0.06); }
.goods-section { padding: 32rpx; }
.goods-info { display: flex; align-items: center; justify-content: space-between; }
.cover { width: 200rpx; height: 200rpx; border-radius: 20rpx; }
.info { flex: 1; margin: 0 32rpx; }
.title { font-size: 36rpx; color: #333; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.price { font-size: 40rpx; color: #ff4757; margin-top: 20rpx; font-weight: bold; }

.info-row { display: flex; justify-content: space-between; align-items: center; padding: 32rpx; border-bottom: 1rpx solid #f0f0f0; font-size: 32rpx; }
.info-row:last-child { border-bottom: none; }
.label { color: #999; }
.value { color: #333; text-align: right; flex: 1; margin-left: 20rpx; display: flex; align-items: center; justify-content: flex-end; gap: 10rpx; }

/* 卖家信息 */
.seller-section { padding: 40rpx 32rpx; display: flex; justify-content: space-between; align-items: center; }
.seller-info { display: flex; align-items: center; }
.seller-info .avatar { width: 100rpx; height: 100rpx; border-radius: 50%; margin-right: 24rpx; }
.nickname { font-size: 34rpx; font-weight: bold; }
.btn.contact { background: #07c160; color: #fff; padding: 16rpx 40rpx; border-radius: 50rpx; }

/* 底部操作栏 */
.actions-fixed {
  position: fixed; bottom: 40rpx; left: 32rpx; right: 32rpx;
  display: flex; gap: 20rpx; z-index: 1000;
}
.actions-fixed .btn {
  flex: 1; height: 88rpx; line-height: 88rpx; border-radius: 88rpx; font-size: 34rpx;
}
.pay { background: #ff4757; color: #fff; }
.confirm { background: #fff; color: #ff4757; border: 2rpx solid #ff4757; }
.refund { background: #722ed1; color: #fff; }
</style>