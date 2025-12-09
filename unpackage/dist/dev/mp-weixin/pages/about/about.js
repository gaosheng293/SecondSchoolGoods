"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0
    };
  },
  onLoad() {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
  },
  methods: {
    openGitHub() {
      common_vendor.index.setClipboardData({
        data: "https://github.com/yourname/xianzhi",
        success: () => {
          common_vendor.index.showToast({ title: "GitHub地址已复制", icon: "success" });
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
  return {
    a: $data.statusBarHeight + "px",
    b: common_assets._imports_0$5,
    c: common_vendor.p({
      type: "person",
      size: "20",
      color: "#999"
    }),
    d: common_vendor.p({
      type: "mail",
      size: "20",
      color: "#999"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-13a78ac6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/about/about.js.map
