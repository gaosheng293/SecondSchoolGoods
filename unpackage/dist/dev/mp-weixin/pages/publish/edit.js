"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: 0,
      goods: {
        id: null,
        title: "",
        price: 0,
        description: "",
        images: []
      }
    };
  },
  onLoad(options) {
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    if (options.id) {
      this.goods.id = options.id;
      this.loadGoods();
    }
  },
  methods: {
    loadGoods() {
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/goods/detail/${this.goods.id}`,
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          if (res.statusCode === 200 && res.data) {
            const g = res.data;
            if (typeof g.images === "string") {
              try {
                g.images = JSON.parse(g.images);
              } catch {
                g.images = g.images.split(",").filter(Boolean);
              }
            }
            this.goods = g;
          }
        }
      });
    },
    chooseImage() {
      common_vendor.index.chooseImage({
        count: 9 - this.goods.images.length,
        success: (res) => {
          const tempFiles = res.tempFilePaths;
          this.goods.images = [...this.goods.images, ...tempFiles];
        }
      });
    },
    removeImage(i) {
      this.goods.images.splice(i, 1);
    },
    save() {
      if (!this.goods.title || !this.goods.price) {
        return common_vendor.index.showToast({ title: "请填写完整", icon: "none" });
      }
      const data = {
        ...this.goods,
        images: JSON.stringify(this.goods.images)
        // ← 重点！
      };
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/goods/update",
        method: "POST",
        header: {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json"
        },
        data,
        success: (res) => {
          if (res.data.ok) {
            common_vendor.index.showToast({ title: "修改成功" });
            setTimeout(() => common_vendor.index.navigateBack(), 1e3);
          }
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
    b: $data.goods.title,
    c: common_vendor.o(($event) => $data.goods.title = $event.detail.value),
    d: $data.goods.price,
    e: common_vendor.o(common_vendor.m(($event) => $data.goods.price = $event.detail.value, {
      number: true
    })),
    f: $data.goods.description,
    g: common_vendor.o(($event) => $data.goods.description = $event.detail.value),
    h: common_vendor.f($data.goods.images, (img, i, i0) => {
      return {
        a: img,
        b: "d27d9048-0-" + i0,
        c: common_vendor.o(($event) => $options.removeImage(i), i),
        d: i
      };
    }),
    i: common_vendor.p({
      type: "close",
      size: "20",
      color: "#fff"
    }),
    j: $data.goods.images.length < 9
  }, $data.goods.images.length < 9 ? {
    k: common_vendor.p({
      type: "plus",
      size: "40",
      color: "#ccc"
    }),
    l: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args))
  } : {}, {
    m: common_vendor.o((...args) => $options.save && $options.save(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d27d9048"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/publish/edit.js.map
