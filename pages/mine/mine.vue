<template>
  <view class="page">
    <!-- 加载中 -->
    <view v-if="loading" class="loading-box">
      <uni-icons type="spinner" size="40" color="#007AFF" spin />
      <text class="loading-text">加载中...</text>
    </view>

    <!-- 加载失败 -->
    <view v-else-if="error" class="error-box" @click="loadProfile">
      <uni-icons type="refresh" size="40" color="#999" />
      <text class="error-text">{{ error }}</text>
      <text class="retry-text">点击重新加载</text>
    </view>

    <!-- 已登录 --> 
    <view v-else-if="isLogin && profile" class="content">
      <!-- 顶部背景 + 头像区 -->
      <view class="header-bg">
        <view class="header">
          <view class="avatar-box" @click="toEditProfile">
            <image :src="profile?.avatar || '/static/c1.png'" mode="aspectFill" class="avatar" />
          </view>

          <view class="user-info">
            <text class="nickname">{{ profile?.nickname || '未设置昵称' }}</text>
            <view class="school-tag" v-if="profile.university">
              <uni-icons type="location-filled" size="14" color="#007AFF" />
              <text>{{ profile.university.name }}</text>
            </view>
          </view>

          <view class="edit-btn" @click="toEditProfile">
            <uni-icons type="gear" size="20" color="#999" />
          </view>
        </view>
      </view>

      <!-- 资产卡片 -->
      <view class="assets-card">
        <view class="assets-item" @click="toMyGoods">
          <text class="num">{{ profile.goodsCount || 0 }}</text>
          <text class="label">我的闲置</text>
        </view>
        <view class="divider"></view>
        <view class="assets-item" @click="toMyOrders">
          <text class="num">{{ profile.orderCount || 0 }}</text>
          <text class="label">我的订单</text>
        </view>
        <view class="divider"></view>
        <view class="assets-item" @click="toMyLikes">
          <text class="num">{{ profile.likeCount || 0 }}</text>
          <text class="label">我的喜欢</text>
        </view>
      </view>

      <!-- 功能列表 -->
      <view class="menu-list">
        <view class="menu-item" @click="toAddress">
          <uni-icons type="map" size="20" color="#007AFF" />
          <text>收货地址</text>
          <uni-icons type="arrowright" size="16" color="#ccc" />
        </view>
        <view class="menu-item" @click="toPublishHistory">
          <uni-icons type="compose" size="20" color="#4CD964" />
          <text>发布记录</text>
          <uni-icons type="arrowright" size="16" color="#ccc" />
        </view>
        <view class="menu-item" @click="toHelp">
          <uni-icons type="help" size="20" color="#FFB800" />
          <text>帮助与反馈</text>
          <uni-icons type="arrowright" size="16" color="#ccc" />
        </view>
        <view class="menu-item" @click="toAbout">
          <uni-icons type="info" size="20" color="#666" />
          <text>关于我们</text>
          <uni-icons type="arrowright" size="16" color="#ccc" />
        </view>
      </view>

      <!-- 退出登录 -->
      <view class="logout-box">
        <button class="logout-btn" @click="handleLogout">退出登录</button>
      </view>
    </view>

    <!-- 未登录状态 -->
    <view v-else class="not-login" @click="toLogin">
      <image src="/static/c1.png" mode="widthFix" class="not-login-img" />
      <text class="not-login-text">点击登录，解锁完整功能</text>
    </view>

    <!-- 底部安全区 -->
     <!-- 自定义 tabBar（必须放在最后）-->
    <!-- <custom-tab-bar :index="3" /> -->
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onLoad, onShow, onHide } from '@dcloudio/uni-app'  // 正确！必须这样写

// 响应式状态
const loading = ref(true)
const error = ref('')
const profile = ref(null)
const isLogin = ref(false)

// 获取用户信息（真实接口）
const loadProfile = async () => {
  loading.value = true
  error.value = ''
  
  const token = uni.getStorageSync('token')
  if (!token) {
    loading.value = false
    isLogin.value = false
    return
  }

  uni.request({
    url: 'http://192.168.0.105:8080/api/user/mine',  // 改成 /mine，因为它返回 counts
    method: 'GET',
    header: {
      'Authorization': 'Bearer ' + token
    },
    success: (res) => {
      if (res.statusCode === 200 && res.data) {
        profile.value = res.data
        isLogin.value = true
      } else {
        error.value = '数据格式错误'
        isLogin.value = false
      }
    },
    fail: (err) => {
      console.error('获取用户信息失败', err)
      error.value = err.errMsg.includes('timeout') ? '请求超时' : '网络错误，请检查后端'
      isLogin.value = false
    },
    complete: () => {
      loading.value = false
    }
  })
}

