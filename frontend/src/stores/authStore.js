import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import api from '../services/api';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref(localStorage.getItem('token') || null);
  const loading = ref(false);
  const error = ref(null);

  const isAuthenticated = computed(() => !!token.value);

  const register = async (userData) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.post('/auth/register', userData);
      token.value = response.data.token;
      user.value = response.data.data;
      localStorage.setItem('token', token.value);
      return true;
    } catch (err) {
      error.value = err.response?.data?.message || 'Registration failed';
      return false;
    } finally {
      loading.value = false;
    }
  };

  const login = async (credentials) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.post('/auth/login', credentials);
      token.value = response.data.token;
      user.value = response.data.data;
      localStorage.setItem('token', token.value);
      return true;
    } catch (err) {
      error.value = err.response?.data?.message || 'Login failed';
      return false;
    } finally {
      loading.value = false;
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem('token');
  };

  const fetchUser = async () => {
    if (!token.value) return;
    loading.value = true;
    try {
      const response = await api.get('/auth/me');
      user.value = response.data;
    } catch (err) {
      logout();
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    register,
    login,
    logout,
    fetchUser
  };
});
