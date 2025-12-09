"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      activeTab: null,
      orderList: [],
      loading: false,
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
  onLoad() {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    this.loadOrders();
  },
  onPullDownRefresh() {
    this.loadOrders(() => common_vendor.index.stopPullDownRefresh());
  },
  methods: {
    switchTab(tab) {
      if (this.activeTab === tab)
        return;
      this.activeTab = tab;
      this.orderList = [];
      this.loadOrders();
    },
    loadOrders(cb) {
      this.loading = true;
      const token = common_vendor.index.getStorageSync("token");
      if (!token)
        return;
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/order/my",
        data: { status: this.activeTab },
        // 传 null 就是全部
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          if (res.statusCode === 200 && res.data.list) {
            this.orderList = res.data.list.map((item) => {
              try {
                const images = typeof item.goodsImages === "string" ? JSON.parse(item.goodsImages) : item.goodsImages;
                item.cover = Array.isArray(images) && images.length ? images[0] : "/static/default-cover.png";
              } catch {
                item.cover = "/static/default-cover.png";
              }
              return item;
            });
          }
        },
        complete: () => {
          this.loading = false;
          cb && cb();
        }
      });
    },
    getStatusClass(status) {
      const map = {
        0: "warning",
        // 橙色
        1: "primary",
        // 蓝色
        2: "waiting",
        // 黄色
        3: "success",
        // 绿色
        4: "refund",
        // 紫色
        5: "default"
        // 灰色
      };
      return map[status] || "default";
    },
    toDetail(id) {
      common_vendor.index.navigateTo({ url: `/pages/order/detail?id=${id}` });
    },
    pay(id) {
      common_vendor.index.showToast({ title: "即将跳转微信支付", icon: "none" });
    },
    confirmReceive(id) {
      common_vendor.index.showModal({
        title: "确认收货",
        content: "已收到商品？",
        success: (res) => {
          if (res.confirm) {
            const token = common_vendor.index.getStorageSync("token");
            common_vendor.index.request({
              url: `http://192.168.0.105:8080/api/order/status/${id}?newStatus=3`,
              method: "PUT",
              header: { Authorization: "Bearer " + token },
              success: () => {
                common_vendor.index.showToast({ title: "确认收货成功" });
                this.loadOrders();
              }
            });
          }
        }
      });
    },
    contactSeller() {
      common_vendor.index.showToast({ title: "已通知客服处理退款", icon: "success" });
    },
    goBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        common_vendor.index.navigateBack();
      } else {
        common_vendor.index.switchTab({ url: "/pages/mine/mine" });
      }
    },
    toHome() {
      common_vendor.index.switchTab({ url: "/pages/index/index" });
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
      color: "#333"
    }),
    c: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    d: $data.activeTab === null ? 1 : "",
    e: common_vendor.o(($event) => $options.switchTab(null)),
    f: $data.activeTab === 0 ? 1 : "",
    g: common_vendor.o(($event) => $options.switchTab(0)),
    h: $data.activeTab === 1 ? 1 : "",
    i: common_vendor.o(($event) => $options.switchTab(1)),
    j: $data.activeTab === 2 ? 1 : "",
    k: common_vendor.o(($event) => $options.switchTab(2)),
    l: $data.activeTab === 3 ? 1 : "",
    m: common_vendor.o(($event) => $options.switchTab(3)),
    n: $data.activeTab === 4 ? 1 : "",
    o: common_vendor.o(($event) => $options.switchTab(4)),
    p: common_vendor.f($data.orderList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.cover || "/static/default-cover.png",
        b: common_vendor.t(item.goodsTitle || "未知商品"),
        c: common_vendor.t(item.price),
        d: common_vendor.t(item.quantity || 1),
        e: common_vendor.t($data.statusMap[item.status]),
        f: common_vendor.n($options.getStatusClass(item.status)),
        g: item.status === 0
      }, item.status === 0 ? {
        h: common_vendor.o(($event) => $options.pay(item.id), item.id)
      } : {}, {
        i: item.status === 2
      }, item.status === 2 ? {
        j: common_vendor.o(($event) => $options.confirmReceive(item.id), item.id)
      } : {}, {
        k: item.status === 4
      }, item.status === 4 ? {
        l: common_vendor.o((...args) => $options.contactSeller && $options.contactSeller(...args), item.id)
      } : {}, {
        m: item.status === 3 || item.status === 5
      }, item.status === 3 || item.status === 5 ? {
        n: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      } : {}, {
        o: item.id,
        p: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      });
    }),
    q: !$data.orderList.length && !$data.loading
  }, !$data.orderList.length && !$data.loading ? {
    r: common_assets._imports_0$4,
    s: common_vendor.t($data.activeTab === null ? "" : $data.statusMap[$data.activeTab]),
    t: common_vendor.o((...args) => $options.toHome && $options.toHome(...args))
  } : {}, {
    v: $data.loading
  }, $data.loading ? {
    w: common_vendor.p({
      type: "spinner",
      size: "30",
      spin: true
    })
  } : {}, {
    x: common_vendor.o((...args) => _ctx.loadMore && _ctx.loadMore(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d762c5a5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/my-orders.js.map
