import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
require("../scss/styles.scss");

Vue.component("LayoutDemo", "@/layouts/demo");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
