<script setup>
import { ref } from 'vue';
import { useMathStore } from '../stores/mathStore';
import AppHeader from '../components/layout/AppHeader.vue';
import FileUploader from '../components/scanner/FileUploader.vue';

const mathStore = useMathStore();
const scannedText = ref('');

const handleFileSelected = async (file) => {
  const text = await mathStore.scanImage(file);
  if (text) {
    scannedText.value = text;
  }
};
</script>

<template>
  <div class="scanner-page">
    <AppHeader />
    <div class="container">
      <h1>Scanner</h1>
      <FileUploader @file-selected="handleFileSelected" />
      
      <div v-if="mathStore.loading" class="loading">
        Processing...
      </div>

      <div v-if="mathStore.error" class="error">
        {{ mathStore.error }}
      </div>

      <div v-if="scannedText" class="result">
        <h3>Scanned Text:</h3>
        <p>{{ scannedText }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.loading {
  margin-top: 1rem;
  color: var(--primary-color);
}

.error {
  margin-top: 1rem;
  color: #ef4444;
}

.result {
  margin-top: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
