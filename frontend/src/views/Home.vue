<script setup>
import AppHeader from '../components/layout/AppHeader.vue';
</script>

<template>
  <div class="home">
    <AppHeader />
    <main class="hero">
      <div class="container">
        <h1>Welcome to MathVision</h1>
        <p>Your intelligent math companion. Solve, graph, and learn.</p>
        <div class="actions">
          <router-link to="/register" class="btn btn-primary btn-lg">Get Started</router-link>
          <router-link to="/login" class="btn btn-secondary btn-lg">Login</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

p {
  font-size: 1.5rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;
}
</style>
