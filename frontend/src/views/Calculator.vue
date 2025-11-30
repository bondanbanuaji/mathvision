<script setup>
import { ref } from 'vue';
import { useMathStore } from '../stores/mathStore';
import AppHeader from '../components/layout/AppHeader.vue';

const mathStore = useMathStore();
const expression = ref('');

const handleSolve = async () => {
  if (!expression.value) return;
  await mathStore.solveExpression(expression.value);
};
</script>

<template>
  <div class="calculator-page">
    <AppHeader />
    <div class="container">
      <h1>Calculator</h1>
      <div class="input-group">
        <input 
          v-model="expression" 
          @keyup.enter="handleSolve"
          placeholder="Enter math expression (e.g., 2 + 2, sin(45 deg))" 
        />
        <button @click="handleSolve" class="btn btn-primary">Solve</button>
      </div>

      <div v-if="mathStore.loading" class="loading">
        Calculating...
      </div>

      <div v-if="mathStore.error" class="error">
        {{ mathStore.error }}
      </div>

      <div v-if="mathStore.result" class="result">
        <h3>Result:</h3>
        <div class="result-box">
          <p class="expr">{{ mathStore.result.expression }} =</p>
          <p class="val">{{ mathStore.result.result }}</p>
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

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.btn {
  padding: 0 2rem;
  font-size: 1.2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.result-box {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-size: 1.5rem;
}

.expr {
  color: #666;
  margin-bottom: 0.5rem;
}

.val {
  font-weight: bold;
  color: var(--primary-color);
}
</style>
