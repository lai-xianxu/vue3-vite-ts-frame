export default [
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/Demo.vue'),
    meta: {
      keepAlive: false,
    },
  },
];
