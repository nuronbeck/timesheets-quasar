<template>
 <h5 class="q-ma-none q-mb-md">{{ label }}</h5>
</template>

<script>
export default {
  name: 'PageHeading',
  props: {
    label: {
      type: String,
      default: () => '',
    },
  },
};
</script>
