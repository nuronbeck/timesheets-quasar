export default {
  state: () => ({
    user: null,
    tokenResponse: null,
  }),

  mutations: {
    SET_AUTH_USER(state, payload) {
      state.user = payload;
    },
    SET_AUTH_TOKEN(state, payload) {
      state.tokenResponse = payload;
    },
  },

  getters: {
    isLoggedIn: (state) => {
      const { user } = state;
      return !!user && (typeof user === 'object') && Object.keys(user).length;
    },
  },

  actions: {
  },
};
