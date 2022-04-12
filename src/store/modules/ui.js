export default {
  state: () => ({
    // Left drawer menu
    showLeftMenu: false,
  }),

  mutations: {
    SET_SHOW_LEFT_MENU(state, payload) {
      state.showLeftMenu = payload;
    },
  },

  getters: {
    showLeftMenu: (state) => state.showLeftMenu,
  },

  actions: {
  },
};
