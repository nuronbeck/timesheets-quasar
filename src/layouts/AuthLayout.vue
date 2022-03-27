<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-py-sm q-py-md-md flex flex-center">
        <router-view />
      </q-page>
    </q-page-container>

    <div class="absolute-full bg-animation">
      <div class='circle xxlarge shade1'></div>
      <div class='circle xlarge shade2'></div>
      <div class='circle large shade3'></div>
      <div class='circle mediun shade4'></div>
      <div class='circle small shade5'></div>

      <template v-for="(i, index) in 10">
        <div class="firefly" :key="`animation_firefly__${index}`"></div>
      </template>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>

<style lang="scss" scoped>
.bg-animation {
  background: $accent;
  max-height: 100%;
  overflow-y: hidden;
  z-index: -2;
}

.circle{
  position: absolute;
  border-radius: 50%;
  background: #fff;
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
}

.small{
  width: 200px;
  height: 200px;
  left: -100px;
  bottom: -100px;
}

.medium{
  width: 400px;
  height: 400px;
  left: -200px;
  bottom: -200px;
}

.large{
  width: 600px;
  height: 600px;
  left: -300px;
  bottom: -300px;
}

.xlarge{
  width: 800px;
  height: 800px;
  left: -400px;
  bottom: -400px;
}

.xxlarge{
  width: 1000px;
  height: 1000px;
  left: -500px;
  bottom: -500px;
}

.shade1{
  opacity: 0.2;
}
.shade2{
  opacity: 0.5;
}

.shade3{
  opacity: 0.7;
}

.shade4{
  opacity: 0.8;
}

.shade5{
  opacity: 0.9;
}

@keyframes ripple{
  0%{
    transform: scale(0.8);
  }

  50%{
    transform: scale(1.2);
  }

  100%{
    transform: scale(0.8);
  }
}
</style>

<style lang="sass" scoped>
$quantity: 15

.firefly
  position: fixed
  left: 50%
  top: 50%
  width: 0.4vw
  height: 0.4vw
  margin: -0.2vw 0 0 9.8vw
  animation: ease 200s alternate infinite
  pointer-events: none

  &::before,
  &::after
    content: ''
    position: absolute
    width: 100%
    height: 100%
    border-radius: 50%
    transform-origin: -10vw

  &::before
    background: black
    opacity: 0.4
    animation: drift ease alternate infinite

  &::after
    background: white
    opacity: 0
    box-shadow: 0 0 0vw 0vw yellow
    animation: drift ease alternate infinite, flash ease infinite

// Randomize Fireflies Motion
@for $i from 1 through $quantity

  $steps: random(12) + 16
  $rotationSpeed: random(10) + 8s

  .firefly:nth-child(#{$i})
    animation-name: move#{$i}

    &::before
      animation-duration: #{$rotationSpeed}

    &::after
      animation-duration: #{$rotationSpeed}, random(6000) + 5000ms
      animation-delay: 0ms, random(8000) + 500ms

  @keyframes move#{$i}
    @for $step from 0 through $steps
      #{$step * (100 / $steps)}%
        transform: translateX(random(100) - 50vw) translateY(random(100) - 50vh) scale(random(75) / 100 + .25)

@keyframes drift
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

@keyframes flash
  0%, 30%, 100%
    opacity: 0
    box-shadow: 0 0 0vw 0vw yellow
  5%
    opacity: 1
    box-shadow: 0 0 2vw 0.4vw yellow
</style>
