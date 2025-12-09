<!-- pages/about/about.vue （完美修复版）-->
<template>
  <view class="about-page">
    <!-- 状态栏占位 -->
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

    <!-- 背景 + Logo 光晕（关键：放在最上层） -->
    <view class="bg-container">
      <view class="gradient-bg"></view>
      
      <!-- Logo + 超强光晕（不再被遮挡） -->
      <view class="logo-glow-wrapper">
        <view class="glow-ring glow-1"></view>
        <view class="glow-ring glow-2"></view>
        <view class="glow-ring glow-3"></view>
        <image src="/static/logo.png" class="logo" mode="aspectFill" />
      </view>
    </view>

    <!-- 主内容卡片（毛玻璃） -->
    <view class="main-card">
      <view class="header-content">
        <text class="app-name">校园闲置</text>
        <text class="slogan">让每一件闲置，都被需要的人遇见</text>
      </view>

      <view class="version-section">
        <text class="label">当前版本</text>
        <text class="version">v1.2.0</text>
      </view>

      <view class="divider"></view>

      <view class="info-section">
        <view class="info-item">
          <uni-icons type="person" size="20" color="#999" />
          <text class="label">开发者</text>
          <text class="value">ggg</text>
        </view>
        <view class="info-item">
          <uni-icons type="mail" size="20" color="#999" />
          <text class="label">联系邮箱</text>
          <text class="value">3242576109@email.com</text>
        </view>
      </view>

      <view class="thanks">
        <text>感谢每一位使用和反馈的用户</text>
        <text>因为有你们，才让这个小项目不断成长</text>
      </view>
    </view>

    <!-- 版权 -->
    <view class="copyright">
      <text>© 2025 校园闲置 All Rights Reserved</text>
      <text>Made with ❤️ by ggg</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0
    }
  },
  onLoad() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
  },
  methods: {
    openGitHub() {
      uni.setClipboardData({
        data: 'https://github.com/yourname/xianzhi',
        success: () => {
          uni.showToast({ title: 'GitHub地址已复制', icon: 'success' })
        }
      })
    }
  }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: #1a1a2e;
  position: relative;
  overflow: hidden;
}

/* 背景容器（包含渐变 + Logo + 光晕） */
.bg-container {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 720rpx;
  pointer-events: none; /* 重要：让点击穿透到下方卡片 */
}

.gradient-bg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  opacity: 0.9;
}

/* Logo + 三层光晕（完整露出！） */
.logo-glow-wrapper {
  position: absolute;
  top: 120rpx;
  left: 50%;
  transform: translateX(-50%);
  width: 240rpx;
  height: 240rpx;
}

.glow-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300rpx;
  height: 300rpx;
  margin-left: -150rpx;
  margin-top: -150rpx;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(102,126,234,0.6) 0%, transparent 70%);
  animation: pulse 6s infinite ease-in-out;
}

.glow-1 { animation-delay: 0s; }
.glow-2 { 
  width: 360rpx; 
  height: 360rpx; 
  margin-left: -180rpx; 
  margin-top: -180rpx;
  background: radial-gradient(circle, rgba(118,75,162,0.4) 0%, transparent 70%);
  animation-delay: 1s; 
}
.glow-3 { 
  width: 420rpx; 
  height: 420rpx; 
  margin-left: -210rpx; 
  margin-top: -210rpx;
  background: radial-gradient(circle, rgba(240,147,251,0.3) 0%, transparent 70%);
  animation-delay: 2s; 
}

@keyframes pulse {
  0%, 100% { transform: translateX(-50%) scale(0.9); opacity: 0.6; }
  50% { transform: translateX(-50%) scale(1.1); opacity: 1; }
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220rpx;
  height: 220rpx;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 10rpx solid rgba(255,255,255,0.4);
  box-shadow: 0 20rpx 50rpx rgba(0,0,0,0.5);
  z-index: 10;
}

/* 标题文字（放在卡片里） */
.header-content {
  text-align: center;
  color: #fff;
  padding-bottom: 60rpx;
  margin-bottom: 40rpx;
  border-bottom: 1rpx solid rgba(255,255,255,0.1);
}
.app-name {
  font-size: 68rpx;
  font-weight: bold;
  letter-spacing: 6rpx;
  text-shadow: 0 4rpx 20rpx rgba(0,0,0,0.4);
}
.slogan {
  font-size: 32rpx;
  opacity: 0.9;
  margin-top: 20rpx;
  letter-spacing: 2rpx;
}

/* 主卡片 */
.main-card {
  position: relative;
  margin: -100rpx 40rpx 0;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20rpx);
  border-radius: 40rpx;
  padding: 60rpx 40rpx;
  box-shadow: 0 30rpx 80rpx rgba(0,0,0,0.3);
  border: 1rpx solid rgba(255,255,255,0.2);
  overflow: hidden;
}

.version-section {
  text-align: center;
  margin-bottom: 60rpx;
}
.version-section .label {
  font-size: 28rpx;
  color: rgba(255,255,255,0.7);
}
.version {
  font-size: 60rpx;
  font-weight: bold;
  color: #fff;
  margin-top: 16rpx;
}

.divider {
  height: 1rpx;
  background: rgba(255,255,255,0.2);
  margin: 40rpx 0;
}

.info-item {
  display: flex;
  align-items: center;
  padding: 36rpx 0;
  border-bottom: 1rpx solid rgba(255,255,255,0.08);
}
.info-item:last-child { border-bottom: none; }
.info-item .label {
  width: 160rpx;
  font-size: 30rpx;
  color: rgba(255,255,255,0.8);
}
.info-item .value {
  flex: 1;
  font-size: 30rpx;
  color: #fff;
  text-align: right;
}
.link {
  color: #89fcff;
}

/* 感谢语 */
.thanks {
  text-align: center;
  line-height: 2;
  color: rgba(255,255,255,0.9);
  font-size: 28rpx;
  margin-top: 60rpx;
  padding-top: 40rpx;
  border-top: 1rpx dashed rgba(255,255,255,0.2);
}

/* 版权 */
.copyright {
  text-align: center;
  color: rgba(255,255,255,0.5);
  font-size: 24rpx;
  line-height: 2;
  margin-top: 100rpx;
  padding-bottom: 40rpx;
}
</style>