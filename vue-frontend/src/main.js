import axios from "axios";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/media.css";
import "./assets/css/style.css";
import env from "./config/env.js";
import Router from "./router/index";
import Store from "./store/index.js";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueZoomer from "vue-zoomer";
import ZoomOnHover from "vue-zoom-on-hover";
import components from "./components";

// baseURL(server) for axios
axios.defaults.baseURL = env.BASE_API_URL;
axios.defaults.baseURLPublic = env.BASE_URL_PUBLIC;
axios.defaults.withCredentials = true;

window.axios = axios.create({
  baseURL: env.BASE_API_URL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("accessToken")
        ? localStorage.getItem("accessToken")
        : null
    }`,
  },
  responseType: "json",
  socketPath: null,
});
window.Store = Store;

// createApp(App).mount('#app')
const app = createApp(App);
app.use(Router);
app.use(Store);
app.use(VueSweetalert2);
app.use(VueZoomer);
app.use(ZoomOnHover);
window.Swal = app.config.globalProperties.$swal;
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.Toast = Toast;
components(app);
app.mount("#app");
