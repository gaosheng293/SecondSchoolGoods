"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const loading = common_vendor.ref(true);
    const error = common_vendor.ref("");
    const profile = common_vendor.ref(null);
    const isLogin = common_vendor.ref(false);
    const loadProfile = async () => {
      loading.value = true;
      error.value = "";
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        loading.value = false;
        isLogin.value = false;
        return;
      }
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/user/mine",
        // 改成 /mine，因为它返回 counts
        method: "GET",
        header: {
          "Authorization": "Bearer " + token
        },
        success: (res) => {
          if (res.statusCode === 200 && res.data) {
            profile.value = res.data;
            isLogin.value = true;
          } else {
            error.value = "数据格式错误";
            isLogin.value = false;
          }
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/mine/mine.vue:137", "获取用户信息失败", err);
          error.value = err.errMsg.includes("timeout") ? "请求超时" : "网络错误，请检查后端";
          isLogin.value = false;
        },
        complete: () => {
          loading.value = false;
        }
      });
    };
    const handleLogout = () => {
      common_vendor.index.showModal({
        title: "确认退出登录？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("token");
            common_vendor.index.reLaunch({ url: "/pages/login/login" });
          }
        }
      });
    };
    const toLogin = () => common_vendor.index.reLaunch({ url: "/pages/login/login" });
    const toEditProfile = () => common_vendor.index.navigateTo({ url: "/pages/profile/edit" });
    const toMyGoods = () => common_vendor.index.navigateTo({ url: "/pages/mine/my-goods" });
    const toMyOrders = () => common_vendor.index.navigateTo({ url: "/pages/mine/my-orders" });
    const toMyLikes = () => common_vendor.index.navigateTo({ url: "/pages/mine/my-likes" });
    const toAddress = () => common_vendor.index.navigateTo({ url: "/pages/address/list" });
    const toPublishHistory = () => common_vendor.index.navigateTo({ url: "/pages/publish/history" });
    const toHelp = () => common_vendor.index.navigateTo({ url: "/pages/help/help" });
    const toAbout = () => common_vendor.index.navigateTo({ url: "/pages/about/about" });
    common_vendor.onLoad(() => {
      loadProfile();
    });
    common_vendor.onShow(() => {
      if (common_vendor.index.getStorageSync("token")) {
        loadProfile();
      }
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: loading.value
      }, loading.value ? {
        b: common_vendor.p({
          type: "spinner",
          size: "40",
          color: "#007AFF",
          spin: true
        })
      } : error.value ? {
        d: common_vendor.p({
          type: "refresh",
          size: "40",
          color: "#999"
        }),
        e: common_vendor.t(error.value),
        f: common_vendor.o(loadProfile)
      } : isLogin.value && profile.value ? common_vendor.e({
        h: ((_a = profile.value) == null ? void 0 : _a.avatar) || "/static/c1.png",
        i: common_vendor.o(toEditProfile),
        j: common_vendor.t(((_b = profile.value) == null ? void 0 : _b.nickname) || "未设置昵称"),
        k: profile.value.university
      }, profile.value.university ? {
        l: common_vendor.p({
          type: "location-filled",
          size: "14",
          color: "#007AFF"
        }),
        m: common_vendor.t(profile.value.university.name)
      } : {}, {
        n: common_vendor.p({
          type: "gear",
          size: "20",
          color: "#999"
        }),
        o: common_vendor.o(toEditProfile),
        p: common_vendor.t(profile.value.goodsCount || 0),
        q: common_vendor.o(toMyGoods),
        r: common_vendor.t(profile.value.orderCount || 0),
        s: common_vendor.o(toMyOrders),
        t: common_vendor.t(profile.value.likeCount || 0),
        v: common_vendor.o(toMyLikes),
        w: common_vendor.p({
          type: "map",
          size: "20",
          color: "#007AFF"
        }),
        x: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#ccc"
        }),
        y: common_vendor.o(toAddress),
        z: common_vendor.p({
          type: "compose",
          size: "20",
          color: "#4CD964"
        }),
        A: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#ccc"
        }),
        B: common_vendor.o(toPublishHistory),
        C: common_vendor.p({
          type: "help",
          size: "20",
          color: "#FFB800"
        }),
        D: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#ccc"
        }),
        E: common_vendor.o(toHelp),
        F: common_vendor.p({
          type: "info",
          size: "20",
          color: "#666"
        }),
        G: common_vendor.p({
          type: "arrowright",
          size: "16",
          color: "#ccc"
        }),
        H: common_vendor.o(toAbout),
        I: common_vendor.o(handleLogout)
      }) : {
        J: common_assets._imports_0,
        K: common_vendor.o(toLogin)
      }, {
        c: error.value,
        g: isLogin.value && profile.value
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/mine.js.map
