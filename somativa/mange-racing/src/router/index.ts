import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TecView from '@/views/CartView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import LoginView from '@/views/LoginView.vue'
import MotoView from '@/views/MotoView.vue'
import CrossView from '@/views/CrossView.vue'
import CustomView from '@/views/CustomView.vue'
import TrevelarView from '@/views/TrevelarView.vue'
import NimbusView from '@/views/NimbusView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/moto',
      name: 'moto',
      component:MotoView,
      meta: { requiresAuth: true }
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: { requiresAuth: true }
    },
    {
      path: '/cross',
      name: 'cross',
      component:CrossView,
      meta: { requiresAuth: true }
    },
    {
      path: '/custom',
      name: 'custom',
      component:CustomView,
      meta: { requiresAuth: true }
    },
    {
      path: '/trevelar',
      name: 'trevelar',
      component:TrevelarView,
      meta: { requiresAuth: true }
    },
    {
      path: '/nimbus',
      name: 'nimbus',
      component:NimbusView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
    
  ],
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const { requiresAuth } = to.meta;

  if (requiresAuth && !isLoggedIn) {
    return next({ name: 'login' });
  }

  next();
});

export default router
