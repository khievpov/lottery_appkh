const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'lotterykh', component: () => import('src/layouts/lotterykh.vue') },
    ],
  },
  {
    path: '/pagekhload24',
    component: () => import('pages/HomePage.vue'),
  },
  {
    path: '/components/users',
    component: () => import('src/components/usersPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
