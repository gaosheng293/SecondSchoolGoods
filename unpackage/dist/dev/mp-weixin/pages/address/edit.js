"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      form: {
        id: null,
        name: "",
        phone: "",
        address: "",
        isDefault: false
      }
    };
  },
  onLoad(options) {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    if (options.id) {
      this.loadAddress(options.id);
    }
  },
  methods: {
    loadAddress(id) {
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/address/${id}`,
        // 假设后端有 GET /address/{id}，如果没有，用 list 过滤
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          if (res.statusCode === 200) {
            this.form = res.data;
          }
        }
      });
    },
    save() {
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/address/save",
        method: "POST",
        header: { Authorization: "Bearer " + token },
        data: this.form,
        success: (res) => {
          if (res.statusCode === 200 && res.data.ok) {
            common_vendor.index.showToast({ title: "保存成功" });
            common_vendor.index.navigateBack();
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.statusBarHeight + "px",
    b: $data.form.name,
    c: common_vendor.o(($event) => $data.form.name = $event.detail.value),
    d: $data.form.phone,
    e: common_vendor.o(($event) => $data.form.phone = $event.detail.value),
    f: $data.form.address,
    g: common_vendor.o(($event) => $data.form.address = $event.detail.value),
    h: $data.form.isDefault,
    i: common_vendor.o(($event) => $data.form.isDefault = $event.detail.value),
    j: common_vendor.o((...args) => $options.save && $options.save(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dcb1f0d8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/address/edit.js.map
