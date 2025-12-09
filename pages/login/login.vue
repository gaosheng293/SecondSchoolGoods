<template>
	<view class="page">
		<view class="hero">
			<view class="hero-inner">
				<view class="logo"></view>
				<view class="hero-title">校园登录</view>
				<view class="hero-sub">欢迎使用</view>
			</view>
		</view>
		<view class="content">
			<view v-if="!loggedIn" class="card">
				<view class="card-title" >登录到系统</view>
				<view class="card-sub">使用微信授权快速登录</view>
				<button class="btn-primary" @click="onLogin">微信登录</button>
			</view>

				<!-- 只替换这个 v-else 里的 card 部分（从 <view v-else class="card"> 开始） -->
				<view v-else class="card">
				  <view class="card-title">选择你的大学</view>

				  <!-- 搜索框 -->
				  <view class="search">
					<uni-icons type="search" size="18" color="#999"></uni-icons>
					<input class="search-input" placeholder="搜索大学名称" v-model="searchText" />
				  </view>

				  <scroll-view scroll-y class="list" style="height: 420rpx;">
					
					<!-- 搜索模式：显示扁平搜索结果（性能已优化） -->
					<block v-if="searchText">
					  <view v-for="u in searchResults" :key="u.id" class="item" 
							:class="{ selected: selectedUniversityId === u.id }" 
							@click="selectUniversity(u)">
						<view class="item-left">
						  <view class="item-name">{{ u.name }}</view>
						  <view class="item-province">{{ u.province }}</view>
						</view>
						<uni-icons :type="selectedUniversityId === u.id ? 'checkmarkempty' : 'circle'" size="24" color="#007AFF"></uni-icons>
					  </view>
					  <view v-if="!searchResults.length" class="empty">未找到相关大学</view>
					</block>

					<!-- 正常模式：按省份折叠（性能极好，每次只渲染几十个省份） -->
					<block v-else>
					  <view v-for="(group, province) in groupedUniversities" :key="province">
						<!-- 省份标题（可展开/收起） -->
						<view class="province-header" @click="toggleProvince(province)">
						  <view class="province-name">{{ province }}（{{ group.length }}所）</view>
						  <uni-icons :type="expandedProvinces.includes(province) ? 'top' : 'bottom'" size="20" color="#999"></uni-icons>
						</view>

						<!-- 展开的大学列表 -->
						<view v-if="expandedProvinces.includes(province)">
						  <view v-for="u in group" :key="u.id" class="item sub-item"
								:class="{ selected: selectedUniversityId === u.id }"
								@click="selectUniversity(u)">
							<view class="item-name">{{ u.name }}</view>
							<uni-icons :type="selectedUniversityId === u.id ? 'checkmarkempty' : 'circle'" size="24" color="#007AFF"></uni-icons>
						  </view>
						</view>
					  </view>
					</block>

					<view v-if="!searchText && Object.keys(groupedUniversities).length === 0" class="empty">暂无数据</view>
				  </scroll-view>

				  <button class="btn-primary" @click="confirmUniversity" :disabled="!selectedUniversityId">
					确认选择
				  </button>
				</view>
		</view>
	</view>
</template>


