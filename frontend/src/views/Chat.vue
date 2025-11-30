<script setup>
import { ref } from 'vue';
import api from '../services/api';
import AppHeader from '../components/layout/AppHeader.vue';

const messages = ref([]);
const newMessage = ref('');
const loading = ref(false);

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  const userMsg = { role: 'user', content: newMessage.value };
  messages.value.push(userMsg);
  const msgToSend = newMessage.value;
  newMessage.value = '';
  loading.value = true;

  try {
    const response = await api.post('/chat/send', { message: msgToSend });
    messages.value.push({ role: 'bot', content: response.data.data.response });
  } catch (err) {
    messages.value.push({ role: 'error', content: 'Failed to send message' });
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="chat-page">
    <AppHeader />
    <div class="container">
      <h1>AI Tutor</h1>
      
      <div class="chat-window">
        <div v-for="(msg, index) in messages" :key="index" :class="['message', msg.role]">
          <div class="bubble">{{ msg.content }}</div>
        </div>
        <div v-if="loading" class="message bot">
          <div class="bubble">Thinking...</div>
        </div>
      </div>

      <div class="input-area">
        <input 
          v-model="newMessage" 
          @keyup.enter="sendMessage"
          placeholder="Ask a math question..." 
        />
        <button @click="sendMessage" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
}

.chat-window {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  display: flex;
}

.message.user {
  justify-content: flex-end;
}

.message.bot {
  justify-content: flex-start;
}

.bubble {
  padding: 1rem;
  border-radius: 1rem;
  max-width: 70%;
}

.user .bubble {
  background-color: var(--primary-color);
  color: white;
  border-bottom-right-radius: 0.25rem;
}

.bot .bubble {
  background-color: #f3f4f6;
  color: var(--text-color);
  border-bottom-left-radius: 0.25rem;
}

.input-area {
  display: flex;
  gap: 1rem;
}

input {
  flex: 1;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.btn {
  padding: 0 2rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
