<template>
  <div class="fullscreen">
    <div class="userInfo">
      <div>
        <div class="icon">
          <van-image
            width="100%"
            height="100%"
            :src="advatar"
            fit="cover"
            :round="true"
            style="border: #ffffff 2px solid"
          />
        </div>
        <div class="name">{{ userName }}</div>
      </div>
    </div>
    <div>
      <van-cell
        v-for="(cell, idx) in cellList"
        :key="idx"
        :title="cell.title"
        center
        clickable
        @click="goto(cell.to)"
      >
        <template #icon>
          <van-icon
            :name="cell.icon"
            color="#94a7ba"
            size="18"
            class="cellright"
          />
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      advatar: require("../../assets/img/5.jpg"),
      userName: "userZyy",
      cellList: [
        {
          title: "我的就诊人",
          to: "/patientList",
          icon: "manager",
        },
        {
          title: "我的预约挂号",
          to: "/patientSelect",
          icon: "coupon",
        },
        {
          title: "门诊缴费记录",
          to: "/service",
          icon: "gold-coin",
        },
        {
          title: "住院缴费记录",
          to: "/menu",
          icon: "bill",
        },
      ],
      test: 'aaa',
    };
  },
  watch: {},
  components: {},
  computed: {},
  methods: {
    goto(url) {
      if (this.test) {
        // 如果已经登录 直接进行页面跳转
        this.$router.push(url);
      } else {
        this.$dialog.confirm({
            message: "请授权登录后再进行操作",
            confirmButtonText:"去登录",
            confirmButtonColor:"#268efd"
          })
          .then(() => {
            // 确认操作 拉起登录授权弹出框
            this.loginAuth();
          })
          .catch(() => {
            // 取消操作 直接关闭弹出框
          });
      }
    },
    loginAuth(){
      // 登录授权
      console.log('拉起了登录授权框')
    }
  },
  created: function () {},
  activated() {},
};
</script>
<style lang="less" scoped>
.fullscreen {
  background-color: #f0f2f8;
  .userInfo {
    width: 100%;
    height: 170px;
    // position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #268efc;
    .icon {
      width: 66px;
      height: 66px;
      // border-radius: 50%;
      // border: 2.5px solid #ffffff;
      // overflow: hidden;
      // display: flex;
      // justify-content: space-around;
      // align-items: center;
      // img {
      // width: 100%;
      // height: 100%;
      // }
    }
    .name {
      padding-top: 8px;
      text-align: center;
      font-size: 16px;
      color: #ffffff;
    }
  }
  .cellright {
    margin-right: 10px;
  }
}
</style>