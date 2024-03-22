<template>
  <form class="category-form" @submit.prevent="save">
    <div class="form-control">
      <label for="title">Título</label>
      <input id="title" type="text" v-model="title" required>
    </div>
    <div class="form-control">
      <label for="description">Descrição</label>
      <textarea id="description" v-model="description" required></textarea>
    </div>
    <button type="submit" class="save-btn">Salvar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { CategoryService } from '../api/CategoryService';
import type { Category } from '../types/category';

export default defineComponent({
  props: {
    initialCategory: {
      type: Object as () => Category,
      required: false,
      default: () => ({
        id: 0,
        title: '',
        description: ''
      })
    }
  },
  setup(props, { emit }) {
    const router = useRouter();
    const title = ref(props.initialCategory.title);
    const description = ref(props.initialCategory.description);

    const save = async () => {
      const category: Category = {
        id: props.initialCategory.id,
        title: title.value,
        description: description.value
      };

      if (category.id) {
        await CategoryService.updateCategory(category.id, category);
      } else {
        await CategoryService.createCategory(category);
      }

      emit('saved');
      router.push('/categories');
    };

    return { title, description, save };
  }
});
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
    