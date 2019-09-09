import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import AlleyUI from "@lib"
import "@common/style/index.css";
import "@common/filter"
import "@lib/loading/index.js";
Vue.config.productionTip = false
Vue.use(AlleyUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
