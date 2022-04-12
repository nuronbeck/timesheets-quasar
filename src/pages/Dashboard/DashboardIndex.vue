<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />

    <div class="q-pa-md q-pa-lg-lg q-mb-lg bg-white rounded-borders">
      <page-heading label="Progress" />

      <div class="q-pa-md flex flex-center">
        <q-circular-progress
          show-value
          class="text-primary q-ma-md"
          :value="81"
          size="150px"
          color="primary"
        />

        <q-circular-progress
          show-value
          class="text-accent q-ma-md"
          :value="65"
          size="150px"
          :thickness="0.2"
          color="accent"
          track-color="transparent"
        />

        <q-circular-progress
          show-value
          :value="97"
          size="150px"
          :thickness="0.22"
          color="teal"
          track-color="grey-3"
          class="text-teal q-ma-md"
        />
      </div>
    </div>

    <div class="q-pa-md q-pa-lg-lg q-mb-lg bg-white rounded-borders">
      <page-heading label="Recent activities" />

      <div class="q-px-lg q-pb-md">
        <q-timeline color="primary">
          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            color="accent"
            icon="done_all"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardIndex',
};
</script>
