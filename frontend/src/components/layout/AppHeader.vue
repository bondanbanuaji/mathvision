<script setup>
import { useAuthStore } from '../../stores/authStore';
import { useRouter } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core';
import { Moon, Sun, User } from 'lucide-vue-next';

const authStore = useAuthStore();
const router = useRouter();
const isDark = useDark();
const toggleDark = useToggle(isDark);

const handleLogout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <router-link to="/">MathVision</router-link>
      </div>
      <nav>
        <button @click="toggleDark()" class="btn-icon">
          <Moon v-if="isDark" />
          <Sun v-else />
        </button>
        <template v-if="!authStore.isAuthenticated">
          <router-link to="/login" class="nav-link">Login</router-link>
          <router-link to="/register" class="nav-link btn btn-primary">Register</router-link>
        </template>
        <template v-else>
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/profile" class="nav-link btn-icon"><User /></router-link>
          <button @click="handleLogout" class="btn btn-outline">Logout</button>
        </template>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-link {
  margin-left: 1rem;
  text-decoration: none;
  color: var(--text-color);
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  margin-left: 1rem;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  margin-left: 0.5rem;
}

.btn-icon:hover {
  color: var(--primary-color);
}
</style>
