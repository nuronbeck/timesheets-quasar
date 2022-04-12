<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />

    <div class="q-pa-md q-pa-lg-lg q-mb-lg bg-white rounded-borders">
      <page-heading label="Add client" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsAdd',
};
</script>
