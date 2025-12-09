"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      myId: 0,
      // 当前登录用户ID
      myAvatar: "",
      friendId: 0,
      // 聊天对象ID
      friendNickname: "",
      friendAvatar: "",
      messages: [],
      // 消息列表
      inputText: "",
      page: 1,
      loading: false,
      noMore: false,
      scrollTop: 0
    };
  },
  onLoad(options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptData", (data) => {
      common_vendor.index.__f__("log", "at pages/chat/chat.vue:96", "接收到数据:", data);
      this.friendId = Number(data.friendId) || 0;
      this.friendNickname = data.nickname || "聊天中";
      this.friendAvatar = data.avatar || "/static/default-avatar.png";
      if (this.friendId === 0) {
        common_vendor.index.showToast({ title: "聊天对象错误", icon: "none" });
        return;
      }
      this.loadHistory();
    });
    const userInfo = common_vendor.index.getStorageSync("userInfo");
    common_vendor.index.__f__("log", "at pages/chat/chat.vue:111", "存储的 userInfo:", userInfo);
    this.myId = Number(userInfo == null ? void 0 : userInfo.id) || 0;
    if (this.myId === 0) {
      common_vendor.index.showToast({ title: "请重新登录", icon: "none" });
      setTimeout(() => common_vendor.index.navigateTo({ url: "/pages/login/login" }), 1500);
      return;
    }
    common_vendor.index.__f__("log", "at pages/chat/chat.vue:121", "更新后的 myId:", this.myId);
  },
  onShow() {
    this.clearUnreadBadge();
    common_vendor.index.$on("newChatMessage", this.handleNewMessage);
  },
  onUnload() {
    common_vendor.index.$off("newChatMessage", this.handleNewMessage);
  },
  methods: {
    // 返回
    back() {
      common_vendor.index.navigateBack();
    },
    // 处理收到的新消息
    // 3. 最关键：收到消息时先判断是不是自己发的临时消息（改 handleNewMessage）
    handleNewMessage(msg) {
      if (msg.fromUserId === this.friendId || msg.toUserId === this.friendId) {
        const tempIndex = this.messages.findIndex((m) => String(m.id).startsWith("temp_"));
        if (tempIndex > -1) {
          this.messages.splice(tempIndex, 1, msg);
          return;
        }
        if (msg.fromUserId !== this.myId) {
          this.messages.push(msg);
        }
        this.scrollToBottom();
      }
    },
    sendText() {
      if (!this.inputText.trim())
        return;
      const msgObj = {
        fromUserId: this.myId,
        toUserId: this.friendId,
        content: this.inputText.trim(),
        type: 0
      };
      const tempId = "temp_" + Date.now() + Math.random();
      this.messages.push({
        ...msgObj,
        id: tempId,
        createTime: (/* @__PURE__ */ new Date()).toISOString()
      });
      this.scrollToBottom();
      this.inputText = "";
      common_vendor.index.sendSocketMessage({
        data: JSON.stringify(msgObj),
        fail: () => {
          common_vendor.index.showToast({ title: "发送失败", icon: "none" });
          const idx = this.messages.findIndex((m) => m.id === tempId);
          if (idx > -1)
            this.messages.splice(idx, 1);
        }
      });
    },
    // 选择并发送图片
    chooseImage() {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        success: async (res) => {
          const filePath = res.tempFilePaths[0];
          common_vendor.index.showLoading({ title: "发送中..." });
          try {
            const uploadRes = await common_vendor.index.uploadFile({
              url: "http://192.168.0.105:8080/api/goods/upload",
              // 统一 IP
              filePath,
              name: "file",
              header: {
                Authorization: "Bearer " + common_vendor.index.getStorageSync("token")
              }
            });
            const result = JSON.parse(uploadRes.data);
            if (result.url) {
              const msg = {
                fromUserId: this.myId,
                toUserId: this.friendId,
                imageUrl: result.url,
                type: 1
              };
              this.sendMessage(msg);
            } else {
              common_vendor.index.showToast({ title: "上传失败", icon: "none" });
            }
          } catch (e) {
            common_vendor.index.showToast({ title: "发送失败", icon: "none" });
          } finally {
            common_vendor.index.hideLoading();
          }
        }
      });
    },
    // 真正发送（WebSocket）
    // 2. 发图片也一样（chooseImage 里调用 sendMessage 前加临时ID）
    sendMessage(msgObj) {
      const tempId = "temp_" + Date.now() + Math.random();
      this.messages.push({
        ...msgObj,
        id: tempId,
        createTime: (/* @__PURE__ */ new Date()).toISOString()
      });
      this.scrollToBottom();
      common_vendor.index.sendSocketMessage({
        data: JSON.stringify(msgObj),
        fail: () => {
          const idx = this.messages.findIndex((m) => m.id === tempId);
          if (idx > -1)
            this.messages.splice(idx, 1);
        }
      });
    },
    loadHistory() {
      if (this.loading || this.noMore)
        return;
      this.loading = true;
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        common_vendor.index.showToast({ title: "请重新登录", icon: "none" });
        this.loading = false;
        return;
      }
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/chat/history",
        // 统一 IP
        method: "GET",
        data: {
          friendId: this.friendId,
          page: this.page,
          size: 30
        },
        header: {
          Authorization: "Bearer " + token
        },
        success: (res) => {
          if (res.data && res.data.list) {
            const list = res.data.list.reverse();
            this.messages.unshift(...list);
            if (list.length < 30)
              this.noMore = true;
            this.page++;
            if (this.page === 2) {
              this.$nextTick(() => this.scrollToBottom());
            }
          }
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/chat/chat.vue:293", "加载失败", err);
          common_vendor.index.showToast({ title: "加载失败，请检查网络", icon: "none" });
        },
        complete: () => {
          this.loading = false;
        }
      });
    },
    // 上拉加载更多
    loadMore() {
      if (!this.loading && !this.noMore) {
        this.loadHistory();
      }
    },
    // 滚动到底部
    scrollToBottom() {
      this.$nextTick(() => {
        this.scrollTop = 999999;
      });
    },
    // 预览图片
    previewImage(url) {
      common_vendor.index.previewImage({
        urls: [url],
        current: url
      });
    },
    // 清除消息列表页的未读红点（优雅实现）
    clearUnreadBadge() {
      try {
        const pages = getCurrentPages();
        if (pages.length < 2)
          return;
        const prevPage = pages[pages.length - 2];
        if (!prevPage || prevPage.route !== "pages/chat-list/chat-list")
          return;
        if (!prevPage.sessions || !Array.isArray(prevPage.sessions))
          return;
        const session = prevPage.sessions.find((s) => Number(s.friendId) === Number(this.friendId));
        if (session)
          session.unread = 0;
      } catch (e) {
        common_vendor.index.__f__("log", "at pages/chat/chat.vue:336", "清除未读失败，无需处理", e);
      }
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
    a: common_vendor.p({
      type: "back",
      size: "24",
      color: "#fff"
    }),
    b: common_vendor.o((...args) => $options.back && $options.back(...args)),
    c: common_vendor.t($data.friendNickname || "聊天中"),
    d: $data.loading
  }, $data.loading ? {} : {}, {
    e: $data.noMore
  }, $data.noMore ? {} : {}, {
    f: common_vendor.f($data.messages, (msg, k0, i0) => {
      return common_vendor.e({
        a: msg.fromUserId != $data.myId
      }, msg.fromUserId != $data.myId ? {
        b: $data.friendAvatar || "/static/default-avatar.png"
      } : {}, {
        c: msg.type == 1
      }, msg.type == 1 ? {
        d: msg.imageUrl,
        e: common_vendor.o(($event) => $options.previewImage(msg.imageUrl), msg.id)
      } : {
        f: common_vendor.t(msg.content)
      }, {
        g: common_vendor.n(msg.fromUserId == $data.myId ? "my-bubble" : "other-bubble"),
        h: msg.fromUserId == $data.myId
      }, msg.fromUserId == $data.myId ? {
        i: $data.myAvatar || "/static/default-avatar.png"
      } : {}, {
        j: msg.id,
        k: common_vendor.n(msg.fromUserId == $data.myId ? "mine" : "other")
      });
    }),
    g: $data.scrollTop,
    h: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args)),
    i: common_vendor.o((...args) => $options.sendText && $options.sendText(...args)),
    j: $data.inputText,
    k: common_vendor.o(($event) => $data.inputText = $event.detail.value),
    l: common_vendor.p({
      type: "image",
      size: "28",
      color: "#666"
    }),
    m: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args)),
    n: $data.inputText.trim() ? 1 : "",
    o: !$data.inputText.trim(),
    p: common_vendor.o((...args) => $options.sendText && $options.sendText(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a633310"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map
