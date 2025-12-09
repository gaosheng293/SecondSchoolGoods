<!-- pages/mine/my-orders.vue （终极完整版）-->
<template>
  <view class="orders-page">
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

    <!-- 顶部导航栏 + 返回 -->
    <view class="nav-bar">
      <view class="left" @click="goBack">
        <uni-icons type="back" size="40" color="#333" />
      </view>
      <view class="title">我的订单</view>
      <view class="right"></view>
    </view>

    <!-- 完整6个Tab -->
    <view class="tabs">
      <view class="tab-item" :class="{ active: activeTab === null }" @click="switchTab(null)">全部</view>
      <view class="tab-item" :class="{ active: activeTab === 0 }" @click="switchTab(0)">待支付</view>
      <view class="tab-item" :class="{ active: activeTab === 1 }" @click="switchTab(1)">待发货</view>
      <view class="tab-item" :class="{ active: activeTab === 2 }" @click="switchTab(2)">待收货</view>
      <view class="tab-item" :class="{ active: activeTab === 3 }" @click="switchTab(3)">已完成</view>
      <view class="tab-item" :class="{ active: activeTab === 4 }" @click="switchTab(4)">退款中</view>
    </view>

    <!-- 订单列表 -->
    <scroll-view scroll-y class="order-list" lower-threshold="50" @scrolltolower="loadMore">
      <view v-for="item in orderList" :key="item.id" class="order-item" @click="toDetail(item.id)">
        <view class="goods-info">
          <image :src="item.cover || '/static/default-cover.png'" mode="aspectFill" class="cover" />
          <view class="details">
            <text class="title">{{ item.goodsTitle || '未知商品' }}</text>
            <text class="price">¥{{ item.price }} × {{ item.quantity || 1 }}</text>
          </view>
        </view>

        <view class="footer">
          <text class="status" :class="getStatusClass(item.status)">
            {{ statusMap[item.status] }}
          </text>
          <view class="actions">
            <!-- 待支付 -->
            <button v-if="item.status === 0" class="btn pay" @click.stop="pay(item.id)">立即支付</button>
            <!-- 待收货 -->
            <button v-if="item.status === 2" class="btn confirm" @click.stop="confirmReceive(item.id)">确认收货</button>
            <!-- 退款中 -->
            <button v-if="item.status === 4" class="btn refund" @click.stop="contactSeller">联系客服</button>
            <!-- 已完成 / 已退款 -->
            <button v-if="item.status === 3 || item.status === 5" class="btn plain" @click.stop="toDetail(item.id)">查看详情</button>
          </view>
        </view>
      </view>

      <!-- 空状态 -->
      <view class="empty" v-if="!orderList.length && !loading">
        <image src="/static/empty-order.png" class="empty-img" mode="widthFix" />
        <text class="empty-text">暂无{{ activeTab === null ? '' : statusMap[activeTab] }}订单</text>
        <button class="go-shop" @click="toHome">去首页逛逛</button>
      </view>

      <view class="loading" v-if="loading">
        <uni-icons type="spinner" size="30" spin />
        <text>加载中...</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0,
      activeTab: null,
      orderList: [],
      loading: false,
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

  onLoad() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
    this.loadOrders()
  },

  onPullDownRefresh() {
    this.loadOrders(() => uni.stopPullDownRefresh())
  },

  methods: {
    switchTab(tab) {
      if (this.activeTab === tab) return
      this.activeTab = tab
      this.orderList = []
      this.loadOrders()
    },

    loadOrders(cb) {
      this.loading = true
      const token = uni.getStorageSync('token')
      if (!token) return

      uni.request({
        url: 'http://192.168.0.105:8080/api/order/my',
        data: { status: this.activeTab }, // 传 null 就是全部
        header: { Authorization: 'Bearer ' + token },
        success: (res) => {
          if (res.statusCode === 200 && res.data.list) {
            this.orderList = res.data.list.map(item => {
              try {
                const images = typeof item.goodsImages === 'string' ? JSON.parse(item.goodsImages) : item.goodsImages
                item.cover = Array.isArray(images) && images.length ? images[0] : '/static/default-cover.png'
              } catch {
                item.cover = '/static/default-cover.png'
              }
              return item
            })
          }
        },
        complete: () => {
          this.loading = false
          cb && cb()
        }
      })
    },

    getStatusClass(status) {
      const map = {
        0: 'warning',   // 橙色
        1: 'primary',   // 蓝色
        2: 'waiting',	// 黄色
        3: 'success',   // 绿色
        4: 'refund',    // 紫色
        5: 'default'    // 灰色
      }
      return map[status] || 'default'
    },

    toDetail(id) {
      uni.navigateTo({ url: `/pages/order/detail?id=${id}` })
    },

    pay(id) {
      uni.showToast({ title: '即将跳转微信支付', icon: 'none' })
    },

    confirmReceive(id) {
      uni.showModal({
        title: '确认收货',
        content: '已收到商品？',
        success: (res) => {
          if (res.confirm) {
            const token = uni.getStorageSync('token')
            uni.request({
              url: `http://192.168.0.105:8080/api/order/status/${id}?newStatus=3`,
              method: 'PUT',
              header: { Authorization: 'Bearer ' + token },
              success: () => {
                uni.showToast({ title: '确认收货成功' })
                this.loadOrders()
              }
            })
          }
        }
      })
    },

    contactSeller() {
      uni.showToast({ title: '已通知客服处理退款', icon: 'success' })
    },

	goBack() {
	  const pages = getCurrentPages()
	  if (pages.length > 1) {
		// 有上一页 → 正常返回
		uni.navigateBack()
	  } else {
		// 没有上一页 → 跳转到“我的”页面（或首页）
		uni.switchTab({ url: '/pages/mine/mine' })
		// 如果你想回首页，改成：'/pages/index/index'
	  }
	},

    toHome() {
      uni.switchTab({ url: '/pages/index/index' })
    }
  }
}
</script>

