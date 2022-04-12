<template>
  <q-layout class="bg-grey-1">
    <DashboardHeader />

    <q-page-container>
      <q-page class="q-py-sm q-py-md-md">

          <router-view />

          <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
        </q-page>
    </q-page-container>

    <DashboardLeftMenu />
  </q-layout>
</template>

<script>
import { desktopLinks } from '@constants/headerMenuLinks';
import DashboardHeader from '@components/Dashboard/DashboardHeader.vue';
import DashboardLeftMenu from '@components/Dashboard/DashboardLeftMenu.vue';

export default {
  name: 'MyLayout',
  components: {
    DashboardHeader,
    DashboardLeftMenu,
  },
  data() {
    return {
      desktopLinks,
    };
  },
};
</script>
