"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      addressList: []
    };
  },
  onLoad() {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    this.loadList();
  },
  onShow() {
    this.loadList();
  },
  methods: {
    loadList() {
      const token = common_vendor.index.getStorageSync("token");
      if (!token)
        return common_vendor.index.showToast({ title: "请登录", icon: "none" });
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/address/list",
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          var _a;
          if (res.statusCode === 200 && ((_a = res.data) == null ? void 0 : _a.list)) {
            this.addressList = res.data.list;
          }
        }
      });
    },
    toAdd() {
      common_vendor.index.navigateTo({ url: "/pages/address/edit" });
    },
    toEdit(id) {
      common_vendor.index.navigateTo({ url: `/pages/address/edit?id=${id}` });
    },
    deleteAddr(id) {
      common_vendor.index.showModal({
        title: "确认删除？",
        success: (res) => {
          if (res.confirm) {
            const token = common_vendor.index.getStorageSync("token");
            common_vendor.index.request({
              url: `http://192.168.0.105:8080/api/address/${id}`,
              method: "DELETE",
              header: { Authorization: "Bearer " + token },
              success: () => {
                common_vendor.index.showToast({ title: "删除成功" });
                this.loadList();
              }
            });
          }
        }
      });
    },
    setDefault(id) {
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/address/default/${id}`,
        method: "PUT",
        header: { Authorization: "Bearer " + token },
        success: () => {
          common_vendor.index.showToast({ title: "设为默认成功" });
          this.loadList();
        }
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
    b: common_vendor.f($data.addressList, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.phone),
        c: common_vendor.t(item.address),
        d: item.isDefault
      }, item.isDefault ? {} : {}, {
        e: common_vendor.o(($event) => $options.toEdit(item.id), item.id),
        f: "90a3874e-0-" + i0,
        g: common_vendor.o(($event) => $options.deleteAddr(item.id), item.id),
        h: "90a3874e-1-" + i0,
        i: !item.isDefault
      }, !item.isDefault ? {
        j: common_vendor.o(($event) => $options.setDefault(item.id), item.id)
      } : {}, {
        k: item.id
      });
    }),
    c: common_vendor.p({
      type: "compose",
      size: "20",
      color: "#666"
    }),
    d: common_vendor.p({
      type: "trash",
      size: "20",
      color: "#ff4757"
    }),
    e: !$data.addressList.length
  }, !$data.addressList.length ? {
    f: common_assets._imports_0$3
  } : {}, {
    g: common_vendor.o((...args) => $options.toAdd && $options.toAdd(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-90a3874e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/address/list.js.map
