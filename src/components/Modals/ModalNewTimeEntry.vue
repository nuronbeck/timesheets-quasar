<template>
  <q-dialog :value="visible">
    <q-card>
      <q-card-section>
        <div class="text-h6">New time item modal</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <p v-for="n in 10" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate
          voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at
          omnis vel numquam exercitationem aut, natus minima, porro labore.
        </p>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'ModalNewTimeEntry',
  props: {
    visible: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>
