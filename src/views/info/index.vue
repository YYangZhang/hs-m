<template>
  <div class="fullscreen">
    <div class="imgdiv">
      <van-image width="100%" height="100%" fit="cover" :src="imgsrc" />
    </div>
    <div>
      <div class="listcontent">
        <van-cell clickable center v-for="(item, idx) in infoList" :key="idx">
          <template #icon>
            <div class="icondiv" :style="{ backgroundColor: item.bgColor }">
              <i class="iconfont" :class="item.icon"></i>
            </div>
          </template>
          <template #title class="cellTitle">
            {{ item.title }}
          </template>
          <template #default>
            {{ item.info }}
          </template>
        </van-cell>
      </div>
      <div class="infocontent">
        <van-collapse v-model="activeName" border accordion>
          <van-collapse-item name="1">
            <template #title>
              <span style="color: #1dbac2">医院简介</span>
            </template>
            <div>
              <p class="textIn" v-for="(item, index) in pList" :key="index">
                {{ item.p }}
              </p>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgsrc: require("../../assets/img/2.png"),
      activeName: "1",
      infoList: [
        {
          icon: "iconliulanqi",
          title: "医院官网",
          info: "http://www.baidu.com",
          bgColor: "#7fcef5",
        },
        {
          icon: "icondianhua",
          title: "医院电话",
          info: "0513-86540536",
          bgColor: "#5cca8b",
        },
        {
          icon: "icondizhi",
          title: "医院地址",
          info: "江苏省南通市西寺路20号",
          bgColor: "#feb12b",
        },
        {
          icon: "icongongjiao",
          title: "乘车路线",
          info: "5路、30路、33路、45路、53路、58路、81路南通附属医院站下车",
          bgColor: "#0099cc",
        },
      ],
      pList: [
        {
          p:
            "南通大学附属医院由清末状元张謇先生创建于1911年，是一所省属综合性教学医院，是江苏省卫健委认定的具有区域影响力的长三角北翼和沿海经济带高水平医疗服务高地，同时也是高水平省级综合类医疗中心。1994年被卫生部首批评定为三级甲等综合性医院，1998年被确定为国际紧急救援中心网络医院。医院老院区实际开放床位2210张，占地面积9.7万平方米，建筑面积23.8万平方米。医院新院区占地面积280亩，建筑面积56.6万平方米，规划床位2500张，预计2023年底投入运营。2020年总诊疗人次214.9万，出院病人11.1万人次，住院手术5.6万台。现有职工3300多名，其中正高级职称280余人，副高级职称450余人，享受国务院特殊津贴专家25人，博士生、硕士生导师300余人。",
        },
        {
          p:
            "近年来，医院确立了以医疗为中心、以科技创新和人才培养为两翼的“一体两翼、强体健翼”发展战略，紧跟医药卫生体制改革形势，以综合目标管理责任制考核指标为抓手，扎实推进“医疗服务品牌建设工程”，坚持公立医院的办院方向，认真落实发展任务，不断加强基础管理，统筹推进学科建设、人才培养、技术进步，医疗质量与安全持续改进，科教兴院成效显著，党建与廉政行风建设扎实有效，医院文化特色鲜明。",
        },
        {
          p:
            "临床医学为江苏省重点学科、博士学位授权一级学科，ESI排名跻身全球前1%，且排名不断前移。医院手外科为江苏省临床医学研究中心；神经疾病诊疗中心为江苏省“科教强卫工程”十大“临床医学中心”之一，手外科、医学检验科、血液科、眼科为省“科教强卫工程”医学重点学科；普外科、骨科、眼科、消化内科、血液内科、医学检验科、心血管内科、神经内科、皮肤科、肾脏内科、呼吸内科、妇产科、神经外科、急诊医学科、医学影像科、耳鼻咽喉科、心胸外科、整形外科、重症医学科、风湿免疫科、康复科、儿科、病理科、麻醉科、肿瘤科、泌尿外科、内分泌科、输血科、口腔科、感染性疾病科等30个专科为省级临床重点专科。医院首批通过国家卫计委干细胞临床研究机构认证，是国家高级卒中中心、中国胸痛中心、心衰中心、房颤中心、国家脑防委心源性卒中防治基地建设单位、江苏省孕产妇危急重症救治指导中心、江苏省新生儿危急重症救治中心和江苏省创伤救治中心。医院先后建成国家级博士后科研工作站、博士后科研流动站。拥有江苏省有突出贡献中青年专家4人，省“333工程”人才45人次；省特聘医学专家4人；省“科教强卫工程”医学创新团队2个，医学重点人才1人；省“六大人才高峰”项目资助85人。现任国家级学会专科分会委员及以上职务260人次，其中专科分会副主任委员及以上职务16人次，其中中华医学会骨科学分会副主委1人，中国医院协会疾病与健康管理专委会副主委1人；省级学会副会长、专科分会副主任委员及以上职务147人次，其中省医学会占33人次，省医学会专科分会主任委员6名，候任主任委员2名。",
        },
        {
          p:
            "医院先后荣获全国文明单位、全国改善医疗服务创新医院奖、全国节约型公共机构示范单位、全国卫生系统先进集体、全国医院管理年活动先进单位、全国医院文化建设先进单位、全国医院法制建设先进单位、全国纪检监察纠风工作先进集体、全国模范职工之家、全国医药卫生系统创先争优活动先进集体、省卫生系统先进集体、省医院管理年活动先进单位、省、市文明单位、省卫生系统先进党组织、省教育系统先进党组织，市民主评议政风行风先进单位、市“无红包医院”创建工作先进集体等荣誉。",
        },
      ],
    };
  },
  watch: {},
  components: {},
  computed: {},
  methods: {},
  created: function () {},
  activated() {},
};
</script>
<style lang="less" scoped>
.fullscreen {
  background-color: #f0f2f8;
  .imgdiv {
    width: 100%;
    height: 190px;
  }
  .icondiv {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 33px;
    height: 33px;
    background-color: red;
    border-radius: 10px;
    margin-right: 18px;
    .iconfont {
      font-size: 22px;
      color: #ffffff;
    }
  }
  .cellTitle {
    font-size: 15px;
    color: #666666;
    font-weight: 400;
  }
}
.listcontent /deep/ .van-cell__title {
  width: 100px;
  flex: unset;
}
.infocontent {
  margin-top: 10px;
  .textIn:first-child {
    margin-block-start: 0rem;
  }
  .textIn:last-child {
    margin-block-end: 0rem;
  }
  .textIn {
    text-indent: 2em;
  }
}
</style>