"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      form: {
        title: "",
        price: null,
        originalPrice: null,
        categoryId: null,
        images: [],
        description: "",
        wechat: "",
        phone: "",
        qq: "",
        isNegotiable: false,
        isFreeShipping: false
      },
      priceStr: "",
      originalPriceStr: "",
      selectedCategoryName: "",
      categories: [],
      // 重点：一定要在这里定义
      submitting: false,
      categoryLoading: false,
      // 新增：加载状态，防止弹窗前没数据
      hasEverLeft: false
      // 新增这个标志位
      // priceError: '',         // 独立的错误消息
      // originalError: '',      // 独立的错误消息
    };
  },
  // 关键：onLoad 里必须先加载分类！
  onLoad() {
    this.resetForm();
    this.loadCategories();
    this.hasEverLeft = false;
  },
  onShow() {
    var _a, _b, _c, _d, _e;
    const f = this.form;
    const isEmptyForm = !((_a = f.title) == null ? void 0 : _a.trim()) && // 标题为空
    f.price === null && // 价格未填
    f.originalPrice === null && // 原价未填
    f.categoryId === null && // 没选分类
    f.images.length === 0 && // 没传图
    !((_b = f.description) == null ? void 0 : _b.trim()) && // 描述为空
    !((_c = f.wechat) == null ? void 0 : _c.trim()) && // 微信为空
    !((_d = f.phone) == null ? void 0 : _d.trim()) && // 手机为空
    !((_e = f.qq) == null ? void 0 : _e.trim()) && // QQ为空
    f.isNegotiable === false && // 可刀未勾
    f.isFreeShipping === false;
    if (this.hasEverLeft && !isEmptyForm) {
      common_vendor.index.showModal({
        title: "检测到您离开过发布页",
        content: "是否重新加载页面？（选择“是”将清空所有内容重新开始）",
        confirmText: "重新加载",
        cancelText: "继续编辑",
        success: (res) => {
          if (res.confirm) {
            this.resetForm();
            this.loadCategories();
            common_vendor.index.showToast({ title: "已重新加载", icon: "success" });
          } else {
            common_vendor.index.__f__("log", "at pages/publish/publish.vue:174", "继续编辑，不重置");
          }
        }
      });
    }
    this.hasEverLeft = true;
  },
  onUnload() {
    this.hasEverLeft = true;
  },
  methods: {
    // 强制重置
    resetForm() {
      this.form = {
        title: "",
        price: null,
        originalPrice: null,
        categoryId: null,
        images: [],
        description: "",
        wechat: "",
        phone: "",
        qq: "",
        isNegotiable: false,
        isFreeShipping: false
      };
      this.priceStr = "";
      this.originalPriceStr = "";
      this.selectedCategoryName = "";
      this.categories = [];
      this.submitting = false;
    },
    // 关键：这个函数必须存在，而且要 async + await！
    async loadCategories() {
      this.categoryLoading = true;
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        common_vendor.index.showToast({ title: "请先登录", icon: "none" });
        this.categoryLoading = false;
        return;
      }
      try {
        const res = await common_vendor.index.request({
          url: "http://192.168.0.105:8080/api/categories",
          header: { Authorization: "Bearer " + token }
        });
        const result = res[1] || res;
        if (result.statusCode === 200 && Array.isArray(result.data)) {
          this.categories = result.data;
          common_vendor.index.__f__("log", "at pages/publish/publish.vue:220", "分类加载成功：", this.categories);
        } else {
          common_vendor.index.showToast({ title: "分类加载失败", icon: "none" });
        }
      } catch (e) {
        common_vendor.index.__f__("error", "at pages/publish/publish.vue:225", "分类请求出错", e);
        common_vendor.index.showToast({ title: "网络错误", icon: "none" });
      } finally {
        this.categoryLoading = false;
      }
    },
    // 点击分类时，防止数据没加载完就弹窗
    openCategoryPopup() {
      if (this.categories.length === 0) {
        common_vendor.index.showToast({ title: "分类加载中...", icon: "loading" });
        this.loadCategories().then(() => {
          setTimeout(() => this.$refs.popup.open(), 300);
        });
      } else {
        this.$refs.popup.open();
      }
    },
    closePopup() {
      this.$refs.popup.close();
    },
    selectCategory(id, name) {
      this.form.categoryId = id;
      this.selectedCategoryName = name;
      this.closePopup();
    },
    // 价格输入过滤
    filterNumber(e) {
      let val = e.detail.value;
      if (val && !/^\d+(\.\d{0,2})?$/.test(val)) {
        common_vendor.index.showModal({
          title: "提示",
          content: "价格必须是纯数字，小数点后最多两位",
          confirmColor: "#ee6666",
          //确定字体颜色
          showCancel: false,
          //没有取消按钮的弹框
          buttonText: "确定",
          success: (res) => {
            if (res.confirm) {
              this.form.price = "";
              this.priceStr = "";
            }
          }
        });
      }
      this.form.price = val ? Number(val) : null;
      this.priceStr = val;
    },
    filterNumber2(e) {
      let val = e.detail.value;
      if (val && !/^\d+(\.\d{0,2})?$/.test(val)) {
        common_vendor.index.showModal({
          title: "提示",
          content: "原价必须是纯数字，小数点后最多两位",
          confirmColor: "#ee6666",
          //确定字体颜色
          showCancel: false,
          //没有取消按钮的弹框
          buttonText: "确定",
          success: (res) => {
            if (res.confirm) {
              this.form.originalPriceStr = "";
              this.originalPriceStr = "";
            }
          }
        });
      }
      this.form.originalPrice = val ? Number(val) : null;
      this.originalPriceStr = val;
    },
    // 上传图片和 submit 保持不变...
    chooseImage() {
      common_vendor.index.chooseImage({
        count: 9 - this.form.images.length,
        success: (res) => {
          res.tempFilePaths.forEach((path) => {
            common_vendor.index.uploadFile({
              url: "http://192.168.0.105:8080/api/goods/upload",
              filePath: path,
              name: "file",
              header: { Authorization: "Bearer " + common_vendor.index.getStorageSync("token") },
              success: (uploadRes) => {
                const data = JSON.parse(uploadRes.data);
                if (data.url)
                  this.form.images.push(data.url);
              }
            });
          });
        }
      });
    },
    submit() {
      if (!this.form.title)
        return common_vendor.index.showToast({ title: "请填写标题", icon: "none" });
      if (!this.form.price || this.form.price <= 0)
        return common_vendor.index.showToast({ title: "请填写正确的价格", icon: "none" });
      if (!this.form.categoryId)
        return common_vendor.index.showToast({ title: "请选择分类", icon: "none" });
      if (this.form.images.length === 0)
        return common_vendor.index.showToast({ title: "至少上传一张图片", icon: "none" });
      if (!this.form.wechat && !this.form.phone && !this.form.qq)
        return common_vendor.index.showToast({ title: "至少填写一种联系方式", icon: "none" });
      this.submitting = true;
      common_vendor.index.showLoading({ title: "发布中..." });
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/goods/publish",
        method: "POST",
        header: { Authorization: "Bearer " + common_vendor.index.getStorageSync("token") },
        data: this.form,
        success: () => {
          common_vendor.index.showToast({ title: "发布成功！", icon: "success" });
          setTimeout(() => common_vendor.index.switchTab({ url: "/pages/index/index" }), 1e3);
        },
        fail: () => common_vendor.index.showToast({ title: "发布失败", icon: "none" }),
        complete: () => {
          this.submitting = false;
          common_vendor.index.hideLoading();
        }
      });
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
    a: $data.form.title,
    b: common_vendor.o(common_vendor.m(($event) => $data.form.title = $event.detail.value, {
      trim: true
    })),
    c: common_vendor.o([($event) => $data.priceStr = $event.detail.value, (...args) => $options.filterNumber && $options.filterNumber(...args)]),
    d: $data.priceStr,
    e: common_vendor.o([($event) => $data.originalPriceStr = $event.detail.value, (...args) => $options.filterNumber2 && $options.filterNumber2(...args)]),
    f: $data.originalPriceStr,
    g: common_vendor.t($data.selectedCategoryName || "请选择分类"),
    h: common_vendor.p({
      type: "arrowright",
      size: "16",
      color: "#ccc"
    }),
    i: common_vendor.o((...args) => $options.openCategoryPopup && $options.openCategoryPopup(...args)),
    j: common_vendor.f($data.form.images, (img, i, i0) => {
      return {
        a: img,
        b: common_vendor.o(($event) => $data.form.images.splice(i, 1), i),
        c: i
      };
    }),
    k: $data.form.images.length < 9
  }, $data.form.images.length < 9 ? {
    l: common_vendor.p({
      type: "plus",
      size: "36",
      color: "#ddd"
    }),
    m: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args))
  } : {}, {
    n: $data.form.description,
    o: common_vendor.o(($event) => $data.form.description = $event.detail.value),
    p: $data.form.wechat,
    q: common_vendor.o(common_vendor.m(($event) => $data.form.wechat = $event.detail.value, {
      trim: true
    })),
    r: $data.form.phone,
    s: common_vendor.o(common_vendor.m(($event) => $data.form.phone = $event.detail.value, {
      trim: true
    })),
    t: $data.form.qq,
    v: common_vendor.o(common_vendor.m(($event) => $data.form.qq = $event.detail.value, {
      trim: true
    })),
    w: common_vendor.p({
      type: $data.form.isNegotiable ? "checkmarkempty" : "circle",
      color: "#ff4757",
      size: "24"
    }),
    x: $data.form.isNegotiable ? 1 : "",
    y: common_vendor.o(($event) => $data.form.isNegotiable = !$data.form.isNegotiable),
    z: common_vendor.p({
      type: $data.form.isFreeShipping ? "checkmarkempty" : "circle",
      color: "#4cd964",
      size: "24"
    }),
    A: $data.form.isFreeShipping ? 1 : "",
    B: common_vendor.o(($event) => $data.form.isFreeShipping = !$data.form.isFreeShipping),
    C: common_vendor.t($data.submitting ? "发布中..." : "立即发布"),
    D: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    E: $data.submitting,
    F: common_vendor.o((...args) => $options.closePopup && $options.closePopup(...args)),
    G: common_vendor.f($data.categories, (c, k0, i0) => {
      return {
        a: common_vendor.t(c.name),
        b: c.id,
        c: common_vendor.o(($event) => $options.selectCategory(c.id, c.name), c.id)
      };
    }),
    H: common_vendor.sr("popup", "bfce3555-4"),
    I: common_vendor.p({
      type: "bottom"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bfce3555"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/publish/publish.js.map
