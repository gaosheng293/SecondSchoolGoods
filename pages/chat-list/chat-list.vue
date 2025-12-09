<template>
  <view class="chat-list-page">
    <view class="navbar">
      <text class="title">消息</text>
    </view>

    <scroll-view scroll-y class="list">
      <view 
        v-for="item in sessions" 
        :key="item.friendId" 
        class="session-item"
        @click="toChat(item)">
        
        <image class="avatar" :src="item.avatar || '/static/default-avatar.png'" mode="cover" />
        
        <view class="info">
          <view class="top">
            <text class="nickname">{{ item.nickname || '用户' }}</text>
            <text class="time">{{ formatTime(item.lastTime) }}</text>
          </view>
          <view class="bottom">
            <text class="last-msg">{{ item.lastMessage || '暂无消息' }}</text>
            <!-- 未读红点 -->
            <view v-if="item.unread > 0" class="unread-badge">
              {{ item.unread > 99 ? '99+' : item.unread }}
            </view>
          </view>
        </view>
      </view>

      <view v-if="sessions.length === 0" class="empty">
        <image src="/static/empty-msg.png" class="empty-img" />
        <text>暂无消息，去逛逛商品吧~</text>
      </view>
    </scroll-view>
  </view>
</template>
 
<script>
export default {
  data() {
    return {
      sessions: []  // [{friendId, nickname, avatar, lastMessage, lastTime, unread}, ...]
    }
  },

  onShow() {
    this.loadSessions()
    // 监听全局消息事件
    uni.$on('newChatMessage', this.handleNewMessage)
  },

  onHide() {
    // 只移除监听，不关闭 socket（全局的）
    uni.$off('newChatMessage', this.handleNewMessage)
  },

  onUnload() {
    // 同上
    uni.$off('newChatMessage', this.handleNewMessage)
  },

  methods: {
    // 加载会话列表（调用你后端新接口）
    async loadSessions() {
      try {
        const token = uni.getStorageSync('token')
        const res = await new Promise((resolve, reject) => {
          uni.request({
            url: 'http://192.168.0.105:8080/api/chat/sessions',  // 统一 IP
            header: { Authorization: 'Bearer ' + token },
            success: (res) => resolve(res.data),
            fail: reject
          })
        }) 

        if (res.code === 200) {
          this.sessions = res.data || []
        }
      } catch (e) {
        console.log('加载会话失败', e)
      }
    },

    // chat-list.vue 中跳转处改成：
    toChat(item) {
      uni.navigateTo({
        url: '/pages/chat/chat',
        success: (res) => {
          // 通过 success 回调传对象参数，不会走 URL 编码
          res.eventChannel.emit('acceptData', {
            friendId: Number(item.friendId),
            nickname: item.nickname || '用户',
            avatar: item.avatar || ''
          })
        }
      })
    },

    // 时间格式化
    formatTime(time) {
      if (!time) return ''
      const d = new Date(time)
      const now = Date.now()
      const diff = (now - d.getTime()) / 1000

      if (diff < 60) return '刚刚'
      if (diff < 3600) return Math.floor(diff / 60) + '分钟前'
      if (diff < 86400) return Math.floor(diff / 3600) + '小时前'
      return `${d.getMonth() + 1}-${d.getDate()}`
    },

    // 有新消息来，更新对应会话
    handleNewMessage(msg) {
      const friendId = msg.fromUserId
      const existing = this.sessions.find(s => s.friendId === friendId)

      const newSession = {
        friendId: friendId,
        nickname: msg.fromNickname || '用户',  // 后端要返回昵称，或你自己存
        avatar: msg.fromAvatar || '/static/default-avatar.png',
        lastMessage: msg.type === 1 ? '[图片]' : msg.content || '',
        lastTime: msg.createTime,
        unread: existing ? existing.unread + 1 : 1
      }
 
      if (existing) {
        Object.assign(existing, newSession)
        // 移到顶部
        this.sessions.sort((a, b) => b.lastTime.localeCompare(a.lastTime))
      } else {
        this.sessions.unshift(newSession)
      }
    }
  }
} 
</script>

<style scoped>
.chat-list-page { height: 100vh; background: #f5f5f5; display: flex; flex-direction: column; }
.navbar { height: 90rpx; background: #fff; justify-content: center; align-items: center; font-size: 36rpx; font-weight: bold; border-bottom: 1px solid #eee; padding-top: var(--status-bar-height); }
.list { flex: 1; }
.session-item { display: flex; padding: 30rpx; background: #fff; border-bottom: 1px solid #f0f0f0; align-items: center; }
.avatar { width: 100rpx; height: 100rpx; border-radius: 50%; margin-right: 30rpx; }
.info { flex: 1; }
.top { display: flex; justify-content: space-between; margin-bottom: 10rpx; }
.nickname { font-size: 34rpx; font-weight: bold; }
.time { color: #999; font-size: 24rpx; }
.bottom { display: flex; justify-content: space-between; align-items: center; }
.last-msg { color: #999; font-size: 28rpx; }
.unread-badge { background: #f44; color: #fff; min-width: 40rpx; height: 40rpx; border-radius: 20rpx; text-align: center; line-height: 40rpx; font-size: 24rpx; padding: 0 12rpx; }
.empty { text-align: center; padding-top: 200rpx; color: #999; }
.empty-img { width: 300rpx; height: 300rpx; opacity: 0.6; }
</style>