"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/login/login.js";
  "./pages/index/index.js";
  "./pages/mine/mine.js";
  "./pages/chat-list/chat-list.js";
  "./pages/cart/cart.js";
  "./pages/publish/publish.js";
  "./pages/detail/detail.js";
  "./pages/category/category.js";
  "./pages/chat/chat.js";
  "./pages/profile/edit.js";
  "./pages/mine/my-goods.js";
  "./pages/mine/my-orders.js";
  "./pages/order/detail.js";
  "./pages/mine/my-likes.js";
  "./pages/publish/history.js";
  "./pages/publish/edit.js";
  "./pages/address/list.js";
  "./pages/address/edit.js";
  "./pages/help/help.js";
  "./pages/about/about.js";
  "./pages/user/home.js";
  "./pages/search/search.js";
}
const _sfc_main = {
  globalData: {
    socketConnected: false
  },
  onLaunch() {
    this.initGlobalSocket();
  },
  methods: {
    initGlobalSocket() {
      const token = common_vendor.index.getStorageSync("token");
      const userInfo = common_vendor.index.getStorageSync("userInfo");
      if (!token || !(userInfo == null ? void 0 : userInfo.id))
        return;
      common_vendor.index.__f__("log", "at App.vue:17", "【全局】准备连接 WebSocket");
      common_vendor.index.connectSocket({
        url: `ws://192.168.0.105:8080/ws/chat?token=${token}&userId=${userInfo.id}`
      });
      common_vendor.index.onSocketOpen(() => {
        common_vendor.index.__f__("log", "at App.vue:25", "【全局】WebSocket 连接成功");
        this.globalData.socketConnected = true;
      });
      common_vendor.index.onSocketMessage((res) => {
        try {
          const data = JSON.parse(res.data);
          if (data.type === "message") {
            common_vendor.index.$emit("newChatMessage", data.msg);
          }
        } catch (e) {
        }
      });
      common_vendor.index.onSocketError((err) => {
        common_vendor.index.__f__("log", "at App.vue:39", "【全局】WebSocket 错误", err);
        this.globalData.socketConnected = false;
      });
      common_vendor.index.onSocketClose(() => {
        common_vendor.index.__f__("log", "at App.vue:46", "【全局】WebSocket 已关闭，3秒后重连");
        this.globalData.socketConnected = false;
        setTimeout(() => {
          this.initGlobalSocket();
        }, 3e3);
      });
    }
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
