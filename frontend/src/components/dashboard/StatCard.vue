<script setup>
defineProps({
  title: String,
  value: [String, Number],
  icon: Object,
  color: {
    type: String,
    default: 'primary'
  }
});
</script>

<template>
  <div class="stat-card">
    <div class="icon-wrapper" :class="color">
      <component :is="icon" class="icon" />
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<style scoped>
.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-wrapper {
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper.primary {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
}

.icon-wrapper.secondary {
  background-color: rgba(124, 58, 237, 0.1);
  color: var(--secondary-color);
}

.icon {
  width: 24px;
  height: 24px;
}

h3 {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
}

p {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  margin: 0;
}
</style>