<script>
import universityList from '@/static/universities.json'
export default {
  data() {
    return {
      loggedIn: false,
      token: '',
      rawList: [],              // 原始完整数据
      groupedUniversities: {},  // { "北京市": [..], "广东省": [..] }
      expandedProvinces: [],    // 当前展开的省份
      selectedUniversityId: '',
      selectedName: '',
      searchText: '',
      searchResults: []         // 搜索结果缓存
    }
  },

  computed: {
    // 全局搜索（防抖 + 只在有输入时计算）
    filteredSearch() {
      const s = this.searchText.trim().toLowerCase()
      if (!s) return []
      return this.rawList.filter(u => 
        u.name.toLowerCase().includes(s) || 
        (u.abbreviation && u.abbreviation.toLowerCase().includes(s))
      )
    }
  },

  watch: {
    searchText(newVal) {
      // 简单防抖，避免输入时频繁 filter 几千条
      clearTimeout(this._searchTimer)
      this._searchTimer = setTimeout(() => {
        this.searchResults = this.filteredSearch
      }, 200)
    }
  },

  // 生命周期函数：移到这里（平行于 methods）
  onLoad(options) {
    const token = uni.getStorageSync('token')
	
    if (!token) {
    		// 没 token → 留在登录页
    		this.loggedIn = false
    		return
    }
    this.loggedIn = true
    this.token = token
    this.loadUniversities()
	// 如果是切换大学模式，清空上次选择
    if (options.from === 'change') {
		this.selectedUniversityId = ''
		setTimeout(() => {
		  uni.showToast({ title: '请重新选择大学', icon: 'none' })
		}, 300)
    }else{
		uni.request({
				url: 'http://192.168.0.105:8080/api/user/profile',
				method: 'GET',
				header: {
				  Authorization: 'Bearer ' + token
				},
				success: (res) => {
				  if (res.statusCode === 200 && res.data && res.data.university) {
					// 已有大学 → 直接跳首页！（最关键的一步）
					uni.reLaunch({
					  url: '/pages/index/index'
					})
				  } else {
					// 有 token 但没选大学 → 进入选大学流程
					this.loggedIn = true
					this.token = token
					this.loadUniversities()
				  }
				},
				fail: () => {
				  // 请求失败也当没选过大学（安全起见）
				  this.loggedIn = true
				  this.token = token
				  this.loadUniversities()
				}
		})
	}

    
  },
  onShow() {
    // 可选：加这个，确保每次显示都检查（防缓存）
    const token = uni.getStorageSync('token')
    if (token && !this.loggedIn) {
      this.onLoad({})  // 复用上面的逻辑
    }
  },

  methods: {
    onLogin() {
      uni.login({
        success: (res) => {
          const code = res.code
          uni.request({
            url: 'http://192.168.0.105:8080/api/auth/wxLogin',
            method: 'POST',
            data: { code },
			success: (r) => {
			  console.log('【登录接口完整返回】', r.data)  // 关键！先看这个！

			  const data = r.data || {}
			  
			  if (data.token) {  // ←←←← 确认这里真的有 token 字符串
				this.token = data.token
				uni.setStorageSync('token', data.token)
				uni.setStorageSync('userInfo', data.userInfo)
				console.log('保存成功的 token:', data.token.substring(0, 20) + '...')
				
				this.loggedIn = true
				this.loadUniversities()
			  } else {
				console.error('登录成功但后端未返回 token 字段！返回数据:', data)
				uni.showToast({ title: '登录成功但 token 为空，请联系管理员', icon: 'none', duration: 5000 })
			  }
			},
            fail: () => { 
              uni.showToast({ title: '网络错误', icon: 'none' })
            }
          })
        },
        fail: () => {
          uni.showToast({ title: '登录失败', icon: 'none' })
        }
      })
    },
    
    loadUniversities() {
      const list = Array.isArray(universityList) ? universityList : []
      this.rawList = list.map(u => ({
        id: u.id,
        name: u.name,
        province: u.province || '未知地区',
        abbreviation: u.abbreviation || ''
      }))

      // 按省份分组（只执行一次，性能极高）
      const groups = {}
      this.rawList.forEach(u => {
        if (!groups[u.province]) groups[u.province] = []
        groups[u.province].push(u)
      })

      // 可选：按省份名称排序
      this.groupedUniversities = Object.keys(groups)
        .sort()
        .reduce((obj, key) => {
          obj[key] = groups[key]
          return obj
        }, {})

      // 默认展开前几个热门省份（可选）
      this.expandedProvinces = ['北京市', '广东省', '上海市', '江苏省', '浙江省']
    },

    toggleProvince(province) {
      const idx = this.expandedProvinces.indexOf(province)
      if (idx > -1) {
        this.expandedProvinces.splice(idx, 1)
      } else {
        this.expandedProvinces.push(province)
      }
    },

    selectUniversity(u) {
      this.selectedUniversityId = u.id
      this.selectedName = u.name
      
      // 新增这三行 —— 关键！
      this.searchText = u.name               // 搜索框显示大学名称
      this.searchResults = []                // 清空搜索态，回到“省份列表”模式
      this.expandedProvinces = [u.province]  // 可选：自动展开他所在省份，看着更自然
    },


  //   confirmUniversity() {
	 //  console.log('当前要发的 token 是:', this.token)  // ←← 看这里！
	 //  if (!this.token || this.token.length < 10) {
		// uni.showToast({ title: 'token 为空或异常，请重新登录', icon: 'none' })
		// this.loggedIn = false
		// return
	 //  }
  //     if (!this.selectedUniversityId) {
  //       uni.showToast({ title: '请先选择大学', icon: 'none' })
  //       return
  //     } 
  //     uni.request({
  //       url: 'http://192.168.0.105:8080/api/user/university',
  //       method: 'POST',
  //       header: {
  //         Authorization: 'Bearer ' + this.token
  //       },
  //       data: {
  //         universityId: this.selectedUniversityId
  //       },
  //       success: (res) => {
  //         // if (res.data && res.data.token) {
  //         //   // 更新 token（后端可能刷新了）
  //         //   this.token = res.data.token
  //         //   uni.setStorageSync('token', res.data.token)
  //         // }
  //         // uni.showToast({ title: '设置成功', icon: 'success' })
  //         // setTimeout(() => {
  //         //   uni.reLaunch({ url: '/pages/index/index' })
  //         // }, 800)
		//   if (res[1]?.data?.ok) {
		//       const { token, profile } = res[1].data
		  
		//       // 关键：保存新 token
		//       uni.setStorageSync('token', token)
		  
		//       // 关键：保存完整的 profile（包含 university）
		//       uni.setStorageSync('profile', profile)
		  
		//       uni.showToast({ title: '切换成功' })
		//       setTimeout(() => uni.switchTab({ url: '/pages/index/index' }), 800)
		//   }
  //       },
  //       fail: () => {
  //         uni.showToast({ title: '网络错误，请重试', icon: 'none' })
  //       }
  //     })
  //   }
	  confirmUniversity() {
		if (!this.selectedUniversityId) {
		  uni.showToast({ title: '请先选择大学', icon: 'none' })
		  return
		}
	  
		uni.showLoading({ title: '提交中...' })
	  
		uni.request({
		  url: 'http://192.168.0.105:8080/api/user/university',
		  method: 'POST',
		  header: {
			Authorization: 'Bearer ' + this.token
		  },
		  data: {
			universityId: this.selectedUniversityId
		  },
		  success: (res) => {
			console.log('【选择大学接口完整返回】', res)  // 关键调试！
	  
			// 关键修复：兼容 uni.request 的两种返回格式
			const result = res[1] || res   // ← 这一行决定成败！
	  
			if (result?.data?.ok) {
			  const { token: newToken, profile } = result.data
	  
			  // 保存新 token（后端重新签发了，带了 universityId 信息）
			  uni.setStorageSync('token', newToken)
	  
			  // 保存完整的 profile（包含 university.id 和 name）
			  uni.setStorageSync('profile', profile)
	  
			  uni.hideLoading()
			  uni.showToast({ title: '选择成功', icon: 'success' })
	  
			  // 跳转首页
			  setTimeout(() => {
				uni.reLaunch({ url: '/pages/index/index' })
				// 或者用 switchTab 如果是 tabBar 页
				// uni.switchTab({ url: '/pages/index/index' })
			  }, 800)
	  
			} else {
			  uni.hideLoading()
			  uni.showToast({
				title: result?.data?.message || '设置失败，请重试',
				icon: 'none'
			  })
			}
		  },
		  fail: (err) => {
			uni.hideLoading()
			console.error('选择大学失败', err)
			uni.showToast({ title: '网络错误', icon: 'none' })
		  }
		})
	  }
  }
}
</script>
<style>
.page { display: flex; flex-direction: column; min-height: 100vh; background-color: #f7f8fa }
.hero { height: 200px; background: linear-gradient(135deg, #83a4d4, #b6fbff); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px }
.hero-inner { height: 100%; align-items: center; justify-content: center; display: flex; flex-direction: column }
.logo { width: 64px; height: 64px; border-radius: 32px; background: #fff; opacity: 0.9; margin-bottom: 12px }
.hero-title { color: #fff; font-size: 22px; font-weight: 600 }
.hero-sub { color: #eef; font-size: 14px; margin-top: 4px }
.content { padding: 16px; margin-top: -40px }
.card { background: #fff; border-radius: 16px; box-shadow: 0 6px 16px rgba(0,0,0,0.06); padding: 16px }
.card + .card { margin-top: 16px }
.card-title { font-size: 18px; font-weight: 600 ;justify-content: center;}
.card-sub { font-size: 13px; color: #888; margin-top: 6px }
.btn-primary { margin-top: 16px; background-color: #007AFF; color: #fff; border-radius: 8px; padding: 12px; font-size: 16px }
.btn-primary[disabled] { opacity: 0.5 }
.search { margin-top: 12px; display: flex; align-items: center; background: #f5f6f7; border-radius: 8px; padding: 8px }
.search-input { flex: 1; padding: 6px 8px; font-size: 14px }
.list { max-height: 320px; margin-top: 8px }
.item { display: flex; align-items: center; justify-content: space-between; padding: 12px; border-bottom: 1px solid #f0f0f0 }
.item.selected { background: #f0f7ff }
.item-name { font-size: 16px }
.item-en { font-size: 12px; color: #888; margin-top: 4px }
.empty { text-align: center; color: #999; padding: 16px }
.province-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 12px;
  background: #f8f9fb;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #eee;
}

.sub-item {
  padding-left: 32px;
  background: #fff !important;
}

.item-province {
  font-size: 12px;
  color: #888;
  margin-top: 4px;
}
</style>
