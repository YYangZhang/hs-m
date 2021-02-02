<template>
  <div class="fullscreen">
    <div class="searchcontent">
      <van-search
        v-model="search"
        clearable
        shape="round"
        background="#ffffff"
        placeholder="请输入搜索关键词"
      />
    </div>
    <div class="infocontent">
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: undefined,
      items: [
        {
          text: "江苏",
          children: [
            { text: "南京", id: 1 },
            { text: "无锡", id: 2 },
            { text: "苏州", id: 3 },
            { text: "常州", id: 4 },
            { text: "镇江", id: 5 },
            { text: "南通", id: 6 },
            { text: "盐城", id: 7 },
            { text: "淮安", id: 8 },
            { text: "徐州", id: 9 },
            { text: "宿迁", id: 10 },
            { text: "泰州", id: 11 },
            { text: "扬州", id: 12 },
            { text: "连云港", id: 13 },
          ],
        },
        {
          text: "浙江",
          children: [
            { text: "杭州", id: 1 },
            { text: "舟山", id: 2 },
            { text: "xx", id: 3 },
          ],
        },
      ],
      activeId: 1,
      activeIndex: 0,
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
  background-color: #f7f8fa;
  .searchcontent {
    height: 53px;
  }
  .infocontent {
    height: calc(100% - 53px);
    overflow: auto;
  }
  .infocontent /deep/ .van-tree-select{
    height: 100%!important;
    border-top: #f7f8fa 1px solid;
  }
}
</style>