<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title">Título:</label>
      <input id="title" v-model="category.title" required />
    </div>
    <div>
      <label for="description">Descrição:</label>
      <textarea id="description" v-model="category.description" required></textarea>
    </div>
    <button type="submit">{{ isEditMode ? 'Atualizar' : 'Criar' }} Categoria</button>
  </form>
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
  .category-form {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    background: white;
    border-radius: 4px;
  }
  
  .form-control {
    margin-bottom: 1rem;
  }
  
  .form-control label {
    display: block;
    margin-bottom: 0.5rem;
    color: #129085;
  }
  
  .form-control input,
  .form-control textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .save-btn {
    background-color: #129085;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .save-btn:hover,
  .save-btn:focus {
    background-color: #107369;
  }
  </style>