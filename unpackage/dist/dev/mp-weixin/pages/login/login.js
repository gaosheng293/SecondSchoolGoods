"use strict";
const common_vendor = require("../../common/vendor.js");
const universityList = [
  {
    name: "北京大学",
    abbreviation: "pku",
    province: "北京市",
    id: "588f923b-d85e-4bd4-9849-3ef4540cf22c"
  },
  {
    name: "中国人民大学",
    abbreviation: "ruc",
    province: "北京市",
    id: "b911408a-9051-4dd2-9beb-e6cb42697f3a"
  },
  {
    name: "清华大学",
    abbreviation: "tsinghua",
    province: "北京市",
    id: "e60318df-be12-40a1-be19-87df86a1882f"
  },
  {
    name: "北京交通大学",
    abbreviation: "njtu",
    province: "北京市",
    id: "fb7e5c29-0218-4427-87fe-7c9b44732112"
  },
  {
    name: "北京工业大学",
    abbreviation: "bjut",
    province: "北京市",
    id: "2d03965a-c4ca-47e7-ab40-56bc7b7842bc"
  },
  {
    name: "北京航空航天大学",
    abbreviation: "buaa",
    province: "北京市",
    id: "33c4cedf-a3ad-4754-9391-0f9ff4d5b009"
  },
  {
    name: "北京理工大学",
    abbreviation: "bit",
    province: "北京市",
    id: "7b5d3f6e-e1c8-45a0-806f-0626503ed931"
  },
  {
    name: "北京科技大学",
    abbreviation: "ustb",
    province: "北京市",
    id: "6df0bee5-812e-410f-a71a-d05f95df48c2"
  },
  {
    name: "北方工业大学",
    abbreviation: "ncut",
    province: "北京市",
    id: "394a877d-5e60-4750-8ae3-27801e5b25e9"
  },
  {
    name: "北京化工大学",
    abbreviation: "buct",
    province: "北京市",
    id: "d134bee6-73c9-48fd-9e02-616514879f7f"
  },
  {
    name: "北京工商大学",
    abbreviation: "btbu",
    province: "北京市",
    id: "e8ee523f-1c60-4443-ae31-2fa7f859bc4d"
  },
  {
    name: "北京服装学院",
    abbreviation: "bift",
    province: "北京市",
    id: "dd7ede5b-9302-4f2d-b89b-5749831d6660"
  },
  {
    name: "北京邮电大学",
    abbreviation: "bupt",
    province: "北京市",
    id: "53675c01-fc37-4187-9c8e-7cdb900aad32"
  },
  {
    name: "北京印刷学院",
    abbreviation: "bigc",
    province: "北京市",
    id: "5d07e6f8-1179-43dc-a14b-01e262eab200"
  },
  {
    name: "北京建筑大学",
    abbreviation: "bucea",
    province: "北京市",
    id: "99280ce0-7365-4185-a3d7-3a35d75c71ed"
  },
  {
    name: "北京石油化工学院",
    abbreviation: "bipt",
    province: "北京市",
    id: "69a4b3cf-bfcd-45d5-adab-4a1269737b41"
  },
  {
    name: "北京电子科技学院",
    abbreviation: "besti",
    province: "北京市",
    id: "9dc09b3a-da73-4579-9619-854ce1a3a376"
  },
  {
    name: "中国农业大学",
    abbreviation: "cau",
    province: "北京市",
    id: "bf910340-59c4-4a6e-8ed0-aa9b9e77d392"
  },
  {
    name: "北京农学院",
    abbreviation: "bac",
    province: "北京市",
    id: "bacfb0e5-37d7-472f-a4bc-1b339b453e7f"
  },
  {
    name: "北京林业大学",
    abbreviation: "bjfu",
    province: "北京市",
    id: "2f2b1880-7d90-4733-8ab5-0a5d7f125e47"
  },
  {
    name: "北京协和医学院",
    abbreviation: "cams",
    province: "北京市",
    id: "5678e4da-01a5-4a03-a932-e0a215a092c4"
  },
  {
    name: "首都医科大学",
    abbreviation: "ccmu",
    province: "北京市",
    id: "36b4ef9b-dae1-4e3c-b34e-4b4ad67cdec4"
  },
  {
    name: "北京中医药大学",
    abbreviation: "bucm",
    province: "北京市",
    id: "f0a2504d-968a-4361-b615-ad8b5b531218"
  },
  {
    name: "北京师范大学",
    abbreviation: "bnu",
    province: "北京市",
    id: "7cd64af6-f7f7-4521-991c-ae67e60028de"
  },
  {
    name: "首都师范大学",
    abbreviation: "cnu",
    province: "北京市",
    id: "df9157b2-2973-423c-83da-330da3904aee"
  },
  {
    name: "首都体育学院",
    abbreviation: "cupes",
    province: "北京市",
    id: "c3892622-1877-439a-b1fe-3e08c94b5ac0"
  },
  {
    name: "北京外国语大学",
    abbreviation: "bfsu",
    province: "北京市",
    id: "9aed109a-314a-4036-9030-1c5c90ab899a"
  },
  {
    name: "北京第二外国语学院",
    abbreviation: "bisu",
    province: "北京市",
    id: "3b59165a-8446-4c06-86e6-fa8499186917"
  },
  {
    name: "北京语言大学",
    abbreviation: "blcu",
    province: "北京市",
    id: "0e385143-a097-4e7a-8c3a-12af47ec6dd9"
  },
  {
    name: "中国传媒大学",
    abbreviation: "cuc",
    province: "北京市",
    id: "87d4280f-3284-48b1-a8f0-80784f5b10e0"
  },
  {
    name: "中央财经大学",
    abbreviation: "cufe",
    province: "北京市",
    id: "4cbc9296-ce53-4b66-801d-2d713b4c7b19"
  },
  {
    name: "对外经济贸易大学",
    abbreviation: "uibe",
    province: "北京市",
    id: "3bf76de2-9f1c-4342-8c93-b9786abb3df1"
  },
  {
    name: "北京物资学院",
    abbreviation: "bwu",
    province: "北京市",
    id: "177ce613-fda1-4796-b5dd-ed5906e9e76c"
  },
  {
    name: "首都经济贸易大学",
    abbreviation: "cueb",
    province: "北京市",
    id: "fc52379e-a0f7-49d2-a60d-b445483481f1"
  },
  {
    name: "外交学院",
    abbreviation: "cfau",
    province: "北京市",
    id: "cd748d94-1c15-49df-8ed3-43330f478346"
  },
  {
    name: "中国人民公安大学",
    abbreviation: "cppsu",
    province: "北京市",
    id: "5d94bbbd-7720-4cc3-8a75-dc029b5eec79"
  },
  {
    name: "国际关系学院",
    abbreviation: "uir",
    province: "北京市",
    id: "00ada004-1096-45d1-8dc3-8d9ab9d202a5"
  },
  {
    name: "北京体育大学",
    abbreviation: "bsu",
    province: "北京市",
    id: "7a9816ab-5015-4ca4-a0d1-0e17db2dad9c"
  },
  {
    name: "中央音乐学院",
    abbreviation: "ccom",
    province: "北京市",
    id: "56ddd0ba-a48e-4819-9bbb-c400ec3b0695"
  },
  {
    name: "中国音乐学院",
    abbreviation: "ccmusic",
    province: "北京市",
    id: "866f7f63-842b-4b50-b153-94762e6044b9"
  },
  {
    name: "中央美术学院",
    abbreviation: "cafa",
    province: "北京市",
    id: "49b92c63-84f6-464e-bcf2-845e5753e89d"
  },
  {
    name: "中央戏剧学院",
    abbreviation: "chntheatre",
    province: "北京市",
    id: "6889e42b-e9ff-46fc-b638-44cb395d6833"
  },
  {
    name: "中国戏曲学院",
    abbreviation: "nacta",
    province: "北京市",
    id: "09b489fb-3c9c-4cc0-9947-a17c8ccecddf"
  },
  {
    name: "北京电影学院",
    abbreviation: "bfa",
    province: "北京市",
    id: "84af76e8-c638-45b4-97f9-9c51138fc969"
  },
  {
    name: "北京舞蹈学院",
    abbreviation: "bda",
    province: "北京市",
    id: "d53c627c-3b01-48ae-9245-e765c0da296f"
  },
  {
    name: "中央民族大学",
    abbreviation: "muc",
    province: "北京市",
    id: "37b720c3-a988-4496-aed8-8ca63efd30f7"
  },
  {
    name: "中国政法大学",
    abbreviation: "cupl",
    province: "北京市",
    id: "a4d54bf5-c1fc-494f-8b18-16026e2b08ce"
  },
  {
    name: "华北电力大学",
    abbreviation: "ncepu",
    province: "北京市",
    id: "4dcc1d0a-c065-4361-8d35-f053cf353752"
  },
  {
    name: "中华女子学院",
    abbreviation: "cwu",
    province: "北京市",
    id: "6aba0a99-d793-4a8f-a03f-1282f9114245"
  },
  {
    name: "北京信息科技大学",
    abbreviation: "bistu",
    province: "北京市",
    id: "2309b729-fb83-4ac4-bd1f-e831cd923318"
  },
  {
    name: "中国矿业大学（北京）",
    abbreviation: "cumtb",
    province: "北京市",
    id: "a4c7e02c-ae46-441f-af0b-751722ba8fbe"
  },
  {
    name: "中国石油大学（北京）",
    abbreviation: "cup",
    province: "北京市",
    id: "5907dcc2-f714-4f8b-b165-5589d375d79e"
  },
  {
    name: "中国地质大学（北京）",
    abbreviation: "cugb",
    province: "北京市",
    id: "cb960d53-eded-46bd-b373-775b045deedc"
  },
  {
    name: "北京联合大学",
    abbreviation: "buu",
    province: "北京市",
    id: "61234bc8-1a12-41e7-8721-b8397a58311e"
  },
  {
    name: "北京城市学院",
    abbreviation: "bcu",
    province: "北京市",
    id: "3e256f6e-c69e-45ec-82ff-6a59d6acb198"
  },
  {
    name: "中国青年政治学院",
    abbreviation: "cyu",
    province: "北京市",
    id: "cc69cad0-431c-47d2-9e4c-cf383f7bf8bf"
  },
  {
    name: "首钢工学院",
    abbreviation: "sgit",
    province: "北京市",
    id: "2c97cdbf-e721-4ea3-86d5-657b09522fa4"
  },
  {
    name: "中国劳动关系学院",
    abbreviation: "ciir",
    province: "北京市",
    id: "eac450cd-a5f3-4788-8bfa-c1e87238c6a3"
  },
  {
    name: "北京吉利学院",
    abbreviation: "bgu",
    province: "北京市",
    id: "7b13e1e6-16b1-48bf-91ea-16329d40e397"
  },
  {
    name: "首都师范大学科德学院",
    abbreviation: "kdcnu",
    province: "北京市",
    id: "7d85fb97-e2a1-4d5a-9127-644fb24bf410"
  },
  {
    name: "北京工商大学嘉华学院",
    abbreviation: "canvard",
    province: "北京市",
    id: "18cb3a8a-660d-44d1-b248-4878557f0851"
  },
  {
    name: "北京邮电大学世纪学院",
    abbreviation: "ccbupt",
    province: "北京市",
    id: "cda51813-a6c1-47de-8704-24749f8f0a23"
  },
  {
    name: "北京工业大学耿丹学院",
    abbreviation: "gengdan",
    province: "北京市",
    id: "3f4ba825-459f-48e6-aaf2-f1b0490611f3"
  },
  {
    name: "北京警察学院",
    abbreviation: "bjpc",
    province: "北京市",
    id: "5a32039a-fc82-43bf-b0dc-ad3daa9d4368"
  },
  {
    name: "北京第二外国语学院中瑞酒店管理学院",
    abbreviation: "bhi",
    province: "北京市",
    id: "1f0934a5-73fa-4f38-979f-4778491d1e09"
  },
  {
    name: "中国科学院大学",
    abbreviation: "gucas",
    province: "北京市",
    id: "7f10310b-c31a-408b-82d5-5813e959618c"
  },
  {
    name: "中国社会科学院大学",
    abbreviation: "gscass",
    province: "北京市",
    id: "4ffc67ff-6c98-4309-8612-c02bbee581e1"
  },
  {
    name: "北京工业职业技术学院",
    abbreviation: "bgy",
    province: "北京市",
    id: "a33a4676-7ca2-476c-97bc-1957e2dd7d88"
  },
  {
    name: "北京信息职业技术学院",
    abbreviation: "bitc",
    province: "北京市",
    id: "0af5a6b2-ad71-4a56-8a54-27a0b36405b4"
  },
  {
    name: "北京电子科技职业学院",
    abbreviation: "dky",
    province: "北京市",
    id: "30d85314-fcd2-4f80-b709-7276d83526cd"
  },
  {
    name: "北京京北职业技术学院",
    abbreviation: "jbzy",
    province: "北京市",
    id: "e76638aa-0aff-4069-b0ff-93c8cae774ec"
  },
  {
    name: "北京交通职业技术学院",
    abbreviation: "jtxy",
    province: "北京市",
    id: "589f5271-d6d7-4af6-9c80-1715bdfb6221"
  },
  {
    name: "北京青年政治学院",
    abbreviation: "bjypc",
    province: "北京市",
    id: "2c0475b7-d227-4a25-8ce4-7523f0303b29"
  },
  {
    name: "北京农业职业学院",
    abbreviation: "bvca",
    province: "北京市",
    id: "7d2e6353-054c-47a6-8cb9-818d4e931c8b"
  },
  {
    name: "北京政法职业学院",
    abbreviation: "bcpl",
    province: "北京市",
    id: "857c53c0-032e-4c3e-b254-527c35bb3eee"
  },
  {
    name: "北京财贸职业学院",
    abbreviation: "bjczy",
    province: "北京市",
    id: "abd3fb07-0909-4c8f-b530-7bdc30398029"
  },
  {
    name: "北京北大方正软件职业技术学院",
    abbreviation: "pfc",
    province: "北京市",
    id: "7f36a3fc-6e1a-40f4-8773-87bcd40f3c78"
  },
  {
    name: "北京经贸职业学院",
    abbreviation: "csuedu",
    province: "北京市",
    id: "ecc0d6e9-9aea-422c-bfa5-6b0d0af76c0a"
  },
  {
    name: "北京经济技术职业学院",
    abbreviation: "tangedu",
    province: "北京市",
    id: "a0a0e4ed-94c1-4d8e-8544-7cd1c696f7b8"
  },
  {
    name: "北京戏曲艺术职业学院",
    abbreviation: "bjxx",
    province: "北京市",
    id: "2f5c8059-4454-487c-90f7-b7f5901ece24"
  },
  {
    name: "北京汇佳职业学院",
    abbreviation: "hju",
    province: "北京市",
    id: "7511e6e6-dcc0-4e70-8383-d9ea18b3d322"
  },
  {
    name: "北京科技经营管理学院",
    abbreviation: "bjjsy1985",
    province: "北京市",
    id: "993fe049-a40a-4a5c-b1f8-e1cb12286a68"
  },
  {
    name: "北京科技职业学院",
    abbreviation: "5aaa",
    province: "北京市",
    id: "d975ddaa-cc65-4113-8043-85f8b572c9f8"
  },
  {
    name: "北京培黎职业学院",
    abbreviation: "bjpldx",
    province: "北京市",
    id: "0f14080d-496b-48c9-b06f-1c66bae6b229"
  },
  {
    name: "北京经济管理职业学院",
    abbreviation: "biem",
    province: "北京市",
    id: "6a683175-52a1-4c5b-8b27-35007adc176a"
  },
  {
    name: "北京劳动保障职业学院",
    abbreviation: "bvclss",
    province: "北京市",
    id: "26085e1e-af75-41c8-bdb6-ebc788df4593"
  },
  {
    name: "北京社会管理职业学院",
    abbreviation: "bcsa",
    province: "北京市",
    id: "4fde01f8-880a-4bf7-8988-fdbf37ec3f4a"
  },
  {
    name: "北京艺术传媒职业学院",
    abbreviation: "bjamu",
    province: "北京市",
    id: "2ef1105e-2bda-4a29-b7dc-3e0b3edd3df3"
  },
  {
    name: "北京体育职业学院",
    abbreviation: "bjtzhy",
    province: "北京市",
    id: "a3485469-18ca-4313-84b9-ae54df06f484"
  },
  {
    name: "北京交通运输职业学院",
    abbreviation: "bjjtxx",
    province: "北京市",
    id: "d521f10b-597d-4b82-95d6-6c6102da8588"
  },
  {
    name: "北京卫生职业学院",
    abbreviation: "bjwsxx",
    province: "北京市",
    id: "f7598047-800b-48db-8089-175221d86b49"
  },
  {
    name: "北京网络职业学院",
    abbreviation: "bjwlxy",
    province: "北京市",
    id: "746a22aa-b45a-4e76-b897-4a36fb037b42"
  },
  {
    name: "南开大学",
    abbreviation: "nankai",
    province: "天津市",
    id: "d39173ad-d77c-4406-8d1e-50ddd23a9baf"
  },
  {
    name: "天津大学",
    abbreviation: "tju",
    province: "天津市",
    id: "b6ac80ac-2935-4337-af27-7972696c9fd9"
  },
  {
    name: "天津科技大学",
    abbreviation: "tuli",
    province: "天津市",
    id: "3eab0a7c-5e45-4a84-8210-caf7517f9d54"
  },
  {
    name: "天津工业大学",
    abbreviation: "tjpu",
    province: "天津市",
    id: "b3a91c5b-7909-40e0-848a-afc28b122861"
  },
  {
    name: "中国民航大学",
    abbreviation: "cauc",
    province: "天津市",
    id: "6e045fdd-f130-45ec-82eb-01ecd0e51dfc"
  },
  {
    name: "天津理工大学",
    abbreviation: "tjut",
    province: "天津市",
    id: "3ee1df8c-f259-43dd-87cd-56107c0f8142"
  },
  {
    name: "天津农学院",
    abbreviation: "tjac",
    province: "天津市",
    id: "34c21370-8a1b-45b6-8107-abddfe56484e"
  },
  {
    name: "天津医科大学",
    abbreviation: "tijmu",
    province: "天津市",
    id: "23091bbe-04ba-450c-ad98-04634ea24314"
  },
  {
    name: "天津中医药大学",
    abbreviation: "tjutcm",
    province: "天津市",
    id: "5cb29188-091d-4a30-a830-e909e88731c7"
  },
  {
    name: "天津师范大学",
    abbreviation: "tjnu",
    province: "天津市",
    id: "a09cc5ad-c6e9-49e9-904d-6445905f68e8"
  },
  {
    name: "天津职业技术师范大学",
    abbreviation: "tute",
    province: "天津市",
    id: "f73607e4-1482-4283-ab3a-b7e36940add8"
  },
  {
    name: "天津外国语大学",
    abbreviation: "tjfsu",
    province: "天津市",
    id: "54bb3635-3dd6-42f0-bb74-bc9336d462bd"
  },
  {
    name: "天津商业大学",
    abbreviation: "tjcu",
    province: "天津市",
    id: "7776a32a-57d1-464b-a1e3-02da48f6f818"
  },
  {
    name: "天津财经大学",
    abbreviation: "tjufe",
    province: "天津市",
    id: "e2cef8e7-7cff-4143-a754-a35fe4a676ab"
  },
  {
    name: "天津体育学院",
    abbreviation: "tjus",
    province: "天津市",
    id: "0520c275-39a5-4736-aeea-a9f79fc26ad5"
  },
  {
    name: "天津音乐学院",
    abbreviation: "tjcm",
    province: "天津市",
    id: "405a94c6-9d3a-4b79-ae27-536082bd9b82"
  },
  {
    name: "天津美术学院",
    abbreviation: "tjarts",
    province: "天津市",
    id: "8038b3d4-e77c-4805-ab1f-a2e2e2bc0804"
  },
  {
    name: "天津城建大学",
    abbreviation: "tjuci",
    province: "天津市",
    id: "6e01327b-af6a-43de-b908-32cb14ddc60f"
  },
  {
    name: "天津天狮学院",
    abbreviation: "tianshi",
    province: "天津市",
    id: "e41a96ab-0be7-4112-b4d6-9fcf037e7cc4"
  },
  {
    name: "天津中德应用技术大学",
    abbreviation: "zdtj",
    province: "天津市",
    id: "32f9f8d6-926a-45b1-94fe-e641823d406f"
  },
  {
    name: "天津外国语学院滨海外事学院",
    abbreviation: "tjfsu",
    province: "天津市",
    id: "d8dfc032-a6fd-4883-9546-07f5083f16da"
  },
  {
    name: "天津体育学院运动与文化艺术学院",
    abbreviation: "tjtwy",
    province: "天津市",
    id: "48957eee-c071-4b9e-b767-c2b486b94404"
  },
  {
    name: "天津商业大学宝德学院",
    abbreviation: "boustead",
    province: "天津市",
    id: "50152be6-f43d-4921-b7c0-36e368330ad1"
  },
  {
    name: "天津医科大学临床医学院",
    abbreviation: "tijmu",
    province: "天津市",
    id: "329e7ac3-747d-43b9-a05b-1c17491eaf13"
  },
  {
    name: "南开大学滨海学院",
    abbreviation: "nankai",
    province: "天津市",
    id: "b1ad9868-38f8-41d5-adac-a6011aa7469a"
  },
  {
    name: "天津师范大学津沽学院",
    abbreviation: "jinguxy",
    province: "天津市",
    id: "72e53fed-f945-4841-b147-40ce0dec0fbb"
  },
  {
    name: "天津理工大学中环信息学院",
    abbreviation: "tjzhic",
    province: "天津市",
    id: "7e0cd326-7ac4-4567-8c59-7d9700346def"
  },
  {
    name: "北京科技大学天津学院",
    abbreviation: "ustb",
    province: "天津市",
    id: "96941371-d307-409e-96a1-2eb974a440ac"
  },
  {
    name: "天津大学仁爱学院",
    abbreviation: "tjrac",
    province: "天津市",
    id: "878be919-1d1e-4da3-b2b1-21ae4a41db06"
  },
  {
    name: "天津财经大学珠江学院",
    abbreviation: "tjufe",
    province: "天津市",
    id: "1fc761a0-7cd1-4f9e-b4bd-9911e9908d2c"
  },
  {
    name: "天津职业大学",
    abbreviation: "tjtc",
    province: "天津市",
    id: "3932c128-7ae8-4ee2-ac2e-7f27d6a0c5c8"
  },
  {
    name: "天津滨海职业学院",
    abbreviation: "tjbpi",
    province: "天津市",
    id: "322db978-f4ce-40a2-9eef-136e52d9043c"
  },
  {
    name: "天津工程职业技术学院",
    abbreviation: "tjeti",
    province: "天津市",
    id: "44fae7b3-54a6-47a6-9b24-0d9dac0e4e2e"
  },
  {
    name: "天津青年职业学院",
    abbreviation: "tjqnzyxy",
    province: "天津市",
    id: "70369614-7f3b-4c3c-869f-cfd4e52a289b"
  },
  {
    name: "天津渤海职业技术学院",
    abbreviation: "tjbhzy",
    province: "天津市",
    id: "1fd5a459-fd62-4c0e-82de-441f688a8690"
  },
  {
    name: "天津电子信息职业技术学院",
    abbreviation: "tjdz",
    province: "天津市",
    id: "24a55f1a-2118-4149-92fb-1e12d655679f"
  },
  {
    name: "天津机电职业技术学院",
    abbreviation: "suoyuan",
    province: "天津市",
    id: "b46c2625-30f1-43b3-952a-d61e9b2553cc"
  },
  {
    name: "天津现代职业技术学院",
    abbreviation: "xdxy",
    province: "天津市",
    id: "8a93edd0-c435-4354-a1f5-80f4bf103eda"
  },
  {
    name: "天津公安警官职业学院",
    abbreviation: "tjjingyuan",
    province: "天津市",
    id: "ea35a415-c0df-4f6a-9033-78d180e748a7"
  },
  {
    name: "天津轻工职业技术学院",
    abbreviation: "tjlivtc",
    province: "天津市",
    id: "78065a3b-f85c-4a86-abf4-f8a2ed1ac69e"
  },
  {
    name: "天津商务职业学院",
    abbreviation: "tifert",
    province: "天津市",
    id: "630d8d87-cf5b-4cdb-b96b-906075909246"
  },
  {
    name: "天津国土资源和房屋职业学院",
    abbreviation: "tjgsxy",
    province: "天津市",
    id: "4173f1ba-de5a-4bea-8b9c-ff4b6afb1435"
  },
  {
    name: "天津医学高等专科学校",
    abbreviation: "tjyzh",
    province: "天津市",
    id: "aa5bbd96-1511-4443-b15e-34209fe0f18c"
  },
  {
    name: "天津开发区职业技术学院",
    abbreviation: "tedazj",
    province: "天津市",
    id: "c09d1b1e-3943-4d3f-9a52-22182223a01c"
  },
  {
    name: "天津艺术职业学院",
    abbreviation: "tjysxy",
    province: "天津市",
    id: "1f1e8bf1-6f0c-4dc0-8e10-e0eca58210e8"
  },
  {
    name: "天津交通职业学院",
    abbreviation: "tjtvc",
    province: "天津市",
    id: "c9fa1b84-da19-44b3-ba36-80a5943549a8"
  },
  {
    name: "天津冶金职业技术学院",
    abbreviation: "tjmvti",
    province: "天津市",
    id: "6231df2a-c94f-47b7-b37b-f8716a501f05"
  },
  {
    name: "天津石油职业技术学院",
    abbreviation: "tjsyxy",
    province: "天津市",
    id: "50048ff0-395b-4106-acfc-73f6fe893c86"
  },
  {
    name: "天津城市职业学院",
    abbreviation: "tjcsxy",
    province: "天津市",
    id: "ee4c8340-fbb4-4ba5-b424-2af7602d6f04"
  },
  {
    name: "天津铁道职业技术学院",
    abbreviation: "tjtdxy",
    province: "天津市",
    id: "e08bba3a-986a-4dda-8c4f-30098e6f3cbd"
  },
  {
    name: "天津工艺美术职业学院",
    abbreviation: "gmtj",
    province: "天津市",
    id: "e1129a8b-80cb-4403-afb0-e310cfa08d9e"
  },
  {
    name: "天津城市建设管理职业技术学院",
    abbreviation: "tjchengjia",
    province: "天津市",
    id: "9d6810ba-d0a0-48ec-a141-1c60f211f38b"
  },
  {
    name: "天津生物工程职业技术学院",
    abbreviation: "tjbio",
    province: "天津市",
    id: "0dbf51ef-875b-46c6-a09a-50cc9a65f603"
  },
  {
    name: "天津海运职业学院",
    abbreviation: "tjmvi",
    province: "天津市",
    id: "f464b1c9-e53d-4734-bbf1-7cb0ecc96309"
  },
  {
    name: "天津广播影视职业学院",
    abbreviation: "tjgbys",
    province: "天津市",
    id: "1ea514dd-0244-4f6c-9777-4eec377dde46"
  },
  {
    name: "天津滨海汽车工程职业学院",
    abbreviation: "tqzyxy",
    province: "天津市",
    id: "b3a7f908-1858-4d59-9337-9a513751eabf"
  },
  {
    name: "河北大学",
    abbreviation: "hbu",
    province: "河北省",
    id: "7de2aac3-7226-4f22-aa55-ed11a49c0184"
  },
  {
    name: "河北工程大学",
    abbreviation: "hebeu",
    province: "河北省",
    id: "c8cbcd6c-0d38-4d86-b493-0a7d187677ae"
  },
  {
    name: "河北地质大学",
    abbreviation: "hgu",
    province: "河北省",
    id: "3f7dc435-7a3b-4984-8a24-79ce7d69adea"
  },
  {
    name: "河北工业大学",
    abbreviation: "hebut",
    province: "河北省",
    id: "0bdf0588-6dd7-49f0-96bf-ffabc42af167"
  },
  {
    name: "华北理工大学",
    abbreviation: "ncst",
    province: "河北省",
    id: "c2ad3aa6-609c-4493-a186-2ebfdbd252aa"
  },
  {
    name: "河北科技大学",
    abbreviation: "hebust",
    province: "河北省",
    id: "be7e41f0-8d7f-4d15-a961-437da64bf516"
  },
  {
    name: "河北建筑工程学院",
    abbreviation: "hebiace",
    province: "河北省",
    id: "ff187a9b-9502-4d7e-b712-785770b511a5"
  },
  {
    name: "河北水利电力学院",
    abbreviation: "hbgz",
    province: "河北省",
    id: "7a50a888-32a8-41e2-b0e5-e869cf3a660d"
  },
  {
    name: "河北农业大学",
    abbreviation: "hebau",
    province: "河北省",
    id: "83c846d1-dd48-4d91-97cb-ef1a0ad0b351"
  },
  {
    name: "河北医科大学",
    abbreviation: "hebmu",
    province: "河北省",
    id: "e3c6b8e4-586e-43f5-90db-c8320b95a0bd"
  },
  {
    name: "河北北方学院",
    abbreviation: "hebeinu",
    province: "河北省",
    id: "3d97fb7e-0650-44a6-89bf-a884239a6d42"
  },
  {
    name: "承德医学院",
    abbreviation: "cdmc",
    province: "河北省",
    id: "d473bffc-ff97-4ba3-b1ca-707a46e770cf"
  },
  {
    name: "河北师范大学",
    abbreviation: "hebtu",
    province: "河北省",
    id: "df0b2945-2124-4803-b69e-fa71a956cd5a"
  },
  {
    name: "保定学院",
    abbreviation: "bdu",
    province: "河北省",
    id: "78bc5598-cd3e-4b32-95b2-d35c4c8205d0"
  },
  {
    name: "河北民族师范学院",
    abbreviation: "hbun",
    province: "河北省",
    id: "2f921662-1622-416c-9bcb-f0fb6bd058bd"
  },
  {
    name: "唐山师范学院",
    abbreviation: "tstc",
    province: "河北省",
    id: "0facce0f-fec8-4752-8a52-d08d3a44c6db"
  },
  {
    name: "廊坊师范学院",
    abbreviation: "lfsfxy",
    province: "河北省",
    id: "2d90a269-3cd6-43dd-ac05-333627b6c9a2"
  },
  {
    name: "衡水学院",
    abbreviation: "hsnc",
    province: "河北省",
    id: "ee65dd35-a02f-4348-a41d-8d111a3044ff"
  },
  {
    name: "石家庄学院",
    abbreviation: "sjzc",
    province: "河北省",
    id: "e254a5d9-8c68-4355-ba36-6e97986d4ae6"
  },
  {
    name: "邯郸学院",
    abbreviation: "hdc",
    province: "河北省",
    id: "49802838-1044-4091-90eb-a6c35289320b"
  },
  {
    name: "邢台学院",
    abbreviation: "xttc",
    province: "河北省",
    id: "e3579151-cd8f-461a-9707-401a9b4917d6"
  },
  {
    name: "沧州师范学院",
    abbreviation: "caztc",
    province: "河北省",
    id: "cf429808-6a1a-410e-a82b-28b01db84036"
  },
  {
    name: "石家庄铁道大学",
    abbreviation: "stdu",
    province: "河北省",
    id: "f39a0e7b-4ced-4121-b98d-30e9c5fc9eb0"
  },
  {
    name: "燕山大学",
    abbreviation: "ysu",
    province: "河北省",
    id: "60ff8d2b-1da0-48e8-a0eb-70a091c6e13e"
  },
  {
    name: "河北科技师范学院",
    abbreviation: "hevttc",
    province: "河北省",
    id: "5d9fe949-2f4d-455d-be6f-e909f42fef49"
  },
  {
    name: "唐山学院",
    abbreviation: "tsc",
    province: "河北省",
    id: "f2482acd-4674-4dee-91a9-11baef3b7083"
  },
  {
    name: "华北科技学院",
    abbreviation: "ncist",
    province: "河北省",
    id: "1b15a20c-fb27-4e9a-8a83-1d17da40a6aa"
  },
  {
    name: "中国人民武装警察部队学院",
    abbreviation: "wjxy",
    province: "河北省",
    id: "4a982a02-a998-471d-ad3a-89936a27102b"
  },
  {
    name: "河北体育学院",
    abbreviation: "hepec",
    province: "河北省",
    id: "7ed50ae8-1d3a-4dde-bfd8-ad35ec37b2a6"
  },
  {
    name: "河北金融学院",
    abbreviation: "bdcf",
    province: "河北省",
    id: "237bf6e6-1381-4dcb-9522-601ef8bc4880"
  },
  {
    name: "北华航天工业学院",
    abbreviation: "nciae",
    province: "河北省",
    id: "de2a7cda-849a-4c77-9cbd-6c04b291d096"
  },
  {
    name: "防灾科技学院",
    abbreviation: "fzxy",
    province: "河北省",
    id: "52b97b7f-bd18-41dc-a2c6-2bbe9d642ec9"
  },
  {
    name: "河北经贸大学",
    abbreviation: "heuet",
    province: "河北省",
    id: "67ee6fe4-1ac3-4f41-a8b9-af5915d604ec"
  },
  {
    name: "中央司法警官学院",
    abbreviation: "cicp",
    province: "河北省",
    id: "e3130330-422f-454f-b181-85e458dcc289"
  },
  {
    name: "河北传媒学院",
    abbreviation: "hebic",
    province: "河北省",
    id: "2e2bdf0f-9dfa-4f5d-9609-f426e720b4e6"
  },
  {
    name: "河北工程技术学院",
    abbreviation: "hbfsh",
    province: "河北省",
    id: "9f41754b-816c-4392-a7a4-90cb2182eb7d"
  },
  {
    name: "河北美术学院",
    abbreviation: "hbafa",
    province: "河北省",
    id: "967682b9-3181-42b0-bbfb-82fbba5b8e4a"
  },
  {
    name: "河北科技学院",
    abbreviation: "hbkjxy",
    province: "河北省",
    id: "88ec7977-c5d8-46f6-8738-f87450c50d06"
  },
  {
    name: "河北外国语学院",
    abbreviation: "hbwy",
    province: "河北省",
    id: "3348a1dd-fb92-4c05-9918-a31933fe0686"
  },
  {
    name: "河北大学工商学院",
    abbreviation: "hicc",
    province: "河北省",
    id: "3c546288-5a02-42e1-9fd6-7c8d877a7a28"
  },
  {
    name: "华北理工大学轻工学院",
    abbreviation: "qgxy",
    province: "河北省",
    id: "b576af22-4f95-45a1-8a72-00fafa9b23d9"
  },
  {
    name: "河北科技大学理工学院",
    abbreviation: "hebust",
    province: "河北省",
    id: "8f7f0945-7545-4c6d-b0f5-5854f3617af2"
  },
  {
    name: "河北师范大学汇华学院",
    abbreviation: "hebtu",
    province: "河北省",
    id: "acbc7ae3-6aad-42b6-a830-e820d2ebb97d"
  },
  {
    name: "河北经贸大学经济管理学院",
    abbreviation: "heuet",
    province: "河北省",
    id: "63e61011-5a79-4b0e-8775-ad0d8f4f0b71"
  },
  {
    name: "河北医科大学临床学院",
    abbreviation: "206",
    province: "河北省",
    id: "efb8f806-41c7-470a-9225-a8b0fbb3e485"
  },
  {
    name: "华北电力大学科技学院",
    abbreviation: "hdky",
    province: "河北省",
    id: "508dc873-535d-446a-9224-125a352bc941"
  },
  {
    name: "河北工程大学科信学院",
    abbreviation: "hebeu",
    province: "河北省",
    id: "790fc266-e57c-41cd-8193-5d6a7630b711"
  },
  {
    name: "河北工业大学城市学院",
    abbreviation: "hebut",
    province: "河北省",
    id: "00291fc0-7a88-4f4f-82b6-707b7bb5a242"
  },
  {
    name: "燕山大学里仁学院",
    abbreviation: "ysu",
    province: "河北省",
    id: "0a872aab-8ace-4490-9c46-b05c7f76e552"
  },
  {
    name: "石家庄铁道大学四方学院",
    abbreviation: "stdusfc",
    province: "河北省",
    id: "83231b6a-ab6b-4313-85ea-ffb0f0da4d15"
  },
  {
    name: "河北地质大学华信学院",
    abbreviation: "sjzuehx",
    province: "河北省",
    id: "f65d6647-b28e-485c-a750-36fa6a1955d0"
  },
  {
    name: "河北农业大学现代科技学院",
    abbreviation: "hebau",
    province: "河北省",
    id: "3a6680d3-645e-4cb2-a43d-a9c2fae63d24"
  },
  {
    name: "华北理工大学冀唐学院",
    abbreviation: "heuu",
    province: "河北省",
    id: "f9ae23f3-aa16-446d-ab22-1c7a5890fad3"
  },
  {
    name: "中国地质大学长城学院",
    abbreviation: "cuggw",
    province: "河北省",
    id: "59ed49de-d7ce-41b3-a02b-926147f171f2"
  },
  {
    name: "燕京理工学院",
    abbreviation: "ncbuct",
    province: "河北省",
    id: "034ba7bf-b4ef-42d2-8436-a434115019da"
  },
  {
    name: "北京中医药大学东方学院",
    abbreviation: "df-college",
    province: "河北省",
    id: "b4739bb5-d332-4227-95d5-3e2b0ef612ac"
  },
  {
    name: "北京交通大学海滨学院",
    abbreviation: "bjtuhbxy",
    province: "河北省",
    id: "3d717391-59fa-4d92-85be-72f22cae7903"
  },
  {
    name: "河北东方学院",
    abbreviation: "dfzy",
    province: "河北省",
    id: "d9232ae1-ed20-4447-b764-d76bc267e35a"
  },
  {
    name: "河北中医学院",
    abbreviation: "hbcmc",
    province: "河北省",
    id: "6b98632e-861d-4036-ae73-ef5330f467eb"
  },
  {
    name: "张家口学院",
    abbreviation: "zjku",
    province: "河北省",
    id: "87947c93-6c2a-4622-8926-70d116f7fc52"
  },
  {
    name: "河北环境工程学院",
    abbreviation: "emcc",
    province: "河北省",
    id: "e3923915-8405-4fdc-9097-2496ce56ca5b"
  },
  {
    name: "河北工业职业技术学院",
    abbreviation: "hbcit",
    province: "河北省",
    id: "07af82f5-5c5a-4b2c-aa8a-156dc522a4cf"
  },
  {
    name: "邯郸职业技术学院",
    abbreviation: "hd-u",
    province: "河北省",
    id: "d5df8c43-49ae-4d79-84fa-f41e78a6af51"
  },
  {
    name: "石家庄职业技术学院",
    abbreviation: "sjzpt",
    province: "河北省",
    id: "93b7d142-381a-45fe-9861-63b0d363ec70"
  },
  {
    name: "张家口职业技术学院",
    abbreviation: "zhz",
    province: "河北省",
    id: "27e5a708-f6bf-48ca-a08b-76177a9ec987"
  },
  {
    name: "承德石油高等专科学校",
    abbreviation: "cdpc",
    province: "河北省",
    id: "4a73419c-9ee6-4760-bf94-a8aaa757b7df"
  },
  {
    name: "邢台职业技术学院",
    abbreviation: "xpc",
    province: "河北省",
    id: "6ab4ce89-e978-4c45-b778-3bf5eff708d3"
  },
  {
    name: "河北软件职业技术学院",
    abbreviation: "hbsi",
    province: "河北省",
    id: "55585e85-4735-47fe-b7f2-4e49e80efafd"
  },
  {
    name: "河北石油职业技术学院",
    abbreviation: "pvtc",
    province: "河北省",
    id: "f023929c-a92f-42cf-9894-4233bf78208b"
  },
  {
    name: "河北建材职业技术学院",
    abbreviation: "hbjcxy",
    province: "河北省",
    id: "ac170397-7590-4fc8-b0be-e8be021b0505"
  },
  {
    name: "河北政法职业学院",
    abbreviation: "helc",
    province: "河北省",
    id: "62d0ed20-d47f-46bd-b713-81be829fae4e"
  },
  {
    name: "沧州职业技术学院",
    abbreviation: "czvtc",
    province: "河北省",
    id: "d16c7cd7-90b7-4528-a8a5-28b47b1306a8"
  },
  {
    name: "河北能源职业技术学院",
    abbreviation: "hbnyxy",
    province: "河北省",
    id: "ad73b235-719f-40fb-9299-ecc7ad72441f"
  },
  {
    name: "石家庄铁路职业技术学院",
    abbreviation: "sirt",
    province: "河北省",
    id: "4e464d85-1673-41c9-8d70-be37d0c0a2e3"
  },
  {
    name: "保定职业技术学院",
    abbreviation: "bvtc",
    province: "河北省",
    id: "bca69672-b60b-47f2-9871-6a9313eb5606"
  },
  {
    name: "秦皇岛职业技术学院",
    abbreviation: "qhdvtc",
    province: "河北省",
    id: "595ce7ae-2715-45dd-94bd-bf6c134596a6"
  },
  {
    name: "石家庄工程职业学院",
    abbreviation: "sjzcvc",
    province: "河北省",
    id: "fc6e0260-47e7-49f6-8b98-1c2e1e48202e"
  },
  {
    name: "石家庄城市经济职业学院",
    abbreviation: "sjzcsjjxy",
    province: "河北省",
    id: "ffeeed09-cd23-4464-8315-d61f762baf21"
  },
  {
    name: "唐山职业技术学院",
    abbreviation: "tsvtc",
    province: "河北省",
    id: "20f15e86-027f-4f98-8b3c-be2d41fd5da6"
  },
  {
    name: "衡水职业技术学院",
    abbreviation: "hsvtc",
    province: "河北省",
    id: "a97b4fec-2f60-4acd-97c0-0565767d1f70"
  },
  {
    name: "唐山工业职业技术学院",
    abbreviation: "tsgzy",
    province: "河北省",
    id: "ce56b4c5-9414-4d31-9eac-c081974a768f"
  },
  {
    name: "邢台医学高等专科学校",
    abbreviation: "xtmc",
    province: "河北省",
    id: "3d7dea48-670f-4677-bb51-2638ce0e6ccc"
  },
  {
    name: "河北艺术职业学院",
    abbreviation: "hebart",
    province: "河北省",
    id: "12aa8cee-4705-4fae-be0d-8ab38944a046"
  },
  {
    name: "河北旅游职业学院",
    abbreviation: "cdtvc",
    province: "河北省",
    id: "a0e33d09-baba-487d-8fe5-f145f3bc1c97"
  },
  {
    name: "石家庄财经职业学院",
    abbreviation: "sjzcj",
    province: "河北省",
    id: "d27d2da3-1f1c-407d-88df-789f9616e4c3"
  },
  {
    name: "河北交通职业技术学院",
    abbreviation: "hejtxy",
    province: "河北省",
    id: "a39b1d7a-73c5-47b6-adda-3e4b0a76ccd3"
  },
  {
    name: "河北化工医药职业技术学院",
    abbreviation: "hebcpc",
    province: "河北省",
    id: "f88d81ee-01d8-4c36-8e8f-e7302182c921"
  },
  {
    name: "石家庄信息工程职业学院",
    abbreviation: "sjziei",
    province: "河北省",
    id: "a16f283a-cfa6-47c0-946b-17c272c8470e"
  },
  {
    name: "河北对外经贸职业学院",
    abbreviation: "hbvcfl",
    province: "河北省",
    id: "29a15fea-049a-4954-9360-563cc386ba9b"
  },
  {
    name: "保定电力职业技术学院",
    abbreviation: "bddy",
    province: "河北省",
    id: "d7fa1bda-88f0-4f1d-9e93-bdf7a1fca629"
  },
  {
    name: "河北机电职业技术学院",
    abbreviation: "hbjd",
    province: "河北省",
    id: "3a72a2b9-79f1-489a-aebb-8a5f12790a40"
  },
  {
    name: "渤海石油职业学院",
    abbreviation: "bhsyxy",
    province: "河北省",
    id: "7dce8cce-aa2a-408f-b63a-fe81ba0f96e0"
  },
  {
    name: "廊坊职业技术学院",
    abbreviation: "lfzhjxy",
    province: "河北省",
    id: "bc6420a9-01b4-4a64-8743-bb0705561de3"
  },
  {
    name: "唐山科技职业技术学院",
    abbreviation: "tskjzy",
    province: "河北省",
    id: "907c49db-b9f5-4de5-92c6-c2905cb0a086"
  },
  {
    name: "石家庄邮电职业技术学院",
    abbreviation: "sjzpc",
    province: "河北省",
    id: "4dfb0b9c-f1e6-40bd-a0f9-84cc02724e2c"
  },
  {
    name: "河北公安警察职业学院",
    abbreviation: "hebsjy",
    province: "河北省",
    id: "fd08da56-3811-4185-b03b-54f7d9dbbb62"
  },
  {
    name: "石家庄工商职业学院",
    abbreviation: "sjzgsxy",
    province: "河北省",
    id: "bd85f529-95ac-4155-88ec-fb8e55e45f7f"
  },
  {
    name: "石家庄理工职业学院",
    abbreviation: "sjzlg",
    province: "河北省",
    id: "6bd9c25f-4865-4696-917f-5608233efd50"
  },
  {
    name: "石家庄科技信息职业学院",
    abbreviation: "kjxinxiedu",
    province: "河北省",
    id: "06880858-57af-4142-a713-0866beb6e283"
  },
  {
    name: "河北司法警官职业学院",
    abbreviation: "jjgxy",
    province: "河北省",
    id: "a4a6aee5-e51a-462b-99fd-633a8fc37526"
  },
  {
    name: "沧州医学高等专科学校",
    abbreviation: "czmc",
    province: "河北省",
    id: "e0e77335-a824-4ca3-b98f-490b2a0c74c0"
  },
  {
    name: "河北女子职业技术学院",
    abbreviation: "hebnzxy",
    province: "河北省",
    id: "f21a6e89-9b47-4c7e-960c-97e10eec3c29"
  },
  {
    name: "石家庄医学高等专科学校",
    abbreviation: "sjzmc",
    province: "河北省",
    id: "f56e5100-f148-4a04-9e34-787886e50f70"
  },
  {
    name: "石家庄经济职业学院",
    abbreviation: "sjzjjxy",
    province: "河北省",
    id: "f2037a3f-4a61-4e8d-b1a6-061e1d68e3a0"
  },
  {
    name: "冀中职业学院",
    abbreviation: "jzhxy",
    province: "河北省",
    id: "02a8b474-bbf5-4527-bb78-daeb3e058cc7"
  },
  {
    name: "石家庄人民医学高等专科学校",
    abbreviation: "sjzrmyz",
    province: "河北省",
    id: "c1090049-faa2-49e9-a408-db01380c72e7"
  },
  {
    name: "石家庄科技工程职业学院",
    abbreviation: "zdsf",
    province: "河北省",
    id: "60276974-3c2c-4071-ad7a-61fb5cbccf9e"
  },
  {
    name: "河北劳动关系职业学院",
    abbreviation: "hbgy",
    province: "河北省",
    id: "34b10dc1-fa70-4521-aac7-79ba825cfa20"
  },
  {
    name: "石家庄科技职业学院",
    abbreviation: "sjzkjxy",
    province: "河北省",
    id: "9777b4d6-3c33-46a0-97f4-ec26c6057616"
  },
  {
    name: "泊头职业学院",
    abbreviation: "btzyxy",
    province: "河北省",
    id: "749cff23-ad17-4746-b6f2-3f4f3fab01ed"
  },
  {
    name: "宣化科技职业学院",
    abbreviation: "xhkjzyxy",
    province: "河北省",
    id: "8f211b93-d5cc-4ab6-9730-932359ab3c1e"
  },
  {
    name: "廊坊燕京职业技术学院",
    abbreviation: "lfyjzjxy",
    province: "河北省",
    id: "f799df1d-ff64-4ae9-9125-0d35d67c9c11"
  },
  {
    name: "承德护理职业学院",
    abbreviation: "cdwx",
    province: "河北省",
    id: "6bb19a72-f5b6-44f4-b4f6-b4a801a5c88b"
  },
  {
    name: "石家庄幼儿师范高等专科学校",
    abbreviation: "hbyesf",
    province: "河北省",
    id: "2caace08-deee-47df-be94-347c97aabe36"
  },
  {
    name: "廊坊卫生职业学院",
    abbreviation: "lfwx",
    province: "河北省",
    id: "f78dcfb8-c732-4b8d-a73b-3f8b7846c323"
  },
  {
    name: "河北轨道运输职业技术学院",
    abbreviation: "hbgdys",
    province: "河北省",
    id: "9eec2933-b73b-4a7e-8ccd-5b6d9ca53aca"
  },
  {
    name: "保定幼儿师范高等专科学校",
    abbreviation: "hezs",
    province: "河北省",
    id: "a3287e2f-b68b-4712-8290-fee6571e61dc"
  },
  {
    name: "河北工艺美术职业学院",
    abbreviation: "1964",
    province: "河北省",
    id: "59123554-c0eb-41bc-ba74-b4134fc9f4fe"
  },
  {
    name: "渤海理工职业学院",
    abbreviation: "bhlgxy",
    province: "河北省",
    id: "83e770b5-37a1-45c1-9294-4208bddaf1d0"
  },
  {
    name: "唐山幼儿师范高等专科学校",
    abbreviation: "tsyzh",
    province: "河北省",
    id: "9b5ff7ae-685a-49a0-a9a3-9cc2d2c0fb7e"
  },
  {
    name: "曹妃甸职业技术学院",
    abbreviation: "cct",
    province: "河北省",
    id: "47a494a0-42af-4eae-a172-c6a6bebf1cce"
  },
  {
    name: "山西大学",
    abbreviation: "sxu",
    province: "山西省",
    id: "e675942c-0d62-4be7-8eb8-a8cf55a82b2b"
  },
  {
    name: "太原科技大学",
    abbreviation: "tyust",
    province: "山西省",
    id: "70233a07-a79c-4a3a-baab-4e2a71ff8586"
  },
  {
    name: "中北大学",
    abbreviation: "nuc",
    province: "山西省",
    id: "5f6b2007-2bf9-42d8-bcd2-b2e731ac6d21"
  },
  {
    name: "太原理工大学",
    abbreviation: "tyut",
    province: "山西省",
    id: "f3104398-4916-4265-9304-d2491fdbc908"
  },
  {
    name: "山西农业大学",
    abbreviation: "sxau",
    province: "山西省",
    id: "2877e8fb-b7d4-4190-b983-91f9e0454666"
  },
  {
    name: "山西医科大学",
    abbreviation: "sxmu",
    province: "山西省",
    id: "c6360290-3551-48c1-b845-335a98cd40c5"
  },
  {
    name: "长治医学院",
    abbreviation: "czmc",
    province: "山西省",
    id: "fee82d31-ab38-4e0a-ba8a-9e3be150d9ab"
  },
  {
    name: "山西师范大学",
    abbreviation: "sxnu",
    province: "山西省",
    id: "9b96d6de-e8f6-4198-be86-4ec0ee7265d0"
  },
  {
    name: "太原师范学院",
    abbreviation: "tynu",
    province: "山西省",
    id: "fd758714-0742-483c-bbe2-37a2bc108bac"
  },
  {
    name: "山西大同大学",
    abbreviation: "sxdtdx",
    province: "山西省",
    id: "c62afa42-c0b9-47c1-ade1-65e274a57755"
  },
  {
    name: "晋中学院",
    abbreviation: "sxjztc",
    province: "山西省",
    id: "d9baa5b9-bf25-42fc-a6e6-0668cd20061d"
  },
  {
    name: "长治学院",
    abbreviation: "czc",
    province: "山西省",
    id: "faa11400-bea2-4c6e-80c9-58a5ff20f8cb"
  },
  {
    name: "运城学院",
    abbreviation: "ycu",
    province: "山西省",
    id: "d32c9042-ea07-4f67-808e-8cfc01d52696"
  },
  {
    name: "忻州师范学院",
    abbreviation: "xztc",
    province: "山西省",
    id: "c649a10b-9933-4d7d-b58f-04310c4918fc"
  },
  {
    name: "山西财经大学",
    abbreviation: "sxufe",
    province: "山西省",
    id: "1e52925c-ffcc-42c6-9665-deb7213bcab3"
  },
  {
    name: "山西中医药大学",
    abbreviation: "sxtcm",
    province: "山西省",
    id: "dadbceca-9e97-4597-ba5d-8d85a17fffcf"
  },
  {
    name: "吕梁学院",
    abbreviation: "llhc",
    province: "山西省",
    id: "e355ee73-cb8b-4f2d-930f-12d207711b71"
  },
  {
    name: "太原学院",
    abbreviation: "sxtyu",
    province: "山西省",
    id: "0f175712-4a98-445f-8b4f-1438fab580c3"
  },
  {
    name: "山西警察学院",
    abbreviation: "sxpc",
    province: "山西省",
    id: "7bfc4718-f455-402f-b86e-05fa68d395fb"
  },
  {
    name: "山西应用科技学院",
    abbreviation: "sxxh",
    province: "山西省",
    id: "73688ae0-6ec1-4646-b9b6-f5514af7236d"
  },
  {
    name: "山西大学商务学院",
    abbreviation: "sdsy",
    province: "山西省",
    id: "0b4f8508-464f-4837-9e30-ec109bb5dd68"
  },
  {
    name: "太原理工大学现代科技学院",
    abbreviation: "xdkj",
    province: "山西省",
    id: "08955316-aeac-41da-9548-c7956d99dfa0"
  },
  {
    name: "山西农业大学信息学院",
    abbreviation: "cisau",
    province: "山西省",
    id: "b8cea8d4-0dc6-4687-9199-9699988c5799"
  },
  {
    name: "山西师范大学现代文理学院",
    abbreviation: "xdwl-sxnu",
    province: "山西省",
    id: "b2922989-e55f-4281-ae7f-01ddea3c2735"
  },
  {
    name: "中北大学信息商务学院",
    abbreviation: "nuc",
    province: "山西省",
    id: "7f8234b8-2f26-4cc7-affe-352e30a5a12b"
  },
  {
    name: "太原科技大学华科学院",
    abbreviation: "kdhk",
    province: "山西省",
    id: "9c03a3f2-8ba9-46ac-a2dc-d6a3e8201467"
  },
  {
    name: "山西医科大学晋祠学院",
    abbreviation: "sxmu-jcc",
    province: "山西省",
    id: "80b4e834-e233-4a7e-8cda-65cf971df7a3"
  },
  {
    name: "山西财经大学华商学院",
    abbreviation: "schsxy",
    province: "山西省",
    id: "c4483351-76e1-4f05-9bfc-495e9c7a360e"
  },
  {
    name: "山西工商学院",
    abbreviation: "sxtbu",
    province: "山西省",
    id: "e3fe47fd-c978-4d0e-a6f4-592da9eeda4d"
  },
  {
    name: "太原工业学院",
    abbreviation: "tit",
    province: "山西省",
    id: "48c8835c-549f-4cd8-8447-46c01c9350a5"
  },
  {
    name: "山西传媒学院",
    abbreviation: "arft",
    province: "山西省",
    id: "ed29d5db-8b82-4f58-9429-fc645a8b00db"
  },
  {
    name: "山西工程技术学院",
    abbreviation: "sxit",
    province: "山西省",
    id: "40d87740-e3fd-4442-a498-c9113381b48e"
  },
  {
    name: "山西能源学院",
    abbreviation: "sxeu",
    province: "山西省",
    id: "d2802abf-fd5a-446b-ae39-cdb9b675f51b"
  },
  {
    name: "山西省财政税务专科学校",
    abbreviation: "sxftc",
    province: "山西省",
    id: "b5a09faa-25b2-4506-b5c8-dcf48e0c97c9"
  },
  {
    name: "长治职业技术学院",
    abbreviation: "czzy",
    province: "山西省",
    id: "389a728b-d7d0-4a97-af67-a1a3eae0f457"
  },
  {
    name: "山西艺术职业学院",
    abbreviation: "sxyz",
    province: "山西省",
    id: "7141eb00-1585-4da6-bd5b-4111b280d165"
  },
  {
    name: "晋城职业技术学院",
    abbreviation: "sxjczy",
    province: "山西省",
    id: "709bab43-7b5d-47bf-86a2-1f7a3f82c7c3"
  },
  {
    name: "山西建筑职业技术学院",
    abbreviation: "sxatc",
    province: "山西省",
    id: "16e9e946-289d-43ec-94ad-f17d0947387a"
  },
  {
    name: "山西药科职业学院",
    abbreviation: "sxbac",
    province: "山西省",
    id: "32c758be-57f4-4077-935d-04812386f771"
  },
  {
    name: "山西工程职业技术学院",
    abbreviation: "sxgy",
    province: "山西省",
    id: "2a6a02bc-dd89-4701-97b2-69ba0199666a"
  },
  {
    name: "山西交通职业技术学院",
    abbreviation: "sxjt",
    province: "山西省",
    id: "9e1a6a6b-1181-4cef-93f5-c686495b0842"
  },
  {
    name: "大同煤炭职业技术学院",
    abbreviation: "dtmtxy",
    province: "山西省",
    id: "532ee044-2f5a-4db1-8710-8cd92c41d072"
  },
  {
    name: "山西机电职业技术学院",
    abbreviation: "sxjdxy",
    province: "山西省",
    id: "a450eedf-455e-4024-a8d4-712b76d62215"
  },
  {
    name: "山西戏剧职业学院",
    abbreviation: "shanxixjxy",
    province: "山西省",
    id: "a0bc67dc-cf90-4e73-b478-7c0f68481882"
  },
  {
    name: "山西财贸职业技术学院",
    abbreviation: "sxcmvc",
    province: "山西省",
    id: "1a649c59-fb62-4e0f-8984-d47ffbdf0b90"
  },
  {
    name: "山西林业职业技术学院",
    abbreviation: "sxly",
    province: "山西省",
    id: "9155211d-2457-4aa5-8a0a-9db21219c656"
  },
  {
    name: "山西水利职业技术学院",
    abbreviation: "sxsy",
    province: "山西省",
    id: "8599671c-9f6d-402a-a955-c6827f084d4e"
  },
  {
    name: "阳泉职业技术学院",
    abbreviation: "tyutyqc",
    province: "山西省",
    id: "fa4c4717-b9f8-4650-8744-c1fb66f57e0a"
  },
  {
    name: "临汾职业技术学院",
    abbreviation: "lfvtc",
    province: "山西省",
    id: "69b4098c-6572-4519-9d5f-397cbefb9678"
  },
  {
    name: "山西职业技术学院",
    abbreviation: "sxzzy",
    province: "山西省",
    id: "c463633a-ddd4-4199-86d5-03020681bdd9"
  },
  {
    name: "山西煤炭职业技术学院",
    abbreviation: "sxmtxy",
    province: "山西省",
    id: "62b1d471-f163-4221-8284-fb900eb9dbac"
  },
  {
    name: "山西金融职业学院",
    abbreviation: "sxjrzyxy",
    province: "山西省",
    id: "e424a17c-d4c5-4fe9-840a-949bb9c15ca5"
  },
  {
    name: "太原城市职业技术学院",
    abbreviation: "cntcvc",
    province: "山西省",
    id: "4db4debf-3764-4c80-ad7b-38978763c5cb"
  },
  {
    name: "山西信息职业技术学院",
    abbreviation: "vcit",
    province: "山西省",
    id: "f5bb0426-561c-4fe6-85a6-6bb2dff44b39"
  },
  {
    name: "山西体育职业学院",
    abbreviation: "sxptc",
    province: "山西省",
    id: "54416929-eca0-4104-97c7-69a1f5bced3c"
  },
  {
    name: "山西警官职业学院",
    abbreviation: "sxpolice",
    province: "山西省",
    id: "8da9c6da-2be7-4db9-be5e-6fb320590dfb"
  },
  {
    name: "山西国际商务职业学院",
    abbreviation: "sxibs",
    province: "山西省",
    id: "5a63c115-2db6-418b-b79e-72243098f19e"
  },
  {
    name: "潞安职业技术学院",
    abbreviation: "cen114",
    province: "山西省",
    id: "fe8f990f-a82b-430f-b49a-029f70f8f4df"
  },
  {
    name: "太原旅游职业学院",
    abbreviation: "tylyzyxy",
    province: "山西省",
    id: "c35a13b8-97e8-4185-a442-de795928efc7"
  },
  {
    name: "山西旅游职业学院",
    abbreviation: "sxtvi",
    province: "山西省",
    id: "82f8dced-79eb-47d5-bc37-b23090872239"
  },
  {
    name: "山西管理职业学院",
    abbreviation: "sxglzyxy",
    province: "山西省",
    id: "1c42b024-a653-4edc-9f4d-314411ad63e1"
  },
  {
    name: "山西电力职业技术学院",
    abbreviation: "vtep",
    province: "山西省",
    id: "fe781315-442d-47f4-9dca-094a0bb11886"
  },
  {
    name: "忻州职业技术学院",
    abbreviation: "xzvtc",
    province: "山西省",
    id: "fa5fd397-f81a-4624-b4f6-2f1afc2b2f84"
  },
  {
    name: "山西同文职业技术学院",
    abbreviation: "sxtwedu",
    province: "山西省",
    id: "d03e8fed-853a-4a39-8f34-cd7e38a2e1ec"
  },
  {
    name: "晋中职业技术学院",
    abbreviation: "jzzy",
    province: "山西省",
    id: "793ed783-7926-49db-9663-b910bfec8fe2"
  },
  {
    name: "山西华澳商贸职业学院",
    abbreviation: "huaao",
    province: "山西省",
    id: "3d3c2a24-1849-4453-a727-b853c7b7682e"
  },
  {
    name: "山西运城农业职业技术学院",
    abbreviation: "sycnxy",
    province: "山西省",
    id: "d748b54c-b3d0-4852-b0bd-59f1b73c4ba2"
  },
  {
    name: "运城幼儿师范高等专科学校",
    abbreviation: "sxycys",
    province: "山西省",
    id: "d07ad7b4-85bb-4f8e-a5ed-18613d95b339"
  },
  {
    name: "山西老区职业技术学院",
    abbreviation: "sxlqzy",
    province: "山西省",
    id: "1fcb301d-68d1-4ae1-b17b-8ad33d244975"
  },
  {
    name: "山西经贸职业学院",
    abbreviation: "sxemc",
    province: "山西省",
    id: "95c8fc4a-5f47-4819-899d-043a64b1c8f5"
  },
  {
    name: "朔州职业技术学院",
    abbreviation: "szvtc",
    province: "山西省",
    id: "6170f32d-ece3-4c61-83a0-d92d691e5137"
  },
  {
    name: "运城职业技术学院",
    abbreviation: "ycptu",
    province: "山西省",
    id: "f7106f92-8fa6-40c3-8b34-ff6b854b0efd"
  },
  {
    name: "山西轻工职业技术学院",
    abbreviation: "sxqgzy",
    province: "山西省",
    id: "d5c0b99d-b76f-4c2e-8beb-07585a22dd9e"
  },
  {
    name: "晋中师范高等专科学校",
    abbreviation: "sxjzsf",
    province: "山西省",
    id: "58348289-bb1d-4133-9c90-e391acf73d90"
  },
  {
    name: "阳泉师范高等专科学校",
    abbreviation: "sxyqsz",
    province: "山西省",
    id: "cf1ac821-6415-43bb-94cf-c225dead0e0f"
  },
  {
    name: "山西青年职业学院",
    abbreviation: "sxqzy",
    province: "山西省",
    id: "23dfc3ab-8bca-48ab-98b1-8b75eae94e58"
  },
  {
    name: "运城护理职业学院",
    abbreviation: "ychlxy",
    province: "山西省",
    id: "913327c4-08e8-4467-8c59-fb38fc5c795f"
  },
  {
    name: "运城师范高等专科学校",
    abbreviation: "sxycsf",
    province: "山西省",
    id: "183aa7a2-0fa6-4013-bb6e-800563190468"
  },
  {
    name: "朔州师范高等专科学校",
    abbreviation: "szsfdx",
    province: "山西省",
    id: "cdc01124-c1f9-4cf8-8742-7c4d2433f817"
  },
  {
    name: "内蒙古大学",
    abbreviation: "imu",
    province: "内蒙古自治区",
    id: "35d1584e-1a18-4bb8-be30-11ba69e93191"
  },
  {
    name: "内蒙古科技大学",
    abbreviation: "imust",
    province: "内蒙古自治区",
    id: "0a8a1783-d4aa-4a36-a6cb-054e6d6d64cd"
  },
  {
    name: "内蒙古工业大学",
    abbreviation: "imut",
    province: "内蒙古自治区",
    id: "66bf99b1-d723-419a-9cd7-95a7e3eb7d40"
  },
  {
    name: "内蒙古农业大学",
    abbreviation: "imau",
    province: "内蒙古自治区",
    id: "16a51d0a-0bb3-4ab0-a79d-9da2a0cf60a4"
  },
  {
    name: "内蒙古医科大学",
    abbreviation: "immc",
    province: "内蒙古自治区",
    id: "76bea2a1-04b0-4f25-8718-d91e41743534"
  },
  {
    name: "内蒙古师范大学",
    abbreviation: "imnu",
    province: "内蒙古自治区",
    id: "4a79162e-60e3-4513-96d3-a80d0440dc48"
  },
  {
    name: "内蒙古民族大学",
    abbreviation: "imun",
    province: "内蒙古自治区",
    id: "ea9bb1bb-b086-47e6-988f-edadcee8a180"
  },
  {
    name: "赤峰学院",
    abbreviation: "cfxy",
    province: "内蒙古自治区",
    id: "462184f8-8fc7-4d8c-9b33-df0a8233808b"
  },
  {
    name: "内蒙古财经大学",
    abbreviation: "imufe",
    province: "内蒙古自治区",
    id: "1c5fd7bb-5287-47de-81e8-51c407d5e02e"
  },
  {
    name: "呼伦贝尔学院",
    abbreviation: "hlbrc",
    province: "内蒙古自治区",
    id: "3effddbd-5f41-4ac4-a096-22b4dae5ab2d"
  },
  {
    name: "集宁师范学院",
    abbreviation: "jntc",
    province: "内蒙古自治区",
    id: "fd49177d-94cd-46a8-9d87-272e61145ac9"
  },
  {
    name: "河套学院",
    abbreviation: "hetaodaxue",
    province: "内蒙古自治区",
    id: "2761bb00-1dc7-4ce8-a0af-beea970c40f6"
  },
  {
    name: "呼和浩特民族学院",
    abbreviation: "imnc",
    province: "内蒙古自治区",
    id: "45fd4fbb-18d2-4344-86dc-79f5151a3d8f"
  },
  {
    name: "内蒙古大学创业学院",
    abbreviation: "imuchuangy",
    province: "内蒙古自治区",
    id: "ad4f031e-bd3d-4c5c-ac23-c94a4f9ba25b"
  },
  {
    name: "内蒙古师范大学鸿德学院",
    abbreviation: "honder",
    province: "内蒙古自治区",
    id: "0e797efe-6634-4551-b37e-708ad68a9571"
  },
  {
    name: "内蒙古艺术学院",
    abbreviation: "imac",
    province: "内蒙古自治区",
    id: "f1996870-ec3f-4df2-a5c3-cef875433507"
  },
  {
    name: "鄂尔多斯应用技术学院",
    abbreviation: "oit",
    province: "内蒙古自治区",
    id: "48583419-422d-4835-bf10-3591f0af091f"
  },
  {
    name: "内蒙古建筑职业技术学院",
    abbreviation: "imaa",
    province: "内蒙古自治区",
    id: "4719a66d-efe1-46e9-8954-4614bb12c487"
  },
  {
    name: "内蒙古丰州职业学院",
    abbreviation: "qcdx",
    province: "内蒙古自治区",
    id: "28515d31-5dbe-4aaf-b64d-18ae29616a4e"
  },
  {
    name: "包头职业技术学院",
    abbreviation: "btzyjsxy",
    province: "内蒙古自治区",
    id: "79f1335f-a7ca-4aab-bbf6-9f477a568e69"
  },
  {
    name: "兴安职业技术学院",
    abbreviation: "nmxzy",
    province: "内蒙古自治区",
    id: "5c7dc23f-bf25-44a1-94de-7ba56a0ce63c"
  },
  {
    name: "呼和浩特职业学院",
    abbreviation: "hhvc",
    province: "内蒙古自治区",
    id: "3f2b23f8-5a25-45f9-ae2a-c65e3f388358"
  },
  {
    name: "包头轻工职业技术学院",
    abbreviation: "btqy",
    province: "内蒙古自治区",
    id: "28d8475c-deba-4984-a8bc-2934cbf3956b"
  },
  {
    name: "内蒙古电子信息职业技术学院",
    abbreviation: "imeic",
    province: "内蒙古自治区",
    id: "cc6020cd-a048-4d40-85c8-0fae4a37e301"
  },
  {
    name: "内蒙古机电职业技术学院",
    abbreviation: "nmgjdxy",
    province: "内蒙古自治区",
    id: "ae9e69be-cd51-4aa7-aa00-ed4146c39d8e"
  },
  {
    name: "内蒙古化工职业学院",
    abbreviation: "hgzyxy",
    province: "内蒙古自治区",
    id: "12fe4029-844f-440f-8ae1-fbf7650e6246"
  },
  {
    name: "内蒙古商贸职业学院",
    abbreviation: "imvcc",
    province: "内蒙古自治区",
    id: "82be8cf6-99c8-4382-9f32-aa2ed0d4f365"
  },
  {
    name: "锡林郭勒职业学院",
    abbreviation: "xlglvc",
    province: "内蒙古自治区",
    id: "dfd21b4f-f90e-4c30-91e0-b0e364096876"
  },
  {
    name: "内蒙古警察职业学院",
    abbreviation: "imppc",
    province: "内蒙古自治区",
    id: "bcf06918-c839-4455-b418-43942aaecea4"
  },
  {
    name: "内蒙古体育职业学院",
    abbreviation: "nmtyxy",
    province: "内蒙古自治区",
    id: "72fe771e-e57e-47ad-a7dc-df797c42a3ff"
  },
  {
    name: "乌兰察布职业学院",
    abbreviation: "wlcbzyxy",
    province: "内蒙古自治区",
    id: "9f672bb8-276a-4cb7-af24-dc37a2c6e105"
  },
  {
    name: "通辽职业学院",
    abbreviation: "tlzyxy",
    province: "内蒙古自治区",
    id: "9b9bc2a0-6a2a-462f-906b-3808a9b62892"
  },
  {
    name: "科尔沁艺术职业学院",
    abbreviation: "keqysxy",
    province: "内蒙古自治区",
    id: "b6fcf3d1-37e0-41b3-abca-88daf98c9d89"
  },
  {
    name: "内蒙古交通职业技术学院",
    abbreviation: "nmjtzy",
    province: "内蒙古自治区",
    id: "a4384e15-e1ff-4650-86e9-c59c620e0184"
  },
  {
    name: "包头钢铁职业技术学院",
    abbreviation: "btsvc",
    province: "内蒙古自治区",
    id: "4f73c985-8db2-4095-ae46-01c49a6a6b77"
  },
  {
    name: "乌海职业技术学院",
    abbreviation: "whvtc",
    province: "内蒙古自治区",
    id: "3ae4064b-6daa-4ed8-94d7-0317c594a480"
  },
  {
    name: "内蒙古科技职业学院",
    abbreviation: "imstu",
    province: "内蒙古自治区",
    id: "85d6c2eb-8064-488a-ae99-58347b563f46"
  },
  {
    name: "内蒙古北方职业技术学院",
    abbreviation: "nmbfxy",
    province: "内蒙古自治区",
    id: "a397e271-256d-4fe9-8944-9fbfdd8dc884"
  },
  {
    name: "赤峰职业技术学院",
    abbreviation: "cfzyjsxy",
    province: "内蒙古自治区",
    id: "2d8978bb-7409-4a24-ab8b-a730b9e7c180"
  },
  {
    name: "内蒙古经贸外语职业学院",
    abbreviation: "nmgjwy",
    province: "内蒙古自治区",
    id: "341cd1e6-c5f9-4efa-84f6-1c7c0f40a4a6"
  },
  {
    name: "包头铁道职业技术学院",
    abbreviation: "btgx",
    province: "内蒙古自治区",
    id: "15ce8460-94aa-4e03-9f02-777b413810f0"
  },
  {
    name: "乌兰察布医学高等专科学校",
    abbreviation: "wlcbswx",
    province: "内蒙古自治区",
    id: "fc9298de-3f2c-4218-87b3-dc3990428ce3"
  },
  {
    name: "鄂尔多斯职业学院",
    abbreviation: "ordosvc",
    province: "内蒙古自治区",
    id: "1a941da6-0003-4601-87fc-53cc44c34a70"
  },
  {
    name: "内蒙古工业职业学院",
    abbreviation: "nmxuanyuan",
    province: "内蒙古自治区",
    id: "94809d09-d07c-4b51-a603-85434618807b"
  },
  {
    name: "呼伦贝尔职业技术学院",
    abbreviation: "hlbrzy",
    province: "内蒙古自治区",
    id: "713a6e70-723d-45c4-b384-a6e215360387"
  },
  {
    name: "满洲里俄语职业学院",
    abbreviation: "mzlxy",
    province: "内蒙古自治区",
    id: "a4c80ab1-fe02-4388-99ee-70cd68385375"
  },
  {
    name: "内蒙古能源职业学院",
    abbreviation: "nmpower",
    province: "内蒙古自治区",
    id: "d3541f1d-18b3-450b-89b3-3147360d2fc0"
  },
  {
    name: "赤峰工业职业技术学院",
    abbreviation: "74",
    province: "内蒙古自治区",
    id: "08ba78c8-0c9a-44ce-992d-8690c27e0b2b"
  },
  {
    name: "阿拉善职业技术学院",
    abbreviation: "alszyxy",
    province: "内蒙古自治区",
    id: "2560b54c-0e83-487f-872a-76be28296e1b"
  },
  {
    name: "内蒙古美术职业学院",
    abbreviation: "nmgmsxy",
    province: "内蒙古自治区",
    id: "2186aded-aa11-47a2-839c-f1d7a28adf11"
  },
  {
    name: "内蒙古民族幼儿师范高等专科学校",
    abbreviation: "nmmysz",
    province: "内蒙古自治区",
    id: "acc38655-40ca-4cff-bfb1-64ca1680e8be"
  },
  {
    name: "鄂尔多斯生态环境职业学院",
    abbreviation: "ordosnmxx",
    province: "内蒙古自治区",
    id: "a601159f-e08f-4313-8ea8-917b89078b1d"
  },
  {
    name: "扎兰屯职业学院",
    abbreviation: "zltzyxy",
    province: "内蒙古自治区",
    id: "f355b47e-ba56-469b-a36c-1955d7cf4aa5"
  },
  {
    name: "辽宁大学",
    abbreviation: "lnu",
    province: "辽宁省",
    id: "5e068029-0254-4c31-a562-3617c368bb11"
  },
  {
    name: "大连理工大学",
    abbreviation: "dlut",
    province: "辽宁省",
    id: "00dbfc43-6cca-4fea-9203-69d9812836eb"
  },
  {
    name: "沈阳工业大学",
    abbreviation: "sut",
    province: "辽宁省",
    id: "a4336ae0-49d4-409c-b595-0ac990985684"
  },
  {
    name: "沈阳航空航天大学",
    abbreviation: "sau",
    province: "辽宁省",
    id: "9b1bf917-470d-422b-a8ca-e9f2cc5b55b7"
  },
  {
    name: "沈阳理工大学",
    abbreviation: "syit",
    province: "辽宁省",
    id: "4d6017c8-cda0-4449-933d-2f51fefa5242"
  },
  {
    name: "东北大学",
    abbreviation: "neu",
    province: "辽宁省",
    id: "de408fa4-e9a8-4a49-bf64-26e613f4776d"
  },
  {
    name: "辽宁科技大学",
    abbreviation: "ustl",
    province: "辽宁省",
    id: "3bf88e13-8f13-4f9f-966d-9efeea0918d7"
  },
  {
    name: "辽宁工程技术大学",
    abbreviation: "lntu",
    province: "辽宁省",
    id: "4557aa04-82ab-4d61-b1e6-a40eed1b52e0"
  },
  {
    name: "辽宁石油化工大学",
    abbreviation: "lnpu",
    province: "辽宁省",
    id: "554e771a-0716-43c7-bd7d-b9bc50c0a11a"
  },
  {
    name: "沈阳化工大学",
    abbreviation: "syuct",
    province: "辽宁省",
    id: "66152b45-43be-4aa6-92d8-ffba42b82a83"
  },
  {
    name: "大连交通大学",
    abbreviation: "djtu",
    province: "辽宁省",
    id: "e5342460-cae4-48ed-ab6a-1220335b628c"
  },
  {
    name: "大连海事大学",
    abbreviation: "dlmu",
    province: "辽宁省",
    id: "50650b95-26f6-4dcf-82ef-4546f361f711"
  },
  {
    name: "大连工业大学",
    abbreviation: "dlpu",
    province: "辽宁省",
    id: "4c006326-7a26-4285-9fb5-25a11e7a933b"
  },
  {
    name: "沈阳建筑大学",
    abbreviation: "sjzu",
    province: "辽宁省",
    id: "f9a691f4-3e12-4c91-9793-cb9627d56560"
  },
  {
    name: "辽宁工业大学",
    abbreviation: "lnit",
    province: "辽宁省",
    id: "854a913d-37c4-4004-83a4-f773434e8cfd"
  },
  {
    name: "沈阳农业大学",
    abbreviation: "syau",
    province: "辽宁省",
    id: "e93fbe8c-e070-432d-902e-071b537c7693"
  },
  {
    name: "大连海洋大学",
    abbreviation: "dlou",
    province: "辽宁省",
    id: "c55a96f8-d917-4f7a-ac6c-19e25e655980"
  },
  {
    name: "中国医科大学",
    abbreviation: "cmu",
    province: "辽宁省",
    id: "b52f687e-9b49-4afb-b316-09f18d19e77e"
  },
  {
    name: "锦州医科大学",
    abbreviation: "lnmu",
    province: "辽宁省",
    id: "60e4fb11-57af-4651-a876-937b3a81e212"
  },
  {
    name: "大连医科大学",
    abbreviation: "dlmedu",
    province: "辽宁省",
    id: "733a39c5-ec2d-4d74-b181-84c035de64d3"
  },
  {
    name: "辽宁中医药大学",
    abbreviation: "lnutcm",
    province: "辽宁省",
    id: "507aa245-441d-4831-af6e-83bcb9af1af9"
  },
  {
    name: "沈阳药科大学",
    abbreviation: "syphu",
    province: "辽宁省",
    id: "1a5cb6d1-06d2-4cf4-baf4-d4bf295e8431"
  },
  {
    name: "沈阳医学院",
    abbreviation: "symc",
    province: "辽宁省",
    id: "0fe63a6f-cdba-46e0-a82d-8d54ef080300"
  },
  {
    name: "辽宁师范大学",
    abbreviation: "lnnu",
    province: "辽宁省",
    id: "da229115-7d6c-49d9-88fc-d002c0b27b22"
  },
  {
    name: "沈阳师范大学",
    abbreviation: "synu",
    province: "辽宁省",
    id: "a37bed91-3469-4084-935d-243266fa80eb"
  },
  {
    name: "渤海大学",
    abbreviation: "bhu",
    province: "辽宁省",
    id: "15e8013e-c00a-4344-a488-0ae83e4f242c"
  },
  {
    name: "鞍山师范学院",
    abbreviation: "asnc",
    province: "辽宁省",
    id: "5d65f6f8-8a1f-4b77-a830-d08c40bcbb72"
  },
  {
    name: "大连外国语大学",
    abbreviation: "dlufl",
    province: "辽宁省",
    id: "7bd5fc67-1da8-45c8-a77c-8a337fbe44ee"
  },
  {
    name: "东北财经大学",
    abbreviation: "dufe",
    province: "辽宁省",
    id: "1c4df2aa-27cf-4fb8-bb76-a81a1d5598d6"
  },
  {
    name: "中国刑事警察学院",
    abbreviation: "npuc",
    province: "辽宁省",
    id: "418bdfba-6c07-42a2-bc58-90fbb5a0315e"
  },
  {
    name: "沈阳体育学院",
    abbreviation: "syty",
    province: "辽宁省",
    id: "846f91d6-df12-49e4-bb59-2bd42674a232"
  },
  {
    name: "沈阳音乐学院",
    abbreviation: "sycm",
    province: "辽宁省",
    id: "766cb7f3-e5f7-4771-8159-83cce5338533"
  },
  {
    name: "鲁迅美术学院",
    abbreviation: "lumei",
    province: "辽宁省",
    id: "4176776b-a2a7-4314-a3f2-45c2168dd5a2"
  },
  {
    name: "辽宁对外经贸学院",
    abbreviation: "luibe",
    province: "辽宁省",
    id: "e163a1ea-e711-41bd-8fa7-c0b3a1ad2a7e"
  },
  {
    name: "沈阳大学",
    abbreviation: "syu",
    province: "辽宁省",
    id: "bca44294-f488-4536-8b40-c19fc5ae78a8"
  },
  {
    name: "大连大学",
    abbreviation: "dlu",
    province: "辽宁省",
    id: "5bc3e8d5-ff1a-4a20-8d54-e096f016d823"
  },
  {
    name: "辽宁科技学院",
    abbreviation: "lnist",
    province: "辽宁省",
    id: "a760b802-e741-4df7-9f98-4aad69487e83"
  },
  {
    name: "辽宁警察学院",
    abbreviation: "lnpc",
    province: "辽宁省",
    id: "7ffa5b84-f20b-49a4-89b9-a8885de00c33"
  },
  {
    name: "沈阳工程学院",
    abbreviation: "sie",
    province: "辽宁省",
    id: "17d7ee8e-566e-4277-84f2-903bfbfe2dd3"
  },
  {
    name: "辽东学院",
    abbreviation: "ldxy",
    province: "辽宁省",
    id: "f0757c79-2dcc-4231-b144-2a9e858fcde5"
  },
  {
    name: "大连民族大学",
    abbreviation: "dlnu",
    province: "辽宁省",
    id: "d5806896-abb0-4ae4-b9c0-6299ef48273d"
  },
  {
    name: "大连理工大学城市学院",
    abbreviation: "dlut",
    province: "辽宁省",
    id: "a7623598-a4ab-4e01-8a0e-086ecb1e621f"
  },
  {
    name: "沈阳工业大学工程学院",
    abbreviation: "sut",
    province: "辽宁省",
    id: "72da0a17-1b75-4e1d-b94a-d5d98d26efee"
  },
  {
    name: "沈阳航空航天大学北方科技学院",
    abbreviation: "sau",
    province: "辽宁省",
    id: "0ec0b2e6-42ff-4de1-a2f4-437aac5e095d"
  },
  {
    name: "沈阳工学院",
    abbreviation: "syyyy",
    province: "辽宁省",
    id: "623d66bf-5bdb-473f-987a-f5ef8abe3ed8"
  },
  {
    name: "大连工业大学艺术与信息工程学院",
    abbreviation: "caie",
    province: "辽宁省",
    id: "05b9a661-f5bb-4ca9-8f5c-26a5a17bcee1"
  },
  {
    name: "大连科技学院",
    abbreviation: "dist",
    province: "辽宁省",
    id: "26175ff8-366f-4c13-98cc-a851778b6613"
  },
  {
    name: "沈阳城市建设学院",
    abbreviation: "sjcy",
    province: "辽宁省",
    id: "3fc55d02-5775-4aa4-aee9-9b4aa279360d"
  },
  {
    name: "中国医科大学临床医药学院",
    abbreviation: "cmu",
    province: "辽宁省",
    id: "d2d5030d-b637-44f2-847e-5b91ada4b9ac"
  },
  {
    name: "大连医科大学中山学院",
    abbreviation: "dmuzs",
    province: "辽宁省",
    id: "6f574223-87be-434b-83f7-8f99cf00d109"
  },
  {
    name: "锦州医科大学医疗学院",
    abbreviation: "lnmu",
    province: "辽宁省",
    id: "666aeb0d-3ba5-4ced-9317-b21664dc35e4"
  },
  {
    name: "辽宁师范大学海华学院",
    abbreviation: "lnnu",
    province: "辽宁省",
    id: "55d84a25-2314-46bb-a6f7-b0bc40f6cbc0"
  },
  {
    name: "辽宁理工学院",
    abbreviation: "lise",
    province: "辽宁省",
    id: "0244185d-5159-47a4-af19-8da67e9852db"
  },
  {
    name: "大连财经学院",
    abbreviation: "kingbridge",
    province: "辽宁省",
    id: "6b6c6764-7b17-48e0-99b1-4ec2fc8a99cf"
  },
  {
    name: "沈阳城市学院",
    abbreviation: "sdkj-syu",
    province: "辽宁省",
    id: "c3e47c02-283e-4fca-a695-2a6a1dc47164"
  },
  {
    name: "辽宁石油化工大学顺华能源学院",
    abbreviation: "lnshny",
    province: "辽宁省",
    id: "cf822cf0-3ce3-4f17-8732-765eaa10b051"
  },
  {
    name: "大连艺术学院",
    abbreviation: "dac",
    province: "辽宁省",
    id: "b533e6c5-b882-4f2e-bab0-0c3b5ee76233"
  },
  {
    name: "辽宁中医药大学杏林学院",
    abbreviation: "lncmxl",
    province: "辽宁省",
    id: "52d33210-6679-4599-a8fe-c89799ee5002"
  },
  {
    name: "辽宁何氏医学院",
    abbreviation: "he-edu",
    province: "辽宁省",
    id: "d771ed50-cc8a-4013-a7ac-6a97da0f83a6"
  },
  {
    name: "沈阳科技学院",
    abbreviation: "syuctky",
    province: "辽宁省",
    id: "397ed1af-341a-463b-9ef5-228409cb8b5d"
  },
  {
    name: "大连东软信息学院",
    abbreviation: "neusoft",
    province: "辽宁省",
    id: "3f5a562a-f03e-4bd5-aeb8-2dc2edeb05b6"
  },
  {
    name: "辽宁财贸学院",
    abbreviation: "lncmxy",
    province: "辽宁省",
    id: "6bdf7046-875d-45c4-bb0f-7ab3142d2b01"
  },
  {
    name: "辽宁传媒学院",
    abbreviation: "lncu",
    province: "辽宁省",
    id: "339a739c-826b-447c-9c9f-c63471895ccb"
  },
  {
    name: "营口理工学院",
    abbreviation: "yku",
    province: "辽宁省",
    id: "0c0cea37-4d44-4e92-abd8-1265694684f7"
  },
  {
    name: "朝阳师范高等专科学校",
    abbreviation: "cysz",
    province: "辽宁省",
    id: "23a46aec-3df2-46a5-81d6-7c3e3090e2a3"
  },
  {
    name: "抚顺师范高等专科学校",
    abbreviation: "fstc",
    province: "辽宁省",
    id: "5eb64223-6724-4c6f-9ffa-769dc40439ae"
  },
  {
    name: "锦州师范高等专科学校",
    abbreviation: "jzsz",
    province: "辽宁省",
    id: "73a71710-2bad-435e-a502-54e44d13f501"
  },
  {
    name: "营口职业技术学院",
    abbreviation: "ykdx",
    province: "辽宁省",
    id: "39980e36-6eaa-4036-a0f9-720c5684b89f"
  },
  {
    name: "铁岭师范高等专科学校",
    abbreviation: "tlsz",
    province: "辽宁省",
    id: "b8d6a740-6eca-4ec4-b58c-fa2e2d8c24c7"
  },
  {
    name: "大连职业技术学院",
    abbreviation: "dlvtc",
    province: "辽宁省",
    id: "a884d96f-7f7c-4efe-9b1d-53b349a0ebc7"
  },
  {
    name: "辽宁农业职业技术学院",
    abbreviation: "lnnzy",
    province: "辽宁省",
    id: "093ed42c-3434-4805-838d-ce8ed5129c91"
  },
  {
    name: "抚顺职业技术学院",
    abbreviation: "fvti",
    province: "辽宁省",
    id: "a443d29d-7100-4b45-ad6d-b80679ec0a14"
  },
  {
    name: "辽阳职业技术学院",
    abbreviation: "419",
    province: "辽宁省",
    id: "b8effc1a-f571-47f2-85e0-933db4b94513"
  },
  {
    name: "阜新高等专科学校",
    abbreviation: "fxgz",
    province: "辽宁省",
    id: "3a8973cf-c4dc-4160-b19a-99e839fe8d69"
  },
  {
    name: "辽宁交通高等专科学校",
    abbreviation: "lncc",
    province: "辽宁省",
    id: "ea7aaa2e-0388-49dc-8772-00b7f269646d"
  },
  {
    name: "辽宁税务高等专科学校",
    abbreviation: "dltaxedu",
    province: "辽宁省",
    id: "40f4e0dd-f33a-4667-bb45-18ddb6a7f02e"
  },
  {
    name: "盘锦职业技术学院",
    abbreviation: "pjzy",
    province: "辽宁省",
    id: "0b968a24-5642-46b9-8753-e05ded44f781"
  },
  {
    name: "沈阳航空职业技术学院",
    abbreviation: "syhzy",
    province: "辽宁省",
    id: "ea352549-7ffe-460f-959f-5a0bab87a614"
  },
  {
    name: "辽宁职业学院",
    abbreviation: "lnvc",
    province: "辽宁省",
    id: "5b68a476-cffd-43a3-87b8-2285796b1a78"
  },
  {
    name: "辽宁林业职业技术学院",
    abbreviation: "lnlzy",
    province: "辽宁省",
    id: "77e4a4b8-337e-4324-8c36-2d955b607646"
  },
  {
    name: "沈阳职业技术学院",
    abbreviation: "vtcsy",
    province: "辽宁省",
    id: "39fe62bb-c112-45b8-89b9-65384d6be0ad"
  },
  {
    name: "辽宁理工职业学院",
    abbreviation: "lndhdx",
    province: "辽宁省",
    id: "ccdf1fa4-49d4-416a-ae0d-395a0fd7f6ee"
  },
  {
    name: "大连商务职业学院",
    abbreviation: "dlswedu",
    province: "辽宁省",
    id: "02d5d142-5991-435f-8581-7370a0d99a4f"
  },
  {
    name: "辽宁金融职业学院",
    abbreviation: "lnfvc",
    province: "辽宁省",
    id: "b0928d6a-06d4-4f52-8835-eba0ae09ecf7"
  },
  {
    name: "辽宁轨道交通职业学院",
    abbreviation: "stjx",
    province: "辽宁省",
    id: "b6b89be8-b291-4cc7-88be-b7715b97de3f"
  },
  {
    name: "辽宁广告职业学院",
    abbreviation: "ggxy",
    province: "辽宁省",
    id: "64d6ce45-6a92-413f-983b-5c1c8c844bbe"
  },
  {
    name: "辽宁机电职业技术学院",
    abbreviation: "lnmec",
    province: "辽宁省",
    id: "9d6ca45d-2740-4b6f-9b28-3441cc58db86"
  },
  {
    name: "辽宁经济职业技术学院",
    abbreviation: "lnemci",
    province: "辽宁省",
    id: "6dacedbf-b08a-442c-b913-533ca2f5b57d"
  },
  {
    name: "辽宁石化职业技术学院",
    abbreviation: "lnpc",
    province: "辽宁省",
    id: "4b823d0f-1a3f-42c9-b70a-7d6a2a6df7f4"
  },
  {
    name: "渤海船舶职业学院",
    abbreviation: "bhcy",
    province: "辽宁省",
    id: "d6de0796-6619-45e2-a0cf-db1a76126ea0"
  },
  {
    name: "大连软件职业学院",
    abbreviation: "rjedu",
    province: "辽宁省",
    id: "d981a067-7232-4009-b03b-272c045fbaf7"
  },
  {
    name: "大连翻译职业学院",
    abbreviation: "dltcedu",
    province: "辽宁省",
    id: "6f339f3e-d11c-413c-a9a0-a5d2f7c49375"
  },
  {
    name: "辽宁商贸职业学院",
    abbreviation: "lnsmzy",
    province: "辽宁省",
    id: "c3d802b2-66e7-4a74-aac7-47eab588b60c"
  },
  {
    name: "大连枫叶职业技术学院",
    abbreviation: "dmlit",
    province: "辽宁省",
    id: "e64f5b1a-987b-462d-9897-c211e0737eed"
  },
  {
    name: "辽宁装备制造职业技术学院",
    abbreviation: "ltcem",
    province: "辽宁省",
    id: "f2b00a1a-e357-48c1-bb57-7af541154da0"
  },
  {
    name: "辽河石油职业技术学院",
    abbreviation: "lhptc",
    province: "辽宁省",
    id: "032d2a92-fd40-4a2a-a5ec-f272b685e54d"
  },
  {
    name: "辽宁地质工程职业学院",
    abbreviation: "lndzxy",
    province: "辽宁省",
    id: "825d6d8f-1c6a-493d-bb07-52953065cf28"
  },
  {
    name: "辽宁铁道职业技术学院",
    abbreviation: "jztlyx",
    province: "辽宁省",
    id: "0e88a710-4e6d-4b08-bc92-5e6bb226ba42"
  },
  {
    name: "辽宁建筑职业学院",
    abbreviation: "lnjzxy",
    province: "辽宁省",
    id: "5f4c8531-38d0-4d61-b11f-2b04ef344b18"
  },
  {
    name: "大连航运职业技术学院",
    abbreviation: "dlsc",
    province: "辽宁省",
    id: "41421dcb-99c7-4c67-9974-04764d2e807a"
  },
  {
    name: "大连装备制造职业技术学院",
    abbreviation: "dlzbzzedu",
    province: "辽宁省",
    id: "c233b6c3-249e-410a-b458-e91d0a49eb3f"
  },
  {
    name: "大连汽车职业技术学院",
    abbreviation: "dlqcxy",
    province: "辽宁省",
    id: "407ced77-9a5a-401e-80ba-2dd4051885a3"
  },
  {
    name: "辽宁现代服务职业技术学院",
    abbreviation: "lnxdfwxy",
    province: "辽宁省",
    id: "1caf6b34-8929-4a8c-a968-5fa252d11411"
  },
  {
    name: "辽宁冶金职业技术学院",
    abbreviation: "lnyj",
    province: "辽宁省",
    id: "fc964a07-fbe8-448c-8d88-8dcd57026a45"
  },
  {
    name: "辽宁工程职业学院",
    abbreviation: "lngczyxy",
    province: "辽宁省",
    id: "ff1c941b-150e-475c-9ff2-3528905670a1"
  },
  {
    name: "辽宁城市建设职业技术学院",
    abbreviation: "lncjxy",
    province: "辽宁省",
    id: "c2132d6a-9eac-40e2-906e-827892a522be"
  },
  {
    name: "辽宁医药职业学院",
    abbreviation: "lnwsxy-edu",
    province: "辽宁省",
    id: "6d8b68c2-86e0-4bdd-abc8-0484f92fabbb"
  },
  {
    name: "铁岭卫生职业学院",
    abbreviation: "lntlhc",
    province: "辽宁省",
    id: "e6edd18b-ead9-4c45-9304-6aa7ca257b89"
  },
  {
    name: "沈阳北软信息职业技术学院",
    abbreviation: "nsi-soft",
    province: "辽宁省",
    id: "0a495f54-d698-4d6d-9ace-f22a0f1b821e"
  },
  {
    name: "辽宁政法职业学院",
    abbreviation: "lacpj",
    province: "辽宁省",
    id: "0b3009d9-f863-45af-869e-d8b4695bde8c"
  },
  {
    name: "辽宁民族师范高等专科学校",
    abbreviation: "lnkn",
    province: "辽宁省",
    id: "a0976d2d-00af-42af-b2f2-819af7424479"
  },
  {
    name: "辽宁轻工职业学院",
    abbreviation: "lnqg",
    province: "辽宁省",
    id: "e7cc2492-5065-4d5c-90b4-42e36eb380d2"
  },
  {
    name: "辽宁水利职业学院",
    abbreviation: "sngzy",
    province: "辽宁省",
    id: "e426710d-4a18-46c7-b6e8-b435745fdc8a"
  },
  {
    name: "辽宁特殊教育师范高等专科学校",
    abbreviation: "lntjw",
    province: "辽宁省",
    id: "f2c7a792-bda8-4868-a3e5-955db6f31c96"
  },
  {
    name: "吉林大学",
    abbreviation: "jlu",
    province: "吉林省",
    id: "a2726d94-2ec9-454a-996a-5bd3bdd8dd1a"
  },
  {
    name: "延边大学",
    abbreviation: "ybu",
    province: "吉林省",
    id: "15d290b3-e62e-486b-9e85-62f0c1fa87e4"
  },
  {
    name: "长春理工大学",
    abbreviation: "cust",
    province: "吉林省",
    id: "07776f5c-a898-41a3-8852-e9d2fc695182"
  },
  {
    name: "东北电力大学",
    abbreviation: "nedu",
    province: "吉林省",
    id: "c6a40ba2-ef22-44f5-be04-53cbe754d8db"
  },
  {
    name: "长春工业大学",
    abbreviation: "ccut",
    province: "吉林省",
    id: "c8de7c5f-f25c-4830-aba6-923026cd30b8"
  },
  {
    name: "吉林建筑大学",
    abbreviation: "jliae",
    province: "吉林省",
    id: "f1ed0756-cbcc-45ef-a46d-fe25b2b2c137"
  },
  {
    name: "吉林化工学院",
    abbreviation: "jlict",
    province: "吉林省",
    id: "f25dbf5e-bf1a-4e16-9779-a84b2eb5e855"
  },
  {
    name: "吉林农业大学",
    abbreviation: "jlau",
    province: "吉林省",
    id: "15b66375-2630-4fc7-b2a3-970f47d04992"
  },
  {
    name: "长春中医药大学",
    abbreviation: "ccucm",
    province: "吉林省",
    id: "d4d0c7aa-5db0-47fb-a736-504bbc4f8b4d"
  },
  {
    name: "东北师范大学",
    abbreviation: "nenu",
    province: "吉林省",
    id: "86fced30-6c4c-4950-8015-0091accec4f2"
  },
  {
    name: "北华大学",
    abbreviation: "beihua",
    province: "吉林省",
    id: "6ab473c1-0581-4221-8677-685ce768b096"
  },
  {
    name: "通化师范学院",
    abbreviation: "thnu",
    province: "吉林省",
    id: "ea6673a5-ab4e-4927-ad58-d8f22f3d552f"
  },
  {
    name: "吉林师范大学",
    abbreviation: "jlnu",
    province: "吉林省",
    id: "4a13d515-2be8-40e5-8406-8b1d698990ee"
  },
  {
    name: "吉林工程技术师范学院",
    abbreviation: "jltiet",
    province: "吉林省",
    id: "73c96056-d7a7-4f76-b7f2-507f96106635"
  },
  {
    name: "长春师范大学",
    abbreviation: "cncnc",
    province: "吉林省",
    id: "afc3edf9-c8bd-4492-a990-41aba9d128c6"
  },
  {
    name: "白城师范学院",
    abbreviation: "bcsfxy",
    province: "吉林省",
    id: "9a549f1b-191d-4e4a-b57c-256fe9885e2b"
  },
  {
    name: "吉林财经大学",
    abbreviation: "ctu",
    province: "吉林省",
    id: "3138fdad-ec56-4134-a946-ef8e92d54d3f"
  },
  {
    name: "吉林体育学院",
    abbreviation: "jlsu",
    province: "吉林省",
    id: "165e5522-3b8b-4faa-8561-274a65571522"
  },
  {
    name: "吉林艺术学院",
    abbreviation: "jlart",
    province: "吉林省",
    id: "f5e231b1-5e81-476d-9dcb-4bdff473b558"
  },
  {
    name: "吉林华桥外国语学院",
    abbreviation: "hqwy",
    province: "吉林省",
    id: "9fc75918-10a8-4b63-9b18-906297af6fc7"
  },
  {
    name: "吉林工商学院",
    abbreviation: "jlbtc",
    province: "吉林省",
    id: "4f031652-7af0-4014-a1b4-b6f62da8fa64"
  },
  {
    name: "长春工程学院",
    abbreviation: "ccit",
    province: "吉林省",
    id: "79dcf168-0013-4c45-9b3f-351092c9a6e4"
  },
  {
    name: "吉林农业科技学院",
    abbreviation: "jlnku",
    province: "吉林省",
    id: "615ee017-7451-40de-9897-4e5b9beb9882"
  },
  {
    name: "吉林警察学院",
    abbreviation: "jljcxy",
    province: "吉林省",
    id: "7aea79c0-2c0b-4610-8985-c2ac3210a1ac"
  },
  {
    name: "长春大学",
    abbreviation: "ccu",
    province: "吉林省",
    id: "9ee5a249-2362-40c3-b81a-d00b1adcb9fd"
  },
  {
    name: "长春光华学院",
    abbreviation: "ccughc",
    province: "吉林省",
    id: "fc5e4a4f-101c-4456-8e50-fa46b7e4ff21"
  },
  {
    name: "长春工业大学人文信息学院",
    abbreviation: "ccutchi",
    province: "吉林省",
    id: "8e5f209e-01bb-4d80-9bda-579a540d34a3"
  },
  {
    name: "长春理工大学光电信息学院",
    abbreviation: "csoei",
    province: "吉林省",
    id: "b1d68cab-60ec-4b36-b845-9bde3f402858"
  },
  {
    name: "长春财经学院",
    abbreviation: "ccufe",
    province: "吉林省",
    id: "53508ea1-e5ac-443e-93d2-7d6e9d864df9"
  },
  {
    name: "吉林建筑大学城建学院",
    abbreviation: "jlucc",
    province: "吉林省",
    id: "0e75d5b4-799b-4a07-94ae-be7cfd134061"
  },
  {
    name: "长春建筑学院",
    abbreviation: "jladi",
    province: "吉林省",
    id: "6b097f5e-af2a-4672-9c07-2c9de85a74f4"
  },
  {
    name: "长春科技学院",
    abbreviation: "jlaudev",
    province: "吉林省",
    id: "18ad79b3-979f-42ea-ae2b-f2ccf51f8736"
  },
  {
    name: "吉林动画学院",
    abbreviation: "jldh",
    province: "吉林省",
    id: "d6854f7a-e7e9-489e-aaba-e58abb8f00f0"
  },
  {
    name: "吉林师范大学博达学院",
    abbreviation: "bdxy",
    province: "吉林省",
    id: "bc8c806d-a86f-4f0f-a048-bbadf5b92421"
  },
  {
    name: "长春大学旅游学院",
    abbreviation: "cctourcoll",
    province: "吉林省",
    id: "d74ce98b-75bf-4290-8434-188f48a803cc"
  },
  {
    name: "东北师范大学人文学院",
    abbreviation: "chsnenu",
    province: "吉林省",
    id: "bfada6c0-af55-4137-a882-d00e4960641d"
  },
  {
    name: "吉林医药学院",
    abbreviation: "jlmu",
    province: "吉林省",
    id: "aafd62fa-8a21-4119-81b4-5601a755d5d8"
  },
  {
    name: "长春师范高等专科学校",
    abbreviation: "com/",
    province: "吉林省",
    id: "6f2b650b-7bbf-441e-89f8-4379c23fcd1a"
  },
  {
    name: "辽源职业技术学院",
    abbreviation: "lyvtc",
    province: "吉林省",
    id: "81056b3f-759a-41c8-a9b2-be3fd5e90cef"
  },
  {
    name: "四平职业大学",
    abbreviation: "jlsppc",
    province: "吉林省",
    id: "543269cf-1bb0-4d87-9e16-cdee6c989d91"
  },
  {
    name: "长春汽车工业高等专科学校",
    abbreviation: "caii",
    province: "吉林省",
    id: "f14166b9-211e-498a-99f0-bcd8cd056e7c"
  },
  {
    name: "长春金融高等专科学校",
    abbreviation: "cjgz",
    province: "吉林省",
    id: "2f2e0609-b706-4bb8-972a-d39108be33f4"
  },
  {
    name: "长春医学高等专科学校",
    abbreviation: "cmcedu",
    province: "吉林省",
    id: "a4030691-034b-404e-94e6-0ba5e43dbfab"
  },
  {
    name: "吉林交通职业技术学院",
    abbreviation: "jjtc",
    province: "吉林省",
    id: "07e805b0-b1c8-4a53-9704-6aacc5b7f4e9"
  },
  {
    name: "长春东方职业学院",
    abbreviation: "dfzyxy",
    province: "吉林省",
    id: "81c93364-1087-4b6b-8cde-cdb75065ae62"
  },
  {
    name: "吉林司法警官职业学院",
    abbreviation: "jlsfjy",
    province: "吉林省",
    id: "a4861936-67de-45fb-a8ca-2ae9e08ba308"
  },
  {
    name: "吉林电子信息职业技术学院",
    abbreviation: "jltc",
    province: "吉林省",
    id: "842c76bf-61d1-440a-bbc1-c867c3d5f2de"
  },
  {
    name: "吉林工业职业技术学院",
    abbreviation: "jvcit",
    province: "吉林省",
    id: "caad8b3d-bb6a-4367-a185-51c9b0516dfb"
  },
  {
    name: "吉林工程职业学院",
    abbreviation: "jlevc",
    province: "吉林省",
    id: "d6803bf7-a69c-4656-a40a-2297daa4e4b7"
  },
  {
    name: "长春职业技术学院",
    abbreviation: "cvit",
    province: "吉林省",
    id: "2489c22f-13fd-477e-bbbb-5dd9b3d47acf"
  },
  {
    name: "白城医学高等专科学校",
    abbreviation: "bcyz",
    province: "吉林省",
    id: "61aa30c7-b408-4df8-866e-0c4803fe34a3"
  },
  {
    name: "长春信息技术职业学院",
    abbreviation: "citpc",
    province: "吉林省",
    id: "ccb983fb-79b0-4e78-a93e-73f2b4f3dd1d"
  },
  {
    name: "松原职业技术学院",
    abbreviation: "sypt",
    province: "吉林省",
    id: "5b4333d4-09ae-40e1-8193-3de549429863"
  },
  {
    name: "吉林铁道职业技术学院",
    abbreviation: "jtpt",
    province: "吉林省",
    id: "77c0ac77-72c6-4f59-8df1-1777fab7976a"
  },
  {
    name: "白城职业技术学院",
    abbreviation: "bcvit",
    province: "吉林省",
    id: "099fef22-da78-4e4b-acbf-81c8c34fca48"
  },
  {
    name: "长白山职业技术学院",
    abbreviation: "cbsvtc",
    province: "吉林省",
    id: "0854d6a7-71c8-4d51-94fb-08bd18e63f72"
  },
  {
    name: "吉林科技职业技术学院",
    abbreviation: "jilinkj",
    province: "吉林省",
    id: "caae182d-a893-49dd-bd52-b460bc83f139"
  },
  {
    name: "延边职业技术学院",
    abbreviation: "ybvtc",
    province: "吉林省",
    id: "671764f4-7514-4144-8830-7e0d4c95a2ac"
  },
  {
    name: "吉林城市职业技术学院",
    abbreviation: "jlcsxy",
    province: "吉林省",
    id: "884bf0ae-5854-4de1-b0df-15385338e65f"
  },
  {
    name: "吉林职业技术学院",
    abbreviation: "jlhtedu",
    province: "吉林省",
    id: "34044e02-d199-4a6a-9e2f-3399220ff025"
  },
  {
    name: "吉林水利电力职业学院",
    abbreviation: "jlsdzy",
    province: "吉林省",
    id: "fef364d9-f0bf-485b-a312-f124617842e5"
  },
  {
    name: "吉林对外经贸职业学院",
    abbreviation: "jvcfte",
    province: "吉林省",
    id: "35d694fd-f38c-4849-9e34-3a6d841e5cb5"
  },
  {
    name: "黑龙江大学",
    abbreviation: "hlju",
    province: "黑龙江省",
    id: "4c2a896d-49f6-40a4-8315-6ec196382ca6"
  },
  {
    name: "哈尔滨工业大学",
    abbreviation: "hit",
    province: "黑龙江省",
    id: "6ce22044-3faf-456c-83d3-4a5fc4f66c1a"
  },
  {
    name: "哈尔滨理工大学",
    abbreviation: "hrbust",
    province: "黑龙江省",
    id: "55782a36-212e-4756-8fd6-0b2f7e239c59"
  },
  {
    name: "哈尔滨工程大学",
    abbreviation: "hrbeu",
    province: "黑龙江省",
    id: "767fb0f3-6e3a-4568-871e-930b92eb91d0"
  },
  {
    name: "黑龙江科技大学",
    abbreviation: "usth",
    province: "黑龙江省",
    id: "39c59a17-cc8a-4fe0-8e45-b6b34aa51cff"
  },
  {
    name: "东北石油大学",
    abbreviation: "nepu",
    province: "黑龙江省",
    id: "d79a8ff6-67db-4967-93fd-93a6f4aa00a6"
  },
  {
    name: "佳木斯大学",
    abbreviation: "jmsu",
    province: "黑龙江省",
    id: "08509419-d052-4328-b8cf-6d3edd5c8812"
  },
  {
    name: "黑龙江八一农垦大学",
    abbreviation: "hlau",
    province: "黑龙江省",
    id: "678bc363-91ae-4dc0-b00c-6f98e73fa80e"
  },
  {
    name: "东北农业大学",
    abbreviation: "neau",
    province: "黑龙江省",
    id: "9e3b14e1-ef2c-48d2-be90-c029dcad6d34"
  },
  {
    name: "东北林业大学",
    abbreviation: "nefu",
    province: "黑龙江省",
    id: "ce435ed2-d23e-4efa-8958-9544d4299834"
  },
  {
    name: "哈尔滨医科大学",
    abbreviation: "hrbmu",
    province: "黑龙江省",
    id: "aa178159-e467-42ec-befa-5407cc36ac27"
  },
  {
    name: "黑龙江中医药大学",
    abbreviation: "hljucm",
    province: "黑龙江省",
    id: "f78f5473-36c3-43c0-a231-1dd9795f3c49"
  },
  {
    name: "牡丹江医学院",
    abbreviation: "mdjmu",
    province: "黑龙江省",
    id: "2441fd1e-ef50-4947-8f02-eb41842eae0a"
  },
  {
    name: "哈尔滨师范大学",
    abbreviation: "hrbnu",
    province: "黑龙江省",
    id: "90fe860f-3f46-49c5-bafe-fa496cc1c5bc"
  },
  {
    name: "齐齐哈尔大学",
    abbreviation: "qqhru",
    province: "黑龙江省",
    id: "ee50cd84-581f-4b92-8975-7039fd4d4b60"
  },
  {
    name: "牡丹江师范学院",
    abbreviation: "mdjnu",
    province: "黑龙江省",
    id: "3d638911-330c-4e66-a4a7-df58ab4df794"
  },
  {
    name: "哈尔滨学院",
    abbreviation: "hrbu",
    province: "黑龙江省",
    id: "668c980b-3838-429b-9f65-b9c84c3e9d8b"
  },
  {
    name: "大庆师范学院",
    abbreviation: "dqsy",
    province: "黑龙江省",
    id: "fd382549-76cd-4c57-b82c-95e985261ba0"
  },
  {
    name: "绥化学院",
    abbreviation: "shxy",
    province: "黑龙江省",
    id: "4fae99db-3c7d-48b5-a0f0-451059c1f2f5"
  },
  {
    name: "哈尔滨商业大学",
    abbreviation: "hrbcu",
    province: "黑龙江省",
    id: "35af94e4-8b66-4237-92bd-526488ccb2bf"
  },
  {
    name: "哈尔滨体育学院",
    abbreviation: "hrbipe",
    province: "黑龙江省",
    id: "530054b6-55a4-48a2-b47e-19cb2f004ab5"
  },
  {
    name: "哈尔滨金融学院",
    abbreviation: "hrbfu",
    province: "黑龙江省",
    id: "df260f55-3fc6-46c0-a1d6-4468843c49e8"
  },
  {
    name: "齐齐哈尔医学院",
    abbreviation: "qqhrmu",
    province: "黑龙江省",
    id: "c1e70a65-25b5-467c-8503-63eebb5e41bc"
  },
  {
    name: "黑龙江工业学院",
    abbreviation: "hljgyxy",
    province: "黑龙江省",
    id: "2d679cd1-176e-46b8-998a-1bd921681cc3"
  },
  {
    name: "黑龙江东方学院",
    abbreviation: "dfxy",
    province: "黑龙江省",
    id: "48ee49b8-cd73-4be6-bf67-981cb2ba841e"
  },
  {
    name: "哈尔滨信息工程学院",
    abbreviation: "hxci",
    province: "黑龙江省",
    id: "445b4f7c-993d-4117-8eb9-6bb2eedafede"
  },
  {
    name: "黑龙江工程学院",
    abbreviation: "hljit",
    province: "黑龙江省",
    id: "e45d280c-65c8-4562-b554-cac86426978b"
  },
  {
    name: "齐齐哈尔工程学院",
    abbreviation: "qqhrit",
    province: "黑龙江省",
    id: "7c341d9b-49b4-41f8-a2e2-21e5ad7e8702"
  },
  {
    name: "黑龙江外国语学院",
    abbreviation: "hiu",
    province: "黑龙江省",
    id: "7954f077-d5cb-4912-a756-9b98355c041a"
  },
  {
    name: "黑龙江财经学院",
    abbreviation: "hfu",
    province: "黑龙江省",
    id: "e99053ec-751b-4f5d-9e9b-c8ab16a9be1d"
  },
  {
    name: "哈尔滨石油学院",
    abbreviation: "hr-edu",
    province: "黑龙江省",
    id: "b525bf62-0e59-4fdb-8630-ec2948ecab99"
  },
  {
    name: "黑龙江工商学院",
    abbreviation: "hgs-edu",
    province: "黑龙江省",
    id: "ab0cfbcb-3c38-481c-89c5-40a8b0ad3dba"
  },
  {
    name: "哈尔滨远东理工学院",
    abbreviation: "fe-edu",
    province: "黑龙江省",
    id: "9dda5ebd-544c-4808-b94b-480e9759cc40"
  },
  {
    name: "哈尔滨剑桥学院",
    abbreviation: "jqu",
    province: "黑龙江省",
    id: "a2610b26-68cf-4e72-bc56-e7b0d5b257b9"
  },
  {
    name: "黑龙江工程学院昆仑旅游学院",
    abbreviation: "kllyxy",
    province: "黑龙江省",
    id: "d7b9c62a-0c5b-49e8-b074-e957d37f813e"
  },
  {
    name: "哈尔滨广厦学院",
    abbreviation: "gsxy",
    province: "黑龙江省",
    id: "cf9ead9e-cf64-4b3f-8c12-e460557212ad"
  },
  {
    name: "哈尔滨华德学院",
    abbreviation: "hithd",
    province: "黑龙江省",
    id: "8d41faee-aa60-45eb-a28d-6cacea35c45e"
  },
  {
    name: "黑河学院",
    abbreviation: "hhxyzsb",
    province: "黑龙江省",
    id: "b5c902b2-60b7-4e26-a395-fa40ddc30d87"
  },
  {
    name: "哈尔滨音乐学院",
    abbreviation: "hrbcm",
    province: "黑龙江省",
    id: "ab54cf76-2aa2-4e8c-9fe8-5752c973fdd7"
  },
  {
    name: "齐齐哈尔高等师范专科学校",
    abbreviation: "qqhrtc",
    province: "黑龙江省",
    id: "bbf5e11a-be0c-4242-8e3c-2979ffd3e0d5"
  },
  {
    name: "伊春职业学院",
    abbreviation: "ycvc",
    province: "黑龙江省",
    id: "8f3520ef-a469-421a-a2b7-470287d7b191"
  },
  {
    name: "牡丹江大学",
    abbreviation: "mdjdx",
    province: "黑龙江省",
    id: "f7785e8a-5cf3-4023-9098-f5779c6a3be0"
  },
  {
    name: "黑龙江职业学院",
    abbreviation: "hljp",
    province: "黑龙江省",
    id: "6ba52ea6-bef8-431d-a954-ef83e9524ba7"
  },
  {
    name: "黑龙江建筑职业技术学院",
    abbreviation: "hcc",
    province: "黑龙江省",
    id: "f030a759-b21a-41eb-bfe8-6526d7c2d441"
  },
  {
    name: "黑龙江艺术职业学院",
    abbreviation: "hljyzy",
    province: "黑龙江省",
    id: "e2218337-1233-44ca-a278-f6b2c681a70e"
  },
  {
    name: "大庆职业学院",
    abbreviation: "dqzyxy",
    province: "黑龙江省",
    id: "bdff8906-1293-4fb5-8885-8e5fcf5c0d3d"
  },
  {
    name: "黑龙江林业职业技术学院",
    abbreviation: "hljlzy",
    province: "黑龙江省",
    id: "f1e3cd7d-6b88-4b11-8445-fa2b941554c7"
  },
  {
    name: "黑龙江农业职业技术学院",
    abbreviation: "hljnzy",
    province: "黑龙江省",
    id: "9383bb68-6f6d-4640-882d-2bd5e305d087"
  },
  {
    name: "黑龙江农业工程职业学院",
    abbreviation: "hngzy",
    province: "黑龙江省",
    id: "72e4c8a9-49fb-4a19-987e-08a0354d1294"
  },
  {
    name: "黑龙江农垦职业学院",
    abbreviation: "nkzy",
    province: "黑龙江省",
    id: "8021bcb4-3b42-45e9-ac47-68a6755e76e4"
  },
  {
    name: "黑龙江司法警官职业学院",
    abbreviation: "hlsfjx",
    province: "黑龙江省",
    id: "ca355570-5b14-47b0-877d-00a11650d20c"
  },
  {
    name: "鹤岗师范高等专科学校",
    abbreviation: "hgtc",
    province: "黑龙江省",
    id: "446031a7-bad3-45f4-85d5-14077aea6d19"
  },
  {
    name: "哈尔滨电力职业技术学院",
    abbreviation: "hl",
    province: "黑龙江省",
    id: "7c92e8a4-3211-4b3b-9169-8a3925312e81"
  },
  {
    name: "哈尔滨铁道职业技术学院",
    abbreviation: "htxy",
    province: "黑龙江省",
    id: "982ae940-6f02-450c-ae3e-dc5a670a437f"
  },
  {
    name: "大兴安岭职业学院",
    abbreviation: "dxalu",
    province: "黑龙江省",
    id: "c83226e0-c0d6-463b-9726-ba1bd9bfc998"
  },
  {
    name: "黑龙江农业经济职业学院",
    abbreviation: "nyjj",
    province: "黑龙江省",
    id: "6be1d8f1-9f95-4e7a-a6a6-70a515a0e223"
  },
  {
    name: "哈尔滨职业技术学院",
    abbreviation: "hzjxy",
    province: "黑龙江省",
    id: "ae602b8a-6d89-4e32-9789-ea9b0e637e33"
  },
  {
    name: "哈尔滨传媒职业学院",
    abbreviation: "hrbmcc",
    province: "黑龙江省",
    id: "c0dd243a-e411-41e7-8619-dbaa62461fc3"
  },
  {
    name: "黑龙江生物科技职业学院",
    abbreviation: "swkj",
    province: "黑龙江省",
    id: "8b363a6c-69bc-4ccf-94b3-7946db75486e"
  },
  {
    name: "黑龙江商业职业学院",
    abbreviation: "hljszy",
    province: "黑龙江省",
    id: "0ea7fba0-60de-448b-8677-0c435e16940e"
  },
  {
    name: "黑龙江公安警官职业学院",
    abbreviation: "hlpolice",
    province: "黑龙江省",
    id: "a46a2b81-1ee3-495d-a5f9-991e5caad9ff"
  },
  {
    name: "黑龙江信息技术职业学院",
    abbreviation: "hljitpc",
    province: "黑龙江省",
    id: "f1bcb677-d7bb-4a98-ac57-8267c3f75c51"
  },
  {
    name: "哈尔滨城市职业学院",
    abbreviation: "13451",
    province: "黑龙江省",
    id: "2c89c033-5ee7-404a-a411-1f279b2f5099"
  },
  {
    name: "黑龙江农垦科技职业学院",
    abbreviation: "nkkjxy",
    province: "黑龙江省",
    id: "120f369d-1176-4fa4-b7da-050c1562f4ca"
  },
  {
    name: "黑龙江旅游职业技术学院",
    abbreviation: "ljly",
    province: "黑龙江省",
    id: "38bb28e3-ed62-49b3-982b-35a6c0ecf4a2"
  },
  {
    name: "黑龙江三江美术职业学院",
    abbreviation: "sjmsxy",
    province: "黑龙江省",
    id: "c34f47ae-71bb-48d2-9cea-05fcc0aeed38"
  },
  {
    name: "黑龙江生态工程职业学院",
    abbreviation: "hfmc",
    province: "黑龙江省",
    id: "fe220053-7b6d-4a0e-a74c-bbf42d3d463f"
  },
  {
    name: "黑龙江能源职业学院",
    abbreviation: "hmzy",
    province: "黑龙江省",
    id: "48842704-c480-42c5-ad73-adef7be5060b"
  },
  {
    name: "七台河职业学院",
    abbreviation: "qthzyxy",
    province: "黑龙江省",
    id: "bb73adbe-9495-436f-8da3-fc6f4af87382"
  },
  {
    name: "黑龙江民族职业学院",
    abbreviation: "mvcollege",
    province: "黑龙江省",
    id: "ca997587-a2aa-480b-8169-a7f67203f9c6"
  },
  {
    name: "大庆医学高等专科学校",
    abbreviation: "petrodaqin",
    province: "黑龙江省",
    id: "679f560b-5f5d-4d5c-ae42-a0a7aed6718c"
  },
  {
    name: "黑龙江交通职业技术学院",
    abbreviation: "hlcp",
    province: "黑龙江省",
    id: "802b701d-5ddd-4da6-8d16-c5bba8731538"
  },
  {
    name: "哈尔滨应用职业技术学院",
    abbreviation: "hyyzy",
    province: "黑龙江省",
    id: "f862e2f0-a66d-4767-a4cc-50762babe5f9"
  },
  {
    name: "黑龙江幼儿师范高等专科学校",
    abbreviation: "hljys",
    province: "黑龙江省",
    id: "06bfe22e-e2a5-4fa9-979a-6147cd970d20"
  },
  {
    name: "哈尔滨科学技术职业学院",
    abbreviation: "hrbkjzy",
    province: "黑龙江省",
    id: "0eefff63-af26-4c4b-b9e7-c1ba6984ef4e"
  },
  {
    name: "黑龙江粮食职业学院",
    abbreviation: "hljgvc",
    province: "黑龙江省",
    id: "ee114179-dda0-4c2c-996d-eb25614c3cf4"
  },
  {
    name: "佳木斯职业学院",
    abbreviation: "jmszy",
    province: "黑龙江省",
    id: "7e5d34c7-a812-494e-8ba9-356d3854f5ca"
  },
  {
    name: "黑龙江护理高等专科学校",
    abbreviation: "hljhlgz",
    province: "黑龙江省",
    id: "80015031-96b1-4ee6-978e-6b3e4b5b8644"
  },
  {
    name: "齐齐哈尔理工职业学院",
    abbreviation: "qlgxy",
    province: "黑龙江省",
    id: "17fc72fc-c17d-40d9-8169-9eb8f80e79b1"
  },
  {
    name: "哈尔滨幼儿师范高等专科学校",
    abbreviation: "hayouzhuan",
    province: "黑龙江省",
    id: "a41335a0-5fb3-46eb-a162-74e209b7546d"
  },
  {
    name: "黑龙江冰雪体育职业学院",
    abbreviation: "vcws",
    province: "黑龙江省",
    id: "06b3207e-fede-4754-bb8a-12d4d95bd62a"
  },
  {
    name: "复旦大学",
    abbreviation: "fudan",
    province: "上海市",
    id: "d73ce80f-0bc6-4f84-9b11-a7d466ee22ca"
  },
  {
    name: "同济大学",
    abbreviation: "tongji",
    province: "上海市",
    id: "405a4205-c55f-41ea-a66b-48f1df88d2a4"
  },
  {
    name: "上海交通大学",
    abbreviation: "sjtu",
    province: "上海市",
    id: "e97dfc4e-f608-46ea-b097-af92c23db8cf"
  },
  {
    name: "华东理工大学",
    abbreviation: "ecust",
    province: "上海市",
    id: "9c9b319b-e8ed-490b-8530-498053159b46"
  },
  {
    name: "上海理工大学",
    abbreviation: "usst",
    province: "上海市",
    id: "b74d725b-9e5f-4bfc-b0bf-bc5c757c4a0c"
  },
  {
    name: "上海海事大学",
    abbreviation: "shmtu",
    province: "上海市",
    id: "d107dfbf-75b3-49af-92ea-5a106d22427d"
  },
  {
    name: "东华大学",
    abbreviation: "dhu",
    province: "上海市",
    id: "c0bcbf5e-b348-44d0-8cb2-f935a227f287"
  },
  {
    name: "上海电力学院",
    abbreviation: "shiep",
    province: "上海市",
    id: "8310cd64-a996-43df-9b70-0b94b7d9d52c"
  },
  {
    name: "上海应用技术大学",
    abbreviation: "sit",
    province: "上海市",
    id: "2d6223e6-a472-44b5-9723-c392a1d79928"
  },
  {
    name: "上海健康医学院",
    abbreviation: "sumhs",
    province: "上海市",
    id: "7b427ec9-8e07-463a-a529-9d8f2d6c8fd4"
  },
  {
    name: "上海海洋大学",
    abbreviation: "shou",
    province: "上海市",
    id: "fc6ee6a9-70f7-4d94-ba03-da799df391de"
  },
  {
    name: "上海中医药大学",
    abbreviation: "shutcm",
    province: "上海市",
    id: "76d23e10-c609-4d00-8476-b6c7feb9976d"
  },
  {
    name: "华东师范大学",
    abbreviation: "ecnu",
    province: "上海市",
    id: "a389c16e-48f7-4dc0-9def-82d601356c36"
  },
  {
    name: "上海师范大学",
    abbreviation: "shnu",
    province: "上海市",
    id: "88e26952-8b97-4874-aaf7-615c19653dae"
  },
  {
    name: "上海外国语大学",
    abbreviation: "shisu",
    province: "上海市",
    id: "e53677ce-23e8-4237-963a-585ee30517d3"
  },
  {
    name: "上海财经大学",
    abbreviation: "shufe",
    province: "上海市",
    id: "08e78e48-244c-4eb4-8f53-44af3811b195"
  },
  {
    name: "上海对外经贸大学",
    abbreviation: "suibe",
    province: "上海市",
    id: "eae8622f-37c4-4b12-9e1f-583f184fc3b8"
  },
  {
    name: "上海海关学院",
    abbreviation: "customs",
    province: "上海市",
    id: "74d3d482-b9ca-4ebc-b0e6-40bff39cd561"
  },
  {
    name: "华东政法大学",
    abbreviation: "ecupl",
    province: "上海市",
    id: "5cd80efa-9c97-4364-a763-83add82b49ac"
  },
  {
    name: "上海体育学院",
    abbreviation: "sus",
    province: "上海市",
    id: "dfb4de27-337b-4f06-aa06-3709b9569ab5"
  },
  {
    name: "上海音乐学院",
    abbreviation: "shcmusic",
    province: "上海市",
    id: "d345cb25-97bd-4240-a207-b02842083139"
  },
  {
    name: "上海戏剧学院",
    abbreviation: "sta",
    province: "上海市",
    id: "4f48ab32-9419-48f3-a0e9-b1335d9ba887"
  },
  {
    name: "上海大学",
    abbreviation: "shu",
    province: "上海市",
    id: "d295a526-3e81-4249-ac02-24209d2bfd14"
  },
  {
    name: "上海公安学院",
    abbreviation: "shpc",
    province: "上海市",
    id: "9a921345-7179-4b56-ba43-5546d06dd5a4"
  },
  {
    name: "上海工程技术大学",
    abbreviation: "sues",
    province: "上海市",
    id: "10e7675b-63c8-4d6f-853c-8448d8f24a10"
  },
  {
    name: "上海立信会计金融学院",
    abbreviation: "lixin",
    province: "上海市",
    id: "196b8067-2592-43fe-99b2-c5305f0ec1ab"
  },
  {
    name: "上海电机学院",
    abbreviation: "sdju",
    province: "上海市",
    id: "0428f3e0-c789-4110-944a-8dd4e63e7c8f"
  },
  {
    name: "上海杉达学院",
    abbreviation: "sandau",
    province: "上海市",
    id: "28aea16f-4fd6-4fcd-9da1-9705442415d6"
  },
  {
    name: "上海政法学院",
    abbreviation: "shupl",
    province: "上海市",
    id: "721ba5d1-4ae4-41af-addf-c1c94dd14c85"
  },
  {
    name: "上海第二工业大学",
    abbreviation: "sspu",
    province: "上海市",
    id: "1112310e-f90d-45c8-9f94-01a147053d84"
  },
  {
    name: "上海商学院",
    abbreviation: "sbs",
    province: "上海市",
    id: "736b3cac-7b77-4449-86f3-3da9f9670a0c"
  },
  {
    name: "上海建桥学院",
    abbreviation: "gench",
    province: "上海市",
    id: "a80c97d9-347f-4458-8a1a-2c3739fb2e16"
  },
  {
    name: "上海兴伟学院",
    abbreviation: "xingwei",
    province: "上海市",
    id: "0e1c1ce1-3446-44da-aef0-d7a8fbd045dc"
  },
  {
    name: "上海视觉艺术学院",
    abbreviation: "siva",
    province: "上海市",
    id: "fb740265-3889-4624-94fb-ea5e28c768c1"
  },
  {
    name: "上海外国语大学贤达经济人文学院",
    abbreviation: "xdsisu",
    province: "上海市",
    id: "ed68d60f-7db3-4e5d-9ad4-03badeae8c64"
  },
  {
    name: "上海师范大学天华学院",
    abbreviation: "sthu",
    province: "上海市",
    id: "b8e87160-3341-42dc-94ce-6e99ba984cdb"
  },
  {
    name: "上海纽约大学",
    abbreviation: "nyu",
    province: "上海市",
    id: "9b006c58-c5dc-46a7-ac91-f9916913a522"
  },
  {
    name: "上海科技大学",
    abbreviation: "shanghaite",
    province: "上海市",
    id: "ec748a43-7053-4a46-bed0-58afe45bd5d2"
  },
  {
    name: "上海旅游高等专科学校",
    abbreviation: "shnu",
    province: "上海市",
    id: "2528ea3e-69e8-4dd1-b7b5-f0298aaf9900"
  },
  {
    name: "上海东海职业技术学院",
    abbreviation: "esu",
    province: "上海市",
    id: "82e63145-294f-4564-acb2-ca9fe8aaf8cf"
  },
  {
    name: "上海工商职业技术学院",
    abbreviation: "sicp",
    province: "上海市",
    id: "7a0b5f98-2c62-44e6-9456-8b05f4ca065b"
  },
  {
    name: "上海出版印刷高等专科学校",
    abbreviation: "sppc",
    province: "上海市",
    id: "12ea9f3a-6766-40b9-b27e-03a5d8d56d17"
  },
  {
    name: "上海行健职业学院",
    abbreviation: "shxj",
    province: "上海市",
    id: "a2868128-ae68-4f59-b505-575e6238d853"
  },
  {
    name: "上海城建职业学院",
    abbreviation: "succ",
    province: "上海市",
    id: "0b3351ae-c7bb-45ad-a074-d5e9af4e90f6"
  },
  {
    name: "上海交通职业技术学院",
    abbreviation: "scp",
    province: "上海市",
    id: "86f3bf88-b989-4b2c-8eeb-6e9da68cce18"
  },
  {
    name: "上海海事职业技术学院",
    abbreviation: "sma",
    province: "上海市",
    id: "9909ba1f-24a6-4341-9cb5-e9b8f352c0c7"
  },
  {
    name: "上海电子信息职业技术学院",
    abbreviation: "stiei",
    province: "上海市",
    id: "1818b1af-0ffa-4ab7-8b6d-bd1053f814b5"
  },
  {
    name: "上海震旦职业学院",
    abbreviation: "aurora-col",
    province: "上海市",
    id: "1426de29-5b97-42cc-921e-ccdf051d2d0b"
  },
  {
    name: "上海民远职业技术学院",
    abbreviation: "min-yuan",
    province: "上海市",
    id: "4e4f3a64-5914-4804-a134-0927c1d6b7a9"
  },
  {
    name: "上海欧华职业技术学院",
    abbreviation: "shouhua",
    province: "上海市",
    id: "861325c1-b67b-4f98-a418-f1ef637267c5"
  },
  {
    name: "上海思博职业技术学院",
    abbreviation: "shsipo",
    province: "上海市",
    id: "f364b793-5385-4b01-8fed-1bb9d1f8194f"
  },
  {
    name: "上海立达职业技术学院",
    abbreviation: "lidapoly",
    province: "上海市",
    id: "a21240c9-f62e-4f96-81a7-32715de302a7"
  },
  {
    name: "上海工艺美术职业学院",
    abbreviation: "shgymy",
    province: "上海市",
    id: "97c7493f-99d7-47ee-8dde-d1924ee20cbf"
  },
  {
    name: "上海济光职业技术学院",
    abbreviation: "shjgxy",
    province: "上海市",
    id: "28407c14-2636-46c1-af0a-c0a6f57f658e"
  },
  {
    name: "上海工商外国语职业学院",
    abbreviation: "sicfl",
    province: "上海市",
    id: "c1439e08-252d-46a7-8fc5-c15bb2fa9951"
  },
  {
    name: "上海科学技术职业学院",
    abbreviation: "scst",
    province: "上海市",
    id: "72dd712a-7831-4828-9fa8-e301877b1ef5"
  },
  {
    name: "上海农林职业技术学院",
    abbreviation: "shafc",
    province: "上海市",
    id: "9416c05c-84b9-40f0-817f-2bcb3962c5bc"
  },
  {
    name: "上海邦德职业技术学院",
    abbreviation: "shbangde",
    province: "上海市",
    id: "6e0c2765-57ad-435b-8d9c-216365ffadf7"
  },
  {
    name: "上海中侨职业技术学院",
    abbreviation: "shzq",
    province: "上海市",
    id: "5ab1c225-b592-46b3-af0a-a6b7dc838406"
  },
  {
    name: "上海电影艺术职业学院",
    abbreviation: "sfaa",
    province: "上海市",
    id: "7b800501-3c9c-4ff1-b6b2-e2a75d56731c"
  },
  {
    name: "上海中华职业技术学院",
    abbreviation: "zhonghuaco",
    province: "上海市",
    id: "3ddce1f2-a94d-475b-ab93-c1f5b11d1639"
  },
  {
    name: "上海工会管理职业学院",
    abbreviation: "shghxyedu",
    province: "上海市",
    id: "8ece1c7d-b165-4994-9172-383c913c9acd"
  },
  {
    name: "上海体育职业学院",
    abbreviation: "ssi",
    province: "上海市",
    id: "c810c3c2-0a0a-4dfc-b3fd-1e30d6340344"
  },
  {
    name: "上海民航职业技术学院",
    abbreviation: "shcac",
    province: "上海市",
    id: "d8270bd8-979a-48b3-8be4-6edb29719c3d"
  },
  {
    name: "南京大学",
    abbreviation: "nju",
    province: "江苏省",
    id: "f73fe754-58ac-4748-8dd7-50eb21ea57a9"
  },
  {
    name: "苏州大学",
    abbreviation: "suda",
    province: "江苏省",
    id: "8081fe47-d11f-4c30-9489-8fd4de06eafd"
  },
  {
    name: "东南大学",
    abbreviation: "seu",
    province: "江苏省",
    id: "83dd5392-b1d2-44ba-bdd5-80f66806a654"
  },
  {
    name: "南京航空航天大学",
    abbreviation: "nuaa",
    province: "江苏省",
    id: "61940d0b-eb52-40a9-876f-58191b8d7727"
  },
  {
    name: "南京理工大学",
    abbreviation: "njust",
    province: "江苏省",
    id: "634ff69a-bdb0-4c0b-8f8c-67889f9acdb4"
  },
  {
    name: "江苏科技大学",
    abbreviation: "just",
    province: "江苏省",
    id: "1ca8c5bf-2fea-4dbe-8ca3-f147d5709552"
  },
  {
    name: "中国矿业大学",
    abbreviation: "cumt",
    province: "江苏省",
    id: "6d23767b-408d-4cff-8d01-c20720e71ef4"
  },
  {
    name: "南京工业大学",
    abbreviation: "njtech",
    province: "江苏省",
    id: "31edab88-9e99-4c1e-8123-fffd5cc0a7fe"
  },
  {
    name: "常州大学",
    abbreviation: "cczu",
    province: "江苏省",
    id: "9386a9b2-8c30-4a23-a650-59241bb8367a"
  },
  {
    name: "南京邮电大学",
    abbreviation: "njupt",
    province: "江苏省",
    id: "56391230-0aeb-44cd-bb7b-4200649c82f7"
  },
  {
    name: "河海大学",
    abbreviation: "hhu",
    province: "江苏省",
    id: "5a2bf292-1030-4137-94df-667211df99b1"
  },
  {
    name: "江南大学",
    abbreviation: "jiangnan",
    province: "江苏省",
    id: "d3d12e25-0673-44bf-9177-5d27df048597"
  },
  {
    name: "南京林业大学",
    abbreviation: "njfu",
    province: "江苏省",
    id: "3c1c4721-f878-43d2-ae0a-c0b9eee9a461"
  },
  {
    name: "江苏大学",
    abbreviation: "ujs",
    province: "江苏省",
    id: "bedaae35-4dc2-4a64-9e4b-729338baae5b"
  },
  {
    name: "南京信息工程大学",
    abbreviation: "nuist",
    province: "江苏省",
    id: "c1e86b07-af9b-4357-8217-49f3092ec4e0"
  },
  {
    name: "南通大学",
    abbreviation: "ntu",
    province: "江苏省",
    id: "32e5789a-f86a-409c-ab1c-ef031340dd1a"
  },
  {
    name: "盐城工学院",
    abbreviation: "ycit",
    province: "江苏省",
    id: "aebf567f-1ebe-4177-ad24-39ea3a8adfd1"
  },
  {
    name: "南京农业大学",
    abbreviation: "njau",
    province: "江苏省",
    id: "d5619918-1c91-4c64-9757-24244bd06c36"
  },
  {
    name: "南京医科大学",
    abbreviation: "njmu",
    province: "江苏省",
    id: "d48701a1-89f2-4155-807a-87deb5ba9202"
  },
  {
    name: "徐州医科大学",
    abbreviation: "xzmc",
    province: "江苏省",
    id: "da5ff67d-ab1a-4d19-a3c8-2f5f36c91c8f"
  },
  {
    name: "南京中医药大学",
    abbreviation: "njutcm",
    province: "江苏省",
    id: "b55c3d64-17e3-4c45-a249-476a43b02ec5"
  },
  {
    name: "中国药科大学",
    abbreviation: "cpu",
    province: "江苏省",
    id: "7bc6b664-696a-49b6-8e10-00e41f9213f2"
  },
  {
    name: "南京师范大学",
    abbreviation: "njnu",
    province: "江苏省",
    id: "f3d5e7fa-8e5e-4da4-8476-0a4fde20c66b"
  },
  {
    name: "江苏师范大学",
    abbreviation: "jsnu",
    province: "江苏省",
    id: "0d510f94-88c2-4362-b85a-e60c527ab71a"
  },
  {
    name: "淮阴师范学院",
    abbreviation: "hytc",
    province: "江苏省",
    id: "c0642eed-9609-4d21-8214-b0d5ee2096e2"
  },
  {
    name: "盐城师范学院",
    abbreviation: "yctc",
    province: "江苏省",
    id: "d32817da-301b-497f-b963-d43d28b6b211"
  },
  {
    name: "南京财经大学",
    abbreviation: "njue",
    province: "江苏省",
    id: "09eb7703-638f-47f3-a996-5c0d70206626"
  },
  {
    name: "江苏警官学院",
    abbreviation: "jspi",
    province: "江苏省",
    id: "4b5266a1-23bb-4a7a-9409-b057020eb915"
  },
  {
    name: "南京体育学院",
    abbreviation: "nipes",
    province: "江苏省",
    id: "d1fd5349-2fec-42a5-92e5-b20fcb6942cd"
  },
  {
    name: "南京艺术学院",
    abbreviation: "nua",
    province: "江苏省",
    id: "f59b1786-990a-4ffc-bda7-8f9c73910d8f"
  },
  {
    name: "苏州科技大学",
    abbreviation: "usts",
    province: "江苏省",
    id: "38cdeb32-7d6b-4c12-bd97-da425d101a74"
  },
  {
    name: "常熟理工学院",
    abbreviation: "cslg",
    province: "江苏省",
    id: "a24248bb-7488-4637-9059-9ad2f9c11fef"
  },
  {
    name: "淮阴工学院",
    abbreviation: "hyit",
    province: "江苏省",
    id: "f481b873-de69-46b8-884e-c932d47efe4d"
  },
  {
    name: "常州工学院",
    abbreviation: "czu",
    province: "江苏省",
    id: "6c87c599-3ebd-43ef-982a-62defc1cc54f"
  },
  {
    name: "扬州大学",
    abbreviation: "yzu",
    province: "江苏省",
    id: "9a3bbc3f-8275-47f4-aad8-44d96e762f72"
  },
  {
    name: "三江学院",
    abbreviation: "sju",
    province: "江苏省",
    id: "23e6326e-5212-428e-9b70-5eb0896d2509"
  },
  {
    name: "南京工程学院",
    abbreviation: "njit",
    province: "江苏省",
    id: "c2b99dd7-95df-487d-87d7-37148155cd87"
  },
  {
    name: "南京审计大学",
    abbreviation: "nau",
    province: "江苏省",
    id: "fc58cd31-1573-42d2-9fbc-6cfe17c6cc9e"
  },
  {
    name: "南京晓庄学院",
    abbreviation: "njxzc",
    province: "江苏省",
    id: "2f1b3384-4467-490a-9d71-0dc893411b85"
  },
  {
    name: "江苏理工学院",
    abbreviation: "jstu",
    province: "江苏省",
    id: "36b551cd-b3d8-474f-9469-a14caf9eecec"
  },
  {
    name: "淮海工学院",
    abbreviation: "hhit",
    province: "江苏省",
    id: "abc3f251-e3db-46da-9f6d-ecdb61335e47"
  },
  {
    name: "徐州工程学院",
    abbreviation: "xzit",
    province: "江苏省",
    id: "703b06d0-ee0c-45d5-baeb-28c04693e967"
  },
  {
    name: "南京特殊教育师范学院",
    abbreviation: "njts",
    province: "江苏省",
    id: "c2d5ab84-5e75-46e9-af7f-f5b294243095"
  },
  {
    name: "南通理工学院",
    abbreviation: "zlvc",
    province: "江苏省",
    id: "0c8e5c09-fca8-4c2c-9987-005b8b592986"
  },
  {
    name: "南京森林警察学院",
    abbreviation: "forestpoli",
    province: "江苏省",
    id: "0a41b8e3-185a-405b-94dd-babe97b1e94e"
  },
  {
    name: "东南大学成贤学院",
    abbreviation: "seu",
    province: "江苏省",
    id: "8f734d88-f74a-4124-8d19-177c2a5eab76"
  },
  {
    name: "泰州学院",
    abbreviation: "tzu-edu",
    province: "江苏省",
    id: "965a87b0-7252-4692-a45a-6199d85a8a62"
  },
  {
    name: "无锡太湖学院",
    abbreviation: "thxy",
    province: "江苏省",
    id: "99392f9c-540e-4d5c-b175-679a2859ff56"
  },
  {
    name: "金陵科技学院",
    abbreviation: "jit",
    province: "江苏省",
    id: "380b99ea-e080-44c4-bdba-20978683ff2a"
  },
  {
    name: "中国矿业大学徐海学院",
    abbreviation: "cumt",
    province: "江苏省",
    id: "f528daf5-c59f-4196-a254-faadd0cf6367"
  },
  {
    name: "南京大学金陵学院",
    abbreviation: "jlxy",
    province: "江苏省",
    id: "8045e84b-ba78-411f-9bce-195059d2b8b4"
  },
  {
    name: "南京理工大学紫金学院",
    abbreviation: "njust",
    province: "江苏省",
    id: "414c8e49-712c-491f-a5d2-43597e83f611"
  },
  {
    name: "南京航空航天大学金城学院",
    abbreviation: "nuaa",
    province: "江苏省",
    id: "a1003f7b-6fe6-430b-b4d6-8b98513b3e26"
  },
  {
    name: "中国传媒大学南广学院",
    abbreviation: "cucn",
    province: "江苏省",
    id: "a812f721-7d64-475e-abbc-a1de96201cea"
  },
  {
    name: "南京理工大学泰州科技学院",
    abbreviation: "nustti",
    province: "江苏省",
    id: "9268b176-608a-45d7-be82-4a5d0789f63e"
  },
  {
    name: "南京师范大学泰州学院",
    abbreviation: "njnutz",
    province: "江苏省",
    id: "8a15cd0a-cdf2-42c9-95ba-72b7d8730a46"
  },
  {
    name: "南京工业大学浦江学院",
    abbreviation: "njpji",
    province: "江苏省",
    id: "4512107b-98e3-40c8-bf04-edb9992cbf3b"
  },
  {
    name: "南京师范大学中北学院",
    abbreviation: "njnu",
    province: "江苏省",
    id: "9e4c2574-fc6a-4cae-9447-fa9d3d385d42"
  },
  {
    name: "南京医科大学康达学院",
    abbreviation: "njmu",
    province: "江苏省",
    id: "59e2a2e2-9334-4854-8617-59130aeed3fd"
  },
  {
    name: "南京中医药大学翰林学院",
    abbreviation: "hlxy",
    province: "江苏省",
    id: "db6b1cea-fb47-4fd9-a495-379b60d5bc0a"
  },
  {
    name: "南京信息工程大学滨江学院",
    abbreviation: "bjxy",
    province: "江苏省",
    id: "e3136f41-ed34-4197-a7c1-c76393d6c191"
  },
  {
    name: "苏州大学文正学院",
    abbreviation: "sdwz",
    province: "江苏省",
    id: "ceb4dfd4-a405-4b18-9f82-d16ce082bcf6"
  },
  {
    name: "苏州大学应用技术学院",
    abbreviation: "suda",
    province: "江苏省",
    id: "45c140b4-90b2-4b7b-827b-75441b3e1748"
  },
  {
    name: "苏州科技大学天平学院",
    abbreviation: "usts",
    province: "江苏省",
    id: "1de06b2f-f3e1-493b-a411-b140a0087525"
  },
  {
    name: "江苏大学京江学院",
    abbreviation: "ujs",
    province: "江苏省",
    id: "37ca4c84-c8b5-4e9d-ab7f-ebdd56a9d8c3"
  },
  {
    name: "扬州大学广陵学院",
    abbreviation: "yzu",
    province: "江苏省",
    id: "3a2bbde4-e38c-4d3b-8d37-3e3a06ba874f"
  },
  {
    name: "江苏师范大学科文学院",
    abbreviation: "xznu",
    province: "江苏省",
    id: "b8132931-e418-4309-b894-412f9fa89d15"
  },
  {
    name: "南京邮电大学通达学院",
    abbreviation: "tdxy",
    province: "江苏省",
    id: "7ff7ebfa-07f6-4557-818c-597ab8fcdc12"
  },
  {
    name: "南京财经大学红山学院",
    abbreviation: "njue",
    province: "江苏省",
    id: "b019bbae-ad12-439f-a12d-25749285b869"
  },
  {
    name: "江苏科技大学苏州理工学院",
    abbreviation: "just",
    province: "江苏省",
    id: "1ec03170-c9cc-4c39-b05a-fc002ad37b9e"
  },
  {
    name: "常州大学怀德学院",
    abbreviation: "cczu",
    province: "江苏省",
    id: "b009cd16-d1da-4945-a22a-4f7e513443bc"
  },
  {
    name: "南通大学杏林学院",
    abbreviation: "ntu",
    province: "江苏省",
    id: "6d135a4f-494d-402d-848c-f207e602ba3a"
  },
  {
    name: "南京审计学院金审学院",
    abbreviation: "nau",
    province: "江苏省",
    id: "cba8bde7-6cca-4a33-a9d5-44c7e98221f9"
  },
  {
    name: "宿迁学院",
    abbreviation: "sqc",
    province: "江苏省",
    id: "5b9e3ec0-fae6-41a8-8d9a-e00a45a49473"
  },
  {
    name: "江苏第二师范学院",
    abbreviation: "jssnu",
    province: "江苏省",
    id: "805b70ec-1637-4962-b31a-abc182c176f4"
  },
  {
    name: "西交利物浦大学",
    abbreviation: "xjtlu",
    province: "江苏省",
    id: "dbe4705c-567a-43db-8e93-ccc0f995adc6"
  },
  {
    name: "昆山杜克大学",
    abbreviation: "edu",
    province: "江苏省",
    id: "50d5fe02-cade-4d79-b33a-1503e5cbdcb2"
  },
  {
    name: "盐城幼儿师范高等专科学校",
    abbreviation: "yfysz",
    province: "江苏省",
    id: "b425aa37-5104-4530-8fe3-80807cd69480"
  },
  {
    name: "苏州幼儿师范高等专科学校",
    abbreviation: "szys",
    province: "江苏省",
    id: "ff01e37b-0caa-4dae-ac48-9469799d8012"
  },
  {
    name: "民办明达职业技术学院",
    abbreviation: "mdut",
    province: "江苏省",
    id: "6d02a2a5-8cd2-4896-b4aa-0dbf46f9df5e"
  },
  {
    name: "无锡职业技术学院",
    abbreviation: "wxit",
    province: "江苏省",
    id: "e207126d-5263-44fa-81f8-e8a0b498958d"
  },
  {
    name: "江苏建筑职业技术学院",
    abbreviation: "xzcat",
    province: "江苏省",
    id: "928201b5-00ae-4b22-bb92-4a3c97b9e8ae"
  },
  {
    name: "南京工业职业技术学院",
    abbreviation: "niit",
    province: "江苏省",
    id: "7ff03c8e-4729-4e07-a8a3-8c2554701517"
  },
  {
    name: "江苏工程职业技术学院",
    abbreviation: "nttec",
    province: "江苏省",
    id: "7dac0794-5038-4d6c-b553-733cb5fbde5c"
  },
  {
    name: "苏州工艺美术职业技术学院",
    abbreviation: "sgmart",
    province: "江苏省",
    id: "4606cc07-33d6-4ee1-8e1a-1d30b1e68262"
  },
  {
    name: "连云港职业技术学院",
    abbreviation: "lygtc",
    province: "江苏省",
    id: "13e3ef0a-95f3-4025-8460-52745b6fc280"
  },
  {
    name: "镇江市高等专科学校",
    abbreviation: "zjc",
    province: "江苏省",
    id: "fd02be9b-dd88-40b3-bdb8-4685b37cb1ed"
  },
  {
    name: "南通职业大学",
    abbreviation: "ntvc",
    province: "江苏省",
    id: "bf8b9553-0611-414c-969c-e880d5baee9f"
  },
  {
    name: "苏州职业大学",
    abbreviation: "jssvc",
    province: "江苏省",
    id: "3df4cac3-180e-4e40-9e2e-6be787ab6f61"
  },
  {
    name: "沙洲职业工学院",
    abbreviation: "szit",
    province: "江苏省",
    id: "6da0b076-f97d-4a7a-a7a2-ab9ef5953bce"
  },
  {
    name: "扬州市职业大学",
    abbreviation: "yzpc",
    province: "江苏省",
    id: "cfbb55e0-ce32-4bb2-96c5-47a4b60d51bb"
  },
  {
    name: "连云港师范高等专科学校",
    abbreviation: "lygsf",
    province: "江苏省",
    id: "79ebe7e9-c684-4786-a099-4aaccdf3fb33"
  },
  {
    name: "江苏经贸职业技术学院",
    abbreviation: "jseti",
    province: "江苏省",
    id: "64b5ba08-d830-4e22-b3e1-3146c66e677e"
  },
  {
    name: "九州职业技术学院",
    abbreviation: "jznu",
    province: "江苏省",
    id: "774d0c97-6c99-4bcb-a528-29a8b2902d45"
  },
  {
    name: "硅湖职业技术学院",
    abbreviation: "usl",
    province: "江苏省",
    id: "16852bf9-0093-4019-9bdc-fb40d0b43ebc"
  },
  {
    name: "泰州职业技术学院",
    abbreviation: "tzpc",
    province: "江苏省",
    id: "85356b27-fa2b-4b68-b6d3-8c3a66528aa8"
  },
  {
    name: "常州信息职业技术学院",
    abbreviation: "ccit",
    province: "江苏省",
    id: "88c3c94f-c815-49f5-8c61-b95b1f88f0ad"
  },
  {
    name: "江苏联合职业技术学院",
    abbreviation: "juti",
    province: "江苏省",
    id: "a42368c1-589e-4f40-a1dd-e324eb434ace"
  },
  {
    name: "江苏海事职业技术学院",
    abbreviation: "jmi",
    province: "江苏省",
    id: "9571ea7e-3907-42d9-9a4a-0b60e3f6c5a2"
  },
  {
    name: "应天职业技术学院",
    abbreviation: "ytc",
    province: "江苏省",
    id: "4473b969-96b7-4306-b268-35947b0ff3a4"
  },
  {
    name: "无锡科技职业学院",
    abbreviation: "wxstc",
    province: "江苏省",
    id: "0e1fdc13-0ef9-4a40-8edc-2eec8176c349"
  },
  {
    name: "江苏医药职业学院",
    abbreviation: "jsycmc",
    province: "江苏省",
    id: "0c78e59f-b159-426f-9b45-c7c01b18bb87"
  },
  {
    name: "扬州环境资源职业技术学院",
    abbreviation: "yzerc",
    province: "江苏省",
    id: "2d9b1754-bfab-456e-b067-4a18808ab8e5"
  },
  {
    name: "南通科技职业学院",
    abbreviation: "ntac",
    province: "江苏省",
    id: "20e1e681-f346-44d7-b65e-e3ecbad95151"
  },
  {
    name: "苏州经贸职业技术学院",
    abbreviation: "szjm",
    province: "江苏省",
    id: "37a37e95-66f0-4295-a569-35194b002ae1"
  },
  {
    name: "苏州工业职业技术学院",
    abbreviation: "siit",
    province: "江苏省",
    id: "28b53d01-c15f-4ae8-91c7-6e7e98e67db5"
  },
  {
    name: "苏州托普信息职业技术学院",
    abbreviation: "szetop",
    province: "江苏省",
    id: "83153a5d-c4eb-4b22-8af7-b52aff5b7bdc"
  },
  {
    name: "苏州卫生职业技术学院",
    abbreviation: "szmtc",
    province: "江苏省",
    id: "36f36c3f-a4e8-4c68-9c07-1230c4fdfcdd"
  },
  {
    name: "无锡商业职业技术学院",
    abbreviation: "jscpu",
    province: "江苏省",
    id: "b9ab1bdf-4174-421e-a8e9-2170bdf8c67b"
  },
  {
    name: "南通航运职业技术学院",
    abbreviation: "ntsc",
    province: "江苏省",
    id: "d45cde3e-17e6-4660-8f59-12d9c90c366b"
  },
  {
    name: "南京交通职业技术学院",
    abbreviation: "njci",
    province: "江苏省",
    id: "58dc2d0a-6de3-462b-89c0-4bd6ec2a1e2c"
  },
  {
    name: "淮安信息职业技术学院",
    abbreviation: "hcit",
    province: "江苏省",
    id: "807b6e94-3007-4439-8190-fca4e900562e"
  },
  {
    name: "江苏农牧科技职业学院",
    abbreviation: "jsahvc",
    province: "江苏省",
    id: "ff48afdd-a718-4783-9e65-d45f85b1e02a"
  },
  {
    name: "常州纺织服装职业技术学院",
    abbreviation: "cztgi",
    province: "江苏省",
    id: "eb1d938a-2cf7-4886-bd3e-3b5bd6e07234"
  },
  {
    name: "苏州农业职业技术学院",
    abbreviation: "szai",
    province: "江苏省",
    id: "df749b32-7617-4166-83e3-5076d5d0ffe1"
  },
  {
    name: "苏州工业园区职业技术学院",
    abbreviation: "sipivt",
    province: "江苏省",
    id: "119bac88-5f92-45f3-a08a-f31105e8389a"
  },
  {
    name: "太湖创意职业技术学院",
    abbreviation: "thcyzy",
    province: "江苏省",
    id: "0e648dd7-e1f4-46c9-9077-eba893cce05d"
  },
  {
    name: "炎黄职业技术学院",
    abbreviation: "yhust",
    province: "江苏省",
    id: "28578b90-409b-4bda-8a10-cd5777594dd0"
  },
  {
    name: "南京科技职业学院",
    abbreviation: "njcc",
    province: "江苏省",
    id: "24d79f6d-b3de-4a1e-9e58-9989649199f4"
  },
  {
    name: "正德职业技术学院",
    abbreviation: "zdxy",
    province: "江苏省",
    id: "d2bf97b5-2f2b-4106-b42c-ec854cdad5b9"
  },
  {
    name: "钟山职业技术学院",
    abbreviation: "zscollege",
    province: "江苏省",
    id: "80f02619-1327-4be5-bfdd-080f04adde37"
  },
  {
    name: "无锡南洋职业技术学院",
    abbreviation: "wsoc",
    province: "江苏省",
    id: "507f89f0-cdd4-44c2-8f69-c9c99ba09630"
  },
  {
    name: "江南影视艺术职业学院",
    abbreviation: "jnys",
    province: "江苏省",
    id: "b5987262-c1f7-46e5-9868-40f86cf1e7c5"
  },
  {
    name: "金肯职业技术学院",
    abbreviation: "jku",
    province: "江苏省",
    id: "6e05ada0-91cc-4433-b98d-d9b346c472ce"
  },
  {
    name: "常州轻工职业技术学院",
    abbreviation: "czili",
    province: "江苏省",
    id: "e5df037f-23bc-4836-9911-9719844c9992"
  },
  {
    name: "常州工程职业技术学院",
    abbreviation: "czie",
    province: "江苏省",
    id: "94686ac2-020b-4329-bb5c-6e46ab1ea48a"
  },
  {
    name: "江苏农林职业技术学院",
    abbreviation: "jsafc",
    province: "江苏省",
    id: "b24fcc57-4b97-4096-ba90-010c8f22f8e5"
  },
  {
    name: "江苏食品药品职业技术学院",
    abbreviation: "jsfsc",
    province: "江苏省",
    id: "e0f3b602-954f-4ac7-8639-51d0988a0f14"
  },
  {
    name: "建东职业技术学院",
    abbreviation: "czjdu",
    province: "江苏省",
    id: "4fb18217-81f1-4ac1-8fad-1addac4fca88"
  },
  {
    name: "南京铁道职业技术学院",
    abbreviation: "njrts",
    province: "江苏省",
    id: "d2343864-26c5-4985-9a20-26c2e4fb740f"
  },
  {
    name: "徐州工业职业技术学院",
    abbreviation: "xzcit",
    province: "江苏省",
    id: "0d3eeb85-de6b-4635-bab9-43fcc54a94e7"
  },
  {
    name: "江苏信息职业技术学院",
    abbreviation: "jsit",
    province: "江苏省",
    id: "54cd46c3-41e3-4da0-a3f3-ca2c92e6b6eb"
  },
  {
    name: "宿迁职业技术学院",
    abbreviation: "sqzyxy",
    province: "江苏省",
    id: "253fc10d-4158-4ca5-9efc-725b6ad148fa"
  },
  {
    name: "南京信息职业技术学院",
    abbreviation: "njcit",
    province: "江苏省",
    id: "3f9e9d82-3e85-4744-bc45-ffa1e6397d59"
  },
  {
    name: "江海职业技术学院",
    abbreviation: "jhu",
    province: "江苏省",
    id: "2d3036fc-f94e-4d21-bebb-fd6c0ac2a6e7"
  },
  {
    name: "常州机电职业技术学院",
    abbreviation: "czmec",
    province: "江苏省",
    id: "9792e205-5c9a-4898-8fa7-9868712e8444"
  },
  {
    name: "江阴职业技术学院",
    abbreviation: "jypc",
    province: "江苏省",
    id: "bf60ffcd-99e0-4ecd-8478-722c52cab199"
  },
  {
    name: "无锡城市职业技术学院",
    abbreviation: "wxcsxy",
    province: "江苏省",
    id: "705c7143-a298-4b49-a3ea-c578bd9e3ef6"
  },
  {
    name: "无锡工艺职业技术学院",
    abbreviation: "wxgyxy",
    province: "江苏省",
    id: "6fc5a427-6edb-4329-83f5-4092055405fe"
  },
  {
    name: "金山职业技术学院",
    abbreviation: "jinshan-cn",
    province: "江苏省",
    id: "4f3a7cc6-3561-4094-8e85-18d3c8090c09"
  },
  {
    name: "苏州健雄职业技术学院",
    abbreviation: "wjxvtc",
    province: "江苏省",
    id: "421a5765-e33c-43e4-aeca-e0030e2a791e"
  },
  {
    name: "盐城工业职业技术学院",
    abbreviation: "yctei",
    province: "江苏省",
    id: "e2612731-69f4-4a38-8c4c-d8aad6f9b03e"
  },
  {
    name: "江苏财经职业技术学院",
    abbreviation: "jscjxy",
    province: "江苏省",
    id: "846dbc30-568c-4c53-8e01-5ed6d55414d6"
  },
  {
    name: "扬州工业职业技术学院",
    abbreviation: "ypi",
    province: "江苏省",
    id: "b5bcba18-8e20-487e-b7d2-d0d16c44cdbe"
  },
  {
    name: "苏州百年职业学院",
    abbreviation: "scc",
    province: "江苏省",
    id: "f1a9ca75-f754-4f5f-8412-e2599f0da041"
  },
  {
    name: "昆山登云科技职业学院",
    abbreviation: "dyc",
    province: "江苏省",
    id: "587dfdcf-b00b-422a-957a-7f1d46ed6f23"
  },
  {
    name: "南京视觉艺术职业学院",
    abbreviation: "niva",
    province: "江苏省",
    id: "e575b08b-c09d-4c29-88ea-87cf748163fd"
  },
  {
    name: "江苏城市职业学院",
    abbreviation: "jscvc",
    province: "江苏省",
    id: "3728a565-ee9f-49a1-a0c3-f92465cd76c8"
  },
  {
    name: "南京城市职业学院",
    abbreviation: "ncc",
    province: "江苏省",
    id: "a467b9b5-9fcf-4d31-ac19-bddb3ace3c88"
  },
  {
    name: "南京机电职业技术学院",
    abbreviation: "njcmee",
    province: "江苏省",
    id: "a423a1e1-4a37-4c6e-81bc-8d180233bf54"
  },
  {
    name: "苏州高博软件技术职业学院",
    abbreviation: "gist",
    province: "江苏省",
    id: "f34d859c-4fec-4060-977e-61a60874e3f1"
  },
  {
    name: "南京旅游职业学院",
    abbreviation: "jltu",
    province: "江苏省",
    id: "2aa3f9eb-4ad2-48ce-a28b-73d3197cf6e0"
  },
  {
    name: "江苏卫生健康职业学院",
    abbreviation: "jssmu",
    province: "江苏省",
    id: "08a48c23-3b2f-4031-8283-7102dce059e0"
  },
  {
    name: "苏州信息职业技术学院",
    abbreviation: "szitu",
    province: "江苏省",
    id: "344a922e-6a5f-4ebd-b42b-344d898e6e95"
  },
  {
    name: "宿迁泽达职业技术学院",
    abbreviation: "zdct",
    province: "江苏省",
    id: "08a0c15f-9849-419b-af39-862b2afa16a4"
  },
  {
    name: "苏州工业园区服务外包职业学院",
    abbreviation: "siso",
    province: "江苏省",
    id: "b94c5b3f-03df-4b62-bf6d-b975a4dc25f1"
  },
  {
    name: "徐州幼儿师范高等专科学校",
    abbreviation: "xzys",
    province: "江苏省",
    id: "5e0408d7-2eff-4f99-9b17-dd27d2ee2d89"
  },
  {
    name: "徐州生物工程职业技术学院",
    abbreviation: "xzsw",
    province: "江苏省",
    id: "878f0805-920f-44f6-9911-b0889619bcf0"
  },
  {
    name: "江苏商贸职业学院",
    abbreviation: "ntgx",
    province: "江苏省",
    id: "dc3d18a7-9d5b-4304-83d3-57abd93430ad"
  },
  {
    name: "南通师范高等专科学校",
    abbreviation: "ntgs",
    province: "江苏省",
    id: "e6029f4e-3b85-4b0f-96cd-a5bc7822e1a0"
  },
  {
    name: "扬州中瑞酒店职业学院",
    abbreviation: "yhiedu",
    province: "江苏省",
    id: "45fe5078-7023-44bb-ad9a-06c246127957"
  },
  {
    name: "江苏护理职业学院",
    abbreviation: "jshywx",
    province: "江苏省",
    id: "0cb0dc94-cacb-488c-84e0-6f7cce9e433d"
  },
  {
    name: "江苏财会职业学院",
    abbreviation: "lygcx",
    province: "江苏省",
    id: "0e4ff4df-a6ea-4e7e-8f98-88ecd0d36038"
  },
  {
    name: "江苏城乡建设职业学院",
    abbreviation: "js-cj",
    province: "江苏省",
    id: "a05a5e02-aaf8-470f-8763-bf8b4ae8cbba"
  },
  {
    name: "江苏航空职业技术学院",
    abbreviation: "jatc",
    province: "江苏省",
    id: "8149559d-432a-43df-a177-637c9cb665a7"
  },
  {
    name: "江苏安全技术职业学院",
    abbreviation: "xzjdgz",
    province: "江苏省",
    id: "e2f8b0be-3dec-4ee6-b73d-cfb92c65633c"
  },
  {
    name: "江苏旅游职业学院",
    abbreviation: "jsyzsx",
    province: "江苏省",
    id: "49a92da5-3e81-419a-b455-5d948e1c2d9a"
  },
  {
    name: "昆山登云科技职业学院",
    abbreviation: "dyc",
    province: "江苏省",
    id: "d3bf7cbd-610a-4331-9e0e-4a4296b46caf"
  },
  {
    name: "南京视觉艺术职业学院",
    abbreviation: "niva",
    province: "江苏省",
    id: "59a246bc-0bab-43d2-9bfb-5b4eee67da54"
  },
  {
    name: "浙江大学",
    abbreviation: "zju",
    province: "浙江省",
    id: "7699ce3c-e544-439d-961b-54b7b05e8828"
  },
  {
    name: "杭州电子科技大学",
    abbreviation: "hdu",
    province: "浙江省",
    id: "e633dbc0-6957-4693-b49d-036e9e1dfa67"
  },
  {
    name: "浙江工业大学",
    abbreviation: "zjut",
    province: "浙江省",
    id: "5c7201c9-4867-4e7a-8302-152cf8c2f70e"
  },
  {
    name: "浙江理工大学",
    abbreviation: "zstu",
    province: "浙江省",
    id: "333b0f68-cdf5-427d-a98a-8879e34a74b0"
  },
  {
    name: "浙江海洋大学",
    abbreviation: "zjou",
    province: "浙江省",
    id: "4b6334d1-b74a-4ad9-8e86-c7f915587b98"
  },
  {
    name: "浙江农林大学",
    abbreviation: "zafu",
    province: "浙江省",
    id: "256dc0eb-a6cb-4e59-bdeb-76940967e868"
  },
  {
    name: "温州医科大学",
    abbreviation: "wzmc",
    province: "浙江省",
    id: "8d7846af-37c5-4edf-a03d-27e78991646c"
  },
  {
    name: "浙江中医药大学",
    abbreviation: "zjtcm",
    province: "浙江省",
    id: "05814715-f958-4741-b623-5c0e96e12305"
  },
  {
    name: "浙江师范大学",
    abbreviation: "zjnu",
    province: "浙江省",
    id: "c597e387-2c4d-44c2-b639-83be61e64b3b"
  },
  {
    name: "杭州师范大学",
    abbreviation: "hznu",
    province: "浙江省",
    id: "0b09391d-5242-42f8-944f-5429b21610e1"
  },
  {
    name: "湖州师范学院",
    abbreviation: "hutc",
    province: "浙江省",
    id: "88ba22bb-d7bc-412f-bfc5-0af244fb1b31"
  },
  {
    name: "绍兴文理学院",
    abbreviation: "usx",
    province: "浙江省",
    id: "99fbc84c-db86-4785-a66c-c0fd5239e786"
  },
  {
    name: "台州学院",
    abbreviation: "tzc",
    province: "浙江省",
    id: "fa3f5be4-c35a-411e-b557-242462a4926d"
  },
  {
    name: "温州大学",
    abbreviation: "wzu",
    province: "浙江省",
    id: "215c9aa8-4842-4313-872a-acf4b4a62059"
  },
  {
    name: "丽水学院",
    abbreviation: "lsu",
    province: "浙江省",
    id: "83a15823-973f-4c22-be0d-51ae5fb6ffc0"
  },
  {
    name: "浙江工商大学",
    abbreviation: "hzic",
    province: "浙江省",
    id: "1118495f-3f94-474b-a6b0-80a8f237e83c"
  },
  {
    name: "嘉兴学院",
    abbreviation: "zjxu",
    province: "浙江省",
    id: "1dedc52f-57fd-4c3a-85f5-eb51d23894b6"
  },
  {
    name: "中国美术学院",
    abbreviation: "caa",
    province: "浙江省",
    id: "7d59bec0-0295-46d2-b853-2b11dc324a07"
  },
  {
    name: "中国计量大学",
    abbreviation: "cjlu",
    province: "浙江省",
    id: "01197966-d913-4bc0-8c53-13ca549108cc"
  },
  {
    name: "公安海警学院",
    abbreviation: "hjgz",
    province: "浙江省",
    id: "858c312c-66ee-417a-b595-fe21c219f98e"
  },
  {
    name: "浙江万里学院",
    abbreviation: "zjwu",
    province: "浙江省",
    id: "1df05144-17ae-430b-8753-a9f706e14c8a"
  },
  {
    name: "浙江科技学院",
    abbreviation: "zust",
    province: "浙江省",
    id: "6a5d4699-bc00-412c-802f-e3c7dd331897"
  },
  {
    name: "宁波工程学院",
    abbreviation: "nbut",
    province: "浙江省",
    id: "cbd5e31f-58f3-455f-9ae2-dba81056a459"
  },
  {
    name: "浙江水利水电学院",
    abbreviation: "zjweu",
    province: "浙江省",
    id: "661c5aca-b836-4738-90b0-98e522803cbe"
  },
  {
    name: "浙江财经大学",
    abbreviation: "zufe",
    province: "浙江省",
    id: "b2003d9a-daca-4dc3-8a1e-3cfa07f41de7"
  },
  {
    name: "浙江警察学院",
    abbreviation: "zjjcxy",
    province: "浙江省",
    id: "8afe2f45-110f-455b-9a6f-176ee8f369eb"
  },
  {
    name: "衢州学院",
    abbreviation: "qzu",
    province: "浙江省",
    id: "7ae8a40b-3af0-49d3-bd1c-ad91d2b64790"
  },
  {
    name: "宁波大学",
    abbreviation: "nbu",
    province: "浙江省",
    id: "8b83f196-7f49-4cc5-80fc-d31981d57887"
  },
  {
    name: "浙江传媒学院",
    abbreviation: "zjicm",
    province: "浙江省",
    id: "3b85c4d9-19e4-4d19-becd-9a62cacac874"
  },
  {
    name: "浙江树人学院",
    abbreviation: "zjsru",
    province: "浙江省",
    id: "1eac7df4-ef7c-4bd3-993c-f02e250051a1"
  },
  {
    name: "浙江越秀外国语学院",
    abbreviation: "zyufl",
    province: "浙江省",
    id: "aaa8754b-04ca-4cb4-9b42-ec80dd6b54b8"
  },
  {
    name: "宁波大红鹰学院",
    abbreviation: "dhyedu",
    province: "浙江省",
    id: "a336e2eb-7944-4fa3-be16-255b490edf87"
  },
  {
    name: "浙江大学城市学院",
    abbreviation: "zucc",
    province: "浙江省",
    id: "326be951-71f2-40c3-8518-b6776a4aa994"
  },
  {
    name: "浙江大学宁波理工学院",
    abbreviation: "nit",
    province: "浙江省",
    id: "5e51f20e-8908-4e11-86c5-9e815f3f3f09"
  },
  {
    name: "杭州医学院",
    abbreviation: "hmc",
    province: "浙江省",
    id: "a71c116f-f494-47e8-9a10-5447175fee2d"
  },
  {
    name: "浙江工业大学之江学院",
    abbreviation: "zjc",
    province: "浙江省",
    id: "58fe260f-d7a5-4c21-ab0c-60f48187b421"
  },
  {
    name: "浙江师范大学行知学院",
    abbreviation: "zjnu",
    province: "浙江省",
    id: "17a12725-7c07-4fb1-b3ed-36cdbadc843e"
  },
  {
    name: "宁波大学科学技术学院",
    abbreviation: "ndkjxy",
    province: "浙江省",
    id: "cca0f0f5-759b-411a-ae4f-df9ea4ee1452"
  },
  {
    name: "杭州电子科技大学信息工程学院",
    abbreviation: "hdu",
    province: "浙江省",
    id: "6087d331-aa2d-48c9-a52a-46f92afc342b"
  },
  {
    name: "浙江理工大学科技与艺术学院",
    abbreviation: "ky",
    province: "浙江省",
    id: "0ccfc3ad-ace6-49e7-a6e0-bf2fad5d3a41"
  },
  {
    name: "浙江海洋大学东海科学技术学院",
    abbreviation: "zjou",
    province: "浙江省",
    id: "8754dc54-9fdd-4ea7-ae94-7b8196734c47"
  },
  {
    name: "浙江农林大学暨阳学院",
    abbreviation: "zjyc",
    province: "浙江省",
    id: "74460448-e0eb-4fa1-8e10-2989b5793b6f"
  },
  {
    name: "温州医科大学仁济学院",
    abbreviation: "wzmc",
    province: "浙江省",
    id: "5b840ac2-e669-450a-a876-30b9c69c9e6f"
  },
  {
    name: "浙江中医药大学滨江学院",
    abbreviation: "zjtcm",
    province: "浙江省",
    id: "96d09ca7-c8bd-4fe0-b140-5bd515f246a0"
  },
  {
    name: "杭州师范大学钱江学院",
    abbreviation: "hznu",
    province: "浙江省",
    id: "8057d6b5-56f4-4cda-8028-6f81c85eee9f"
  },
  {
    name: "湖州师范学院求真学院",
    abbreviation: "hutc",
    province: "浙江省",
    id: "408b591a-95ed-4041-893a-690e609c72ba"
  },
  {
    name: "绍兴文理学院元培学院",
    abbreviation: "ypcol",
    province: "浙江省",
    id: "6e7a2743-5223-47c3-9ed3-892482d11c5c"
  },
  {
    name: "温州大学瓯江学院",
    abbreviation: "ojc",
    province: "浙江省",
    id: "7a362c33-a3ed-4fab-bed1-95a3869282d4"
  },
  {
    name: "浙江工商大学杭州商学院",
    abbreviation: "zjgsu",
    province: "浙江省",
    id: "c9526165-9d34-4544-b9b5-ab773f9ed9e6"
  },
  {
    name: "嘉兴学院南湖学院",
    abbreviation: "zjxu",
    province: "浙江省",
    id: "ddd05bb8-8721-4d83-863c-76b231652912"
  },
  {
    name: "中国计量大学现代科技学院",
    abbreviation: "cjlu",
    province: "浙江省",
    id: "99e473d3-8066-4816-8419-005fffc1a29b"
  },
  {
    name: "浙江财经大学东方学院",
    abbreviation: "zufedfc",
    province: "浙江省",
    id: "44d74d9f-c378-4543-87ae-ec22d0e256f9"
  },
  {
    name: "温州商学院",
    abbreviation: "wzbc",
    province: "浙江省",
    id: "73a4cd5d-f9d9-457b-a381-e5940b3f726e"
  },
  {
    name: "同济大学浙江学院",
    abbreviation: "tjzj",
    province: "浙江省",
    id: "25f5dc51-6315-40bb-a357-9f021b49fb34"
  },
  {
    name: "上海财经大学浙江学院",
    abbreviation: "shufe-zj",
    province: "浙江省",
    id: "d3dea183-a9c1-4dc3-80c8-6b517b74bc6a"
  },
  {
    name: "浙江外国语学院",
    abbreviation: "zisu",
    province: "浙江省",
    id: "25441e09-40eb-4be2-a4a7-6388d5fdcd9a"
  },
  {
    name: "浙江音乐学院",
    abbreviation: "zjcm",
    province: "浙江省",
    id: "d66c6de6-520e-4744-a7c1-0190a7099eff"
  },
  {
    name: "宁波诺丁汉大学",
    abbreviation: "nottingham",
    province: "浙江省",
    id: "be3b11d0-4ec8-4258-899f-73d362972d45"
  },
  {
    name: "温州肯恩大学",
    abbreviation: "wku",
    province: "浙江省",
    id: "4ab967ec-d579-4dfb-82aa-53c3948f7e3c"
  },
  {
    name: "宁波职业技术学院",
    abbreviation: "nbptweb",
    province: "浙江省",
    id: "ced7dcf7-bc66-4366-bf64-45494f37290e"
  },
  {
    name: "温州职业技术学院",
    abbreviation: "wzvtc",
    province: "浙江省",
    id: "57d8cda2-1955-4d6f-a9d0-6b1ccf1dc2eb"
  },
  {
    name: "浙江交通职业技术学院",
    abbreviation: "zjvtit",
    province: "浙江省",
    id: "307025f4-66d1-4c02-bb4e-c860b9d4b55f"
  },
  {
    name: "金华职业技术学院",
    abbreviation: "jhc",
    province: "浙江省",
    id: "f372b547-7be9-490c-9590-b23c709684ba"
  },
  {
    name: "宁波城市职业技术学院",
    abbreviation: "nbcc",
    province: "浙江省",
    id: "73711013-75d8-4b04-ae5a-9abbb454d9a5"
  },
  {
    name: "浙江同济科技职业学院",
    abbreviation: "zjtongji",
    province: "浙江省",
    id: "e0825ea2-0434-4dcf-96c6-8911522f8c60"
  },
  {
    name: "浙江工商职业技术学院",
    abbreviation: "zjbti",
    province: "浙江省",
    id: "f3ee4bc9-5f56-4199-ae5b-a8f75dab8dac"
  },
  {
    name: "台州职业技术学院",
    abbreviation: "tzvtc",
    province: "浙江省",
    id: "279ae9e0-3a3c-4f13-8dd8-985449632d7e"
  },
  {
    name: "浙江工贸职业技术学院",
    abbreviation: "zjitc",
    province: "浙江省",
    id: "52cd9555-0e33-4e92-b427-450810d7313d"
  },
  {
    name: "浙江医药高等专科学校",
    abbreviation: "zjpc",
    province: "浙江省",
    id: "815bcb0e-f4c8-4cb4-9b2a-55b8d119b7c4"
  },
  {
    name: "浙江机电职业技术学院",
    abbreviation: "zime",
    province: "浙江省",
    id: "969cd41c-25ba-4ea5-847f-fcb329e9c34e"
  },
  {
    name: "浙江建设职业技术学院",
    abbreviation: "zjjy",
    province: "浙江省",
    id: "274fac0c-411f-43bd-b83b-b2151312fe95"
  },
  {
    name: "浙江艺术职业学院",
    abbreviation: "zj-art",
    province: "浙江省",
    id: "c6aef338-bf37-4c0d-a4cd-f93e44dd828d"
  },
  {
    name: "浙江经贸职业技术学院",
    abbreviation: "zjiet",
    province: "浙江省",
    id: "4dad2130-549e-4318-be27-fc12d2a82bf6"
  },
  {
    name: "浙江商业职业技术学院",
    abbreviation: "zjvcc",
    province: "浙江省",
    id: "34622d83-9b59-412b-8836-6e2e0716b80b"
  },
  {
    name: "浙江经济职业技术学院",
    abbreviation: "zjtie",
    province: "浙江省",
    id: "e32acb9a-6a0c-499b-8013-fa1998838edf"
  },
  {
    name: "浙江旅游职业学院",
    abbreviation: "tczj",
    province: "浙江省",
    id: "eec6d614-141c-4f2d-abaa-2fd38ff17084"
  },
  {
    name: "浙江育英职业技术学院",
    abbreviation: "zjyyc",
    province: "浙江省",
    id: "28b42e5c-bf9a-4b13-9252-8aa30db4f92a"
  },
  {
    name: "浙江警官职业学院",
    abbreviation: "zjjy",
    province: "浙江省",
    id: "1ac5b938-f2a6-4a61-b9a1-d6b37a86a016"
  },
  {
    name: "浙江金融职业学院",
    abbreviation: "zfc",
    province: "浙江省",
    id: "93c8b807-59d1-4de6-b1eb-b08c58198efb"
  },
  {
    name: "浙江工业职业技术学院",
    abbreviation: "zjipc",
    province: "浙江省",
    id: "e5480891-537b-4e44-9ef2-47ee720c4b15"
  },
  {
    name: "杭州职业技术学院",
    abbreviation: "hzvtc",
    province: "浙江省",
    id: "ed65b769-69f3-4d24-8efe-16e3ec158247"
  },
  {
    name: "嘉兴职业技术学院",
    abbreviation: "jxvtc",
    province: "浙江省",
    id: "03711c76-ebd6-411d-899d-db3546e8a000"
  },
  {
    name: "湖州职业技术学院",
    abbreviation: "hzvtc",
    province: "浙江省",
    id: "6ff2da82-a2f6-43f9-b87d-aab0636dabe3"
  },
  {
    name: "绍兴职业技术学院",
    abbreviation: "sxvtc",
    province: "浙江省",
    id: "06609f50-f5b6-43bb-84bb-c211c754032e"
  },
  {
    name: "衢州职业技术学院",
    abbreviation: "qzct",
    province: "浙江省",
    id: "c31c526c-6332-4e67-bc50-f3357d0270a9"
  },
  {
    name: "丽水职业技术学院",
    abbreviation: "lszjy",
    province: "浙江省",
    id: "2f4dc55d-9d08-43c8-b22a-deac52fd1bf6"
  },
  {
    name: "浙江东方职业技术学院",
    abbreviation: "zjdfc",
    province: "浙江省",
    id: "3494c119-5f96-4c34-bb03-216c64ed93e1"
  },
  {
    name: "义乌工商职业技术学院",
    abbreviation: "ywu",
    province: "浙江省",
    id: "182e1864-4951-4a54-be73-d2959db05be6"
  },
  {
    name: "浙江纺织服装职业技术学院",
    abbreviation: "zjff",
    province: "浙江省",
    id: "60e7ca45-0c22-408a-941c-c963e91b1c72"
  },
  {
    name: "杭州科技职业技术学院",
    abbreviation: "hzaspt",
    province: "浙江省",
    id: "492e8ed0-8a40-4ba0-802f-a0437b998e24"
  },
  {
    name: "浙江长征职业技术学院",
    abbreviation: "zjczxy",
    province: "浙江省",
    id: "364f5019-18bd-486a-83c1-75d2f2eee59c"
  },
  {
    name: "嘉兴南洋职业技术学院",
    abbreviation: "jxnyc",
    province: "浙江省",
    id: "042d6381-574f-4c49-8c56-b5062b9a481e"
  },
  {
    name: "浙江广厦建设职业技术学院",
    abbreviation: "guangshaxy",
    province: "浙江省",
    id: "56bf8dd3-8d40-4690-8b4b-cc17f942ffe2"
  },
  {
    name: "杭州万向职业技术学院",
    abbreviation: "wxpoly",
    province: "浙江省",
    id: "534d2c14-2f81-4423-9e10-b1daba3216d5"
  },
  {
    name: "浙江邮电职业技术学院",
    abbreviation: "zptc",
    province: "浙江省",
    id: "a2bace6e-e64e-4699-a6e1-5aba77e6f4b1"
  },
  {
    name: "宁波卫生职业技术学院",
    abbreviation: "nchs",
    province: "浙江省",
    id: "7d74dad5-2583-46b3-bda9-d2145adfc28b"
  },
  {
    name: "台州科技职业学院",
    abbreviation: "tzvcst",
    province: "浙江省",
    id: "3ba24497-1173-49e4-88b3-fd75d3533723"
  },
  {
    name: "浙江国际海运职业技术学院",
    abbreviation: "zimc",
    province: "浙江省",
    id: "313656fd-ea1d-4843-844c-60e7d1fcc332"
  },
  {
    name: "浙江体育职业技术学院",
    abbreviation: "zjcs",
    province: "浙江省",
    id: "ce15c3a8-dc89-476a-94a8-fb4a2fdabd12"
  },
  {
    name: "温州科技职业学院",
    abbreviation: "wzvcst",
    province: "浙江省",
    id: "11c22ae2-800b-4cb3-b0f3-77eb96e1cfee"
  },
  {
    name: "浙江汽车职业技术学院",
    abbreviation: "geelyedu",
    province: "浙江省",
    id: "94810d12-dd7e-4fb8-abcf-9c261b1f128b"
  },
  {
    name: "浙江横店影视职业学院",
    abbreviation: "zjhyxy",
    province: "浙江省",
    id: "fc27dd8b-10a3-477b-a5e2-b649c4998201"
  },
  {
    name: "浙江农业商贸职业学院",
    abbreviation: "znszy",
    province: "浙江省",
    id: "ce5f824f-d1b1-4c40-968b-aeb4fe50badf"
  },
  {
    name: "浙江特殊教育职业学院",
    abbreviation: "zjtjxy",
    province: "浙江省",
    id: "f8735dc6-edd1-45e6-b5a8-2205f4f8e5be"
  },
  {
    name: "浙江安防职业技术学院",
    abbreviation: "zjist",
    province: "浙江省",
    id: "96f93170-a30f-4d95-821f-660117f8ea2e"
  },
  {
    name: "浙江舟山群岛新区旅游与健康职业学院",
    abbreviation: "zsthc",
    province: "浙江省",
    id: "cdd45957-e6b9-44cc-ad00-d1cf61657c75"
  },
  {
    name: "安徽大学",
    abbreviation: "ahu",
    province: "安徽省",
    id: "5abc89a0-9d34-4ad4-8584-9e12d788e7b1"
  },
  {
    name: "中国科学技术大学",
    abbreviation: "ustc",
    province: "安徽省",
    id: "4e1242cb-d681-4f26-beb7-a916a8670091"
  },
  {
    name: "合肥工业大学",
    abbreviation: "hfut",
    province: "安徽省",
    id: "126610da-ca22-4a00-8dd0-0dd57e587f6f"
  },
  {
    name: "安徽工业大学",
    abbreviation: "ahut",
    province: "安徽省",
    id: "a8a4c936-4f83-4d71-8466-ea2f34bb7008"
  },
  {
    name: "安徽理工大学",
    abbreviation: "aust",
    province: "安徽省",
    id: "f13ed7c0-da9a-4ac5-bb58-f9dfca85a163"
  },
  {
    name: "安徽工程大学",
    abbreviation: "ahpu",
    province: "安徽省",
    id: "3cf468a3-995d-4b97-8920-a8ffdb5160ca"
  },
  {
    name: "安徽农业大学",
    abbreviation: "ahau",
    province: "安徽省",
    id: "68062c9d-ee48-4918-9d0c-5b08c1cdf666"
  },
  {
    name: "安徽医科大学",
    abbreviation: "ahmu",
    province: "安徽省",
    id: "8f91449d-31bd-4248-a391-1155f0cbbe2f"
  },
  {
    name: "蚌埠医学院",
    abbreviation: "bbmc",
    province: "安徽省",
    id: "bcf9aaf9-b475-4841-860e-534ff6bd8b5e"
  },
  {
    name: "皖南医学院",
    abbreviation: "wnmc",
    province: "安徽省",
    id: "7d8e1e85-6688-440c-af6c-2c018d8cbac4"
  },
  {
    name: "安徽中医药大学",
    abbreviation: "ahtcm",
    province: "安徽省",
    id: "7fdb64ba-785e-4eee-862d-3f26f82a1dc8"
  },
  {
    name: "安徽师范大学",
    abbreviation: "ahnu",
    province: "安徽省",
    id: "876535a5-1c75-4cf6-9b69-eb32c543471a"
  },
  {
    name: "阜阳师范学院",
    abbreviation: "fync",
    province: "安徽省",
    id: "fa156364-b191-4c71-9f89-cd33b4e42d35"
  },
  {
    name: "安庆师范大学",
    abbreviation: "aqnu",
    province: "安徽省",
    id: "d386dce0-b864-494b-a60c-414d9d1df218"
  },
  {
    name: "淮北师范大学",
    abbreviation: "hbcnc",
    province: "安徽省",
    id: "facd0bb8-9088-4332-8fc8-d6cee19982f7"
  },
  {
    name: "黄山学院",
    abbreviation: "hsu",
    province: "安徽省",
    id: "560eb76b-a230-454b-ae9d-dbca3d790ef3"
  },
  {
    name: "皖西学院",
    abbreviation: "wxc",
    province: "安徽省",
    id: "83dbbd89-c558-4156-a5f4-ccbd0fc7c626"
  },
  {
    name: "滁州学院",
    abbreviation: "chzu",
    province: "安徽省",
    id: "ad5c9a08-6695-4f05-99ea-3a0ae0bec725"
  },
  {
    name: "安徽财经大学",
    abbreviation: "aufe",
    province: "安徽省",
    id: "a514ec65-e406-4be9-91eb-3ebd5f4126bd"
  },
  {
    name: "宿州学院",
    abbreviation: "ahsztc",
    province: "安徽省",
    id: "c32285a7-c4fb-407c-9a37-44a53357b1c7"
  },
  {
    name: "巢湖学院",
    abbreviation: "chtc",
    province: "安徽省",
    id: "95cf1ed0-72a6-4365-b89c-a3ba7a0084bd"
  },
  {
    name: "淮南师范学院",
    abbreviation: "hnnu",
    province: "安徽省",
    id: "142d8ea0-0316-480a-89b3-9f32b71a49be"
  },
  {
    name: "铜陵学院",
    abbreviation: "tlc",
    province: "安徽省",
    id: "8e551996-c127-4985-94e9-f47abe16074e"
  },
  {
    name: "安徽建筑大学",
    abbreviation: "ahjzu",
    province: "安徽省",
    id: "86072834-5611-4757-a343-7aca0e2c7696"
  },
  {
    name: "安徽科技学院",
    abbreviation: "ahstu",
    province: "安徽省",
    id: "6754cb6a-fb3c-4850-808b-46bb45b6ca79"
  },
  {
    name: "安徽三联学院",
    abbreviation: "sanlian",
    province: "安徽省",
    id: "9f046165-3f81-435a-918f-ffd433f5e090"
  },
  {
    name: "合肥学院",
    abbreviation: "hfuu",
    province: "安徽省",
    id: "48774044-0eb3-4be2-8a10-5d527356f70b"
  },
  {
    name: "蚌埠学院",
    abbreviation: "bbc",
    province: "安徽省",
    id: "27054251-3d82-4b90-b711-4827b44e7cd2"
  },
  {
    name: "池州学院",
    abbreviation: "czu",
    province: "安徽省",
    id: "90f382d9-ae30-4316-bfdb-118ba3204a2c"
  },
  {
    name: "安徽新华学院",
    abbreviation: "axhu",
    province: "安徽省",
    id: "e5597a4b-22f2-496a-ba3e-4db55ba4a985"
  },
  {
    name: "安徽文达信息工程学院",
    abbreviation: "wendaedu",
    province: "安徽省",
    id: "790a2f05-983f-4d16-b0f3-29afe419532d"
  },
  {
    name: "亳州学院",
    abbreviation: "bzuu",
    province: "安徽省",
    id: "e853240e-4b03-4e49-976b-2379ae8115e6"
  },
  {
    name: "安徽外国语学院",
    abbreviation: "aflc",
    province: "安徽省",
    id: "49b8cbd1-4e9b-4bda-ac08-486f3de8cedc"
  },
  {
    name: "安徽财经大学商学院",
    abbreviation: "aufe",
    province: "安徽省",
    id: "e06fe8ae-e3de-4f2d-8381-a2ba98e5fec7"
  },
  {
    name: "安徽大学江淮学院",
    abbreviation: "ahujhc",
    province: "安徽省",
    id: "efc68b3a-0759-4bc0-8f8f-27cfecc3ba5f"
  },
  {
    name: "安徽信息工程学院",
    abbreviation: "ahpumec",
    province: "安徽省",
    id: "75c4e84e-c773-4374-a7f8-81a8a6a09064"
  },
  {
    name: "安徽工业大学工商学院",
    abbreviation: "ahut",
    province: "安徽省",
    id: "ba7b493f-1e01-4633-a5be-aca0dd005ac5"
  },
  {
    name: "安徽建筑大学城市建设学院",
    abbreviation: "aiai",
    province: "安徽省",
    id: "3d507db6-f61b-4c9a-9236-dfa7d4d574ff"
  },
  {
    name: "安徽农业大学经济技术学院",
    abbreviation: "ahau",
    province: "安徽省",
    id: "66f69d60-aeed-434d-b106-0aef7559c349"
  },
  {
    name: "安徽师范大学皖江学院",
    abbreviation: "ahnu",
    province: "安徽省",
    id: "5fae673a-79b6-4719-a56b-266c6ad03e94"
  },
  {
    name: "安徽医科大学临床医学院",
    abbreviation: "ahmu",
    province: "安徽省",
    id: "83b44051-b668-4e58-a22a-1e919779e2fa"
  },
  {
    name: "阜阳师范学院信息工程学院",
    abbreviation: "fync",
    province: "安徽省",
    id: "838b29c2-0420-4b03-ae72-18e611410492"
  },
  {
    name: "淮北师范大学信息学院",
    abbreviation: "hbcnc",
    province: "安徽省",
    id: "a821e2f5-40f3-4fe1-9918-7f91a82d558a"
  },
  {
    name: "合肥师范学院",
    abbreviation: "hfnu",
    province: "安徽省",
    id: "65d05969-2e1b-43a4-8e6b-8cae6d2b3322"
  },
  {
    name: "河海大学文天学院",
    abbreviation: "hhu",
    province: "安徽省",
    id: "a5ebab0f-44c9-4a93-88c3-336d6c24e1fa"
  },
  {
    name: "安徽职业技术学院",
    abbreviation: "ahzybys",
    province: "安徽省",
    id: "fa3cb0f8-0b72-4a4e-aa15-20724b66af3f"
  },
  {
    name: "淮北职业技术学院",
    abbreviation: "hbvtc",
    province: "安徽省",
    id: "a8cfd67c-1475-48af-a0c4-53df37ad0684"
  },
  {
    name: "芜湖职业技术学院",
    abbreviation: "whptu",
    province: "安徽省",
    id: "e614d6a2-7dc9-410f-9045-9fe971e6a69e"
  },
  {
    name: "淮南联合大学",
    abbreviation: "hnuu",
    province: "安徽省",
    id: "42cdc03b-d291-4afe-8c37-4fa41b03a2f6"
  },
  {
    name: "安徽商贸职业技术学院",
    abbreviation: "abc",
    province: "安徽省",
    id: "6c820f4d-5caa-4923-94b6-13471e27d4e0"
  },
  {
    name: "安徽水利水电职业技术学院",
    abbreviation: "ahsdxy",
    province: "安徽省",
    id: "764e8fce-eee3-4dd3-9f3d-2505de65e988"
  },
  {
    name: "阜阳职业技术学院",
    abbreviation: "fyvtc",
    province: "安徽省",
    id: "2d4a4f70-c346-4335-9966-991095da53d5"
  },
  {
    name: "铜陵职业技术学院",
    abbreviation: "tlpt",
    province: "安徽省",
    id: "8206eeb2-9e8a-41c1-a6bd-2c994558ce45"
  },
  {
    name: "民办万博科技职业学院",
    abbreviation: "wbc",
    province: "安徽省",
    id: "053b78c9-3742-4657-b9c8-4a9e9fd1bffe"
  },
  {
    name: "安徽警官职业学院",
    abbreviation: "ahjgxy",
    province: "安徽省",
    id: "a995b618-875d-4569-9839-53c1f4a04f15"
  },
  {
    name: "淮南职业技术学院",
    abbreviation: "hnvtc",
    province: "安徽省",
    id: "c1ba1f52-7890-447f-9372-fd700f4f9df6"
  },
  {
    name: "安徽工业经济职业技术学院",
    abbreviation: "ahiec",
    province: "安徽省",
    id: "25d9132e-bed7-44a4-93cf-004c935394f3"
  },
  {
    name: "合肥通用职业技术学院",
    abbreviation: "hftyxy",
    province: "安徽省",
    id: "c44e73ed-b781-48f7-b147-566f123160ef"
  },
  {
    name: "安徽工贸职业技术学院",
    abbreviation: "ahgmedu",
    province: "安徽省",
    id: "94a5f1a2-1e3b-490f-a781-9e887b722af3"
  },
  {
    name: "宿州职业技术学院",
    abbreviation: "szzy",
    province: "安徽省",
    id: "352feb5d-3712-4b30-b959-b960b0de5bcf"
  },
  {
    name: "六安职业技术学院",
    abbreviation: "lvtc",
    province: "安徽省",
    id: "53bb218b-c9f8-4dfc-bae6-9d7903e8f422"
  },
  {
    name: "安徽电子信息职业技术学院",
    abbreviation: "avceit",
    province: "安徽省",
    id: "ca2dbd99-1a65-4e12-b8af-4061f1117b34"
  },
  {
    name: "民办合肥经济技术职业学院",
    abbreviation: "hfet",
    province: "安徽省",
    id: "e9188993-cef7-4ad8-9c5c-efc992f27f91"
  },
  {
    name: "安徽交通职业技术学院",
    abbreviation: "ahctc",
    province: "安徽省",
    id: "86d20562-c79b-4e11-9cfe-7948faaec7ee"
  },
  {
    name: "安徽体育运动职业技术学院",
    abbreviation: "ahty",
    province: "安徽省",
    id: "9d0d702c-2d7d-4248-9340-b5a9747125c0"
  },
  {
    name: "安徽中医药高等专科学校",
    abbreviation: "ahzyygz",
    province: "安徽省",
    id: "7fe977fb-c3e0-45c8-bebe-9f56ca9875f1"
  },
  {
    name: "安徽医学高等专科学校",
    abbreviation: "ahyz",
    province: "安徽省",
    id: "123de35a-a7ad-4727-a506-d65feffbe5a9"
  },
  {
    name: "合肥职业技术学院",
    abbreviation: "chzy",
    province: "安徽省",
    id: "2288e0cc-e48a-481e-b246-fbea519f4dcb"
  },
  {
    name: "滁州职业技术学院",
    abbreviation: "czc",
    province: "安徽省",
    id: "f0afdcf6-a04a-4c1c-a647-765ce13b74bc"
  },
  {
    name: "池州职业技术学院",
    abbreviation: "czgz",
    province: "安徽省",
    id: "db73cd14-a925-4e75-bf25-66f164332b57"
  },
  {
    name: "宣城职业技术学院",
    abbreviation: "xczy",
    province: "安徽省",
    id: "c9da8ea5-e820-4138-90ef-d0fc42b1f9a8"
  },
  {
    name: "安徽广播影视职业技术学院",
    abbreviation: "amtc",
    province: "安徽省",
    id: "da79c40e-4e73-45fe-99ba-5a00b1e6857a"
  },
  {
    name: "民办合肥滨湖职业技术学院",
    abbreviation: "hfbhxy",
    province: "安徽省",
    id: "d8edece0-e2ab-4b1a-9211-4cae360bca46"
  },
  {
    name: "安徽电气工程职业技术学院",
    abbreviation: "aepu",
    province: "安徽省",
    id: "c6eb2ea8-a828-4608-8604-7ade6e5dac5b"
  },
  {
    name: "安徽冶金科技职业学院",
    abbreviation: "ahyky",
    province: "安徽省",
    id: "c28a52bc-a658-473b-b896-c7d4c9c91b96"
  },
  {
    name: "安徽城市管理职业学院",
    abbreviation: "cmoc",
    province: "安徽省",
    id: "4851942c-ef10-4aef-9869-947e7ebc14e8"
  },
  {
    name: "安徽机电职业技术学院",
    abbreviation: "ahcme",
    province: "安徽省",
    id: "809bb0c5-d735-4b2b-808a-a731b40f4098"
  },
  {
    name: "安徽工商职业学院",
    abbreviation: "ahbvc",
    province: "安徽省",
    id: "96dc962a-320d-4e5c-bcda-f34ef8b4f922"
  },
  {
    name: "安徽中澳科技职业学院",
    abbreviation: "acac",
    province: "安徽省",
    id: "e7bd2c79-183e-45ed-8128-6fb9bf26c583"
  },
  {
    name: "阜阳科技职业学院",
    abbreviation: "fky",
    province: "安徽省",
    id: "7a91cc9f-f6c3-4286-9908-66cfc7188b40"
  },
  {
    name: "亳州职业技术学院",
    abbreviation: "bzvtc",
    province: "安徽省",
    id: "cdf6e2dd-9d46-4d72-9a95-3311c7edaafc"
  },
  {
    name: "安徽国防科技职业学院",
    abbreviation: "ahgf",
    province: "安徽省",
    id: "51c152ee-428e-4bc8-b201-c678dd713855"
  },
  {
    name: "安庆职业技术学院",
    abbreviation: "aqvtc",
    province: "安徽省",
    id: "831007c1-6667-4350-aa7b-1590a1944072"
  },
  {
    name: "安徽艺术职业学院",
    abbreviation: "artah",
    province: "安徽省",
    id: "d81fb48b-4d08-4081-bcc1-81e2ad0c7ab6"
  },
  {
    name: "马鞍山师范高等专科学校",
    abbreviation: "massz",
    province: "安徽省",
    id: "70bc5d48-9cbf-427a-bed6-3bca7604ea3b"
  },
  {
    name: "安徽财贸职业学院",
    abbreviation: "aftvc",
    province: "安徽省",
    id: "a93bbe95-c872-46f2-898d-20e4874ea800"
  },
  {
    name: "安徽国际商务职业学院",
    abbreviation: "ahiib",
    province: "安徽省",
    id: "ee08abd6-f962-4f41-9db7-3759cc206668"
  },
  {
    name: "安徽公安职业学院",
    abbreviation: "ahgaxy",
    province: "安徽省",
    id: "d783ccfd-7c71-425f-90d0-e745d9cd3687"
  },
  {
    name: "安徽林业职业技术学院",
    abbreviation: "ahlyxy",
    province: "安徽省",
    id: "8eab2036-13cc-49b2-92f4-89757c068f1c"
  },
  {
    name: "安徽审计职业学院",
    abbreviation: "ahsjxy",
    province: "安徽省",
    id: "8d3c6b98-8205-4c78-aa80-b5d362354213"
  },
  {
    name: "安徽新闻出版职业技术学院",
    abbreviation: "ahcbxy",
    province: "安徽省",
    id: "773db1c4-454b-46d0-b165-99dedda5b477"
  },
  {
    name: "安徽邮电职业技术学院",
    abbreviation: "ahptc",
    province: "安徽省",
    id: "609bf43c-d7ee-4e1b-b42d-15172d245ea4"
  },
  {
    name: "安徽工业职业技术学院",
    abbreviation: "ahip",
    province: "安徽省",
    id: "42bda91f-6479-4a2a-9d55-52498cdeb24b"
  },
  {
    name: "民办合肥财经职业学院",
    abbreviation: "hffe",
    province: "安徽省",
    id: "985aa633-406d-45c7-bb0f-755bc9929568"
  },
  {
    name: "安庆医药高等专科学校",
    abbreviation: "aqyyz",
    province: "安徽省",
    id: "6aa64ab2-c73d-4758-91ad-ed3dd420f20b"
  },
  {
    name: "安徽涉外经济职业学院",
    abbreviation: "ahaec-edu",
    province: "安徽省",
    id: "756362cb-66d2-49d0-91f9-deba804bef17"
  },
  {
    name: "安徽绿海商务职业学院",
    abbreviation: "lhub",
    province: "安徽省",
    id: "19c9740b-ce70-4d04-b757-b1ec70fee470"
  },
  {
    name: "合肥共达职业技术学院",
    abbreviation: "hfut",
    province: "安徽省",
    id: "8b320832-e684-429b-b7d5-224c115baf91"
  },
  {
    name: "蚌埠经济技术职业学院",
    abbreviation: "bjy",
    province: "安徽省",
    id: "e5430a37-e11c-437e-abac-83b5d239c50d"
  },
  {
    name: "民办安徽旅游职业学院",
    abbreviation: "ahlyedu",
    province: "安徽省",
    id: "eb4f81ec-e182-40a4-862c-e48688f49b59"
  },
  {
    name: "徽商职业学院",
    abbreviation: "huishanged",
    province: "安徽省",
    id: "4876356e-5d99-4173-9fe1-a138c4540e37"
  },
  {
    name: "马鞍山职业技术学院",
    abbreviation: "mastc",
    province: "安徽省",
    id: "293100c6-5a30-4407-b399-7cde10245904"
  },
  {
    name: "安徽现代信息工程职业学院",
    abbreviation: "ahmodern",
    province: "安徽省",
    id: "d640eb06-8f70-4051-b8b6-5859d15273c2"
  },
  {
    name: "安徽矿业职业技术学院",
    abbreviation: "anhky",
    province: "安徽省",
    id: "64c51407-3eb0-4753-8297-865e81761f06"
  },
  {
    name: "合肥信息技术职业学院",
    abbreviation: "hfitu",
    province: "安徽省",
    id: "7eb7adfc-e8bc-4209-9a76-55ba58c405fb"
  },
  {
    name: "桐城师范高等专科学校",
    abbreviation: "tcsfgz",
    province: "安徽省",
    id: "4d7b531d-d19d-4578-a830-89c5c714dda0"
  },
  {
    name: "黄山职业技术学院",
    abbreviation: "hszyxy",
    province: "安徽省",
    id: "2f067fc6-c248-42f7-81cc-56d2c9b31b3d"
  },
  {
    name: "滁州城市职业学院",
    abbreviation: "czcvc",
    province: "安徽省",
    id: "a4d3e060-82db-4e94-9680-b9ee75b8225d"
  },
  {
    name: "安徽汽车职业技术学院",
    abbreviation: "jacedu",
    province: "安徽省",
    id: "1d2be171-3ec8-4f24-8ff0-ba1fb2987e28"
  },
  {
    name: "皖西卫生职业学院",
    abbreviation: "wxwsxy",
    province: "安徽省",
    id: "58d8497f-6caa-4b83-b190-a6294f57853d"
  },
  {
    name: "合肥幼儿师范高等专科学校",
    abbreviation: "hfpec",
    province: "安徽省",
    id: "e19557cb-ebe3-45bb-9211-98bc33a7bafc"
  },
  {
    name: "安徽长江职业学院",
    abbreviation: "ahcjxy",
    province: "安徽省",
    id: "c9b9fc2d-5d64-4c7c-a071-9f2cc67be9b9"
  },
  {
    name: "安徽扬子职业技术学院",
    abbreviation: "yangzixuey",
    province: "安徽省",
    id: "49d1a2bd-b2e9-414b-9ecd-3efe9eb66f41"
  },
  {
    name: "安徽黄梅戏艺术职业学院",
    abbreviation: "ahmxx",
    province: "安徽省",
    id: "fe891f3e-b636-4f81-9070-5c362e7e33bc"
  },
  {
    name: "安徽粮食工程职业学院",
    abbreviation: "ahlsxy",
    province: "安徽省",
    id: "70de9075-f71f-4dd9-a0aa-857d29183f3b"
  },
  {
    name: "安徽卫生健康职业学院",
    abbreviation: "ahrkxy",
    province: "安徽省",
    id: "53ad69b7-5f12-4b2d-9c77-7029046599a3"
  },
  {
    name: "合肥科技职业学院",
    abbreviation: "hstu",
    province: "安徽省",
    id: "81974cec-9c9c-413e-901f-d083991d6cf1"
  },
  {
    name: "皖北卫生职业学院",
    abbreviation: "wbwsxy",
    province: "安徽省",
    id: "777517d9-64fe-434c-8c85-fea13eabf53c"
  },
  {
    name: "阜阳幼儿师范高等专科学校",
    abbreviation: "fysf",
    province: "安徽省",
    id: "5069014d-8aa2-4cd1-ae24-9103ec7a3c59"
  },
  {
    name: "厦门大学",
    abbreviation: "xmu",
    province: "福建省",
    id: "9c3af375-7688-408c-a266-7f1865063b54"
  },
  {
    name: "华侨大学",
    abbreviation: "hqu",
    province: "福建省",
    id: "abc41262-ff8b-45fa-8c9f-7889241ca97b"
  },
  {
    name: "福州大学",
    abbreviation: "fzu",
    province: "福建省",
    id: "7091d2b3-ed43-4682-b7a1-44d7f6fd2e5b"
  },
  {
    name: "福建工程学院",
    abbreviation: "fjut",
    province: "福建省",
    id: "6f3986f7-84d8-406f-bf43-761ebdcba248"
  },
  {
    name: "福建农林大学",
    abbreviation: "fafu",
    province: "福建省",
    id: "6134ab41-0c07-4289-b93f-7dfde89041fe"
  },
  {
    name: "集美大学",
    abbreviation: "jmu",
    province: "福建省",
    id: "c048ef05-5a04-43de-b9ee-939bc91b6ea2"
  },
  {
    name: "福建医科大学",
    abbreviation: "fjmu",
    province: "福建省",
    id: "a03a3351-2deb-4eca-ac09-a464f650f45f"
  },
  {
    name: "福建中医药大学",
    abbreviation: "fjtcm",
    province: "福建省",
    id: "be9b03f8-b9af-4afe-8ba4-2250fe8db14a"
  },
  {
    name: "福建师范大学",
    abbreviation: "fjnu",
    province: "福建省",
    id: "c88864fe-170d-4f8b-b58a-c038b66c7678"
  },
  {
    name: "闽江学院",
    abbreviation: "mju",
    province: "福建省",
    id: "292dbd2d-8b42-4223-9cce-a1f53a1e2c5d"
  },
  {
    name: "武夷学院",
    abbreviation: "nptc",
    province: "福建省",
    id: "fe287d51-a0ac-4723-aa75-971f705ebb1e"
  },
  {
    name: "宁德师范学院",
    abbreviation: "ndsz",
    province: "福建省",
    id: "73ab7aee-0ecd-41c8-9de3-2270ccabbfd2"
  },
  {
    name: "泉州师范学院",
    abbreviation: "qztc",
    province: "福建省",
    id: "0bfc3db0-ca4a-4d7c-8d6d-508589acc93c"
  },
  {
    name: "闽南师范大学",
    abbreviation: "fjzs",
    province: "福建省",
    id: "e3be5445-f0b3-44a8-9614-f2959b2391ea"
  },
  {
    name: "厦门理工学院",
    abbreviation: "xmut",
    province: "福建省",
    id: "c8b8d2e1-7603-4996-94be-22ee75a17a2f"
  },
  {
    name: "三明学院",
    abbreviation: "fjsmu",
    province: "福建省",
    id: "9b7988a2-3ecc-4af3-aacb-46be0e072bb1"
  },
  {
    name: "龙岩学院",
    abbreviation: "lyun",
    province: "福建省",
    id: "e2c63a8a-1c9a-4f4a-879b-e38e6b8c2208"
  },
  {
    name: "福建商学院",
    abbreviation: "fjcc",
    province: "福建省",
    id: "f9d0b1a5-3b01-4952-902e-35edb427f4a1"
  },
  {
    name: "福建警察学院",
    abbreviation: "fjpsc",
    province: "福建省",
    id: "cfd9b009-bff9-43ca-a7f3-43e5aaea81a3"
  },
  {
    name: "莆田学院",
    abbreviation: "101",
    province: "福建省",
    id: "9265497d-f12b-4f09-b48e-194b5d82c2da"
  },
  {
    name: "仰恩大学",
    abbreviation: "yeu",
    province: "福建省",
    id: "ebfecc78-733c-409f-891d-0c1b8bf1e3d1"
  },
  {
    name: "厦门医学院",
    abbreviation: "xmmc",
    province: "福建省",
    id: "17213db9-7b85-4a9f-b729-71ac3bd9e3e3"
  },
  {
    name: "厦门华厦学院",
    abbreviation: "hxxy",
    province: "福建省",
    id: "1cd31da3-326a-4b89-95c6-2cbc677246c1"
  },
  {
    name: "闽南理工学院",
    abbreviation: "mnust",
    province: "福建省",
    id: "b06fa7de-5d18-489e-a79e-5a69bc426904"
  },
  {
    name: "福建师范大学闽南科技学院",
    abbreviation: "mnkjxy",
    province: "福建省",
    id: "7eed98bf-d955-42b2-8f52-31a8dbb5a7d9"
  },
  {
    name: "福建农林大学东方学院",
    abbreviation: "fafuoc",
    province: "福建省",
    id: "f37d4a56-c6ac-4138-87f5-93fb1739eeb6"
  },
  {
    name: "厦门工学院",
    abbreviation: "xit",
    province: "福建省",
    id: "6cf5a852-2042-4e95-b86c-8036ae4d86d0"
  },
  {
    name: "阳光学院",
    abbreviation: "fzu",
    province: "福建省",
    id: "c980f22c-e33c-40f7-91ed-c72414db5284"
  },
  {
    name: "厦门大学嘉庚学院",
    abbreviation: "xmu",
    province: "福建省",
    id: "a1e3628b-ae0c-4cc3-b5e5-009158afd3ac"
  },
  {
    name: "福州大学至诚学院",
    abbreviation: "fdzcxy",
    province: "福建省",
    id: "f3f51ad2-2643-4ef5-8eeb-55954f09f28a"
  },
  {
    name: "集美大学诚毅学院",
    abbreviation: "jmu",
    province: "福建省",
    id: "b90de5c4-46a8-44a2-a09c-f3c7635921e4"
  },
  {
    name: "福建师范大学协和学院",
    abbreviation: "fjnu",
    province: "福建省",
    id: "faca2d45-1cb2-44ab-8c0a-0b1a7db43d0e"
  },
  {
    name: "福州外语外贸学院",
    abbreviation: "fzfu",
    province: "福建省",
    id: "4e777f0e-0d61-498e-b40e-aedbf5a76044"
  },
  {
    name: "福建江夏学院",
    abbreviation: "jxxyc",
    province: "福建省",
    id: "51c3b1c4-d1a6-43c0-9bb2-c98e4ae6b548"
  },
  {
    name: "泉州信息工程学院",
    abbreviation: "qziedu",
    province: "福建省",
    id: "696a04fc-d816-4e48-b443-ff12af11e738"
  },
  {
    name: "福州理工学院",
    abbreviation: "hxcollege",
    province: "福建省",
    id: "2bf681ea-c9a4-4a52-bc8a-c0adb0ac3c38"
  },
  {
    name: "福建农林大学金山学院",
    abbreviation: "fjau",
    province: "福建省",
    id: "1418a8c5-3534-4b1a-ac91-ab707c68f904"
  },
  {
    name: "福建船政交通职业学院",
    abbreviation: "fjcpc",
    province: "福建省",
    id: "272c81d3-e16e-47b5-a054-80b5d65286df"
  },
  {
    name: "漳州职业技术学院",
    abbreviation: "fjzzit",
    province: "福建省",
    id: "cfccca6f-aac2-4ba2-89e2-22839bc69cf1"
  },
  {
    name: "闽西职业技术学院",
    abbreviation: "mxdx",
    province: "福建省",
    id: "797e17a7-d4ea-432a-ad2c-e04cd05df38d"
  },
  {
    name: "黎明职业大学",
    abbreviation: "lmu",
    province: "福建省",
    id: "9434de20-5541-4ce6-9173-c2da8a1ece28"
  },
  {
    name: "福建华南女子职业学院",
    abbreviation: "hnwomen",
    province: "福建省",
    id: "f4d2ae5c-1930-452b-8fb3-e3e27dfefd39"
  },
  {
    name: "福州职业技术学院",
    abbreviation: "fvti",
    province: "福建省",
    id: "f4fcdb17-5768-4f79-9989-7a0e57b33722"
  },
  {
    name: "福建林业职业技术学院",
    abbreviation: "fjlzy",
    province: "福建省",
    id: "54649ae0-8ad3-42d2-9cab-afca8677b31f"
  },
  {
    name: "福建信息职业技术学院",
    abbreviation: "mitu",
    province: "福建省",
    id: "d6b24037-ba25-4924-83d9-4eee267b8814"
  },
  {
    name: "福建水利电力职业技术学院",
    abbreviation: "fjsdxy",
    province: "福建省",
    id: "5de2ec63-bf0f-4fc2-8eb7-9d2881e0c496"
  },
  {
    name: "福建电力职业技术学院",
    abbreviation: "fjdy",
    province: "福建省",
    id: "7ec88fc8-bd7e-4a2f-aae9-7e29aa443d3e"
  },
  {
    name: "厦门海洋职业技术学院",
    abbreviation: "xmoc",
    province: "福建省",
    id: "c5f921fb-921e-48cb-ab90-3e17354280cf"
  },
  {
    name: "福建农业职业技术学院",
    abbreviation: "fjny",
    province: "福建省",
    id: "25d8bb60-282e-4e6c-bbc6-81980299c5d3"
  },
  {
    name: "福建卫生职业技术学院",
    abbreviation: "fjwx",
    province: "福建省",
    id: "db9b088f-b6c2-422f-bafe-90e66c45b7ee"
  },
  {
    name: "泉州医学高等专科学校",
    abbreviation: "qzygz",
    province: "福建省",
    id: "bff45a90-4320-4c21-b45d-bcb25518fc05"
  },
  {
    name: "福州英华职业学院",
    abbreviation: "fzacc",
    province: "福建省",
    id: "3c1bfe56-a552-48cf-a49b-67ad7e915ee6"
  },
  {
    name: "泉州纺织服装职业学院",
    abbreviation: "qzfzfz",
    province: "福建省",
    id: "dbf929b6-0575-4061-b46b-d521566ac426"
  },
  {
    name: "泉州华光职业学院",
    abbreviation: "hgu",
    province: "福建省",
    id: "e313d586-4b39-409a-9777-381c6279928e"
  },
  {
    name: "泉州理工职业学院",
    abbreviation: "qzit",
    province: "福建省",
    id: "d4b17dfc-8201-4be0-b8ef-2c1d9bd57be2"
  },
  {
    name: "闽北职业技术学院",
    abbreviation: "mbu",
    province: "福建省",
    id: "e61aba11-7b6a-4d8a-b986-40500dd94d01"
  },
  {
    name: "福州黎明职业技术学院",
    abbreviation: "fzlmxy",
    province: "福建省",
    id: "bbbb7f3e-22e5-4e03-be42-a370a8c7b332"
  },
  {
    name: "厦门演艺职业学院",
    abbreviation: "xmyanyi",
    province: "福建省",
    id: "557b7b7e-dde1-4b93-a34b-c56d1a0b6d83"
  },
  {
    name: "厦门华天涉外职业技术学院",
    abbreviation: "xmht",
    province: "福建省",
    id: "faf5b8e1-aeca-4444-b579-f64724344386"
  },
  {
    name: "福州科技职业技术学院",
    abbreviation: "fzstc",
    province: "福建省",
    id: "5d684ea8-12c0-43bd-b470-a80a0baa1408"
  },
  {
    name: "泉州经贸职业技术学院",
    abbreviation: "qzjmc",
    province: "福建省",
    id: "d4635b6c-cc75-48a1-9a27-d039ed3a35a2"
  },
  {
    name: "福建对外经济贸易职业技术学院",
    abbreviation: "fibec",
    province: "福建省",
    id: "fb4507db-747c-4ffa-818c-f7e6f6d8d7de"
  },
  {
    name: "湄洲湾职业技术学院",
    abbreviation: "fjmzw",
    province: "福建省",
    id: "7cc54d5b-22ba-4176-a9a2-4ecdd99ae799"
  },
  {
    name: "福建生物工程职业技术学院",
    abbreviation: "fjvcb",
    province: "福建省",
    id: "255e931e-215d-41bf-bc99-5d89fb93e75b"
  },
  {
    name: "福建艺术职业学院",
    abbreviation: "fjyszyxy",
    province: "福建省",
    id: "db820c4b-a834-4eda-9c9e-e1dfdefe7e6a"
  },
  {
    name: "福建幼儿师范高等专科学校",
    abbreviation: "fj61",
    province: "福建省",
    id: "1be8e98e-a51f-488c-9db2-a86450c6458f"
  },
  {
    name: "厦门城市职业学院",
    abbreviation: "xmcu",
    province: "福建省",
    id: "d39e873c-6a24-4136-8f58-9f337c09ad25"
  },
  {
    name: "泉州工艺美术职业学院",
    abbreviation: "dhcc",
    province: "福建省",
    id: "6dadeaea-ff4d-4ac4-9235-0ea3cdba80dd"
  },
  {
    name: "三明医学科技职业学院",
    abbreviation: "smvtc",
    province: "福建省",
    id: "bf9a0931-c7c0-45a4-bdf3-d817518dca25"
  },
  {
    name: "宁德职业技术学院",
    abbreviation: "ndgzy",
    province: "福建省",
    id: "f5f6fdf9-28f8-4fc5-bd6e-272b6e36b8cd"
  },
  {
    name: "福州软件职业技术学院",
    abbreviation: "fzrjxy",
    province: "福建省",
    id: "0d7b2666-2fa9-43a3-b9d8-3505cdffed94"
  },
  {
    name: "厦门兴才职业技术学院",
    abbreviation: "xmxc",
    province: "福建省",
    id: "8ad123eb-6226-4970-9056-ad0d52506eda"
  },
  {
    name: "厦门软件职业技术学院",
    abbreviation: "xmstc",
    province: "福建省",
    id: "15fc56cc-e117-42ec-8be7-21066e93b8f4"
  },
  {
    name: "福建体育职业技术学院",
    abbreviation: "fjipe",
    province: "福建省",
    id: "87b26dcf-7a95-4b51-8640-42258681ec5d"
  },
  {
    name: "漳州城市职业学院",
    abbreviation: "zcvc",
    province: "福建省",
    id: "733426e7-e732-484b-b73f-da3cbb3e851b"
  },
  {
    name: "厦门南洋职业学院",
    abbreviation: "ny2000",
    province: "福建省",
    id: "e18d589d-ba19-46e7-85a7-bcc587d60f3f"
  },
  {
    name: "厦门东海职业技术学院",
    abbreviation: "xmdh",
    province: "福建省",
    id: "9238c5da-d102-4c67-8aa4-f867e96e767c"
  },
  {
    name: "漳州科技职业学院",
    abbreviation: "tftc",
    province: "福建省",
    id: "2e5ceead-0b9e-42ee-b141-03c771dad9aa"
  },
  {
    name: "漳州理工职业学院",
    abbreviation: "zzlg",
    province: "福建省",
    id: "ce7b2d49-7325-437b-a94b-de4c4f4b378b"
  },
  {
    name: "武夷山职业学院",
    abbreviation: "wyszyxy",
    province: "福建省",
    id: "06838462-6d31-4d2f-8aba-332ac5459026"
  },
  {
    name: "漳州卫生职业学院",
    abbreviation: "zzyhxy",
    province: "福建省",
    id: "e607a950-3f4d-4e0b-8fe1-c240a95b5c02"
  },
  {
    name: "泉州海洋职业学院",
    abbreviation: "qzoiedu",
    province: "福建省",
    id: "76eb40c4-c90f-4926-b9fe-ef70c864f969"
  },
  {
    name: "泉州轻工职业学院",
    abbreviation: "qzqgxy",
    province: "福建省",
    id: "8b8ead2d-df5f-4e5d-acf8-e332ac21a9a8"
  },
  {
    name: "厦门安防科技职业学院",
    abbreviation: "xmafkj",
    province: "福建省",
    id: "060904da-f06b-4603-b5a6-dcb06d2e7869"
  },
  {
    name: "泉州幼儿师范高等专科学校",
    abbreviation: "qzygz",
    province: "福建省",
    id: "c829570e-fbbf-45f5-833c-451ab4fc396e"
  },
  {
    name: "闽江师范高等专科学校",
    abbreviation: "fzjyxy",
    province: "福建省",
    id: "7fec2dc7-e8fa-48a5-a143-d559f61d09f9"
  },
  {
    name: "泉州工程职业技术学院",
    abbreviation: "qzgcxy",
    province: "福建省",
    id: "588ef5cb-900c-406a-8e03-fbea297a9211"
  },
  {
    name: "福州墨尔本理工职业学院",
    abbreviation: "fmp",
    province: "福建省",
    id: "1855fc45-2cf8-450e-b2f8-e296be52d1a0"
  },
  {
    name: "南昌大学",
    abbreviation: "ncu",
    province: "江西省",
    id: "459e9d96-3b80-4e83-b70d-5f9967ccab83"
  },
  {
    name: "华东交通大学",
    abbreviation: "ecjtu",
    province: "江西省",
    id: "45676446-2bb8-412a-83ae-abd5dbb2f563"
  },
  {
    name: "东华理工大学",
    abbreviation: "ecit",
    province: "江西省",
    id: "4abcf08f-fc9b-4d04-8b6a-25a43159ad20"
  },
  {
    name: "南昌航空大学",
    abbreviation: "nchu",
    province: "江西省",
    id: "a96c914d-cefd-4f05-a10a-ca730eba0a8b"
  },
  {
    name: "江西理工大学",
    abbreviation: "jxust",
    province: "江西省",
    id: "24b5780b-09b5-40fe-b627-6661f0451750"
  },
  {
    name: "景德镇陶瓷大学",
    abbreviation: "jci",
    province: "江西省",
    id: "b8f7edf0-9644-4d37-b18b-be4c4b248ba7"
  },
  {
    name: "江西农业大学",
    abbreviation: "jxau",
    province: "江西省",
    id: "60935ad3-e7d9-4e8a-a74b-7e03bf4d07e2"
  },
  {
    name: "江西中医药大学",
    abbreviation: "jxtcmi",
    province: "江西省",
    id: "78f56fde-7f70-42af-95fa-b1d15ac5b9b9"
  },
  {
    name: "赣南医学院",
    abbreviation: "gmu",
    province: "江西省",
    id: "7fdaf555-d213-49b9-b566-39129b11b19c"
  },
  {
    name: "江西师范大学",
    abbreviation: "jxnu",
    province: "江西省",
    id: "4af8992f-a58b-4892-86cf-86e449a05615"
  },
  {
    name: "上饶师范学院",
    abbreviation: "sru",
    province: "江西省",
    id: "b1d65982-5041-4706-89c7-97e1bd717d53"
  },
  {
    name: "宜春学院",
    abbreviation: "ycu",
    province: "江西省",
    id: "b368d2cc-ff53-464f-a8e7-52819be700b3"
  },
  {
    name: "赣南师范大学",
    abbreviation: "gnnu",
    province: "江西省",
    id: "86ee5875-c4a2-4cba-b733-0e26fadb3666"
  },
  {
    name: "井冈山大学",
    abbreviation: "jgsu",
    province: "江西省",
    id: "91bbab70-eb5b-4141-b243-489222c3939b"
  },
  {
    name: "江西财经大学",
    abbreviation: "jxufe",
    province: "江西省",
    id: "91ea5ae8-04ea-4665-bfea-0cbc718dba7e"
  },
  {
    name: "江西科技学院",
    abbreviation: "jxut",
    province: "江西省",
    id: "90d66162-1ecc-43fe-85c8-2e29ab970afd"
  },
  {
    name: "景德镇学院",
    abbreviation: "jdzu",
    province: "江西省",
    id: "582f3ebc-9aeb-4932-8d67-9d1d700795ac"
  },
  {
    name: "萍乡学院",
    abbreviation: "pxc",
    province: "江西省",
    id: "a9f8113a-3cd1-416d-ad1e-2d03cfcbe1d9"
  },
  {
    name: "江西科技师范大学",
    abbreviation: "jxstnu",
    province: "江西省",
    id: "4c498786-02d7-47d4-9bd1-f77fd70097e8"
  },
  {
    name: "南昌工程学院",
    abbreviation: "nit",
    province: "江西省",
    id: "cb729dec-8573-4dfc-a785-263d1f0b59be"
  },
  {
    name: "江西警察学院",
    abbreviation: "jxga",
    province: "江西省",
    id: "e9d2fad8-09f8-4bb7-9fa0-47fa51f9012d"
  },
  {
    name: "新余学院",
    abbreviation: "xyc",
    province: "江西省",
    id: "729677d0-c93a-4152-b9f8-ab0e3b7e3afd"
  },
  {
    name: "九江学院",
    abbreviation: "jju",
    province: "江西省",
    id: "ea14b1de-8646-4932-a108-6aa156b0bd3a"
  },
  {
    name: "江西工程学院",
    abbreviation: "ygxy",
    province: "江西省",
    id: "4e8da33c-3740-4b5e-9e3d-ab6637f7b41e"
  },
  {
    name: "南昌理工学院",
    abbreviation: "nclg",
    province: "江西省",
    id: "0a76f1b0-cd23-4ad2-b0f5-d86d948fa0a5"
  },
  {
    name: "江西应用科技学院",
    abbreviation: "jxcsedu",
    province: "江西省",
    id: "1887758c-da03-487d-9fae-9e9e0d94edd8"
  },
  {
    name: "江西服装学院",
    abbreviation: "fuzhuang",
    province: "江西省",
    id: "d2839802-41c9-46a4-9602-7ab3916e138d"
  },
  {
    name: "南昌工学院",
    abbreviation: "ncgxy",
    province: "江西省",
    id: "a07c0c5a-7a85-4756-8cd2-4762060975eb"
  },
  {
    name: "南昌大学科学技术学院",
    abbreviation: "ndkj",
    province: "江西省",
    id: "844e920e-4122-4c89-97af-dc3c39e3d683"
  },
  {
    name: "南昌大学共青学院",
    abbreviation: "ndgy",
    province: "江西省",
    id: "e84cce80-e0f5-4ec0-a282-18a1e2423e3e"
  },
  {
    name: "华东交通大学理工学院",
    abbreviation: "ecjtuit",
    province: "江西省",
    id: "6346fa04-7d92-4062-adf2-5cf813358d0a"
  },
  {
    name: "东华理工大学长江学院",
    abbreviation: "ecit",
    province: "江西省",
    id: "58a89426-dc7f-49d0-a06e-3d7849510ffa"
  },
  {
    name: "南昌航空大学科技学院",
    abbreviation: "nckjxy",
    province: "江西省",
    id: "aada3f28-0e4a-49f5-8517-99219bbf3232"
  },
  {
    name: "江西理工大学应用科学学院",
    abbreviation: "asc",
    province: "江西省",
    id: "b9a2ded3-0f5f-441e-9549-dc8170c2adff"
  },
  {
    name: "景德镇陶瓷大学科技艺术学院",
    abbreviation: "jci-ky",
    province: "江西省",
    id: "3d1d7395-fd46-40c9-9e3b-407dbc508701"
  },
  {
    name: "江西农业大学南昌商学院",
    abbreviation: "ncsxy",
    province: "江西省",
    id: "0bdca01a-aac5-469a-9aa7-43576eea090b"
  },
  {
    name: "江西中医药大学科技学院",
    abbreviation: "jxtcmstc",
    province: "江西省",
    id: "b75a5177-0007-464d-9ec1-b1fb769dd7a1"
  },
  {
    name: "江西师范大学科学技术学院",
    abbreviation: "jxnu",
    province: "江西省",
    id: "6587cccd-c97d-48d3-babb-488d1bad37e8"
  },
  {
    name: "赣南师范大学科技学院",
    abbreviation: "gnsyky",
    province: "江西省",
    id: "9f5b81d5-e897-4a6e-88cf-eeb45db63fd9"
  },
  {
    name: "江西科技师范大学理工学院",
    abbreviation: "jxstnupi",
    province: "江西省",
    id: "a003919b-696a-41fa-b1b5-aaab8326796e"
  },
  {
    name: "江西财经大学现代经济管理学院",
    abbreviation: "jxufe",
    province: "江西省",
    id: "5d2deb5a-46bf-410a-b088-3e346f8a2640"
  },
  {
    name: "豫章师范学院",
    abbreviation: "nctc",
    province: "江西省",
    id: "11c8111f-89c3-4c8d-9ecb-a38f534d8203"
  },
  {
    name: "南昌师范学院",
    abbreviation: "jxie",
    province: "江西省",
    id: "cec0110c-d7aa-40df-855e-1c7b0f46cf9f"
  },
  {
    name: "上饶幼儿师范高等专科学校",
    abbreviation: "srsf",
    province: "江西省",
    id: "23ddc9e1-1735-4d3a-91ce-2aef5bb8f037"
  },
  {
    name: "抚州幼儿师范高等专科学校",
    abbreviation: "fzpec",
    province: "江西省",
    id: "b633816b-fcf1-4d5d-99ca-6a7f6d95562c"
  },
  {
    name: "江西工业职业技术学院",
    abbreviation: "jxgzy",
    province: "江西省",
    id: "ef26d4fd-e475-4e9a-a7a8-f0a496fb75b6"
  },
  {
    name: "江西医学高等专科学校",
    abbreviation: "sryx",
    province: "江西省",
    id: "65fd5667-ffe2-449e-b532-89616f534d9c"
  },
  {
    name: "九江职业大学",
    abbreviation: "jjvu",
    province: "江西省",
    id: "c845f090-1da1-4407-99dd-e5046e231f97"
  },
  {
    name: "九江职业技术学院",
    abbreviation: "jvtc",
    province: "江西省",
    id: "ef5acc67-af2a-4f8f-8d79-58451f86d923"
  },
  {
    name: "江西司法警官职业学院",
    abbreviation: "65",
    province: "江西省",
    id: "014c355a-e2df-4484-bd72-d77a779fe5c0"
  },
  {
    name: "江西陶瓷工艺美术职业技术学院",
    abbreviation: "jxgymy",
    province: "江西省",
    id: "0e3e8b47-e03b-4bff-a656-47175a92d68f"
  },
  {
    name: "江西旅游商贸职业学院",
    abbreviation: "jxlsxy",
    province: "江西省",
    id: "6287bdba-493a-47a5-af6e-be631fd5382c"
  },
  {
    name: "江西电力职业技术学院",
    abbreviation: "dlzy",
    province: "江西省",
    id: "eb2ce33d-871b-42e1-9cbd-dd1a4394f974"
  },
  {
    name: "江西环境工程职业学院",
    abbreviation: "jxhjxy",
    province: "江西省",
    id: "b43eba90-11ed-45d0-8200-b3dec4bd240d"
  },
  {
    name: "江西艺术职业学院",
    abbreviation: "jxysedu",
    province: "江西省",
    id: "80dbbe71-11da-4f73-b052-face3a659b8f"
  },
  {
    name: "鹰潭职业技术学院",
    abbreviation: "jxytxy",
    province: "江西省",
    id: "b4783454-35c6-4dc8-ac9e-428d4a290b58"
  },
  {
    name: "江西信息应用职业技术学院",
    abbreviation: "jxcia",
    province: "江西省",
    id: "843427bd-8238-4910-9cfd-08907f79d400"
  },
  {
    name: "江西交通职业技术学院",
    abbreviation: "jxjtxy",
    province: "江西省",
    id: "4b9648f4-bc84-470e-bbf9-c9cbe7008a5d"
  },
  {
    name: "江西财经职业学院",
    abbreviation: "jxvc",
    province: "江西省",
    id: "d74f3121-aa0c-465e-8551-228c7db258cf"
  },
  {
    name: "江西应用工程职业学院",
    abbreviation: "jxatei",
    province: "江西省",
    id: "dd972e3f-ffe8-4021-94bc-584b16881392"
  },
  {
    name: "江西现代职业技术学院",
    abbreviation: "jxxdxy",
    province: "江西省",
    id: "e3a8437b-3e57-4b63-a1b0-3dcbe9f8ceb3"
  },
  {
    name: "江西工业工程职业技术学院",
    abbreviation: "jxgcxy",
    province: "江西省",
    id: "92fe5e96-6076-4f2e-a0c1-3b1544190908"
  },
  {
    name: "江西机电职业技术学院",
    abbreviation: "jxjdxy",
    province: "江西省",
    id: "036926ec-4544-4d3f-a8f0-84b825bc5581"
  },
  {
    name: "江西科技职业学院",
    abbreviation: "jxkeda",
    province: "江西省",
    id: "90a8ab97-e3a0-43b1-81d5-c0fbead138a8"
  },
  {
    name: "南昌职业学院",
    abbreviation: "nczyxy",
    province: "江西省",
    id: "c4aeed55-f8d7-4d91-a735-534446d83631"
  },
  {
    name: "江西外语外贸职业学院",
    abbreviation: "jxcfs",
    province: "江西省",
    id: "3483640d-bc39-450c-896f-08eb3eb1276c"
  },
  {
    name: "江西工业贸易职业技术学院",
    abbreviation: "jxgmxy",
    province: "江西省",
    id: "277e1ba0-554c-4ea5-8085-885dd87c1491"
  },
  {
    name: "宜春职业技术学院",
    abbreviation: "ycvc",
    province: "江西省",
    id: "55e4c5ba-1443-45fa-bb13-ea83481a2b81"
  },
  {
    name: "江西应用技术职业学院",
    abbreviation: "jxyyxy",
    province: "江西省",
    id: "091bf5fa-63f2-4fb8-9f62-ac0ddc1ed7b2"
  },
  {
    name: "江西生物科技职业学院",
    abbreviation: "jxswkj",
    province: "江西省",
    id: "fd304572-25f0-4bae-8f61-52d41d2fe353"
  },
  {
    name: "江西建设职业技术学院",
    abbreviation: "jxjsxy",
    province: "江西省",
    id: "a3300648-bfb0-40e0-b5d0-a1521c779ad2"
  },
  {
    name: "抚州职业技术学院",
    abbreviation: "fzjsxy",
    province: "江西省",
    id: "e2bd3814-628f-4679-9440-35cc0706b083"
  },
  {
    name: "江西中医药高等专科学校",
    abbreviation: "jxtcms",
    province: "江西省",
    id: "29e12b5a-4a76-462a-8b5a-337c1d1f634b"
  },
  {
    name: "江西先锋软件职业技术学院",
    abbreviation: "aheadedu",
    province: "江西省",
    id: "71505273-7789-4f0f-b157-59ee229cd29b"
  },
  {
    name: "江西经济管理职业学院",
    abbreviation: "jiea",
    province: "江西省",
    id: "fb5d8300-345b-4bb1-90f7-94c0316cd082"
  },
  {
    name: "江西制造职业技术学院",
    abbreviation: "jxmtc",
    province: "江西省",
    id: "693c0882-408b-494d-af03-b6ef6bac10cd"
  },
  {
    name: "江西工程职业学院",
    abbreviation: "jxgcxy",
    province: "江西省",
    id: "ac6657ce-4799-4978-8aab-1fa374ea4e84"
  },
  {
    name: "江西青年职业学院",
    abbreviation: "jxqy",
    province: "江西省",
    id: "485b3c7e-6b6d-4612-a422-fe81a486b8a0"
  },
  {
    name: "上饶职业技术学院",
    abbreviation: "srzy",
    province: "江西省",
    id: "8b0b8fbb-e834-4d75-af99-d6cd8fd738c3"
  },
  {
    name: "江西航空职业技术学院",
    abbreviation: "jhxy",
    province: "江西省",
    id: "4c51d587-5ed7-4f3f-be90-9620bc96fd96"
  },
  {
    name: "江西农业工程职业学院",
    abbreviation: "jxaevc",
    province: "江西省",
    id: "5abee218-a432-4102-a36c-4be8035d34ce"
  },
  {
    name: "赣西科技职业学院",
    abbreviation: "ganxidx",
    province: "江西省",
    id: "13b1d982-69cf-47e4-8dd7-a3290931c585"
  },
  {
    name: "江西卫生职业学院",
    abbreviation: "jxhlxy",
    province: "江西省",
    id: "99d92eb1-98f1-4561-b4ce-f34b234256cb"
  },
  {
    name: "江西新能源科技职业学院",
    abbreviation: "tynxy",
    province: "江西省",
    id: "8ef96054-c9c7-4907-ade8-b2b216f774bc"
  },
  {
    name: "江西枫林涉外经贸职业学院",
    abbreviation: "fenglin",
    province: "江西省",
    id: "7a578b1c-5b3b-4cd9-b9eb-8cc8555a0368"
  },
  {
    name: "江西泰豪动漫职业学院",
    abbreviation: "tellhowedu",
    province: "江西省",
    id: "4ef19707-67a2-4fe3-ab0d-4099fad8a6d5"
  },
  {
    name: "江西冶金职业技术学院",
    abbreviation: "jxyjxy",
    province: "江西省",
    id: "e9517f59-057e-47fd-b018-f717e6ce576a"
  },
  {
    name: "江西传媒职业学院",
    abbreviation: "jxcb",
    province: "江西省",
    id: "7752eb1b-46b5-40e8-aa82-b3b182b37df4"
  },
  {
    name: "江西工商职业技术学院",
    abbreviation: "jxgsxy",
    province: "江西省",
    id: "fdd5dfa9-f6e9-4d50-8649-733bfa118735"
  },
  {
    name: "景德镇陶瓷职业技术学院",
    abbreviation: "jcivt",
    province: "江西省",
    id: "db97f0e3-c3b4-47d1-9f8d-5aa247639391"
  },
  {
    name: "共青科技职业学院",
    abbreviation: "gqkj",
    province: "江西省",
    id: "2f3ab819-2b3d-4284-ac31-0d9147d2a16f"
  },
  {
    name: "赣州师范高等专科学校",
    abbreviation: "gnjyxy",
    province: "江西省",
    id: "6a92d2b1-fd30-47b1-8b6e-a6c5fd776e28"
  },
  {
    name: "江西水利职业学院",
    abbreviation: "jxslsd",
    province: "江西省",
    id: "c780ef31-35ea-4502-a78b-63920f266176"
  },
  {
    name: "宜春幼儿师范高等专科学校",
    abbreviation: "gacycu",
    province: "江西省",
    id: "b2291f1e-f066-4d0d-8db6-7bfadd2cf8fc"
  },
  {
    name: "吉安职业技术学院",
    abbreviation: "japt",
    province: "江西省",
    id: "af7caa3c-3b94-413f-89aa-0bb57565faf8"
  },
  {
    name: "江西洪州职业学院",
    abbreviation: "jxhzzyxy",
    province: "江西省",
    id: "8e397a6e-0425-49df-a414-5c48fac33b0c"
  },
  {
    name: "江西师范高等专科学校",
    abbreviation: "jxsfgz",
    province: "江西省",
    id: "6a2d8dac-3c2d-4846-93eb-5e52ddad49b4"
  },
  {
    name: "南昌影视传播职业学院",
    abbreviation: "ncyscb",
    province: "江西省",
    id: "c8d776f5-6702-4d82-a110-3251d5bdd719"
  },
  {
    name: "山东大学",
    abbreviation: "sdu",
    province: "山东省",
    id: "5316bd11-5bbc-40da-83d4-54c4476245da"
  },
  {
    name: "中国海洋大学",
    abbreviation: "ouc",
    province: "山东省",
    id: "fc2eb007-184a-45f7-8047-f7dc20d1cb63"
  },
  {
    name: "山东科技大学",
    abbreviation: "sdust",
    province: "山东省",
    id: "78901fd9-f0d4-4ac4-b873-3e837fd25ffc"
  },
  {
    name: "中国石油大学（华东）",
    abbreviation: "upc",
    province: "山东省",
    id: "dd5ced6f-7d45-493c-98ca-bc9a789c0e27"
  },
  {
    name: "青岛科技大学",
    abbreviation: "qust",
    province: "山东省",
    id: "1b32e81d-6c35-4f7d-acf4-fdb184b13bf5"
  },
  {
    name: "济南大学",
    abbreviation: "ujn",
    province: "山东省",
    id: "fa32b4a3-6bd1-4cb0-8a7a-12f5348a9b81"
  },
  {
    name: "青岛理工大学",
    abbreviation: "qtech",
    province: "山东省",
    id: "3b6a8b37-be8d-4a92-bee5-70ca9b587b52"
  },
  {
    name: "山东建筑大学",
    abbreviation: "sdjzu",
    province: "山东省",
    id: "1064eed1-bf80-4c8e-8b4e-f909795c66a0"
  },
  {
    name: "齐鲁工业大学",
    abbreviation: "sdili",
    province: "山东省",
    id: "15d4a806-337e-4245-a95d-5c9e283135b9"
  },
  {
    name: "山东理工大学",
    abbreviation: "sdut",
    province: "山东省",
    id: "f804447b-5ac4-4d1c-bd61-09c55909b8cf"
  },
  {
    name: "山东农业大学",
    abbreviation: "sdau",
    province: "山东省",
    id: "5fac038b-7c05-4728-b31b-e64530cb4d6d"
  },
  {
    name: "青岛农业大学",
    abbreviation: "qau",
    province: "山东省",
    id: "725c03d5-2205-4b70-93ca-72d707ed7bb5"
  },
  {
    name: "潍坊医学院",
    abbreviation: "wfmc",
    province: "山东省",
    id: "a2d086f7-43df-48e0-8d20-9b7e09814af8"
  },
  {
    name: "泰山医学院",
    abbreviation: "tsmc",
    province: "山东省",
    id: "c04bae28-86be-4225-bec5-430146eb9a4b"
  },
  {
    name: "滨州医学院",
    abbreviation: "bzmc",
    province: "山东省",
    id: "087e414b-ce30-4ee2-8764-70dc0660e1b3"
  },
  {
    name: "山东中医药大学",
    abbreviation: "sdutcm",
    province: "山东省",
    id: "ce9d0a9e-5b90-4c9c-ad3b-dab8a9a2aea0"
  },
  {
    name: "济宁医学院",
    abbreviation: "jnmc",
    province: "山东省",
    id: "dbc892da-1764-4b90-98a8-15fcfc8ce4ef"
  },
  {
    name: "山东师范大学",
    abbreviation: "sdnu",
    province: "山东省",
    id: "7f6f3cdc-22ad-4d39-b843-ba7ea1282e7e"
  },
  {
    name: "曲阜师范大学",
    abbreviation: "qfnu",
    province: "山东省",
    id: "1816275b-5421-4895-974e-6e243b17588d"
  },
  {
    name: "聊城大学",
    abbreviation: "lcu",
    province: "山东省",
    id: "d83e6af9-35f9-4b0e-9483-256ed3794b0a"
  },
  {
    name: "德州学院",
    abbreviation: "dzu",
    province: "山东省",
    id: "3b7c9134-9a8c-4d08-898e-12850b651c73"
  },
  {
    name: "滨州学院",
    abbreviation: "bzu",
    province: "山东省",
    id: "8fc9986d-19db-44ce-aa28-a8376bc3200c"
  },
  {
    name: "鲁东大学",
    abbreviation: "ldu",
    province: "山东省",
    id: "8ea65fdb-fa90-4bbe-8ae9-4c660364ff53"
  },
  {
    name: "临沂大学",
    abbreviation: "lyu",
    province: "山东省",
    id: "3d98730b-c418-40de-b685-5b389ae9a0f1"
  },
  {
    name: "泰山学院",
    abbreviation: "tsu",
    province: "山东省",
    id: "39033b35-26ba-42cc-b655-8d143dab615c"
  },
  {
    name: "济宁学院",
    abbreviation: "jnxy",
    province: "山东省",
    id: "d5b3fca5-c92a-4c5d-b745-fecb1f29802e"
  },
  {
    name: "菏泽学院",
    abbreviation: "hezeu",
    province: "山东省",
    id: "ac14f77b-0858-4f9f-940b-e15f103efc6b"
  },
  {
    name: "山东财经大学",
    abbreviation: "sdufe",
    province: "山东省",
    id: "43bef267-49b4-465e-b3cb-51eea56209e8"
  },
  {
    name: "山东体育学院",
    abbreviation: "sdpei",
    province: "山东省",
    id: "b1444cfb-ff19-4090-a670-455f78a04444"
  },
  {
    name: "山东艺术学院",
    abbreviation: "sdca",
    province: "山东省",
    id: "131fab6d-78e7-4762-a902-de77f576e431"
  },
  {
    name: "齐鲁医药学院",
    abbreviation: "wjmu",
    province: "山东省",
    id: "3e2059a8-5b5e-4dc8-b632-65cacaac7946"
  },
  {
    name: "青岛滨海学院",
    abbreviation: "binhaicoll",
    province: "山东省",
    id: "001bbc14-7ada-46cc-883b-e4638aa29b3b"
  },
  {
    name: "枣庄学院",
    abbreviation: "uzz",
    province: "山东省",
    id: "8e4fda60-d94c-404c-9095-a4227b4252f6"
  },
  {
    name: "山东工艺美术学院",
    abbreviation: "sdada",
    province: "山东省",
    id: "2de18e09-e9ce-42e2-ac4f-495fdc81fe31"
  },
  {
    name: "青岛大学",
    abbreviation: "qdu",
    province: "山东省",
    id: "76e41cc7-4e59-4306-9d1d-194cb8d592ea"
  },
  {
    name: "烟台大学",
    abbreviation: "ytu",
    province: "山东省",
    id: "a0ef07ff-62fe-495a-af1f-1eeeb014d412"
  },
  {
    name: "潍坊学院",
    abbreviation: "wfu",
    province: "山东省",
    id: "078a1323-c709-427a-9e75-3af9c773a685"
  },
  {
    name: "山东警察学院",
    abbreviation: "sdpc",
    province: "山东省",
    id: "40ccb789-2d8e-4eea-bdb6-d66afd788a89"
  },
  {
    name: "山东交通学院",
    abbreviation: "sdjtu",
    province: "山东省",
    id: "8f42d47d-6c42-45ae-a100-ffb470271db5"
  },
  {
    name: "山东工商学院",
    abbreviation: "sdibt",
    province: "山东省",
    id: "4825ba8b-525b-41d8-b750-524dfb9ea501"
  },
  {
    name: "山东女子学院",
    abbreviation: "sdwu",
    province: "山东省",
    id: "ad11168e-7407-4236-adb6-d9c1b4d7c768"
  },
  {
    name: "烟台南山学院",
    abbreviation: "nanshan",
    province: "山东省",
    id: "ccbdba45-cd33-487c-afac-2dab4e40ec2e"
  },
  {
    name: "潍坊科技学院",
    abbreviation: "wfkjxy",
    province: "山东省",
    id: "d9fea6ba-0fc4-442c-985b-dc1018ac9b90"
  },
  {
    name: "山东英才学院",
    abbreviation: "ycxy",
    province: "山东省",
    id: "89a28cf1-2e83-482f-9c48-bc4430ef6673"
  },
  {
    name: "青岛恒星科技学院",
    abbreviation: "hx",
    province: "山东省",
    id: "ba38eb1f-9710-4f81-9d34-c9c851562e00"
  },
  {
    name: "青岛黄海学院",
    abbreviation: "huanghaico",
    province: "山东省",
    id: "717b7bc9-5ec3-4a80-aaca-87ac9a18a3bb"
  },
  {
    name: "山东现代学院",
    abbreviation: "uxd",
    province: "山东省",
    id: "2130e0db-86fc-4e45-a857-afe6bf3495b1"
  },
  {
    name: "山东协和学院",
    abbreviation: "sdxiehe",
    province: "山东省",
    id: "3162f05a-017b-402f-92e2-f529bdf869da"
  },
  {
    name: "烟台大学文经学院",
    abbreviation: "ytu",
    province: "山东省",
    id: "868ee097-fb1e-4f89-9791-798531b3b75e"
  },
  {
    name: "聊城大学东昌学院",
    abbreviation: "lcudc",
    province: "山东省",
    id: "96021248-024c-4a46-b615-6eb28f674904"
  },
  {
    name: "青岛理工大学琴岛学院",
    abbreviation: "qdc",
    province: "山东省",
    id: "746db01d-f07f-41cf-bb98-b6ef24b6bd7f"
  },
  {
    name: "山东师范大学历山学院",
    abbreviation: "lsxy",
    province: "山东省",
    id: "723f6e95-2753-47e6-81ea-e4d6655ca485"
  },
  {
    name: "山东经济学院燕山学院",
    abbreviation: "yanshanxue",
    province: "山东省",
    id: "a6a5c6a3-8998-4b64-8c87-a47bc7e5c933"
  },
  {
    name: "中国石油大学胜利学院",
    abbreviation: "slcupc",
    province: "山东省",
    id: "651c7e33-f575-47bd-93b9-e1c0bd157610"
  },
  {
    name: "山东科技大学泰山科技学院",
    abbreviation: "sdust",
    province: "山东省",
    id: "b34ec86d-035a-4076-aa87-ef2751bc44fd"
  },
  {
    name: "山东华宇工学院",
    abbreviation: "sdhyxy",
    province: "山东省",
    id: "e8573a17-2909-4326-81ae-862952abcdb0"
  },
  {
    name: "青岛工学院",
    abbreviation: "oucqdc",
    province: "山东省",
    id: "4417cff0-f31c-4528-a52d-6a37b3e5c5d2"
  },
  {
    name: "青岛农业大学海都学院",
    abbreviation: "hdxy",
    province: "山东省",
    id: "22f23a09-4c6c-4299-96a1-b7308bc28ee3"
  },
  {
    name: "齐鲁理工学院",
    abbreviation: "qlit",
    province: "山东省",
    id: "f9a56363-c3ce-4c41-a260-bf311dbecb88"
  },
  {
    name: "山东财经大学东方学院",
    abbreviation: "sdor",
    province: "山东省",
    id: "e3da3b6d-de6c-460a-984e-06e5b5b134a3"
  },
  {
    name: "济南大学泉城学院",
    abbreviation: "ujn",
    province: "山东省",
    id: "c4469fc2-6c74-4541-88f3-deba1e97c646"
  },
  {
    name: "山东政法学院",
    abbreviation: "sdupsl",
    province: "山东省",
    id: "0728d26c-85d1-4c75-b5f0-4739e4f93674"
  },
  {
    name: "齐鲁师范学院",
    abbreviation: "qlnu",
    province: "山东省",
    id: "fb17796d-642e-4650-96a6-b9ba230d3741"
  },
  {
    name: "山东青年政治学院",
    abbreviation: "sdyu",
    province: "山东省",
    id: "4dabe153-f152-4881-8a35-1cbf89f92bf3"
  },
  {
    name: "北京电影学院现代创意媒体学院",
    abbreviation: "bfamcmc",
    province: "山东省",
    id: "7ff42c8f-62f0-4d98-a1d8-90028bcfc5f8"
  },
  {
    name: "山东管理学院",
    abbreviation: "sdmu",
    province: "山东省",
    id: "eeaf7282-c212-4da0-a246-1c06a8ecdd91"
  },
  {
    name: "山东农业工程学院",
    abbreviation: "sdngy",
    province: "山东省",
    id: "48cb80ae-b17f-4d3c-9025-9ac23b8ed78a"
  },
  {
    name: "山东医学高等专科学校",
    abbreviation: "sdmc",
    province: "山东省",
    id: "4b049a47-b9da-4774-85ca-12497c6fe09a"
  },
  {
    name: "菏泽医学专科学校",
    abbreviation: "hzmc",
    province: "山东省",
    id: "949085e1-b1f4-4cc4-b9be-c536f4f62b63"
  },
  {
    name: "山东商业职业技术学院",
    abbreviation: "sict",
    province: "山东省",
    id: "43e9f085-c709-4193-bca0-c0f9b04279fc"
  },
  {
    name: "山东电力高等专科学校",
    abbreviation: "sepc",
    province: "山东省",
    id: "038a5612-6089-4303-b60e-f1db3b0260e4"
  },
  {
    name: "日照职业技术学院",
    abbreviation: "rzpt",
    province: "山东省",
    id: "98adbc6e-89d0-4f75-adb4-5b8a487007e5"
  },
  {
    name: "曲阜远东职业技术学院",
    abbreviation: "fareast-ed",
    province: "山东省",
    id: "c3116cba-3501-43db-b87e-5fbb963ec485"
  },
  {
    name: "青岛职业技术学院",
    abbreviation: "qtc",
    province: "山东省",
    id: "2748864e-0392-4623-ba2a-9c5f8b60ce2a"
  },
  {
    name: "威海职业学院",
    abbreviation: "weihaicoll",
    province: "山东省",
    id: "5b607e41-f010-405e-8b4c-67a118c0f980"
  },
  {
    name: "山东职业学院",
    abbreviation: "sdp",
    province: "山东省",
    id: "2207165a-a916-4d91-bdbf-e91bf8ded594"
  },
  {
    name: "山东劳动职业技术学院",
    abbreviation: "sdlvtc",
    province: "山东省",
    id: "c10f9fc1-b5e8-4272-9389-66696951fc03"
  },
  {
    name: "莱芜职业技术学院",
    abbreviation: "lwvc",
    province: "山东省",
    id: "f11200cc-9bc4-408e-a8cd-1a128253abac"
  },
  {
    name: "济宁职业技术学院",
    abbreviation: "jnzjxy",
    province: "山东省",
    id: "508421e8-30b3-4cc3-838f-a71ab7576276"
  },
  {
    name: "潍坊职业学院",
    abbreviation: "sdwfvc",
    province: "山东省",
    id: "e9668a78-2ded-401a-a0e1-f68ded99fb9a"
  },
  {
    name: "烟台职业学院",
    abbreviation: "ytvc",
    province: "山东省",
    id: "dc1643f8-404d-4802-9994-9df8866bf2d0"
  },
  {
    name: "东营职业学院",
    abbreviation: "dyxy",
    province: "山东省",
    id: "e83f1bd5-fcfd-45cc-bb4b-a2644778cd8c"
  },
  {
    name: "聊城职业技术学院",
    abbreviation: "lctvu",
    province: "山东省",
    id: "d37c5b25-8aef-4038-983d-40b5b1fc91f7"
  },
  {
    name: "滨州职业学院",
    abbreviation: "edubzvc",
    province: "山东省",
    id: "d0587bad-ace1-4afe-81f3-f15c6c197ece"
  },
  {
    name: "山东科技职业学院",
    abbreviation: "sdzy",
    province: "山东省",
    id: "af562c92-7139-4d20-b265-76522f0f0bf5"
  },
  {
    name: "山东服装职业学院",
    abbreviation: "svict",
    province: "山东省",
    id: "83a1e64c-e123-40b6-b2d7-935333fc16be"
  },
  {
    name: "德州科技职业学院",
    abbreviation: "sddzkj",
    province: "山东省",
    id: "8c12fb8c-ab4d-492f-abf1-3ca37f0a489b"
  },
  {
    name: "山东力明科技职业学院",
    abbreviation: "6789",
    province: "山东省",
    id: "502a4da6-3f1f-454e-b403-211203b40870"
  },
  {
    name: "山东圣翰财贸职业学院",
    abbreviation: "suu",
    province: "山东省",
    id: "13d5bfe1-a948-411a-ae05-1ca9518004f3"
  },
  {
    name: "山东水利职业学院",
    abbreviation: "sdwrp",
    province: "山东省",
    id: "8d889411-9df6-4427-a697-fea0d0755d32"
  },
  {
    name: "山东畜牧兽医职业学院",
    abbreviation: "sdmyxy",
    province: "山东省",
    id: "bf8e29ba-b354-4ba4-86dd-193b0c8ab4d8"
  },
  {
    name: "青岛飞洋职业技术学院",
    abbreviation: "feiyangcol",
    province: "山东省",
    id: "03d8bbf0-c48f-4943-bd9c-299f6f4fe30e"
  },
  {
    name: "东营科技职业学院",
    abbreviation: "dycollege",
    province: "山东省",
    id: "21a5c238-b63a-4eaf-b5d5-02ccc4da7421"
  },
  {
    name: "山东交通职业学院",
    abbreviation: "sdjtzyxy",
    province: "山东省",
    id: "1e231908-1b4f-4cc2-b942-aa3730d37ce1"
  },
  {
    name: "淄博职业学院",
    abbreviation: "zbvc",
    province: "山东省",
    id: "e8c3fdd9-e0dc-411d-9c04-a094562a44e2"
  },
  {
    name: "山东外贸职业学院",
    abbreviation: "sdftcolleg",
    province: "山东省",
    id: "cce00ce6-5a0d-4f94-85f5-f7f480ebddc6"
  },
  {
    name: "青岛酒店管理职业技术学院",
    abbreviation: "qchm",
    province: "山东省",
    id: "e507e4ad-c3eb-4fbd-bec9-8f3804944d53"
  },
  {
    name: "山东信息职业技术学院",
    abbreviation: "sdcit",
    province: "山东省",
    id: "a0d48cf8-5cb2-4aea-8480-c5505fc02100"
  },
  {
    name: "青岛港湾职业技术学院",
    abbreviation: "qdgw",
    province: "山东省",
    id: "6b1c7d95-25ac-4e4a-861a-829e72273fd2"
  },
  {
    name: "山东胜利职业学院",
    abbreviation: "sdslvc",
    province: "山东省",
    id: "94fc6760-7853-43b9-902b-4ef9e28a4794"
  },
  {
    name: "山东经贸职业学院",
    abbreviation: "sdecu",
    province: "山东省",
    id: "9562c07f-bdf8-47e8-8937-1a5335787461"
  },
  {
    name: "山东工业职业学院",
    abbreviation: "sdivc",
    province: "山东省",
    id: "f2294cf0-d343-4f4d-9f31-d2cfbe3b5164"
  },
  {
    name: "山东化工职业学院",
    abbreviation: "qledu",
    province: "山东省",
    id: "5548ca95-7776-4f0b-a1cf-f59be1b20b94"
  },
  {
    name: "青岛求实职业技术学院",
    abbreviation: "qdqs",
    province: "山东省",
    id: "e6d4c5cc-dd2d-482a-aa24-a845670f1dce"
  },
  {
    name: "济南职业学院",
    abbreviation: "jnvc",
    province: "山东省",
    id: "7c316c5c-ca58-4291-afab-8ca0031f5aa5"
  },
  {
    name: "烟台工程职业技术学院",
    abbreviation: "ytetc",
    province: "山东省",
    id: "0d108a80-4c83-4fa1-836c-6a6103316aa9"
  },
  {
    name: "山东凯文科技职业学院",
    abbreviation: "sdkevin",
    province: "山东省",
    id: "9947fe29-db35-4768-89f0-42ff09e4dabc"
  },
  {
    name: "山东外国语职业学院",
    abbreviation: "sdflc",
    province: "山东省",
    id: "3589f83f-f681-47c5-af53-c50b234a949c"
  },
  {
    name: "潍坊工商职业学院",
    abbreviation: "wfgsxy",
    province: "山东省",
    id: "aa46d168-c298-47d4-9f69-b4fff7ab64f4"
  },
  {
    name: "德州职业技术学院",
    abbreviation: "dzvtc",
    province: "山东省",
    id: "2879d39f-1b65-431c-8446-69a8285d17cc"
  },
  {
    name: "枣庄科技职业学院",
    abbreviation: "zzkjxy",
    province: "山东省",
    id: "9a952dd8-f8d4-4b3e-875d-0aeb750e93ea"
  },
  {
    name: "淄博师范高等专科学校",
    abbreviation: "zbnc",
    province: "山东省",
    id: "db64a1db-bb87-405b-88b0-d81d77d02cd8"
  },
  {
    name: "山东中医药高等专科学校",
    abbreviation: "stcmchina",
    province: "山东省",
    id: "2193aa1e-fde4-4d16-97ff-a9558b993819"
  },
  {
    name: "济南工程职业技术学院",
    abbreviation: "jngcxy",
    province: "山东省",
    id: "065d6672-b801-44ec-b970-ea95eab42f34"
  },
  {
    name: "山东电子职业技术学院",
    abbreviation: "sdcet",
    province: "山东省",
    id: "b2a92863-f267-4e29-981f-35c03ee5e4e0"
  },
  {
    name: "山东旅游职业学院",
    abbreviation: "sdts",
    province: "山东省",
    id: "c525f993-96ff-442f-8290-d2e3aa4dde3c"
  },
  {
    name: "山东铝业职业学院",
    abbreviation: "shlzhj",
    province: "山东省",
    id: "cc77a151-3c74-48f2-9ba6-e4e758aeb911"
  },
  {
    name: "山东杏林科技职业学院",
    abbreviation: "sdxlxy",
    province: "山东省",
    id: "852dfdbb-feef-4784-896a-42d06e77014f"
  },
  {
    name: "泰山职业技术学院",
    abbreviation: "mtotc",
    province: "山东省",
    id: "4eeb7c34-5d75-4027-bd77-8a23b8082cfa"
  },
  {
    name: "山东外事翻译职业学院",
    abbreviation: "wsfy",
    province: "山东省",
    id: "880a1710-ddcf-48e5-8f83-45d00ac586c6"
  },
  {
    name: "山东药品食品职业学院",
    abbreviation: "sddfvc",
    province: "山东省",
    id: "596c8b2f-ef9b-4d05-b933-1fcf2b40cdca"
  },
  {
    name: "山东商务职业学院",
    abbreviation: "sdbi",
    province: "山东省",
    id: "1ea7b33a-fbd3-4a3a-bd58-3e4808bf4f31"
  },
  {
    name: "山东轻工职业学院",
    abbreviation: "silkedu",
    province: "山东省",
    id: "b40b371c-4663-4459-aea1-3cf382e45599"
  },
  {
    name: "山东城市建设职业学院",
    abbreviation: "sdcjxy",
    province: "山东省",
    id: "0f6cbd06-4a88-4671-928a-d275bea47d65"
  },
  {
    name: "烟台汽车工程职业学院",
    abbreviation: "ytqcvc",
    province: "山东省",
    id: "ebafbe8a-c315-4d75-89c4-aef9452de10f"
  },
  {
    name: "山东司法警官职业学院",
    abbreviation: "sdsfjy",
    province: "山东省",
    id: "f93bc03a-a8d1-4573-82fb-2fe23dbbaea1"
  },
  {
    name: "菏泽家政职业学院",
    abbreviation: "hzjzxy",
    province: "山东省",
    id: "aaa3069c-6cb9-4d7f-b0a5-f8a601d59eb1"
  },
  {
    name: "山东传媒职业学院",
    abbreviation: "sdcmc",
    province: "山东省",
    id: "0e46916f-27fa-400b-94f7-677001867e96"
  },
  {
    name: "临沂职业学院",
    abbreviation: "lyzyxy",
    province: "山东省",
    id: "acdbdb7b-2cd8-41b9-a326-0060f01d2a82"
  },
  {
    name: "枣庄职业学院",
    abbreviation: "sdzzvc",
    province: "山东省",
    id: "117a26e4-06fa-4808-8273-de6b823fba81"
  },
  {
    name: "山东理工职业学院",
    abbreviation: "sdlgzy",
    province: "山东省",
    id: "0b006c8f-52c4-4a97-887d-7cce7b8bfef5"
  },
  {
    name: "山东文化产业职业学院",
    abbreviation: "sdcivc",
    province: "山东省",
    id: "9c3a8ad6-0ef4-4165-b792-1577382fcbdc"
  },
  {
    name: "青岛远洋船员职业学院",
    abbreviation: "coscoqmc",
    province: "山东省",
    id: "a298f566-6d35-47fc-9d78-e00848fb7eba"
  },
  {
    name: "济南幼儿师范高等专科学校",
    abbreviation: "jnygz",
    province: "山东省",
    id: "3e99da32-2f7f-4a8f-bc8a-6521db5c31e4"
  },
  {
    name: "济南护理职业学院",
    abbreviation: "sdjnwx",
    province: "山东省",
    id: "a416f465-7afa-43fc-8eda-8883c07ec065"
  },
  {
    name: "泰山护理职业学院",
    abbreviation: "tawx",
    province: "山东省",
    id: "e8a189b9-74f1-4603-8be7-b5090514a1bf"
  },
  {
    name: "山东海事职业学院",
    abbreviation: "sdm",
    province: "山东省",
    id: "253605a0-1bb1-482a-9a52-1295d6c81f99"
  },
  {
    name: "潍坊护理职业学院",
    abbreviation: "wfhlxy",
    province: "山东省",
    id: "c45f2721-4d2d-4a41-aa93-9a1ef0443625"
  },
  {
    name: "潍坊工程职业学院",
    abbreviation: "wfec",
    province: "山东省",
    id: "a150d287-d4bd-485d-829a-fd00fc4a1fe6"
  },
  {
    name: "菏泽职业学院",
    abbreviation: "hzzyxy",
    province: "山东省",
    id: "d38e675c-0da3-4e09-9228-664351635c83"
  },
  {
    name: "山东艺术设计职业学院",
    abbreviation: "sysy",
    province: "山东省",
    id: "4725551f-866c-4b36-a8de-28c929fc66f8"
  },
  {
    name: "威海海洋职业学院",
    abbreviation: "whovc",
    province: "山东省",
    id: "4881eab0-0f07-4f8d-94f1-93c38a97ad9d"
  },
  {
    name: "山东特殊教育职业学院",
    abbreviation: "sdse",
    province: "山东省",
    id: "2e56dc3e-e312-4b36-9824-0f5d5538d908"
  },
  {
    name: "烟台黄金职业学院",
    abbreviation: "ytgoldcoll",
    province: "山东省",
    id: "12c7fd91-18b4-4b61-b65a-b66debd15933"
  },
  {
    name: "日照航海工程职业学院",
    abbreviation: "rzmevc",
    province: "山东省",
    id: "2b72e4b1-017f-476d-8f04-f52ca49f4b8d"
  },
  {
    name: "华北水利水电大学",
    abbreviation: "ncwu",
    province: "河南省",
    id: "278c5adc-0199-4ca5-960c-79d16c2a1f9a"
  },
  {
    name: "郑州大学",
    abbreviation: "zzu",
    province: "河南省",
    id: "867dc41c-65d5-4aae-b10e-44cff2b2c663"
  },
  {
    name: "河南理工大学",
    abbreviation: "hpu",
    province: "河南省",
    id: "6ad7fdfe-a87a-4aa5-a214-6d952f32cab5"
  },
  {
    name: "郑州轻工业学院",
    abbreviation: "zzili",
    province: "河南省",
    id: "5661617c-385e-49bd-a465-16ee604422d3"
  },
  {
    name: "河南工业大学",
    abbreviation: "haut",
    province: "河南省",
    id: "5a05d068-1242-48e4-91f5-a342e1540787"
  },
  {
    name: "河南科技大学",
    abbreviation: "haust",
    province: "河南省",
    id: "2dee9f2e-fc0e-4f7b-b4db-9bafba04a2c9"
  },
  {
    name: "中原工学院",
    abbreviation: "zzti",
    province: "河南省",
    id: "50385b56-be28-4670-a981-5c1bc4db6e92"
  },
  {
    name: "河南农业大学",
    abbreviation: "henau",
    province: "河南省",
    id: "57275f3b-cdeb-48af-83fb-017cc7023aa5"
  },
  {
    name: "河南科技学院",
    abbreviation: "hist",
    province: "河南省",
    id: "0a570812-61fb-490f-a318-69284d29e0e9"
  },
  {
    name: "河南牧业经济学院",
    abbreviation: "habc",
    province: "河南省",
    id: "39e83b63-1a6f-4056-b573-f9bded0ba4fe"
  },
  {
    name: "河南中医药大学",
    abbreviation: "hactcm",
    province: "河南省",
    id: "25c1d4b1-0db6-4f0e-86b9-f23f143ab8b5"
  },
  {
    name: "新乡医学院",
    abbreviation: "xxmu",
    province: "河南省",
    id: "3996ea8e-6722-42db-b110-76d74826676f"
  },
  {
    name: "河南大学",
    abbreviation: "henu",
    province: "河南省",
    id: "281e92e0-03d3-4b23-be44-8942ab80950e"
  },
  {
    name: "河南师范大学",
    abbreviation: "henannu",
    province: "河南省",
    id: "dbe094ba-135d-4086-8ef3-a0141498be12"
  },
  {
    name: "信阳师范学院",
    abbreviation: "xytc",
    province: "河南省",
    id: "4445f1d5-7160-4f0e-9fa4-636fc272cef5"
  },
  {
    name: "周口师范学院",
    abbreviation: "zknu",
    province: "河南省",
    id: "a8a0a147-5f62-478c-9bbe-d8969e8df316"
  },
  {
    name: "安阳师范学院",
    abbreviation: "aynu",
    province: "河南省",
    id: "c8930f14-dc6c-4336-868f-619f979184e9"
  },
  {
    name: "许昌学院",
    abbreviation: "xcu",
    province: "河南省",
    id: "7dbeefbb-6143-495b-915c-24886d538fb6"
  },
  {
    name: "南阳师范学院",
    abbreviation: "nynu",
    province: "河南省",
    id: "36fee777-4e28-4b42-b6b9-5aab69772065"
  },
  {
    name: "洛阳师范学院",
    abbreviation: "lynu",
    province: "河南省",
    id: "d3cea6f9-7b49-476a-b814-57f2305437e7"
  },
  {
    name: "商丘师范学院",
    abbreviation: "sqnc",
    province: "河南省",
    id: "aecd5968-37d6-446b-82af-1323855cbe4c"
  },
  {
    name: "河南财经政法大学",
    abbreviation: "huel",
    province: "河南省",
    id: "f2d47ce7-7b6a-4ff2-852f-5efc7e86e2dc"
  },
  {
    name: "郑州航空工业管理学院",
    abbreviation: "zzia",
    province: "河南省",
    id: "84afb176-5a03-4017-be50-50acc3e303bc"
  },
  {
    name: "黄淮学院",
    abbreviation: "huanghuai",
    province: "河南省",
    id: "af2dc699-9648-4d29-b083-fa1718dc9efd"
  },
  {
    name: "平顶山学院",
    abbreviation: "pdsu",
    province: "河南省",
    id: "aa9ac263-d7a7-4bce-b737-ad36298dfbae"
  },
  {
    name: "郑州工程技术学院",
    abbreviation: "zhzhu",
    province: "河南省",
    id: "248ca1fd-1d03-4b15-9c4b-9247f4d175ea"
  },
  {
    name: "洛阳理工学院",
    abbreviation: "lit",
    province: "河南省",
    id: "83931e8b-ca4d-429c-b40b-bfff3ea80bcb"
  },
  {
    name: "新乡学院",
    abbreviation: "xxu",
    province: "河南省",
    id: "44cc2273-8833-4772-b7e2-8575f1581c20"
  },
  {
    name: "信阳农林学院",
    abbreviation: "xyac",
    province: "河南省",
    id: "261a8986-b670-428e-957d-35bc9c381a22"
  },
  {
    name: "河南工学院",
    abbreviation: "hneeu",
    province: "河南省",
    id: "d280110c-a7fb-47ea-a8a7-93dd49cda72f"
  },
  {
    name: "安阳工学院",
    abbreviation: "ayit",
    province: "河南省",
    id: "9d4a3f4e-de4e-4dee-aa90-147b3076335c"
  },
  {
    name: "河南工程学院",
    abbreviation: "haue",
    province: "河南省",
    id: "34640a4b-51e8-454b-b543-5cae4403eef4"
  },
  {
    name: "河南财政金融学院",
    abbreviation: "hacz",
    province: "河南省",
    id: "4a9c3748-f6a1-48e6-aa5d-1a0637ac2053"
  },
  {
    name: "南阳理工学院",
    abbreviation: "nyist",
    province: "河南省",
    id: "74878a58-d9bb-4fdc-94d4-d09e3bb62d20"
  },
  {
    name: "河南城建学院",
    abbreviation: "hncj",
    province: "河南省",
    id: "4bc80cca-6aac-46b2-a93d-111ca3ecc006"
  },
  {
    name: "河南警察学院",
    abbreviation: "hngazk",
    province: "河南省",
    id: "f4a0a45e-26f6-4b26-beb2-a0f6f33eb111"
  },
  {
    name: "黄河科技学院",
    abbreviation: "hhstu",
    province: "河南省",
    id: "e1e0df32-4d5f-4f53-bde1-b673fad68883"
  },
  {
    name: "铁道警察学院",
    abbreviation: "rpc",
    province: "河南省",
    id: "e8c448f2-beed-406b-af3c-e0182ef9f720"
  },
  {
    name: "郑州科技学院",
    abbreviation: "zzist",
    province: "河南省",
    id: "df8e1562-af9c-4b69-82f8-64029f1db996"
  },
  {
    name: "郑州工业应用技术学院",
    abbreviation: "zzhxxy",
    province: "河南省",
    id: "d7c68273-8222-4b14-bb8a-f5f55f85f8a3"
  },
  {
    name: "郑州师范学院",
    abbreviation: "zztc",
    province: "河南省",
    id: "ed6e2f7b-713d-4173-8177-208d91eb5f9a"
  },
  {
    name: "郑州财经学院",
    abbreviation: "zzjm",
    province: "河南省",
    id: "9ddd23da-c6d9-44ac-b69b-ee0be13cbb49"
  },
  {
    name: "黄河交通学院",
    abbreviation: "zjtu",
    province: "河南省",
    id: "f69cd207-20ec-4e3a-85ca-da14088f9eb2"
  },
  {
    name: "商丘工学院",
    abbreviation: "sstvc",
    province: "河南省",
    id: "96305f8a-880c-4983-8592-34e8d8a8768b"
  },
  {
    name: "河南大学民生学院",
    abbreviation: "henu",
    province: "河南省",
    id: "5e919f13-c9c9-41df-b10c-6d2e66bfde95"
  },
  {
    name: "河南师范大学新联学院",
    abbreviation: "xlxy",
    province: "河南省",
    id: "40cb521a-2681-4767-8d71-d288b28aa654"
  },
  {
    name: "信阳学院",
    abbreviation: "hrxy",
    province: "河南省",
    id: "32f3ee1a-80d2-480a-a91b-41f999312e30"
  },
  {
    name: "安阳学院",
    abbreviation: "ayrwedu",
    province: "河南省",
    id: "ad54510d-4c9d-4b33-9f0b-916263c668c9"
  },
  {
    name: "新乡医学院三全学院",
    abbreviation: "sqmc",
    province: "河南省",
    id: "de4f56b4-812d-4c7c-aeac-8b2a9bfe9a83"
  },
  {
    name: "河南科技学院新科学院",
    abbreviation: "hist",
    province: "河南省",
    id: "5de3031c-5561-4fe1-81fe-9dabe5f6bb18"
  },
  {
    name: "郑州工商学院",
    abbreviation: "wanfang",
    province: "河南省",
    id: "246f506f-92b6-4815-af69-a8cbaeb01b77"
  },
  {
    name: "中原工学院信息商务学院",
    abbreviation: "zcib",
    province: "河南省",
    id: "75328498-5c6f-45fb-815f-be8085adb1bf"
  },
  {
    name: "商丘学院",
    abbreviation: "hnhyedu",
    province: "河南省",
    id: "82709b5b-c63a-4266-b9f0-cca511a8a7d3"
  },
  {
    name: "郑州成功财经学院",
    abbreviation: "chenggong",
    province: "河南省",
    id: "a1e6bcf2-e730-445c-a8a1-be3e8e0d0b0d"
  },
  {
    name: "郑州升达经贸管理学院",
    abbreviation: "shengda",
    province: "河南省",
    id: "65b42b44-a8cb-4f0e-91fc-1ebd33827112"
  },
  {
    name: "河南职业技术学院",
    abbreviation: "hnzj",
    province: "河南省",
    id: "e2883436-7ed4-47d0-acdd-147731f4b92d"
  },
  {
    name: "漯河职业技术学院",
    abbreviation: "lhvtc",
    province: "河南省",
    id: "5ff0a050-4d23-4dd7-ae3b-22c6f64fce3e"
  },
  {
    name: "三门峡职业技术学院",
    abbreviation: "smxpt",
    province: "河南省",
    id: "6d037b27-e481-475b-a94c-c15468644d08"
  },
  {
    name: "郑州铁路职业技术学院",
    abbreviation: "zzrvtc",
    province: "河南省",
    id: "d93673fe-7d05-470a-ad26-93e215bfa8e7"
  },
  {
    name: "开封大学",
    abbreviation: "kfu",
    province: "河南省",
    id: "267ffa2e-c0fa-4252-9828-57decffc2b50"
  },
  {
    name: "焦作大学",
    abbreviation: "jzu",
    province: "河南省",
    id: "549f8ef6-5346-4a7e-8cf2-200a57e25e9c"
  },
  {
    name: "濮阳职业技术学院",
    abbreviation: "pyvtc",
    province: "河南省",
    id: "7e422501-e442-43bf-a93b-15cc6614114f"
  },
  {
    name: "郑州电力高等专科学校",
    abbreviation: "zepc",
    province: "河南省",
    id: "ac9b9070-fa53-4c69-9841-d703a6b56b7a"
  },
  {
    name: "黄河水利职业技术学院",
    abbreviation: "yrcti",
    province: "河南省",
    id: "fe245658-6e0e-4e17-8f52-ac7f2ef3726b"
  },
  {
    name: "许昌职业技术学院",
    abbreviation: "xcitc",
    province: "河南省",
    id: "98acc39a-51fc-4ca8-9446-e7c46562ae4c"
  },
  {
    name: "河南工业和信息化职业学院",
    abbreviation: "hnets",
    province: "河南省",
    id: "ae471815-25cc-49ac-aefb-170fa762874b"
  },
  {
    name: "河南水利与环境职业学院",
    abbreviation: "zzslxx",
    province: "河南省",
    id: "4c615940-29c7-43b0-bd41-2f02f2c64328"
  },
  {
    name: "商丘职业技术学院",
    abbreviation: "sqzy",
    province: "河南省",
    id: "1af973e2-e88e-43bc-9f51-59c1902c253e"
  },
  {
    name: "平顶山工业职业技术学院",
    abbreviation: "pzxy",
    province: "河南省",
    id: "b35b2db8-9b51-4b99-900c-81ac5998da97"
  },
  {
    name: "周口职业技术学院",
    abbreviation: "zkvtc",
    province: "河南省",
    id: "cf37be26-1e2c-4f5e-8ae2-bc9209ee15eb"
  },
  {
    name: "济源职业技术学院",
    abbreviation: "jyvtc",
    province: "河南省",
    id: "b96ca3e9-3916-473e-9be4-bd5180649ab3"
  },
  {
    name: "河南司法警官职业学院",
    abbreviation: "hnsfjg",
    province: "河南省",
    id: "a47c48d3-5258-498b-8615-c76d23846fb8"
  },
  {
    name: "鹤壁职业技术学院",
    abbreviation: "hbzy",
    province: "河南省",
    id: "e57d7277-0c15-4c9c-a6dc-c2a230c9a72e"
  },
  {
    name: "河南工业职业技术学院",
    abbreviation: "hnpi",
    province: "河南省",
    id: "9aef9e86-ccc3-403e-8d59-f2e8392ee617"
  },
  {
    name: "郑州澍青医学高等专科学校",
    abbreviation: "shuqing",
    province: "河南省",
    id: "2e4cdfa1-f6d8-4a42-9538-de9c003579e9"
  },
  {
    name: "焦作师范高等专科学校",
    abbreviation: "jzsz",
    province: "河南省",
    id: "9dd3e3b9-14de-43f8-a150-ac04c2937bfd"
  },
  {
    name: "河南检察职业学院",
    abbreviation: "hnjc",
    province: "河南省",
    id: "dae41a60-14b6-44fc-b781-98d8db8d1e6f"
  },
  {
    name: "河南质量工程职业学院",
    abbreviation: "zlxy",
    province: "河南省",
    id: "4ef7e4ea-16da-456d-9e10-b2cf2d5380ae"
  },
  {
    name: "郑州信息科技职业学院",
    abbreviation: "techcolleg",
    province: "河南省",
    id: "8cafa87a-9e60-400b-a666-0207210dff4d"
  },
  {
    name: "漯河医学高等专科学校",
    abbreviation: "lhmc",
    province: "河南省",
    id: "0efe0dd1-b587-4cc4-816c-aa848adb22c6"
  },
  {
    name: "南阳医学高等专科学校",
    abbreviation: "nymc",
    province: "河南省",
    id: "4c11822c-70a5-4c7b-961f-de9d59db671d"
  },
  {
    name: "商丘医学高等专科学校",
    abbreviation: "sqyx",
    province: "河南省",
    id: "a5deadfd-839c-4c24-9ef9-f1af6fa4376a"
  },
  {
    name: "郑州电子信息职业技术学院",
    abbreviation: "zyfb",
    province: "河南省",
    id: "3bc1675d-4a49-4db3-801c-19e6495833c3"
  },
  {
    name: "信阳职业技术学院",
    abbreviation: "xyvtc",
    province: "河南省",
    id: "fbaf3d19-c17b-46a4-8940-effdf496c47c"
  },
  {
    name: "嵩山少林武术职业学院",
    abbreviation: "shaolinkun",
    province: "河南省",
    id: "4d3a171d-9cf8-4369-8184-e483a038d674"
  },
  {
    name: "郑州工业安全职业学院",
    abbreviation: "zazy",
    province: "河南省",
    id: "acec896b-c15d-4abb-94ce-e5b7ccc31143"
  },
  {
    name: "永城职业学院",
    abbreviation: "yczyxy",
    province: "河南省",
    id: "c6a19948-fe81-4f15-aa79-73be9fc2c08c"
  },
  {
    name: "河南经贸职业学院",
    abbreviation: "hnjmxy",
    province: "河南省",
    id: "3a020451-f911-49c3-bf88-b218de2ae1e8"
  },
  {
    name: "河南交通职业技术学院",
    abbreviation: "hncc",
    province: "河南省",
    id: "0c16faea-2f6f-405c-8866-3ac5349de4dd"
  },
  {
    name: "河南农业职业学院",
    abbreviation: "hnac",
    province: "河南省",
    id: "b1283000-49d5-4145-85e6-6aeaa6fb6270"
  },
  {
    name: "郑州旅游职业学院",
    abbreviation: "zztrc",
    province: "河南省",
    id: "e9e3d72d-609a-4158-8a36-5f0429ebf378"
  },
  {
    name: "郑州职业技术学院",
    abbreviation: "zzyedu",
    province: "河南省",
    id: "231dc833-3bfe-4e7a-b03a-180510cd0be0"
  },
  {
    name: "河南信息统计职业学院",
    abbreviation: "hnisvc",
    province: "河南省",
    id: "f0924f12-d043-4488-bc57-1d8d29229954"
  },
  {
    name: "河南林业职业学院",
    abbreviation: "hnfjc",
    province: "河南省",
    id: "07c7ccf8-9de6-4d23-931e-89229b42a81a"
  },
  {
    name: "河南工业贸易职业学院",
    abbreviation: "hngm",
    province: "河南省",
    id: "f55ae74c-bb5a-4fcc-94a7-92c4fee79659"
  },
  {
    name: "郑州电力职业技术学院",
    abbreviation: "zzdl",
    province: "河南省",
    id: "fff47e18-ffae-408b-ba0e-f08a6eb4a3ea"
  },
  {
    name: "周口科技职业学院",
    abbreviation: "zkkjxy",
    province: "河南省",
    id: "4e0ec94c-a7c0-4137-9d97-a6ad0f2036af"
  },
  {
    name: "河南建筑职业技术学院",
    abbreviation: "hnjs",
    province: "河南省",
    id: "054ddae4-b157-4b8d-beec-0da50def4436"
  },
  {
    name: "漯河食品职业学院",
    abbreviation: "lsgx",
    province: "河南省",
    id: "d239495c-e71c-428f-89cc-7eae77d920ea"
  },
  {
    name: "郑州城市职业学院",
    abbreviation: "brenda",
    province: "河南省",
    id: "49534d43-71bf-4513-b9b3-f492516ae3e3"
  },
  {
    name: "安阳职业技术学院",
    abbreviation: "anyangedu",
    province: "河南省",
    id: "be7f25cd-a742-456b-8e66-674eb556f913"
  },
  {
    name: "新乡职业技术学院",
    abbreviation: "xxvtc",
    province: "河南省",
    id: "e3f22085-b648-428a-ad7a-b627022482e5"
  },
  {
    name: "驻马店职业技术学院",
    abbreviation: "zmdvtc",
    province: "河南省",
    id: "f4bbd84d-47dc-45dd-bad1-ff57b4626359"
  },
  {
    name: "焦作工贸职业学院",
    abbreviation: "jzgmxy",
    province: "河南省",
    id: "b594fa13-0a8e-4da3-8f4e-8c31aac62563"
  },
  {
    name: "许昌陶瓷职业学院",
    abbreviation: "xccvc",
    province: "河南省",
    id: "ab8874d2-7943-400e-ac7c-5f15739935db"
  },
  {
    name: "郑州理工职业学院",
    abbreviation: "zzlgxy",
    province: "河南省",
    id: "1da272dd-3492-43f1-854f-5e017a55ed44"
  },
  {
    name: "郑州信息工程职业学院",
    abbreviation: "zxxyedu",
    province: "河南省",
    id: "7df85f2e-836a-48ef-817e-79260ac3590f"
  },
  {
    name: "长垣烹饪职业技术学院",
    abbreviation: "cyprxy",
    province: "河南省",
    id: "3de599ec-3b7b-48d8-8b90-bb5ddc5db026"
  },
  {
    name: "开封文化艺术职业学院",
    abbreviation: "kfvcca",
    province: "河南省",
    id: "a79d1ba6-ec2f-4e26-a73a-3daeb7193733"
  },
  {
    name: "河南应用技术职业学院",
    abbreviation: "haict",
    province: "河南省",
    id: "87ec3276-2d88-4005-9b16-abd9d4165fe4"
  },
  {
    name: "河南艺术职业学院",
    abbreviation: "hnyszyxy",
    province: "河南省",
    id: "5efd23e9-8259-49d1-996c-55018fdee9f5"
  },
  {
    name: "河南机电职业学院",
    abbreviation: "hnjd",
    province: "河南省",
    id: "e99720d9-5cc1-45a6-8b9c-710942e64084"
  },
  {
    name: "河南护理职业学院",
    abbreviation: "hncedu",
    province: "河南省",
    id: "b557beab-1120-446f-ae77-74238c48e68e"
  },
  {
    name: "许昌电气职业学院",
    abbreviation: "xcevc",
    province: "河南省",
    id: "0537b01a-846c-4b7a-aade-1d165a8d4d00"
  },
  {
    name: "信阳涉外职业技术学院",
    abbreviation: "xyswxy",
    province: "河南省",
    id: "6ae9ca0d-d2ae-45bd-bd25-ebea95160d15"
  },
  {
    name: "鹤壁汽车工程职业学院",
    abbreviation: "hbqcxy",
    province: "河南省",
    id: "c1c61c1f-36a5-4727-a792-81634ca3625e"
  },
  {
    name: "南阳职业学院",
    abbreviation: "nyzyxy",
    province: "河南省",
    id: "6bbce54c-0da3-449f-a1f5-940656beb5c7"
  },
  {
    name: "郑州商贸旅游职业学院",
    abbreviation: "zzvcct",
    province: "河南省",
    id: "ad29d387-f127-4365-9bcb-86bdaa83fe3f"
  },
  {
    name: "河南推拿职业学院",
    abbreviation: "hnzjschool",
    province: "河南省",
    id: "fc07a314-48ce-46e7-b3ee-2dc269f3b933"
  },
  {
    name: "洛阳职业技术学院",
    abbreviation: "lyvtc",
    province: "河南省",
    id: "f8e4c743-d422-4995-92e6-7114ef5a87fb"
  },
  {
    name: "郑州幼儿师范高等专科学校",
    abbreviation: "zyedu",
    province: "河南省",
    id: "9c808f01-9d05-4f86-be9b-4dbf12ad6ad3"
  },
  {
    name: "安阳幼儿师范高等专科学校",
    abbreviation: "ayys",
    province: "河南省",
    id: "ff1d9201-ff0c-429e-8b6d-15ed810b7f6c"
  },
  {
    name: "郑州黄河护理职业学院",
    abbreviation: "zyrnvc",
    province: "河南省",
    id: "0d204b62-ec9c-4833-b6ee-877260fa9482"
  },
  {
    name: "河南医学高等专科学校",
    abbreviation: "hamc",
    province: "河南省",
    id: "401e206f-f06a-41a5-b581-f0452f878655"
  },
  {
    name: "郑州财税金融职业学院",
    abbreviation: "zzcsjr",
    province: "河南省",
    id: "72f9cfb4-053f-4a9b-b01a-ad555597fa3b"
  },
  {
    name: "南阳农业职业学院",
    abbreviation: "nyac",
    province: "河南省",
    id: "8c108919-234a-4e63-b32b-c74dbb72afa0"
  },
  {
    name: "洛阳科技职业学院",
    abbreviation: "lykjxy",
    province: "河南省",
    id: "7d17b36a-8e6e-4b56-89c5-d7c85c89920c"
  },
  {
    name: "濮阳医学高等专科学校",
    abbreviation: "pyyzh",
    province: "河南省",
    id: "b47d764f-47f1-4118-968e-38fd675d64bc"
  },
  {
    name: "三门峡社会管理职业学院",
    abbreviation: "smxcsa",
    province: "河南省",
    id: "b612ece3-f1c2-4bad-805f-a0c39ed11b07"
  },
  {
    name: "河南轻工职业学院",
    abbreviation: "pili-zz",
    province: "河南省",
    id: "28bfebad-ab10-4f47-a9f8-5fe87c1d6933"
  },
  {
    name: "河南测绘职业学院",
    abbreviation: "zzcx",
    province: "河南省",
    id: "9624698e-d2e2-4bf5-bb86-ef3906a4530a"
  },
  {
    name: "武汉大学",
    abbreviation: "whu",
    province: "湖北省",
    id: "a546d7f1-a9f2-4a64-bdde-82141820fb68"
  },
  {
    name: "华中科技大学",
    abbreviation: "hust",
    province: "湖北省",
    id: "1780124d-c491-46d3-bfb7-7b33181d4b0e"
  },
  {
    name: "武汉科技大学",
    abbreviation: "wust",
    province: "湖北省",
    id: "683fe69d-bcd7-4bf7-8c77-cabe0220a631"
  },
  {
    name: "长江大学",
    abbreviation: "yangtzeu",
    province: "湖北省",
    id: "9a044026-cb05-468b-96b5-9a0fdf237e50"
  },
  {
    name: "武汉工程大学",
    abbreviation: "wit",
    province: "湖北省",
    id: "b3bfd22d-1243-40b6-b0d2-760e90408d3b"
  },
  {
    name: "中国地质大学（武汉）",
    abbreviation: "cug",
    province: "湖北省",
    id: "6ee7cc71-1474-4bbd-ac0c-359d48a58591"
  },
  {
    name: "武汉纺织大学",
    abbreviation: "wtu",
    province: "湖北省",
    id: "b6d2c70b-b34d-4155-a6cc-20ae1626eb05"
  },
  {
    name: "武汉轻工大学",
    abbreviation: "whpu",
    province: "湖北省",
    id: "89a4cb9f-70f2-43ea-b470-d4797a4c490c"
  },
  {
    name: "武汉理工大学",
    abbreviation: "whut",
    province: "湖北省",
    id: "1905301c-86d8-470d-a44c-865d0e6cbdc2"
  },
  {
    name: "湖北工业大学",
    abbreviation: "hbut",
    province: "湖北省",
    id: "e98a3f3d-d488-4133-8191-2158e93c9fda"
  },
  {
    name: "华中农业大学",
    abbreviation: "hzau",
    province: "湖北省",
    id: "1015596c-d5c4-4046-86e3-7ffc2560c520"
  },
  {
    name: "湖北中医药大学",
    abbreviation: "hbtcm",
    province: "湖北省",
    id: "8e5ee37a-2164-4e12-bced-a8dc033c6290"
  },
  {
    name: "华中师范大学",
    abbreviation: "ccnu",
    province: "湖北省",
    id: "df24a62a-9404-4da4-bbb5-d33dd05aa5c0"
  },
  {
    name: "湖北大学",
    abbreviation: "hubu",
    province: "湖北省",
    id: "8bd2eb81-56bd-467c-9a83-c7045298fcfe"
  },
  {
    name: "湖北师范大学",
    abbreviation: "hbnu",
    province: "湖北省",
    id: "8e759d2e-8c8f-4753-8eb6-15142a6fdf5e"
  },
  {
    name: "黄冈师范学院",
    abbreviation: "hgnu",
    province: "湖北省",
    id: "8c652acb-6deb-4059-83a4-7213f010986d"
  },
  {
    name: "湖北民族学院",
    abbreviation: "hbmy",
    province: "湖北省",
    id: "f5f3878e-96e6-4747-8051-37a75472b551"
  },
  {
    name: "汉江师范学院",
    abbreviation: "hjnu",
    province: "湖北省",
    id: "f95ec51e-efeb-4b47-937e-b4d77a24c082"
  },
  {
    name: "湖北文理学院",
    abbreviation: "hbuas",
    province: "湖北省",
    id: "99b4fefc-d94b-4e04-8fb1-abe3e6fcdbf2"
  },
  {
    name: "中南财经政法大学",
    abbreviation: "zuel",
    province: "湖北省",
    id: "c12ef7c6-cc21-450d-a522-c42f864b960b"
  },
  {
    name: "武汉体育学院",
    abbreviation: "whsu",
    province: "湖北省",
    id: "0622ac14-a80a-42d3-a5c9-1eb3d851fbb5"
  },
  {
    name: "湖北美术学院",
    abbreviation: "hifa",
    province: "湖北省",
    id: "8c46a77c-c587-4a31-b02e-5659fdac4456"
  },
  {
    name: "中南民族大学",
    abbreviation: "scuec",
    province: "湖北省",
    id: "99143370-f4a4-4e55-9d04-fdc5e507ddeb"
  },
  {
    name: "湖北汽车工业学院",
    abbreviation: "huat",
    province: "湖北省",
    id: "3258e695-b760-4ec0-bf6d-fc443354a4f3"
  },
  {
    name: "湖北工程学院",
    abbreviation: "hbeu",
    province: "湖北省",
    id: "3c9abd95-ed30-42c3-a3f8-886db209f8fb"
  },
  {
    name: "湖北理工学院",
    abbreviation: "hbpu",
    province: "湖北省",
    id: "9715085b-838f-4ae3-9140-733f4ae9549e"
  },
  {
    name: "湖北科技学院",
    abbreviation: "hbust",
    province: "湖北省",
    id: "97f46a14-8d25-4f99-aa53-f5c4f8c3a6d3"
  },
  {
    name: "湖北医药学院",
    abbreviation: "hbmu",
    province: "湖北省",
    id: "e739cdf8-8a61-4c36-a39c-6e4a29b95ada"
  },
  {
    name: "江汉大学",
    abbreviation: "jhun",
    province: "湖北省",
    id: "0c55effe-9d4e-4b27-b48e-3d632f0790a5"
  },
  {
    name: "三峡大学",
    abbreviation: "ctgu",
    province: "湖北省",
    id: "6ba28ecd-ab5b-490f-8e0f-98ef0eb0ec65"
  },
  {
    name: "湖北警官学院",
    abbreviation: "hbpa",
    province: "湖北省",
    id: "d1413d8c-0602-4421-b68d-3b3a579e54a0"
  },
  {
    name: "荆楚理工学院",
    abbreviation: "jcut",
    province: "湖北省",
    id: "cac257b0-1756-4849-964d-30260d7eeefb"
  },
  {
    name: "武汉音乐学院",
    abbreviation: "whcm",
    province: "湖北省",
    id: "68660a66-e311-4022-87fa-c05ff1b8795e"
  },
  {
    name: "湖北经济学院",
    abbreviation: "hbue",
    province: "湖北省",
    id: "32bfb7fc-c01e-4492-a168-75585972d9db"
  },
  {
    name: "武汉商学院",
    abbreviation: "wbu",
    province: "湖北省",
    id: "392bd33e-7960-46a0-915a-129098b90c32"
  },
  {
    name: "武汉东湖学院",
    abbreviation: "wdu",
    province: "湖北省",
    id: "30c457ef-d78d-4c85-8362-e79864742433"
  },
  {
    name: "汉口学院",
    abbreviation: "hkxy",
    province: "湖北省",
    id: "fb47cb9b-0358-4def-8d86-ff6ac6b068b6"
  },
  {
    name: "武昌首义学院",
    abbreviation: "wsyu",
    province: "湖北省",
    id: "89d090cb-5c51-48dd-b73e-d8ed624e0fa4"
  },
  {
    name: "武昌理工学院",
    abbreviation: "wut",
    province: "湖北省",
    id: "09b7b4ac-9ead-4a30-bd2b-74a265cf85f2"
  },
  {
    name: "武汉生物工程学院",
    abbreviation: "whsw",
    province: "湖北省",
    id: "d0eda8d9-68b2-410e-9589-3ecddaab9bb2"
  },
  {
    name: "武汉晴川学院",
    abbreviation: "cn/",
    province: "湖北省",
    id: "f04e141b-d987-4813-a83d-677d60ee381b"
  },
  {
    name: "湖北大学知行学院",
    abbreviation: "hudazx",
    province: "湖北省",
    id: "ad48d5ff-0831-49a1-9da5-2c9ffbfc14d3"
  },
  {
    name: "武汉科技大学城市学院",
    abbreviation: "city",
    province: "湖北省",
    id: "5a554909-208f-4b59-a3ed-4e331257d179"
  },
  {
    name: "三峡大学科技学院",
    abbreviation: "42",
    province: "湖北省",
    id: "b440084e-447b-4e82-86dc-f41c90206347"
  },
  {
    name: "江汉大学文理学院",
    abbreviation: "jdwlxy",
    province: "湖北省",
    id: "001a192f-635a-4421-add5-2eef092c35aa"
  },
  {
    name: "湖北工业大学工程技术学院",
    abbreviation: "hbut",
    province: "湖北省",
    id: "1c3cb425-5248-4137-a616-2143af6e5c63"
  },
  {
    name: "武汉工程大学邮电与信息工程学院",
    abbreviation: "witpt",
    province: "湖北省",
    id: "09ff7c53-a56e-46d3-bc6e-622c8ccfeb9d"
  },
  {
    name: "武汉纺织大学外经贸学院",
    abbreviation: "wtu",
    province: "湖北省",
    id: "0bb7cbca-de5a-4b2f-bf6c-0c114f4d60f1"
  },
  {
    name: "武昌工学院",
    abbreviation: "wuit",
    province: "湖北省",
    id: "29e4e19b-19cf-4a31-a5eb-5b9272a81466"
  },
  {
    name: "武汉工商学院",
    abbreviation: "wtbu",
    province: "湖北省",
    id: "b9c7a7c1-e738-4717-8a25-caf1ebf51517"
  },
  {
    name: "长江大学工程技术学院",
    abbreviation: "yangtzeu",
    province: "湖北省",
    id: "eb2aaf8e-8f17-46bc-9ab1-87a166521d69"
  },
  {
    name: "长江大学文理学院",
    abbreviation: "yangtzeu",
    province: "湖北省",
    id: "8f04725d-7352-477d-8c19-9189ef7760b3"
  },
  {
    name: "湖北商贸学院",
    abbreviation: "hugsmxy",
    province: "湖北省",
    id: "22e56180-4f9f-4bfe-a40b-0ca3d90abe36"
  },
  {
    name: "湖北汽车工业学院科技学院",
    abbreviation: "huat",
    province: "湖北省",
    id: "ec2f60fe-2cad-453b-b5a7-dab00d002d7d"
  },
  {
    name: "湖北医药学院药护学院",
    abbreviation: "hbmu",
    province: "湖北省",
    id: "07bc2683-731b-4835-896e-a8cd6b10d525"
  },
  {
    name: "湖北民族学院科技学院",
    abbreviation: "hbmykjxy",
    province: "湖北省",
    id: "84172d1c-93d7-4ebf-abf3-ac810d988ec9"
  },
  {
    name: "湖北经济学院法商学院",
    abbreviation: "hbue",
    province: "湖北省",
    id: "8f60fb62-e9ba-46a7-8ae0-6345eb6fdb54"
  },
  {
    name: "武汉体育学院体育科技学院",
    abbreviation: "kjxy",
    province: "湖北省",
    id: "5a9dbc62-3f4b-4344-be28-67ebb4d45bc6"
  },
  {
    name: "湖北师范大学文理学院",
    abbreviation: "wlxy",
    province: "湖北省",
    id: "d2132849-310a-4aac-b493-4bd1fdc7c627"
  },
  {
    name: "湖北文理学院理工学院",
    abbreviation: "xfu",
    province: "湖北省",
    id: "a94a79df-e09c-45f4-8e3f-fbca4a8bb028"
  },
  {
    name: "湖北工程学院新技术学院",
    abbreviation: "hbeutc",
    province: "湖北省",
    id: "f684340a-329e-4d83-bb4b-d0171c174632"
  },
  {
    name: "文华学院",
    abbreviation: "hustwenhua",
    province: "湖北省",
    id: "d7a5eb63-a10c-4eb2-80c6-5302c2ebf7d1"
  },
  {
    name: "武汉学院",
    abbreviation: "whxy",
    province: "湖北省",
    id: "ae2f79ff-aa01-47ed-9d53-30b20ada2b0e"
  },
  {
    name: "武汉工程科技学院",
    abbreviation: "wuhues",
    province: "湖北省",
    id: "2ecbff97-57d7-448e-a2cd-724eef9bc5ad"
  },
  {
    name: "武汉华夏理工学院",
    abbreviation: "1957",
    province: "湖北省",
    id: "de9a44c2-53f0-4aeb-a565-a4ef45dde6a7"
  },
  {
    name: "武汉传媒学院",
    abbreviation: "whmc",
    province: "湖北省",
    id: "0d326808-6a19-4b5b-b933-a53707828ffa"
  },
  {
    name: "武汉设计工程学院",
    abbreviation: "hnctxy",
    province: "湖北省",
    id: "c003f60a-bb82-471c-933e-4cf46e5ab0d2"
  },
  {
    name: "湖北第二师范学院",
    abbreviation: "hue",
    province: "湖北省",
    id: "e76a5c35-2f16-446f-a741-0c6cd57fc1e8"
  },
  {
    name: "武汉职业技术学院",
    abbreviation: "wtc",
    province: "湖北省",
    id: "e0df2097-3e9b-40bf-9afa-71804ce48051"
  },
  {
    name: "黄冈职业技术学院",
    abbreviation: "hbhgzy",
    province: "湖北省",
    id: "b9d3bd29-46e0-49a0-bc56-003adfafdc61"
  },
  {
    name: "长江职业学院",
    abbreviation: "cjxy",
    province: "湖北省",
    id: "4b419724-b473-4780-9009-7a3203b6864f"
  },
  {
    name: "荆州理工职业学院",
    abbreviation: "ssdx",
    province: "湖北省",
    id: "e0fff35e-c8d6-41b0-a562-8585d78dbcd8"
  },
  {
    name: "湖北工业职业技术学院",
    abbreviation: "syzy",
    province: "湖北省",
    id: "edca9886-1e86-431f-9eea-929b3ffcb5bf"
  },
  {
    name: "鄂州职业大学",
    abbreviation: "ezu",
    province: "湖北省",
    id: "96f050c7-1370-4eb5-a5c6-f862be30a95d"
  },
  {
    name: "武汉城市职业学院",
    abbreviation: "whcvc",
    province: "湖北省",
    id: "4328b628-ee9a-4113-bcf5-f63016bcc09e"
  },
  {
    name: "湖北职业技术学院",
    abbreviation: "hbvtc",
    province: "湖北省",
    id: "2e046b0b-6fb8-41ef-8d9a-d2c2af0783c8"
  },
  {
    name: "武汉船舶职业技术学院",
    abbreviation: "wspc",
    province: "湖北省",
    id: "ea0284ca-c170-4657-be47-66d92426ace5"
  },
  {
    name: "恩施职业技术学院",
    abbreviation: "eszy",
    province: "湖北省",
    id: "27cf0316-f5b1-428d-b0e8-61a381832565"
  },
  {
    name: "襄阳职业技术学院",
    abbreviation: "hbxftc",
    province: "湖北省",
    id: "4674e196-d984-4df6-89d6-7eba2486c1c3"
  },
  {
    name: "武汉工贸职业学院",
    abbreviation: "whgmxy",
    province: "湖北省",
    id: "d1129f17-92d4-4270-a639-f1dea399d3fe"
  },
  {
    name: "荆州职业技术学院",
    abbreviation: "jzit",
    province: "湖北省",
    id: "f4e9862f-8612-46ca-8324-02ab9ba74a46"
  },
  {
    name: "武汉工程职业技术学院",
    abbreviation: "wgxy",
    province: "湖北省",
    id: "71310334-27b8-4284-8eb9-1aac81bd07b2"
  },
  {
    name: "仙桃职业学院",
    abbreviation: "hbxtzy",
    province: "湖北省",
    id: "b4b62247-603e-429b-8795-d38544e58c4a"
  },
  {
    name: "湖北轻工职业技术学院",
    abbreviation: "hbliti",
    province: "湖北省",
    id: "ae6dc98f-687c-4d57-87c9-c8d91c67e86f"
  },
  {
    name: "湖北交通职业技术学院",
    abbreviation: "hbctc",
    province: "湖北省",
    id: "33b2c1a8-706c-4932-9cb3-d0ad21302433"
  },
  {
    name: "湖北中医药高等专科学校",
    abbreviation: "hbzyy",
    province: "湖北省",
    id: "aaf24aa4-2d30-4eea-a57e-79bae810b564"
  },
  {
    name: "武汉航海职业技术学院",
    abbreviation: "whhhxy",
    province: "湖北省",
    id: "40593e04-6fb8-465c-b9c9-a2cda2a9ac77"
  },
  {
    name: "武汉铁路职业技术学院",
    abbreviation: "wru",
    province: "湖北省",
    id: "041e80e9-14f3-498b-b065-14a767c16f4b"
  },
  {
    name: "武汉软件工程职业学院",
    abbreviation: "whvcse",
    province: "湖北省",
    id: "be4ed5ac-e552-40f7-b4e7-4ecacfb4bf25"
  },
  {
    name: "湖北三峡职业技术学院",
    abbreviation: "tgc",
    province: "湖北省",
    id: "43ab2d98-9fa9-4f4b-bfbc-6db400b55ee5"
  },
  {
    name: "随州职业技术学院",
    abbreviation: "szvtc",
    province: "湖北省",
    id: "239311ee-11fc-4b2d-899c-d68c55031e7a"
  },
  {
    name: "武汉电力职业技术学院",
    abbreviation: "whetc",
    province: "湖北省",
    id: "ac5c6505-54b7-4229-a580-622e81cefddf"
  },
  {
    name: "湖北水利水电职业技术学院",
    abbreviation: "hbsy",
    province: "湖北省",
    id: "a699cce7-82bb-49a3-8964-5b260ad71126"
  },
  {
    name: "湖北城市建设职业技术学院",
    abbreviation: "ucvc",
    province: "湖北省",
    id: "1db83067-2135-41c5-98f1-bdca093c39ef"
  },
  {
    name: "武汉警官职业学院",
    abbreviation: "whpa",
    province: "湖北省",
    id: "b72e05c0-a2f8-4c61-b82e-14a3912e4348"
  },
  {
    name: "湖北生物科技职业学院",
    abbreviation: "hbswkj",
    province: "湖北省",
    id: "bf684a5b-53a2-475b-960a-0e42e5368278"
  },
  {
    name: "湖北开放职业学院",
    abbreviation: "hbou",
    province: "湖北省",
    id: "a276aec8-0031-40d0-a3ec-459daaadf7b1"
  },
  {
    name: "武汉科技职业学院",
    abbreviation: "whkjzy",
    province: "湖北省",
    id: "8201ec0a-5c9e-489f-80e1-527aea56a4d3"
  },
  {
    name: "武汉外语外事职业学院",
    abbreviation: "whflfa",
    province: "湖北省",
    id: "ae23c128-b3ca-46b3-a5f3-3722cf878e01"
  },
  {
    name: "武汉信息传播职业技术学院",
    abbreviation: "whinfo",
    province: "湖北省",
    id: "cc8f3b53-47c3-43f4-b904-a4c5961bb561"
  },
  {
    name: "武昌职业学院",
    abbreviation: "wlci",
    province: "湖北省",
    id: "1abd90b0-568b-4ad2-9b95-e1fd2cf809ef"
  },
  {
    name: "武汉商贸职业学院",
    abbreviation: "whicu",
    province: "湖北省",
    id: "b26a246e-cd3b-4732-b89f-f1cf82d230f1"
  },
  {
    name: "湖北艺术职业学院",
    abbreviation: "artschool",
    province: "湖北省",
    id: "671ceb91-f012-4140-aa82-b4251f1c259a"
  },
  {
    name: "武汉交通职业学院",
    abbreviation: "whjzy",
    province: "湖北省",
    id: "3531ac98-bac1-4bd9-8d18-88fbec0892a7"
  },
  {
    name: "咸宁职业技术学院",
    abbreviation: "xnec",
    province: "湖北省",
    id: "01a3e2ba-c262-4e13-bc99-875662fced0d"
  },
  {
    name: "长江工程职业技术学院",
    abbreviation: "cj-edu",
    province: "湖北省",
    id: "27e6670c-ef9e-4447-bebc-b16af88e99cd"
  },
  {
    name: "江汉艺术职业学院",
    abbreviation: "hbjhart",
    province: "湖北省",
    id: "40130d8b-1178-48b1-9c1f-81a0ad31f354"
  },
  {
    name: "武汉工业职业技术学院",
    abbreviation: "wgy",
    province: "湖北省",
    id: "de646e1d-ec3f-44a5-9c0c-3f34813f852b"
  },
  {
    name: "武汉民政职业学院",
    abbreviation: "whmzxy",
    province: "湖北省",
    id: "672c07d8-af77-40a4-a7b2-a6add5cea878"
  },
  {
    name: "鄂东职业技术学院",
    abbreviation: "edzy",
    province: "湖北省",
    id: "f8452c6d-a375-4973-bf94-0d12a88390ae"
  },
  {
    name: "湖北财税职业学院",
    abbreviation: "hbftc",
    province: "湖北省",
    id: "28243826-bdcf-4ab2-8aa4-7f7b5dc55f06"
  },
  {
    name: "黄冈科技职业学院",
    abbreviation: "hbhgkj",
    province: "湖北省",
    id: "c054a18b-c77a-4ec8-8698-277dcfde955f"
  },
  {
    name: "湖北国土资源职业学院",
    abbreviation: "hbgt",
    province: "湖北省",
    id: "67c44dd0-772f-4af7-bc51-60aa6497e6c3"
  },
  {
    name: "湖北生态工程职业技术学院",
    abbreviation: "hb-green",
    province: "湖北省",
    id: "ecb5555c-d8b8-4da0-a4ab-34c91ec13e24"
  },
  {
    name: "三峡电力职业学院",
    abbreviation: "tgcep",
    province: "湖北省",
    id: "81c8f7d8-fc71-4d11-af98-6079677c9b8c"
  },
  {
    name: "湖北科技职业学院",
    abbreviation: "hubstc",
    province: "湖北省",
    id: "99665beb-9515-4ad9-8ba9-29eaec1f4eab"
  },
  {
    name: "湖北青年职业学院",
    abbreviation: "hbqnxy",
    province: "湖北省",
    id: "371c2e50-f865-4419-a6b7-c7152863be10"
  },
  {
    name: "湖北工程职业学院",
    abbreviation: "hspt",
    province: "湖北省",
    id: "d36cceb7-1ffa-4de7-9672-64e6c135343b"
  },
  {
    name: "三峡旅游职业技术学院",
    abbreviation: "sxlyzy",
    province: "湖北省",
    id: "d855e56b-dfd3-402f-9a1b-6b25b67249ac"
  },
  {
    name: "天门职业学院",
    abbreviation: "tmzyxy",
    province: "湖北省",
    id: "e59b2dcb-7718-413b-a11f-b404f14ff7ef"
  },
  {
    name: "湖北体育职业学院",
    abbreviation: "hbtyzy",
    province: "湖北省",
    id: "a9ed642d-79d5-4478-9a59-94642f2c06de"
  },
  {
    name: "襄阳汽车职业技术学院",
    abbreviation: "xyqczy",
    province: "湖北省",
    id: "95105d45-e774-402b-9055-7ae7befc3aab"
  },
  {
    name: "湖北幼儿师范高等专科学校",
    abbreviation: "hbssyys",
    province: "湖北省",
    id: "937df98e-299a-46cb-80ea-9561fc3a9955"
  },
  {
    name: "湖北铁道运输职业学院",
    abbreviation: "wtsx",
    province: "湖北省",
    id: "91be788c-3eab-420d-aea8-1c1e709ddeea"
  },
  {
    name: "武汉海事职业学院",
    abbreviation: "whmvc",
    province: "湖北省",
    id: "04fcd913-f543-4b76-948d-616b66aad566"
  },
  {
    name: "长江艺术工程职业学院",
    abbreviation: "cj-cx",
    province: "湖北省",
    id: "63f5c7b6-8e16-4a91-b696-04c914765aef"
  },
  {
    name: "荆门职业学院",
    abbreviation: "jmzyxy",
    province: "湖北省",
    id: "77795a43-c2d0-4086-be6f-935ca3dadac6"
  },
  {
    name: "武汉铁路桥梁职业学院",
    abbreviation: "wrbss",
    province: "湖北省",
    id: "92f279ab-b15c-4daa-b9a0-9ac765e3bdac"
  },
  {
    name: "武汉光谷职业学院",
    abbreviation: "whggvc",
    province: "湖北省",
    id: "8166be3b-ff2d-4f12-b037-ef9ac86b7e11"
  },
  {
    name: "湖北师范学院文理学院",
    abbreviation: "wlxy",
    province: "湖北省",
    id: "716c78b7-b47c-4de1-9f09-46736cf635a6"
  },
  {
    name: "湘潭大学",
    abbreviation: "xtu",
    province: "湖南省",
    id: "3d299fd4-2606-4466-a4fc-c204c7751fd9"
  },
  {
    name: "吉首大学",
    abbreviation: "jsu",
    province: "湖南省",
    id: "04dfb88c-ee14-49a9-a884-d823fe3bb83f"
  },
  {
    name: "湖南大学",
    abbreviation: "hnu",
    province: "湖南省",
    id: "4611d133-6ef0-4d5f-983b-28f02082237d"
  },
  {
    name: "中南大学",
    abbreviation: "csu",
    province: "湖南省",
    id: "5451e452-2882-4c36-8344-62dbddf74dd0"
  },
  {
    name: "湖南科技大学",
    abbreviation: "hnust",
    province: "湖南省",
    id: "aa7c7a38-a7c7-4518-8a9e-733425642520"
  },
  {
    name: "长沙理工大学",
    abbreviation: "csust",
    province: "湖南省",
    id: "3c811468-912b-4aaa-a12b-8f769701dbb4"
  },
  {
    name: "湖南农业大学",
    abbreviation: "hunau",
    province: "湖南省",
    id: "11db0872-9048-42dc-af5d-0895b0b7cbc3"
  },
  {
    name: "中南林业科技大学",
    abbreviation: "csuft",
    province: "湖南省",
    id: "4fd711cf-5f8f-4dcc-8afe-b7591d10fb7e"
  },
  {
    name: "湖南中医药大学",
    abbreviation: "hnctcm",
    province: "湖南省",
    id: "fb5c8406-462a-48e2-95e2-e92db862252b"
  },
  {
    name: "湖南师范大学",
    abbreviation: "hunnu",
    province: "湖南省",
    id: "d7eb9c9a-a1ec-474f-b45f-ee464c18240a"
  },
  {
    name: "湖南理工学院",
    abbreviation: "hnist",
    province: "湖南省",
    id: "f8b579bb-2c47-40b8-a2ec-3f9c589d6ce8"
  },
  {
    name: "湘南学院",
    abbreviation: "xnu",
    province: "湖南省",
    id: "f8535a74-7b99-4ef8-9baf-c3c004c05f4f"
  },
  {
    name: "衡阳师范学院",
    abbreviation: "hynu",
    province: "湖南省",
    id: "092c5852-48fe-49dc-89f3-2e6d1c98cc94"
  },
  {
    name: "邵阳学院",
    abbreviation: "hnsyu",
    province: "湖南省",
    id: "533b3110-bb05-4621-9a0a-e0520035ef9e"
  },
  {
    name: "怀化学院",
    abbreviation: "hhtc",
    province: "湖南省",
    id: "88ac9707-f300-4130-8c32-dd4afdcd40cb"
  },
  {
    name: "湖南文理学院",
    abbreviation: "huas",
    province: "湖南省",
    id: "fbdf4727-d636-49a6-affc-e9aeeb6c11af"
  },
  {
    name: "湖南科技学院",
    abbreviation: "huse",
    province: "湖南省",
    id: "7394a7d9-9e46-4147-8b05-a54bbc2ec5b2"
  },
  {
    name: "湖南人文科技学院",
    abbreviation: "hnrku",
    province: "湖南省",
    id: "0dd9f1e4-303b-4713-ae22-beafa25b08e0"
  },
  {
    name: "湖南商学院",
    abbreviation: "hnuc",
    province: "湖南省",
    id: "27f488b2-e0c7-426e-9eb1-170b92ccd43e"
  },
  {
    name: "南华大学",
    abbreviation: "usc",
    province: "台湾省",
    id: "0626cfbe-bb7b-45ba-837e-a3839a389b54"
  },
  {
    name: "长沙医学院",
    abbreviation: "csmu",
    province: "湖南省",
    id: "62aa8359-15a4-4747-974c-f9cfc09a6ce6"
  },
  {
    name: "长沙学院",
    abbreviation: "ccsu",
    province: "湖南省",
    id: "ceef9f63-0e15-484e-9fbb-0fc38bc2a3a3"
  },
  {
    name: "湖南工程学院",
    abbreviation: "hnie",
    province: "湖南省",
    id: "d196957a-5b0f-4415-ac42-f8ceee833993"
  },
  {
    name: "湖南城市学院",
    abbreviation: "hncu",
    province: "湖南省",
    id: "2f7ecb02-1625-427a-981a-1f70ef875c35"
  },
  {
    name: "湖南工学院",
    abbreviation: "hnpu",
    province: "湖南省",
    id: "6be3a317-0bf7-4d56-a15a-500f7b03e0b2"
  },
  {
    name: "湖南财政经济学院",
    abbreviation: "hufe",
    province: "湖南省",
    id: "ae63763f-885b-4f68-9d0c-fc1f5e2a8b5c"
  },
  {
    name: "湖南警察学院",
    abbreviation: "hnpolice",
    province: "湖南省",
    id: "0e1607da-558b-48e7-8c80-373551c2d54f"
  },
  {
    name: "湖南工业大学",
    abbreviation: "hut",
    province: "湖南省",
    id: "e0b496b9-b78a-4b56-a2c7-e0f8bd7829ba"
  },
  {
    name: "湖南女子学院",
    abbreviation: "hnnd",
    province: "湖南省",
    id: "05780b32-0b66-4d97-8d9b-012bba6a0e40"
  },
  {
    name: "湖南第一师范学院",
    abbreviation: "hnfnu",
    province: "湖南省",
    id: "9af0f404-51e4-4cd2-8539-10c3363b771d"
  },
  {
    name: "湖南医药学院",
    abbreviation: "hnmu",
    province: "湖南省",
    id: "c87e7671-77b9-4498-ba2d-bc7c4d1a9357"
  },
  {
    name: "湖南涉外经济学院",
    abbreviation: "hunaneu",
    province: "湖南省",
    id: "8506299c-fed3-44fd-a5fc-7342b6912b46"
  },
  {
    name: "湘潭大学兴湘学院",
    abbreviation: "xtu",
    province: "湖南省",
    id: "845d0e48-ebc8-4e98-abb4-b74a073b9eeb"
  },
  {
    name: "湖南工业大学科技学院",
    abbreviation: "hnut-d",
    province: "湖南省",
    id: "b2c44eba-779e-4712-bb5c-9be180a0d89e"
  },
  {
    name: "湖南科技大学潇湘学院",
    abbreviation: "hnust",
    province: "湖南省",
    id: "3754d8d4-5e69-4c9e-84b7-4761473edea2"
  },
  {
    name: "南华大学船山学院",
    abbreviation: "edu",
    province: "湖南省",
    id: "cd2ed347-bce3-4740-9197-a8d2a331119a"
  },
  {
    name: "湖南商学院北津学院",
    abbreviation: "bjxy",
    province: "湖南省",
    id: "a47da43f-a995-48da-8810-fbcef9168980"
  },
  {
    name: "湖南师范大学树达学院",
    abbreviation: "hunnu",
    province: "湖南省",
    id: "bc0b0289-8ea3-43ff-bdb6-8150c8daff1d"
  },
  {
    name: "湖南农业大学东方科技学院",
    abbreviation: "hnaues",
    province: "湖南省",
    id: "e4e31be5-ac40-4762-b3b4-c3da153877d5"
  },
  {
    name: "中南林业科技大学涉外学院",
    abbreviation: "zswxy",
    province: "湖南省",
    id: "40e80965-4a7e-4451-82cb-7f66544cf0e8"
  },
  {
    name: "湖南文理学院芙蓉学院",
    abbreviation: "huas",
    province: "湖南省",
    id: "380e733a-1dbe-4e89-aca5-c724fff14742"
  },
  {
    name: "湖南理工学院南湖学院",
    abbreviation: "80city",
    province: "湖南省",
    id: "0abd49e4-eda1-4388-809a-b0f99c6b7a4b"
  },
  {
    name: "衡阳师范学院南岳学院",
    abbreviation: "hynu",
    province: "湖南省",
    id: "8475ce58-3ba5-4eb5-89cb-57f037a38606"
  },
  {
    name: "湖南工程学院应用技术学院",
    abbreviation: "hnieyy",
    province: "湖南省",
    id: "ee977ef8-e549-4eb7-bbb2-747df9ef5149"
  },
  {
    name: "湖南中医药大学湘杏学院",
    abbreviation: "hnzyxx",
    province: "湖南省",
    id: "43b0a6b9-ca65-46fd-b6a8-965a8a229939"
  },
  {
    name: "吉首大学张家界学院",
    abbreviation: "jsu",
    province: "湖南省",
    id: "d3cef659-e040-4c7c-bc00-b41885dfd968"
  },
  {
    name: "长沙理工大学城南学院",
    abbreviation: "csust",
    province: "湖南省",
    id: "f0985a06-8e7f-4823-9401-c14d57d877a6"
  },
  {
    name: "长沙师范学院",
    abbreviation: "cssf",
    province: "湖南省",
    id: "abc409c3-7e13-4410-a06b-9afb3c67cece"
  },
  {
    name: "湖南应用技术学院",
    abbreviation: "hnyyjsxy",
    province: "湖南省",
    id: "fed1ce9f-e555-40d2-8825-19064a620954"
  },
  {
    name: "湖南信息学院",
    abbreviation: "hnisc",
    province: "湖南省",
    id: "367862fb-d47b-404c-a695-41e7f3aa91c5"
  },
  {
    name: "湖南交通工程学院",
    abbreviation: "hnkjjm",
    province: "湖南省",
    id: "8295de62-77be-4445-a528-c6fbd93cd97f"
  },
  {
    name: "湘中幼儿师范高等专科学校",
    abbreviation: "hnsysf",
    province: "湖南省",
    id: "6aee8666-c318-4f93-95c5-f552951468d9"
  },
  {
    name: "长沙民政职业技术学院",
    abbreviation: "csmzxy",
    province: "湖南省",
    id: "357fb9b0-fe32-4c54-8a02-b9e802253a0c"
  },
  {
    name: "湖南工业职业技术学院",
    abbreviation: "hunangy",
    province: "湖南省",
    id: "ae2472ed-7de5-44c1-a300-4ae08aff7fe1"
  },
  {
    name: "湖南信息职业技术学院",
    abbreviation: "hniu",
    province: "湖南省",
    id: "a595b075-536a-44d2-8111-c40f790541ef"
  },
  {
    name: "湖南税务高等专科学校",
    abbreviation: "csttc",
    province: "湖南省",
    id: "04ca7e1e-9214-406b-8a51-b4194690873c"
  },
  {
    name: "长沙航空职业技术学院",
    abbreviation: "cavtc",
    province: "湖南省",
    id: "f3fbc619-a427-4e14-9e92-41b827fbe610"
  },
  {
    name: "湖南大众传媒职业技术学院",
    abbreviation: "hnmmc",
    province: "湖南省",
    id: "19e423cd-5472-451b-a4f9-984224cc0d71"
  },
  {
    name: "永州职业技术学院",
    abbreviation: "hnyzzy",
    province: "湖南省",
    id: "3feb7eec-d291-43e4-93b4-af562e5e6db6"
  },
  {
    name: "湖南铁道职业技术学院",
    abbreviation: "hnrpc",
    province: "湖南省",
    id: "044a15f4-b36e-453c-9de7-9c64733a4447"
  },
  {
    name: "湖南科技职业学院",
    abbreviation: "hnkjxy",
    province: "湖南省",
    id: "27529bb5-a3b5-49e8-adf8-6ab2cb9dfa42"
  },
  {
    name: "湖南生物机电职业技术学院",
    abbreviation: "hnbemc",
    province: "湖南省",
    id: "4c3b2c23-24eb-4aba-9a30-2c4048bf1232"
  },
  {
    name: "湖南交通职业技术学院",
    abbreviation: "hnjtzy",
    province: "湖南省",
    id: "4e0bc81d-1116-4797-b6c4-15c487903e8a"
  },
  {
    name: "湖南商务职业技术学院",
    abbreviation: "hnswxy",
    province: "湖南省",
    id: "d1227bba-1fd4-4fd3-9df3-1c02ca45cd01"
  },
  {
    name: "湖南体育职业学院",
    abbreviation: "hnedu",
    province: "湖南省",
    id: "59061616-a186-4185-a777-4633488c6888"
  },
  {
    name: "湖南工程职业技术学院",
    abbreviation: "hngcjx",
    province: "湖南省",
    id: "db2b50b5-2806-4d7c-b9fe-c6c82674d46b"
  },
  {
    name: "保险职业学院",
    abbreviation: "bxxy",
    province: "湖南省",
    id: "7d299105-ce8b-4088-a872-72e1db1f602f"
  },
  {
    name: "湖南外贸职业学院",
    abbreviation: "hnwmxy",
    province: "湖南省",
    id: "fdc7ebce-85d0-4bbe-9c25-71a36d2376e2"
  },
  {
    name: "湖南网络工程职业学院",
    abbreviation: "hnevc",
    province: "湖南省",
    id: "0223c3c7-14bc-4719-9d04-12b4c33a9cfb"
  },
  {
    name: "邵阳职业技术学院",
    abbreviation: "syzyedu",
    province: "湖南省",
    id: "8ff191af-0d94-4d96-b3a6-03c1e52d857f"
  },
  {
    name: "湖南司法警官职业学院",
    abbreviation: "jgzy",
    province: "湖南省",
    id: "22153fdb-c2b1-481c-b2f5-c21343944f77"
  },
  {
    name: "长沙商贸旅游职业技术学院",
    abbreviation: "hncpu",
    province: "湖南省",
    id: "a00e8b51-8bb3-43d0-bdf6-fadcdd1a9090"
  },
  {
    name: "湖南环境生物职业技术学院",
    abbreviation: "hnebp",
    province: "湖南省",
    id: "e6a5f88c-fcb3-4a35-8511-109127eef4df"
  },
  {
    name: "湖南邮电职业技术学院",
    abbreviation: "hnydxy",
    province: "湖南省",
    id: "4027185e-18e4-47d6-a909-81df9fca05d5"
  },
  {
    name: "湘潭医卫职业技术学院",
    abbreviation: "xtzy",
    province: "湖南省",
    id: "9dae02c3-993f-4029-8818-154006890a40"
  },
  {
    name: "郴州职业技术学院",
    abbreviation: "czzy-edu",
    province: "湖南省",
    id: "9e7de231-1668-4fd6-b398-eed2f4eedf9d"
  },
  {
    name: "娄底职业技术学院",
    abbreviation: "ldzy",
    province: "湖南省",
    id: "64d0e07a-6e04-4875-93e1-7f87ec68e6e1"
  },
  {
    name: "张家界航空工业职业技术学院",
    abbreviation: "zjjhy",
    province: "湖南省",
    id: "b6a5b910-699d-44db-b53f-63651f385e63"
  },
  {
    name: "长沙环境保护职业技术学院",
    abbreviation: "hbcollege",
    province: "湖南省",
    id: "f3089e8b-4af3-4a2d-be00-c88d5253c443"
  },
  {
    name: "湖南艺术职业学院",
    abbreviation: "arthn",
    province: "湖南省",
    id: "4115e3bc-68fb-4670-a566-0c4ede5dffc3"
  },
  {
    name: "湖南机电职业技术学院",
    abbreviation: "hnjdzy",
    province: "湖南省",
    id: "7510e703-6796-4932-86b9-56022e695f00"
  },
  {
    name: "长沙职业技术学院",
    abbreviation: "cszyedu",
    province: "湖南省",
    id: "42c57496-a47f-4adc-bcda-9213704d9061"
  },
  {
    name: "怀化职业技术学院",
    abbreviation: "hhvtc",
    province: "湖南省",
    id: "d384ccfe-e237-45e2-8d34-b3abc46408b0"
  },
  {
    name: "岳阳职业技术学院",
    abbreviation: "yvtc",
    province: "湖南省",
    id: "454b864e-f8c6-4ef6-85a9-2d2daf9d0db7"
  },
  {
    name: "常德职业技术学院",
    abbreviation: "cdzy",
    province: "湖南省",
    id: "20c352a2-a00b-4181-b236-1a076c6bbdc9"
  },
  {
    name: "长沙南方职业学院",
    abbreviation: "nfdx",
    province: "湖南省",
    id: "9ef36645-ec67-4fce-94ba-93e3c418223b"
  },
  {
    name: "潇湘职业学院",
    abbreviation: "hnxxc",
    province: "湖南省",
    id: "8a83b79a-76f5-46bc-b613-c5763a726c67"
  },
  {
    name: "湖南化工职业技术学院",
    abbreviation: "hnhgzy",
    province: "湖南省",
    id: "7747a7f0-acc9-4fbc-bba7-7d2be4f548ce"
  },
  {
    name: "湖南城建职业技术学院",
    abbreviation: "hnucc",
    province: "湖南省",
    id: "f1176c2f-7f2d-4b6f-8266-a497995c8cf9"
  },
  {
    name: "湖南石油化工职业技术学院",
    abbreviation: "hnshzy",
    province: "湖南省",
    id: "18eaef77-afb4-4ca8-8e46-f186abc357ea"
  },
  {
    name: "湖南中医药高等专科学校",
    abbreviation: "hntcmc",
    province: "湖南省",
    id: "00e3df7d-0193-4daf-ad43-5ce545a4ae78"
  },
  {
    name: "湖南民族职业学院",
    abbreviation: "hnvc",
    province: "湖南省",
    id: "b372df6f-8b99-4319-b806-d51175d4c73d"
  },
  {
    name: "湘西民族职业技术学院",
    abbreviation: "xxmzy",
    province: "湖南省",
    id: "fc6f2975-5488-4a76-a689-3efd25955c19"
  },
  {
    name: "湖南财经工业职业技术学院",
    abbreviation: "hycgy",
    province: "湖南省",
    id: "a5e3ab17-3bc5-46c6-9e0b-9b925357f141"
  },
  {
    name: "益阳职业技术学院",
    abbreviation: "yyvtc",
    province: "湖南省",
    id: "2d7eac31-ff3c-4425-b1a6-18b56780ccb3"
  },
  {
    name: "湖南工艺美术职业学院",
    abbreviation: "hnmeida",
    province: "湖南省",
    id: "bc16e9d3-ec16-4039-bbe5-db8ced690ee0"
  },
  {
    name: "湖南九嶷职业技术学院",
    abbreviation: "4744edu",
    province: "湖南省",
    id: "0554cda5-7640-4a30-b83b-8e0fe8c38b86"
  },
  {
    name: "湖南理工职业技术学院",
    abbreviation: "xlgy",
    province: "湖南省",
    id: "5e2c2263-a937-4490-8451-71d7b9652f4e"
  },
  {
    name: "湖南软件职业学院",
    abbreviation: "hnsoftedu",
    province: "湖南省",
    id: "8ea854d5-536f-41bd-84fc-1cb491cd4377"
  },
  {
    name: "湖南汽车工程职业学院",
    abbreviation: "zzptc",
    province: "湖南省",
    id: "d0b4f6fd-f3aa-4166-a3b3-bf2e723f515d"
  },
  {
    name: "长沙电力职业技术学院",
    abbreviation: "cseptc",
    province: "湖南省",
    id: "dfc3a505-a759-486d-97a6-b2759db2ca92"
  },
  {
    name: "湖南水利水电职业技术学院",
    abbreviation: "hnslsdxy",
    province: "湖南省",
    id: "cbe54bc8-1ecf-46d8-9f02-7d8339f13bb0"
  },
  {
    name: "湖南现代物流职业技术学院",
    abbreviation: "56edu",
    province: "湖南省",
    id: "3ec21450-4b3d-4564-9102-21ff74ef18ce"
  },
  {
    name: "湖南高速铁路职业技术学院",
    abbreviation: "htcrh",
    province: "湖南省",
    id: "c2a627c2-a7ed-48f0-8de8-31e323bf5654"
  },
  {
    name: "湖南铁路科技职业技术学院",
    abbreviation: "hntky",
    province: "湖南省",
    id: "cc967325-7a3d-4240-871e-5c9551f719c6"
  },
  {
    name: "湖南安全技术职业学院",
    abbreviation: "cssttc",
    province: "湖南省",
    id: "15352c33-dd8d-474e-943c-7729b95cc8ca"
  },
  {
    name: "湖南电气职业技术学院",
    abbreviation: "hnjd",
    province: "湖南省",
    id: "f7dd35e6-6bd6-49ef-8c95-95704f2b4cb4"
  },
  {
    name: "湖南外国语职业学院",
    abbreviation: "hnflc",
    province: "湖南省",
    id: "9a950066-cffd-4cf0-b38b-8cb40f450ce3"
  },
  {
    name: "益阳医学高等专科学校",
    abbreviation: "hnyyyz",
    province: "湖南省",
    id: "1d1dca1c-fd01-4526-ab42-22d12b34a973"
  },
  {
    name: "湖南都市职业学院",
    abbreviation: "hnupc",
    province: "湖南省",
    id: "e077be0b-13d4-4bb0-9219-c46cd2b91603"
  },
  {
    name: "湖南电子科技职业学院",
    abbreviation: "8379888",
    province: "湖南省",
    id: "5e4fa752-baaa-48e2-b8df-b9f5862eb401"
  },
  {
    name: "湖南国防工业职业技术学院",
    abbreviation: "hnkgzy",
    province: "湖南省",
    id: "1b0fbed9-18d8-462d-b9b2-194620f5b9ce"
  },
  {
    name: "湖南高尔夫旅游职业学院",
    abbreviation: "2823333",
    province: "湖南省",
    id: "12e5f65d-fe2b-4229-a5fe-6e4216846dc5"
  },
  {
    name: "湖南工商职业学院",
    abbreviation: "hngsxy",
    province: "湖南省",
    id: "e164cfcb-30d1-4310-b78b-5dc3fc2f057f"
  },
  {
    name: "湖南三一工业职业技术学院",
    abbreviation: "sanyedu",
    province: "湖南省",
    id: "d252e966-beab-4c4a-88b8-fd346bd3913d"
  },
  {
    name: "长沙卫生职业学院",
    abbreviation: "cswszy",
    province: "湖南省",
    id: "b7e96a1d-68ff-4952-a2f2-3f86244dd63c"
  },
  {
    name: "湖南食品药品职业学院",
    abbreviation: "hnyyxx",
    province: "湖南省",
    id: "f311ae50-3463-4895-95d5-f54d6e2c3909"
  },
  {
    name: "湖南有色金属职业技术学院",
    abbreviation: "hnyszy",
    province: "湖南省",
    id: "2840face-1a8e-4f6d-9fa9-b922ba34e1b8"
  },
  {
    name: "湖南吉利汽车职业技术学院",
    abbreviation: "hngeelyedu",
    province: "湖南省",
    id: "4099ea27-9282-4b36-a775-3ab0c66f3397"
  },
  {
    name: "湖南幼儿师范高等专科学校",
    abbreviation: "cdgdsf",
    province: "湖南省",
    id: "069f62a2-a8c1-4d22-a917-cc58e648b040"
  },
  {
    name: "湘南幼儿师范高等专科学校",
    abbreviation: "hnczsf",
    province: "湖南省",
    id: "df917444-453a-43ea-89e5-6c0af38d9780"
  },
  {
    name: "湖南劳动人事职业学院",
    abbreviation: "hnlrx",
    province: "湖南省",
    id: "35bfdfd0-5abf-4a04-9749-54d4a6a90825"
  },
  {
    name: "中山大学",
    abbreviation: "sysu",
    province: "广东省",
    id: "be5d6d7b-4b19-452d-ab25-54347d476a36"
  },
  {
    name: "暨南大学",
    abbreviation: "jnu",
    province: "广东省",
    id: "9fb0a335-c382-4250-94be-cdbd738a18c0"
  },
  {
    name: "汕头大学",
    abbreviation: "stu",
    province: "广东省",
    id: "78c8b53c-68d7-415b-95d8-812fb15c8b3b"
  },
  {
    name: "华南理工大学",
    abbreviation: "scut",
    province: "广东省",
    id: "5b8421e8-8d2e-4884-8c41-9254bb6095bb"
  },
  {
    name: "华南农业大学",
    abbreviation: "scau",
    province: "广东省",
    id: "82af944d-f44f-4b4c-ab71-40ca29a9e10e"
  },
  {
    name: "广东海洋大学",
    abbreviation: "gdou",
    province: "广东省",
    id: "87fe7507-d91c-4690-b041-91debb931d14"
  },
  {
    name: "广州医科大学",
    abbreviation: "gzhmu",
    province: "广东省",
    id: "6e138e98-3a5f-4834-a6b0-f886a5012c4b"
  },
  {
    name: "广东医科大学",
    abbreviation: "gdmu",
    province: "广东省",
    id: "21d50e30-144e-46f5-b9af-c2d2d4bc732d"
  },
  {
    name: "广州中医药大学",
    abbreviation: "gzhtcm",
    province: "广东省",
    id: "383fb114-11c4-4490-a3aa-7b153cd6740c"
  },
  {
    name: "广东药科大学",
    abbreviation: "gdpu",
    province: "广东省",
    id: "6e41c875-c272-4a22-9658-283a1a231e96"
  },
  {
    name: "华南师范大学",
    abbreviation: "scnu",
    province: "广东省",
    id: "a5f8df3b-0749-487a-b4a4-7ed4c5f46db8"
  },
  {
    name: "韶关学院",
    abbreviation: "sgu",
    province: "广东省",
    id: "7458a50a-008d-4dce-a3b2-bd14b4096d67"
  },
  {
    name: "惠州学院",
    abbreviation: "hzu",
    province: "广东省",
    id: "44a2d43a-1072-4d9d-9786-afd099fac055"
  },
  {
    name: "韩山师范学院",
    abbreviation: "hstc",
    province: "广东省",
    id: "6d754ff3-d33b-40cc-901e-39fbc3baa062"
  },
  {
    name: "岭南师范学院",
    abbreviation: "lingnan",
    province: "广东省",
    id: "05602142-a1c4-4cd8-bd06-31dd95677911"
  },
  {
    name: "肇庆学院",
    abbreviation: "zqu",
    province: "广东省",
    id: "7aed029d-caec-43c8-b3b7-48d8bb9dfbe5"
  },
  {
    name: "嘉应学院",
    abbreviation: "jyu",
    province: "广东省",
    id: "2283da90-fcbd-48d6-9106-691290fd72c7"
  },
  {
    name: "广州体育学院",
    abbreviation: "gipe",
    province: "广东省",
    id: "231628f7-33a0-4b48-924a-b5fd5091dfb9"
  },
  {
    name: "广州美术学院",
    abbreviation: "gzarts",
    province: "广东省",
    id: "1ba8bcce-a69b-447f-8816-9c9774fdc495"
  },
  {
    name: "星海音乐学院",
    abbreviation: "xhcom",
    province: "广东省",
    id: "8a3814f7-f2c3-4fd5-80da-d2118ed28428"
  },
  {
    name: "广东技术师范学院",
    abbreviation: "gdin",
    province: "广东省",
    id: "15030e0e-9a54-4562-89e2-ab5e2c3e85a5"
  },
  {
    name: "深圳大学",
    abbreviation: "szu",
    province: "广东省",
    id: "221e6609-2f73-494b-a150-32beca7bce3e"
  },
  {
    name: "广东财经大学",
    abbreviation: "gdufe",
    province: "广东省",
    id: "ca74424a-8409-4758-8c21-40fe82803ab1"
  },
  {
    name: "广东白云学院",
    abbreviation: "bvtc",
    province: "广东省",
    id: "0f008fb4-75f5-4280-a2d6-d046b33ad151"
  },
  {
    name: "广州大学",
    abbreviation: "gzhu",
    province: "广东省",
    id: "44d4cfdc-afb3-4a7f-a787-1f751d9afce0"
  },
  {
    name: "广州航海学院",
    abbreviation: "gzhmt",
    province: "广东省",
    id: "58da7a24-3ecd-4a1a-8192-d98de8d96a86"
  },
  {
    name: "广东警官学院",
    abbreviation: "gdppla",
    province: "广东省",
    id: "f1864eb1-783e-498f-a2a9-49a7479ba48f"
  },
  {
    name: "仲恺农业工程学院",
    abbreviation: "zhku",
    province: "广东省",
    id: "b32eb6fd-d44c-4eb6-899a-653d36e8a2ed"
  },
  {
    name: "五邑大学",
    abbreviation: "wyu",
    province: "广东省",
    id: "2873c0f5-a765-47ee-9edd-bbebcaacbdd7"
  },
  {
    name: "广东金融学院",
    abbreviation: "gduf",
    province: "广东省",
    id: "72276784-9b3b-4603-8b70-693bcc9b5b09"
  },
  {
    name: "电子科技大学中山学院",
    abbreviation: "zsc",
    province: "广东省",
    id: "3ac620d1-6dc3-4ab9-b12e-1d06b5f80ca4"
  },
  {
    name: "广东石油化工学院",
    abbreviation: "gdpa",
    province: "广东省",
    id: "4453e260-83f1-430f-a684-16bce7aad943"
  },
  {
    name: "东莞理工学院",
    abbreviation: "dgut",
    province: "广东省",
    id: "eac97229-f191-4a18-96e2-f82e900de3ab"
  },
  {
    name: "广东工业大学",
    abbreviation: "gdut",
    province: "广东省",
    id: "139e4838-3dbb-40ba-9d8a-daa97021a9eb"
  },
  {
    name: "广东外语外贸大学",
    abbreviation: "gdufs",
    province: "广东省",
    id: "a2733b29-96b1-4031-a47b-51af0f133407"
  },
  {
    name: "佛山科学技术学院",
    abbreviation: "fosu",
    province: "广东省",
    id: "d51104db-a6ab-437e-a247-b1908698c1bf"
  },
  {
    name: "广东培正学院",
    abbreviation: "peizheng",
    province: "广东省",
    id: "e5a02f1c-c571-4c40-8572-0e1e18a3c2dc"
  },
  {
    name: "南方医科大学",
    abbreviation: "fimmu",
    province: "广东省",
    id: "c2456ef6-27c4-40a0-9006-f760edee8268"
  },
  {
    name: "广东东软学院",
    abbreviation: "neusoft",
    province: "广东省",
    id: "5157e79f-dd92-4877-bd6a-ebabe47e0ce7"
  },
  {
    name: "华南理工大学广州学院",
    abbreviation: "gcu",
    province: "广东省",
    id: "90b68bb5-f1d7-4f44-ad10-5cab167213fb"
  },
  {
    name: "广州大学华软软件学院",
    abbreviation: "sise",
    province: "广东省",
    id: "ce435890-5434-4a43-ba29-70cae2c31689"
  },
  {
    name: "中山大学南方学院",
    abbreviation: "nfsysu",
    province: "广东省",
    id: "3dd0763d-bdc7-4b1f-ab98-5293f03acdc1"
  },
  {
    name: "广东外语外贸大学南国商学院",
    abbreviation: "gwng",
    province: "广东省",
    id: "c1527e67-7e5e-4845-a541-51069936e455"
  },
  {
    name: "广东财经大学华商学院",
    abbreviation: "gdhsc",
    province: "广东省",
    id: "f7a1bf39-6681-4db6-9ba2-b3105b74fc99"
  },
  {
    name: "广东海洋大学寸金学院",
    abbreviation: "gdcjxy",
    province: "广东省",
    id: "3e5654f7-8666-4820-810a-1c0f8925cc4c"
  },
  {
    name: "华南农业大学珠江学院",
    abbreviation: "scauzhujia",
    province: "广东省",
    id: "a18cefce-5c90-4727-a698-ded687324c7e"
  },
  {
    name: "广东技术师范学院天河学院",
    abbreviation: "thxy",
    province: "广东省",
    id: "ada056d9-75c4-4a9b-a9e5-8363f6a769cd"
  },
  {
    name: "北京师范大学珠海分校",
    abbreviation: "bnuep",
    province: "广东省",
    id: "008a64b3-8bc8-4aea-b226-49aba5ab1528"
  },
  {
    name: "广东工业大学华立学院",
    abbreviation: "hualixy",
    province: "广东省",
    id: "7af946bf-ea98-494d-bd24-c63cf440bbb7"
  },
  {
    name: "广州大学松田学院",
    abbreviation: "sontan",
    province: "广东省",
    id: "f3607116-80f8-4b62-8074-56452b1f3b12"
  },
  {
    name: "广州商学院",
    abbreviation: "gzcc",
    province: "广东省",
    id: "5294281d-0d9c-4569-b8f4-c566fafc55be"
  },
  {
    name: "北京理工大学珠海学院",
    abbreviation: "zhbit",
    province: "广东省",
    id: "02b0b41f-e746-4d58-b299-e7cd0257f965"
  },
  {
    name: "吉林大学珠海学院",
    abbreviation: "jluzh",
    province: "广东省",
    id: "015a8643-8330-4880-87ce-6ecbb9e9f1b8"
  },
  {
    name: "广州工商学院",
    abbreviation: "gzgs",
    province: "广东省",
    id: "29c0e49b-30db-4b58-8b5e-0967a2441271"
  },
  {
    name: "广东科技学院",
    abbreviation: "gdst",
    province: "广东省",
    id: "a9f1fe27-9907-48de-be1d-c3c714c188f4"
  },
  {
    name: "广东理工学院",
    abbreviation: "gdlgxy",
    province: "广东省",
    id: "4b7f029c-98a2-4c25-91cb-379e1c445b53"
  },
  {
    name: "东莞理工学院城市学院",
    abbreviation: "dgut",
    province: "广东省",
    id: "cbf2c509-086f-4292-8d0e-1392199db40b"
  },
  {
    name: "中山大学新华学院",
    abbreviation: "sysu",
    province: "广东省",
    id: "440aa7ec-7e4d-49b3-8b56-fb8fbf395c11"
  },
  {
    name: "广东第二师范学院",
    abbreviation: "gdei",
    province: "广东省",
    id: "c703b0c1-0d2d-4133-bf3f-65446cd1185d"
  },
  {
    name: "南方科技大学",
    abbreviation: "sustc",
    province: "广东省",
    id: "8a17af45-f381-4df2-bee9-af8af49e71e9"
  },
  {
    name: "北京师范大学－香港浸会大学联合国际学院",
    abbreviation: "edu",
    province: "广东省",
    id: "51a92a67-5e12-499a-a614-74ad8e23550d"
  },
  {
    name: "香港中文大学（深圳）",
    abbreviation: "cuhk",
    province: "广东省",
    id: "7672f471-c77a-4e0b-bcf8-31c54aaff666"
  },
  {
    name: "深圳北理莫斯科大学",
    abbreviation: "szmsubit",
    province: "广东省",
    id: "e78e0bbb-6689-4357-aacc-3bb782f858ed"
  },
  {
    name: "广东以色列理工学院",
    abbreviation: "gtiit",
    province: "广东省",
    id: "3f592878-b64f-493b-baca-759016579cf2"
  },
  {
    name: "顺德职业技术学院",
    abbreviation: "sdpt",
    province: "广东省",
    id: "7f875b32-7656-49ad-b9ee-eb3b8d0d83e0"
  },
  {
    name: "广东轻工职业技术学院",
    abbreviation: "gdqy",
    province: "广东省",
    id: "b9d7093c-fdd4-420b-b737-b1e97d247311"
  },
  {
    name: "广东交通职业技术学院",
    abbreviation: "gdcp",
    province: "广东省",
    id: "d9f4a201-632e-462a-9119-349ccaae6093"
  },
  {
    name: "广东水利电力职业技术学院",
    abbreviation: "gdsdxy",
    province: "广东省",
    id: "3f3a7d14-7ae9-4e86-b39b-abfa24657a8f"
  },
  {
    name: "潮汕职业技术学院",
    abbreviation: "chaoshan",
    province: "广东省",
    id: "e0cc2fee-7acc-403c-a739-4ff24d0e4fa0"
  },
  {
    name: "深圳职业技术学院",
    abbreviation: "szpt",
    province: "广东省",
    id: "3db91a13-6694-454b-b039-8d325aa18d05"
  },
  {
    name: "广东南华工商职业学院",
    abbreviation: "nhic",
    province: "广东省",
    id: "0606365b-e66b-4c3d-947b-18abc0776eaf"
  },
  {
    name: "私立华联学院",
    abbreviation: "hlu",
    province: "广东省",
    id: "7dc339d1-4e31-4bd5-bc15-1f6f971a0bbc"
  },
  {
    name: "广州民航职业技术学院",
    abbreviation: "caac",
    province: "广东省",
    id: "8c94977a-281f-484c-966d-76373d3b16f6"
  },
  {
    name: "广州番禺职业技术学院",
    abbreviation: "gzpyp",
    province: "广东省",
    id: "fa79c40b-a3b5-4dcf-b6b6-45ada7c2d5d1"
  },
  {
    name: "广东松山职业技术学院",
    abbreviation: "gdsspt",
    province: "广东省",
    id: "26b9c99a-9b9a-43b2-85e1-a0ae5fe21800"
  },
  {
    name: "广东农工商职业技术学院",
    abbreviation: "gdaib",
    province: "广东省",
    id: "d5944033-dc2e-4bd8-b149-152fe199f93b"
  },
  {
    name: "广东新安职业技术学院",
    abbreviation: "gdxa",
    province: "广东省",
    id: "23eb9458-fe11-4ca0-b9a3-d20408907999"
  },
  {
    name: "佛山职业技术学院",
    abbreviation: "fspt",
    province: "广东省",
    id: "d52bebab-b5c4-4bd0-98e9-8ef256ee46d0"
  },
  {
    name: "广东科学技术职业学院",
    abbreviation: "gdit",
    province: "广东省",
    id: "497a2897-7f1d-4e7b-8834-c35b6c80324a"
  },
  {
    name: "广东食品药品职业学院",
    abbreviation: "gdyzy",
    province: "广东省",
    id: "bc5a94c3-cf81-4ab7-8d08-b4d94ca7cc9d"
  },
  {
    name: "广州康大职业技术学院",
    abbreviation: "kdvtc-edu",
    province: "广东省",
    id: "092c925d-b024-4fe5-8d29-3f062b8b9c6c"
  },
  {
    name: "珠海艺术职业学院",
    abbreviation: "zhac",
    province: "广东省",
    id: "bde2c544-20f0-48fb-a652-0dd6b24e0d28"
  },
  {
    name: "广东行政职业学院",
    abbreviation: "gdxzzy",
    province: "广东省",
    id: "473d2687-c3d1-4870-adf9-2125c7803602"
  },
  {
    name: "广东体育职业技术学院",
    abbreviation: "gdvcp",
    province: "广东省",
    id: "44bf9362-4cc3-4a73-99cf-7248e764f572"
  },
  {
    name: "广东职业技术学院",
    abbreviation: "gdptc",
    province: "广东省",
    id: "b8026253-5f8b-4fe8-97c5-98b65efad25b"
  },
  {
    name: "广东建设职业技术学院",
    abbreviation: "gdcvi",
    province: "广东省",
    id: "9c7cd61a-120b-40d0-8de0-7ee2fc8c28a5"
  },
  {
    name: "广东女子职业技术学院",
    abbreviation: "gdfs",
    province: "广东省",
    id: "074a108f-28af-4f33-85b7-141ea660b16c"
  },
  {
    name: "广东机电职业技术学院",
    abbreviation: "gdmec",
    province: "广东省",
    id: "88b9aeec-2930-404b-a41d-d1e2ef857d08"
  },
  {
    name: "广东岭南职业技术学院",
    abbreviation: "lingnancol",
    province: "广东省",
    id: "0d6c10d6-19f0-4b69-859e-c114c08f56ef"
  },
  {
    name: "汕尾职业技术学院",
    abbreviation: "swvtc",
    province: "广东省",
    id: "0f24c018-5442-450e-99cf-42df32235443"
  },
  {
    name: "罗定职业技术学院",
    abbreviation: "ldpoly",
    province: "广东省",
    id: "24aeb100-730d-43e9-954a-0fd17008f42f"
  },
  {
    name: "阳江职业技术学院",
    abbreviation: "yjcollege",
    province: "广东省",
    id: "1f527f75-7292-4034-a698-efd689634268"
  },
  {
    name: "河源职业技术学院",
    abbreviation: "hycollege",
    province: "广东省",
    id: "55f5b651-f76e-4813-b0da-6efed0e7ed3b"
  },
  {
    name: "广东邮电职业技术学院",
    abbreviation: "gupt",
    province: "广东省",
    id: "a61c63c3-6415-412c-ac21-efc2c9864692"
  },
  {
    name: "汕头职业技术学院",
    abbreviation: "gdwlxy",
    province: "广东省",
    id: "c68811c1-624d-4f9d-a9c1-2c3ab027f289"
  },
  {
    name: "揭阳职业技术学院",
    abbreviation: "jyc",
    province: "广东省",
    id: "957a04c5-d375-4dc3-83b3-29370866b51c"
  },
  {
    name: "深圳信息职业技术学院",
    abbreviation: "sziit",
    province: "广东省",
    id: "90855c0b-d3a6-45f8-864e-def64b40233d"
  },
  {
    name: "清远职业技术学院",
    abbreviation: "qypt",
    province: "广东省",
    id: "5a0e77b8-1d8f-4e48-b450-d3d88508d9fc"
  },
  {
    name: "广东工贸职业技术学院",
    abbreviation: "gdgm",
    province: "广东省",
    id: "dbc5e6c3-ff4d-4cfe-a794-b2ee6d503302"
  },
  {
    name: "广东司法警官职业学院",
    abbreviation: "gdsfjy",
    province: "广东省",
    id: "99a599b5-bb9f-4d5e-a279-57b28796fc68"
  },
  {
    name: "广东亚视演艺职业学院",
    abbreviation: "atvcn",
    province: "广东省",
    id: "290a296c-70ab-415b-9714-867d9b379c52"
  },
  {
    name: "广东省外语艺术职业学院",
    abbreviation: "gtcfla",
    province: "广东省",
    id: "d4b04c1b-1d7d-44ea-8beb-c32bb57bdd5c"
  },
  {
    name: "广东文艺职业学院",
    abbreviation: "gdla",
    province: "广东省",
    id: "c9f7e164-2c80-4e99-92d9-07991241ede2"
  },
  {
    name: "广州体育职业技术学院",
    abbreviation: "gztzy",
    province: "广东省",
    id: "5def7b45-9289-4dfb-bac2-9a4c8f563d1c"
  },
  {
    name: "广州工程技术职业学院",
    abbreviation: "gzvtc",
    province: "广东省",
    id: "24b8a4a7-0fcd-475a-94d0-b206ef5c0197"
  },
  {
    name: "中山火炬职业技术学院",
    abbreviation: "zstp",
    province: "广东省",
    id: "391b5d70-da23-4c79-ae83-1c0316b4aa00"
  },
  {
    name: "江门职业技术学院",
    abbreviation: "jmpt",
    province: "广东省",
    id: "4bf88865-a582-4760-bef9-9adf7c010ce3"
  },
  {
    name: "茂名职业技术学院",
    abbreviation: "mmvtc",
    province: "广东省",
    id: "2816a86f-b26c-40ae-956f-594cd0c358a3"
  },
  {
    name: "珠海城市职业技术学院",
    abbreviation: "zhcpt",
    province: "广东省",
    id: "e7295ba8-fb92-463a-8341-58798071dccf"
  },
  {
    name: "广州涉外经济职业技术学院",
    abbreviation: "gziec",
    province: "广东省",
    id: "ccbabdc7-4bb0-4527-835c-fa3f94d47fb9"
  },
  {
    name: "广州南洋理工职业学院",
    abbreviation: "nyjy",
    province: "广东省",
    id: "a3988a10-3c3a-4fcd-a6d7-822cc229742f"
  },
  {
    name: "广州科技职业技术学院",
    abbreviation: "gzkjxy",
    province: "广东省",
    id: "622cf560-202e-4708-be20-f2592453c3ec"
  },
  {
    name: "惠州经济职业技术学院",
    abbreviation: "hzcollege",
    province: "广东省",
    id: "954aa5b6-26a0-4574-b613-01c6b5e56dcf"
  },
  {
    name: "广东工商职业学院",
    abbreviation: "zqtbu",
    province: "广东省",
    id: "1e994c22-9cad-4068-b37a-9ad5672192cc"
  },
  {
    name: "肇庆医学高等专科学校",
    abbreviation: "zqmc",
    province: "广东省",
    id: "dc31bd5c-a388-4d94-857b-ead205d6fe4b"
  },
  {
    name: "广州现代信息工程职业技术学院",
    abbreviation: "gzmodern",
    province: "广东省",
    id: "a715f822-9eb7-4f9c-8994-717c507cdc1e"
  },
  {
    name: "广东理工职业学院",
    abbreviation: "gdpi",
    province: "广东省",
    id: "0936036f-e2ed-4881-bb28-3838ac113135"
  },
  {
    name: "广州华南商贸职业学院",
    abbreviation: "hnsmxy",
    province: "广东省",
    id: "e12a0748-fc84-4991-9e1c-534396739a6b"
  },
  {
    name: "广州华立科技职业学院",
    abbreviation: "hlxy",
    province: "广东省",
    id: "e2aef237-6071-4680-858b-61d91ee1f198"
  },
  {
    name: "广州城市职业学院",
    abbreviation: "gcp",
    province: "广东省",
    id: "338df461-eced-4f2f-b47b-680e2c714479"
  },
  {
    name: "广东工程职业技术学院",
    abbreviation: "gpc",
    province: "广东省",
    id: "390f516f-80bd-4f01-897e-3235fd7fbe87"
  },
  {
    name: "广州铁路职业技术学院",
    abbreviation: "gtxy",
    province: "广东省",
    id: "59334210-cc6f-40ad-9d9c-187b3c701b3a"
  },
  {
    name: "广东科贸职业学院",
    abbreviation: "gdkm",
    province: "广东省",
    id: "350a7c28-1d74-4cf6-9a39-894d70d0b379"
  },
  {
    name: "广州科技贸易职业学院",
    abbreviation: "gzkmu",
    province: "广东省",
    id: "ff71f15a-6658-4aca-aaca-892bde36b406"
  },
  {
    name: "中山职业技术学院",
    abbreviation: "zspt",
    province: "广东省",
    id: "73175cfd-3917-4bae-8352-2b956692896c"
  },
  {
    name: "广州珠江职业技术学院",
    abbreviation: "gzzjedu",
    province: "广东省",
    id: "c358a480-da60-40f0-80df-dc8ca679f7e4"
  },
  {
    name: "广州松田职业学院",
    abbreviation: "sontanedu",
    province: "广东省",
    id: "c6c0ffbf-435c-49e1-bf9a-815cf1a2b814"
  },
  {
    name: "广东文理职业学院",
    abbreviation: "gdwlxy",
    province: "广东省",
    id: "d580e1d7-e5b5-412e-85f6-9d61a5edbd24"
  },
  {
    name: "广州城建职业学院",
    abbreviation: "gzccc",
    province: "广东省",
    id: "9f6bc04a-7fcf-4e71-916a-d43b8f87bb07"
  },
  {
    name: "东莞职业技术学院",
    abbreviation: "dgpt",
    province: "广东省",
    id: "1c5418f7-8339-441c-add8-66acb83df6f2"
  },
  {
    name: "广东南方职业学院",
    abbreviation: "gdnfu",
    province: "广东省",
    id: "7a4bf638-620a-4db1-b294-245aab019d01"
  },
  {
    name: "广州华商职业学院",
    abbreviation: "gzhsvc",
    province: "广东省",
    id: "b36c9317-4751-48f7-901f-3799a6e1f7d4"
  },
  {
    name: "广州华夏职业学院",
    abbreviation: "gzhxtc",
    province: "广东省",
    id: "a0580de9-d262-4cd1-bb39-0fcee8d0f7d8"
  },
  {
    name: "广东环境保护工程职业学院",
    abbreviation: "gdepc",
    province: "广东省",
    id: "954c34c8-a521-470c-8fdb-6f248ba39849"
  },
  {
    name: "广东青年职业学院",
    abbreviation: "gdylc",
    province: "广东省",
    id: "ed7d15fc-9990-49f7-b5c6-49a73223f52f"
  },
  {
    name: "广州东华职业学院",
    abbreviation: "gzdhxy",
    province: "广东省",
    id: "cb08a4f4-4a3a-4b27-aea7-6875abc1d803"
  },
  {
    name: "广东创新科技职业学院",
    abbreviation: "gdcxxy",
    province: "广东省",
    id: "3dd15ef0-c4ef-4c4c-b9d3-e7d520cfd0e5"
  },
  {
    name: "广东舞蹈戏剧职业学院",
    abbreviation: "gdddc",
    province: "广东省",
    id: "5546b662-5b84-4825-9c02-67bbb56dc639"
  },
  {
    name: "惠州卫生职业技术学院",
    abbreviation: "hzwx",
    province: "广东省",
    id: "350f02c0-e199-4640-83e2-a0ba1eba09d6"
  },
  {
    name: "广东信息工程职业学院",
    abbreviation: "10",
    province: "广东省",
    id: "8f427da1-f801-403e-a689-b0214c6ad03b"
  },
  {
    name: "广东生态工程职业学院",
    abbreviation: "gdsty",
    province: "广东省",
    id: "93def6ac-0892-4cce-9699-995f54491fa8"
  },
  {
    name: "惠州城市职业学院",
    abbreviation: "hzc",
    province: "广东省",
    id: "d061a0ad-02ac-4ff0-9e76-259d628909c5"
  },
  {
    name: "广东碧桂园职业学院",
    abbreviation: "bgypt",
    province: "广东省",
    id: "771249ed-6b12-42e0-b06d-b23b4d605307"
  },
  {
    name: "广东酒店管理职业技术学院",
    abbreviation: "gdjdxy",
    province: "广东省",
    id: "1aa1c199-9bd3-44ad-a7aa-7f4f5afe59e2"
  },
  {
    name: "广东茂名幼儿师范专科学校",
    abbreviation: "gdgzsf",
    province: "广东省",
    id: "a5ab873e-473e-4c38-a724-bb8a6572fd3d"
  },
  {
    name: "广州卫生职业技术学院",
    abbreviation: "gzws",
    province: "广东省",
    id: "85583fd7-ec2f-45c3-ae75-330b3b0526a7"
  },
  {
    name: "广东江门中医药职业学院",
    abbreviation: "gdjmcmc",
    province: "广东省",
    id: "774ad92e-0f36-4c82-99fc-5cb2a5c24863"
  },
  {
    name: "湛江市幼儿师范学校",
    abbreviation: "zjys",
    province: "广东省",
    id: "de00ea56-cec3-40d8-ae89-1b7126f861b4"
  },
  {
    name: "广西大学",
    abbreviation: "gxu",
    province: "广西壮族自治区",
    id: "5fae9367-23f2-439d-9e4b-c6201e758006"
  },
  {
    name: "广西科技大学",
    abbreviation: "gxut",
    province: "广西壮族自治区",
    id: "72de7fba-bd26-42e2-b9bf-8ff1a84e46bb"
  },
  {
    name: "桂林电子科技大学",
    abbreviation: "gliet",
    province: "广西壮族自治区",
    id: "d9ccfd01-b1ac-4247-a37d-b6af883355c2"
  },
  {
    name: "桂林理工大学",
    abbreviation: "glite",
    province: "广西壮族自治区",
    id: "4430e502-c23d-4ada-8ba7-9ba84a6d4292"
  },
  {
    name: "广西医科大学",
    abbreviation: "gxmu",
    province: "广西壮族自治区",
    id: "78a2e431-3a2e-4291-89a2-dae9b76b00f7"
  },
  {
    name: "右江民族医学院",
    abbreviation: "ymcn",
    province: "广西壮族自治区",
    id: "b44b58dc-972f-4755-ae43-2ecfde36ab91"
  },
  {
    name: "广西中医药大学",
    abbreviation: "gxtcmu",
    province: "广西壮族自治区",
    id: "c455df01-3698-4d02-8167-c8747de45077"
  },
  {
    name: "桂林医学院",
    abbreviation: "glmc",
    province: "广西壮族自治区",
    id: "371acbd1-2e67-464c-9ed3-8b0b12332d0d"
  },
  {
    name: "广西师范大学",
    abbreviation: "gxnu",
    province: "广西壮族自治区",
    id: "51130d5b-15f3-4387-a23f-8c101717f8b3"
  },
  {
    name: "广西师范学院",
    abbreviation: "gxtc",
    province: "广西壮族自治区",
    id: "134e350d-1c76-4ff7-8b06-4f11b0d16ec9"
  },
  {
    name: "广西民族师范学院",
    abbreviation: "gxnun",
    province: "广西壮族自治区",
    id: "7d9123de-bc97-4554-9ecd-d944a0da6910"
  },
  {
    name: "河池学院",
    abbreviation: "hcnu",
    province: "广西壮族自治区",
    id: "219e0ffa-af15-4313-b388-3f2151b8ce78"
  },
  {
    name: "玉林师范学院",
    abbreviation: "ylu",
    province: "广西壮族自治区",
    id: "95e20cac-a75c-470f-9171-f3600e0dfb77"
  },
  {
    name: "广西艺术学院",
    abbreviation: "gxau",
    province: "广西壮族自治区",
    id: "78219764-f8f2-4f18-b95a-574302fa41cb"
  },
  {
    name: "广西民族大学",
    abbreviation: "gxun",
    province: "广西壮族自治区",
    id: "bf866ed2-1038-409c-958f-561930e24fee"
  },
  {
    name: "百色学院",
    abbreviation: "bsuc",
    province: "广西壮族自治区",
    id: "d5b93e4f-ed38-4907-82f3-dea14c7f82d8"
  },
  {
    name: "梧州学院",
    abbreviation: "gxuwz",
    province: "广西壮族自治区",
    id: "a1d0127f-a8eb-4681-a2af-8997acf33282"
  },
  {
    name: "广西科技师范学院",
    abbreviation: "gxlztc",
    province: "广西壮族自治区",
    id: "5e2e2545-fc08-4b10-a94d-d7791f28b00c"
  },
  {
    name: "广西财经学院",
    abbreviation: "gxufe",
    province: "广西壮族自治区",
    id: "245d80e5-e23a-463f-b588-413ddaf7be68"
  },
  {
    name: "南宁学院",
    abbreviation: "nnxy",
    province: "广西壮族自治区",
    id: "56259a3c-73e0-45e5-b013-6e2511f37b75"
  },
  {
    name: "钦州学院",
    abbreviation: "qzu",
    province: "广西壮族自治区",
    id: "ce855c3a-5ccf-4469-9699-20c3109e090f"
  },
  {
    name: "桂林航天工业学院",
    abbreviation: "guat",
    province: "广西壮族自治区",
    id: "66b3fd01-3880-42f8-b05d-7fa76f32a922"
  },
  {
    name: "桂林旅游学院",
    abbreviation: "glit",
    province: "广西壮族自治区",
    id: "f6f8be5d-5768-404f-a46d-40f7a5819584"
  },
  {
    name: "贺州学院",
    abbreviation: "hzu",
    province: "广西壮族自治区",
    id: "bf57ecb9-1ec8-476e-afd6-ee078fbdee3a"
  },
  {
    name: "广西警察学院",
    abbreviation: "gagx",
    province: "广西壮族自治区",
    id: "6dbe7118-6078-4d8e-893c-7eb289601b1e"
  },
  {
    name: "北海艺术设计学院",
    abbreviation: "sszss",
    province: "广西壮族自治区",
    id: "2202ad9c-ad30-421d-a75e-6f3dccf032f8"
  },
  {
    name: "广西大学行健文理学院",
    abbreviation: "gxu",
    province: "广西壮族自治区",
    id: "593171f0-49c3-42f0-94f6-fc51af4f85d8"
  },
  {
    name: "广西科技大学鹿山学院",
    abbreviation: "lzls",
    province: "广西壮族自治区",
    id: "ba494af9-8f99-48a4-ad80-9a0da98b9efa"
  },
  {
    name: "广西民族大学相思湖学院",
    abbreviation: "gxun",
    province: "广西壮族自治区",
    id: "6cd6e4e4-268e-4588-882e-4ef8ff975823"
  },
  {
    name: "广西师范大学漓江学院",
    abbreviation: "gxljcolleg",
    province: "广西壮族自治区",
    id: "b07e2968-5935-483a-992f-6340841a6898"
  },
  {
    name: "广西师范学院师园学院",
    abbreviation: "gxsyu",
    province: "广西壮族自治区",
    id: "ac04b26e-fb41-47f8-846d-9929cf2decba"
  },
  {
    name: "广西中医学院赛恩斯新医药学院",
    abbreviation: "gxzyxysy",
    province: "广西壮族自治区",
    id: "8b5d0db0-ee30-403a-bb2f-fc23102df579"
  },
  {
    name: "桂林电子科技大学信息科技学院",
    abbreviation: "guet",
    province: "广西壮族自治区",
    id: "d701f0f8-7886-4cb8-bd51-bf5ce60ead55"
  },
  {
    name: "桂林理工大学博文管理学院",
    abbreviation: "glite",
    province: "广西壮族自治区",
    id: "ba7b149d-bc14-473a-83a8-92cd612db778"
  },
  {
    name: "广西外国语学院",
    abbreviation: "gxufl",
    province: "广西壮族自治区",
    id: "4949c3d9-955b-417a-8a38-739bf84d00b7"
  },
  {
    name: "北京航空航天大学北海学院",
    abbreviation: "bhbhxy",
    province: "广西壮族自治区",
    id: "4a9ae7c2-d5fa-4dea-93c8-e051ff26dc78"
  },
  {
    name: "广西机电职业技术学院",
    abbreviation: "gxcme",
    province: "广西壮族自治区",
    id: "bfcb3343-520b-4628-81d0-bc3104871592"
  },
  {
    name: "广西体育高等专科学校",
    abbreviation: "gxtznn",
    province: "广西壮族自治区",
    id: "520e7441-cbd5-4117-ac18-e843f5c3c413"
  },
  {
    name: "南宁职业技术学院",
    abbreviation: "ncvt",
    province: "广西壮族自治区",
    id: "74ded8f1-4337-4036-b67e-64ecf4b08035"
  },
  {
    name: "广西水利电力职业技术学院",
    abbreviation: "gxsdxy",
    province: "广西壮族自治区",
    id: "ca1099d6-a077-4f30-8efa-17ed23bfc75d"
  },
  {
    name: "桂林师范高等专科学校",
    abbreviation: "glnc",
    province: "广西壮族自治区",
    id: "a29d9fab-c041-4ac0-99ea-b908a30ce0c7"
  },
  {
    name: "广西职业技术学院",
    abbreviation: "gxzjy",
    province: "广西壮族自治区",
    id: "950eb998-e69b-4a1b-a44e-3e256c62b7c9"
  },
  {
    name: "柳州职业技术学院",
    abbreviation: "lzzy",
    province: "广西壮族自治区",
    id: "078c2e11-3340-4f6e-8d57-e5a898446f3d"
  },
  {
    name: "广西生态工程职业技术学院",
    abbreviation: "gxstzy",
    province: "广西壮族自治区",
    id: "59a09be1-a904-4847-bee2-7796477f749b"
  },
  {
    name: "广西交通职业技术学院",
    abbreviation: "gxjzy",
    province: "广西壮族自治区",
    id: "c7095881-562f-4a77-99e1-b31f69afbda6"
  },
  {
    name: "广西工业职业技术学院",
    abbreviation: "gxic",
    province: "广西壮族自治区",
    id: "fec100c0-d22b-4610-b605-74dbb3b93c87"
  },
  {
    name: "广西国际商务职业技术学院",
    abbreviation: "gxibvc",
    province: "广西壮族自治区",
    id: "36a5b65d-9d38-49eb-97c5-28aabb4e13b8"
  },
  {
    name: "广西农业职业技术学院",
    abbreviation: "gxnyxy",
    province: "广西壮族自治区",
    id: "5a5d84e7-9fac-4404-b88b-5d5e8c32bdf2"
  },
  {
    name: "柳州铁道职业技术学院",
    abbreviation: "lztdzy",
    province: "广西壮族自治区",
    id: "3cb5bd01-0617-48fd-a01b-2bae9a4441ce"
  },
  {
    name: "广西建设职业技术学院",
    abbreviation: "gxjsxy",
    province: "广西壮族自治区",
    id: "a6268841-32c0-41b5-8b1b-0162855be3e0"
  },
  {
    name: "广西现代职业技术学院",
    abbreviation: "gxxd",
    province: "广西壮族自治区",
    id: "655a86d5-54e0-4307-96e4-23e5f9dd807c"
  },
  {
    name: "北海职业学院",
    abbreviation: "bhzyxy",
    province: "广西壮族自治区",
    id: "8d6ee4e2-1d47-4082-944e-ce2a3f7aa2bf"
  },
  {
    name: "桂林山水职业学院",
    abbreviation: "guolianweb",
    province: "广西壮族自治区",
    id: "14e2ad63-ef4b-4466-a827-e47b3763eec4"
  },
  {
    name: "广西经贸职业技术学院",
    abbreviation: "gxjmzy",
    province: "广西壮族自治区",
    id: "20504ccc-9b48-47f2-a549-2b8d88f4d0ea"
  },
  {
    name: "广西工商职业技术学院",
    abbreviation: "gxgsxy",
    province: "广西壮族自治区",
    id: "952585f7-6e7e-41d4-abf4-ce07f6acd020"
  },
  {
    name: "广西演艺职业学院",
    abbreviation: "gxart",
    province: "广西壮族自治区",
    id: "ec03e7c3-0a4c-4cee-a7d0-d4bff035900c"
  },
  {
    name: "广西电力职业技术学院",
    abbreviation: "gxdlxy",
    province: "广西壮族自治区",
    id: "4fe8db83-ec3d-4cb5-b0be-518920b692cf"
  },
  {
    name: "广西城市职业学院",
    abbreviation: "gxccedu",
    province: "广西壮族自治区",
    id: "0f38623c-2a51-4e7a-a7aa-b09855ddd767"
  },
  {
    name: "广西英华国际职业学院",
    abbreviation: "tic-gx",
    province: "广西壮族自治区",
    id: "3e1cb46c-7aba-44d8-9eb0-44cd964a2194"
  },
  {
    name: "柳州城市职业学院",
    abbreviation: "lcvc",
    province: "广西壮族自治区",
    id: "482d2c1d-6734-4de8-b731-4423ce64377d"
  },
  {
    name: "百色职业学院",
    abbreviation: "bszyxy",
    province: "广西壮族自治区",
    id: "5724f9bb-b87f-414b-8682-b36c7a33fa61"
  },
  {
    name: "广西工程职业学院",
    abbreviation: "gxgcedu",
    province: "广西壮族自治区",
    id: "e0edf1fb-4759-426b-8b81-a77471d2e539"
  },
  {
    name: "广西理工职业技术学院",
    abbreviation: "gxlgxy",
    province: "广西壮族自治区",
    id: "07f2e37f-691c-4534-b596-5c2c5121b7d4"
  },
  {
    name: "梧州职业学院",
    abbreviation: "wzzyedu",
    province: "广西壮族自治区",
    id: "9499c651-0e60-4282-894f-86c4fa1994e0"
  },
  {
    name: "广西经济职业学院",
    abbreviation: "gxevc",
    province: "广西壮族自治区",
    id: "338050af-e031-4864-85c3-9b80810ec9ba"
  },
  {
    name: "广西幼儿师范高等专科学校",
    abbreviation: "gxyesf",
    province: "广西壮族自治区",
    id: "7c14aa59-b883-4357-9ae4-6be5c71aebf1"
  },
  {
    name: "广西科技职业学院",
    abbreviation: "gxkjzy",
    province: "广西壮族自治区",
    id: "9517662a-921b-457f-8782-6b628a6fc256"
  },
  {
    name: "广西卫生职业技术学院",
    abbreviation: "gxwzy",
    province: "广西壮族自治区",
    id: "16edddb7-cc3c-4ed6-96e1-8ebeae3d4ac3"
  },
  {
    name: "广西培贤国际职业学院",
    abbreviation: "ha185",
    province: "广西壮族自治区",
    id: "64b59d3e-7ea4-4b80-917a-44ddd9234fa0"
  },
  {
    name: "广西金融职业技术学院",
    abbreviation: "gxjrxy",
    province: "广西壮族自治区",
    id: "00a0bf99-c9a4-4673-af21-4fd73ef69628"
  },
  {
    name: "广西蓝天航空职业学院",
    abbreviation: "gxltu",
    province: "广西壮族自治区",
    id: "4a89c91b-3609-4148-b6f9-e3b01f671d5a"
  },
  {
    name: "广西安全工程职业技术学院",
    abbreviation: "gxazy",
    province: "广西壮族自治区",
    id: "439954b4-ca6f-40cd-99b1-c95b9171e032"
  },
  {
    name: "海南大学",
    abbreviation: "hainu",
    province: "海南省",
    id: "f4b62d29-7252-4ef9-b964-39f6c216fbfc"
  },
  {
    name: "海南热带海洋学院",
    abbreviation: "qzu",
    province: "海南省",
    id: "e769732e-f694-4633-a36f-e3545fd9dd51"
  },
  {
    name: "海南师范大学",
    abbreviation: "hainnu",
    province: "海南省",
    id: "57a8fca5-d18c-4062-aecf-95b5f6514fc6"
  },
  {
    name: "海南医学院",
    abbreviation: "hainmc",
    province: "海南省",
    id: "60c5020d-4322-4ca6-9a66-200f20df566f"
  },
  {
    name: "海口经济学院",
    abbreviation: "hkc",
    province: "海南省",
    id: "a11a08d2-b7a8-449d-be2d-a17970a57257"
  },
  {
    name: "琼台师范学院",
    abbreviation: "qttc",
    province: "海南省",
    id: "1359f999-1852-422e-a7f2-50b348bb7fc8"
  },
  {
    name: "三亚学院",
    abbreviation: "sanyau",
    province: "海南省",
    id: "3a57b8f7-7501-4e64-bbec-8489630fbbdd"
  },
  {
    name: "海南职业技术学院",
    abbreviation: "hcvt",
    province: "海南省",
    id: "fc64f4b3-935f-4e62-8b30-afea89dd98ec"
  },
  {
    name: "三亚城市职业学院",
    abbreviation: "sycsxy",
    province: "海南省",
    id: "897b4eec-8ed1-4236-ac1d-a7576aeb7d6b"
  },
  {
    name: "海南软件职业技术学院",
    abbreviation: "hnspi",
    province: "海南省",
    id: "88673081-fa3b-4b9d-b48a-fe289df3f0af"
  },
  {
    name: "海南政法职业学院",
    abbreviation: "hnplc",
    province: "海南省",
    id: "f015c5d5-a63c-4be6-9bce-635df87e32c1"
  },
  {
    name: "海南外国语职业学院",
    abbreviation: "hnflvc",
    province: "海南省",
    id: "f1b1ec5c-56f9-4421-ac82-7bd728391a83"
  },
  {
    name: "海南经贸职业技术学院",
    abbreviation: "hnjmc",
    province: "海南省",
    id: "e67aa269-007b-454e-9f25-12f95a22059d"
  },
  {
    name: "海南工商职业学院",
    abbreviation: "hntbc",
    province: "海南省",
    id: "6d35bebb-c9fc-4552-995f-9d049c005942"
  },
  {
    name: "三亚航空旅游职业学院",
    abbreviation: "hnasatc",
    province: "海南省",
    id: "0b11f25c-01a3-4bdf-b9bd-ded3fe6a2942"
  },
  {
    name: "海南科技职业学院",
    abbreviation: "hnkjedu",
    province: "海南省",
    id: "01b0946a-f08d-461d-b6cc-fa56524db6d8"
  },
  {
    name: "三亚理工职业学院",
    abbreviation: "ucsanya",
    province: "海南省",
    id: "601d7746-b60f-45cf-a8b3-427722957283"
  },
  {
    name: "海南体育职业技术学院",
    abbreviation: "hnstx",
    province: "海南省",
    id: "84fbb378-2028-4037-8e4b-fad9398400f5"
  },
  {
    name: "三亚中瑞酒店管理职业学院",
    abbreviation: "his-edu",
    province: "海南省",
    id: "a31484dc-4ced-40ba-8e1e-be8893f7137a"
  },
  {
    name: "重庆大学",
    abbreviation: "cqu",
    province: "重庆市",
    id: "2b22927e-6e5a-4ce1-b541-af55911ee0a6"
  },
  {
    name: "重庆邮电大学",
    abbreviation: "cqupt",
    province: "重庆市",
    id: "e8dcc447-800a-4fba-8984-41a458927b45"
  },
  {
    name: "重庆交通大学",
    abbreviation: "cqjtu",
    province: "重庆市",
    id: "0fac890d-da52-4ef6-905c-a81c1ec42752"
  },
  {
    name: "重庆医科大学",
    abbreviation: "cqmu",
    province: "重庆市",
    id: "f4ab4d55-edab-477c-a003-5145fbd8e317"
  },
  {
    name: "西南大学",
    abbreviation: "swu",
    province: "重庆市",
    id: "8b91e47d-1848-403e-b17a-d70669f073d6"
  },
  {
    name: "重庆师范大学",
    abbreviation: "cqnu",
    province: "重庆市",
    id: "507a2cd0-072a-49d7-a97c-291204223bcf"
  },
  {
    name: "重庆文理学院",
    abbreviation: "cqwu",
    province: "重庆市",
    id: "297b9364-1e28-4da7-9a5a-5c9b7c99da57"
  },
  {
    name: "重庆三峡学院",
    abbreviation: "sanxiau",
    province: "重庆市",
    id: "9582e564-c0ed-481b-888d-200c7f1e3970"
  },
  {
    name: "长江师范学院",
    abbreviation: "yznu",
    province: "重庆市",
    id: "c6656b64-120a-42b4-9acd-c78e3645b8a3"
  },
  {
    name: "四川外国语大学",
    abbreviation: "sisu",
    province: "重庆市",
    id: "0c6ea9be-9261-4824-a868-352d621c752c"
  },
  {
    name: "西南政法大学",
    abbreviation: "swupl",
    province: "重庆市",
    id: "0d052101-9484-4661-a31b-b4d7e94c4346"
  },
  {
    name: "四川美术学院",
    abbreviation: "scfai",
    province: "重庆市",
    id: "2828765a-9003-4011-8630-6b769ed9a6a7"
  },
  {
    name: "重庆科技学院",
    abbreviation: "cqust",
    province: "重庆市",
    id: "4d251a17-8b49-46d4-84ac-461f9c12bc1e"
  },
  {
    name: "重庆理工大学",
    abbreviation: "cqut",
    province: "重庆市",
    id: "d331c496-1649-4ae2-b85d-165672d42b57"
  },
  {
    name: "重庆工商大学",
    abbreviation: "ctbu",
    province: "重庆市",
    id: "4109ae15-b806-4bc2-955c-18ffddfc41f5"
  },
  {
    name: "重庆工程学院",
    abbreviation: "cqgcxy",
    province: "重庆市",
    id: "50461229-70df-49e1-ab23-6b68896f3f23"
  },
  {
    name: "重庆大学城市科技学院",
    abbreviation: "cqucc",
    province: "重庆市",
    id: "df2765d0-d658-4110-a7db-1c305e166d15"
  },
  {
    name: "重庆警察学院",
    abbreviation: "cqjy",
    province: "重庆市",
    id: "c6970350-f36d-4661-9556-6483808c8aff"
  },
  {
    name: "重庆人文科技学院",
    abbreviation: "swuyc",
    province: "重庆市",
    id: "490de2f8-29d5-4500-b9d9-1fcfe0f96f80"
  },
  {
    name: "四川外语学院重庆南方翻译学院",
    abbreviation: "tcsisu",
    province: "重庆市",
    id: "aa408752-a03c-4825-bd29-327b838b88c3"
  },
  {
    name: "重庆师范大学涉外商贸学院",
    abbreviation: "swsm",
    province: "重庆市",
    id: "10307b2a-6899-43bf-8021-7d634e73c1fb"
  },
  {
    name: "重庆工商大学融智学院",
    abbreviation: "cqrzedu",
    province: "重庆市",
    id: "fe5aad3d-4586-4ed8-86dd-c46838ab1f7f"
  },
  {
    name: "重庆工商大学派斯学院",
    abbreviation: "ctbu",
    province: "重庆市",
    id: "ef6abf4a-a6bb-499d-845f-5c8a252b791c"
  },
  {
    name: "重庆邮电大学移通学院",
    abbreviation: "cqyti",
    province: "重庆市",
    id: "c6341b6d-30c7-4922-9e5c-bf4acf7ad001"
  },
  {
    name: "重庆第二师范学院",
    abbreviation: "cque",
    province: "重庆市",
    id: "71f2104f-3b27-49c8-9104-00a5d5dc0ac4"
  },
  {
    name: "重庆航天职业技术学院",
    abbreviation: "cqepc",
    province: "重庆市",
    id: "36ff7f59-cac5-4689-bc9c-f97b0664c5d9"
  },
  {
    name: "重庆电力高等专科学校",
    abbreviation: "cqepc",
    province: "重庆市",
    id: "3bdbc5f6-0d87-45b7-b672-497a0425a3a7"
  },
  {
    name: "重庆工业职业技术学院",
    abbreviation: "cqipc",
    province: "重庆市",
    id: "63e912b6-adcc-4605-9627-7f91c766067a"
  },
  {
    name: "重庆三峡职业学院",
    abbreviation: "cqsxedu",
    province: "重庆市",
    id: "ad2b54f7-ba03-4fd7-ba66-3059a7555d3d"
  },
  {
    name: "重庆工贸职业技术学院",
    abbreviation: "cqgmy",
    province: "重庆市",
    id: "dd3647b9-923d-4bd0-87db-b5c573c672ac"
  },
  {
    name: "重庆机电职业技术学院",
    abbreviation: "cqevi",
    province: "重庆市",
    id: "e342e61d-0da8-4eef-a8d9-0a5276c85b69"
  },
  {
    name: "重庆电子工程职业学院",
    abbreviation: "cqcet",
    province: "重庆市",
    id: "1a86bf6c-4561-4848-9e1e-aa0120119b5e"
  },
  {
    name: "重庆海联职业技术学院",
    abbreviation: "cqhl",
    province: "重庆市",
    id: "96ac3a7f-b10e-49f7-9d2c-bf5e60fde35a"
  },
  {
    name: "重庆信息技术职业学院",
    abbreviation: "cqeec",
    province: "重庆市",
    id: "9a7f039a-2e23-4fa5-82ec-a473d3b59b96"
  },
  {
    name: "重庆传媒职业学院",
    abbreviation: "cqcmxy",
    province: "重庆市",
    id: "124a1fca-d2ba-49fd-96fd-55a69184478a"
  },
  {
    name: "重庆城市管理职业学院",
    abbreviation: "cswu",
    province: "重庆市",
    id: "55a7d830-4a6c-49f5-8a38-a67148e719b8"
  },
  {
    name: "重庆工程职业技术学院",
    abbreviation: "cqvie",
    province: "重庆市",
    id: "f8f66b71-42aa-48a9-ad7d-41e187fd1799"
  },
  {
    name: "重庆房地产职业学院",
    abbreviation: "cqbyxy",
    province: "重庆市",
    id: "2bc84354-a1ae-4349-8f8f-fe3a22d87dfb"
  },
  {
    name: "重庆城市职业学院",
    abbreviation: "cqcvc",
    province: "重庆市",
    id: "8178d286-36fb-49b4-9a7b-babc94ddd7ab"
  },
  {
    name: "重庆水利电力职业技术学院",
    abbreviation: "cqsdzy",
    province: "重庆市",
    id: "27c93da0-7e81-49ed-8fa2-90a039b7e64f"
  },
  {
    name: "重庆工商职业学院",
    abbreviation: "cqtbi",
    province: "重庆市",
    id: "deb2a387-7c10-4e36-a513-2602779fb4bf"
  },
  {
    name: "重庆应用技术职业学院",
    abbreviation: "cqms",
    province: "重庆市",
    id: "8923137b-6e70-48c4-9488-b70cadf498fb"
  },
  {
    name: "重庆三峡医药高等专科学校",
    abbreviation: "sxyyc",
    province: "重庆市",
    id: "073f93a8-f2bf-48fc-85b9-f45f5de4195b"
  },
  {
    name: "重庆医药高等专科学校",
    abbreviation: "cqyygz",
    province: "重庆市",
    id: "32b5bae9-e086-4080-840f-44cabc529489"
  },
  {
    name: "重庆青年职业技术学院",
    abbreviation: "cqqzy",
    province: "重庆市",
    id: "961642d9-cc83-44a5-9aa9-bf89299a03df"
  },
  {
    name: "重庆财经职业学院",
    abbreviation: "cqcfe",
    province: "重庆市",
    id: "af8637ae-8e97-447b-993d-3af04103d618"
  },
  {
    name: "重庆科创职业学院",
    abbreviation: "cqie",
    province: "重庆市",
    id: "b9b8ef3c-feb2-4a08-9205-c83d9485376f"
  },
  {
    name: "重庆建筑工程职业学院",
    abbreviation: "cctc",
    province: "重庆市",
    id: "1f1a22f0-a032-4307-8e1f-c3115027da42"
  },
  {
    name: "重庆电讯职业学院",
    abbreviation: "cqdxxy",
    province: "重庆市",
    id: "de10a011-e64c-45f0-a496-34adf4be547f"
  },
  {
    name: "重庆能源职业学院",
    abbreviation: "cqny",
    province: "重庆市",
    id: "e60eba98-320e-4ebf-9328-0cb0934e0d53"
  },
  {
    name: "重庆商务职业学院",
    abbreviation: "cqswxy",
    province: "重庆市",
    id: "efc9bc23-d9e2-4510-813a-042017cb6dd0"
  },
  {
    name: "重庆交通职业学院",
    abbreviation: "cqjky",
    province: "重庆市",
    id: "ef32d2d6-dc49-4ef2-ac85-ae475a74374c"
  },
  {
    name: "重庆化工职业学院",
    abbreviation: "cqhgzy",
    province: "重庆市",
    id: "9f6c2c09-56ee-4da7-b01a-bf6321aa1a23"
  },
  {
    name: "重庆旅游职业学院",
    abbreviation: "cqvit",
    province: "重庆市",
    id: "83eda79e-0a3a-4e8a-aa65-e69269219433"
  },
  {
    name: "重庆安全技术职业学院",
    abbreviation: "cqvist",
    province: "重庆市",
    id: "70e55a55-4d2f-433b-bed6-4ae6292241e0"
  },
  {
    name: "重庆公共运输职业学院",
    abbreviation: "cqgyzy",
    province: "重庆市",
    id: "784ddab3-a1e5-4b5a-88b0-966f3bac61a7"
  },
  {
    name: "重庆艺术工程职业学院",
    abbreviation: "cqysxy",
    province: "重庆市",
    id: "df54ac86-5ee9-4691-b89d-70f88ae14d5e"
  },
  {
    name: "重庆轻工职业学院",
    abbreviation: "cqivc",
    province: "重庆市",
    id: "442da4b8-87e2-4fbb-b3ff-bf0dc0234114"
  },
  {
    name: "重庆电信职业学院",
    abbreviation: "cqtcedu",
    province: "重庆市",
    id: "18f191f5-e722-4d4a-9d17-452ebad6e1f6"
  },
  {
    name: "重庆经贸职业学院",
    abbreviation: "cqvcet",
    province: "重庆市",
    id: "4716e77f-b3a8-4c74-b094-919a8fbc5179"
  },
  {
    name: "重庆幼儿师范高等专科学校",
    abbreviation: "cqsxsf",
    province: "重庆市",
    id: "3fabf6a0-a04e-4195-a890-ca1a3638f1e6"
  },
  {
    name: "重庆文化艺术职业学院",
    abbreviation: "cqyixiao",
    province: "重庆市",
    id: "f6c7e365-9622-466a-b21e-30ecc103322d"
  },
  {
    name: "重庆科技职业学院",
    abbreviation: "cqfzgc",
    province: "重庆市",
    id: "39f7fe78-9502-481e-a19b-aac6e8b3220e"
  },
  {
    name: "重庆资源与环境保护职业学院",
    abbreviation: "cqcjxy",
    province: "重庆市",
    id: "5a85f8fa-810f-4961-97f1-ad8c0a45e5ac"
  },
  {
    name: "四川大学",
    abbreviation: "scu",
    province: "四川省",
    id: "84e2084e-36b7-4539-8626-f6a757ad21e3"
  },
  {
    name: "西南交通大学",
    abbreviation: "swjtu",
    province: "四川省",
    id: "3e2e17d9-a951-48a6-accb-d95b8be228cb"
  },
  {
    name: "电子科技大学",
    abbreviation: "uestc",
    province: "四川省",
    id: "6c3d24dc-c030-498e-a57d-19baa567a973"
  },
  {
    name: "西南石油大学",
    abbreviation: "swpu",
    province: "四川省",
    id: "5f7a7149-1225-4cea-8332-649957f045ba"
  },
  {
    name: "成都理工大学",
    abbreviation: "cdut",
    province: "四川省",
    id: "e8d655f1-c141-4097-8e7a-2b0a08dfbd92"
  },
  {
    name: "西南科技大学",
    abbreviation: "swust",
    province: "四川省",
    id: "d8a510dc-cb7f-4cb8-867d-a061fc28d809"
  },
  {
    name: "成都信息工程大学",
    abbreviation: "cuit",
    province: "四川省",
    id: "7db92cd2-afd1-45bf-b289-b66443180aa0"
  },
  {
    name: "四川理工学院",
    abbreviation: "suse",
    province: "四川省",
    id: "a4de3cfa-41be-42bc-b106-a6dbec0bc5c9"
  },
  {
    name: "西华大学",
    abbreviation: "xhu",
    province: "四川省",
    id: "56698b46-8577-43eb-8cab-06196e236811"
  },
  {
    name: "中国民用航空飞行学院",
    abbreviation: "cafuc",
    province: "四川省",
    id: "beb0d52a-995d-4958-b29a-73aca1f5aec0"
  },
  {
    name: "四川农业大学",
    abbreviation: "sicau",
    province: "四川省",
    id: "1a6f5956-f4cb-4903-b4ff-c1cd4b6e3e8c"
  },
  {
    name: "西昌学院",
    abbreviation: "xcc",
    province: "四川省",
    id: "d9b57b11-4afe-4774-896b-cc510d1b4a58"
  },
  {
    name: "西南医科大学",
    abbreviation: "scmu",
    province: "四川省",
    id: "1ccfd752-4760-4532-be0c-0dfc0e30fd98"
  },
  {
    name: "成都中医药大学",
    abbreviation: "cdutcm",
    province: "四川省",
    id: "181892c2-56b5-42e0-a825-dc3cc5fc646c"
  },
  {
    name: "川北医学院",
    abbreviation: "nsmc",
    province: "四川省",
    id: "5c0f2837-6af0-4445-b355-c68dae24368d"
  },
  {
    name: "四川师范大学",
    abbreviation: "sicnu",
    province: "四川省",
    id: "6d5b83a6-ef5a-4ac6-9e78-405f2d41c77f"
  },
  {
    name: "西华师范大学",
    abbreviation: "cwnu",
    province: "四川省",
    id: "4982a4fa-ffa6-45d4-af02-2d4e6ab42cc3"
  },
  {
    name: "绵阳师范学院",
    abbreviation: "mytc",
    province: "四川省",
    id: "ac8a02dc-627b-470a-b7ff-0db1c40283a3"
  },
  {
    name: "内江师范学院",
    abbreviation: "njtc",
    province: "四川省",
    id: "19a52e6f-b20e-4ee7-8046-2627c20b1cc6"
  },
  {
    name: "宜宾学院",
    abbreviation: "yibinu",
    province: "四川省",
    id: "a6030709-049d-4a18-be3c-345f40ca85a6"
  },
  {
    name: "四川文理学院",
    abbreviation: "sasu",
    province: "四川省",
    id: "e7e3de94-e8a6-4bc6-8430-95a95165052a"
  },
  {
    name: "阿坝师范学院",
    abbreviation: "abtc",
    province: "四川省",
    id: "3da04235-0fc8-4fd0-ad6a-6405e26c93c0"
  },
  {
    name: "乐山师范学院",
    abbreviation: "lstc",
    province: "四川省",
    id: "69498362-f0c2-4f31-a946-8e3be5dd7b74"
  },
  {
    name: "西南财经大学",
    abbreviation: "swufe",
    province: "四川省",
    id: "b13e5959-4389-4147-97de-2124a28fdfb1"
  },
  {
    name: "成都体育学院",
    abbreviation: "cdsu",
    province: "四川省",
    id: "d72a3509-7e25-40a5-a280-3e785f178437"
  },
  {
    name: "四川音乐学院",
    abbreviation: "sccm",
    province: "四川省",
    id: "4339145c-b32a-40eb-ad05-4d325f69ccfb"
  },
  {
    name: "西南民族大学",
    abbreviation: "swun",
    province: "四川省",
    id: "5a1fc25c-e26d-445d-97f1-d3fe9c35a4b8"
  },
  {
    name: "成都学院",
    abbreviation: "cdu",
    province: "四川省",
    id: "6e28ba75-5f31-456b-8d4b-2473fb16e925"
  },
  {
    name: "成都工业学院",
    abbreviation: "cdtu",
    province: "四川省",
    id: "dd029161-e5c5-4eb3-9d39-fd350177ecd3"
  },
  {
    name: "攀枝花学院",
    abbreviation: "pzhu",
    province: "四川省",
    id: "818640d6-b894-4cc7-b9f3-91f3bfaff747"
  },
  {
    name: "四川旅游学院",
    abbreviation: "sctu",
    province: "四川省",
    id: "bbc8bebf-1e89-4a64-9d1b-25d60511bc2c"
  },
  {
    name: "四川民族学院",
    abbreviation: "scun",
    province: "四川省",
    id: "18434062-8fdc-41e2-831b-283c53af11c6"
  },
  {
    name: "四川警察学院",
    abbreviation: "scpolicec",
    province: "四川省",
    id: "1ea15f04-1de3-43ec-8a6e-3388d1cee6d8"
  },
  {
    name: "成都东软学院",
    abbreviation: "nsu",
    province: "四川省",
    id: "41d85822-ea5c-48ef-a540-b9558b4c2a06"
  },
  {
    name: "电子科技大学成都学院",
    abbreviation: "gtsoft",
    province: "四川省",
    id: "308b6861-a371-4f75-b354-e0264214cc2a"
  },
  {
    name: "成都理工大学工程技术学院",
    abbreviation: "cdutetc",
    province: "四川省",
    id: "907f0c75-d084-4f36-b48f-3a99ef9106cb"
  },
  {
    name: "四川传媒学院",
    abbreviation: "scmc",
    province: "四川省",
    id: "3278fc63-38c4-454d-9f13-9189edcf230c"
  },
  {
    name: "成都信息工程大学银杏酒店管理学院",
    abbreviation: "yihms",
    province: "四川省",
    id: "054dc340-6a19-42fc-97a2-018ba6737554"
  },
  {
    name: "成都文理学院",
    abbreviation: "cdcas",
    province: "四川省",
    id: "d1b21234-635c-4208-a9fa-eadb209355e4"
  },
  {
    name: "四川工商学院",
    abbreviation: "stbu",
    province: "四川省",
    id: "875a489c-1635-4d82-982a-f6515d599c59"
  },
  {
    name: "四川外国语大学成都学院",
    abbreviation: "cisisu",
    province: "四川省",
    id: "1467f537-1cc9-4e7a-ba87-d6161a715826"
  },
  {
    name: "成都医学院",
    abbreviation: "cmc",
    province: "四川省",
    id: "2e259ade-b5d4-4e8d-b04d-2ec729c6e45e"
  },
  {
    name: "四川工业科技学院",
    abbreviation: "scit",
    province: "四川省",
    id: "56dc2439-3af6-4e7b-a7f8-2a8d3fb958d9"
  },
  {
    name: "四川大学锦城学院",
    abbreviation: "scujcc",
    province: "四川省",
    id: "82bd70d9-e9c5-4f01-89e0-639eeeb3d156"
  },
  {
    name: "西南财经大学天府学院",
    abbreviation: "tf-swufe",
    province: "四川省",
    id: "6dad7aa9-270f-4a1f-b7df-9addacf9c53f"
  },
  {
    name: "四川大学锦江学院",
    abbreviation: "scujj",
    province: "四川省",
    id: "4139f56e-838d-4487-8eab-f413e3e28ace"
  },
  {
    name: "四川文化艺术学院",
    abbreviation: "cymy",
    province: "四川省",
    id: "04913198-f3cf-47e9-aa5e-f68e025fea75"
  },
  {
    name: "西南科技大学城市学院",
    abbreviation: "ccswust",
    province: "四川省",
    id: "20429b49-1fa5-4a3e-9c83-be91fcad217c"
  },
  {
    name: "西南交通大学希望学院",
    abbreviation: "swjtuhc",
    province: "四川省",
    id: "a71478fa-f8f7-4d47-954f-9137d80dc558"
  },
  {
    name: "成都师范学院",
    abbreviation: "cdnu",
    province: "四川省",
    id: "720015e3-598e-4435-a6a7-6d86bf4db2e2"
  },
  {
    name: "四川电影电视学院",
    abbreviation: "scftvc",
    province: "四川省",
    id: "03cb58cb-482c-464d-99d9-21950d5e75bd"
  },
  {
    name: "成都纺织高等专科学校",
    abbreviation: "cdtc",
    province: "四川省",
    id: "d641e00b-d078-4357-9208-4429712828ae"
  },
  {
    name: "民办四川天一学院",
    abbreviation: "tianyi",
    province: "四川省",
    id: "ab4d5450-445d-4e75-b0b0-3c1df0e542de"
  },
  {
    name: "成都航空职业技术学院",
    abbreviation: "cdavtc",
    province: "四川省",
    id: "c4b54ba6-caa2-4e71-a32f-32701e867b8c"
  },
  {
    name: "四川电力职业技术学院",
    abbreviation: "scdy",
    province: "四川省",
    id: "6a331e42-043e-4dfb-bd24-9ae299dbaea8"
  },
  {
    name: "成都职业技术学院",
    abbreviation: "cdvtc",
    province: "四川省",
    id: "f824dfbf-e518-43c0-9547-e26373c4cb42"
  },
  {
    name: "四川化工职业技术学院",
    abbreviation: "sccvtc",
    province: "四川省",
    id: "406280e7-0bcd-48c7-a2b7-e03fb641df34"
  },
  {
    name: "四川水利职业技术学院",
    abbreviation: "swcvc",
    province: "四川省",
    id: "36ef0939-5aca-4698-8d66-9843e7819de7"
  },
  {
    name: "南充职业技术学院",
    abbreviation: "nczy",
    province: "四川省",
    id: "57c66da1-2522-4916-826d-bbf186f52a5b"
  },
  {
    name: "内江职业技术学院",
    abbreviation: "njvtc",
    province: "四川省",
    id: "daecc644-30e3-45b4-b78a-8915e41330b2"
  },
  {
    name: "四川航天职业技术学院",
    abbreviation: "sacvt",
    province: "四川省",
    id: "70a9802b-07e5-4885-946a-e4d09735aeb1"
  },
  {
    name: "四川邮电职业技术学院",
    abbreviation: "sptpc",
    province: "四川省",
    id: "2b7386e5-dab9-4437-b15b-4814629e0e6d"
  },
  {
    name: "四川机电职业技术学院",
    abbreviation: "scemi",
    province: "四川省",
    id: "fe522bdd-46be-46e7-a173-4b7885c8d61d"
  },
  {
    name: "绵阳职业技术学院",
    abbreviation: "myvtc",
    province: "四川省",
    id: "b4be7ae0-f119-442f-9573-0731caa9e08a"
  },
  {
    name: "四川交通职业技术学院",
    abbreviation: "svtcc",
    province: "四川省",
    id: "91ce09c7-1bf3-4fd0-bf8e-e2da2327465d"
  },
  {
    name: "四川工商职业技术学院",
    abbreviation: "sctbc",
    province: "四川省",
    id: "d865b32f-b48b-4094-a083-4d592df7764c"
  },
  {
    name: "四川工程职业技术学院",
    abbreviation: "scetc",
    province: "四川省",
    id: "85a7f765-1b11-4774-a805-7b647d04a23f"
  },
  {
    name: "四川建筑职业技术学院",
    abbreviation: "scatc",
    province: "四川省",
    id: "23f3a4fe-f00c-49b3-9914-8b3c4197a0cd"
  },
  {
    name: "达州职业技术学院",
    abbreviation: "dzzjy",
    province: "四川省",
    id: "aa80da9b-f199-4529-bbcd-e972e68401b9"
  },
  {
    name: "四川托普信息技术职业学院",
    abbreviation: "scetop",
    province: "四川省",
    id: "956316ad-4a46-4960-a6a2-ea642d9a6d9e"
  },
  {
    name: "四川国际标榜职业学院",
    abbreviation: "polus",
    province: "四川省",
    id: "04b80e24-4e6f-498b-8955-6ccbc5be9fcf"
  },
  {
    name: "成都农业科技职业学院",
    abbreviation: "cdnkxy",
    province: "四川省",
    id: "19c7fb75-dd96-4f72-bb94-890f4dfb628d"
  },
  {
    name: "宜宾职业技术学院",
    abbreviation: "ybzy",
    province: "四川省",
    id: "9f2071df-dffa-44bd-9dde-e75e93688529"
  },
  {
    name: "泸州职业技术学院",
    abbreviation: "lzy",
    province: "四川省",
    id: "1c811b5a-9519-4044-935a-97cc6664a837"
  },
  {
    name: "眉山职业技术学院",
    abbreviation: "msvtc",
    province: "四川省",
    id: "a2021676-c3c9-4a46-8c7b-f602d1de56b4"
  },
  {
    name: "成都艺术职业学院",
    abbreviation: "cdartpro",
    province: "四川省",
    id: "eb4621dd-7c11-4c92-8853-aa16d95375fa"
  },
  {
    name: "四川职业技术学院",
    abbreviation: "scvtc",
    province: "四川省",
    id: "8a7461c7-0eac-4897-9a91-7154d08ee60a"
  },
  {
    name: "乐山职业技术学院",
    abbreviation: "lszyxy",
    province: "四川省",
    id: "3e065b25-bea1-455e-9c40-02dba080905b"
  },
  {
    name: "雅安职业技术学院",
    abbreviation: "yazjy",
    province: "四川省",
    id: "1d69aa8d-be51-439c-9efc-23852fa2dbf3"
  },
  {
    name: "四川商务职业学院",
    abbreviation: "scsw",
    province: "四川省",
    id: "bd058adc-35ea-45cd-96fd-2fccf84eec60"
  },
  {
    name: "四川司法警官职业学院",
    abbreviation: "sjpopc",
    province: "四川省",
    id: "976a6743-ef15-4c6a-847e-d62291528632"
  },
  {
    name: "广安职业技术学院",
    abbreviation: "gavtc",
    province: "四川省",
    id: "1bd3575a-481e-4d34-a24a-dd630d8fd0a0"
  },
  {
    name: "四川信息职业技术学院",
    abbreviation: "scitc",
    province: "四川省",
    id: "f25609bb-9461-4389-9808-ef018857c454"
  },
  {
    name: "四川文化传媒职业学院",
    abbreviation: "svccc",
    province: "四川省",
    id: "71fc6b56-24f8-4692-a352-63a81090284c"
  },
  {
    name: "四川华新现代职业学院",
    abbreviation: "schxmvc",
    province: "四川省",
    id: "6d24def9-42e2-4934-aa16-cf7c0a583bbc"
  },
  {
    name: "四川管理职业学院",
    abbreviation: "scmpi",
    province: "四川省",
    id: "5d0de11e-e985-4c9b-b85a-09a5deb79be7"
  },
  {
    name: "四川艺术职业学院",
    abbreviation: "scapi",
    province: "四川省",
    id: "b97c844e-079d-48f4-9035-53b55fcc71cb"
  },
  {
    name: "四川中医药高等专科学校",
    abbreviation: "scctcm",
    province: "四川省",
    id: "5c13a4dd-8a33-4282-a213-27fce991ea41"
  },
  {
    name: "四川科技职业学院",
    abbreviation: "scstc",
    province: "四川省",
    id: "4db4d419-e544-460f-bad4-129b822aea01"
  },
  {
    name: "四川文化产业职业学院",
    abbreviation: "scvcci",
    province: "四川省",
    id: "060607f7-2aa3-45c3-b693-28b1eef8782f"
  },
  {
    name: "四川财经职业学院",
    abbreviation: "scpcfe",
    province: "四川省",
    id: "a8d1cd8f-e089-4b1b-9bf3-e805b4c6060f"
  },
  {
    name: "四川城市职业学院",
    abbreviation: "scuvc",
    province: "四川省",
    id: "15f41732-6e88-40ed-b050-e923ddbbf821"
  },
  {
    name: "四川现代职业学院",
    abbreviation: "scmvc",
    province: "四川省",
    id: "e988cbbe-abd7-4d1f-8585-1fe67c00fa01"
  },
  {
    name: "四川幼儿师范高等专科学校",
    abbreviation: "scyesz",
    province: "四川省",
    id: "704dd7fb-41df-4963-83f3-d67b1d3bb8fd"
  },
  {
    name: "四川长江职业学院",
    abbreviation: "sccvc",
    province: "四川省",
    id: "81aa9904-32a4-4407-b43d-440c92275a5c"
  },
  {
    name: "四川三河职业学院",
    abbreviation: "scshpc",
    province: "四川省",
    id: "35b08da6-8bf6-4c7b-95b6-26097ad96d0f"
  },
  {
    name: "川北幼儿师范高等专科学校",
    abbreviation: "gysfxx",
    province: "四川省",
    id: "19c8723c-668d-4f73-878a-99e6fc14e594"
  },
  {
    name: "四川卫生康复职业学院",
    abbreviation: "sczghs",
    province: "四川省",
    id: "506b1f67-2999-4a6f-9eaa-7d0ea1e06b0f"
  },
  {
    name: "四川汽车职业技术学院",
    abbreviation: "scavtc",
    province: "四川省",
    id: "a2b75c05-be7a-4399-a733-9a9ecbad381f"
  },
  {
    name: "巴中职业技术学院",
    abbreviation: "bzzyjsxy",
    province: "四川省",
    id: "fedf86b0-4eff-48a6-b599-2b2fa32aa19b"
  },
  {
    name: "四川希望汽车职业学院",
    abbreviation: "qicheedu",
    province: "四川省",
    id: "00c8a5f1-2f0d-41d2-885d-1a203d200764"
  },
  {
    name: "四川电子机械职业技术学院",
    abbreviation: "scemvtc",
    province: "四川省",
    id: "eeb044fc-4161-4735-aadb-e70fc97ce828"
  },
  {
    name: "四川文轩职业学院",
    abbreviation: "scztjy",
    province: "四川省",
    id: "15c87ec2-2ebb-4fbc-933f-6a8ad5fa1b6f"
  },
  {
    name: "川南幼儿师范专科学校",
    abbreviation: "sclcys",
    province: "四川省",
    id: "073f5e8d-6ea6-43ac-a60e-d36bd4b01472"
  },
  {
    name: "四川护理职业学院",
    abbreviation: "scswx",
    province: "四川省",
    id: "a9a8249a-550d-45f3-a1dc-e9a50da48515"
  },
  {
    name: "成都工业职业技术学院",
    abbreviation: "cdivtc",
    province: "四川省",
    id: "423da266-9794-4830-9efc-bbd529cc0c59"
  },
  {
    name: "四川西南航空职业学院",
    abbreviation: "xnhkxy",
    province: "四川省",
    id: "8c1c03d0-6b5f-4916-9f2b-c189e3f700de"
  },
  {
    name: "成都工贸职业技术学院",
    abbreviation: "cdgmxy",
    province: "四川省",
    id: "067a67ec-8ed5-49b8-a772-3ef9c93f8c00"
  },
  {
    name: "四川应用技术职业学院",
    abbreviation: "sccas",
    province: "四川省",
    id: "43e563c1-6494-41ae-b84f-3fdd8e283169"
  },
  {
    name: "贵州大学",
    abbreviation: "gzu",
    province: "贵州省",
    id: "fad57e93-ea05-48d0-877d-1321a0e236fa"
  },
  {
    name: "贵州医科大学",
    abbreviation: "gmc",
    province: "贵州省",
    id: "55a98b3f-0a25-45c7-87b5-d08bc2cecc35"
  },
  {
    name: "遵义医学院",
    abbreviation: "zmc",
    province: "贵州省",
    id: "b73189c2-b257-4961-85cf-9d011fef1528"
  },
  {
    name: "贵阳中医学院",
    abbreviation: "gyctcm",
    province: "贵州省",
    id: "5a1453fe-1c2a-4b65-ae2f-1a992ff808eb"
  },
  {
    name: "贵州师范大学",
    abbreviation: "gznu",
    province: "贵州省",
    id: "dc7fdbfc-3576-4713-a142-a40ee94757ea"
  },
  {
    name: "遵义师范学院",
    abbreviation: "zync",
    province: "贵州省",
    id: "be67fb49-d058-40b2-a49a-e5305409f359"
  },
  {
    name: "铜仁学院",
    abbreviation: "gztrc",
    province: "贵州省",
    id: "84075c0c-c1fc-4f86-b384-d72dc0eaf216"
  },
  {
    name: "兴义民族师范学院",
    abbreviation: "qxntc",
    province: "贵州省",
    id: "3e7044ce-6ec7-4fb2-ba85-0ac4c6cfafd2"
  },
  {
    name: "安顺学院",
    abbreviation: "asu",
    province: "贵州省",
    id: "35056172-ee13-46a2-a5ad-79546e49b366"
  },
  {
    name: "贵州工程应用技术学院",
    abbreviation: "gues",
    province: "贵州省",
    id: "69cd81d2-6234-4079-80fb-8d192ab31a17"
  },
  {
    name: "凯里学院",
    abbreviation: "kluniv",
    province: "贵州省",
    id: "2745ef0c-f92a-4956-b9b6-c921451c6a89"
  },
  {
    name: "黔南民族师范学院",
    abbreviation: "sgmtu",
    province: "贵州省",
    id: "911ad4a6-60bf-4e96-86a1-e22952fa81bb"
  },
  {
    name: "贵州财经大学",
    abbreviation: "gzife",
    province: "贵州省",
    id: "a890d8d0-6b0c-49aa-acb3-2bbad29c0ce2"
  },
  {
    name: "贵州民族大学",
    abbreviation: "gzmu",
    province: "贵州省",
    id: "902d3f30-f13d-4dc1-bae5-e8f0ff4fb972"
  },
  {
    name: "贵阳学院",
    abbreviation: "gyu",
    province: "贵州省",
    id: "163d799f-0015-41ba-9ee2-9d9164be510a"
  },
  {
    name: "六盘水师范学院",
    abbreviation: "lpssy",
    province: "贵州省",
    id: "0938b8c9-d995-4c06-8db0-559035902ee2"
  },
  {
    name: "贵州商学院",
    abbreviation: "gzcc",
    province: "贵州省",
    id: "7a3cb2ce-8057-4091-b391-42775e1cd12a"
  },
  {
    name: "贵州警察学院",
    abbreviation: "gzjgxy",
    province: "贵州省",
    id: "864da201-c9a8-49f6-8bdc-83dabcb0efd6"
  },
  {
    name: "贵州财经学院商务学院",
    abbreviation: "gzife",
    province: "贵州省",
    id: "5c3e8c72-2e25-4bc1-8dbd-67a8534ada05"
  },
  {
    name: "贵州大学科技学院",
    abbreviation: "gzu",
    province: "贵州省",
    id: "0d032287-a345-4eb7-a8e0-488810d7ca71"
  },
  {
    name: "贵州大学明德学院",
    abbreviation: "gzu",
    province: "贵州省",
    id: "a509dc92-4108-41ba-8bec-050d2902cadd"
  },
  {
    name: "贵州民族学院人文科技学院",
    abbreviation: "gzmyrw",
    province: "贵州省",
    id: "1b8f3b68-60a9-4659-93d3-9dcc887837b1"
  },
  {
    name: "贵州师范大学求是学院",
    abbreviation: "gznu",
    province: "贵州省",
    id: "c05c7778-875a-4f1d-9671-969c5b860b34"
  },
  {
    name: "遵义医学院医学与科技学院",
    abbreviation: "zmc",
    province: "贵州省",
    id: "5031a2a2-9a61-4002-92dc-4a494fd181d3"
  },
  {
    name: "贵阳医学院神奇民族医药学院",
    abbreviation: "gmc",
    province: "贵州省",
    id: "5aab0705-b96f-4886-ae5f-c2fc287b39e4"
  },
  {
    name: "贵州师范学院",
    abbreviation: "gznc",
    province: "贵州省",
    id: "ca412bf8-5b4d-4478-b5eb-a98a9499aea2"
  },
  {
    name: "贵州理工学院",
    abbreviation: "git",
    province: "贵州省",
    id: "7a80e535-3a75-41ed-9ef2-445e5b387a62"
  },
  {
    name: "茅台学院",
    abbreviation: "mtxy",
    province: "贵州省",
    id: "b95fc713-e3ca-4589-a413-69931b50bdfe"
  },
  {
    name: "黔南民族医学高等专科学校",
    abbreviation: "qnmc",
    province: "贵州省",
    id: "d9df0396-3109-4d86-960c-9c844f538644"
  },
  {
    name: "贵州交通职业技术学院",
    abbreviation: "gzjtzy",
    province: "贵州省",
    id: "51194483-70e7-40f4-9374-0086a4077727"
  },
  {
    name: "贵州航天职业技术学院",
    abbreviation: "gzhtzy",
    province: "贵州省",
    id: "9f40cc48-6015-44b3-9a5d-bbf48c58a23b"
  },
  {
    name: "贵州电子信息职业技术学院",
    abbreviation: "gzeic",
    province: "贵州省",
    id: "f6dc3c2e-2e86-4ca5-92d7-0f597a971ccc"
  },
  {
    name: "安顺职业技术学院",
    abbreviation: "asotc",
    province: "贵州省",
    id: "6b9c0266-13fb-4da3-89d8-2f93b79ba83b"
  },
  {
    name: "黔东南民族职业技术学院",
    abbreviation: "qdnpt",
    province: "贵州省",
    id: "f83bd206-a376-41b3-bc0a-0d07668cc9b1"
  },
  {
    name: "黔南民族职业技术学院",
    abbreviation: "qnzy",
    province: "贵州省",
    id: "7ed56ce0-0383-4ef9-83c9-e3c298d3ada1"
  },
  {
    name: "遵义职业技术学院",
    abbreviation: "zyzy",
    province: "贵州省",
    id: "a0d74252-b7df-43d6-b63e-1652755628b3"
  },
  {
    name: "贵州城市职业学院",
    abbreviation: "cityp",
    province: "贵州省",
    id: "4cd17e33-7713-4544-9a7e-b76ec7f8f39c"
  },
  {
    name: "贵州工业职业技术学院",
    abbreviation: "gzky",
    province: "贵州省",
    id: "f6ab9025-f5f2-44f2-8730-004bddb642ae"
  },
  {
    name: "贵州电力职业技术学院",
    abbreviation: "csgedu",
    province: "贵州省",
    id: "98bc4acd-4143-49b8-a5b3-2d0f325da3fc"
  },
  {
    name: "六盘水职业技术学院",
    abbreviation: "lpszy",
    province: "贵州省",
    id: "318428ba-8f8f-45db-ad9a-b44cb5ef4cac"
  },
  {
    name: "铜仁职业技术学院",
    abbreviation: "trzy",
    province: "贵州省",
    id: "193fc009-f541-4de1-8cbe-89127c518f46"
  },
  {
    name: "黔西南民族职业技术学院",
    abbreviation: "qxnzy",
    province: "贵州省",
    id: "db1f87ed-d821-4341-a639-c5d0c39fcd8c"
  },
  {
    name: "贵州轻工职业技术学院",
    abbreviation: "gzqy",
    province: "贵州省",
    id: "9bd3e111-3d77-4b2e-88d9-cf3d634ae2b0"
  },
  {
    name: "遵义医药高等专科学校",
    abbreviation: "zunyiyizhu",
    province: "贵州省",
    id: "a395d432-ce79-461c-ac8c-edea0be649ea"
  },
  {
    name: "贵阳护理职业学院",
    abbreviation: "gynvc",
    province: "贵州省",
    id: "4786657e-c798-4d90-898e-c94124420a2c"
  },
  {
    name: "贵阳职业技术学院",
    abbreviation: "gyvtc",
    province: "贵州省",
    id: "78ed6409-eacd-4bbf-8fa5-d7e14e48921b"
  },
  {
    name: "毕节职业技术学院",
    abbreviation: "gzbjzy",
    province: "贵州省",
    id: "ac03efa8-5313-470d-a4bf-0d0dba141ff7"
  },
  {
    name: "贵州职业技术学院",
    abbreviation: "gzvti",
    province: "贵州省",
    id: "5ba0d6e6-d40d-4226-b60e-c568953cff39"
  },
  {
    name: "贵州盛华职业学院",
    abbreviation: "forerunner",
    province: "贵州省",
    id: "4fa87ba5-b919-4ab8-8578-70e7c0dfeccd"
  },
  {
    name: "贵州工商职业学院",
    abbreviation: "gzgszy",
    province: "贵州省",
    id: "615450fd-b185-4935-9468-1ebc914a6838"
  },
  {
    name: "贵阳幼儿师范高等专科学校",
    abbreviation: "gyys",
    province: "贵州省",
    id: "efdb4a3b-74fb-4b7c-9ee1-e0ff88e653fd"
  },
  {
    name: "铜仁幼儿师范高等专科学校",
    abbreviation: "gzsnsf",
    province: "贵州省",
    id: "07dc89e6-a624-4d9c-be68-89d8e219a5c6"
  },
  {
    name: "黔南民族幼儿师范高等专科学校",
    abbreviation: "gdsf",
    province: "贵州省",
    id: "2de83b15-a801-4676-8dd5-5aa3b59cf5e5"
  },
  {
    name: "毕节医学高等专科学校",
    abbreviation: "qxnzy",
    province: "贵州省",
    id: "5c7fb500-e340-4c3d-95f7-0f39f4b6515a"
  },
  {
    name: "贵州建设职业技术学院",
    abbreviation: "gzsjsxx",
    province: "贵州省",
    id: "fcabadcf-22bf-45b4-ac15-88ed9dad0d28"
  },
  {
    name: "毕节幼儿师范高等专科学校",
    abbreviation: "gzbjyz",
    province: "贵州省",
    id: "444a8699-f45d-427a-bd4c-29ed8bdcfcdc"
  },
  {
    name: "贵州农业职业学院",
    abbreviation: "gznzy",
    province: "贵州省",
    id: "7a632e23-6513-43be-bc16-1f76172802d6"
  },
  {
    name: "贵州工程职业学院",
    abbreviation: "gzieu",
    province: "贵州省",
    id: "2da0f62c-7e1f-4415-a8d9-483989d6edc8"
  },
  {
    name: "贵州工贸职业学院",
    abbreviation: "gzgmzyxy",
    province: "贵州省",
    id: "30fd6ace-6f7b-4aa5-9bf1-3a1f90e8ba2b"
  },
  {
    name: "贵州应用技术职业学院",
    abbreviation: "gzyyxy",
    province: "贵州省",
    id: "73e93c66-94ec-4838-9952-1274625a9ee7"
  },
  {
    name: "贵州电子科技职业学院",
    abbreviation: "gzkzy",
    province: "贵州省",
    id: "3bd4cf7b-74c4-45de-9180-a59ad4db1537"
  },
  {
    name: "贵州健康职业学院",
    abbreviation: "gzjkzy",
    province: "贵州省",
    id: "d8e73dfb-b121-4f23-a801-b305038a7454"
  },
  {
    name: "云南大学",
    abbreviation: "ynu",
    province: "云南省",
    id: "a96bdd94-1574-40d9-9f20-b89583002ff4"
  },
  {
    name: "昆明理工大学",
    abbreviation: "kmust",
    province: "云南省",
    id: "32c1613a-ba32-4854-b137-634902463bfd"
  },
  {
    name: "云南农业大学",
    abbreviation: "ynau",
    province: "云南省",
    id: "099f2ac2-b02a-4153-83ef-37b44f0b9b34"
  },
  {
    name: "西南林业大学",
    abbreviation: "swfc",
    province: "云南省",
    id: "28160fc6-e338-400b-b9b0-21b91f0028ac"
  },
  {
    name: "昆明医科大学",
    abbreviation: "kmmc",
    province: "云南省",
    id: "2eb5e2ac-f02b-4328-9125-ceee2c831f21"
  },
  {
    name: "大理大学",
    abbreviation: "dali",
    province: "云南省",
    id: "c864c36b-708b-4327-8d2e-177f1d3b12e1"
  },
  {
    name: "云南中医学院",
    abbreviation: "ynutcm",
    province: "云南省",
    id: "27cb3a29-27c5-4ce3-a750-e834017181fa"
  },
  {
    name: "云南师范大学",
    abbreviation: "ynnu",
    province: "云南省",
    id: "cae3fcb0-9669-4092-86af-2796dc28e8fe"
  },
  {
    name: "昭通学院",
    abbreviation: "zttc",
    province: "云南省",
    id: "58cd8188-eaa8-4efb-9f70-a08cb4e98688"
  },
  {
    name: "曲靖师范学院",
    abbreviation: "qjnu",
    province: "云南省",
    id: "0093328c-4fef-443b-acfb-81c2dd6fb4ff"
  },
  {
    name: "普洱学院",
    abbreviation: "peuni",
    province: "云南省",
    id: "f09f6904-43e4-4563-b258-fbfdbb991a9a"
  },
  {
    name: "保山学院",
    abbreviation: "bsnc",
    province: "云南省",
    id: "ff26eb00-6523-4d8f-b69f-04eeec1afeaa"
  },
  {
    name: "红河学院",
    abbreviation: "uoh",
    province: "云南省",
    id: "42e3e2a7-2708-433a-9bac-0456589a803b"
  },
  {
    name: "云南财经大学",
    abbreviation: "ynufe",
    province: "云南省",
    id: "95b76d4b-4874-4867-884b-79f53fe55a4a"
  },
  {
    name: "云南艺术学院",
    abbreviation: "ynart",
    province: "云南省",
    id: "f290827e-0211-4397-8b15-778e53604e87"
  },
  {
    name: "云南民族大学",
    abbreviation: "ynni",
    province: "云南省",
    id: "e21e6940-ede9-4e71-98bf-53c507aa19ec"
  },
  {
    name: "玉溪师范学院",
    abbreviation: "yxnu",
    province: "云南省",
    id: "1beed6bc-9dce-43c4-a6e3-02ac0313f816"
  },
  {
    name: "楚雄师范学院",
    abbreviation: "cxtc",
    province: "云南省",
    id: "7de0bf26-48a3-48f5-83e8-c7b1e4d2cd79"
  },
  {
    name: "云南警官学院",
    abbreviation: "yn-psnc",
    province: "云南省",
    id: "317320f4-c859-4573-b103-067cd48efa0b"
  },
  {
    name: "昆明学院",
    abbreviation: "kmu",
    province: "云南省",
    id: "aee7429d-0ea9-46cb-acee-6dedbf8d4c25"
  },
  {
    name: "文山学院",
    abbreviation: "wstc",
    province: "云南省",
    id: "77a3010b-af80-43fa-b8c1-656989edfd4b"
  },
  {
    name: "云南经济管理学院",
    abbreviation: "ynjgx",
    province: "云南省",
    id: "6ac45942-e12b-4598-afc8-aebd8bc1512e"
  },
  {
    name: "云南大学滇池学院",
    abbreviation: "ynu",
    province: "云南省",
    id: "7d81f140-2229-46ba-9dd9-a9e072fe14be"
  },
  {
    name: "云南大学旅游文化学院",
    abbreviation: "lywhxy",
    province: "云南省",
    id: "d7e4b472-9359-4ed0-a08f-ddb39fae863a"
  },
  {
    name: "昆明理工大学津桥学院",
    abbreviation: "oxbridge",
    province: "云南省",
    id: "33124141-527a-46c5-910e-225fc5c68e22"
  },
  {
    name: "云南师范大学商学院",
    abbreviation: "ynnubs",
    province: "云南省",
    id: "97cad565-09da-4883-888a-3a69dd043a3b"
  },
  {
    name: "云南师范大学文理学院",
    abbreviation: "ysdwl",
    province: "云南省",
    id: "dd3fbb63-bc2c-4caf-a472-835e011cb086"
  },
  {
    name: "昆明医学院海源学院",
    abbreviation: "kyhyxy",
    province: "云南省",
    id: "54ca39f9-f441-402b-949e-b5fb3f317d1a"
  },
  {
    name: "云南艺术学院文华学院",
    abbreviation: "ynart",
    province: "云南省",
    id: "997cb58b-8daa-4d50-a5eb-d3bdcf71ff1a"
  },
  {
    name: "云南工商学院",
    abbreviation: "yngsxy",
    province: "云南省",
    id: "77b76dee-bac3-4d06-8480-4d42c77ecefa"
  },
  {
    name: "滇西科技师范学院",
    abbreviation: "dxstnu",
    province: "云南省",
    id: "46a89627-27c0-4b9c-83cd-b6d6614da459"
  },
  {
    name: "昆明冶金高等专科学校",
    abbreviation: "kmyz",
    province: "云南省",
    id: "efde0f27-52a2-4a5d-b568-c7c8c30cc02c"
  },
  {
    name: "云南国土资源职业学院",
    abbreviation: "yngtxy",
    province: "云南省",
    id: "4e96c703-e233-437f-9aa9-346d09ec9ce6"
  },
  {
    name: "云南交通职业技术学院",
    abbreviation: "yncs",
    province: "云南省",
    id: "6876dd2f-b1f7-42de-ae7e-06f62e0c227b"
  },
  {
    name: "昆明工业职业技术学院",
    abbreviation: "kmvtc",
    province: "云南省",
    id: "9adde920-9c4a-47aa-a2e9-45d9f1044c62"
  },
  {
    name: "云南农业职业技术学院",
    abbreviation: "ynavc",
    province: "云南省",
    id: "1afac860-f604-4431-903c-991a557fd738"
  },
  {
    name: "云南司法警官职业学院",
    abbreviation: "yncpu",
    province: "云南省",
    id: "f478a3c7-6b85-4932-8d6c-4c2009051b1d"
  },
  {
    name: "云南文化艺术职业学院",
    abbreviation: "ynarts",
    province: "云南省",
    id: "8a9f67bb-f8b4-44f3-8992-39bc7d26a234"
  },
  {
    name: "云南体育运动职业技术学院",
    abbreviation: "ynasc",
    province: "云南省",
    id: "0dcd55af-7fe0-4c57-88a5-13577849e411"
  },
  {
    name: "云南科技信息职业学院",
    abbreviation: "ynkexin",
    province: "云南省",
    id: "bfe984b8-f3c3-4235-b424-93057d991c2c"
  },
  {
    name: "西双版纳职业技术学院",
    abbreviation: "xsbnzy",
    province: "云南省",
    id: "bb6c49e8-7176-43fc-862a-7f47e6526336"
  },
  {
    name: "昆明艺术职业学院",
    abbreviation: "kmac",
    province: "云南省",
    id: "c581e3c1-e8a3-4260-b9d1-4e48dfd87be9"
  },
  {
    name: "玉溪农业职业技术学院",
    abbreviation: "yxnzy",
    province: "云南省",
    id: "6d783152-286f-4feb-bad6-bcf391195856"
  },
  {
    name: "云南能源职业技术学院",
    abbreviation: "ynny",
    province: "云南省",
    id: "b395c76e-b9d5-4caf-9e46-6f43d302e6f5"
  },
  {
    name: "云南国防工业职业技术学院",
    abbreviation: "ynvtc",
    province: "云南省",
    id: "5ad95862-ccf6-4ea8-a04a-51585a65fa8d"
  },
  {
    name: "云南机电职业技术学院",
    abbreviation: "ynmec",
    province: "云南省",
    id: "05b627ab-f821-4f4c-b91b-422dfc2204b1"
  },
  {
    name: "云南林业职业技术学院",
    abbreviation: "ynftc",
    province: "云南省",
    id: "33f2ce81-f964-4de9-9475-03c118f79ed1"
  },
  {
    name: "云南城市建设职业学院",
    abbreviation: "yncjxy",
    province: "云南省",
    id: "05984222-47e7-4f67-9f6e-e310b2b8484f"
  },
  {
    name: "云南工程职业学院",
    abbreviation: "sailingedu",
    province: "云南省",
    id: "d8137bc4-688c-411f-8d1c-56a0a44842d8"
  },
  {
    name: "曲靖医学高等专科学校",
    abbreviation: "qjyz",
    province: "云南省",
    id: "51cf4eaa-bf1f-40c1-9d18-cc7bc9a95069"
  },
  {
    name: "楚雄医药高等专科学校",
    abbreviation: "cxmtc",
    province: "云南省",
    id: "e9a6d3db-4c54-4d74-9eae-246db91f55b6"
  },
  {
    name: "保山中医药高等专科学校",
    abbreviation: "bszyz",
    province: "云南省",
    id: "3e80f4bb-9186-4961-af2a-0d54b8a66135"
  },
  {
    name: "丽江师范高等专科学校",
    abbreviation: "lj-edu",
    province: "云南省",
    id: "421b32d2-878a-4ed0-a7a6-33d8b664b9a0"
  },
  {
    name: "德宏师范高等专科学校",
    abbreviation: "yndhec",
    province: "云南省",
    id: "1ea14aa8-d194-4e8f-97ac-e68f96a0c91e"
  },
  {
    name: "云南新兴职业学院",
    abbreviation: "ynxzy",
    province: "云南省",
    id: "7bef63fd-dcdf-41ef-ab2f-b80353fc2f6d"
  },
  {
    name: "云南锡业职业技术学院",
    abbreviation: "ytvtc",
    province: "云南省",
    id: "75db1c77-10c5-4eb6-abe6-c9ff5a53954c"
  },
  {
    name: "云南经贸外事职业学院",
    abbreviation: "ynjw",
    province: "云南省",
    id: "868ceb91-3dfd-4c7f-b804-053f682dca45"
  },
  {
    name: "云南三鑫职业技术学院",
    abbreviation: "ynsxzy",
    province: "云南省",
    id: "320b3eee-528f-4ad8-a385-e645ec3050b1"
  },
  {
    name: "德宏职业学院",
    abbreviation: "yndhvc",
    province: "云南省",
    id: "bd5003ff-57e0-4ec4-9eaa-6c81f2eccf68"
  },
  {
    name: "云南商务职业学院",
    abbreviation: "ynswzyxy",
    province: "云南省",
    id: "821029ee-254f-41df-804c-354be64caf5e"
  },
  {
    name: "昆明卫生职业学院",
    abbreviation: "kmhpc",
    province: "云南省",
    id: "25605763-d27c-41b3-80dc-71e707a33081"
  },
  {
    name: "云南现代职业技术学院",
    abbreviation: "ynxd",
    province: "云南省",
    id: "d5d03dd0-339c-46b0-8cae-eecb54d381bf"
  },
  {
    name: "云南旅游职业学院",
    abbreviation: "ynctv",
    province: "云南省",
    id: "17a2edca-44a9-4415-8c64-04f00e398d93"
  },
  {
    name: "红河卫生职业学院",
    abbreviation: "hhwx",
    province: "云南省",
    id: "8053a93e-8a42-4e13-84a2-0462d05f8d6c"
  },
  {
    name: "云南外事外语职业学院",
    abbreviation: "fafl",
    province: "云南省",
    id: "675b8d4c-5f32-46fd-9049-7b7bec98e575"
  },
  {
    name: "大理农林职业技术学院",
    abbreviation: "dlcaf",
    province: "云南省",
    id: "5ffc7fe5-158d-4238-8d7a-c177c3a29d77"
  },
  {
    name: "云南财经职业学院",
    abbreviation: "ynczy",
    province: "云南省",
    id: "61d54a4c-9216-4f2e-8006-68413d619395"
  },
  {
    name: "云南轻纺职业学院",
    abbreviation: "ynqgx",
    province: "云南省",
    id: "cbd40627-edb1-4ac1-bab6-5be925356d8a"
  },
  {
    name: "云南交通运输职业学院",
    abbreviation: "ynvct",
    province: "云南省",
    id: "4dfc75ef-f738-482b-8caf-9f5b77db5618"
  },
  {
    name: "西藏大学",
    abbreviation: "utibet",
    province: "西藏自治区",
    id: "67759c2d-7f34-4ef5-89bc-6492186e55f0"
  },
  {
    name: "西藏民族大学",
    abbreviation: "xzmy",
    province: "西藏自治区",
    id: "b47a0d94-604b-4e12-9719-4af47297824f"
  },
  {
    name: "西藏藏医学院",
    abbreviation: "ttmc",
    province: "西藏自治区",
    id: "2b4a8d60-0f8a-402b-b513-8ce681f6f4ec"
  },
  {
    name: "西藏农牧学院",
    abbreviation: "xza",
    province: "西藏自治区",
    id: "d0d9e0b7-add2-4a46-9571-d24fd6346e39"
  },
  {
    name: "西藏警官高等专科学校",
    abbreviation: "tpa",
    province: "西藏自治区",
    id: "fa22cff9-93cc-4574-909a-aa05702e5617"
  },
  {
    name: "拉萨师范高等专科学校",
    abbreviation: "xzlssf",
    province: "西藏自治区",
    id: "6f9dddb0-4379-4f4c-b497-bcf794928d6e"
  },
  {
    name: "西藏职业技术学院",
    abbreviation: "xzgzy",
    province: "西藏自治区",
    id: "fe705c07-f555-4b5d-b3b9-9b5c463dce39"
  },
  {
    name: "西北大学",
    abbreviation: "nwu",
    province: "陕西省",
    id: "ac5d2a35-41b7-42f8-998a-07bb10328fb8"
  },
  {
    name: "西安交通大学",
    abbreviation: "xjtu",
    province: "陕西省",
    id: "4d4195bf-740e-4580-b19a-d7ea9173a2ed"
  },
  {
    name: "西北工业大学",
    abbreviation: "nwpu",
    province: "陕西省",
    id: "07118be7-9b14-4aca-bbd6-4be3f945b8cd"
  },
  {
    name: "西安理工大学",
    abbreviation: "xaut",
    province: "陕西省",
    id: "872b469b-2d44-49ff-9e92-bdb8e2553af3"
  },
  {
    name: "西安电子科技大学",
    abbreviation: "xidian",
    province: "陕西省",
    id: "c8da2450-36d4-4516-809e-c6d1f9d69e85"
  },
  {
    name: "西安工业大学",
    abbreviation: "xatu",
    province: "陕西省",
    id: "6deece8b-55f9-4635-b8ac-d2325e05f528"
  },
  {
    name: "西安建筑科技大学",
    abbreviation: "xauat",
    province: "陕西省",
    id: "7061ad01-29fa-4a18-87f4-713dd56c8109"
  },
  {
    name: "西安科技大学",
    abbreviation: "xust",
    province: "陕西省",
    id: "6dd464a3-2ff9-4ed5-99cb-e1015f0e7c90"
  },
  {
    name: "西安石油大学",
    abbreviation: "xapi",
    province: "陕西省",
    id: "79b42b29-741c-4197-a9ed-b9deb7e045f8"
  },
  {
    name: "陕西科技大学",
    abbreviation: "sust",
    province: "陕西省",
    id: "cf4d3b0d-fd1c-4c91-a277-aab7cba38c2b"
  },
  {
    name: "西安工程大学",
    abbreviation: "xpu",
    province: "陕西省",
    id: "1c9cbb34-f5bc-487a-874a-92959d5800a7"
  },
  {
    name: "长安大学",
    abbreviation: "chd",
    province: "陕西省",
    id: "eeb67b12-67bf-427d-a4f3-cf9ed5222b6b"
  },
  {
    name: "西北农林科技大学",
    abbreviation: "nwsuaf",
    province: "陕西省",
    id: "a8cebe6a-b5ef-4e29-a290-4b5824416a2b"
  },
  {
    name: "陕西中医药大学",
    abbreviation: "sntcm",
    province: "陕西省",
    id: "3f4b45c9-23c5-4fc9-8bd5-5ab41fd8bace"
  },
  {
    name: "陕西师范大学",
    abbreviation: "snnu",
    province: "陕西省",
    id: "25fe92ad-5bd1-492a-937e-e97a975cdf38"
  },
  {
    name: "延安大学",
    abbreviation: "yau",
    province: "陕西省",
    id: "f2f15079-107d-4fe3-9e9a-86e1a3576a34"
  },
  {
    name: "陕西理工大学",
    abbreviation: "snut",
    province: "陕西省",
    id: "c7ef1b65-5105-40d8-ae0e-b9fbc4cd6c24"
  },
  {
    name: "宝鸡文理学院",
    abbreviation: "bjwlxy",
    province: "陕西省",
    id: "4590a9c3-41de-4b87-8c5a-bc845fdf3425"
  },
  {
    name: "咸阳师范学院",
    abbreviation: "xysfxy",
    province: "陕西省",
    id: "2074bacd-986d-469e-8cfd-ab71abd39d9d"
  },
  {
    name: "渭南师范学院",
    abbreviation: "wntc",
    province: "陕西省",
    id: "687698a5-071f-4eff-a43f-e0ad4b5cd25e"
  },
  {
    name: "西安外国语大学",
    abbreviation: "xisu",
    province: "陕西省",
    id: "37114463-323c-4161-a59b-8b1f2c24c97e"
  },
  {
    name: "西北政法大学",
    abbreviation: "nwupl",
    province: "陕西省",
    id: "cc03810a-07e2-4f9b-9430-a1f61f6bd431"
  },
  {
    name: "西安体育学院",
    abbreviation: "xaipe",
    province: "陕西省",
    id: "9df48c36-4506-482d-9508-60166b9c2027"
  },
  {
    name: "西安音乐学院",
    abbreviation: "xacom",
    province: "陕西省",
    id: "8162e895-70f0-4a17-8723-a5e2224b381f"
  },
  {
    name: "西安美术学院",
    abbreviation: "xafa",
    province: "陕西省",
    id: "296edfe5-b4c6-4c15-8bd3-270592fec576"
  },
  {
    name: "西安文理学院",
    abbreviation: "xawl",
    province: "陕西省",
    id: "1a1d3f23-dd03-4ead-a745-c3275d4d05e2"
  },
  {
    name: "榆林学院",
    abbreviation: "yulinu",
    province: "陕西省",
    id: "0230ed55-5013-434b-8961-2272c717b468"
  },
  {
    name: "商洛学院",
    abbreviation: "slxy",
    province: "陕西省",
    id: "c18c2e89-0275-45fc-93ca-c492f488855c"
  },
  {
    name: "安康学院",
    abbreviation: "aku",
    province: "陕西省",
    id: "2b4a6b89-90c1-428f-9bd7-236702098302"
  },
  {
    name: "西安培华学院",
    abbreviation: "peihua",
    province: "陕西省",
    id: "256c1c12-f2d2-4ce6-be57-d954dd5b927c"
  },
  {
    name: "西安财经学院",
    abbreviation: "xaufe",
    province: "陕西省",
    id: "c8a141d2-87c6-4d53-9f5b-01b9dcb5baa0"
  },
  {
    name: "西安邮电大学",
    abbreviation: "xiyou",
    province: "陕西省",
    id: "cc513cb8-06ff-4904-b9f5-7f7758b0521f"
  },
  {
    name: "西安航空学院",
    abbreviation: "xaau",
    province: "陕西省",
    id: "dbd4b813-ca53-4a3f-baad-f32e96e7b038"
  },
  {
    name: "西安医学院",
    abbreviation: "xiyi",
    province: "陕西省",
    id: "9a6b0471-b7e4-4f64-a62e-9624c8f63e1d"
  },
  {
    name: "西安欧亚学院",
    abbreviation: "eurasia",
    province: "陕西省",
    id: "35ec946a-aab0-42a1-8f80-2d01ae1deac5"
  },
  {
    name: "西安外事学院",
    abbreviation: "xaiu",
    province: "陕西省",
    id: "ceef490d-f895-4305-ad49-1a61ce5d4122"
  },
  {
    name: "西安翻译学院",
    abbreviation: "xafy",
    province: "陕西省",
    id: "8ebfc60a-fb6c-4e4a-ba89-0d606cae6562"
  },
  {
    name: "西京学院",
    abbreviation: "xijing",
    province: "陕西省",
    id: "78c1626e-a1c9-4c6c-abe7-47bfe814a0f8"
  },
  {
    name: "西安思源学院",
    abbreviation: "xasyu",
    province: "陕西省",
    id: "cb62b457-f1aa-4ef1-9d92-2d3e9ec56f4c"
  },
  {
    name: "陕西国际商贸学院",
    abbreviation: "csiic",
    province: "陕西省",
    id: "5f14f78f-1f6d-411a-9dd6-078c448ae90f"
  },
  {
    name: "陕西服装工程学院",
    abbreviation: "sxfu",
    province: "陕西省",
    id: "4f4068ea-3673-4960-b064-b8765d737035"
  },
  {
    name: "西安交通工程学院",
    abbreviation: "xjgyedu",
    province: "陕西省",
    id: "9f8a3b3e-0bed-4c3b-b1dc-699335fbb324"
  },
  {
    name: "西安交通大学城市学院",
    abbreviation: "xjtucc",
    province: "陕西省",
    id: "231dcfd5-7626-4953-98c5-8f3b00189e57"
  },
  {
    name: "西北大学现代学院",
    abbreviation: "xdxd",
    province: "陕西省",
    id: "0b168da9-3703-4dcf-b361-054ccd6d7ef3"
  },
  {
    name: "西安建筑科技大学华清学院",
    abbreviation: "xauat-hqc",
    province: "陕西省",
    id: "879d2f80-40da-4864-9a2d-9c995a6bd31d"
  },
  {
    name: "西安财经学院行知学院",
    abbreviation: "xcxz",
    province: "陕西省",
    id: "2fdf3868-fa8d-45fc-b5a7-c587fdd73fe2"
  },
  {
    name: "陕西科技大学镐京学院",
    abbreviation: "kdhj-edu",
    province: "陕西省",
    id: "da2bf7a7-ddb9-4cb3-908b-2d5057b782e1"
  },
  {
    name: "西安工业大学北方信息工程学院",
    abbreviation: "bxait",
    province: "陕西省",
    id: "33f43672-5f0e-49d1-ae33-3f6727d85836"
  },
  {
    name: "延安大学西安创新学院",
    abbreviation: "xacxxy",
    province: "陕西省",
    id: "b92735b0-17fd-48a2-9e7d-ee574505716a"
  },
  {
    name: "西安电子科技大学长安学院",
    abbreviation: "xdca",
    province: "陕西省",
    id: "1e35c3da-87aa-47cb-86d2-ee6046deadad"
  },
  {
    name: "西北工业大学明德学院",
    abbreviation: "npumd",
    province: "陕西省",
    id: "1eb2311e-44a0-4d55-86bd-71fc3aae19f1"
  },
  {
    name: "长安大学兴华学院",
    abbreviation: "chdxhxy",
    province: "陕西省",
    id: "6caa0912-36ad-48d8-81a7-e94526b40a67"
  },
  {
    name: "西安理工大学高科学院",
    abbreviation: "xthtc",
    province: "陕西省",
    id: "ce12cc53-d800-4103-8f47-c5ec5788b28b"
  },
  {
    name: "西安科技大学高新学院",
    abbreviation: "gaoxinedu",
    province: "陕西省",
    id: "9b832880-af97-459e-80b4-2924a0f1725f"
  },
  {
    name: "陕西学前师范学院",
    abbreviation: "snie",
    province: "陕西省",
    id: "4fb5d845-fe27-4466-b580-8c40c498cb3a"
  },
  {
    name: "陕西工业职业技术学院",
    abbreviation: "sxpi",
    province: "陕西省",
    id: "42f91602-34be-49fd-a1a7-f4502a2c16ed"
  },
  {
    name: "杨凌职业技术学院",
    abbreviation: "ylvtc",
    province: "陕西省",
    id: "9a99f83b-1603-44ca-95f1-332bc79fbedf"
  },
  {
    name: "西安电力高等专科学校",
    abbreviation: "xaepi",
    province: "陕西省",
    id: "e435a4f3-64e8-4068-9b69-83aa2f648c52"
  },
  {
    name: "陕西能源职业技术学院",
    abbreviation: "sxny",
    province: "陕西省",
    id: "df27f467-14bc-41e7-b0a4-a82fbbb325df"
  },
  {
    name: "陕西国防工业职业技术学院",
    abbreviation: "gfxy",
    province: "陕西省",
    id: "f89827ad-8d01-464c-aea4-18f6fd67d8ca"
  },
  {
    name: "西安航空职业技术学院",
    abbreviation: "xihang",
    province: "陕西省",
    id: "38a2f271-f010-4c01-827c-da3df985d688"
  },
  {
    name: "陕西财经职业技术学院",
    abbreviation: "sxptife",
    province: "陕西省",
    id: "fd84b3ad-78d6-40b1-b4fa-2ae39dc01f15"
  },
  {
    name: "陕西交通职业技术学院",
    abbreviation: "scct",
    province: "陕西省",
    id: "bb314665-81a5-421e-8eee-a0fec55fa355"
  },
  {
    name: "陕西职业技术学院",
    abbreviation: "spvec",
    province: "陕西省",
    id: "7e10dbc8-da34-4b07-8e8a-0728e8855dc4"
  },
  {
    name: "西安高新科技职业学院",
    abbreviation: "xhtu",
    province: "陕西省",
    id: "8c1b5abc-94be-4af4-bc13-d2bbaf18fe33"
  },
  {
    name: "西安城市建设职业学院",
    abbreviation: "xacsjsedu",
    province: "陕西省",
    id: "bcf93b5c-660e-4d6c-96e6-aa87bd973ca4"
  },
  {
    name: "陕西铁路工程职业技术学院",
    abbreviation: "sxri",
    province: "陕西省",
    id: "2cf737e3-d68c-44ab-95f2-d0f12f502b2f"
  },
  {
    name: "宝鸡职业技术学院",
    abbreviation: "bjvtc",
    province: "陕西省",
    id: "49c13ec6-d57a-464d-aabf-30c342bea337"
  },
  {
    name: "陕西航空职业技术学院",
    abbreviation: "sxhkxy",
    province: "陕西省",
    id: "36537d91-dc53-4db1-8444-c7b34a5784cb"
  },
  {
    name: "陕西电子信息职业技术学院",
    abbreviation: "sxitu",
    province: "陕西省",
    id: "ea90a36d-b5b3-45c2-8c22-fbb59ce7cf84"
  },
  {
    name: "陕西邮电职业技术学院",
    abbreviation: "sptc",
    province: "陕西省",
    id: "2dc2eba0-27da-444d-bdaf-3cccd3726e96"
  },
  {
    name: "西安海棠职业学院",
    abbreviation: "xahtxy",
    province: "陕西省",
    id: "565ccf14-9fad-4348-ae12-52bcfa086586"
  },
  {
    name: "西安汽车科技职业学院",
    abbreviation: "atc168",
    province: "陕西省",
    id: "82f158c3-af5e-47f7-958a-23f6d98e6365"
  },
  {
    name: "西安东方亚太职业技术学院",
    abbreviation: "yt-edu",
    province: "陕西省",
    id: "c1b6b9c8-72b1-4b7e-8788-4d7413088e5e"
  },
  {
    name: "陕西警官职业学院",
    abbreviation: "sxjgxy",
    province: "陕西省",
    id: "51cec694-6499-40fc-a9f3-2bc68f8002dc"
  },
  {
    name: "陕西经济管理职业技术学院",
    abbreviation: "sxjgy",
    province: "陕西省",
    id: "2194e48e-4dcf-4e81-afc6-9bdeb8cb91f8"
  },
  {
    name: "西安铁路职业技术学院",
    abbreviation: "xatzy",
    province: "陕西省",
    id: "f53d8b1f-674b-40f7-b106-73fc0a71effe"
  },
  {
    name: "咸阳职业技术学院",
    abbreviation: "xianyangzh",
    province: "陕西省",
    id: "73259487-9130-4124-94b0-dbe2a214d64e"
  },
  {
    name: "西安职业技术学院",
    abbreviation: "xzyedu",
    province: "陕西省",
    id: "f4a20b5a-3283-47a9-a582-f9f7e0581cfe"
  },
  {
    name: "商洛职业技术学院",
    abbreviation: "slzyjsxy",
    province: "陕西省",
    id: "a8521a56-d719-41f0-a8bb-a0cea9e2b67e"
  },
  {
    name: "汉中职业技术学院",
    abbreviation: "hzvtc",
    province: "陕西省",
    id: "578cba9a-9827-4697-9d23-053d9c3f145e"
  },
  {
    name: "延安职业技术学院",
    abbreviation: "yapt",
    province: "陕西省",
    id: "3c5838d4-d3c1-43bf-b2df-b75e868907aa"
  },
  {
    name: "渭南职业技术学院",
    abbreviation: "wnzy",
    province: "陕西省",
    id: "4045572e-4ed4-41a2-8003-3ef816fed9e6"
  },
  {
    name: "安康职业技术学院",
    abbreviation: "ak321",
    province: "陕西省",
    id: "1593c1f2-3086-41ea-b2c9-21b50d29406a"
  },
  {
    name: "铜川职业技术学院",
    abbreviation: "tczyxy",
    province: "陕西省",
    id: "1b38ec2e-d0a7-44e3-b567-16fa91f71f26"
  },
  {
    name: "陕西青年职业学院",
    abbreviation: "sxqzy",
    province: "陕西省",
    id: "2db9185d-1a05-4099-a796-b1f7596dbae3"
  },
  {
    name: "陕西工商职业学院",
    abbreviation: "snbcedu",
    province: "陕西省",
    id: "fa6daa8f-42e6-4cdb-86de-099a6ef44b4e"
  },
  {
    name: "陕西电子科技职业学院",
    abbreviation: "sxetcedu",
    province: "陕西省",
    id: "87335385-5ba8-44bf-bae3-31a9c94ef119"
  },
  {
    name: "陕西旅游烹饪职业学院",
    abbreviation: "sntcc",
    province: "陕西省",
    id: "bdeacd59-d697-4e42-a2f3-5813a0d31529"
  },
  {
    name: "西安医学高等专科学校",
    abbreviation: "xagdyz",
    province: "陕西省",
    id: "5b208169-808a-4e3e-89b5-7caca5f9e112"
  },
  {
    name: "榆林职业技术学院",
    abbreviation: "yulinvtc",
    province: "陕西省",
    id: "79023b34-4c95-406b-b9c9-d739fc733d35"
  },
  {
    name: "陕西艺术职业学院",
    abbreviation: "sxavc",
    province: "陕西省",
    id: "b340de3f-7e83-4ffd-afba-a9fb12a841f9"
  },
  {
    name: "陕西机电职业技术学院",
    abbreviation: "sxjdzy",
    province: "陕西省",
    id: "9952500d-7b44-4b34-b44e-d2f7cce56292"
  },
  {
    name: "兰州大学",
    abbreviation: "lzu",
    province: "甘肃省",
    id: "6fa21175-1887-46a7-9b0d-13a4bfee5452"
  },
  {
    name: "兰州理工大学",
    abbreviation: "lut",
    province: "甘肃省",
    id: "44dafdbb-6349-4d39-927c-d1b5b431d93f"
  },
  {
    name: "兰州交通大学",
    abbreviation: "lzjtu",
    province: "甘肃省",
    id: "237f6355-c65e-4140-8c86-2239c00432ef"
  },
  {
    name: "甘肃农业大学",
    abbreviation: "gsau",
    province: "甘肃省",
    id: "d3d01986-7aec-43eb-974d-22df96a26641"
  },
  {
    name: "甘肃中医药大学",
    abbreviation: "gszy",
    province: "甘肃省",
    id: "5c38755a-7c82-4e6d-b247-2196ec0685cd"
  },
  {
    name: "西北师范大学",
    abbreviation: "nwnu",
    province: "甘肃省",
    id: "59c36e69-ddc3-4dd8-8faa-545209a88798"
  },
  {
    name: "兰州城市学院",
    abbreviation: "lztc",
    province: "甘肃省",
    id: "10349d66-94bf-4e89-97d2-49dda18264c7"
  },
  {
    name: "陇东学院",
    abbreviation: "ldxy",
    province: "甘肃省",
    id: "49dfc6d5-037b-4098-807e-21c80a17d915"
  },
  {
    name: "天水师范学院",
    abbreviation: "tsnc",
    province: "甘肃省",
    id: "93c2e4de-2a00-49da-9088-ce356fcf2948"
  },
  {
    name: "河西学院",
    abbreviation: "hxu",
    province: "甘肃省",
    id: "e7544e4f-f92e-4bba-9da0-3ca2f50830f1"
  },
  {
    name: "兰州财经大学",
    abbreviation: "lzcc",
    province: "甘肃省",
    id: "be3c2e5c-e05e-4e20-b421-02a10ae94530"
  },
  {
    name: "西北民族大学",
    abbreviation: "xbmu",
    province: "甘肃省",
    id: "e096ff4d-9d78-41c1-97b8-9d0b31c77e2d"
  },
  {
    name: "甘肃政法学院",
    abbreviation: "gsli",
    province: "甘肃省",
    id: "26eee7c8-7be8-44f3-b844-052acb68249e"
  },
  {
    name: "甘肃民族师范学院",
    abbreviation: "gnun",
    province: "甘肃省",
    id: "dd7775cd-715d-4aef-828d-b0ffbb56ea3a"
  },
  {
    name: "兰州文理学院",
    abbreviation: "luas",
    province: "甘肃省",
    id: "ef217892-efd5-452e-b183-e4e62951d756"
  },
  {
    name: "甘肃医学院",
    abbreviation: "plmc",
    province: "甘肃省",
    id: "e2268d4a-798e-4aa3-a725-d3cee5342db1"
  },
  {
    name: "兰州工业学院",
    abbreviation: "lzptc",
    province: "甘肃省",
    id: "216dd62c-87e5-428d-8d44-65f71d2ee8cb"
  },
  {
    name: "西北师范大学知行学院",
    abbreviation: "nwnu",
    province: "甘肃省",
    id: "d74b2907-1b03-4bdd-b7cd-202ebe43949a"
  },
  {
    name: "兰州财经大学陇桥学院",
    abbreviation: "lzlqc",
    province: "甘肃省",
    id: "e130e8d2-8eef-4d67-b006-5a982805c2df"
  },
  {
    name: "兰州财经大学长青学院",
    abbreviation: "lzcc",
    province: "甘肃省",
    id: "2c0d9e13-2fa0-4b25-8b93-67f146b7ce2e"
  },
  {
    name: "兰州交通大学博文学院",
    abbreviation: "bowenedu",
    province: "甘肃省",
    id: "a9fd08bf-0329-43ff-98e5-609edad0b6ad"
  },
  {
    name: "兰州理工大学技术工程学院",
    abbreviation: "lutcte",
    province: "甘肃省",
    id: "66d527da-f1a9-4b9b-baab-3058ae0298c7"
  },
  {
    name: "兰州石化职业技术学院",
    abbreviation: "lzpcc",
    province: "甘肃省",
    id: "755f2a5d-7f00-4aca-b688-9726e8920561"
  },
  {
    name: "陇南师范高等专科学校",
    abbreviation: "lntc",
    province: "甘肃省",
    id: "d367705a-5386-41ed-b624-b4764e639b5b"
  },
  {
    name: "定西师范高等专科学校",
    abbreviation: "dxatc",
    province: "甘肃省",
    id: "64189b8c-8366-4332-a24a-02ed904f1b41"
  },
  {
    name: "甘肃建筑职业技术学院",
    abbreviation: "gcvtc",
    province: "甘肃省",
    id: "daf4e5f1-bcb3-4e4e-8515-6b6a54eaa024"
  },
  {
    name: "酒泉职业技术学院",
    abbreviation: "jqzy",
    province: "甘肃省",
    id: "84b96a25-44e9-43ce-8f8b-dcaa4cf96d16"
  },
  {
    name: "兰州外语职业学院",
    abbreviation: "lzwyedu",
    province: "甘肃省",
    id: "6e59948f-44f5-491e-a4b0-36cda4f7cd74"
  },
  {
    name: "兰州职业技术学院",
    abbreviation: "lvu",
    province: "甘肃省",
    id: "13848c3d-cba6-40f4-93e7-09837ac22940"
  },
  {
    name: "甘肃警察职业学院",
    abbreviation: "gs-police",
    province: "甘肃省",
    id: "dd4d771e-7893-488c-8df6-4cbdbbc114cd"
  },
  {
    name: "甘肃林业职业技术学院",
    abbreviation: "gsfc",
    province: "甘肃省",
    id: "39ae75f3-d999-4993-9ae3-3c9b2dfd39f8"
  },
  {
    name: "甘肃工业职业技术学院",
    abbreviation: "gipc",
    province: "甘肃省",
    id: "d5af210e-50c7-49df-a9fb-fe4a7371f079"
  },
  {
    name: "武威职业学院",
    abbreviation: "wwoc",
    province: "甘肃省",
    id: "091efe8a-6b66-432d-9cc8-457f2ba5c4b3"
  },
  {
    name: "甘肃交通职业技术学院",
    abbreviation: "gsjtxy",
    province: "甘肃省",
    id: "5e136468-83ad-4394-8fd6-e2c49ca45a5c"
  },
  {
    name: "兰州资源环境职业技术学院",
    abbreviation: "lzre",
    province: "甘肃省",
    id: "6cd93208-7563-444b-801c-daad040c065b"
  },
  {
    name: "甘肃农业职业技术学院",
    abbreviation: "gscat",
    province: "甘肃省",
    id: "da3ef01f-1d0f-4679-b63f-dec9c6c50ab6"
  },
  {
    name: "甘肃畜牧工程职业技术学院",
    abbreviation: "xmgcxy",
    province: "甘肃省",
    id: "9fc9cef4-bbdd-48c9-8113-9be7667a808c"
  },
  {
    name: "甘肃钢铁职业技术学院",
    abbreviation: "ggzy",
    province: "甘肃省",
    id: "aa598b35-3f61-4d4a-9ee9-5a0ed0bb533e"
  },
  {
    name: "甘肃机电职业技术学院",
    abbreviation: "gsjdxy",
    province: "甘肃省",
    id: "07604781-1450-4ba8-95e6-f547b1f274d3"
  },
  {
    name: "甘肃有色冶金职业技术学院",
    abbreviation: "gsysyj",
    province: "甘肃省",
    id: "97f78930-0582-49d2-96d9-8af0ca666f68"
  },
  {
    name: "白银矿冶职业技术学院",
    abbreviation: "bymu",
    province: "甘肃省",
    id: "d2671f6b-7467-495f-a07a-1c4fb0249a89"
  },
  {
    name: "甘肃卫生职业学院",
    abbreviation: "gswx",
    province: "甘肃省",
    id: "5f8c2e64-fa15-488b-837d-c8a267467cc4"
  },
  {
    name: "兰州科技职业学院",
    abbreviation: "lzust",
    province: "甘肃省",
    id: "a12ee3f2-ab84-4a23-8560-fbea90997366"
  },
  {
    name: "庆阳职业技术学院",
    abbreviation: "autocat",
    province: "甘肃省",
    id: "2c1a2947-dadb-404b-bee0-c1dc6d3de4ee"
  },
  {
    name: "平凉职业技术学院",
    abbreviation: "plvtc",
    province: "甘肃省",
    id: "6aafd587-0f96-4b7d-8fb5-8a1656cf5809"
  },
  {
    name: "甘肃能源化工职业学院",
    abbreviation: "gsnyedu",
    province: "甘肃省",
    id: "8df3db0e-301e-486f-8557-48e0b6339b70"
  },
  {
    name: "青海大学",
    abbreviation: "qhu",
    province: "青海省",
    id: "92d351cd-cc93-4f17-955e-ba321d2877c9"
  },
  {
    name: "青海师范大学",
    abbreviation: "qhnu",
    province: "青海省",
    id: "d29031f5-37fd-4a1b-8cd4-920de33b91f7"
  },
  {
    name: "青海民族大学",
    abbreviation: "qhmu",
    province: "青海省",
    id: "48d6a793-ad0e-40ab-8b5d-3cd6a9d5a639"
  },
  {
    name: "青海大学昆仑学院",
    abbreviation: "qhu",
    province: "青海省",
    id: "2b7c5be6-305e-4df8-9677-5d24ba0e70f3"
  },
  {
    name: "青海卫生职业技术学院",
    abbreviation: "qhwszy",
    province: "青海省",
    id: "f7b22123-140f-4412-93d7-9297c9bbe87d"
  },
  {
    name: "青海警官职业学院",
    abbreviation: "qhjyedu",
    province: "青海省",
    id: "859bde4d-7b08-4611-8a7e-ab0f6d32ff0c"
  },
  {
    name: "青海畜牧兽医职业技术学院",
    abbreviation: "qhxmzy",
    province: "青海省",
    id: "4cd6ce11-20c4-4c42-a238-35ac2c15b417"
  },
  {
    name: "青海交通职业技术学院",
    abbreviation: "qhctc",
    province: "青海省",
    id: "e8b96fe6-5620-4d32-b7e2-f97076e38bb6"
  },
  {
    name: "青海建筑职业技术学院",
    abbreviation: "qhavtc",
    province: "青海省",
    id: "c2e4caf3-2151-4b26-9984-d48f5867d684"
  },
  {
    name: "西宁城市职业技术学院",
    abbreviation: "xncszy",
    province: "青海省",
    id: "9ed694f1-8645-4dbd-95ff-eb245be29f49"
  },
  {
    name: "青海高等职业技术学院",
    abbreviation: "qhgdzyjsxy",
    province: "青海省",
    id: "85cbdfa8-6225-4a75-947e-dc38ba6a9c35"
  },
  {
    name: "青海柴达木职业技术学院",
    abbreviation: "133",
    province: "青海省",
    id: "df85e820-4ad4-4dc5-b4a7-89f7ed828095"
  },
  {
    name: "宁夏大学",
    abbreviation: "nxu",
    province: "宁夏回族自治区",
    id: "4efe430b-e51d-4215-bff8-eafd415ee53e"
  },
  {
    name: "宁夏医科大学",
    abbreviation: "nxmu",
    province: "宁夏回族自治区",
    id: "4b3aa993-f5fd-458d-921f-b0c5d5be1d9d"
  },
  {
    name: "宁夏师范学院",
    abbreviation: "nxtu",
    province: "宁夏回族自治区",
    id: "7a2bfa90-0895-42dc-a0bb-f7942930981c"
  },
  {
    name: "北方民族大学",
    abbreviation: "nwsni",
    province: "宁夏回族自治区",
    id: "21a59357-2ba8-4eee-96af-aef08101a4f3"
  },
  {
    name: "宁夏理工学院",
    abbreviation: "nxist",
    province: "宁夏回族自治区",
    id: "262d93e4-9388-495e-b95d-ddffb50e839c"
  },
  {
    name: "宁夏大学新华学院",
    abbreviation: "nxu",
    province: "宁夏回族自治区",
    id: "d69145f4-1a04-4b4a-a52e-d63ad40d77ae"
  },
  {
    name: "银川能源学院",
    abbreviation: "ycu",
    province: "宁夏回族自治区",
    id: "49f663c3-2ce9-4856-ab07-ac1355e92d1b"
  },
  {
    name: "中国矿业大学银川学院",
    abbreviation: "cumtyc",
    province: "宁夏回族自治区",
    id: "01691932-4bef-4dd3-be0d-fe38ddc1ee85"
  },
  {
    name: "宁夏民族职业技术学院",
    abbreviation: "nxmzy",
    province: "宁夏回族自治区",
    id: "b463b1ed-d335-4caf-99a1-895cba124bda"
  },
  {
    name: "宁夏工业职业学院",
    abbreviation: "ngzy",
    province: "宁夏回族自治区",
    id: "a1339b9d-5fcb-4eb9-8b47-a2c55e7d9e2f"
  },
  {
    name: "宁夏职业技术学院",
    abbreviation: "nxtc",
    province: "宁夏回族自治区",
    id: "2386d2b1-3cc0-4215-a43c-6bf649aceebb"
  },
  {
    name: "宁夏工商职业技术学院",
    abbreviation: "nxgs",
    province: "宁夏回族自治区",
    id: "a5d955cf-714f-4742-afda-c6a92f0d317a"
  },
  {
    name: "宁夏财经职业技术学院",
    abbreviation: "nxcy",
    province: "宁夏回族自治区",
    id: "ea253c49-10a6-4817-84da-37e663ce505e"
  },
  {
    name: "宁夏司法警官职业学院",
    abbreviation: "nsjy",
    province: "宁夏回族自治区",
    id: "de1817f4-5d00-4f34-91e7-4f71f6cab5d3"
  },
  {
    name: "宁夏建设职业技术学院",
    abbreviation: "nxjy",
    province: "宁夏回族自治区",
    id: "20b5cd6f-639f-4385-ab7b-42512d15fe97"
  },
  {
    name: "宁夏葡萄酒与防沙治沙职业技术学院",
    abbreviation: "nxfszs",
    province: "宁夏回族自治区",
    id: "d1fef7fe-0967-47b4-b1ab-789b5ed787e1"
  },
  {
    name: "宁夏幼儿师范高等专科学校",
    abbreviation: "nxysedu",
    province: "宁夏回族自治区",
    id: "615798fb-ffc9-46a8-83b4-0907ed0ed18f"
  },
  {
    name: "宁夏艺术职业学院",
    abbreviation: "nxyx",
    province: "宁夏回族自治区",
    id: "140a59fc-9592-489d-b59f-658c59c3320c"
  },
  {
    name: "新疆大学",
    abbreviation: "xju",
    province: "新疆维吾尔自治区",
    id: "3608de76-ef24-47be-abf1-a19d4cfb39f4"
  },
  {
    name: "塔里木大学",
    abbreviation: "taru",
    province: "新疆维吾尔自治区",
    id: "01f269a3-b322-4058-b8b5-6c97bf8e1e8e"
  },
  {
    name: "新疆农业大学",
    abbreviation: "xjau",
    province: "新疆维吾尔自治区",
    id: "d64add63-424d-45a9-babe-92e6c68e75b6"
  },
  {
    name: "石河子大学",
    abbreviation: "shzu",
    province: "新疆维吾尔自治区",
    id: "a5e5a62c-ded7-48a4-8c70-41eff17cdf6b"
  },
  {
    name: "新疆医科大学",
    abbreviation: "xjmu",
    province: "新疆维吾尔自治区",
    id: "fec176d9-3675-47f4-8ca4-b00a6e2f49c4"
  },
  {
    name: "新疆师范大学",
    abbreviation: "xjnu",
    province: "新疆维吾尔自治区",
    id: "5a8e5da8-ea0f-4e2f-8955-9465f5b97325"
  },
  {
    name: "喀什大学",
    abbreviation: "ksu",
    province: "新疆维吾尔自治区",
    id: "2b444b98-e463-4c84-abaa-6a4f7fc1168b"
  },
  {
    name: "伊犁师范学院",
    abbreviation: "ylsy",
    province: "新疆维吾尔自治区",
    id: "3b61ef92-1919-47d8-8b33-84c5bffc2fac"
  },
  {
    name: "新疆财经大学",
    abbreviation: "xjufe",
    province: "新疆维吾尔自治区",
    id: "db0115be-1ad7-4752-832b-3e436741c3a0"
  },
  {
    name: "新疆艺术学院",
    abbreviation: "xjart",
    province: "新疆维吾尔自治区",
    id: "ad99e0e5-df6b-4fb5-a24f-304317d30251"
  },
  {
    name: "新疆工程学院",
    abbreviation: "xjie",
    province: "新疆维吾尔自治区",
    id: "51a475dd-9f88-47e1-b0e0-1eb42832e8b1"
  },
  {
    name: "昌吉学院",
    abbreviation: "cjc",
    province: "新疆维吾尔自治区",
    id: "9ddeb29a-9544-4afd-8e8f-c079716eb2ed"
  },
  {
    name: "新疆警察学院",
    abbreviation: "xjjz",
    province: "新疆维吾尔自治区",
    id: "de700a02-4497-4a9c-9877-5bb814156ae5"
  },
  {
    name: "新疆大学科学技术学院",
    abbreviation: "kj",
    province: "新疆维吾尔自治区",
    id: "7b90808c-ca28-4699-b541-a13a65510ee7"
  },
  {
    name: "新疆农业大学科学技术学院",
    abbreviation: "xjstc",
    province: "新疆维吾尔自治区",
    id: "e1106890-faf9-4c76-9c72-f4114c2d78d1"
  },
  {
    name: "新疆医科大学厚博学院",
    abbreviation: "xjmu",
    province: "新疆维吾尔自治区",
    id: "bd37e843-7c22-41d6-abb1-3a78c439bca7"
  },
  {
    name: "新疆财经大学商务学院",
    abbreviation: "swxyzsw",
    province: "新疆维吾尔自治区",
    id: "045d1c8e-b82d-4f83-b3f6-9de0e37096fa"
  },
  {
    name: "石河子大学科技学院",
    abbreviation: "shzu",
    province: "新疆维吾尔自治区",
    id: "685f146c-515c-4c6f-8dfb-0311f072e759"
  },
  {
    name: "和田师范专科学校",
    abbreviation: "htszedu",
    province: "新疆维吾尔自治区",
    id: "95910e11-dd86-4755-9892-4fd1bc1f6996"
  },
  {
    name: "新疆农业职业技术学院",
    abbreviation: "xjnzy",
    province: "新疆维吾尔自治区",
    id: "a75fc7d0-63df-481f-bce7-c882129800eb"
  },
  {
    name: "乌鲁木齐职业大学",
    abbreviation: "uvu",
    province: "新疆维吾尔自治区",
    id: "02c3d901-3463-45a6-a5a9-2e8ed249ac0e"
  },
  {
    name: "新疆维吾尔医学专科学校",
    abbreviation: "xjumc",
    province: "新疆维吾尔自治区",
    id: "5bea4e02-d58d-4b51-8171-0b7fcf8b84b9"
  },
  {
    name: "克拉玛依职业技术学院",
    abbreviation: "kzjsxy",
    province: "新疆维吾尔自治区",
    id: "60a43b26-ecf8-475f-ac5c-d1252e0f8a00"
  },
  {
    name: "新疆轻工职业技术学院",
    abbreviation: "xjqg",
    province: "新疆维吾尔自治区",
    id: "b0e43aed-29ef-4d87-97a0-67937338e5f0"
  },
  {
    name: "新疆能源职业技术学院",
    abbreviation: "xjnyedu",
    province: "新疆维吾尔自治区",
    id: "df5a2c4b-4855-4f12-8e25-9df848068308"
  },
  {
    name: "昌吉职业技术学院",
    abbreviation: "cjpt",
    province: "新疆维吾尔自治区",
    id: "d8f5c046-fc05-491e-b5cd-8cb0d5587fe7"
  },
  {
    name: "伊犁职业技术学院",
    abbreviation: "ylzyjs",
    province: "新疆维吾尔自治区",
    id: "8be912f7-5ecc-4359-a49c-951b76727f06"
  },
  {
    name: "阿克苏职业技术学院",
    abbreviation: "akszy",
    province: "新疆维吾尔自治区",
    id: "74141092-dcd9-44d5-962f-2d43a646302a"
  },
  {
    name: "巴音郭楞职业技术学院",
    abbreviation: "xjbyxy",
    province: "新疆维吾尔自治区",
    id: "b0460876-84de-4828-af7a-048f8f04f9eb"
  },
  {
    name: "新疆建设职业技术学院",
    abbreviation: "xjjszy",
    province: "新疆维吾尔自治区",
    id: "de58cd3a-84ff-409c-be93-319cf14e5284"
  },
  {
    name: "新疆兵团警官高等专科学校",
    abbreviation: "xjbtjx",
    province: "新疆维吾尔自治区",
    id: "f419b892-a292-4acc-a3a5-d26749ab078e"
  },
  {
    name: "新疆现代职业技术学院",
    abbreviation: "xjxiandai",
    province: "新疆维吾尔自治区",
    id: "c3fafa12-ca1f-4a20-9300-6dc10f72d7eb"
  },
  {
    name: "新疆天山职业技术学院",
    abbreviation: "xjtsxy",
    province: "新疆维吾尔自治区",
    id: "733964e9-f456-4559-a97f-d0b4e8f999f4"
  },
  {
    name: "新疆交通职业技术学院",
    abbreviation: "xjjtedu",
    province: "新疆维吾尔自治区",
    id: "d4d280a4-58a6-4472-922c-5c585ccfbe8f"
  },
  {
    name: "新疆石河子职业技术学院",
    abbreviation: "xjshzzy",
    province: "新疆维吾尔自治区",
    id: "16299b70-1e84-4214-9113-c438be90e6c7"
  },
  {
    name: "新疆职业大学",
    abbreviation: "xjvu",
    province: "新疆维吾尔自治区",
    id: "ef52d871-b2a0-41cf-a365-05c1ee0849ef"
  },
  {
    name: "新疆体育职业技术学院",
    abbreviation: "xjsvtc",
    province: "新疆维吾尔自治区",
    id: "9f2108af-b30e-4223-9497-aeb7c023f2ed"
  },
  {
    name: "新疆应用职业技术学院",
    abbreviation: "xjyy",
    province: "新疆维吾尔自治区",
    id: "6c3d5269-96b8-49e3-9203-afd16b7c2242"
  },
  {
    name: "新疆师范高等专科学校",
    abbreviation: "xjei",
    province: "新疆维吾尔自治区",
    id: "48d60dfa-57e2-4b68-b13c-2fdfc35ac367"
  },
  {
    name: "新疆铁道职业技术学院",
    abbreviation: "xjtzy",
    province: "新疆维吾尔自治区",
    id: "41b9aa3b-09c7-4cdf-b93c-7297388edc23"
  },
  {
    name: "新疆生产建设兵团兴新职业技术学院",
    abbreviation: "btc",
    province: "新疆维吾尔自治区",
    id: "70731dca-36d6-48b2-a707-3e0ea3c9873a"
  },
  {
    name: "哈密职业技术学院",
    abbreviation: "hmzyjsxx",
    province: "新疆维吾尔自治区",
    id: "a11c5add-679e-4dc5-8995-07068dd175d7"
  },
  {
    name: "新疆科技职业技术学院",
    abbreviation: "xjkjzyjsxy",
    province: "新疆维吾尔自治区",
    id: "c4ba118c-7257-4fb5-b7eb-fab426f7c270"
  },
  {
    name: "香港中文大学",
    abbreviation: "cuhk",
    province: "香港特别行政区",
    id: "624462e1-8eab-481e-a39b-63f0fb1b80b2"
  },
  {
    name: "澳门大学",
    abbreviation: "umac",
    province: "澳门特别行政区",
    id: "ac31dac3-19fe-464c-b2a7-6da44cfe971b"
  },
  {
    name: "台湾中央大学",
    abbreviation: "ncu",
    province: "台湾省",
    id: "d120bf0f-9d1b-4a4e-90e7-6a0dc7155709"
  }
];
const _sfc_main = {
  data() {
    return {
      loggedIn: false,
      token: "",
      rawList: [],
      // 原始完整数据
      groupedUniversities: {},
      // { "北京市": [..], "广东省": [..] }
      expandedProvinces: [],
      // 当前展开的省份
      selectedUniversityId: "",
      selectedName: "",
      searchText: "",
      searchResults: []
      // 搜索结果缓存
    };
  },
  computed: {
    // 全局搜索（防抖 + 只在有输入时计算）
    filteredSearch() {
      const s = this.searchText.trim().toLowerCase();
      if (!s)
        return [];
      return this.rawList.filter(
        (u) => u.name.toLowerCase().includes(s) || u.abbreviation && u.abbreviation.toLowerCase().includes(s)
      );
    }
  },
  watch: {
    searchText(newVal) {
      clearTimeout(this._searchTimer);
      this._searchTimer = setTimeout(() => {
        this.searchResults = this.filteredSearch;
      }, 200);
    }
  },
  // 生命周期函数：移到这里（平行于 methods）
  onLoad(options) {
    const token = common_vendor.index.getStorageSync("token");
    if (!token) {
      this.loggedIn = false;
      return;
    }
    this.loggedIn = true;
    this.token = token;
    this.loadUniversities();
    if (options.from === "change") {
      this.selectedUniversityId = "";
      setTimeout(() => {
        common_vendor.index.showToast({ title: "请重新选择大学", icon: "none" });
      }, 300);
    } else {
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/user/profile",
        method: "GET",
        header: {
          Authorization: "Bearer " + token
        },
        success: (res) => {
          if (res.statusCode === 200 && res.data && res.data.university) {
            common_vendor.index.reLaunch({
              url: "/pages/index/index"
            });
          } else {
            this.loggedIn = true;
            this.token = token;
            this.loadUniversities();
          }
        },
        fail: () => {
          this.loggedIn = true;
          this.token = token;
          this.loadUniversities();
        }
      });
    }
  },
  onShow() {
    const token = common_vendor.index.getStorageSync("token");
    if (token && !this.loggedIn) {
      this.onLoad({});
    }
  },
  methods: {
    onLogin() {
      common_vendor.index.login({
        success: (res) => {
          const code = res.code;
          common_vendor.index.request({
            url: "http://192.168.0.105:8080/api/auth/wxLogin",
            method: "POST",
            data: { code },
            success: (r) => {
              common_vendor.index.__f__("log", "at pages/login/login.vue:182", "【登录接口完整返回】", r.data);
              const data = r.data || {};
              if (data.token) {
                this.token = data.token;
                common_vendor.index.setStorageSync("token", data.token);
                common_vendor.index.setStorageSync("userInfo", data.userInfo);
                common_vendor.index.__f__("log", "at pages/login/login.vue:190", "保存成功的 token:", data.token.substring(0, 20) + "...");
                this.loggedIn = true;
                this.loadUniversities();
              } else {
                common_vendor.index.__f__("error", "at pages/login/login.vue:195", "登录成功但后端未返回 token 字段！返回数据:", data);
                common_vendor.index.showToast({ title: "登录成功但 token 为空，请联系管理员", icon: "none", duration: 5e3 });
              }
            },
            fail: () => {
              common_vendor.index.showToast({ title: "网络错误", icon: "none" });
            }
          });
        },
        fail: () => {
          common_vendor.index.showToast({ title: "登录失败", icon: "none" });
        }
      });
    },
    loadUniversities() {
      const list = Array.isArray(universityList) ? universityList : [];
      this.rawList = list.map((u) => ({
        id: u.id,
        name: u.name,
        province: u.province || "未知地区",
        abbreviation: u.abbreviation || ""
      }));
      const groups = {};
      this.rawList.forEach((u) => {
        if (!groups[u.province])
          groups[u.province] = [];
        groups[u.province].push(u);
      });
      this.groupedUniversities = Object.keys(groups).sort().reduce((obj, key) => {
        obj[key] = groups[key];
        return obj;
      }, {});
      this.expandedProvinces = ["北京市", "广东省", "上海市", "江苏省", "浙江省"];
    },
    toggleProvince(province) {
      const idx = this.expandedProvinces.indexOf(province);
      if (idx > -1) {
        this.expandedProvinces.splice(idx, 1);
      } else {
        this.expandedProvinces.push(province);
      }
    },
    selectUniversity(u) {
      this.selectedUniversityId = u.id;
      this.selectedName = u.name;
      this.searchText = u.name;
      this.searchResults = [];
      this.expandedProvinces = [u.province];
    },
    //   confirmUniversity() {
    //  uni.__f__('log','at pages/login/login.vue:259','当前要发的 token 是:', this.token)  // ←← 看这里！
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
        common_vendor.index.showToast({ title: "请先选择大学", icon: "none" });
        return;
      }
      common_vendor.index.showLoading({ title: "提交中..." });
      common_vendor.index.request({
        url: "http://192.168.0.105:8080/api/user/university",
        method: "POST",
        header: {
          Authorization: "Bearer " + this.token
        },
        data: {
          universityId: this.selectedUniversityId
        },
        success: (res) => {
          var _a, _b;
          common_vendor.index.__f__("log", "at pages/login/login.vue:324", "【选择大学接口完整返回】", res);
          const result = res[1] || res;
          if ((_a = result == null ? void 0 : result.data) == null ? void 0 : _a.ok) {
            const { token: newToken, profile } = result.data;
            common_vendor.index.setStorageSync("token", newToken);
            common_vendor.index.setStorageSync("profile", profile);
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({ title: "选择成功", icon: "success" });
            setTimeout(() => {
              common_vendor.index.reLaunch({ url: "/pages/index/index" });
            }, 800);
          } else {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              title: ((_b = result == null ? void 0 : result.data) == null ? void 0 : _b.message) || "设置失败，请重试",
              icon: "none"
            });
          }
        },
        fail: (err) => {
          common_vendor.index.hideLoading();
          common_vendor.index.__f__("error", "at pages/login/login.vue:358", "选择大学失败", err);
          common_vendor.index.showToast({ title: "网络错误", icon: "none" });
        }
      });
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
    a: !$data.loggedIn
  }, !$data.loggedIn ? {
    b: common_vendor.o((...args) => $options.onLogin && $options.onLogin(...args))
  } : common_vendor.e({
    c: common_vendor.p({
      type: "search",
      size: "18",
      color: "#999"
    }),
    d: $data.searchText,
    e: common_vendor.o(($event) => $data.searchText = $event.detail.value),
    f: $data.searchText
  }, $data.searchText ? common_vendor.e({
    g: common_vendor.f($data.searchResults, (u, k0, i0) => {
      return {
        a: common_vendor.t(u.name),
        b: common_vendor.t(u.province),
        c: "a95a9496-1-" + i0,
        d: common_vendor.p({
          type: $data.selectedUniversityId === u.id ? "checkmarkempty" : "circle",
          size: "24",
          color: "#007AFF"
        }),
        e: u.id,
        f: $data.selectedUniversityId === u.id ? 1 : "",
        g: common_vendor.o(($event) => $options.selectUniversity(u), u.id)
      };
    }),
    h: !$data.searchResults.length
  }, !$data.searchResults.length ? {} : {}) : {
    i: common_vendor.f($data.groupedUniversities, (group, province, i0) => {
      return common_vendor.e({
        a: common_vendor.t(province),
        b: common_vendor.t(group.length),
        c: "a95a9496-2-" + i0,
        d: common_vendor.p({
          type: $data.expandedProvinces.includes(province) ? "top" : "bottom",
          size: "20",
          color: "#999"
        }),
        e: common_vendor.o(($event) => $options.toggleProvince(province), province),
        f: $data.expandedProvinces.includes(province)
      }, $data.expandedProvinces.includes(province) ? {
        g: common_vendor.f(group, (u, k1, i1) => {
          return {
            a: common_vendor.t(u.name),
            b: "a95a9496-3-" + i0 + "-" + i1,
            c: common_vendor.p({
              type: $data.selectedUniversityId === u.id ? "checkmarkempty" : "circle",
              size: "24",
              color: "#007AFF"
            }),
            d: u.id,
            e: $data.selectedUniversityId === u.id ? 1 : "",
            f: common_vendor.o(($event) => $options.selectUniversity(u), u.id)
          };
        })
      } : {}, {
        h: province
      });
    })
  }, {
    j: !$data.searchText && Object.keys($data.groupedUniversities).length === 0
  }, !$data.searchText && Object.keys($data.groupedUniversities).length === 0 ? {} : {}, {
    k: common_vendor.o((...args) => $options.confirmUniversity && $options.confirmUniversity(...args)),
    l: !$data.selectedUniversityId
  }));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
