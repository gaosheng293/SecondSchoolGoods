<!-- pages/address/list.vue -->
<template>
  <view class="address-page">
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

    <view class="list">
      <view v-for="item in addressList" :key="item.id" class="address-item">
        <view class="info">
          <text class="name">{{ item.name }}  {{ item.phone }}</text>
          <text class="addr">{{ item.address }}</text>
        </view>
        <view class="actions">
          <text class="default" v-if="item.isDefault">默认</text>
          <uni-icons type="compose" size="20" color="#666" @click="toEdit(item.id)" />
          <uni-icons type="trash" size="20" color="#ff4757" @click="deleteAddr(item.id)" />
        </view>
        <view class="set-default" @click="setDefault(item.id)" v-if="!item.isDefault">设为默认</view>
      </view>

      <view class="empty" v-if="!addressList.length">
        <image src="/static/empty.png" class="empty-img" mode="widthFix" />
        <text class="empty-text">暂无收货地址</text>
      </view>
    </view>

    <button class="add-btn" @click="toAdd">添加新地址</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0,
      addressList: []
    }
  },

  onLoad() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
    this.loadList()
  },

  onShow() {
    this.loadList()  // 从编辑返回刷新
  },

  methods: {
    loadList() {
      const token = uni.getStorageSync('token')
      if (!token) return uni.showToast({ title: '请登录', icon: 'none' })

      uni.request({
        url: 'http://192.168.0.105:8080/api/address/list',
        header: { Authorization: 'Bearer ' + token },
        success: (res) => {
          if (res.statusCode === 200 && res.data?.list) {
            this.addressList = res.data.list
          }
        }
      })
    },

    toAdd() {
      uni.navigateTo({ url: '/pages/address/edit' })
    },

    toEdit(id) {
      uni.navigateTo({ url: `/pages/address/edit?id=${id}` })
    },

    deleteAddr(id) {
      uni.showModal({
        title: '确认删除？',
        success: (res) => {
          if (res.confirm) {
            const token = uni.getStorageSync('token')
            uni.request({
              url: `http://192.168.0.105:8080/api/address/${id}`,
              method: 'DELETE',
              header: { Authorization: 'Bearer ' + token },
              success: () => {
                uni.showToast({ title: '删除成功' })
                this.loadList()
              }
            })
          }
        }
      })
    },

    setDefault(id) {
      const token = uni.getStorageSync('token')
      uni.request({
        url: `http://192.168.0.105:8080/api/address/default/${id}`,
        method: 'PUT',
        header: { Authorization: 'Bearer ' + token },
        success: () => {
          uni.showToast({ title: '设为默认成功' })
          this.loadList()
        }
      })
    }
  }
}
</script>

<style scoped>
.address-page { background: #f8f8f8; min-height: 100vh; padding-bottom: 140rpx; }
.list { padding: 20rpx; }
.address-item { background: #fff; border-radius: 20rpx; padding: 32rpx; margin-bottom: 24rpx; position: relative; }
.info .name { font-size: 32rpx; color: #333; font-weight: bold; }
.info .addr { font-size: 28rpx; color: #666; margin-top: 12rpx; display: block; }
.actions { position: absolute; top: 32rpx; right: 32rpx; display: flex; gap: 32rpx; align-items: center; }
.default { background: #ff4757; color: #fff; padding: 4rpx 12rpx; border-radius: 8rpx; font-size: 24rpx; }
.set-default { position: absolute; bottom: 32rpx; right: 32rpx; color: #007AFF; font-size: 28rpx; }
.empty { text-align: center; padding-top: 200rpx; color: #999; }
.empty-img { width: 360rpx; }
.empty-text { display: block; margin-top: 40rpx; font-size: 30rpx; }
.add-btn { position: fixed; bottom: 40rpx; left: 32rpx; right: 32rpx; background: #ff4757; color: #fff; height: 88rpx; line-height: 88rpx; border-radius: 88rpx; font-size: 32rpx; }
</style>