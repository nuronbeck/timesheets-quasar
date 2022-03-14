<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      isDarkMode: false,
    };
  },
  watch: {
    '$q.dark.isActive': function (val) {
      this.isDarkMode = val;

      // console.log(val ? 'On dark mode' : 'On light mode');
    },
  },
};
</script>
