import Vue from "vue";
import app from "./app.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
require("../scss/styles.scss");

Vue.component("LayoutDemo", "@/layouts/demo");

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app");
