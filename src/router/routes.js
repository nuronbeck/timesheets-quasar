const routes = [
  {
    path: '/',
    component: () => import('@layouts/HomeLayout.vue'),
    children: [{ path: '', component: () => import('@pages/Index.vue') }],
  },
  {
    path: '/dashboard',
    component: () => import('@layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@pages/Home/Index.vue') },
      { path: 'projects', component: () => import('@pages/Projects/Index.vue') },
      {
        path: 'timesheets',
        component: () => import('@pages/Timesheets/Index.vue'),
      },
      { path: 'clients', component: () => import('@pages/Clients/Index.vue') },
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
