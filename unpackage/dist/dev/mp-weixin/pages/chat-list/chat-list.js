"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      sessions: []
      // [{friendId, nickname, avatar, lastMessage, lastTime, unread}, ...]
    };
  },
  onShow() {
    this.loadSessions();
    common_vendor.index.$on("newChatMessage", this.handleNewMessage);
  },
  onHide() {
    common_vendor.index.$off("newChatMessage", this.handleNewMessage);
  },
  onUnload() {
    common_vendor.index.$off("newChatMessage", this.handleNewMessage);
  },
  methods: {
    // 加载会话列表（调用你后端新接口）
    async loadSessions() {
      try {
        const token = common_vendor.index.getStorageSync("token");
        const res = await new Promise((resolve, reject) => {
          common_vendor.index.request({
            url: "http://192.168.0.105:8080/api/chat/sessions",
            // 统一 IP
            header: { Authorization: "Bearer " + token },
            success: (res2) => resolve(res2.data),
            fail: reject
          });
        });
        if (res.code === 200) {
          this.sessions = res.data || [];
        }
      } catch (e) {
        common_vendor.index.__f__("log", "at pages/chat-list/chat-list.vue:81", "加载会话失败", e);
      }
    },
    // chat-list.vue 中跳转处改成：
    toChat(item) {
      common_vendor.index.navigateTo({
        url: "/pages/chat/chat",
        success: (res) => {
          res.eventChannel.emit("acceptData", {
            friendId: Number(item.friendId),
            nickname: item.nickname || "用户",
            avatar: item.avatar || ""
          });
        }
      });
    },
    // 时间格式化
    formatTime(time) {
      if (!time)
        return "";
      const d = new Date(time);
      const now = Date.now();
      const diff = (now - d.getTime()) / 1e3;
      if (diff < 60)
        return "刚刚";
      if (diff < 3600)
        return Math.floor(diff / 60) + "分钟前";
      if (diff < 86400)
        return Math.floor(diff / 3600) + "小时前";
      return `${d.getMonth() + 1}-${d.getDate()}`;
    },
    // 有新消息来，更新对应会话
    handleNewMessage(msg) {
      const friendId = msg.fromUserId;
      const existing = this.sessions.find((s) => s.friendId === friendId);
      const newSession = {
        friendId,
        nickname: msg.fromNickname || "用户",
        // 后端要返回昵称，或你自己存
        avatar: msg.fromAvatar || "/static/default-avatar.png",
        lastMessage: msg.type === 1 ? "[图片]" : msg.content || "",
        lastTime: msg.createTime,
        unread: existing ? existing.unread + 1 : 1
      };
      if (existing) {
        Object.assign(existing, newSession);
        this.sessions.sort((a, b) => b.lastTime.localeCompare(a.lastTime));
      } else {
        this.sessions.unshift(newSession);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.sessions, (item, k0, i0) => {
      return common_vendor.e({
        a: item.avatar || "/static/default-avatar.png",
        b: common_vendor.t(item.nickname || "用户"),
        c: common_vendor.t($options.formatTime(item.lastTime)),
        d: common_vendor.t(item.lastMessage || "暂无消息"),
        e: item.unread > 0
      }, item.unread > 0 ? {
        f: common_vendor.t(item.unread > 99 ? "99+" : item.unread)
      } : {}, {
        g: item.friendId,
        h: common_vendor.o(($event) => $options.toChat(item), item.friendId)
      });
    }),
    b: $data.sessions.length === 0
  }, $data.sessions.length === 0 ? {
    c: common_assets._imports_0$1
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-42cde2f3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat-list/chat-list.js.map
