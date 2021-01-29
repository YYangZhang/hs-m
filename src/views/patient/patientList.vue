<template>
  <div style="height: 100%">
    <patient-model>
      <template #content>
        <div
          class="van-address-item patList"
          v-for="(item, i) in userList"
          :key="i"
        >
          <van-cell center>
            <template #title>
              <span class="name">{{ item.name }}</span>
              <span class="idcard">身份证号：{{ item.id }}</span>
              <van-radio
                name="1"
                v-model="item.defalut"
                icon-size="16"
                @click="changeDefault(i)"
              >
                {{ item.defalut === "1" ? "默认就诊人" : "设为默认就诊人" }}
              </van-radio>
            </template>
            <template #default>
              <div class="editdiv">
                <i class="iconfont iconbianji" @click="editPatient('edit',i)"></i>
              </div>
            </template>
          </van-cell>
        </div>
      </template>
      <template #btnarea>
        <van-button round type="info" style="width: 100%" @click="addPatient('add')">
          添加就诊人
        </van-button>
      </template>
    </patient-model>
  </div>
</template>
<script>
import patientModel from "./patientModel";
export default {
  data() {
    return {
      userList: [
        {
          name: "userZyy",
          id: "320683199607272525",
          defalut: "1",
        },
        {
          name: "孙悟空",
          id: "320582166005051952",
          defalut: "0",
        },
        {
          name: "无敌胖",
          id: "320582166666651952",
          defalut: "0",
        },
        {
          name: "卢锡安",
          id: "336688110002067777",
          defalut: "0",
        },
        {
          name: "亚瑟",
          id: "888888888888888888",
          defalut: "0",
        },
        {
          name: "斯沃特",
          id: "666666666666666666",
          defalut: "0",
        },
      ],
    };
  },
  watch: {},
  components: { patientModel },
  computed: {},
  methods: {
    changeDefault(idx) {
      this.userList[idx].defalut = "1";
      for (var i = 0; i < this.userList.length; i++) {
        if (i === idx) {
          // continue;
        } else {
          this.userList[i].defalut = "0";
        }
      }
    },
    editPatient(type,idx) {
      // 编辑就诊人
      this.type = "edit";
      console.log(idx);
    },
    addPatient(type) {
      // 添加就诊人
      this.$router.push({
        path: "/patientEdit",
        query: { type: type },
      });
    },
  },
  created: function () {
    document.title = "我的就诊人";
  },
  activated() {},
};
</script>
<style lang="less" scoped>
.patList /deep/ .van-cell__value {
  flex: unset;
}
.patList {
  border: #ebedf0 1px solid;
  .name {
    display: block;
    font-size: 16px;
  }
  .idcard {
    display: block;
    font-size: 14px;
    color: #999999;
    margin-bottom: 6px;
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