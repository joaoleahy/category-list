import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import CategoryEditView from '@/views/CategoryEditView.vue';
import CategoryForm from '@/components/CategoryForm.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/categories', component: CategoriesView },
  { path: '/categories/add', component: CategoryForm },
  {
    path: '/categories/edit/:id',
    name: 'EditCategory',
    component: () => import('../views/CategoryEditView.vue'),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
