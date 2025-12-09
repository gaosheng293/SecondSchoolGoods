"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      form: {
        avatar: "",
        nickname: ""
      },
      university: null,
      tempNickname: "",
      saving: false
    };
  },
  onLoad() {
    this.loadProfile();
  },
  methods: {
    // 加载用户信息
    loadProfile() {
      var _a, _b;
      const token = common_vendor.index.getStorageSync("token");
      if (!token) {
        common_vendor.index.reLaunch({ url: "/pages/login/login" });
        return;
      }
      const cachedProfile = common_vendor.index.getStorageSync("profile");
      if (cachedProfile) {
        this.form.nickname = ((_a = cachedProfile.user) == null ? void 0 : _a.nickname) || "";
        this.form.avatar = ((_b = cachedProfile.user) == null ? void 0 : _b.avatar) || "";
        this.university = cachedProfile.university || null;
      }
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/user/profile",
        header: { Authorization: "Bearer " + token },
        success: (res) => {
          var _a2, _b2;
          if (res.statusCode === 200 && res.data) {
            const profile = res.data;
            this.form.nickname = ((_a2 = profile.user) == null ? void 0 : _a2.nickname) || "";
            this.form.avatar = ((_b2 = profile.user) == null ? void 0 : _b2.avatar) || "";
            this.university = profile.university || null;
            common_vendor.index.setStorageSync("profile", profile);
          }
        }
      });
    },
    // 头像上传（完全复用 publish.vue 的上传逻辑）
    chooseAvatar() {
      common_vendor.index.chooseImage({
        count: 1,
        success: (res) => {
          const path = res.tempFilePaths[0];
          common_vendor.index.uploadFile({
            url: "http://192.168.0.105:8080/api/goods/upload",
            // 复用商品上传接口
            filePath: path,
            name: "file",
            header: { Authorization: "Bearer " + common_vendor.index.getStorageSync("token") },
            success: (uploadRes) => {
              const data = JSON.parse(uploadRes.data);
              if (data.url) {
                this.form.avatar = data.url;
                common_vendor.index.showToast({ title: "上传成功", icon: "success" });
              }
            },
            fail: () => {
              common_vendor.index.showToast({ title: "上传失败", icon: "none" });
            }
          });
        }
      });
    },
    // 点击学校提示
    showSchoolTip() {
      common_vendor.index.showModal({
        title: "提示",
        content: "若想修改学校信息，请去主页修改",
        showCancel: false,
        confirmText: "我知道了"
      });
    },
    // 昵称弹窗
    openNicknamePopup() {
      this.tempNickname = this.form.nickname;
      this.$refs.popup.open();
    },
    closePopup() {
      this.$refs.popup.close();
    },
    confirmNickname() {
      const name = this.tempNickname.trim();
      if (!name || name.length < 2 || name.length > 12) {
        common_vendor.index.showToast({ title: "请填写2-12位的昵称", icon: "none" });
        return;
      }
      this.form.nickname = name;
      this.form = { ...this.form };
      this.closePopup();
    },
    // 保存资料（关键：接收并保存新 token + profile）
    saveProfile() {
      if (!this.form.nickname.trim()) {
        return common_vendor.index.showToast({ title: "请填写昵称", icon: "none" });
      }
      this.saving = true;
      common_vendor.index.showLoading({ title: "保存中..." });
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/user/update",
        method: "POST",
        header: { Authorization: "Bearer " + common_vendor.index.getStorageSync("token") },
        data: {
          nickname: this.form.nickname,
          avatar: this.form.avatar || ""
          // 防止传 null
        },
        success: (res) => {
          var _a;
          const result = ((_a = res.data) == null ? void 0 : _a.data) || res.data;
          if (result == null ? void 0 : result.ok) {
            if (result.token) {
              common_vendor.index.setStorageSync("token", result.token);
            }
            if (result.profile) {
              common_vendor.index.setStorageSync("profile", result.profile);
            }
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({ title: "保存成功", icon: "success" });
            setTimeout(() => {
              common_vendor.index.navigateBack();
            }, 1200);
          } else {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: (result == null ? void 0 : result.message) || "保存失败，请重试",
              icon: "none"
            });
          }
        },
        fail: (err) => {
          common_vendor.index.hideLoading();
          common_vendor.index.__f__("error", "at pages/profile/edit.vue:232", "保存资料失败", err);
          common_vendor.index.showToast({ title: "网络错误", icon: "none" });
        },
        complete: () => {
          this.saving = false;
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
  var _a;
  return common_vendor.e({
    a: $data.form.avatar
  }, $data.form.avatar ? {
    b: $data.form.avatar,
    c: common_vendor.o(($event) => $data.form.avatar = "")
  } : {
    d: common_vendor.p({
      type: "plus",
      size: "36",
      color: "#ddd"
    })
  }, {
    e: common_vendor.p({
      type: "arrowright",
      size: "16",
      color: "#ccc"
    }),
    f: common_vendor.o((...args) => $options.chooseAvatar && $options.chooseAvatar(...args)),
    g: common_vendor.t($data.form.nickname || "未设置"),
    h: common_vendor.p({
      type: "arrowright",
      size: "16",
      color: "#ccc"
    }),
    i: common_vendor.o((...args) => $options.openNicknamePopup && $options.openNicknamePopup(...args)),
    j: common_vendor.t(((_a = $data.university) == null ? void 0 : _a.name) || "未选择"),
    k: common_vendor.p({
      type: "arrowright",
      size: "16",
      color: "#ccc"
    }),
    l: common_vendor.o((...args) => $options.showSchoolTip && $options.showSchoolTip(...args)),
    m: common_vendor.t($data.saving ? "保存中..." : "保存资料"),
    n: $data.saving,
    o: common_vendor.o((...args) => $options.saveProfile && $options.saveProfile(...args)),
    p: common_vendor.o((...args) => $options.closePopup && $options.closePopup(...args)),
    q: common_vendor.o((...args) => $options.confirmNickname && $options.confirmNickname(...args)),
    r: $data.tempNickname,
    s: common_vendor.o(common_vendor.m(($event) => $data.tempNickname = $event.detail.value, {
      trim: true
    })),
    t: common_vendor.sr("popup", "ead3e541-4"),
    v: common_vendor.p({
      type: "bottom"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ead3e541"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/profile/edit.js.map
