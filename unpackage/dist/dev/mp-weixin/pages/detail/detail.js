"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goodsId: 0,
      goods: {},
      recommendList: [],
      // 猜你喜欢列表
      recommendLeft: [],
      // 瀑布流左列
      recommendRight: [],
      // 瀑布流右列
      statusBarHeight: 0
    };
  },
  onLoad(options) {
    this.goodsId = Number(options.id) || 0;
    if (!this.goodsId) {
      common_vendor.index.showToast({ title: "参数错误", icon: "none" });
      setTimeout(() => common_vendor.index.navigateBack(), 1500);
      return;
    }
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    this.loadGoods();
    common_vendor.index.$on("likeUpdated", this.handleLikeUpdate);
  },
  // handleLikeUpdate(data) {
  //   if (this.goodsId === data.goodsId) {
  // 	this.goods.isLiked = data.isLiked
  // 	this.goods.likeCount = data.likeCount
  //   }
  // },
  // 清理监听（防止内存泄漏）
  onUnload() {
  },
  methods: {
    async loadGoods() {
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/goods/detail/" + this.goodsId,
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          if (res.statusCode === 200 && res.data) {
            let goods = res.data;
            if (goods.images && typeof goods.images === "string") {
              try {
                goods.images = JSON.parse(goods.images);
              } catch (e) {
                goods.images = goods.images.split(",").map((s) => s.trim()).filter((s) => s);
              }
              if (!Array.isArray(goods.images)) {
                goods.images = [];
              }
            }
            this.goods = goods;
          } else {
            common_vendor.index.showToast({ title: "加载失败", icon: "none" });
          }
        }
      });
    },
    previewImage(index) {
      common_vendor.index.previewImage({
        urls: this.goods.images,
        current: index
      });
    },
    copy(text) {
      common_vendor.index.setClipboardData({ data: text, showToast: true });
    },
    makeCall(phone) {
      common_vendor.index.makePhoneCall({ phoneNumber: phone });
    },
    showContact() {
      this.$refs.contactPopup.open();
    },
    toChat() {
      common_vendor.index.navigateTo({
        url: "/pages/chat/chat",
        success: (res) => {
          res.eventChannel.emit("acceptData", {
            friendId: Number(this.goods.userId),
            nickname: this.goods.nickname || "用户",
            avatar: this.goods.avatar || ""
          });
        }
      });
    },
    toUserHome(userId) {
      common_vendor.index.navigateTo({ url: `/pages/user/home?userId=${userId}` });
    },
    toDetail(id) {
      if (id === this.goodsId)
        return;
      common_vendor.index.redirectTo({ url: `/pages/detail/detail?id=${id}` });
    },
    // 点赞（可扩展真实接口）
    toggleLike() {
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        common_vendor.index.showToast({ title: "请先登录", icon: "none" });
        return;
      }
      this.goods.isLiked = !this.goods.isLiked;
      this.goods.likeCount += this.goods.isLiked ? 1 : -1;
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/user/like/${this.goodsId}`,
        method: "POST",
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          const result = res.data;
          if (result.ok) {
            this.goods.isLiked = result.isLiked;
            this.goods.likeCount = result.likeCount;
            common_vendor.index.$emit("likeUpdated", {
              goodsId: this.goodsId,
              isLiked: this.goods.isLiked,
              likeCount: this.goods.likeCount
            });
          } else {
            this.goods.isLiked = !this.goods.isLiked;
            this.goods.likeCount += this.goods.isLiked ? 1 : -1;
            common_vendor.index.showToast({ title: "操作失败", icon: "none" });
          }
        },
        fail: () => {
          this.goods.isLiked = !this.goods.isLiked;
          this.goods.likeCount += this.goods.isLiked ? 1 : -1;
          common_vendor.index.showToast({ title: "网络错误", icon: "none" });
        }
      });
    },
    // 新增：加入购物车
    addToCart() {
      let cart = common_vendor.index.getStorageSync("cart") || [];
      const existing = cart.find((item) => item.goodsId === this.goodsId);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          goodsId: this.goodsId,
          title: this.goods.title,
          price: this.goods.price,
          cover: this.goods.images[0] || "",
          // 用第一张图作为封面
          quantity: 1,
          selected: true
          // 默认选中
        });
      }
      common_vendor.index.setStorageSync("cart", cart);
      common_vendor.index.showToast({ title: "已加入购物车", icon: "success" });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.statusBarHeight + "px",
    b: common_vendor.f($data.goods.images, (img, i, i0) => {
      return {
        a: img,
        b: common_vendor.o(($event) => $options.previewImage(i), i),
        c: i
      };
    }),
    c: common_vendor.t($data.goods.price),
    d: $data.goods.originalPrice
  }, $data.goods.originalPrice ? {
    e: common_vendor.t($data.goods.originalPrice)
  } : {}, {
    f: common_vendor.t($data.goods.title),
    g: $data.goods.isNegotiable
  }, $data.goods.isNegotiable ? {} : {}, {
    h: $data.goods.isFreeShipping
  }, $data.goods.isFreeShipping ? {} : {}, {
    i: common_vendor.t($data.goods.viewCount || 0),
    j: $data.goods.avatar || "/static/default-avatar.png",
    k: common_vendor.t($data.goods.nickname || "匿名用户"),
    l: common_vendor.t($data.goods.universityName),
    m: common_vendor.p({
      type: "arrowright",
      size: "18",
      color: "#999"
    }),
    n: common_vendor.o(($event) => $options.toUserHome($data.goods.userId)),
    o: $data.goods.description,
    p: $data.recommendList.length
  }, $data.recommendList.length ? {
    q: common_vendor.f($data.recommendLeft, (item, k0, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: item.id,
        e: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      };
    }),
    r: common_vendor.f($data.recommendRight, (item, k0, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: item.id,
        e: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      };
    })
  } : {}, {
    s: common_vendor.p({
      type: $data.goods.isLiked ? "heart-filled" : "heart",
      color: $data.goods.isLiked ? "#ff4757" : "#666",
      size: "24"
    }),
    t: common_vendor.t($data.goods.likeCount || 0),
    v: common_vendor.o((...args) => $options.toggleLike && $options.toggleLike(...args)),
    w: common_vendor.p({
      type: "chat",
      size: "24",
      color: "#666"
    }),
    x: common_vendor.o((...args) => $options.toChat && $options.toChat(...args)),
    y: common_vendor.o((...args) => $options.addToCart && $options.addToCart(...args)),
    z: common_vendor.o((...args) => $options.showContact && $options.showContact(...args)),
    A: $data.goods.wechat
  }, $data.goods.wechat ? {
    B: common_vendor.t($data.goods.wechat),
    C: common_vendor.o(($event) => $options.copy($data.goods.wechat))
  } : {}, {
    D: $data.goods.phone
  }, $data.goods.phone ? {
    E: common_vendor.t($data.goods.phone),
    F: common_vendor.o(($event) => $options.makeCall($data.goods.phone))
  } : {}, {
    G: $data.goods.qq
  }, $data.goods.qq ? {
    H: common_vendor.t($data.goods.qq),
    I: common_vendor.o(($event) => $options.copy($data.goods.qq))
  } : {}, {
    J: !$data.goods.wechat && !$data.goods.phone && !$data.goods.qq
  }, !$data.goods.wechat && !$data.goods.phone && !$data.goods.qq ? {} : {}, {
    K: common_vendor.sr("contactPopup", "eca06f3c-3"),
    L: common_vendor.p({
      type: "center",
      ["background-color"]: "#fff"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eca06f3c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map
