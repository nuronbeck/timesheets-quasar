<template>
  <div class="auth__login-form q-pa-xl q-mb-xl">
    <div class="auth__login-form-avatar flex flex-center q-mb-sm">
      <q-avatar size="70px" color="accent" text-color="white" icon="account_circle" />
    </div>

    <div class="flex flex-center q-pb-sm">
      <page-heading label="Sign in" />
    </div>

    <div class="flex flex-center">
      <q-btn
        icon="mail"
        label="Login with google"
        color="accent"
        text-color="white"
        align="left"
        unelevated
        no-caps
        @click="login"
      />
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default {
  name: 'Login',
  methods: {
    login() {
      signInWithPopup(getAuth(), new GoogleAuthProvider())
        .then((res) => {
          console.log(res);
          this.$router.push('/dashboard');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth__login-form {
  width: 100%;
  max-width: 350px;
  background: $grey-4;
}
</style>
