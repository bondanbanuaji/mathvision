import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '../services/api';

export const useHistoryStore = defineStore('history', () => {
  const history = ref([]);
  const loading = ref(false);

  const fetchHistory = async () => {
    loading.value = true;
    try {
      const response = await api.get('/history');
      history.value = response.data.data;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    history,
    loading,
    fetchHistory
  };
});
