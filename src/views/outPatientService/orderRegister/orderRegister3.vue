<template>
  <div class="fullscreen">
    <div class="content">
        <van-field v-model="test" label="文本" placeholder="请输入用户名" />
    </div>
    <div class="btnarea">
      <van-button type="primary">主要按钮</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test:''
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
.fullscreen{
  border: red 1px solid;
  background-color: #f0f2f8;
  .content{
    height: calc(100% - 50px);
  }
  .btnarea{
    height: 50px;
    display: flex;
  }
}
</style>