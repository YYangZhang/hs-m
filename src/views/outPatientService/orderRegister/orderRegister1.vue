<template>
  <div class="fullscreen">
    <div class="searchcontent">
      <!-- <van-search
        v-model="search"
        clearable
        shape="round"
        background="#268efc"
        placeholder="请输入搜索关键词"
      /> -->
    </div>
    <div class="infocontent">
      <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex"
        @click-item="selectDepart"
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
          text: "外科",
          children: [
            { text: "心胸外科", id: 14 },
            { text: "神经外科", id: 2 },
            { text: "肝胆外科", id: 3 },
            { text: "泌尿外科", id: 4 },
            { text: "肛肠外科", id: 5 },
            { text: "骨科", id: 6 },
            { text: "烧伤外科", id: 17 },
            { text: "烧伤外科", id: 18 },
            { text: "烧伤外科", id: 19 },
            { text: "烧伤外科", id: 20 },
            { text: "烧伤外科", id: 21 },
            { text: "烧伤外科", id: 22 },
            { text: "烧伤外科", id: 23 },
            { text: "烧伤外科", id: 24 },
            { text: "烧伤外科", id: 25 },
            { text: "烧伤外科", id: 26 },
            { text: "烧伤外科", id: 27 },
            { text: "烧伤外科", id: 28 },
            { text: "烧伤外科", id: 29 },
          ],
        },
        {
          text: "内科",
          children: [
            { text: "呼吸内科", id: 8 },
            { text: "消化内科", id: 9 },
            { text: "心血管内科", id: 10 },
            { text: "神经内科", id: 11 },
            { text: "肿瘤科", id: 12 },
            { text: "内分泌科", id: 13 },
            { text: "血液内科", id: 14 },
            { text: "传染病科", id: 15 },
            { text: "小儿呼吸内科", id: 16 },
          ],
        },
      ],
      activeId: undefined,
      activeIndex: 0,
    };
  },
  watch: {},
  components: {},
  computed: {},
  methods: {
    selectDepart() {
      var data = this.items[this.activeIndex].children;
      var item = data.find((item) => {
        if (item.id === this.activeId) {
          return item;
        }
      });
      this.$router.push({
        path: "/orderRegister2",
        query: { item: JSON.stringify(item) },
      });
    },
  },
  created: function () {},
  activated() {
    this.activeId = undefined;
  },
};
</script>
<style lang="less" scoped>
.fullscreen {
  background-color: #f7f8fa;
  .searchcontent {
    height: 53px;
    background-color: #268efc;
  }
  .infocontent {
    height: calc(100% - 53px);
    overflow: auto;
  }
  .infocontent /deep/ .van-tree-select {
    height: 100% !important;
  }
  .infocontent /deep/ .van-tree-select__nav {
    flex: 2;
  }
  .infocontent /deep/ .van-tree-select__content {
    flex: 3;
  }
  .infocontent /deep/ .van-sidebar-item--select::before {
    background-color: #268efc;
  }
}
</style>