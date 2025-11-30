import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '../services/api';

export const useMathStore = defineStore('math', () => {
  const loading = ref(false);
  const error = ref(null);
  const result = ref(null);
  const graphData = ref(null);

  const solveExpression = async (expression) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.post('/calc/solve', { expression });
      result.value = response.data.data;
      return result.value;
    } catch (err) {
      error.value = err.response?.data?.message || 'Calculation failed';
      return null;
    } finally {
      loading.value = false;
    }
  };

  const plotGraph = async (expression) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.post('/graph/plot', { expression });
      graphData.value = response.data.data;
      return graphData.value;
    } catch (err) {
      error.value = err.response?.data?.message || 'Graph plotting failed';
      return null;
    } finally {
      loading.value = false;
    }
  };

  const scanImage = async (file) => {
    loading.value = true;
    error.value = null;
    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await api.post('/ocr/scan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data.data.text;
    } catch (err) {
      error.value = err.response?.data?.message || 'Scan failed';
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    result,
    graphData,
    solveExpression,
    plotGraph,
    scanImage
  };
});
