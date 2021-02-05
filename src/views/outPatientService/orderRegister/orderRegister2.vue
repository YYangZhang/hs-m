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
          <van-tab title="普通门诊" name="1"></van-tab>
          <van-tab title="专家门诊" name="2"></van-tab>
        </van-tabs>
      </div>
      <div class="menzhenType" v-if="active === '1'">
          111
      </div>
      <div class="menzhenType"  v-if="active === '2'">
          222
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
  },
  created: function () {},
  activated() {
    // 获取item数据 即从上个页面传过来的科室名称及id
    this.item = JSON.parse(this.$route.query.item);
    console.log(this.item);
    this.getDays(6);
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
  .selected {
    color: #199ed8;
    border: #199ed8 1px solid;
    border-radius: 6px;
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
  }
}
</style>