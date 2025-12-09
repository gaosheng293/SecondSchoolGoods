"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      userId: 0,
      // 目标用户 id
      isMyself: false,
      // 是否是自己的主页
      hasLogin: false,
      // 当前是否已登录
      statusBarHeight: 0,
      activeTab: 0,
      // 0=发布的商品 1=喜欢的商品
      userInfo: {},
      // 用户信息
      goodsList: [],
      // 发布的商品
      likeList: []
      // 喜欢的商品
    };
  },
  computed: {
    showList() {
      return this.activeTab === 0 ? this.goodsList : this.likeList;
    }
  },
  onLoad(options) {
    this.userId = Number(options.userId) || 0;
    this.statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    const token = common_vendor.index.getStorageSync("token");
    this.hasLogin = !!token;
    if (token) {
      const myInfo = common_vendor.index.getStorageSync("userInfo") || {};
      this.isMyself = myInfo.id === this.userId;
    }
    this.loadUserInfo();
    this.loadGoods();
    this.loadLikes();
  },
  methods: {
    // 加载用户信息
    async loadUserInfo() {
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/user/info/${this.userId}`,
        header: token ? { Authorization: "Bearer " + token } : {},
        success: (res) => {
          if (res.statusCode === 200 && res.data) {
            this.userInfo = res.data;
          }
        }
      });
    },
    // 加载发布的商品
    async loadGoods() {
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/user/goods/${this.userId}`,
        success: (res) => {
          var _a;
          if (res.statusCode === 200 && ((_a = res.data) == null ? void 0 : _a.list)) {
            let list = res.data.list;
            list.forEach((item) => {
              if (item.images === null || item.images === void 0) {
                item.images = [];
              } else if (typeof item.images === "string") {
                try {
                  item.images = JSON.parse(item.images);
                } catch {
                  item.images = item.images.split(",").map((s) => s.trim()).filter(Boolean);
                }
              }
              item.cover = Array.isArray(item.images) && item.images.length > 0 ? item.images[0] : "/static/default-cover.png";
            });
            this.goodsList = list;
          }
        }
      });
    },
    // 加载喜欢的商品（同理）
    async loadLikes() {
      if (!this.hasLogin && !this.isMyself) {
        this.likeList = [];
        return;
      }
      const token = common_vendor.index.getStorageSync("token");
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/user/likes/${this.userId}`,
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          var _a;
          if (res.statusCode === 200 && ((_a = res.data) == null ? void 0 : _a.list)) {
            let list = res.data.list;
            list.forEach((item) => {
              if (item.images === null || item.images === void 0) {
                item.images = [];
              } else if (typeof item.images === "string") {
                try {
                  item.images = JSON.parse(item.images);
                } catch {
                  item.images = item.images.split(",").map((s) => s.trim()).filter(Boolean);
                }
              }
              item.cover = Array.isArray(item.images) && item.images.length > 0 ? item.images[0] : "/static/default-cover.png";
            });
            this.likeList = list;
          }
        }
      });
    },
    toDetail(id) {
      common_vendor.index.redirectTo({
        url: `/pages/detail/detail?id=${id}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.statusBarHeight + "px",
    b: $data.userInfo.avatar || "/static/default-avatar.png",
    c: common_vendor.t($data.userInfo.nickname || "匿名用户"),
    d: common_vendor.t($data.userInfo.universityName || "暂未设置学校"),
    e: common_vendor.t($data.userInfo.goodsCount || 0),
    f: common_vendor.t($data.goodsList.length),
    g: $data.activeTab === 0 ? 1 : "",
    h: common_vendor.o(($event) => $data.activeTab = 0),
    i: common_vendor.t($data.likeList.length),
    j: $data.activeTab === 1 ? 1 : "",
    k: common_vendor.o(($event) => $data.activeTab = 1),
    l: $options.showList.length
  }, $options.showList.length ? {
    m: common_vendor.f($options.showList, (item, k0, i0) => {
      return {
        a: item.cover || item.images[0],
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: item.id,
        e: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      };
    })
  } : {
    n: common_assets._imports_0$3,
    o: common_vendor.t($data.activeTab === 0 ? "Ta 还没有发布商品哦~" : "Ta 还没有喜欢的商品")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f834fd70"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/home.js.map
