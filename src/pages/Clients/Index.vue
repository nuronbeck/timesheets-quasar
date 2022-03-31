<template>
  <div class="container">
    <dashboard-breadcrumbs :breadcrumbs="this.$route.meta.breadcrumbs" />

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

      <ApolloQuery
        :query="require('@apollo/queries/getClients.gql')"
        :variables="{ pagination, filters }"
        fetchPolicy="network-only"
      >
        <template v-slot="{ result: { error, data }, isLoading }">

          <q-list v-if="isLoading" bordered>
            <q-item v-for="(i, ind) in 10" :key="`list-clients-skeleton__${ind}`">
              <q-item-section avatar>
                <q-skeleton type="QAvatar" />
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
                  <q-avatar color="warning" text-color="white">
                    {{ client.letter }}
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ client.name }}</q-item-label>
                  <q-item-label caption lines="1">{{ client.email }}</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-icon name="chat_bubble" color="green" />
                </q-item-section>
              </q-item>
            </q-intersection>
          </q-list>

        </template>
      </ApolloQuery>

  </div>
</template>

<script>
export default {
  name: 'Clients',
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
