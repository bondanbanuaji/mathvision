import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/authStore';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';
import Scanner from '../views/Scanner.vue';
import Calculator from '../views/Calculator.vue';
import Graph from '../views/Graph.vue';
import History from '../views/History.vue';
import Chat from '../views/Chat.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { guest: true }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { guest: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/scanner',
      name: 'scanner',
      component: Scanner,
      meta: { requiresAuth: true }
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator,
      meta: { requiresAuth: true }
    },
    {
      path: '/graph',
      name: 'graph',
      component: Graph,
      meta: { requiresAuth: true }
    },
    {
      path: '/history',
      name: 'history',
      component: History,
      meta: { requiresAuth: true }
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  
  // Fetch user if token exists but user is null
  if (authStore.token && !authStore.user) {
    await authStore.fetchUser();
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login' });
  } else if (to.meta.guest && authStore.isAuthenticated) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

export default router;
