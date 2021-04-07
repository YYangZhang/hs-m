<template>
  <div class="fullscreen">
    <div class="orderSuccessContent">
      <i class="iconfont iconchenggong"></i>
      <div class="osdiv1">
        挂号成功
      </div>
      <div class="osdiv2 dashed">
        <div class="osdiv2_1 flexBet">
          <span>就诊序号</span>
          <span>81</span>
        </div>
        <div class="osdiv2_1 flexBet">
          <span>就诊时间</span>
          <span>2016/09/16 周二 上午</span>
        </div>
        <div class="osdiv2_1 flexBet">
          <span>就诊地点</span>
          <span>门诊四楼东</span>
        </div>
      </div>

      <div class="osdiv3 dashed">
        <div class="osdiv3_1 flexBet">
          <span>科室</span>
          <span>消化内科</span>
        </div>
        <div class="osdiv3_1 flexBet">
          <span>门诊类型</span>
          <span>专家门诊 张无忌</span>
        </div>
      </div>

      <div class="osdiv3 dashed">
        <div class="osdiv3_1 flexBet">
          <span>挂号费</span>
          <span>￥ 10</span>
        </div>
        <div class="osdiv3_1 flexBet">
          <span>状态</span>
          <span>待就诊</span>
        </div>
      </div>

      <div class="osdiv3 dashed">
        <div class="osdiv3_1 flexBet">
          <span>就诊人</span>
          <span>无敌胖胖</span>
        </div>
        <div class="osdiv3_1 flexBet">
          <span>提交时间</span>
          <span>2021/04/01 11:12:26</span>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
.fullscreen{
  padding: 30px 10px 0 10px;
  background-color: #f0f2f8;
  .orderSuccessContent{
    padding:0 10px 30px 10px;
    border: #e2e4e9 1px solid;
    background-color: #ffffff;
    border-radius: 10px;
    position: relative;
    .osdiv1{
      height: 76px;
      font-size: 20px;
      color: #268efd;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: #e4e4e4 1px dashed;
    }
    .osdiv2{
      padding-top: 12px;
      font-size: 15px;
      color: #333333;
      font-weight: bold;
      .osdiv2_1{
        padding-bottom: 20px;
      }
    }
    .osdiv3{
      padding-top: 12px;
      font-size: 12px;
      color: #999999;
      .osdiv3_1{
        padding-bottom: 12px;
      }
    }
  }
}
.dashed{
  border-bottom: #e4e4e4 1px dashed;
}
.flexBet{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.iconchenggong{
  font-size: 38px;
  color: #268efc;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -19px;
}
</style>