import { createApp } from "vue";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import App from "../App.vue";
import { cart } from "./cart";
import { auth } from "./modules/auth";
import { menuModule } from "./modules/menuModule";
import { searchedProductModule } from "./modules/productSearchModules";

const Store = createStore({
  // plugins: [createPersistedState()],
  modules: {
    cart,
    auth,
    menu: menuModule,
    searchedProducts: searchedProductModule
  },
});

const app = createApp(App);
app.use(Store);

export default Store;
