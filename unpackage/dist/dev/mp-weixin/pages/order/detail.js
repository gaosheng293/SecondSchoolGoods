"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      order: {},
      addressInfo: { name: "", phone: "", addr: "" },
      statusMap: {
        0: "待支付",
        1: "待发货",
        2: "待收货",
        3: "已完成",
        4: "退款中",
        5: "已退款"
      }
    };
  },
  computed: {
    statusClass() {
      const map = {
        0: "warning",
        1: "primary",
        2: "primary",
        3: "success",
        4: "refund",
        5: "default"
      };
      return map[this.order.status] || "default";
    },
    statusIcon() {
      const map = {
        0: "wallet",
        1: "car",
        2: "map",
        3: "checkbox-filled",
        4: "refresh",
        5: "info-filled"
      };
      return map[this.order.status] || "question";
    },
    statusTip() {
      const tips = {
        0: "请在24小时内完成支付，逾期将自动取消",
        1: "卖家正在备货，请耐心等待发货",
        2: "商品已发货，请注意查收",
        3: "交易已完成，感谢你的购买",
        4: "退款申请已提交，请等待处理",
        5: "退款已完成，金额已原路退回"
      };
      return tips[this.order.status] || "";
    },
    showAction() {
      return [0, 2, 4].includes(this.order.status);
    }
  },
  onLoad(options) {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    if (options.id)
      this.loadDetail(options.id);
  },
  methods: {
    loadDetail(id) {
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/order/${id}`,
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          if (res.statusCode === 200 && res.data.order) {
            this.order = res.data.order;
            try {
              this.addressInfo = typeof this.order.address === "string" ? JSON.parse(this.order.address) : this.order.address || {};
            } catch {
              this.addressInfo = { name: "解析失败", phone: "", addr: this.order.address || "" };
            }
            try {
              const imgs = typeof this.order.goodsImages === "string" ? JSON.parse(this.order.goodsImages) : this.order.goodsImages;
              this.order.cover = Array.isArray(imgs) && imgs.length ? imgs[0] : "/static/default-cover.png";
            } catch {
              this.order.cover = "/static/default-cover.png";
            }
          }
        }
      });
    },
    // 万能返回，永不报错！
    goBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.switchTab({ url: "/pages/mine/mine" });
      }
    },
    formatTime(time) {
      if (!time)
        return "未知时间";
      const date = new Date(time);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    },
    copyText(text) {
      common_vendor.index.setClipboardData({
        data: String(text),
        success: () => common_vendor.index.showToast({ title: "复制成功" })
      });
    },
    // 在订单详情页点击“立即支付”
    pay() {
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/pay/create",
        method: "POST",
        data: {
          description: "校园闲置 - " + this.order.goodsTitle,
          amount: Math.round(this.order.price * 100)
          // 转为分
        },
        header: { Authorization: "Bearer " + common_vendor.index.getStorageSync("token") },
        success: (res) => {
          if (res.data.payment) {
            common_vendor.index.requestPayment({
              ...res.data.payment,
              success: () => {
                common_vendor.index.showToast({ title: "支付成功" });
                setTimeout(() => this.loadDetail(this.order.id), 1e3);
              },
              fail: () => {
                common_vendor.index.showToast({ title: "支付失败", icon: "none" });
              }
            });
          }
        }
      });
    },
    confirmReceive() {
      common_vendor.index.showModal({
        title: "确认收货",
        content: "已收到商品并验收无误？",
        success: (res) => {
          if (res.confirm) {
            const token = common_vendor.index.getStorageSync("token");
            common_vendor.index.request({
              url: `http://192.168.0.105:8080/api/order/status/${this.order.id}?newStatus=3`,
              method: "PUT",
              header: { Authorization: "Bearer " + token },
              success: () => {
                common_vendor.index.showToast({ title: "确认收货成功" });
                setTimeout(() => this.goBack(), 1e3);
              }
            });
          }
        }
      });
    },
    contactSeller() {
      common_vendor.index.showToast({ title: "已打开客服聊天", icon: "success" });
    },
    applyRefund() {
      common_vendor.index.showModal({
        title: "申请退款",
        content: "确定要申请退款吗？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({ title: "退款申请已提交" });
          }
        }
      });
    },
    toGoodsDetail() {
      if (this.order.goodsId) {
        common_vendor.index.redirectTo({ url: `/pages/detail/detail?id=${this.order.goodsId}` });
      }
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
    a: $data.statusBarHeight + "px",
    b: common_vendor.p({
      type: "back",
      size: "40",
      color: "#fff"
    }),
    c: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    d: common_vendor.p({
      type: $options.statusIcon,
      size: "80",
      color: "#fff"
    }),
    e: common_vendor.t($data.statusMap[$data.order.status] || "未知状态"),
    f: common_vendor.t($options.statusTip),
    g: common_vendor.n($options.statusClass),
    h: $data.order.cover || "/static/default-cover.png",
    i: common_vendor.t($data.order.goodsTitle || "未知商品"),
    j: common_vendor.t($data.order.price),
    k: common_vendor.t($data.order.quantity || 1),
    l: common_vendor.p({
      type: "arrowright",
      size: "36",
      color: "#ccc"
    }),
    m: common_vendor.o((...args) => $options.toGoodsDetail && $options.toGoodsDetail(...args)),
    n: common_vendor.t($data.order.id),
    o: common_vendor.p({
      type: "copy",
      size: "28",
      color: "#007AFF"
    }),
    p: common_vendor.o(($event) => $options.copyText($data.order.id)),
    q: common_vendor.t($options.formatTime($data.order.createdAt)),
    r: common_vendor.t($data.addressInfo.name || "未填写"),
    s: common_vendor.t($data.addressInfo.phone || "未填写"),
    t: common_vendor.t($data.addressInfo.addr || "未填写"),
    v: $data.order.sellerAvatar || "/static/default-avatar.png",
    w: common_vendor.t($data.order.sellerNickname || "匿名卖家"),
    x: common_vendor.o((...args) => $options.contactSeller && $options.contactSeller(...args)),
    y: $options.showAction
  }, $options.showAction ? common_vendor.e({
    z: $data.order.status === 0
  }, $data.order.status === 0 ? {
    A: common_vendor.o((...args) => $options.pay && $options.pay(...args))
  } : {}, {
    B: $data.order.status === 2
  }, $data.order.status === 2 ? {
    C: common_vendor.o((...args) => $options.confirmReceive && $options.confirmReceive(...args))
  } : {}, {
    D: $data.order.status === 4
  }, $data.order.status === 4 ? {
    E: common_vendor.o((...args) => $options.applyRefund && $options.applyRefund(...args))
  } : {}) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6b23c96c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/detail.js.map
