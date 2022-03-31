<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export default {
  name: 'App',
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    ...mapMutations({
      SET_AUTH_USER: 'auth/SET_AUTH_USER',
      SET_AUTH_TOKEN: 'auth/SET_AUTH_TOKEN',
    }),
  },
  created() {
    onAuthStateChanged(getAuth(), (authData) => {
      if (authData) {
        const {
          uid, email, photoURL, stsTokenManager: { accessToken, expirationTime, refreshToken } = {},
        } = authData;
        this.SET_AUTH_USER({ uid, email, photoURL });
        this.SET_AUTH_TOKEN({ accessToken, expirationTime, refreshToken });
      } else {
        this.SET_AUTH_USER(null);
        this.SET_AUTH_TOKEN(null);
      }
    });
  },
  watch: {
    '$q.dark.isActive': function (val) {
      this.isDarkMode = val;
    },
  },
};
</script>
