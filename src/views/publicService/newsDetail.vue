<template>
  <div class="news">
    <div class="news-title">
      <span class="newDsp1">{{ news.title }}</span>
      <span class="newDsp2">{{ news.time }}</span>
    </div>
    <div class="news-content">
      <van-image width="100%" :src="news.img" fit="contain" />
    </div>
  </div>
</template>
<script>
import { newsList } from "./data";
export default {
  data() {
    return {
      newsList: newsList,
      news: {},
    };
  },
  watch: {},
  components: {},
  computed: {},
  methods: {
    getNews(id) {
      for (var i = 0; i < this.newsList.length; i++) {
        if (this.newsList[i].id === id) {
          this.news = this.newsList[i];
          return;
        }
      }
    },
  },
  mounted() {},
  created() {},
  activated() {
    this.news = {};
    // 获取到新闻的唯一id
    var id = "";
    id = Number(this.$route.query.id);
    // 通过id来展示新闻
    this.getNews(id);
  },
};
</script>
<style lang="less" scoped>
.news {
  background-color: #ffffff;
  padding: 0 10px;
}

.news-title {
  padding: 10px;
  border-bottom: #e6e6e6 1px solid;
}

.newDsp1 {
  color: #333333;
  font-size: 15px;
  padding-bottom: 6px;
  display: block;
}

.newDsp2 {
  font-size: 13px;
  letter-spacing: normal;
  color: #999999;
}

.news-content {
  padding: 10px;
}
</style>