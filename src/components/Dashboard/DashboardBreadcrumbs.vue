<template>
  <q-breadcrumbs class="q-pa-md q-pa-lg-lg q-mb-md text-grey-7 bg-white rounded-borders" active-color="accent">
    <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="accent"
        />
      </template>

    <template v-for="breadCrumbsItem in breadcrumbsLocaled">
      <q-breadcrumbs-el
        :key="`breadCrumbsItem__${breadCrumbsItem.id}`"
        :label="breadCrumbsItem.label"
        :icon="breadCrumbsItem.icon"
        :to="breadCrumbsItem.to"
      />
    </template>
  </q-breadcrumbs>
</template>

<script>
export default {
  name: 'DashboardBreadcrumbs',
  computed: {
    breadcrumbsLocaled() {
      const localedBreadcrumbs = [];
      Object.keys(this.$route.meta.breadcrumbs).forEach((eachBreadKey) => {
        const {
          id, icon, label, to,
        } = this.$route.meta.breadcrumbs[eachBreadKey];
        localedBreadcrumbs.push({
          id, icon, label, to,
        });
      });

      return localedBreadcrumbs;
    },
  },
  props: {
    breadcrumbs: {
      type: [Array, Object],
      default: () => [],
    },
  },
};
</script>
