import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/styles.scss";
import "@/components/_globals";
import "@/components/sections/_globals";
import "@/assets/icons/style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
