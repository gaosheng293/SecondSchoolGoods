<!-- pages/profile/edit.vue -->
<template>
  <view class="page">
    <!-- 顶部渐变背景 -->
    <view class="hero">
      <view class="hero-inner">
        <view class="logo"></view>
        <view class="hero-title">编辑资料</view>
        <view class="hero-sub">完善信息，更容易被信任</view>
      </view>
    </view>

    <view class="content">
      <view class="card">
        <!-- 头像（与 publish.vue 完全一致的上传逻辑） -->
        <view class="input-item" @click="chooseAvatar">
          <text class="label">头像</text>
          <view class="upload-grid avatar-upload">
            <view class="img-item" v-if="form.avatar">
              <image :src="form.avatar" mode="aspectFill" />
              <view class="delete" @click.stop="form.avatar = ''">×</view>
            </view>
            <view class="upload-btn" v-else>
              <uni-icons type="plus" size="36" color="#ddd" />
            </view>
          </view>
          <uni-icons type="arrowright" size="16" color="#ccc" />
        </view>

        <!-- 昵称 -->
        <view class="input-item" @click="openNicknamePopup">
          <text class="label">昵称 <text class="req">*</text></text>
          <text class="value">{{ form.nickname || '未设置' }}</text>
          <uni-icons type="arrowright" size="16" color="#ccc" />
        </view>

        <!-- 学校（不可修改） -->
        <view class="input-item" @click="showSchoolTip">
          <text class="label">学校</text>
          <text class="value">{{ university?.name || '未选择' }}</text>
          <uni-icons type="arrowright" size="16" color="#ccc" />
        </view>
      </view>

      <!-- 保存按钮 -->
      <button class="publish-btn" :loading="saving" @click="saveProfile">
        {{ saving ? '保存中...' : '保存资料' }}
      </button>
    </view>

    <!-- 昵称修改弹窗（与 publish.vue 完全一致的底部弹窗风格） -->
    <uni-popup ref="popup" type="bottom">
      <view class="popup-content">
        <view class="popup-header">
          <text @click="closePopup">取消</text>
          <text class="title">修改昵称</text>
          <text @click="confirmNickname" class="confirm">完成</text>
        </view>
        <view class="nickname-section">
          <input 
            v-model.trim="tempNickname" 
            placeholder="请输入新昵称（2-12个字）" 
            maxlength="12" 
            class="nickname-input"
            focus
          />
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        avatar: '',
        nickname: ''
      },
      university: null,
      tempNickname: '',
      saving: false
    }
  },

  onLoad() {
    this.loadProfile()
  },

  methods: {
    // 加载用户信息
	loadProfile() {
	  const token = uni.getStorageSync('token')
	  if (!token) {
		uni.reLaunch({ url: '/pages/login/login' })
		return
	  }

	  // 优先读本地缓存的 profile（更快、更丝滑）
	  const cachedProfile = uni.getStorageSync('profile')
	  if (cachedProfile) {
		this.form.nickname = cachedProfile.user?.nickname || ''
		this.form.avatar = cachedProfile.user?.avatar || ''
		this.university = cachedProfile.university || null
	  }

	  // 再请求最新数据（确保一致性）
	  uni.request({
		url: 'http://192.168.0.105:8080/api/user/profile',
		header: { Authorization: 'Bearer ' + token },
		success: (res) => {
		  if (res.statusCode === 200 && res.data) {
			const profile = res.data
			this.form.nickname = profile.user?.nickname || ''
			this.form.avatar = profile.user?.avatar || ''
			this.university = profile.university || null

			// 更新本地缓存
			uni.setStorageSync('profile', profile)
		  }
		}
	  })
	},

    // 头像上传（完全复用 publish.vue 的上传逻辑）
    chooseAvatar() {
      uni.chooseImage({
        count: 1,
        success: (res) => {
          const path = res.tempFilePaths[0]
          uni.uploadFile({
            url: 'http://192.168.0.105:8080/api/goods/upload', // 复用商品上传接口
            filePath: path,
            name: 'file',
            header: { Authorization: 'Bearer ' + uni.getStorageSync('token') },
            success: (uploadRes) => {
              const data = JSON.parse(uploadRes.data)
              if (data.url) {
                this.form.avatar = data.url
                uni.showToast({ title: '上传成功', icon: 'success' })
              }
            },
            fail: () => {
              uni.showToast({ title: '上传失败', icon: 'none' })
            }
          })
        }
      })
    },

    // 点击学校提示
    showSchoolTip() {
      uni.showModal({
        title: '提示',
        content: '若想修改学校信息，请去主页修改',
        showCancel: false,
        confirmText: '我知道了'
      })
    },

    // 昵称弹窗
    openNicknamePopup() {
      this.tempNickname = this.form.nickname
      this.$refs.popup.open()
    },
    closePopup() {
      this.$refs.popup.close()
    },
	confirmNickname() {
	  const name = this.tempNickname.trim()
	  if (!name || name.length < 2 || name.length > 12) {
		uni.showToast({ title: '请填写2-12位的昵称', icon: 'none' })
		return
	  }

	  this.form.nickname = name
	  this.form = { ...this.form }  // 这一行，天下我有！

	  this.closePopup()
	},

	// 保存资料（关键：接收并保存新 token + profile）
	saveProfile() {
	  if (!this.form.nickname.trim()) {
		return uni.showToast({ title: '请填写昵称', icon: 'none' })
	  }

	  this.saving = true
	  uni.showLoading({ title: '保存中...' })

	  uni.request({
		url: 'http://192.168.0.105:8080/api/user/update',
		method: 'POST',
		header: { Authorization: 'Bearer ' + uni.getStorageSync('token') },
		data: {
		  nickname: this.form.nickname,
		  avatar: this.form.avatar || ''  // 防止传 null
		},
		success: (res) => {
		  // 兼容你后端返回的两种格式（res.data.data 或直接 res.data）
		  const result = res.data?.data || res.data

		  if (result?.ok) {
			// 关键1：保存新 token（必须！）
			if (result.token) {
			  uni.setStorageSync('token', result.token)
			}

			// 关键2：保存完整 profile（很多页面直接读这个）
			if (result.profile) {
			  uni.setStorageSync('profile', result.profile)
			}

			uni.hideLoading()
			uni.showToast({ title: '保存成功', icon: 'success' })

			// 可选：延迟返回，让用户看到成功提示
			setTimeout(() => {
			  uni.navigateBack()
			}, 1200)
		  } else {
			uni.hideLoading()
			uni.showToast({
			  title: result?.message || '保存失败，请重试',
			  icon: 'none'
			})
		  }
		},
		fail: (err) => {
		  uni.hideLoading()
		  console.error('保存资料失败', err)
		  uni.showToast({ title: '网络错误', icon: 'none' })
		},
		complete: () => {
		  this.saving = false
		}
	  })
	}
  }
}
</script>

