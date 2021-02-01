<template>
  <div class="fullscreen">
    <van-form @submit="onSubmit" style="height: 100%">
      <patient-model>
        <template #content>
          <van-field
            readonly
            clickable
            :value="form.relation"
            name="relation"
            label="关系"
            placeholder="点击选择关系"
            @click="relationPicker = true"
            :rules="[{ required: true, message: '请选择关系' }]"
          />
          <van-popup v-model="relationPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="relationList"
              value-key="val"
              @confirm="relationConfirm"
              @cancel="relationPicker = false"
            />
          </van-popup>
          <van-field
            v-model="form.name"
            :disabled="type === 'edit'"
            name="name"
            label="姓名"
            placeholder="请输入姓名"
            :rules="[{ required: true, message: '请填写姓名' }]"
          />
          <van-field
            :disabled="type === 'edit'"
            v-model="form.id"
            type="number"
            name="id"
            label="身份证号"
            placeholder="请输入身份证号"
            :rules="[
              { required: true, message: '请填写身份证号' },
              { validator: idcardCheck, message: '请检查身份证号是否正确' },
            ]"
          />
          <van-field
            readonly
            clickable
            v-model="form.cardtype"
            name="cardtype"
            label="卡类型"
            placeholder="请选择卡类型"
            @click="cardtypePicker = true"
            :rules="[{ required: true, message: '请选择卡类型' }]"
          />
          <van-popup v-model="cardtypePicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="cardtypeList"
              value-key="val"
              @confirm="cardtypeConfirm"
              @cancel="cardtypePicker = false"
            />
          </van-popup>
          <van-field
            v-model="form.cardno"
            name="cardno"
            label="卡号码"
            placeholder="请输入卡号码"
            :rules="[{ required: true, message: '请填写卡号码' }]"
          />
          <van-field
            v-model="form.phone"
            type="tel"
            name="phone"
            label="手机号码"
            placeholder="请输入手机号码"
            :rules="[
              { required: true, message: '请填写手机号码' },
              { validator: phoneCheck, message: '请检查手机号码是否正确' },
            ]"
          />
          <van-field
            name="pdefault"
            label="设为默认就诊人"
            input-align="right"
            label-width="7.2em"
          >
            <template #input>
              <van-switch v-model="form.pdefault" size="24" />
            </template>
          </van-field>
        </template>
        <template #btnarea>
          <van-row v-if="type === 'edit'">
            <van-col :span="12">
              <van-button
                plain
                round
                block
                type="info"
                style="width: 85%; margin: 0 auto"
                native-type="button"
                @click="deletePatient(form.name,form.id)"
              >
                删除就诊人
              </van-button>
            </van-col>
            <van-col :span="12">
              <van-button
                round
                block
                type="info"
                native-type="submit"
                style="width: 85%; margin: 0 auto"
              >
                保存
              </van-button>
            </van-col>
          </van-row>

          <van-row v-else>
            <van-col :span="24" style="padding: 0 16px">
              <van-button round block type="info" native-type="submit">
                提交
              </van-button>
            </van-col>
          </van-row>
        </template>
      </patient-model>
    </van-form>
  </div>
</template>
<script>
import patientModel from "./patientModel";
import { patientList } from "./data";
export default {
  data() {
    return {
      type: undefined,
      form: {
        relation: "",
        name: "",
        id: "",
        cardtype: "",
        cardno: "",
        phone: "",
        pdefault: "",
      },
      relationPicker: false,
      cardtypePicker: false,
      relationList: [],
      cardtypeList: [],
      patientList: patientList,
    };
  },
  watch: {},
  components: { patientModel },
  computed: {},
  methods: {
    getUserInfo(id) {
      var item = {};
      for (var i = 0; i < this.patientList.length; i++) {
        if (this.patientList[i].id == id) {
          item = this.patientList[i];
          break;
        }
      }
      this.form.relation = item.relation;
      this.form.name = item.name;
      this.form.id = item.id;
      this.form.cardtype = item.cardtype;
      this.form.cardno = item.cardno;
      this.form.phone = item.phone;
      this.form.pdefault = Number(item.default);
    },
    onSubmit(values) {
      // 表单提交
      console.log("表单数据", values);
      this.$notify({ type: 'success', message: '保存成功' });
      this.goback();
    },

    deletePatient(name,id) {
      // 删除就诊人
      console.log("delete" + name + " " + id);
      this.$dialog
        .confirm({
          title:"确认删除该就诊人吗？",
          message: name + '\n' + id,
          confirmButtonText: "确定",
          confirmButtonColor: "#268efd",
        })
        .then(() => {
          // 确认操作 进行删除操作
          var success = true
          if(success){
            this.$notify({ type: 'success', message: '删除成功' });
            this.goback();
          }
        })
        .catch(() => {
          // 取消操作 直接关闭弹出框
        });
    },

    getRelationList() {
      // 获取关系类型列表
      this.relationList = ["本人", "父母", "配偶", "子女", "其他"];
    },
    relationConfirm(val) {
      // 选择关系类型
      this.form.relation = val;
      this.relationPicker = false;
    },

    getCardtypeList() {
      // 获取卡类型列表
      this.cardtypeList = ["就诊卡"];
    },
    cardtypeConfirm(val) {
      // 选择卡类型
      this.form.cardtype = val;
      this.cardtypePicker = false;
    },
    formReset() {
      // 重置表单
      this.form = {
        relation: "",
        name: "",
        id: "",
        cardtype: "",
        cardno: "",
        phone: "",
        pdefault: "",
      };
    },
    idcardCheck(val) {
      //身份证号码正则判断
      let reg_idcard18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      let reg_idcard15 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/;
      let sign_idcard18 = RegExp(reg_idcard18).test(val);
      let sign_idcard15 = RegExp(reg_idcard15).test(val);
      return sign_idcard18 || sign_idcard15;
    },
    phoneCheck(val) {
      // 手机号正则判断
      let reg_phone = /^[1][3,4,5,7,8][0-9]{9}$/;
      let sign_phone = RegExp(reg_phone).test(val);
      return sign_phone;
    },
    goback(){
      // 返回上层页面
      this.$router.go(-1)
    },
  },
  created: function () {},
  activated() {
    this.formReset();
    this.getRelationList();
    this.getCardtypeList();
    // 获取type类型
    this.type = this.$route.query.type;
    if (this.type === "edit") {
      var id = this.$route.query.id;
      this.getUserInfo(id);
    }
  },
};
</script>
<style lang="less" scoped>
.fullscreen /deep/ .content {
  padding: 0 0 40px 0;
}
.fullscreen /deep/ .btnarea {
  padding: 8px 0;
}
</style>