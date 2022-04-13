<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />

    <div class="q-pa-md q-pa-lg-lg q-mb-lg bg-white rounded-borders">
      <page-heading label="Projects" />

      <div class="row q-mb-md">
        <div class="col">
          <q-btn color="green-7" icon="add" label="Добавить" align="between" size="md" unelevated no-caps />
        </div>

        <div class="col-auto">
          <q-select v-model="filters.status" :options="[ 'ACTIVE', 'ARCHIVE' ]" :label="filters.status" />
        </div>
      </div>

      <q-list bordered>
        <q-no-ssr>
          <ApolloQuery
            :query="require('@apollo/queries/getProjects.gql')"
            :variables="{ pagination, filters }"
            fetchPolicy="network-only"
          >
            <template v-slot="{ result: { error, data }, isLoading }">
              <!-- Loading -->
              <q-inner-loading :showing="!!isLoading">
                <q-spinner-clock size="lg" color="accent" />
              </q-inner-loading>

              <!-- Error -->
              <div v-if="error && !isLoading" class="error apollo">
                An error occurred
              </div>

              <!-- Result -->
              <div v-if="data && !isLoading" class="result apollo">
                <q-item v-for="item in data.projects.data" :key="item.id" class="q-my-sm" clickable v-ripple>
                    <q-item-section avatar>
                      <q-avatar color="warning" text-color="white">
                        {{ item.letter }}
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>{{ item.name }}</q-item-label>
                      <q-item-label caption lines="1">{{ item.email }}</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-icon name="chat_bubble" color="green" />
                    </q-item-section>
                  </q-item>
              </div>
            </template>
          </ApolloQuery>
        </q-no-ssr>
      </q-list>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectsIndex',
  data() {
    return {
      pagination: {
        size: 10,
      },

      filters: {
        status: 'ACTIVE',
        name: '',
        // startDate: '2021-12-01T00:00:00Z',
        // endDate: '2022-08-31T00:00:00Z',
      },
    };
  },
};
</script>
