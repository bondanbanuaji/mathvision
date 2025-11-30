<script setup>
import { ref, onMounted, watch } from 'vue';
import { useMathStore } from '../stores/mathStore';
import AppHeader from '../components/layout/AppHeader.vue';
import Chart from 'chart.js/auto';

const mathStore = useMathStore();
const expression = ref('x^2');
const canvasRef = ref(null);
let chartInstance = null;

const plot = async () => {
  const data = await mathStore.plotGraph(expression.value);
  if (data) {
    renderChart(data);
  }
};

const renderChart = (data) => {
  if (chartInstance) {
    chartInstance.destroy();
  }

  const ctx = canvasRef.value.getContext('2d');
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.x,
      datasets: [{
        label: expression.value,
        data: data.y,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          type: 'linear',
          position: 'bottom'
        }
      }
    }
  });
};

onMounted(() => {
  plot();
});
</script>

<template>
  <div class="graph-page">
    <AppHeader />
    <div class="container">
      <h1>Graphing Calculator</h1>
      <div class="controls">
        <input v-model="expression" @keyup.enter="plot" placeholder="Enter function of x" />
        <button @click="plot" class="btn btn-primary">Plot</button>
      </div>

      <div class="canvas-container">
        <canvas ref="canvasRef"></canvas>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.canvas-container {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
