// https://forum.quasar-framework.org/topic/3306/how-to-make-vuex-store-persist/9

import createPersistedState from 'vuex-persistedstate';

const paths = ['auth'];

export default async ({ store }) => {
  window.setTimeout(() => {
    createPersistedState({
      paths,
    })(store);
  }, 0);
};
