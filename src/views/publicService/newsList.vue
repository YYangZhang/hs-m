<template>
  <div class="fullscreen">
    <div
      class="news"
      v-for="(news, idx) in newsList"
      :key="idx"
      @click="gotoMore(news.url, news.title, news.time)"
    >
      <div class="news-icon">
        <img :src="news.img" class="news-img"/>
      </div>
      <div class="news-content">
        <div class="news-title">
          <span>{{ news.title }}</span>
        </div>
        <div class="news-time">
          <span>{{ news.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: [
        {
          img: require("../../assets/img/1.jpg"),
          title: "专家：印度自以为把准了中国的脉 所以敢于咄咄逼人",
          time: "2020/09/20 18:15:10",
          url: "../views/newsDetail",
          id: "aaa",
        },
        {
          img: require("../../assets/img/2.png"),
          title: "戏剧性一幕发生了 WeChat在美国的命运反转！",
          time: "2020/09/21 07:28:15",
          url: "../views/newsDetail",
          id: "aaa",
        },
        {
          img: require("../../assets/img/3.jpg"),
          title: "很多种子大量依赖国外 卡脖子都卡到我们碗里了？！",
          time: "2020/09/21 07:25:10",
          url: "../views/newsDetail",
          id: "aaa",
        },
        {
          img: require("../../assets/img/4.jpg"),
          title: "这名香港女大学生接二连三干这事，校方下“禁足令”",
          time: "2020/09/21 05:15:10",
        },
        {
          img: require("../../assets/img/5.jpg"),
          title: "拜登称约有2亿人死于新冠 美媒：美国总共才3亿多人",
          time: "2020/09/21 12:20:03",
          url: "../views/newsDetail",
          id: "aaa",
        },
        {
          img: require("../../assets/img/1.jpg"),
          title: "专家：印度自以为把准了中国的脉 所以敢于咄咄逼人",
          time: "2020/09/20 18:15:10",
        },
        {
          img: require("../../assets/img/2.png"),
          title: "戏剧性一幕发生了 WeChat在美国的命运反转！",
          time: "2020/09/21 07:28:15",
          url: "../views/newsDetail",
          id: "aaa",
        },
        {
          img: require("../../assets/img/3.jpg"),
          title: "很多种子大量依赖国外 卡脖子都卡到我们碗里了？！",
          time: "2020/09/21 07:25:10",
          url: "../views/newsDetail",
          id: "aaa",
        },
        {
          img: require("../../assets/img/4.jpg"),
          title: "这名香港女大学生接二连三干这事，校方下“禁足令”",
          time: "2020/09/21 05:15:10",
          url: "../views/newsDetail",
          id: "aaa",
        },
        {
          img: require("../../assets/img/5.jpg"),
          title: "拜登称约有2亿人死于新冠 美媒：美国总共才3亿多人",
          time: "2020/09/21 12:20:03",
          url: "../views/newsDetail",
          id: "aaa",
        },
      ],
    };
  },
  watch: {},
  components: {},
  computed: {},
  methods: {
    gotoMore(url, title, time) {
      console.log(url + title + time);
    },
  },
  created: function () {},
  activated() {},
};
</script>
<style lang="less" scoped>
.fullscreen {
  background-color: #ffffff;
  overflow: auto;
}
.news {
  padding: 10px;
  border-bottom: #d9d9d9 1px solid;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #ffffff;
}

.news .news-icon {
  width: 86px;
  height: 86px;
  line-height: 86px;
  overflow: hidden;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news .news-content {
  padding: 0 0 0 14px;
  width: calc(100% - 86px);
}

.news .news-content .news-title {
  height: 54px;
  margin-bottom: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.news .news-content .news-title span {
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  color: #333333;
}

.news .news-content .news-time {
  text-align: right;
  padding-right: 6px;
}

.news .news-content .news-time span {
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #999999;
}
</style>