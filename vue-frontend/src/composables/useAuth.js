import Cookie from "js-cookie";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default function useAuth() {
  const store = useStore();
  const router = useRouter();
  const credentialErrors = ref([]);

  function getCookie() {
    // Gets the CSRF token
    const CSRF_TOKEN = Cookie.get("XSRF-TOKEN");

    if (CSRF_TOKEN) {
      return new Promise((resolve) => {
        resolve(CSRF_TOKEN);
      });
    }

    return axios.get("csrf-cookie");
  }

  async function register(form) {
    await getCookie();

    axios
      .post("register", form)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "Your signed in successfully",
        });
        login(form);
      })
      .catch((error) => {
        credentialErrors.value = error.response.data.errors;
      });
  }

  async function login(form) {
    axios
      .post("login", form)
      .then((response) => {
        if (response.data.status) {
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          store.dispatch("login", response.data);
          Toast.fire({
            icon: "success",
            title: "Your logged in successfully",
          });
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          credentialErrors.value = error.response.data.errors;
        } else {
          console.log(error);
        }
      });
  }

  async function logout() {
    axios
      .post("logout")
      .then(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        store.dispatch("logout");
        Toast.fire({
          icon: "success",
          title: "Your logged out successfully",
        });
        if (router.currentRoute.value.meta.requiresAuth) {
          router.push({ name: "home" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return {
    register,
    login,
    logout,
    credentialErrors,
  };
}
