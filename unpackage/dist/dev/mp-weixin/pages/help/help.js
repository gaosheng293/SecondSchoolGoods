"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      faqList: [
        { q: "怎么发布商品？", a: "点击底部“发布”按钮 → 拍摄照片 → 填写标题、价格、描述 → 点击发布即可～", open: false },
        { q: "商品发布后怎么修改？", a: "去“我的” → “发布记录” → 找到商品 → 点击编辑按钮即可修改", open: false },
        { q: "怎么联系卖家？", a: "在商品详情页点击“联系Ta”按钮，会显示卖家微信号，复制后打开微信添加即可", open: false },
        { q: "买家不发货怎么办？", a: "请先与卖家沟通，如无法解决，可联系客服（本页面最下方），我们会介入处理", open: false },
        { q: "怎么设置默认收货地址？", a: "去“我的” → “收货地址” → 点击地址右侧“设为默认”即可", open: false },
        { q: "为什么看不到别人的微信号？", a: "为了保护隐私，只有在商品详情页点击“联系Ta”后才会显示微信号哦", open: false }
      ]
    };
  },
  onLoad() {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
  },
  methods: {
    toggleFaq(i) {
      this.faqList[i].open = !this.faqList[i].open;
    },
    copyWechat() {
      common_vendor.index.setClipboardData({
        data: "xianzhi_kefu",
        success: () => common_vendor.index.showToast({ title: "微信号已复制", icon: "success" })
      });
    },
    toFeedback() {
      common_vendor.index.navigateTo({ url: "/pages/feedback/feedback" });
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
    b: common_vendor.p({
      type: "help",
      size: "20",
      color: "#ff4757"
    }),
    c: common_vendor.f($data.faqList, (item, i, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.q),
        b: "5194e907-1-" + i0,
        c: common_vendor.p({
          type: item.open ? "top" : "bottom",
          size: "18",
          color: "#999"
        }),
        d: item.open
      }, item.open ? {
        e: common_vendor.t(item.a)
      } : {}, {
        f: i,
        g: common_vendor.o(($event) => $options.toggleFaq(i), i)
      });
    }),
    d: common_vendor.p({
      type: "chat",
      size: "20",
      color: "#4CD964"
    }),
    e: common_vendor.p({
      type: "weixin",
      size: "24",
      color: "#07C160"
    }),
    f: common_vendor.p({
      type: "copy",
      size: "20",
      color: "#007AFF"
    }),
    g: common_vendor.o((...args) => $options.copyWechat && $options.copyWechat(...args)),
    h: common_vendor.p({
      type: "clock",
      size: "24",
      color: "#666"
    }),
    i: common_vendor.p({
      type: "chatboxes",
      size: "22",
      color: "#fff"
    }),
    j: common_vendor.p({
      type: "edit",
      size: "22",
      color: "#fff"
    }),
    k: common_vendor.o((...args) => $options.toFeedback && $options.toFeedback(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5194e907"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/help/help.js.map
