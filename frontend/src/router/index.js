import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
