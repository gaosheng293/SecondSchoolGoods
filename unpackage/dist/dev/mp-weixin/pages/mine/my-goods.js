"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      goodsList: [],
      pageType: ""
      // goods | likes | history
    };
  },
  computed: {
    emptyText() {
      const map = {
        goods: "你还没有发布闲置商品哦~",
        likes: "你还没有喜欢的宝贝",
        history: "你还没有发布过商品"
      };
      return map[this.pageType] || "暂无数据";
    }
  },
  onLoad() {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    this.detectPageTypeAndLoad();
  },
  methods: {
    detectPageTypeAndLoad() {
      const pages = getCurrentPages();
      const route = pages[pages.length - 1].route;
      if (route.includes("my-goods")) {
        this.pageType = "goods";
        this.load("/api/goods/my");
      } else if (route.includes("my-likes")) {
        this.pageType = "likes";
        this.load("/api/goods/my-likes");
      } else if (route.includes("publish/history")) {
        this.pageType = "history";
        this.load("/api/goods/my-published");
      }
    },
    load(api) {
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        common_vendor.index.showToast({ title: "请先登录", icon: "none" });
        return;
      }
      common_vendor.index.request({
        url: "http://192.168.0.105:8080" + api,
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          var _a;
          if (res.statusCode === 200 && ((_a = res.data) == null ? void 0 : _a.list)) {
            this.goodsList = this.processImages(res.data.list);
          }
        }
      });
    },
    processImages(list) {
      return list.map((item) => {
        if (!item.images) {
          item.images = [];
        } else if (typeof item.images === "string") {
          try {
            item.images = JSON.parse(item.images);
          } catch {
            item.images = item.images.split(",").map((s) => s.trim()).filter(Boolean);
          }
        }
        item.cover = Array.isArray(item.images) && item.images.length ? item.images[0] : "/static/default-cover.png";
        return item;
      });
    },
    toDetail(id) {
      common_vendor.index.navigateTo({ url: `/pages/detail/detail?id=${id}` });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.statusBarHeight + "px",
    b: $data.goodsList.length
  }, $data.goodsList.length ? {
    c: common_vendor.f($data.goodsList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.cover || "/static/default-cover.png",
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: $data.pageType === "history" && item.status === 2
      }, $data.pageType === "history" && item.status === 2 ? {} : {}, {
        e: item.id,
        f: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      });
    })
  } : {
    d: common_assets._imports_0$3,
    e: common_vendor.t($options.emptyText)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-87d49ef0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/my-goods.js.map
