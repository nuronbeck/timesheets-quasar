<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />

    <page-heading label="Add client" />
  </div>
</template>

<script>
export default {
  name: 'AddClient',
};
</script>
