<!-- pages/publish/publish.vue  终极干净版（推荐永久使用） -->
<template>
	<view class="publish-page">
		<view class="form">
			<!-- 标题 -->
			<view class="input-item">
				<text class="label">标题 <text class="req">*</text></text>
				<input v-model.trim="form.title" placeholder="好标题是成功的一半～" maxlength="50" />
			</view>

			<!-- 价格 --> 
			<view class="price-row">
				<view class="input-item">
					<text class="label">价格 <text class="req">*</text></text>
					<input v-model="priceStr" type="digit" placeholder="必填，只能是数字" @input="filterNumber"/>
					<!-- <text v-if="priceError" class="error-message">{{ priceError }}</text> -->
				</view>
				<view class="input-item">
					<text class="label">原价</text>
					<input v-model="originalPriceStr" type="digit" placeholder="可不填" @input="filterNumber2"/>
					<!-- <text v-if="originalError" class="error-message">{{ originalError }}</text> -->
				</view>
			</view>

			<!-- 分类 -->
			<view class="input-item" @click="openCategoryPopup">
				<text class="label">分类 <text class="req">*</text></text>
				<text class="value">{{ selectedCategoryName || '请选择分类' }}</text>
				<uni-icons type="arrowright" size="16" color="#ccc" />
			</view>

			<!-- 上传图片 -->
			<view class="upload-section">
				<text class="label">商品图片 <text class="req">*</text> (最多9张)</text>
				<view class="upload-grid">
					<view v-for="(img, i) in form.images" :key="i" class="img-item">
						<image :src="img" mode="aspectFill" />
						<view class="delete" @click="form.images.splice(i, 1)">×</view>
					</view>
					<view class="upload-btn" v-if="form.images.length < 9" @click="chooseImage">
						<uni-icons type="plus" size="36" color="#ddd" />
					</view>
				</view>
			</view>

			<!-- 描述 -->
			<view class="desc-section">
				<text class="label">详细描述</text>
				<textarea v-model="form.description" placeholder="成色、尺寸、购买时间...越详细越好哦～" class="desc-input" />
			</view>

			<!-- 联系方式 -->
			<view class="contact-section">
				<text class="section-title">联系方式（至少填一个）</text>
				<view class="input-item">
					<text class="label">微信</text>
					<input v-model.trim="form.wechat" placeholder="留微信最快成交" />
				</view>
				<view class="input-item">
					<text class="label">手机</text>
					<input v-model.trim="form.phone" type="number" placeholder="选填" />
				</view>
				<view class="input-item">
					<text class="label">QQ</text>
					<input v-model.trim="form.qq" placeholder="选填" />
				</view>
			</view>

			<!-- 可刀 & 包邮 -->
			<view class="options">
				<view class="option-item" @click="form.isNegotiable = !form.isNegotiable">
					<uni-icons :type="form.isNegotiable ? 'checkmarkempty' : 'circle'" color="#ff4757" size="24" />
					<text :class="{ active: form.isNegotiable }">可小刀</text>
				</view>
				<view class="option-item" @click="form.isFreeShipping = !form.isFreeShipping">
					<uni-icons :type="form.isFreeShipping ? 'checkmarkempty' : 'circle'" color="#4cd964" size="24" />
					<text :class="{ active: form.isFreeShipping }">包邮</text>
				</view>
			</view>

			<!-- 发布按钮 -->
			<button class="publish-btn" @click="submit" :disabled="submitting">
				{{ submitting ? '发布中...' : '立即发布' }}
			</button>
		</view>

		<!-- 分类弹窗 -->
		<uni-popup ref="popup" type="bottom">
			<view class="popup-content">
				<view class="popup-header">
					<text @click="closePopup">取消</text>
					<text class="title">选择分类</text>
					<text></text>
				</view>
				<view class="category-grid">
					<view v-for="c in categories" :key="c.id" class="cat-item" 
						@click="selectCategory(c.id, c.name)">
						{{ c.name }}
					</view>
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
				title: '',
				price: null,
				originalPrice: null,
				categoryId: null,
				images: [],
				description: '',
				wechat: '',
				phone: '',
				qq: '',
				isNegotiable: false,
				isFreeShipping: false
			},
			priceStr: '',
			originalPriceStr: '',
			selectedCategoryName: '',
			categories: [],        // 重点：一定要在这里定义
			submitting: false,
			categoryLoading: false ,// 新增：加载状态，防止弹窗前没数据
			hasEverLeft: false  ,// 新增这个标志位
			// priceError: '',         // 独立的错误消息
			// originalError: '',      // 独立的错误消息
		}
	},

	// 关键：onLoad 里必须先加载分类！
	onLoad() {
		this.resetForm()
		this.loadCategories()   // 必须调用！
		this.hasEverLeft = false  // 第一次进来不弹窗，直接加载,重置标志位
	},
	
	onShow() {
		// 只有在已经离开过页面后再切回来时才弹（避免第一次进入就弹）
		// 判断form里面的元素是否都没被赋值
		const f = this.form
		
		const isEmptyForm  =  (
		    !f.title?.trim() &&                     // 标题为空
		    f.price === null &&                     // 价格未填
		    f.originalPrice === null &&             // 原价未填
		    f.categoryId === null &&                // 没选分类
		    f.images.length === 0 &&                // 没传图
		    !f.description?.trim() &&               // 描述为空
		    !f.wechat?.trim() &&                    // 微信为空
		    !f.phone?.trim() &&                     // 手机为空
		    !f.qq?.trim() &&                        // QQ为空
		    f.isNegotiable === false &&             // 可刀未勾
		    f.isFreeShipping === false              // 包邮未勾
		  )
		if (this.hasEverLeft && !isEmptyForm ) {
			uni.showModal({
				title: '检测到您离开过发布页',
				content: '是否重新加载页面？（选择“是”将清空所有内容重新开始）',
				confirmText: '重新加载',
				cancelText: '继续编辑',
				success: (res) => {
					if (res.confirm) {
						// 点“是” → 完全重置，就像第一次进来一样
						this.resetForm()
						this.loadCategories()
						uni.showToast({ title: '已重新加载', icon: 'success' })
					} else {
						// 点“否” → 啥也不干，保留当前内容
						console.log('继续编辑，不重置')
					}
				}
			})
		}
		// 标记：已经展示过一次页面了
		this.hasEverLeft = true
	},
	onUnload() {
		// 彻底离开页面（如关闭页面）时也标记
		this.hasEverLeft = true
	},
	methods: {
		
		// 强制重置
		resetForm() {
			this.form = {
				title: '', price: null, originalPrice: null, categoryId: null,
				images: [], description: '', wechat: '', phone: '', qq: '',
				isNegotiable: false, isFreeShipping: false
			}
			this.priceStr = ''
			this.originalPriceStr = ''
			this.selectedCategoryName = ''
			this.categories = []         // 清空旧数据
			this.submitting = false
		},

		// 关键：这个函数必须存在，而且要 async + await！
		async loadCategories() {
			this.categoryLoading = true
			const token = uni.getStorageSync('token')
			if (!token) {
				uni.showToast({ title: '请先登录', icon: 'none' })
				this.categoryLoading = false
				return
			}

			try {
				const res = await uni.request({
					url: 'http://192.168.0.105:8080/api/categories',
					header: { Authorization: 'Bearer ' + token }
				})
				const result = res[1] || res
				if (result.statusCode === 200 && Array.isArray(result.data)) {
					this.categories = result.data
					console.log('分类加载成功：', this.categories) // 调试神器！
				} else {
					uni.showToast({ title: '分类加载失败', icon: 'none' })
				}
			} catch (e) {
				console.error('分类请求出错', e)
				uni.showToast({ title: '网络错误', icon: 'none' })
			} finally {
				this.categoryLoading = false
			}
		},

		// 点击分类时，防止数据没加载完就弹窗
		openCategoryPopup() {
			if (this.categories.length === 0) {
				uni.showToast({ title: '分类加载中...', icon: 'loading' })
				this.loadCategories().then(() => {
					setTimeout(() => this.$refs.popup.open(), 300) // 确保数据渲染完再弹
				})
			} else {
				this.$refs.popup.open()
			}
		},

		closePopup() { this.$refs.popup.close() },
		selectCategory(id, name) {
			this.form.categoryId = id
			this.selectedCategoryName = name
			this.closePopup()
		},

		// 价格输入过滤
		filterNumber(e) {
			// this.priceError = ''  // 先清空错误
			let val = e.detail.value

			if (val && !/^\d+(\.\d{0,2})?$/.test(val)) {				
				uni.showModal({
					title: '提示',
					content: '价格必须是纯数字，小数点后最多两位',
					confirmColor: '#ee6666', //确定字体颜色
					showCancel: false,//没有取消按钮的弹框
					buttonText: '确定',
					success: (res) => {
						if (res.confirm) {
							this.form.price = ''
							this.priceStr = ''
						}
					}
				})
			}
			this.form.price = val ? Number(val) : null
			this.priceStr = val
		},

		filterNumber2(e) {
			// this.originalError = ''
			let val = e.detail.value
			
			if (val && !/^\d+(\.\d{0,2})?$/.test(val)) {				
				uni.showModal({
					title: '提示',
					content: '原价必须是纯数字，小数点后最多两位',
					confirmColor: '#ee6666', //确定字体颜色
					showCancel: false,//没有取消按钮的弹框
					buttonText: '确定',
					success: (res) => {
						if (res.confirm) {
							this.form.originalPriceStr = ''
							this.originalPriceStr = ''
						}
					}
				})
			}
			this.form.originalPrice = val ? Number(val) : null
			this.originalPriceStr = val
		},

		// 上传图片和 submit 保持不变...
		chooseImage() {
			uni.chooseImage({
				count: 9 - this.form.images.length,
				success: (res) => {
					res.tempFilePaths.forEach(path => {
						uni.uploadFile({
							url: 'http://192.168.0.105:8080/api/goods/upload',
							filePath: path,
							name: 'file',
							header: { Authorization: 'Bearer ' + uni.getStorageSync('token') },
							success: (uploadRes) => {
								const data = JSON.parse(uploadRes.data)
								if (data.url) this.form.images.push(data.url)
							}
						})
					})
				}
			})
		},

		submit() {
			if (!this.form.title) return uni.showToast({ title: '请填写标题', icon: 'none' })
			if (!this.form.price || this.form.price <= 0) return uni.showToast({ title: '请填写正确的价格', icon: 'none' })
			if (!this.form.categoryId) return uni.showToast({ title: '请选择分类', icon: 'none' })
			if (this.form.images.length === 0) return uni.showToast({ title: '至少上传一张图片', icon: 'none' })
			if (!this.form.wechat && !this.form.phone && !this.form.qq) return uni.showToast({ title: '至少填写一种联系方式', icon: 'none' })

			this.submitting = true
			uni.showLoading({ title: '发布中...' })

			uni.request({
				url: 'http://192.168.0.105:8080/api/goods/publish',
				method: 'POST',
				header: { Authorization: 'Bearer ' + uni.getStorageSync('token') },
				data: this.form,
				success: () => {
					uni.showToast({ title: '发布成功！', icon: 'success' })
					setTimeout(() => uni.switchTab({ url: '/pages/index/index' }), 1000)
				},
				fail: () => uni.showToast({ title: '发布失败', icon: 'none' }),
				complete: () => {
					this.submitting = false
					uni.hideLoading()
				}
			})
		}
	}
}
</script>
<style scoped>
.publish-page { background: #f8f8f8; min-height: 100vh; padding-bottom: 100rpx; }
.form { padding: 32rpx; }
.input-item { background: #fff; padding: 32rpx; margin-bottom: 20rpx; border-radius: 20rpx; display: flex; align-items: center; justify-content: space-between; }
.label { font-size: 32rpx; }
.req { color: #ff4757; }
input { flex: 1; text-align: right; font-size: 32rpx; }
.value { flex: 1; text-align: right; color: #333; }
.upload-grid { display: flex; flex-wrap: wrap; margin-top: 20rpx; }
.img-item, .upload-btn { width: 200rpx; height: 200rpx; margin-right: 20rpx; margin-bottom: 20rpx; border-radius: 20rpx; overflow: hidden; position: relative; background: #f9f9f9; border: 2rpx dashed #ddd; }
.img-item image { width: 100%; height: 100%; }
.delete { position: absolute; top: 0; right: 0; background: rgba(0,0,0,0.6); color: #fff; width: 40rpx; height: 40rpx; text-align: center; line-height: 40rpx; border-radius: 0 0 0 20rpx; }
.upload-btn { display: flex; align-items: center; justify-content: center; }
.desc-input { width: 100%; height: 300rpx; padding: 20rpx; border: 1px solid #eee; border-radius: 16rpx; margin-top: 16rpx; background: #fff; }
.options { display: flex; justify-content: space-around; padding: 40rpx 0; }
.option-item { display: flex; align-items: center; font-size: 32rpx; }
.option-item text { margin-left: 16rpx; }
.option-item .active { color: #ff4757; }
.publish-btn { margin: 60rpx 32rpx; background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: #fff; height: 88rpx; line-height: 88rpx; border-radius: 88rpx; font-size: 36rpx; font-weight: bold; }
.popup-content { background: #fff; border-radius: 24rpx 24rpx 0 0; }
.popup-header { padding: 32rpx; display: flex; justify-content: space-between; font-size: 32rpx; border-bottom: 1rpx solid #eee; }
.category-grid { display: flex; flex-wrap: wrap; padding: 32rpx; }
.cat-item { width: 33.33%; text-align: center; padding: 32rpx 0; font-size: 30rpx; }
</style>