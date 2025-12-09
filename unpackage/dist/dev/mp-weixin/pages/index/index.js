"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: common_vendor.index.getSystemInfoSync().statusBarHeight,
      profile: null,
      banners: [
        "/static/c1.png",
        "/static/c1.png",
        "/static/c1.png"
      ],
      categories: [],
      goodsList: [],
      // 原始数据
      leftGoods: [],
      rightGoods: [],
      // === 新增分页相关状态 ===
      currentPage: 1,
      pageSize: 20,
      hasMore: true,
      // 是否还有更多数据
      loading: false
      // 是否正在加载
    };
  },
  onLoad() {
    this.fetchProfile();
    this.fetchCategories();
  },
  onShow() {
    this.currentPage = 1;
    this.fetchProfile();
    this.fetchCategories();
  },
  onPullDownRefresh() {
    Promise.all([
      this.fetchProfile(),
      this.fetchGoods(true),
      // true 表示刷新
      this.fetchCategories()
    ]).then(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  },
  methods: {
    // 新增：从后端获取分类列表
    async fetchCategories() {
      const token = common_vendor.index.getStorageSync("token");
      if (!token)
        return;
      try {
        const res = await common_vendor.index.request({
          url: "http://192.168.0.105:8080/api/categories",
          header: { Authorization: "Bearer " + token }
        });
        const result = res[1] || res;
        if ((result == null ? void 0 : result.statusCode) === 200) {
          this.categories = result.data || [];
        }
      } catch (e) {
        common_vendor.index.__f__("log", "at pages/index/index.vue:189", "分类加载失败", e);
        this.categories = [
          { id: 1, name: "数码", icon: "/static/c1.png" },
          { id: 2, name: "服饰", icon: "/static/c2.png" },
          { id: 3, name: "美妆", icon: "/static/c3.png" },
          { id: 4, name: "运动", icon: "/static/c4.png" },
          { id: 5, name: "书籍", icon: "/static/c5.png" },
          { id: 6, name: "生活", icon: "/static/c6.png" },
          { id: 7, name: "其他", icon: "/static/c7.png" },
          { id: 8, name: "等等", icon: "/static/c8.png" }
        ];
      }
    },
    // 新增：强制退出登录（调试神器）
    forceLogout() {
      common_vendor.index.showModal({
        title: "强制退出登录",
        content: "确定要清除 token 并重新登录吗？（用于调试）",
        confirmText: "退出",
        confirmColor: "#ff5a5f",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("token");
            common_vendor.index.removeStorageSync("userInfo");
            this.loggedIn = false;
            this.token = "";
            this.selectedUniversityId = "";
            this.searchText = "";
            this.searchResults = [];
            common_vendor.index.showToast({
              title: "已强制退出，将重新登录",
              icon: "none",
              duration: 2e3
            });
            setTimeout(() => {
              common_vendor.index.reLaunch({
                url: "/pages/login/login"
              });
            }, 800);
          }
        }
      });
    },
    async fetchProfile() {
      var _a;
      const token = common_vendor.index.getStorageSync("token");
      if (!token)
        return this.profile = null;
      try {
        const res = await common_vendor.index.request({
          url: "http://192.168.0.105:8080/api/user/profile",
          header: { Authorization: "Bearer " + token }
        });
        const result = res[1] || res[0] || res;
        if ((result == null ? void 0 : result.statusCode) === 200 && ((_a = result == null ? void 0 : result.data) == null ? void 0 : _a.university)) {
          this.profile = result.data;
          this.fetchGoods();
        } else {
          this.profile = null;
        }
      } catch (e) {
        this.profile = null;
      }
    },
    loadMore() {
      if (!this.hasMore || this.loading)
        return;
      this.fetchGoods();
    },
    // 获取推荐商品（从后端 API 获取，替换模拟数据）
    async fetchGoods(refresh = false) {
      var _a, _b;
      if (this.loading)
        return;
      if (!refresh && !this.hasMore)
        return;
      const token = common_vendor.index.getStorageSync("token");
      const universityId = (_b = (_a = this.profile) == null ? void 0 : _a.university) == null ? void 0 : _b.id;
      if (!token || !universityId) {
        common_vendor.index.showToast({ title: "请先登录并选择大学", icon: "none" });
        return;
      }
      if (refresh) {
        this.currentPage = 1;
        this.hasMore = true;
        this.goodsList = [];
      }
      this.loading = true;
      common_vendor.index.showLoading({ title: "加载中..." });
      try {
        const res = await common_vendor.index.request({
          url: "http://192.168.0.105:8080/api/goods/recommend",
          data: {
            universityId,
            page: this.currentPage,
            size: this.pageSize
          },
          header: { Authorization: "Bearer " + token }
        });
        const result = res[1] || res[0] || res;
        if ((result == null ? void 0 : result.statusCode) === 200) {
          const newGoods = result.data || [];
          if (this.currentPage === 1) {
            this.goodsList = newGoods;
          } else {
            this.goodsList = [...this.goodsList, ...newGoods];
          }
          this.hasMore = newGoods.length === this.pageSize;
          this.currentPage += 1;
        } else {
          common_vendor.index.showToast({ title: "加载失败", icon: "none" });
          this.hasMore = false;
        }
      } catch (e) {
        common_vendor.index.__f__("error", "at pages/index/index.vue:319", "加载商品失败", e);
        common_vendor.index.showToast({ title: "网络错误", icon: "none" });
        this.hasMore = false;
      } finally {
        this.loading = false;
        common_vendor.index.hideLoading();
        this.splitWaterfall();
      }
    },
    // 瀑布流分割
    splitWaterfall() {
      this.leftGoods = [];
      this.rightGoods = [];
      this.goodsList.forEach((item, i) => {
        if (i % 2 === 0)
          this.leftGoods.push(item);
        else
          this.rightGoods.push(item);
      });
    },
    toggleLikeInList(goodsId) {
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        common_vendor.index.showToast({ title: "请先登录", icon: "none" });
        return;
      }
      const item = this.goodsList.find((g) => g.id === goodsId);
      if (!item)
        return;
      item.isLiked = !item.isLiked;
      item.likeCount += item.isLiked ? 1 : -1;
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/user/like/${goodsId}`,
        method: "POST",
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          const result = res.data;
          if (result.ok) {
            item.isLiked = result.isLiked;
            item.likeCount = result.likeCount;
            common_vendor.index.$emit("likeUpdated", { goodsId, isLiked: item.isLiked, likeCount: item.likeCount });
          } else {
            item.isLiked = !item.isLiked;
            item.likeCount += item.isLiked ? 1 : -1;
          }
        },
        fail: () => {
          item.isLiked = !item.isLiked;
          item.likeCount += item.isLiked ? 1 : -1;
        }
      });
    },
    toSearch() {
      common_vendor.index.navigateTo({ url: "/pages/search/search" });
    },
    // toPublish() { uni.navigateTo({ url: '/pages/publish/publish' }) },
    toCategory(id) {
      common_vendor.index.navigateTo({ url: `/pages/category/category?id=${id}` });
    },
    // toAllGoods() { uni.switchTab({ url: '/pages/goods/goods' }) },
    toDetail(id) {
      common_vendor.index.navigateTo({ url: `/pages/detail/detail?id=${id}` });
    },
    changeUniversity() {
      common_vendor.index.navigateTo({
        // 改成 navigateTo（销毁当前页）
        url: "/pages/login/login?from=change"
      }).then(() => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:386", "【index.vue】navigateTo 成功返回");
      }).catch((err) => {
        common_vendor.index.__f__("error", "at pages/index/index.vue:388", "【index.vue】navigateTo 失败了！错误：", err);
      });
    },
    onBannerClick(i) {
      common_vendor.index.__f__("log", "at pages/index/index.vue:391", "点击了第", i + 1, "个轮播");
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
  var _a, _b;
  return common_vendor.e({
    a: $data.statusBarHeight + "px"
  }, {
    b: common_vendor.o((...args) => $options.forceLogout && $options.forceLogout(...args))
  }, {
    c: common_vendor.t(((_b = (_a = $data.profile) == null ? void 0 : _a.university) == null ? void 0 : _b.name) || "未选择大学"),
    d: common_vendor.p({
      type: "refreshempty",
      size: "14",
      color: "#999"
    }),
    e: common_vendor.o((...args) => $options.changeUniversity && $options.changeUniversity(...args)),
    f: common_vendor.o($options.toSearch),
    g: common_vendor.p({
      type: "search",
      size: "22",
      color: "#fff"
    }),
    h: $data.statusBarHeight + "px",
    i: common_vendor.f($data.banners, (item, i, i0) => {
      return {
        a: item,
        b: common_vendor.o(($event) => $options.onBannerClick(i), i),
        c: i
      };
    }),
    j: common_vendor.f($data.categories, (c, k0, i0) => {
      return {
        a: c.icon,
        b: common_vendor.t(c.name),
        c: c.id,
        d: common_vendor.o(($event) => $options.toCategory(c.id), c.id)
      };
    }),
    k: common_vendor.f($data.leftGoods, (item, k0, i0) => {
      return {
        a: item.cover || "/static/c1.png",
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: "1cf27b2a-2-" + i0,
        e: common_vendor.p({
          type: item.isLiked ? "heart-filled" : "heart",
          color: item.isLiked ? "#ff4757" : "#999",
          size: "20"
        }),
        f: common_vendor.t(item.likeCount || 0),
        g: common_vendor.o(($event) => $options.toggleLikeInList(item.id), item.id),
        h: item.id,
        i: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      };
    }),
    l: common_vendor.f($data.rightGoods, (item, k0, i0) => {
      return {
        a: item.cover || "/static/c1.png",
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: "1cf27b2a-3-" + i0,
        e: common_vendor.p({
          type: item.isLiked ? "heart-filled" : "heart",
          color: item.isLiked ? "#ff4757" : "#999",
          size: "20"
        }),
        f: common_vendor.t(item.likeCount || 0),
        g: common_vendor.o(($event) => $options.toggleLikeInList(item.id), item.id),
        h: item.id,
        i: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      };
    }),
    m: $data.goodsList.length > 0
  }, $data.goodsList.length > 0 ? common_vendor.e({
    n: $data.loading
  }, $data.loading ? {} : $data.hasMore ? {
    p: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args))
  } : {}, {
    o: $data.hasMore
  }) : {}, {
    q: $data.goodsList.length === 0 && !$data.loading
  }, $data.goodsList.length === 0 && !$data.loading ? {
    r: common_assets._imports_0
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
