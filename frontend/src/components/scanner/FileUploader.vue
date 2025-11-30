<script setup>
import { ref } from 'vue';

const emit = defineEmits(['file-selected']);
const fileInput = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    emit('file-selected', file);
  }
};

const triggerUpload = () => {
  fileInput.value.click();
};
</script>

<template>
  <div class="file-uploader" @click="triggerUpload">
    <input
      type="file"
      ref="fileInput"
      @change="handleFileChange"
      accept="image/*"
      class="hidden"
    />
    <div class="upload-placeholder">
      <p>Click to upload an image</p>
    </div>
  </div>
</template>

<style scoped>
.file-uploader {
  border: 2px dashed #ccc;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s;
}

.file-uploader:hover {
  border-color: var(--primary-color);
}

.hidden {
  display: none;
}
</style>
