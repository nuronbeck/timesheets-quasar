<template>
  <div class="auth__login-form q-pa-xl q-mb-xl bg-white shadow-10">
    <div class="auth__login-form-avatar flex flex-center q-mb-sm">
      <q-avatar size="70px" color="primary" text-color="white" icon="account_circle" />
    </div>

    <div class="flex flex-center q-pb-sm">
      <page-heading label="Sign in" />
    </div>

    <div class="flex flex-center">
      <q-btn
        class="login-button q-px-none"
        color="primary"
        text-color="white"
        align="left"
        unelevated
        no-caps
        size="16px"
        padding="2px"
        @click="login"
      >
        <div class="login-button__inner row justify-left items-center">
          <q-img class="login-button__icon bg-white q-mr-lg" src="@assets/icons/google-small-icon.svg" />
          <span>Login with google</span>
        </div>
      </q-btn>
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
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: 'Congratulations! You are logged in!',
          });

          this.$router.push('/dashboard');
        })
        .catch((err) => {
          if (err?.code !== 'auth/popup-closed-by-user') {
            this.$q.notify({
              type: 'negative',
              message: `Ups! Try again a bit later. ${err}`,
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth__login-form {
  width: 86%;
  max-width: 450px;
}

.login-button {

  &__inner {
    min-width: 250px;
  }

  &__icon {
    max-width: 44px;
  }
}
</style>
