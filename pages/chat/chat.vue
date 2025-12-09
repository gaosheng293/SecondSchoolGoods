<template>
  <view class="chat-page">
    <!-- 顶部导航栏 -->
    <view class="navbar">
      <view class="left" @click="back">
        <uni-icons type="back" size="24" color="#fff" />
      </view>
      <view class="title">{{ friendNickname || '聊天中' }}</view>
      <view class="right"></view>
    </view>

    <!-- 消息列表 -->
    <scroll-view
      :scroll-top="scrollTop"
      scroll-y
      class="msg-list"
      @scrolltoupper="loadMore"
      enhanced
      show-scrollbar="false"
    >
      <!-- 加载更多提示 -->
      <view v-if="loading" class="loading-tip">加载中...</view>
      <view v-if="noMore" class="loading-tip">没有更多消息了~</view>

      <view class="msg-item" v-for="msg in messages" :key="msg.id" :class="msg.fromUserId == myId ? 'mine' : 'other'">
        <!-- 对方头像 -->
        <image v-if="msg.fromUserId != myId" class="avatar" :src="friendAvatar || '/static/default-avatar.png'" mode="cover" />
        
        <!-- 消息气泡 -->
        <view class="bubble" :class="msg.fromUserId == myId ? 'my-bubble' : 'other-bubble'">
          <!-- 图片消息 -->
          <image
            v-if="msg.type == 1"
            :src="msg.imageUrl"
            mode="widthFix"
            class="msg-image"
            @click="previewImage(msg.imageUrl)"
          />
          <!-- 文字消息 -->
          <text v-else class="msg-text">{{ msg.content }}</text>
        </view>

        <!-- 自己头像 -->
        <image v-if="msg.fromUserId == myId" class="avatar" :src="myAvatar || '/static/default-avatar.png'" mode="cover" />
      </view>

      <!-- 底部占位 -->
      <view style="height: 120rpx;"></view>
    </scroll-view>

    <!-- 输入栏 -->
    <view class="input-bar">
      <input
        v-model="inputText"
        placeholder="说点什么..."
        class="input"
        @confirm="sendText"
        confirm-type="send"
      />
      <view class="icon-btn" @click="chooseImage">
        <uni-icons type="image" size="28" color="#666" />
      </view>
      <button
        class="send-btn"
        :class="{ active: inputText.trim() }"
        :disabled="!inputText.trim()"
        @click="sendText"
      >发送</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      myId: 0,              // 当前登录用户ID
      myAvatar: '',
      friendId: 0,          // 聊天对象ID
      friendNickname: '',
      friendAvatar: '',

      messages: [],         // 消息列表
      inputText: '',
      page: 1,
      loading: false,
      noMore: false,
      scrollTop: 0
    }
  }, 

  onLoad(options) {
    // 通过 eventChannel 接收数据
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptData', (data) => {
      console.log('接收到数据:', data)  // 加日志验证，控制台会打印
      this.friendId = Number(data.friendId) || 0
      this.friendNickname = data.nickname || '聊天中'
      this.friendAvatar = data.avatar || '/static/default-avatar.png'
      
      if (this.friendId === 0) {
        uni.showToast({ title: '聊天对象错误', icon: 'none' })
        return
      }
      
      this.loadHistory()  // 加载历史消息
    })
    
    // 强制更新 myId
    const userInfo = uni.getStorageSync('userInfo')
    console.log('存储的 userInfo:', userInfo)  // 加日志，控制台看是不是有 id
  
    this.myId = Number(userInfo?.id) || 0
    
    if (this.myId === 0) {
      uni.showToast({ title: '请重新登录', icon: 'none' })
      setTimeout(() => uni.navigateTo({ url: '/pages/login/login' }), 1500)
      return
    }
  
    console.log('更新后的 myId:', this.myId)  // 看是不是 0
  },

  onShow() {
    // 进入聊天页 → 清除消息列表页的未读红点
    this.clearUnreadBadge()
    // 监听全局消息事件
    uni.$on('newChatMessage', this.handleNewMessage)
  },

  onUnload() {
    // 只移除监听，不关闭 socket
    uni.$off('newChatMessage', this.handleNewMessage)
  },

  methods: {
    // 返回
    back() {
      uni.navigateBack() 
    }, 
    // 处理收到的新消息
// 3. 最关键：收到消息时先判断是不是自己发的临时消息（改 handleNewMessage）
	handleNewMessage(msg) {
	  // 如果这条消息是发给当前聊天对象的
	  if (msg.fromUserId === this.friendId || msg.toUserId === this.friendId) {

		// 情况1：找到一条临时消息（id 以 temp_ 开头），就替换它
		const tempIndex = this.messages.findIndex(m => String(m.id).startsWith('temp_'))
		if (tempIndex > -1) {
		  this.messages.splice(tempIndex, 1, msg)  // 替换
		  return
		}

		// 情况2：没找到临时消息，且这条消息不是自己发的，才新增（防止别人给自己发消息也重复）
		if (msg.fromUserId !== this.myId) {
		  this.messages.push(msg)
		}
		// 如果是自己发的正式消息（后端推送回来），但没找到临时消息，也别重复加
		// （这种情况极少，几乎不会发生）

		this.scrollToBottom()
	  }
	},

	sendText() {
	  if (!this.inputText.trim()) return

	  const msgObj = {
		fromUserId: this.myId,
		toUserId: this.friendId,
		content: this.inputText.trim(),
		type: 0
	  }

	  // 乐观更新：用一个固定前缀的临时ID
	  const tempId = 'temp_' + Date.now() + Math.random()
	  this.messages.push({
		...msgObj,
		id: tempId,
		createTime: new Date().toISOString()
	  })
	  this.scrollToBottom()
	  this.inputText = ''

	  // 真正发送
	  uni.sendSocketMessage({
		data: JSON.stringify(msgObj),
		fail: () => {
		  uni.showToast({ title: '发送失败', icon: 'none' })
		  // 发送失败就把临时的那条删掉
		  const idx = this.messages.findIndex(m => m.id === tempId)
		  if (idx > -1) this.messages.splice(idx, 1)
		}
	  })
	},

    // 选择并发送图片
    chooseImage() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        success: async (res) => {
          const filePath = res.tempFilePaths[0] 
          uni.showLoading({ title: '发送中...' })

          try {
            const uploadRes = await uni.uploadFile({
              url: 'http://192.168.0.105:8080/api/goods/upload',  // 统一 IP
              filePath: filePath,
              name: 'file',
              header: {
                Authorization: 'Bearer ' + uni.getStorageSync('token')
              }
            })

            const result = JSON.parse(uploadRes.data)
            if (result.url) {
              const msg = {
                fromUserId: this.myId,
                toUserId: this.friendId,
                imageUrl: result.url,
                type: 1
              }
              this.sendMessage(msg)
            } else {
              uni.showToast({ title: '上传失败', icon: 'none' })
            }
          } catch (e) {
            uni.showToast({ title: '发送失败', icon: 'none' })
          } finally {
            uni.hideLoading()
          }
        }
      })
    },

    // 真正发送（WebSocket）
  // 2. 发图片也一样（chooseImage 里调用 sendMessage 前加临时ID）
	  sendMessage(msgObj) {
		const tempId = 'temp_' + Date.now() + Math.random()
		this.messages.push({
		  ...msgObj,
		  id: tempId,
		  createTime: new Date().toISOString()
		})
		this.scrollToBottom()
	  
		uni.sendSocketMessage({
		  data: JSON.stringify(msgObj),
		  fail: () => {
			const idx = this.messages.findIndex(m => m.id === tempId)
			if (idx > -1) this.messages.splice(idx, 1)
		  }
		})
	  },

    loadHistory() {
      if (this.loading || this.noMore) return
      this.loading = true

      const token = uni.getStorageSync('token')
      if (!token) {
        uni.showToast({ title: '请重新登录', icon: 'none' })
        this.loading = false
        return
      }

      uni.request({
        url: 'http://192.168.0.105:8080/api/chat/history',  // 统一 IP
        method: 'GET',
        data: {
          friendId: this.friendId,
          page: this.page,
          size: 30
        },
        header: {
          Authorization: 'Bearer ' + token
        },
        success: (res) => {
          if (res.data && res.data.list) {
            const list = res.data.list.reverse()
            this.messages.unshift(...list)

            if (list.length < 30) this.noMore = true
            this.page++

            if (this.page === 2) {
              this.$nextTick(() => this.scrollToBottom())
            }
          }
        },
        fail: (err) => {
          console.error('加载失败', err)
          uni.showToast({ title: '加载失败，请检查网络', icon: 'none' })
        },
        complete: () => {
          this.loading = false
        }
      })
    },

    // 上拉加载更多
    loadMore() {
      if (!this.loading && !this.noMore) {
        this.loadHistory()
      }
    },

    // 滚动到底部
    scrollToBottom() {
      this.$nextTick(() => {
        this.scrollTop = 999999
      })
    },

    // 预览图片
    previewImage(url) {
      uni.previewImage({
        urls: [url],
        current: url
      })
    },

    // 清除消息列表页的未读红点（优雅实现）
    clearUnreadBadge() {
      try {
        const pages = getCurrentPages()
        if (pages.length < 2) return
        const prevPage = pages[pages.length - 2]
        if (!prevPage || prevPage.route !== 'pages/chat-list/chat-list') return
        if (!prevPage.sessions || !Array.isArray(prevPage.sessions)) return

        const session = prevPage.sessions.find(s => Number(s.friendId) === Number(this.friendId))
        if (session) session.unread = 0
      } catch (e) {
        console.log('清除未读失败，无需处理', e)
      }
    }
  }
}
</script>

