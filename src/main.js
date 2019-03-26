import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueRouter from "vue-router";
import Favorites from "./views/Favorites";

import Home from "./views/Home";
import Pets from "./views/Pets";
import store from "./store/store";
import Form from "./views/Form";

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets },
  { path: "/favorites", component: Favorites },
  { path: "/form", component: Form }
];
const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router,
  store
});
