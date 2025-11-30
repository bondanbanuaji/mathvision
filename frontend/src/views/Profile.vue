<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import AppHeader from '../components/layout/AppHeader.vue';

const authStore = useAuthStore();
const name = ref(authStore.user?.name || '');
const email = ref(authStore.user?.email || '');
const message = ref('');

const handleUpdate = () => {
  // Mock update
  message.value = 'Profile updated successfully!';
  setTimeout(() => message.value = '', 3000);
};
</script>

<template>
  <div class="profile-page">
    <AppHeader />
    <div class="container">
      <h1>Profile Settings</h1>
      <div class="profile-card">
        <div class="form-group">
          <label>Name</label>
          <input v-model="name" type="text" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" disabled />
        </div>
        <button @click="handleUpdate" class="btn btn-primary">Save Changes</button>
        <p v-if="message" class="success-message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.profile-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background: var(--background-color);
  color: var(--text-color);
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.success-message {
  color: green;
  margin-top: 1rem;
}
</style>
