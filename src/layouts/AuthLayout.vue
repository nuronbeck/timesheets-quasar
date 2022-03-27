<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-py-sm q-py-md-md flex flex-center">
          <router-view />
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AuthLayout',
};
</script>
