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
  </script>

<template>
  <div class="category-grid">
    <div class="category-card" v-for="category in categories" :key="category.id">
      <div class="card-content">
        <span class="card-id">ID: {{ category.id }}</span>
        <h3 class="card-title">{{ category.title }}</h3>
        <p class="card-text">{{ category.description }}</p>
      </div>
      <div class="card-actions">
        <button class="btn-edit" @click="editCategory(category.id)">Edit</button>
        <button class="btn-delete" @click="deleteCategory(category.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .category-card {
    background: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  .category-card:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
  }

  .card-text {
    font-size: 14px;
    color: #666;
  }

  .card-actions {
    background: #f5f5f5;
    padding: 10px 20px;
    text-align: right;
  }

  .btn-edit,
  .btn-delete {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 10px;
  }

  .btn-edit {
    background-color: #4CAF50;
    color: #fff;
  }

  .btn-edit:hover {
    background-color: #45A049;
  }

  .btn-delete {
    background-color: #F44336;
    color: #fff;
  }

  .btn-delete:hover {
    background-color: #D32F2F;
  }

  @media (max-width: 600px) {
    .category-grid {
      grid-template-columns: 1fr;
    }
  }

  .card-id {
  font-size: 14px;
  color: #888;
  margin-bottom: 4px;
  display: block; 
}
  </style>
