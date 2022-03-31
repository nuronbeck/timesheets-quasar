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
    children: [
      {
        path: '',
        component: () => import('@pages/Home/Index.vue'),
      },
      {
        path: 'projects',
        component: () => import('@pages/Projects/Index.vue'),
      },
      {
        path: 'timesheets',
        component: () => import('@pages/Timesheets/Index.vue'),
      },
      {
        path: 'clients',
        component: () => import('@pages/Clients.vue'),
        children: [
          {
            path: '',
            component: () => import('@pages/Clients/Index.vue'),
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
            component: () => import('@pages/Clients/AddClient.vue'),
            meta: {
              breadcrumbs: [
                {
                  id: 'dashboardIndex',
                  label: 'Dashboard',
                  icon: 'home',
                  to: '/dashboard',
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
