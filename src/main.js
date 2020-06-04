import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BootstrapVue } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const moment = require("moment");
require("moment/locale/fr");
Vue.use(require("vue-moment"), moment);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
