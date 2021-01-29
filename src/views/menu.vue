<template>
  <div class="fullscreen">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="tabbar">
      <van-tabbar
        v-model="active"
        active-color="#268efd"
        inactive-color="#cccccc"
        :border="true"
        :fixed="true"
        :route="true"
      >
        <van-tabbar-item name="service" to="/menu" :replace="true">
          医疗服务
          <template #icon>
            <i class="iconfont iconyiyuan tarbaricon"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item name="info" to="/info" :replace="true">
          医院信息
          <template #icon>
            <i class="iconfont iconHospital tarbaricon"></i>
          </template>
        </van-tabbar-item>
        <van-tabbar-item name="user" to="/user" :replace="true">
          个人中心
          <template #icon>
            <i class="iconfont iconzhanghao tarbaricon"></i>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "service"
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
.content {
  height: calc(100% - 50px);
  overflow: auto;
}
.tabbar {
  height: 50px;
  background-color: #999;
  .tarbaricon {
    font-size: 22px;
  }
}
.tabbar /deep/ .van-tabbar-item {
  font-size: 13px;
}
</style>