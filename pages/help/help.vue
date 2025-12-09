<!-- pages/help/help.vue -->
<template>
  <view class="help-page">
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

    <!-- 顶部标题栏 -->
    <view class="header">
      <text class="title">帮助与反馈</text>
      <text class="subtitle">有任何问题都可以在这里找到答案</text>
    </view>

    <!-- 常见问题 -->
    <view class="section">
      <view class="section-title">
        <uni-icons type="help" size="20" color="#ff4757" />
        <text>常见问题</text>
      </view>
      <view class="faq-list">
        <view class="faq-item" v-for="(item, i) in faqList" :key="i" @click="toggleFaq(i)">
          <view class="question">
            <text>{{ item.q }}</text>
            <uni-icons :type="item.open ? 'top' : 'bottom'" size="18" color="#999" />
          </view>
          <view class="answer" v-if="item.open">
            <text>{{ item.a }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 联系方式 -->
    <view class="section contact-section">
      <view class="section-title">
        <uni-icons type="chat" size="20" color="#4CD964" />
        <text>联系我们</text>
      </view>
      <view class="contact-card">
        <view class="contact-item" @click="copyWechat">
          <uni-icons type="weixin" size="24" color="#07C160" />
          <text class="label">微信号</text>
          <text class="value">xianzhi_kefu</text>
          <uni-icons type="copy" size="20" color="#007AFF" />
        </view>
        <view class="contact-item">
          <uni-icons type="clock" size="24" color="#666" />
          <text class="label">服务时间</text>
          <text class="value">9:00 - 22:00（工作日更快回复）</text>
        </view>
      </view>
    </view>

    <!-- 意见反馈 -->
    <view class="section">
      <button class="feedback-btn" open-type="contact">
        <uni-icons type="chatboxes" size="22" color="#fff" />
        <text>去小程序客服反馈（最快回复）</text>
      </button>
      <button class="feedback-btn alt" @click="toFeedback">
        <uni-icons type="edit" size="22" color="#fff" />
        <text>提交文字反馈</text>
      </button>
    </view>

    <!-- 底部 -->
    <view class="footer">
      <text>校园闲置 v1.2.0</text>
      <text>我们一直在努力变得更好</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0,
      faqList: [
        { q: '怎么发布商品？', a: '点击底部“发布”按钮 → 拍摄照片 → 填写标题、价格、描述 → 点击发布即可～', open: false },
        { q: '商品发布后怎么修改？', a: '去“我的” → “发布记录” → 找到商品 → 点击编辑按钮即可修改', open: false },
        { q: '怎么联系卖家？', a: '在商品详情页点击“联系Ta”按钮，会显示卖家微信号，复制后打开微信添加即可', open: false },
        { q: '买家不发货怎么办？', a: '请先与卖家沟通，如无法解决，可联系客服（本页面最下方），我们会介入处理', open: false },
        { q: '怎么设置默认收货地址？', a: '去“我的” → “收货地址” → 点击地址右侧“设为默认”即可', open: false },
        { q: '为什么看不到别人的微信号？', a: '为了保护隐私，只有在商品详情页点击“联系Ta”后才会显示微信号哦', open: false }
      ]
    }
  },

  onLoad() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
  },

  methods: {
    toggleFaq(i) {
      this.faqList[i].open = !this.faqList[i].open
      // 可选：关闭其他
      // this.faqList.forEach((item, idx) => { if (idx !== i) item.open = false })
    },

    copyWechat() {
      uni.setClipboardData({
        data: 'xianzhi_kefu',
        success: () => uni.showToast({ title: '微信号已复制', icon: 'success' })
      })
    },

    toFeedback() {
      uni.navigateTo({ url: '/pages/feedback/feedback' })  // 你可以再做一个反馈页面
    }
  }
}
</script>

<style scoped>
.help-page { background: #f8f8f8; min-height: 100vh; padding-bottom: 40rpx; }

.header {
  padding: 100rpx 60rpx 80rpx;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}
.title { font-size: 56rpx; font-weight: bold; }
.subtitle { font-size: 30rpx; opacity: 0.9; margin-top: 20rpx; display: block; }

.section { margin: 40rpx 32rpx; background: #fff; border-radius: 24rpx; overflow: hidden; box-shadow: 0 8rpx 30rpx rgba(0,0,0,0.06); }
.section-title {
  padding: 40rpx 32rpx 20rpx;
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.faq-list { padding: 0 32rpx 32rpx; }
.faq-item { border-bottom: 1rpx solid #f0f0f0; padding: 32rpx 0; }
.faq-item:last-child { border-bottom: none; }
.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32rpx;
  color: #333;
}
.answer {
  margin-top: 24rpx;
  padding: 24rpx;
  background: #f8f9fb;
  border-radius: 16rpx;
  font-size: 28rpx;
  color: #666;
  line-height: 1.6;
}

.contact-section { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.contact-card { padding: 0 32rpx 40rpx; }
.contact-item {
  display: flex;
  align-items: center;
  padding: 32rpx 0;
  border-bottom: 1rpx solid rgba(255,255,255,0.2);
}
.contact-item:last-child { border-bottom: none; }
.contact-item .label { width: 160rpx; font-size: 30rpx; opacity: 0.9; }
.contact-item .value { flex: 1; font-size: 32rpx; font-weight: bold; }

.feedback-btn {
  margin: 40rpx 32rpx 20rpx;
  background: linear-gradient(135deg, #ff4757, #ff6b6b);
  color: #fff;
  height: 100rpx;
  line-height: 100rpx;
  border-radius: 50rpx;
  font-size: 34rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20rpx;
}
.feedback-btn.alt {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.footer {
  text-align: center;
  padding: 60rpx 32rpx;
  color: #999;
  font-size: 28rpx;
  line-height: 2;
}
</style>