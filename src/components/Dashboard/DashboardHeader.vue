<template>
  <q-header class="dashboard-header text-white bg-accent">
    <div class="container">
      <div class="dashboard-header__inner flex items-center justify-between">
        <div class="dashboard-header__navigation">
          <q-btn
            flat
            aria-label="Menu"
            icon="menu"
            class="dashboard-header__navigation-link q-mr-sm lt-sm"
            @click="SET_SHOW_LEFT_MENU(!showLeftMenu)"
          />

          <template v-for="desktopLink in desktopLinks" >
            <q-btn
              :label="desktopLink.label"
              :key="`header-desktop-link__${desktopLink.key}`"
              :icon="desktopLink.icon"
              :to="desktopLink.link"
              class="dashboard-header__navigation-link gt-xs"
              :class="{ active: isRouteActivePath(desktopLink.link) }"
              flat
              text-color="white"
              no-caps
            />
          </template>
        </div>

        <div class="dashboard-header__account">
          <q-btn class="dashboard-header__account-dropdown" flat no-wrap>
            <q-no-ssr>
              <q-avatar
                :color="userPhotoUrl ? undefined : 'grey-9'"
                :text-color="userPhotoUrl ? undefined : 'white'"
                size="30px"
                rounded
              >
                <span v-if="!userPhotoUrl">N</span>
                <img v-else :src="userPhotoUrl" />
              </q-avatar>
            </q-no-ssr>

            <q-no-ssr>
              <strong class="q-pl-sm dashboard-header__account-name">
                <span v-if="isLoggedIn && user">
                  {{ user.displayName }}
                </span>
              </strong>
            </q-no-ssr>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu fit auto-close>
              <q-list>
                <q-item>
                  <q-item-section>
                    <strong>Nurbek Ismoilov</strong>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable >
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable @click="logout">
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </div>
  </q-header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { getAuth, signOut } from 'firebase/auth';
import { desktopLinks } from '@constants/headerMenuLinks';

export default {
  name: 'DashboardHeader',
  data() {
    return {
      desktopLinks,
    };
  },
  computed: {
    isRouteActivePath() {
      return (path) => {
        const currentPath = this.$route.path;
        if (path === '/dashboard' && currentPath === '/dashboard') {
          return true;
        }

        const [, currentChildPath] = currentPath.replace('/dashboard', '').split('/');
        const [, dashboardChildPath] = path.replace('/dashboard', '').split('/');
        return currentChildPath === dashboardChildPath;
      };
    },
    ...mapGetters({
      showLeftMenu: 'ui/showLeftMenu',
      isLoggedIn: 'auth/isLoggedIn',
      user: 'auth/user',
      userPhotoUrl: 'auth/userPhotoUrl',
    }),
  },
  methods: {
    ...mapMutations({
      SET_SHOW_LEFT_MENU: 'ui/SET_SHOW_LEFT_MENU',
    }),
    logout() {
      signOut(getAuth());
      this.$router.push('/')
        .then(() => {
          this.$q.notify({
            type: 'positive',
            message: 'Sign Out Success.',
          });
        })
        .catch((error) => {
          this.$q.notify({
            type: 'negative',
            message: `Error sign out! ${error}`,
          });
        });
    },
  },
};
</script>

<style lang="scss">
.dashboard-header {

  &__navigation,
  &__navigation-link,
  &__account,
  &__account-dropdown {
    min-height: 3rem;
  }

  &__navigation-link {
    border-radius: 0;

    &.active {
      background: rgba(255,255,255, .15);
      border-bottom: 2px solid $primary;
    }
  }

  &__account-name {
    text-transform: none;
  }
}
</style>
