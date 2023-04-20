import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

createApp(App)
  .use(router)
  .mount("#app");
