<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="category-form">
      <div class="form-group">
        <label for="title">Título:</label>
        <input id="title" v-model="category.title" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="description">Descrição:</label>
        <textarea id="description" v-model="category.description" required class="form-control"></textarea>
      </div>
      <button type="submit" class="submit-btn">{{ isEditMode ? 'Atualizar' : 'Criar' }} Categoria</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { Category } from '../types/category';
import { CategoryService } from '../api/CategoryService';
import { useRouter, useRoute } from 'vue-router';
import type { PropType } from 'vue';

const props = defineProps({
  initialCategory: Object as PropType<Category | null>,
});

const emit = defineEmits(['update']);

const router = useRouter();
const route = useRoute();

const isEditMode = computed(() => !!props.initialCategory);
const category = ref<Category>({
  id: props.initialCategory?.id || 0,
  title: props.initialCategory?.title || '',
  description: props.initialCategory?.description || '',
});

watch(
  () => props.initialCategory,
  (newVal) => {
    if (newVal) {
      category.value = { ...newVal };
    }
  },
  { deep: true }
);

const handleSubmit = async () => {
  let savedCategory;
  if (isEditMode.value) {
    savedCategory = await CategoryService.updateCategory(category.value.id, category.value);
  } else {
    savedCategory = await CategoryService.createCategory(category.value);
  }
  emit('update', savedCategory);
  router.push('/categories');
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  padding: 5rem 0;
}

.category-form {
  width: 100%;
  max-width: 40rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #129085;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #129085;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #107369;
  outline: none;
}

.submit-btn {
  width: 100%;
  background-color: #129085;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.submit-btn:hover,
.submit-btn:focus {
  background-color: #0e5f5a;
}
</style>