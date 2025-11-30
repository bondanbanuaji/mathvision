<script setup>
import { onMounted } from 'vue';
import { useHistoryStore } from '../stores/historyStore';
import AppHeader from '../components/layout/AppHeader.vue';

const historyStore = useHistoryStore();

onMounted(() => {
  historyStore.fetchHistory();
});
</script>

<template>
  <div class="history-page">
    <AppHeader />
    <div class="container">
      <h1>History</h1>
      
      <div v-if="historyStore.loading">Loading...</div>
      
      <div v-else class="history-list">
        <div v-for="item in historyStore.history" :key="item._id" class="history-item">
          <div class="type">{{ item.type }}</div>
          <div class="content">{{ item.content }}</div>
          <div class="result" v-if="item.result">= {{ item.result }}</div>
          <div class="date">{{ new Date(item.createdAt).toLocaleDateString() }}</div>
        </div>
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

.history-item {
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.type {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 0.5rem;
}

.content {
  font-size: 1.2rem;
  font-weight: bold;
}

.result {
  color: var(--primary-color);
  font-size: 1.2rem;
}

.date {
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.5rem;
  text-align: right;
}
</style>
