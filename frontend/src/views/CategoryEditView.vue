<template>
  <div>
    <h1>{{ isEditMode ? 'Update' : 'Create' }} Category</h1>
    <CategoryForm :initialCategory="categoryData" @update="handleUpdate" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import CategoryForm from '../components/CategoryForm.vue';
import { CategoryService } from '../api/CategoryService';
import type { Category } from '../types/category';

const router = useRouter();
const route = useRoute();
const categoryData = ref<Category | null>(null);

const fetchCategory = async () => {
  const id = parseInt(route.params.id as string);
  if (id) {
    const data = await CategoryService.getCategoryById(id);
    if (data) {
      categoryData.value = data;
    }
  }
};

onMounted(fetchCategory);

const isEditMode = computed(() => route.params.id != null);

const handleUpdate = async (updatedCategory: Category) => {
  if (updatedCategory.id) {
    await CategoryService.updateCategory(updatedCategory.id, updatedCategory);
  } else {
    await CategoryService.createCategory(updatedCategory);
  }
  router.push('/categories');
};
</script>
