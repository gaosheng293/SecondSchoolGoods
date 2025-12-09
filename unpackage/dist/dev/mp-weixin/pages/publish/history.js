"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      goodsList: []
    };
  },
  onLoad() {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    this.loadPublishedGoods();
  },
  methods: {
    loadPublishedGoods() {
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        common_vendor.index.showToast({ title: "请先登录", icon: "none" });
        return;
      }
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/goods/my-published",
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
      common_vendor.index.redirectTo({ url: `/pages/detail/detail?id=${id}` });
    },
    // 在 methods 中添加
    toEdit(id) {
      common_vendor.index.redirectTo({
        url: `/pages/publish/edit?id=${id}`
      });
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
    b: $data.goodsList.length
  }, $data.goodsList.length ? {
    c: common_vendor.f($data.goodsList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.cover || "/static/default-cover.png",
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: item.status === 2
      }, item.status === 2 ? {} : {}, {
        e: item.status === 1
      }, item.status === 1 ? {
        f: "faf1a9f5-0-" + i0,
        g: common_vendor.p({
          type: "compose",
          size: "20",
          color: "#007AFF"
        }),
        h: common_vendor.o(($event) => $options.toEdit(item.id), item.id)
      } : {}, {
        i: item.id,
        j: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      });
    })
  } : {
    d: common_assets._imports_0$3
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-faf1a9f5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/publish/history.js.map
