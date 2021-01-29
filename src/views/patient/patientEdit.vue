<template>
  <div style="height: 100%">
    <patient-model>
      <template #content>aaa</template>
      <template #btnarea>bbb</template>
    </patient-model>
  </div>
</template>
<script>
import patientModel from "./patientModel";
export default {
  data() {
    return {
      type: undefined,
    };
  },
  watch: {},
  components: { patientModel },
  computed: {},
  methods: {
    getUserInfo(idno) {
      console.log(idno);
    },
  },
  created: function () {},
  activated() {
    // 获取type类型
    this.type = this.$route.query.type;
    if (this.type === "edit") {
      var idno = this.$route.query.idno;
      this.getUserInfo(idno);
    }
  },
};
</script>
<style lang="less" scoped>
</style>