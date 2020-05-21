import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/index.vue')
  },

  {
    path: '/note/:id',
    name: 'note',
    component: () => import('@/views/note')
  }
];

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

export default router

