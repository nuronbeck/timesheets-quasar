const routes = [
  {
    path: '/',
    component: () => import('@layouts/HomeLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@pages/Index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@pages/Login.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('@layouts/MainLayout.vue'),
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: '',
        component: () => import('@pages/Dashboard/DashboardIndex.vue'),
        meta: {
          breadcrumbs: [
            {
              id: 'dashboardIndex',
              label: 'Dashboard',
              icon: 'home',
              to: '/dashboard',
            },
          ],
        },
      },
      {
        path: 'time',
        component: () => import('@pages/Times/TimesIndex.vue'),
        meta: {
          breadcrumbs: [
            {
              id: 'dashboardIndex',
              label: 'Dashboard',
              icon: 'home',
              to: '/dashboard',
            },
            {
              id: 'timesIndex',
              label: 'Time',
              icon: undefined,
              to: undefined,
            },
          ],
        },
      },
      {
        path: 'projects',
        component: () => import('@pages/Projects/ProjectsIndex.vue'),
        meta: {
          breadcrumbs: [
            {
              id: 'dashboardIndex',
              label: 'Dashboard',
              icon: 'home',
              to: '/dashboard',
            },
            {
              id: 'projectsListIndex',
              label: 'Projects',
              icon: undefined,
              to: undefined,
            },
          ],
        },
      },
      {
        path: 'timesheets',
        component: () => import('@pages/Timesheets/TimesheetsIndex.vue'),
        meta: {
          breadcrumbs: [
            {
              id: 'dashboardIndex',
              label: 'Dashboard',
              icon: 'home',
              to: '/dashboard',
            },
            {
              id: 'timesheetsListIndex',
              label: 'Timesheets',
              icon: undefined,
              to: undefined,
            },
          ],
        },
      },
      {
        path: 'clients',
        component: () => import('@pages/Clients.vue'),
        children: [
          {
            path: '',
            component: () => import('@pages/Clients/ClientsIndex.vue'),
            meta: {
              breadcrumbs: [
                {
                  id: 'dashboardIndex',
                  label: 'Dashboard',
                  icon: 'home',
                  to: '/dashboard',
                },
                {
                  id: 'clientsListIndex',
                  label: 'Clients',
                  icon: undefined,
                  to: undefined,
                },
              ],
            },
          },
          {
            path: 'add',
            component: () => import('@pages/Clients/ClientsAdd.vue'),
            meta: {
              breadcrumbs: [
                {
                  id: 'dashboardIndex',
                  label: 'Dashboard',
                  icon: 'home',
                  to: '/dashboard',
                },
                {
                  id: 'clientsListIndex',
                  label: 'Clients',
                  icon: undefined,
                  to: '/dashboard/clients',
                },
                {
                  id: 'clientsAddIndex',
                  label: 'Add client',
                  icon: undefined,
                  to: undefined,
                },
              ],
            },
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('@pages/Error404.vue'),
  },
];

export default routes;
