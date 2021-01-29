import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import "./assets/css/common.css";

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 引入 lib-flexible
import "lib-flexible/flexible"

import global_ from './components/Global'//引用文件
Vue.prototype.nyy = global_//挂载到Vue实例上面



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

