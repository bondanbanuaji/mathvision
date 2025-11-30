<script setup>
import { useAuthStore } from '../stores/authStore';
import AppHeader from '../components/layout/AppHeader.vue';
import StatCard from '../components/dashboard/StatCard.vue';
import { Calculator, Scan, History, MessageSquare } from 'lucide-vue-next';

const authStore = useAuthStore();
</script>

<template>
  <div class="dashboard">
    <AppHeader />
    <div class="container">
      <h1>Dashboard</h1>
      <div class="welcome-card">
        <h2>Welcome back, {{ authStore.user?.name }}!</h2>
        <p>Here's an overview of your activity.</p>
      </div>

      <div class="stats-grid">
        <StatCard title="Total Scans" value="12" :icon="Scan" color="primary" />
        <StatCard title="Calculations" value="45" :icon="Calculator" color="secondary" />
        <StatCard title="History Items" value="57" :icon="History" color="primary" />
        <StatCard title="Chat Sessions" value="5" :icon="MessageSquare" color="secondary" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.welcome-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

h1 {
  color: var(--text-color);
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

p {
  color: var(--text-color);
}
</style>
