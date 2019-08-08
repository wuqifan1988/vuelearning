import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Icon, Layout, Drawer, Radio, Tree } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Tree);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
