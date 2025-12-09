<!-- pages/address/edit.vue -->
<template>
  <view class="edit-page">
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

    <view class="form">
      <view class="form-item">
        <text class="label">收货人</text>
        <input v-model="form.name" placeholder="请输入姓名" />
      </view>
      <view class="form-item">
        <text class="label">手机号</text>
        <input v-model="form.phone" placeholder="请输入手机号" type="number" />
      </view>
      <view class="form-item">
        <text class="label">详细地址</text>
        <textarea v-model="form.address" placeholder="请输入详细地址" />
      </view>
      <view class="form-item switch-item">
        <text class="label">设为默认</text>
        <switch :checked="form.isDefault" @change="form.isDefault = $event.detail.value" />
      </view>
    </view>

    <button class="save-btn" @click="save">保存</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0,
      form: {
        id: null,
        name: '',
        phone: '',
        address: '',
        isDefault: false
      }
    }
  },

  onLoad(options) {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
    if (options.id) {
      this.loadAddress(options.id)
    }
  },

  methods: {
    loadAddress(id) {
      const token = uni.getStorageSync('token')
      uni.request({
        url: `http://192.168.0.105:8080/api/address/${id}`,  // 假设后端有 GET /address/{id}，如果没有，用 list 过滤
        header: { Authorization: 'Bearer ' + token },
        success: (res) => {
          if (res.statusCode === 200) {
            this.form = res.data
          }
        }
      })
    },

    save() {
      const token = uni.getStorageSync('token')
      uni.request({
        url: 'http://192.168.0.105:8080/api/address/save',
        method: 'POST',
        header: { Authorization: 'Bearer ' + token },
        data: this.form,
        success: (res) => {
          if (res.statusCode === 200 && res.data.ok) {
            uni.showToast({ title: '保存成功' })
            uni.navigateBack()
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.edit-page { background: #f8f8f8; min-height: 100vh; padding: 40rpx; }
.form { background: #fff; border-radius: 24rpx; padding: 40rpx; }
.form-item { display: flex; align-items: center; border-bottom: 1rpx solid #eee; padding: 32rpx 0; }
.form-item:last-child { border-bottom: none; }
.label { width: 180rpx; font-size: 32rpx; color: #333; }
input, textarea { flex: 1; font-size: 32rpx; color: #666; }
textarea { height: 200rpx; }
.switch-item { justify-content: space-between; }
.save-btn { margin-top: 60rpx; background: #ff4757; color: #fff; height: 88rpx; line-height: 88rpx; border-radius: 88rpx; font-size: 32rpx; }
</style>