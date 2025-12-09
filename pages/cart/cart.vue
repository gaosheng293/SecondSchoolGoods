<!-- pages/cart/cart.vue -->
<template>
  <view class="cart-page">
    <!-- 顶部导航 -->
    <view class="navbar">
      <text class="title">购物车</text>
    </view>

    <!-- 购物车列表 -->
    <scroll-view scroll-y class="cart-list" v-if="cart.length > 0">
      <view class="cart-item" v-for="(item, index) in cart" :key="item.goodsId">
        <!-- 选中 checkbox -->
        <checkbox :checked="item.selected" @click="toggleSelect(index)" />

        <!-- 商品信息 -->
        <view class="item-info" @click="toDetail(item.goodsId)">
          <image :src="item.cover" class="cover" mode="aspectFill" />
          <view class="info">
            <text class="title">{{ item.title }}</text>
            <text class="price">¥{{ item.price }}</text>
          </view>
        </view>

        <!-- 数量编辑 -->
        <view class="quantity">
          <button @click="decreaseQuantity(index)">-</button>
          <text>{{ item.quantity }}</text>
          <button @click="increaseQuantity(index)">+</button>
        </view>

        <!-- 删除 -->
        <uni-icons type="trash" size="24" color="#ff4757" @click="removeItem(index)" />
      </view>
    </scroll-view>

    <!-- 空购物车提示 -->
    <view class="empty" v-if="cart.length === 0">
      <image src="/static/empty-cart.png" class="empty-img" />
      <text>购物车空空如也，去逛逛吧~</text>
      <button class="go-shop" @click="goHome">去首页逛逛</button>
    </view>

    <!-- 底部结算栏 -->
    <view class="bottom-bar" v-if="cart.length > 0">
      <checkbox :checked="allSelected" @click="toggleAllSelect">全选</checkbox>
      <view class="total">
        <text>合计：</text>
        <text class="price">¥{{ totalPrice }}</text>
      </view>
      <button class="settle-btn" :disabled="selectedCount === 0" @click="settle">结算({{ selectedCount }})</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cart: []  // 购物车列表
    }
  },

  computed: {
    // 计算总价（只算选中商品）
    totalPrice() {
      return this.cart.reduce((sum, item) => {
        return item.selected ? sum + item.price * item.quantity : sum
      }, 0).toFixed(2)
    },

    // 计算选中商品数量
    selectedCount() {
      return this.cart.reduce((count, item) => {
        return item.selected ? count + item.quantity : count
      }, 0)
    },

    // 是否全选
    allSelected() {
      return this.cart.length > 0 && this.cart.every(item => item.selected)
    }
  },

  onShow() {
    // 每次显示页面都从本地存储加载购物车
    this.cart = uni.getStorageSync('cart') || []
  },

  methods: {
    // 单选切换
    toggleSelect(index) {
      this.cart[index].selected = !this.cart[index].selected
      this.updateCart()
    },

    // 全选切换
    toggleAllSelect() {
      const all = !this.allSelected
      this.cart.forEach(item => { item.selected = all })
      this.updateCart()
    },

    // 数量减1
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1
        this.updateCart()
      }
    },

    // 数量加1
    increaseQuantity(index) {
      this.cart[index].quantity += 1
      this.updateCart()
    },

    // 删除商品
    removeItem(index) {
      uni.showModal({
        title: '确认删除',
        content: '确定从购物车删除该商品？',
        success: (res) => {
          if (res.confirm) {
            this.cart.splice(index, 1)
            this.updateCart()
            uni.showToast({ title: '已删除', icon: 'none' })
          }
        }
      })
    },

    // 更新本地存储
    updateCart() {
      uni.setStorageSync('cart', this.cart)
    },

    // 结算（模拟跳转支付页）
    settle() {
      if (this.selectedCount === 0) return
      uni.showToast({ title: '跳转支付...（模拟）', icon: 'none' })
      // 真实场景：跳转到支付页，传递选中商品
      // uni.navigateTo({ url: '/pages/pay/pay?items=' + JSON.stringify(selectedItems) })
    },

    // 去首页
    goHome() {
      uni.switchTab({ url: '/pages/index/index' })
    },

    // 去商品详情
    toDetail(id) {
      uni.redirectTo({ url: `/pages/detail/detail?id=${id}` })
    }
  }
}
</script>

<style scoped>
.cart-page { height: 100vh; display: flex; flex-direction: column; background: #f5f5f5; }

.navbar { height: 90rpx; background: #fff; display: flex; align-items: center; justify-content: center; font-size: 36rpx; font-weight: bold; border-bottom: 1rpx solid #eee; padding-top: var(--status-bar-height); }

.cart-list { flex: 1; padding: 20rpx; }

.cart-item { display: flex; align-items: center; background: #fff; padding: 20rpx; border-radius: 20rpx; margin-bottom: 20rpx; }

.item-info { flex: 1; display: flex; align-items: center; margin-left: 20rpx; }
.cover { width: 160rpx; height: 160rpx; border-radius: 10rpx; margin-right: 20rpx; }
.info { flex: 1; }
.title { font-size: 30rpx; color: #333; margin-bottom: 10rpx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden; }
.price { font-size: 32rpx; color: #ff4757; font-weight: bold; }

.quantity { display: flex; align-items: center; margin: 0 20rpx; }
.quantity button { width: 60rpx; height: 60rpx; line-height: 60rpx; padding: 0; background: #f5f5f5; color: #333; border-radius: 30rpx; }
.quantity text { width: 80rpx; text-align: center; font-size: 32rpx; }

.empty { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #999; font-size: 28rpx; }
.empty-img { width: 300rpx; height: 300rpx; opacity: 0.6; margin-bottom: 40rpx; }
.go-shop { margin-top: 40rpx; background: #007AFF; color: #fff; padding: 20rpx 40rpx; border-radius: 50rpx; }

.bottom-bar { height: 120rpx; background: #fff; border-top: 1rpx solid #eee; display: flex; align-items: center; padding: 0 32rpx; position: fixed; bottom: 0; left: 0; right: 0; }
.total { flex: 1; display: flex; align-items: center; justify-content: flex-end; margin-right: 20rpx; font-size: 32rpx; color: #333; }
.total .price { color: #ff4757; font-weight: bold; }
.settle-btn { background: #ff4757; color: #fff; height: 88rpx; line-height: 88rpx; padding: 0 60rpx; border-radius: 88rpx; font-size: 32rpx; }
.settle-btn[disabled] { background: #ddd; color: #999; }
</style>