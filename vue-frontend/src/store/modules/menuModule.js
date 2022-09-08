export const menuModule = {
  state: {
    list: [],
    activeMenu: null,
    activeSubMenu: null,
    activeSubSubMenu: null,
    subMenu: false,
    subSubMenu: false,
    subSubSubMenu: false,
    status: false,
    clickItem: null,
  },
  mutations: {
    getMenus(state) {
      axios
        .get("categoriesApi")
        .then(({ data }) => {
          const menus = addActiveKey(data);
          state.list = menus;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  actions: {
    meneItemClick({ commit, state }, menu) {
      const newList = state.list.map((item) => {
        if (item.id == menu.id) {
          state.subMenu = !item.active;
          item.active = !item.active;
          state.activeMenu = item;
          if (item.children.length < 1) {
            state.clickItem = item;
          }
        } else {
          item.active = false;
        }
        return item;
      });
      state.list = newList;
    },
    subMenuItemClick({ commit, state }, subMenu) {
      const newList = state.list.map((item) => {
        if (state.activeMenu.id == item.id) {
          if (item.children.length > 0) {
            item.children.map((sub) => {
              if (sub.id == subMenu.id) {
                state.subSubMenu = !sub.active;
                sub.active = !sub.active;
                state.activeSubMenu = sub;
                if (sub.children.length < 1) {
                  state.clickItem = item;
                }
              } else {
                sub.active = false;
              }
              return sub;
            });
          }
        }
        return item;
      });
      state.list = newList;
    },

    subSubMenuItemClick({ commit, state }, subSubMenu) {
      const newList = state.list.map((menu) => {
        if (state.activeMenu.id == menu.id) {
          if (menu.children.length > 0) {
            menu.children.map((sub) => {
              if (state.activeSubMenu.id == sub.id) {
                if (sub.children.length > 0) {
                  sub.children.map((subSub) => {
                    if (subSub.id == subSubMenu.id) {
                      state.subSubSubMenu = !subSub.active;
                      subSub.active = !subSub.active;
                      state.activeSubSubMenu = subSub;
                      if (subSub.children.length < 1) {
                        state.clickItem = subSub;
                      }
                    } else {
                      subSub.active = false;
                    }
                    return subSub;
                  });
                }
              }
              return sub;
            });
          }
        }
        return menu;
      });
      state.list = newList;
    },
  },

  getters: {
    getMenuList(state) {
      return state.list;
    },
    clickItem: (state) => state.clickItem,
  },
};

const addActiveKey = (list) => {
  if (list.length) {
    list.forEach((item) => {
      item.active = false;
      addActiveKey(item.children);
    });
  }
  return list;
};
