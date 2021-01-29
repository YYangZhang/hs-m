<template>
  <div class="fullscreen">
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="btnarea">
      <slot name="btnarea"></slot>
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
.fullscreen {
  height: 100%;
  background-color: #f7f8fa;
  .content {
    height: calc(100% - 60px);
    overflow: auto;
    padding: 12px 12px 40px;
  }
  .btnarea {
    height: 60px;
    text-align: center;
    background-color: #ffffff;
    padding: 8px 16px;
  }
}
</style>