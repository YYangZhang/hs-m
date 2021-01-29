<template>
  <div class="fullscreen">
    <div
      class="news"
      v-for="news in newsList"
      :key="news.id"
      @click="gotoMore(news.id)"
    >
      <div class="news-icon">
        <img :src="news.img" class="news-img" />
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
import { newsList } from "./data";
export default {
  data() {
    return {
      newsList: newsList,
    };
  },
  watch: {},
  components: {},
  computed: {},
  methods: {
    gotoMore(id) {
      this.$router.push({
        path: "/newsDetail",
        query: { id: id },
      });
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