"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      statusBarHeight: common_vendor.index.getSystemInfoSync().statusBarHeight,
      keyword: "",
      autoFocus: true,
      // 进入页面自动聚焦
      history: [],
      // 搜索历史（本地存储）
      hotKeywords: ["AirPods", "Switch", "机械键盘", "韩都衣舍", "九成新自行车", "考研资料"],
      showResult: false,
      // 是否显示搜索结果
      searched: false,
      // 是否已执行过搜索（用于空状态判断）
      // 搜索结果分页
      resultList: [],
      leftGoods: [],
      rightGoods: [],
      currentPage: 1,
      pageSize: 20,
      hasMore: true,
      loading: false
    };
  },
  onLoad() {
    const h = common_vendor.index.getStorageSync("searchHistory") || [];
    this.history = h.slice(0, 10);
  },
  methods: {
    // 返回上一页
    goBack() {
      common_vendor.index.navigateBack();
    },
    focusInput() {
      this.autoFocus = true;
    },
    clearKeyword() {
      this.keyword = "";
      this.showResult = false;
      this.searched = false;
    },
    onInput(e) {
      if (!this.keyword.trim()) {
        this.showResult = false;
        this.searched = false;
      }
    },
    // 保存搜索历史
    saveHistory(kw) {
      if (!kw.trim())
        return;
      let list = this.history.filter((v) => v !== kw);
      list.unshift(kw);
      this.history = list.slice(0, 10);
      common_vendor.index.setStorageSync("searchHistory", this.history);
    },
    // 清空历史
    clearHistory() {
      common_vendor.index.showModal({
        title: "清空搜索历史",
        content: "确定要清空吗？",
        success: (res) => {
          if (res.confirm) {
            this.history = [];
            common_vendor.index.removeStorageSync("searchHistory");
          }
        }
      });
    },
    // 直接点标签搜索
    searchWithKeyword(kw) {
      this.keyword = kw;
      this.doSearch();
    },
    // 执行搜索
    async doSearch() {
      const kw = this.keyword.trim();
      if (!kw)
        return common_vendor.index.showToast({ title: "请输入关键词", icon: "none" });
      this.saveHistory(kw);
      this.currentPage = 1;
      this.resultList = [];
      this.hasMore = true;
      this.showResult = true;
      this.searched = true;
      await this.fetchSearchResult(true);
    },
    // 加载更多
    async loadMore() {
      if (this.loading || !this.hasMore)
        return;
      await this.fetchSearchResult();
    },
    // 实际请求后端搜索接口
    async fetchSearchResult(refresh = false) {
      var _a;
      if (this.loading)
        return;
      this.loading = true;
      common_vendor.index.showLoading({ title: "搜索中..." });
      const token = common_vendor.index.getStorageSync("token");
      const profile = common_vendor.index.getStorageSync("profile");
      if (!token || !((_a = profile == null ? void 0 : profile.university) == null ? void 0 : _a.id)) {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({ title: "请先登录并选择大学", icon: "none" });
        this.loading = false;
        return;
      }
      const universityId = profile.university.id;
      try {
        const res = await common_vendor.index.request({
          url: "http://192.168.0.105:8080/api/goods/search",
          method: "POST",
          header: { Authorization: token ? "Bearer " + token : "" },
          data: {
            keyword: this.keyword.trim(),
            universityId,
            page: this.currentPage,
            size: this.pageSize
          }
        });
        const result = res[1] || res[0] || res;
        if ((result == null ? void 0 : result.statusCode) === 200) {
          const list = result.data || [];
          if (refresh || this.currentPage === 1) {
            this.resultList = list;
          } else {
            this.resultList = [...this.resultList, ...list];
          }
          this.hasMore = list.length === this.pageSize;
          this.currentPage += 1;
        } else {
          this.hasMore = false;
        }
      } catch (e) {
        common_vendor.index.__f__("error", "at pages/search/search.vue:247", e);
        common_vendor.index.showToast({ title: "搜索失败", icon: "none" });
        this.hasMore = false;
      } finally {
        this.loading = false;
        common_vendor.index.hideLoading();
        this.splitWaterfall();
      }
    },
    // 瀑布流分割（和首页一模一样）
    splitWaterfall() {
      this.leftGoods = [];
      this.rightGoods = [];
      this.resultList.forEach((item, i) => {
        if (i % 2 === 0)
          this.leftGoods.push(item);
        else
          this.rightGoods.push(item);
      });
    },
    // 点赞（和首页逻辑一致）
    toggleLike(goodsId) {
      const token = common_vendor.index.getStorageSync("token");
      if (!token)
        return common_vendor.index.showToast({ title: "请先登录", icon: "none" });
      const item = this.resultList.find((g) => g.id === goodsId);
      if (!item)
        return;
      const oldLiked = item.isLiked;
      const oldCount = item.likeCount;
      item.isLiked = !oldLiked;
      item.likeCount += item.isLiked ? 1 : -1;
      common_vendor.index.request({
        url: `http://192.168.0.105:8080/api/user/like/${goodsId}`,
        method: "POST",
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          const r = res.data;
          if (!r.ok) {
            item.isLiked = oldLiked;
            item.likeCount = oldCount;
          } else {
            item.isLiked = r.isLiked;
            item.likeCount = r.likeCount;
          }
        },
        fail: () => {
          item.isLiked = oldLiked;
          item.likeCount = oldCount;
        }
      });
    },
    toDetail(id) {
      common_vendor.index.navigateTo({ url: `/pages/detail/detail?id=${id}` });
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
    b: common_vendor.p({
      type: "search",
      size: "18",
      color: "#999"
    }),
    c: common_vendor.o((...args) => $options.doSearch && $options.doSearch(...args)),
    d: common_vendor.o([($event) => $data.keyword = $event.detail.value, (...args) => $options.onInput && $options.onInput(...args)]),
    e: $data.autoFocus,
    f: $data.keyword,
    g: $data.keyword
  }, $data.keyword ? {
    h: common_vendor.o((...args) => $options.clearKeyword && $options.clearKeyword(...args))
  } : {}, {
    i: common_vendor.o((...args) => $options.focusInput && $options.focusInput(...args)),
    j: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    k: $data.statusBarHeight + "px",
    l: !$data.showResult
  }, !$data.showResult ? common_vendor.e({
    m: $data.history.length
  }, $data.history.length ? {
    n: common_vendor.o($options.clearHistory),
    o: common_vendor.p({
      type: "trash",
      size: "20",
      color: "#999"
    })
  } : {}, {
    p: common_vendor.f($data.history, (item, i, i0) => {
      return {
        a: common_vendor.t(item),
        b: i,
        c: common_vendor.o(($event) => $options.searchWithKeyword(item), i)
      };
    }),
    q: common_vendor.f($data.hotKeywords, (item, i, i0) => {
      return {
        a: common_vendor.t(item),
        b: i,
        c: common_vendor.o(($event) => $options.searchWithKeyword(item), i)
      };
    })
  }) : common_vendor.e({
    r: common_vendor.f($data.leftGoods, (item, k0, i0) => {
      return {
        a: item.cover || "/static/c1.png",
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: "c10c040c-2-" + i0,
        e: common_vendor.p({
          type: item.isLiked ? "heart-filled" : "heart",
          color: item.isLiked ? "#ff4757" : "#999",
          size: "20"
        }),
        f: common_vendor.t(item.likeCount || 0),
        g: common_vendor.o(($event) => $options.toggleLike(item.id), item.id),
        h: item.id,
        i: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      };
    }),
    s: common_vendor.f($data.rightGoods, (item, k0, i0) => {
      return {
        a: item.cover || "/static/c1.png",
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price),
        d: "c10c040c-3-" + i0,
        e: common_vendor.p({
          type: item.isLiked ? "heart-filled" : "heart",
          color: item.isLiked ? "#ff4757" : "#999",
          size: "20"
        }),
        f: common_vendor.t(item.likeCount || 0),
        g: common_vendor.o(($event) => $options.toggleLike(item.id), item.id),
        h: item.id,
        i: common_vendor.o(($event) => $options.toDetail(item.id), item.id)
      };
    }),
    t: $data.resultList.length > 0
  }, $data.resultList.length > 0 ? common_vendor.e({
    v: $data.loading
  }, $data.loading ? {} : $data.hasMore ? {
    x: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args))
  } : {}, {
    w: $data.hasMore
  }) : {}, {
    y: $data.resultList.length === 0 && !$data.loading && $data.searched
  }, $data.resultList.length === 0 && !$data.loading && $data.searched ? {
    z: common_assets._imports_0
  } : {}));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map
