<template>
  <div class="home-page">
    <h1>Welcome to</h1>
    <h2>Avalon Timesheets!</h2>

    <div class="home-page__get-started-action d-flex">
      <q-btn @click="$router.push('/login')" class="glossy" color="orange-7" icon-right="send" label="Get started" size="lg" rounded no-caps />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  overflow: scroll;

  h1 {
    font-size: 68px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
  }

  h2 {
    text-align: center;
    margin-top: 0;
  }

  &__get-started-action {
    width: 100%;
    position: absolute;
    bottom: 10vh;
    left: 0;
    text-align: center;
  }
}
</style>
