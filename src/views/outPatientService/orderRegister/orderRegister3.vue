<template>
  <div class="fullscreen">
    <div class="content">
      <div class="div1">
        <div class="div1Icon" v-if="params.type === '1'">
          <van-image
            width="100%"
            height="100%"
            :src="params.icon"
            fit="cover"
            :round="true"
            style="border: #ffffff 2px solid"
          />
        </div>
        <div class="div1Icon1" v-if="params.type === '2'">
          <i class="iconfont iconyiyuan1"></i>
        </div>
        <div class="div1Info">
          <div class="info1" v-if="params.type === '1'">
            <span class="name">{{ params.name }}</span>
            <span class="position">{{ params.position }}</span>
          </div>
          <div class="info1" v-if="params.type === '2'">
            <span class="name1">{{ params.name }}</span>
          </div>
          <div class="info2">
            <span v-if="params.type === '1'">擅长：{{ params.detail }}</span>
            <span v-if="params.type === '2'"
              >科室特色：{{ params.detail }}</span
            >
          </div>
        </div>
      </div>
      <div class="div2">
        <div class="div3">
          <span
            >就诊时间：
            <span class="sp1">{{ params.date }} 周{{ params.zhou }}</span>
          </span>
          <span class="sp2"
            >诊查费 <span class="sp3">{{ price }}</span
            >元
          </span>
        </div>
        <div class="div4">
          <van-cell
            clickable
            @click="showPopup"
            title="请选择就诊时间段"
            is-link
          >
            <span style="color: #4379ee; font-weight: 600">{{
              selectTime ? selectTime : "暂未选择就诊时间"
            }}</span>
          </van-cell>
          <van-popup v-model="optionTime" position="bottom" class="selectTime">
            <div class="div5">
              <div
                class="div6"
                style="border-bottom: #f7f8fa 1px solid"
                v-for="(item, idx) in timeArr"
                :key="idx"
              >
                <van-button
                  plain
                  style="width: 100%; border: none; height: 100%"
                  @click="chooseTime(item.time)"
                >
                  <span style="margin-right: 20px">{{
                    item.day === 1 ? "上午" : "下午"
                  }}</span>
                  <span>{{ item.time }}</span>
                </van-button>
              </div>
            </div>
            <div class="div6">
              <!-- <van-cell clickable @click="showPopup"   style="text-align:center!important">取 消</van-cell> -->
              <van-button
                @click="cancelPopup"
                plain
                type="info"
                style="width: 100%; border: none; height: 100%"
                >取 消</van-button
              >
            </div>
          </van-popup>
        </div>
      </div>
      <div class="patientSelect">
        <div class="changed">
          当前就诊人
          <van-button plain round size="mini" class="btn"
            >切换就诊人</van-button
          >
        </div>
        <div class="patientDiv">
          <div class="patientinfo">
            <div class="patientIcon">
              <van-image
                width="100%"
                height="100%"
                :src="advatar"
                fit="cover"
                :round="true"
                style="border: #badafc 2px solid"
              />
            </div>
          </div>
          <div class="patientName">无敌胖胖</div>
          <div class="patientId">
            <span class="idsp1">身份证号</span>
            <span class="idsp2">320683111111111111</span>
          </div>
        </div>
      </div>
    </div>
    <div class="btnarea">
      <div class="bottomDetail">
        <span>{{ selectTime ? "您已选择：" : "暂未选择就诊时间" }}</span>
        <span v-if="selectTime"
          ><span style="margin-right: 4px">{{ params.date }}</span
          >{{ selectTime }}</span
        >
      </div>
      <div class="bottomConfirm">
        <van-button
          @click="gotoOrder"
          type="info"
          size="large"
          style="width: 100%; border: none; height: 100%"
          >确定预约</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectTime: undefined,
      price: "15.0",
      optionTime: false,
      timeArr: [
        { day: 1, time: "08:00-09:00" },
        { day: 1, time: "09:00-10:00" },
        { day: 1, time: "10:00-11:00" },
        { day: 1, time: "11:00-12:00" },
        { day: 2, time: "13:00-14:00" },
        { day: 2, time: "14:00-15:00" },
        { day: 2, time: "15:00-16:00" },
        { day: 2, time: "16:00-17:00" },
      ],
      params: [],
      advatar: require("../../../assets/img/2.png"),
    };
  },
  watch: {},
  components: {},
  computed: {},
  methods: {
    getPath() {
      if (this.$route.path == "/orderRegister3") {
        this.getParams(); // 初始化的方法
      }
    },
    getParams() {
      // 获取路由中的参数
      this.params = JSON.parse(this.$route.query.params);
      console.log(this.params);
    },
    showPopup() {
      // 展示选择时间的弹出框
      this.optionTime = true;
    },
    cancelPopup() {
      // 关闭选择时间弹出框
      this.optionTime = false;
    },
    chooseTime(item) {
      // 选择时间并关闭弹出框
      this.selectTime = item;
      this.cancelPopup();
    },
    gotoOrder() {
      // 跳转页面 如果没有选择时间则不跳转并提醒
      if (this.selectTime) {
      } else {
      }
    },
  },
  created: function () {
    this.getParams();
  },
  activated() {},
  mounted() {},
  watch: {
    $route: "getPath",
  },
};
</script>
<style lang="less" scoped>
.fullscreen {
  background-color: #f0f2f8;
  .content {
    height: calc(100% - 50px);
    overflow: auto;
    .div1 {
      height: 97px;
      background-color: #199ed8;
      padding: 0 18px;
      display: flex;
      align-items: center;
      .div1Icon {
        width: 50px;
        height: 50px;
      }
      .div1Icon1 {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 50%;
        .iconyiyuan1 {
          font-size: 30px;
          color: #72b4fb;
        }
      }
      .div1Info {
        width: calc(100% - 86px);
        margin-left: 20px;
        .info1 {
          display: flex;
          align-items: center;
          color: #ffffff;
          .name {
            font-size: 16px;
          }
          .name1 {
            font-size: 17px;
          }
          .position {
            font-size: 12px;
            margin-left: 14px;
          }
        }
        .info2 {
          padding-top: 14px;
          color: #ffffff;
          font-size: 14px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .div2 {
      width: 100%;
      margin-top: 6px;
      padding: 12px;
      // padding-bottom: 0;
      background-color: #ffffff;
      font-size: 14px;
      color: #333333;
      .div3 {
        padding: 12px;
        // padding-top: 0;
        border-bottom: #ebebeb 1px dashed;
        .sp1 {
          font-weight: 600;
          color: #258efb;
        }
        .sp2 {
          margin-left: 20px;
        }
        .sp3 {
          color: #de5a5a;
        }
      }
      .div4 {
        // height: 20px;
        .selectTime {
          height: 50%;
          // padding: 20px 0 0 20px;
          background-color: #f7f8fa;
          .div5 {
            height: calc(100% - 54px);
            overflow: auto;
            padding: 10px 0;
            background-color: #ffffff;
            margin-bottom: 10px;
          }
          .div6 {
            height: 44px;
            background-color: #ffffff;
          }
        }
      }
    }
    .patientSelect {
      margin-top: 6px;
      width: 100%;
      background-color: #ffffff;
      .changed {
        font-size: 14px;
        padding: 12px 24px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        .btn {
          padding: 1px 10px 0 10px;
        }
      }
      .patientDiv {
        padding: 14px 0 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .patientinfo {
          margin: 0 auto;
          .patientIcon {
            width: 66px;
            height: 66px;
          }
        }
        .patientName {
          text-align: center;
          padding-top: 14px;
          font-size: 15px;
        }
        .patientId {
          width: 100%;
          text-align: center;
          padding-top: 30px;
          font-size: 12px;
          .idsp1{
            color: #000000;
            margin-right: 36px;
          }
          .idsp2{
            color: #666666;
          }
        }
      }
    }
  }
  .btnarea {
    height: 50px;
    display: flex;
    align-items: center;
    // .bottomConfirm,
    .bottomDetail {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background-color: #ffffff;
    }
    .bottomDetail {
      width: 64%;
      color: #3a98fd;
      font-size: 12px;
    }
    .bottomConfirm {
      height: 100%;
      width: 36%;
      background-color: #268efd;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
    }
  }
}
</style>