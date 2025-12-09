"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      cart: []
      // 购物车列表
    };
  },
  computed: {
    // 计算总价（只算选中商品）
    totalPrice() {
      return this.cart.reduce((sum, item) => {
        return item.selected ? sum + item.price * item.quantity : sum;
      }, 0).toFixed(2);
    },
    // 计算选中商品数量
    selectedCount() {
      return this.cart.reduce((count, item) => {
        return item.selected ? count + item.quantity : count;
      }, 0);
    },
    // 是否全选
    allSelected() {
      return this.cart.length > 0 && this.cart.every((item) => item.selected);
    }
  },
  onShow() {
    this.cart = common_vendor.index.getStorageSync("cart") || [];
  },
  methods: {
    // 单选切换
    toggleSelect(index) {
      this.cart[index].selected = !this.cart[index].selected;
      this.updateCart();
    },
    // 全选切换
    toggleAllSelect() {
      const all = !this.allSelected;
      this.cart.forEach((item) => {
        item.selected = all;
      });
      this.updateCart();
    },
    // 数量减1
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity -= 1;
        this.updateCart();
      }
    },
    // 数量加1
    increaseQuantity(index) {
      this.cart[index].quantity += 1;
      this.updateCart();
    },
    // 删除商品
    removeItem(index) {
      common_vendor.index.showModal({
        title: "确认删除",
        content: "确定从购物车删除该商品？",
        success: (res) => {
          if (res.confirm) {
            this.cart.splice(index, 1);
            this.updateCart();
            common_vendor.index.showToast({ title: "已删除", icon: "none" });
          }
        }
      });
    },
    // 更新本地存储
    updateCart() {
      common_vendor.index.setStorageSync("cart", this.cart);
    },
    // 结算（模拟跳转支付页）
    settle() {
      if (this.selectedCount === 0)
        return;
      common_vendor.index.showToast({ title: "跳转支付...（模拟）", icon: "none" });
    },
    // 去首页
    goHome() {
      common_vendor.index.switchTab({ url: "/pages/index/index" });
    },
    // 去商品详情
    toDetail(id) {
      common_vendor.index.redirectTo({ url: `/pages/detail/detail?id=${id}` });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.cart.length > 0
  }, $data.cart.length > 0 ? {
    b: common_vendor.f($data.cart, (item, index, i0) => {
      return {
        a: item.selected,
        b: common_vendor.o(($event) => $options.toggleSelect(index), item.goodsId),
        c: item.cover,
        d: common_vendor.t(item.title),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.toDetail(item.goodsId), item.goodsId),
        g: common_vendor.o(($event) => $options.decreaseQuantity(index), item.goodsId),
        h: common_vendor.t(item.quantity),
        i: common_vendor.o(($event) => $options.increaseQuantity(index), item.goodsId),
        j: common_vendor.o(($event) => $options.removeItem(index), item.goodsId),
        k: "c91e7611-0-" + i0,
        l: item.goodsId
      };
    }),
    c: common_vendor.p({
      type: "trash",
      size: "24",
      color: "#ff4757"
    })
  } : {}, {
    d: $data.cart.length === 0
  }, $data.cart.length === 0 ? {
    e: common_assets._imports_0$2,
    f: common_vendor.o((...args) => $options.goHome && $options.goHome(...args))
  } : {}, {
    g: $data.cart.length > 0
  }, $data.cart.length > 0 ? {
    h: $options.allSelected,
    i: common_vendor.o((...args) => $options.toggleAllSelect && $options.toggleAllSelect(...args)),
    j: common_vendor.t($options.totalPrice),
    k: common_vendor.t($options.selectedCount),
    l: $options.selectedCount === 0,
    m: common_vendor.o((...args) => $options.settle && $options.settle(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c91e7611"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/cart/cart.js.map