// 退出登录
const handleLogout = () => {
  uni.showModal({
    title: '确认退出登录？',
    success: (res) => {
      if (res.confirm) {
        uni.removeStorageSync('token')
        uni.reLaunch({ url: '/pages/login/login' })
      }
    }
  })
}

// 页面跳转
const toLogin = () => uni.reLaunch({ url: '/pages/login/login' })
const toEditProfile = () => uni.navigateTo({ url: '/pages/profile/edit' })
const toMyGoods = () => uni.navigateTo({ url: '/pages/mine/my-goods' })
const toMyOrders = () => uni.navigateTo({ url: '/pages/mine/my-orders' })
const toMyLikes = () => uni.navigateTo({ url: '/pages/mine/my-likes' })
const toAddress = () => uni.navigateTo({ url: '/pages/address/list' })
const toPublishHistory = () => uni.navigateTo({ url: '/pages/publish/history' })
const toHelp = () => uni.navigateTo({ url: '/pages/help/help' })
const toAbout = () => uni.navigateTo({ url: '/pages/about/about' })

// 生命周期
onLoad(() => {
  loadProfile()
})

onShow(() => {
  // 每次显示都刷新（比如从编辑资料回来）
  if (uni.getStorageSync('token')) {
    loadProfile()
  }
})
</script>

<style lang="scss" scoped>
.page { min-height: 100vh; background: #f5f5f5; }

// 加载状态
.loading-box, .error-box {
  text-align: center; padding-top: 300rpx;
}
.loading-text, .error-text, .retry-text {
  display: block; margin-top: 32rpx; font-size: 32rpx; color: #999;
}
.retry-text { color: #007AFF; margin-top: 20rpx; }

// 未登录
.not-login {
  text-align: center; padding-top: 300rpx;
}
.not-login-img { width: 360rpx; }
.not-login-text { font-size: 36rpx; color: #333; margin-top: 60rpx; }

// 其余样式和之前美化版完全一致（省略重复，保持一致）
.header-bg { height: 420rpx; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding-top: var(--status-bar-height); }
.header { height: 320rpx; display: flex; align-items: center; padding: 0 40rpx; position: relative; }
.avatar { width: 160rpx; height: 160rpx; border-radius: 50%; border: 8rpx solid rgba(255,255,255,0.3); background: #fff; }
.user-info { margin-left: 32rpx; flex: 1; }
.nickname { font-size: 48rpx; color: #fff; font-weight: bold; }
.school-tag { margin-top: 12rpx; background: rgba(255,255,255,0.25); backdrop-filter: blur(10rpx); display: inline-flex; align-items: center; gap: 8rpx; padding: 8rpx 20rpx; border-radius: 40rpx; font-size: 26rpx; color: #fff; }
.edit-btn { width: 80rpx; height: 80rpx; background: rgba(255,255,255,0.2); backdrop-filter: blur(10rpx); border-radius: 50%; display: flex; align-items: center; justify-content: center; }

.assets-card { margin: -80rpx 32rpx 40rpx; background: #fff; border-radius: 32rpx; padding: 40rpx 0; display: flex; box-shadow: 0 10rpx 40rpx rgba(0,0,0,0.1); }
.assets-item { flex: 1; text-align: center; }
.num { font-size: 56rpx; font-weight: bold; color: #333; }
.label { font-size: 28rpx; color: #666; margin-top: 8rpx; }
.divider { width: 1rpx; background: #eee; }

.menu-list { margin: 0 32rpx 40rpx; background: #fff; border-radius: 24rpx; overflow: hidden; box-shadow: 0 8rpx 30rpx rgba(0,0,0,0.06); }
.menu-item { height: 120rpx; padding: 0 40rpx; display: flex; align-items: center; border-bottom: 1rpx solid #f5f5f5; }
.menu-item:last-child { border-bottom: none; }
.menu-item text { flex: 1; margin-left: 32rpx; font-size: 32rpx; color: #333; }
.extra { font-size: 32rpx; color: #007AFF; margin-right: 16rpx; }

.logout-box { margin: 0 32rpx 80rpx; }
.logout-btn { background: #fff; color: #ff4757; border: 2rpx solid #ff4757; border-radius: 50rpx; height: 96rpx; line-height: 92rpx; font-size: 32rpx; }

.tabbar-safe { height: 140rpx; }
</style>