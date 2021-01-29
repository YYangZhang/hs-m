<template>
  <div class="titleDiv">
      <div class="contentDiv">
          {{title}}
      </div>
  </div>
</template>
<script>
export default {
  name: "service-title",
  data() {
    return {};
  },
  watch: {},
  components: {},
  computed: {},
  methods: {},
  created: function () {},
  activated() {},
  props: {
    title: String,
  },
};
</script>
<style lang="less" scoped>
.titleDiv {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding: 0 16px;
  color: #1dbac2;
  background-color: #ffffff;
  .contentDiv{
      width: 100%;
      height: 100%;
      border-bottom: #ebedf0 1px solid;
  }
}
</style>