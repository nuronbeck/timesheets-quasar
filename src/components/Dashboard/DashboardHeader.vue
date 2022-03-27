<template>
  <q-header class="dashboard-header text-white">
    <div class="container">
      <div class="dashboard-header__inner flex items-center justify-between">
        <div class="dashboard-header__navigation">
          <template v-for="desktopLink in desktopLinks" >
            <q-btn
              :label="desktopLink.label"
              :key="`header-desktop-link__${desktopLink.key}`"
              :to="desktopLink.link"
              class="dashboard-header__navigation-link"
              :class="{ active: $route.path === desktopLink.link }"
              flat
              text-color="white"
              no-caps
            />
          </template>
        </div>

        <div class="dashboard-header__account">
          <q-btn class="dashboard-header__account-dropdown" flat no-wrap>
            <q-avatar rounded size="30px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg">
            </q-avatar>
            <strong class="q-pl-sm dashboard-header__account-name">Nurbek Ismoilov</strong>
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
                <q-item clickable >
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
import { desktopLinks } from '@constants/headerMenuLinks';

export default {
  name: 'DashboardHeader',
  data() {
    return {
      desktopLinks,
    };
  },
};
</script>

<style lang="scss">
.dashboard-header {
  background: $accent;

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
      border-bottom: 2px solid #fff;
    }
  }

  &__account-dropdown {

  }

  &__account-name {
    text-transform: none;
  }
}
</style>
