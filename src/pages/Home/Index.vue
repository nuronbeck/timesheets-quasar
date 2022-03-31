<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />
    <page-heading :label="$route.path" />
  </div>
</template>

<script>
export default {
  name: 'Time',
};
</script>