<style scoped>
.chat-page { height: 100vh; display: flex; flex-direction: column; background: #f5f5f5; }

.navbar {
  height: 90rpx;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30rpx;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-top: var(--status-bar-height);
}
.title { font-size: 36rpx; font-weight: bold; }

.msg-list {
  flex: 1;
  padding: 20rpx 30rpx 140rpx;
  padding-top: 110rpx;
  box-sizing: border-box;
}

.msg-item {
  display: flex;
  margin-bottom: 40rpx;
  align-items: flex-end;
}
.msg-item.mine { flex-direction: row-reverse; }

.avatar {
  width: 88rpx;
  height: 88rpx;
  border-radius: 50%;
  background: #fff;
  flex-shrink: 0;
}

.bubble {
  max-width: 540rpx;
  margin: 0 20rpx;
  padding: 20rpx 28rpx;
  border-radius: 30rpx;
  position: relative;
  word-break: break-all;
  line-height: 1.5;
}
.other-bubble {
  background: #fff;
  border-bottom-left-radius: 6rpx;
}
.my-bubble {
  background: #95ec69;
  border-bottom-right-radius: 6rpx;
}
.msg-text { font-size: 32rpx; }
.msg-image { max-width: 400rpx; border-radius: 20rpx; }

.input-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  border-top: 1px solid #eee;
  box-sizing: border-box;
}
.input {
  flex: 1;
  height: 70rpx;
  background: #f5f5f5;
  border-radius: 35rpx;
  padding: 0 30rpx;
  font-size: 32rpx;
}
.icon-btn { padding: 0 20rpx; }
.send-btn {
  width: 120rpx;
  height: 70rpx;
  line-height: 70rpx;
  padding: 0;
  font-size: 32rpx;
  background: #ddd;
  color: #999;
  border-radius: 35rpx;
  margin-left: 20rpx;
}
.send-btn.active {
  background: #007AFF;
  color: #fff;
}

.loading-tip {
  text-align: center;
  padding: 20rpx;
  color: #999;
  font-size: 28rpx;
}
</style>