<style scoped>
.orders-page { background: #f8f8f8; min-height: 100vh; }

/* 顶部导航栏 */
.nav-bar {
  height: 88rpx; background: #fff; display: flex; align-items: center;
  justify-content: space-between; padding: 0 32rpx; position: sticky; top: 0; z-index: 100;
  box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.05);
}
.nav-bar .title { font-size: 36rpx; font-weight: bold; color: #333; position: absolute; left: 50%; transform: translateX(-50%); }

/* 6个Tab */
.tabs {
  display: flex; background: #fff; position: sticky; top: 88rpx; z-index: 99;
  border-bottom: 1rpx solid #f0f0f0;
}
.tab-item {
  flex: 1; text-align: center; padding: 30rpx 0; font-size: 30rpx; color: #666;
}
.tab-item.active {
  color: #ff4757; font-weight: bold; position: relative;
}
.tab-item.active::after {
  content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 60rpx; height: 6rpx; background: #ff4757; border-radius: 3rpx;
}

.order-list { height: calc(100vh - 176rpx); }
.order-item { background: #fff; margin: 20rpx; border-radius: 24rpx; padding: 32rpx; box-shadow: 0 4rpx 20rpx rgba(0,0,0,0.05); }
.goods-info { display: flex; }
.cover { width: 180rpx; height: 180rpx; border-radius: 20rpx; }
.details { margin-left: 24rpx; flex: 1; }
.title { font-size: 32rpx; color: #333; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.price { font-size: 30rpx; color: #ff4757; margin-top: 12rpx; font-weight: bold; }

.footer { display: flex; justify-content: space-between; align-items: center; margin-top: 32rpx; padding-top: 32rpx; border-top: 1rpx solid #f0f0f0; }
.status { font-size: 28rpx; padding: 8rpx 20rpx; border-radius: 8rpx; }
.status.warning { background: #fff2e8; color: #d4380d; }
.status.primary { background: #e6f7ff; color: #1890ff; }
.status.waiting { background: #e6f7ff; color: #FFAE42; }
.status.success { background: #f6ffed; color: #52c41a; }
.status.refund { background: #f9f0ff; color: #722ed1; }
.status.default { background: #f5f5f5; color: #999; }

.actions .btn { font-size: 28rpx; padding: 12rpx 32rpx; border-radius: 50rpx; }
.btn.pay { background: #ff4757; color: #fff; }
.btn.confirm { background: #fff; color: #ff4757; border: 2rpx solid #ff4757; }
.btn.refund { background: #722ed1; color: #fff; }
.btn.plain { background: #f5f5f5; color: #666; }

.empty { text-align: center; padding-top: 200rpx; color: #999; }
.empty-img { width: 400rpx; }
.go-shop { margin-top: 40rpx; background: #ff4757; color: #fff; width: 400rpx; height: 88rpx; line-height: 88rpx; border-radius: 88rpx; }
.loading { text-align: center; padding: 60rpx; color: #999; }
</style>