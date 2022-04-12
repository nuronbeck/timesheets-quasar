<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />

    <div class="q-pa-md q-pa-lg-lg q-mb-lg bg-white rounded-borders">
      <page-heading label="Clients" />

      <div class="row q-mb-md">
        <div class="col">
          <q-btn color="green-7" icon="add" label="Добавить" align="between" size="md" unelevated no-caps to="/dashboard/clients/add" />
        </div>

        <div class="col-auto">
          <q-input
            v-model="filters.clientName"
            debounce="800"
            placeholder="Search"
            hint="Enter client name"
            filled
            dense
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>

      <q-no-ssr>
        <ApolloQuery
          :query="require('@apollo/queries/getClients.gql')"
          :variables="{ pagination, filters }"
          fetchPolicy="network-only"
        >
          <template v-slot="{ result: { error, data }, isLoading }">

            <q-list v-if="isLoading" bordered>
              <q-item v-for="(i, ind) in 10" :key="`list-clients-skeleton__${ind}`">
                <q-item-section avatar>
                  <q-skeleton type="QAvatar" size="40px" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    <q-skeleton type="text" width="25%" />
                  </q-item-label>
                  <q-item-label caption>
                    <q-skeleton type="text" />
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <!-- Error -->
            <div v-if="error" class="error apollo">
              An error occurred
            </div>

            <q-list v-if="data && !isLoading" bordered>
              <q-intersection
                v-for="client in data.clients.data"
                :key="client.id"
                once
                transition="jump-up"
              >
                <q-item
                  class="q-my-sm"
                  clickable
                  v-ripple
                >
                  <q-item-section avatar>
                    <q-avatar color="primary" text-color="white">
                      {{ client.name.substr(0,1) }}
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ client.name }}</q-item-label>
                    <q-item-label caption lines="1">{{ client.description || 'No description' }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-intersection>
            </q-list>

          </template>
        </ApolloQuery>
      </q-no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientsIndex',
  data() {
    return {
      pagination: {
        size: 10,
      },
      filters: {
        projectStatus: 'ACTIVE',
        clientName: '',
        projectName: '',
      },
    };
  },
};
</script>
