<script>
export default {
  globalData: {
    socketConnected: false
  },

  onLaunch() {
    this.initGlobalSocket()
  },

  methods: {
    initGlobalSocket() {
      const token = uni.getStorageSync('token')
      const userInfo = uni.getStorageSync('userInfo')
      if (!token || !userInfo?.id) return

      console.log('【全局】准备连接 WebSocket')

      uni.connectSocket({
        url: `ws://192.168.0.105:8080/ws/chat?token=${token}&userId=${userInfo.id}`
      })

      // 全局监听（关键！）
      uni.onSocketOpen(() => {
        console.log('【全局】WebSocket 连接成功')
        this.globalData.socketConnected = true
      })

      uni.onSocketMessage((res) => {
        try {
          const data = JSON.parse(res.data)
          if (data.type === 'message') {
            uni.$emit('newChatMessage', data.msg)
          }
        } catch (e) {}
      })

      uni.onSocketError((err) => {
        console.log('【全局】WebSocket 错误', err)
        this.globalData.socketConnected = false
      })

      // 绝对不要写 uni.closeSocket()！！
      // 微信自己会清理，我们只负责监听关闭后重连
      uni.onSocketClose(() => {
        console.log('【全局】WebSocket 已关闭，3秒后重连')
        this.globalData.socketConnected = false
        setTimeout(() => {
          this.initGlobalSocket()
        }, 3000)
      })
    }
  }
}
</script>