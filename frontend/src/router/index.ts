import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import CategoryEditView from '@/views/CategoryEditView.vue';
import CategoryForm from '@/components/CategoryForm.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/categories', component: CategoriesView },
  { path: '/categories/edit/:id', component: CategoryEditView },
  { path: '/categories/add', component: CategoryForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
