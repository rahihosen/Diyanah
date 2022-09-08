export const auth = {
  state: {
    isAuthenticated: false,
    user: null,
  },
  actions: {
    login({ commit }, user) {
      console.log("login", user);
      commit("setUser", user);
      commit("setIsAuthenticated", true);
    },
    logout({ commit }) {
      commit("setUser", null);
      commit("setIsAuthenticated", false);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },

  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    user(state) {
      return state.user;
    },
  },
};
