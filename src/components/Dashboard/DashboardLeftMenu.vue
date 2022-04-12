<template>
  <q-drawer
    v-model="showLeftMenu"
    side="left"
    overlay
    behavior="mobile"
    bordered
  >
    <q-scroll-area class="fit">
      <q-list padding class="rounded-borders text-grey-8">
        <template v-for="desktopLink in desktopLinks">
          <q-item
            :key="desktopLink.key"
            :to="desktopLink.link"
            exact
            clickable
            v-ripple
          >
            <q-item-section v-if="desktopLink.icon" avatar>
              <q-icon color="primary" :name="desktopLink.icon" />
            </q-item-section>

            <q-item-section>{{ desktopLink.label }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { desktopLinks } from '@constants/headerMenuLinks';

export default {
  name: 'DashboardLeftMenu',
  computed: {
    showLeftMenu: {
      get() {
        return this.$store.getters['ui/showLeftMenu'];
      },
      set(value) {
        this.$store.commit('ui/SET_SHOW_LEFT_MENU', value, { root: true });
      },
    },
  },
  data() {
    return {
      desktopLinks,
    };
  },
};
</script>
