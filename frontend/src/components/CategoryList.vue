<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { CategoryService } from '@/api/CategoryService';
import type { Category } from '@/types/category';

const categories = ref<Category[]>([]);
const router = useRouter();

const fetchCategories = async () => {
  categories.value = await CategoryService.getAllCategories();
};

const editCategory = (id: number) => {
  router.push({ name: 'EditCategory', params: { id } });
};

const deleteCategory = async (id: number) => {
  await CategoryService.deleteCategory(id);
  await fetchCategories();
};

onMounted(fetchCategories);

console.log(categories)
</script>

<template>
  <div class="category-container">
    <div class="category-row" v-for="category in categories" :key="category.id">
      <div class="category-card">
        <h3 class="category-title">{{ category.title }}</h3>
        <p class="category-description">{{ category.description }}</p>
        <div class="category-actions">
          <button @click="editCategory(category.id)">Edit</button>
          <button @click="deleteCategory(category.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.category-row {
  flex: 0 0 calc(33.333% - 1rem);
}

.category-card {
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #fff;
}

.category-title {
  margin: 0;
  color: #333;
}

.category-description {
  color: #666;
}

.category-actions {
  margin-top: 1rem;
  text-align: right;
}

.category-actions button {
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
}

.category-actions button:hover {
  opacity: 0.9;
}
</style>
