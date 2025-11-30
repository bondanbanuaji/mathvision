<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';
import AppHeader from '../components/layout/AppHeader.vue';

const authStore = useAuthStore();
const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  const success = await authStore.register({
    name: name.value,
    email: email.value,
    password: password.value
  });
  if (success) {
    router.push('/dashboard');
  }
};
</script>

<template>
  <div class="register-page">
    <AppHeader />
    <div class="container">
      <div class="auth-card">
        <h2>Register</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div v-if="authStore.error" class="error-message">
            {{ authStore.error }}
          </div>
          <button type="submit" class="btn btn-primary" :disabled="authStore.loading">
            {{ authStore.loading ? 'Loading...' : 'Register' }}
          </button>
        </form>
        <p class="mt-4">
          Already have an account? <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
}

.auth-card {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #4b5563;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #ef4444;
  margin-bottom: 1rem;
  text-align: center;
}

.mt-4 {
  margin-top: 1rem;
  text-align: center;
}
</style>
