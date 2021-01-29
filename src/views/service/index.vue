<template>
  <div class="fullscreen">
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in imageList" :key="index">
          <img :src="image" class="swipeImg" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="notice">
      <van-notice-bar
        left-icon="volume-o"
        :scrollable="false"
        background="#ffffff"
        color="#333333"
      >
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item
            v-for="(item, index) in noticeList"
            :key="index"
            @click="gotoNews(item.code)"
          >
            {{ item.title }}
          </van-swipe-item>
        </van-swipe>
      </van-notice-bar>
    </div>

    <div class="gridDiv" v-for="(grid, i) in serviceList" :key="i">
      <service-title :title="grid.title"></service-title>
      <div class="gridContent">
        <van-grid :column-num="4" :border="false" clickable>
          <van-grid-item
            v-for="(gridItem, index) in grid.list"
            :key="index"
            @click="goto(gridItem.url)"
          >
            <template #icon>
              <div class="gridIconDiv">
                <i class="iconfont" :class="gridItem.icon"></i>
              </div>
            </template>
            <template #text>
              <div class="gridTextDiv">
                <span class="gridText">{{ gridItem.text }}</span>
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import serviceTitle from "../component/serviceTitle";
import { imageList, noticeList, serviceList } from "./data";
export default {
  data() {
    return {
      imageList: imageList,
      noticeList: noticeList,
      serviceList: serviceList,
    };
  },
  watch: {},
  components: { serviceTitle },
  computed: {},
  methods: {
    gotoNews(code) {
      console.log(code);
    },
    goto(url) {
      if (url) {
        console.log("url" + url);
        this.$router.push(url);
      }
    },
  },
  created: function () {},
  activated() {},
};
</script>
<style lang="less" scoped>
.fullscreen {
  background-color: #f0f2f8;
  overflow: auto;

  .swipe {
    height: 190px;
    overflow: hidden;
    .van-swipe-item {
      height: 100%;
    }
    .swipeImg {
      width: 100%;
      height: 190px;
    }
  }
  .notice {
    .notice-swipe {
      height: 40px;
      line-height: 40px;
    }
  }
  .gridDiv:last-child {
    margin-bottom: 10px;
  }
  .gridDiv {
    width: 100%;
    margin-top: 10px;
    background-color: #ffffff;
    .gridContent /deep/ .van-grid-item__content {
      padding: 12px 0;
    }
    .gridContent {
      width: 100%;
      padding: 6px 12px;
      .gridIconDiv {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #eef8fe;
        border: 1px solid #d2ebfd;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 8px;
        .iconfont {
          font-size: 28px;
          color: #29a1f7;
        }
      }
      .gridTextDiv {
        text-align: center;
        font-size: 14px;
        color: #333333;
      }
    }
  }
}
</style>