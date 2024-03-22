<template>
    <div>
      <h1>Editar Categoria</h1>
      <CategoryForm :initialCategory="category" @save="saveCategory"/>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  import { CategoryService } from '../api/CategoryService';
  import type { Category } from '../types/category';
  
  const props = defineProps({
    initialCategory: {
      type: Object as () => Category | null,
      default: null,
    },
  });
  
  const emit = defineEmits(['save']);
  
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
  
  const router = useRouter();
  
  const saveCategory = async () => {
    if (category.value.id) {
      await CategoryService.updateCategory(category.value.id, category.value);
    } else {
      await CategoryService.createCategory(category.value);
    }
    emit('save');
    router.push('/categories');
  };
  </script>
  