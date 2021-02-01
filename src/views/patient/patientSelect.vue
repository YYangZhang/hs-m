<template>
  <div style="height: 100%">
    <patient-model>
      <template #content>
        <van-radio-group v-model="selected">
          <div
            class="van-address-item patList"
            v-for="(item, i) in userList"
            :key="i"
          >
            <van-cell center>
              <template #title>
                <van-radio :name="i" icon-size="16" @click="changeDefault(i)">
                  <div>
                    <div class="name">
                      <span>{{ item.name }}</span>
                      <van-tag
                        type="primary"
                        class="detag"
                        v-if="item.default === '1'"
                        >默认</van-tag
                      >
                    </div>
                    <span class="idcard">{{ item.id }}</span>
                  </div>
                </van-radio>
              </template>
              <template #default>
                <div class="editdiv">
                  <i
                    class="iconfont iconbianji"
                    @click="editPatient('edit', item.id)"
                  ></i>
                </div>
              </template>
            </van-cell>
          </div>
        </van-radio-group>
      </template>
      <template #btnarea>
        <van-button
          round
          type="info"
          style="width: 100%"
          @click="addPatient('add')"
        >
          添加就诊人
        </van-button>
      </template>
    </patient-model>
  </div>
</template>
<script>
import patientModel from "./patientModel";
import { patientList } from "./data";
export default {
  data() {
    return {
      selected: undefined,
      userList: patientList,
    };
  },
  watch: {},
  components: { patientModel },
  computed: {},
  methods: {
    changeDefault(idx) {
      console.log(idx);
    },
    editPatient(type, id) {
      // 编辑就诊人
      this.type = type;
      this.$router.push({
        path: "/patientEdit",
        query: { type: type, id: id },
      });
    },
    addPatient(type) {
      // 添加就诊人
      this.$router.push({
        path: "/patientEdit",
        query: { type: type },
      });
    },
  },
  created: function () {},
  activated() {
    console.log("刷新");
  },
};
</script>
<style lang="less" scoped>
.patList /deep/ .van-cell__value {
  flex: unset;
}
.patList {
  border: #ebedf0 1px solid;
  .name {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    .detag {
      margin-left: 8px;
    }
  }
  .idcard {
    display: block;
    font-size: 14px;
    color: #999999;
  }
  .editdiv {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 4px;
    .iconfont {
      font-size: 40px;
      color: #02c9bf;
    }
  }
}
</style>