<template>
  <div class="home-layout">
    <video autoplay muted>
      <source type="video/webm" :src="require('@assets/home-parallax/time-is-spinning.webm')">
      <source type="video/mp4" :src="require('@assets/home-parallax/time-is-spinning.mp4')">
    </video>

    <div class="home-layout__content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { fabGithub } from '@quasar/extras/fontawesome-v5';
import { desktopLinks } from '@constants/headerMenuLinks';

export default {
  name: 'MyLayout',
  data() {
    return {
      desktopLinks,
    };
  },
  created() {
    this.fabGithub = fabGithub;
  },
};
</script>

<style lang="scss" scoped>
.home-layout {
  position: relative;
  background: $grey-1;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;

  video {
    object-fit: cover;
  }

  &__content, video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