<style scoped>
/* 完全复用 publish.vue 的视觉风格 */
.page { background: #f8f8f8; min-height: 100vh; padding-bottom: 100rpx; }
.hero { height: 200px; background: linear-gradient(135deg, #667eea, #764ba2); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; }
.hero-inner { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.logo { width: 64px; height: 64px; border-radius: 32px; background: #fff; opacity: 0.9; margin-bottom: 12px; }
.hero-title { color: #fff; font-size: 22px; font-weight: 600; }
.hero-sub { color: #eef; font-size: 14px; margin-top: 4px; }
.content { padding: 32rpx; margin-top: -40px; }
.card { background: #fff; border-radius: 20rpx; overflow: hidden; box-shadow: 0 6rpx 16rpx rgba(0,0,0,0.06); }
.input-item { padding: 32rpx; display: flex; align-items: center; justify-content: space-between; border-bottom: 1rpx solid #f0f0f0; }
.input-item:last-child { border-bottom: none; }
.label { font-size: 32rpx; }
.req { color: #ff4757; }
.value { flex: 1; text-align: right; color: #333; font-size: 32rpx; margin-right: 20rpx; }

/* 头像上传区域（与 publish.vue 完全一致） */
.avatar-upload { width: 140rpx; height: 140rpx; }
.upload-grid { display: flex; }
.img-item, .upload-btn { width: 140rpx; height: 140rpx; border-radius: 20rpx; overflow: hidden; position: relative; background: #f9f9f9; border: 2rpx dashed #ddd; }
.img-item image { width: 100%; height: 100%; }
.delete { position: absolute; top: 0; right: 0; background: rgba(0,0,0,0.6); color: #fff; width: 40rpx; height: 40rpx; text-align: center; line-height: 40rpx; border-radius: 0 0 0 20rpx; font-size: 40rpx; }
.upload-btn { display: flex; align-items: center; justify-content: center; }

/* 保存按钮（与发布按钮同款） */
.publish-btn { margin: 60rpx 32rpx; background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: #fff; height: 88rpx; line-height: 88rpx; border-radius: 88rpx; font-size: 36rpx; font-weight: bold; }

/* 昵称弹窗（完全复用 publish.vue 的分类弹窗风格） */
.popup-content { background: #fff; border-radius: 24rpx 24rpx 0 0; }
.popup-header { padding: 32rpx; display: flex; justify-content: space-between; align-items: center; font-size: 32rpx; border-bottom: 1rpx solid #eee; }
.popup-header .title { font-weight: bold; }
.popup-header .confirm { color: #007AFF; }
.nickname-section { padding: 40rpx 32rpx; }
.nickname-input { width: 100%; height: 100rpx; border: 2rpx solid #eee; border-radius: 20rpx; padding: 0 32rpx; font-size: 32rpx; text-align: center; }
</style>