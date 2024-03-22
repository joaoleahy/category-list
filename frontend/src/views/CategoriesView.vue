<template>
    <div class="categories-container">
        <h1>Categorias</h1>
        <button class="add-category-btn" @click="navigateToAddCategory">Adicionar Categoria</button>
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
.categories-container {
    padding: 2rem;
}

h1 {
    color: var(--primary-color);
}

.add-category-btn {
    background-color: var(--primary-color);
    border: none;
    padding: 0.5rem 1rem;
    color: var(--text-on-primary);
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-category-btn:hover {
    background-color: #107072;
}
</style>