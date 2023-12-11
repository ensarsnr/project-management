import "./style.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./pages/auth/Login.vue";
import Register from "./pages/auth/Register.vue";
import Dashboard from "./pages/Dashboard.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
