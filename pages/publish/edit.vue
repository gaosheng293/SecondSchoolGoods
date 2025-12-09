<!-- pages/publish/edit.vue -->
<template>
  <view class="edit-page">
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>

    <view class="form">
      <view class="form-item">
        <text class="label">商品标题</text>
        <input v-model="goods.title" placeholder="请输入标题" />
      </view>
      <view class="form-item">
        <text class="label">价格</text>
        <input v-model.number="goods.price" type="digit" placeholder="0.00" />
      </view>
      <view class="form-item">
        <text class="label">商品描述</text>
        <textarea v-model="goods.description" placeholder="描述一下商品状况、新旧程度等" />
      </view>

      <!-- 图片上传区域（可复用你原来的发布页逻辑） -->
      <view class="upload-box">
        <text class="label">商品图片（最多9张）</text>
        <view class="image-grid">
          <view v-for="(img, i) in goods.images" :key="i" class="image-item">
            <image :src="img" mode="aspectFill" />
            <view class="delete" @click="removeImage(i)">
              <uni-icons type="close" size="20" color="#fff" />
            </view>
          </view>
          <view class="add-btn" v-if="goods.images.length < 9" @click="chooseImage">
            <uni-icons type="plus" size="40" color="#ccc" />
          </view>
        </view>
      </view>
    </view>

    <button class="save-btn" @click="save">保存修改</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: 0,
      goods: {
        id: null,
        title: '',
        price: 0,
        description: '',
        images: []
      }
    }
  },

  onLoad(options) {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
    if (options.id) {
      this.goods.id = options.id
      this.loadGoods()
    }
  },

  methods: {
    loadGoods() {
      const token = uni.getStorageSync('token')
      uni.request({
        url: `http://192.168.0.105:8080/api/goods/detail/${this.goods.id}`,
        header: { Authorization: 'Bearer ' + token },
        success: (res) => {
          if (res.statusCode === 200 && res.data) {
            const g = res.data
            // 处理图片
            if (typeof g.images === 'string') {
              try { g.images = JSON.parse(g.images) }
              catch { g.images = g.images.split(',').filter(Boolean) }
            }
            this.goods = g
          }
        }
      })
    },

    chooseImage() {
      uni.chooseImage({
        count: 9 - this.goods.images.length,
        success: (res) => {
          const tempFiles = res.tempFilePaths
          // 上传图片（你已有上传逻辑，这里简化为直接存路径，实际应上传到服务器）
          this.goods.images = [...this.goods.images, ...tempFiles]
        }
      })
    },

    removeImage(i) {
      this.goods.images.splice(i, 1)
    },

	save() {
	  if (!this.goods.title || !this.goods.price) {
		return uni.showToast({ title: '请填写完整', icon: 'none' })
	  }

	  // 关键：保存前把 images 数组转成 JSON 字符串
	  const data = {
		...this.goods,
		images: JSON.stringify(this.goods.images)  // ← 重点！
	  }

	  const token = uni.getStorageSync('token')
	  uni.request({
		url: 'http://192.168.0.105:8080/api/goods/update',
		method: 'POST',
		header: { 
		  'Authorization': 'Bearer ' + token,
		  'Content-Type': 'application/json'
		},
		data: data,
		success: (res) => {
		  if (res.data.ok) {
			uni.showToast({ title: '修改成功' })
			setTimeout(() => uni.navigateBack(), 1000)
		  }
		}
	  })
	}
  }
}
</script>

<style scoped>
.edit-page { background: #f8f8f8; min-height: 100vh; padding-bottom: 120rpx; }
.form { background: #fff; }
.form-item { padding: 32rpx; border-bottom: 1rpx solid #eee; }
.label { display: block; font-size: 32rpx; color: #333; margin-bottom: 20rpx; }
input, textarea { font-size: 32rpx; color: #666; }
textarea { height: 300rpx; }

.upload-box { padding: 32rpx; }
.image-grid { display: flex; flex-wrap: wrap; gap: 20rpx; margin-top: 20rpx; }
.image-item { position: relative; width: 200rpx; height: 200rpx; }
.image-item image { width: 100%; height: 100%; border-radius: 16rpx; }
.delete { position: absolute; top: 8rpx; right: 8rpx; background: rgba(0,0,0,0.6); border-radius: 50%; padding: 4rpx; }
.add-btn { width: 200rpx; height: 200rpx; background: #f5f5f5; border-radius: 16rpx; display: flex; align-items: center; justify-content: center; }

.save-btn { margin: 40rpx 32rpx; background: #ff4757; color: #fff; height: 88rpx; line-height: 88rpx; border-radius: 88rpx; font-size: 34rpx; }
</style>