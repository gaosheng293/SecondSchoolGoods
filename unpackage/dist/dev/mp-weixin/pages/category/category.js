"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      defaultCover: "https://img.yzcdn.cn/vant/cat.jpeg",
      categories: [],
      // 纯动态
      currentTab: null,
      // 初始为 null，加载完 categories 后再设默认选中第一个
      page: 1,
      size: 20,
      goodsList: [],
      leftList: [],
      rightList: [],
      loading: false,
      loadingCategories: false,
      hasMore: true,
      firstLoad: true
    };
  },
  onLoad(options) {
    if (options.id) {
      this.currentTab = Number(options.id);
    }
    this.fetchCategories();
  },
  onPullDownRefresh() {
    this.page = 1;
    this.goodsList = [];
    Promise.all([this.fetchCategories(), this.loadGoods()]).finally(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  },
  onReachBottom() {
    if (this.hasMore && !this.loading)
      this.loadMore();
  },
  methods: {
    // 加载分类（和 index.vue 完全一致）
    async fetchCategories() {
      this.loadingCategories = true;
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        this.loadingCategories = false;
        return;
      }
      try {
        const res = await common_vendor.index.request({
          url: "http://192.168.0.105:8080/api/categories",
          header: { Authorization: "Bearer " + token }
        });
        const result = res[1] || res;
        if ((result == null ? void 0 : result.statusCode) === 200 && Array.isArray(result.data)) {
          this.categories = result.data;
          if (!this.currentTab && this.categories.length > 0) {
            this.currentTab = this.categories[0].id;
          }
          if (this.currentTab && !this.categories.find((c) => c.id === this.currentTab)) {
            this.currentTab = this.categories[0].id;
          }
          if (this.page === 1)
            this.loadGoods();
        }
      } catch (e) {
        common_vendor.index.__f__("log", "at pages/category/category.vue:138", "分类加载失败", e);
        common_vendor.index.showToast({ title: "加载分类失败", icon: "none" });
      } finally {
        this.loadingCategories = false;
      }
    },
    switchTab(tabId) {
      if (this.currentTab === tabId)
        return;
      this.currentTab = tabId;
      this.page = 1;
      this.goodsList = [];
      this.hasMore = true;
      this.firstLoad = true;
      this.loadGoods();
    },
    async loadGoods() {
      var _a;
      if (this.loading || !this.currentTab)
        return;
      this.loading = true;
      if (this.page === 1)
        common_vendor.index.showLoading({ title: "加载中..." });
      const token = common_vendor.index.getStorageSync("token");
      const profile = common_vendor.index.getStorageSync("profile");
      if (!token || !((_a = profile == null ? void 0 : profile.university) == null ? void 0 : _a.id)) {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({ title: "请先登录并选择大学", icon: "none" });
        this.loading = false;
        return;
      }
      try {
        const res = await common_vendor.index.request({
          url: "http://192.168.0.105:8080/api/goods/category",
          data: {
            categoryId: this.currentTab,
            // 直接传真实的分类 id
            universityId: profile.university.id,
            page: this.page,
            size: this.size
          },
          header: { Authorization: "Bearer " + token }
        });
        const result = res[1] || res;
        if (result.statusCode === 200) {
          let list = result.data || [];
          list.forEach((item) => {
            if (item.images && typeof item.images === "string") {
              try {
                const imgs = JSON.parse(item.images);
                item.cover = imgs[0] || item.cover;
              } catch (e) {
              }
            }
            item.cover = item.cover || this.defaultCover;
          });
          if (this.page === 1) {
            this.goodsList = list;
          } else {
            this.goodsList = this.goodsList.concat(list);
          }
          this.leftList = this.goodsList.filter((_, i) => i % 2 === 0);
          this.rightList = this.goodsList.filter((_, i) => i % 2 === 1);
          this.hasMore = list.length === this.size;
          this.firstLoad = false;
        }
      } catch (e) {
        common_vendor.index.showToast({ title: "加载商品失败", icon: "none" });
      } finally {
        this.loading = false;
        common_vendor.index.hideLoading();
      }
    },
    loadMore() {
      this.page++;
      this.loadGoods();
    },
    toDetail(id) {
      common_vendor.index.navigateTo({ url: `/pages/detail/detail?id=${id}` });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.categories.length
  }, $data.categories.length ? {
    b: common_vendor.f($data.categories, (tab, k0, i0) => {
      return {
        a: common_vendor.t(tab.name),
        b: tab.id,
        c: $data.currentTab === tab.id ? 1 : "",
        d: common_vendor.o(($event) => $options.switchTab(tab.id), tab.id)
      };
    })
  } : {}, {
    c: common_vendor.f($data.leftList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.cover || $data.defaultCover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: item.isNegotiable || item.isFreeShipping
      }, item.isNegotiable || item.isFreeShipping ? common_vendor.e({
        e: item.isNegotiable
      }, item.isNegotiable ? {} : {}, {
        f: item.isFreeShipping
      }, item.isFreeShipping ? {} : {}) : {}, {
        g: item.id,
        h: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      });
    }),
    d: common_vendor.f($data.rightList, (item, k0, i0) => {
      return common_vendor.e({
        a: item.cover || $data.defaultCover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: item.isNegotiable || item.isFreeShipping
      }, item.isNegotiable || item.isFreeShipping ? common_vendor.e({
        e: item.isNegotiable
      }, item.isNegotiable ? {} : {}, {
        f: item.isFreeShipping
      }, item.isFreeShipping ? {} : {}) : {}, {
        g: item.id,
        h: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      });
    }),
    e: !$data.categories.length && !$data.loadingCategories
  }, !$data.categories.length && !$data.loadingCategories ? {} : {}, {
    f: $data.categories.length && !$data.goodsList.length && !$data.loading && !$data.firstLoad
  }, $data.categories.length && !$data.goodsList.length && !$data.loading && !$data.firstLoad ? {
    g: common_assets._imports_0$3
  } : {}, {
    h: $data.hasMore && $data.goodsList.length > 0
  }, $data.hasMore && $data.goodsList.length > 0 ? {
    i: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args))
  } : !$data.hasMore && $data.goodsList.length > 0 ? {} : {}, {
    j: !$data.hasMore && $data.goodsList.length > 0
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8145b772"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/category/category.js.map
