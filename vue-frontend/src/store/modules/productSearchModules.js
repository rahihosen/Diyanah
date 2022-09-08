import router from "../../router";

export const searchedProductModule = {
  state: {
    products: [],
  },
  mutations: {},
  actions: {
    searchProduct({ commit, state }, search) {
    //   router.push({ name: "search", params: { productName: search } });
      let endPoint = `/search/${search}`
      axios
        .get(endPoint)
        .then((response) => {
            state.products = response.data;
            router.push({ name: "search", params: { productName: search } });
        })
        .catch((error) => {
          console.log("errr==>", error);
        });
    },
  },

  getters: {},
};
