<template>
  <div class="fullscreen">
    <div class="selectDay">
      <van-grid :border="false" :column-num="6">
        <van-grid-item
          v-for="(item, i) in days"
          :key="i"
          :class="i === current ? 'selected' : 'unselected'"
          @click="choseDay(i)"
        >
          <div>
            <span class="selectDaySp1">周{{ item.zhou }}</span>
          </div>
          <div>
            <span class="selectDaySp2">{{ item.month }}.{{ item.date }}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="content">
      <div class="tab">
        <van-tabs v-model="active" color="#199ed8">
          <van-tab title="专家门诊" name="1"></van-tab>
          <van-tab title="普通门诊" name="2"></van-tab>
        </van-tabs>
      </div>
      <div class="menzhenType" v-if="active === '1'">
        <div class="mzListItem" v-for="(item, i) in zhuanjiaList" :key="i" @click="gotoOrder">
          <div class="mzListItemIcon">
            <div class="icon">
              <van-image
                width="100%"
                height="100%"
                :src="item.icon"
                fit="cover"
                :round="true"
              />
            </div>
          </div>
          <div class="mzListItemContent">
            <div class="title">
              <span class="name">{{ item.name }}</span>
              <span class="position">{{ item.position }}</span>
            </div>
            <div class="detail">擅长：{{ item.detail }}</div>
          </div>
        </div>
      </div>
      <div class="menzhenType" v-if="active === '2'">
        <div class="mzListItem" v-for="(item, i) in menzhenList" :key="i" @click="gotoOrder">
          <div class="mzListItemIcon">
            <i class="icon2 iconfont iconyiyuan1"></i>
          </div>
          <div class="mzListItemContent">
            <div class="title">
              <span class="name">{{ item.name }}</span>
            </div>
            <div class="detail">科室特色：{{ item.detail }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: undefined,
      current: 0, //选择天时判断
      days: [],
      active: 0, //tab标签页选中
      zhuanjiaList: [
        {
          icon: require("../../../assets/img/5.jpg"),
          name: "张无忌",
          position: "主任医师",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          icon: require("../../../assets/img/5.jpg"),
          name: "张无忌",
          position: "主任医师",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          icon: require("../../../assets/img/5.jpg"),
          name: "张无忌",
          position: "主任医师",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          icon: require("../../../assets/img/5.jpg"),
          name: "张无忌",
          position: "主任医师",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          icon: require("../../../assets/img/5.jpg"),
          name: "张无忌",
          position: "主任医师",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
      ],
      menzhenList: [
        {
          name: "科室名称",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          name: "科室名称",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          name: "科室名称",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          name: "科室名称",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          name: "科室名称",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          name: "科室名称",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          name: "科室名称",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
        {
          name: "科室名称",
          detail: "消化内镜常规开展胃镜、十二指肠开刀、阑尾炎手术",
        },
      ],
    };
  },
  watch: {},
  components: {},
  computed: {},
  methods: {
    getDays(day) {
      // 获取当日及后几日的信息
      // params：day 想获取多少天就写多少
      var now = new Date();
      var nowTime = now.getTime();
      var oneDayTime = 24 * 60 * 60 * 1000;
      for (var i = 0; i < day; i++) {
        var showTime = nowTime + i * oneDayTime;
        var myDate = new Date(showTime);
        var year = myDate.getFullYear();
        var month = myDate.getMonth() + 1;
        if (month > 0 && month < 10) {
          month = "0" + month;
        }
        var date = myDate.getDate();
        if (date > 0 && date < 10) {
          date = "0" + date;
        }
        var str = "日一二三四五六".charAt(myDate.getDay());
        this.days.push({
          year: year,
          month: month,
          date: date,
          zhou: str,
        });
      }
    },
    choseDay(i) {
      this.current = i;
    },
    gotoOrder(){
      this.$router.push('/orderRegister3')
    }
  },
  created: function () {},
  activated() {
    // 获取item数据 即从上个页面传过来的科室名称及id
    this.item = JSON.parse(this.$route.query.item);
    console.log(this.item);
    this.getDays(6);
    this.current = 0;
    this.active = 0;
  },
};
</script>
<style lang="less" scoped>
.selectDay /deep/ .van-grid-item__content {
  padding: 7px 8px;
}
.selectDay {
  height: 56px;
  overflow: hidden;
  .selected /deep/ .van-grid-item__content {
    background-color: #199ed8;
    border-radius: 6px;
  }
  .selected {
    color: #ffffff;
    // color: #199ed8;
    // border: #199ed8 1px solid;
  }
  .unselected {
    color: #333333;
  }
  .selectDaySp1 {
    font-size: 15px;
  }
  .selectDaySp2 {
    font-size: 16px;
    font-weight: 600;
  }
}
.content {
  height: calc(100% - 56px);
  .tab {
    height: 46px;
    border-top: #f2f2f2 1px solid;
    border-bottom: #f2f2f2 1px solid;
  }
  .menzhenType {
    height: calc(100% - 46px);
    overflow: auto;
    .mzListItem {
      height: 90px;
      width: 100%;
      border-bottom: #f2f2f2 1px solid;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      .mzListItemIcon {
        width: 85px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .icon {
          width: 50px;
          height: 50px;
        }
        .icon2 {
          font-size: 50px;
          color: #72b4fb;
        }
      }
      .mzListItemContent {
        flex: 1;
        overflow: hidden;
        padding: 20px 30px 20px 0;
        .title {
          .name {
            font-size: 18px;
            color: #000000;
          }
          .position {
            color: #ff6600;
            font-size: 14px;
            margin-left: 10px;
          }
        }
        .detail {
          width: 100%;
          font-size: 14px;
          color: #666666;
          padding-top: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>