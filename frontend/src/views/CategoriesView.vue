<template>
    <div class="categories-view">
      <div class="header">
        <h1 class="title">Manage Your Categories</h1>
        <button class="add-btn" @click="navigateToAddCategory">+ Add New Category</button>
      </div>
      <CategoryList @edit-category="navigateToEditCategory" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import CategoryList from '../components/CategoryList.vue';
  
  export default defineComponent({
    components: {
      CategoryList,
    },
    setup() {
      const router = useRouter();
  
      const navigateToAddCategory = () => {
        router.push('/categories/add');
      };
  
      const navigateToEditCategory = (id: number) => {
        router.push(`/categories/edit/${id}`);
      };
  
      return { navigateToAddCategory, navigateToEditCategory };
    },
  });
  </script>
  
  <style scoped>
  .categories-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: #eef2f7;
    min-height: 100vh;
  }
  
  .header {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .title {
    color: #102a43;
    font-size: 2.5rem;
    font-weight: 600;
  }
  
  .add-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    font-size: 1.125rem;
    font-weight: 500;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .add-btn:hover {
    background-color: #43a047;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .title {
      margin-bottom: 1rem;
    }
  
    .add-btn {
      align-self: center;
    }
  }
  </style>
  