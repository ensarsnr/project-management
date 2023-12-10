import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
