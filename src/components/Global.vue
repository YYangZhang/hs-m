<script>
var user;
let loading = false;

import CONST from "./Const.vue";

const appkey = "Authorization";
const appsecretHead = "Bearer ";
const domain = CONST.domain;

import Vue from "vue";
import axios from "axios";

const bus = new Vue();

const dopost = function(v, url, data, onSucceed, onFailure, onComplete) {
  //var user = v.nyy.userInfo;
  axios.defaults.headers.common[appkey] = user
    ? appsecretHead + user.token
    : "";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  v.nyy.bus.$emit("loading", true);
  axios({
    method: "post",
    url: "http://" + domain + url,
    timeout: 50000,
    data: data
  })
    .then(function(response) {
      v.nyy.bus.$emit("loading", false);
      if (onSucceed) onSucceed(response.data);
      if (onComplete) onComplete();
    })
    .catch(function(error) {
      v.nyy.bus.$emit("loading", false);
      if (onFailure) onFailure(error);
      if (onComplete) onComplete();
      if (!(onFailure || onComplete)) {
        //v.$toast({message: '网络好像开小差了。。。', position: 'bottom', duration: 5000});
        v.$message.error("网络好像开小差了。。。");
      }
    });
};


const notify =  function(v ,type, title , msg,callback ){
     v.$notify({
      title: title,
      dangerouslyUseHTMLString: true,
      type:type,
      message: msg,
      showClose: true,
      onClick:callback,
      position: 'bottom-right'
    });
};
const alert = function(v, msg, callback) {
  v.$alert(msg, "提示", {
    confirmButtonText: "确定",
    callback: callback
  });
};
const confirm = function(v, msg, callback) {
  v.$confirm(msg, "确认", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    closeOnClickModal: false,
    closeOnPressEscape: false,
    closeOnHashChange: false,
    showClose: false,
    type: "info"
  })
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
};
const doUpload = function(v, url, formData, onSucceed, onFailure, onComplete) {
  //var user = v.nyy.userInfo;
  axios.defaults.headers.common[appkey] = user
    ? appsecretHead + user.token
    : "";
  axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

  v.nyy.bus.$emit("loading", true);
  axios({
    method: "post",
    url: "http://" + domain + url,
    timeout: 50000,
    data: formData
  })
    .then(function(response) {
      v.nyy.bus.$emit("loading", false);
      if (onSucceed) onSucceed(response.data);
      if (onComplete) onComplete();
    })
    .catch(function(error) {
      v.nyy.bus.$emit("loading", false);
      if (onFailure) onFailure(error);
      if (onComplete) onComplete();
      if (!(onFailure || onComplete)) {
        //v.$toast({message: '网络好像开小差了。。。', position: 'bottom', duration: 5000});
        v.$message.error("网络好像开小差了。。。");
      }
    });
};
const doDownload = function(v, url, data, onSucceed, onFailure, onComplete) {
  //var user = v.nyy.userInfo;
  axios.defaults.headers.common[appkey] = user
    ? appsecretHead + user.token
    : "";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  v.nyy.bus.$emit("loading", true);
  axios({
    method: "post",
    url: "http://" + domain + url,
    timeout: 500000,
    data: data,
    responseType: "arraybuffer"
  })
    .then(function(response) {
      v.nyy.bus.$emit("loading", false);
      if (onSucceed) onSucceed();
      if (onComplete) onComplete();
      let data = response.data;
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(new Blob([data]));
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      var contentDisposition = response.headers["content-disposition"];
      var patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
      var result = patt.exec(contentDisposition);
      var filename = result[1];
      var reg = /^["](.*)["]$/g;
      link.setAttribute("download", decodeURIComponent(filename.replace(reg,"$1")));
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch(function(error) {
      v.nyy.bus.$emit("loading", false);
      if (onFailure) onFailure(error);
      if (onComplete) onComplete();
      if (!(onFailure || onComplete)) {
        //v.$toast({message: '网络好像开小差了。。。', position: 'bottom', duration: 5000});
        v.$message.error("网络好像开小差了。。。");
      }
    });
};

export default {
  get userInfo() {
    return user;
  },
  set userInfo(val) {
    user = val;
  },
  // //用户token身份
  dopost,
  CONST, //固定值
  bus,
  loading,
  doUpload,
  doDownload,
  alert,
  confirm,
  notify,
  message: function(v, type, msg, duration) {
    v.$message({
      type: type,
      dangerouslyUseHTMLString: true,
      message: msg,
      duration: duration ? duration : 6000,
      showClose: true
    });
  }
};

</script>