import axios from 'axios';
import type { Category } from '@/types/category';

const API_BASE_URL = 'http://localhost:3000/api/categories/';

export const CategoryService = {
  getAllCategories(): Promise<Category[]> {
    return axios.get(API_BASE_URL).then(response => response.data);
  },

  getCategoryById(id: number): Promise<Category | null> {
    return axios.get(`${API_BASE_URL}${id}`).then(response => response.data);
  },

  findByTitle(title: string): Promise<Category | null> {
    return axios.get(`${API_BASE_URL}find/title`, { params: { title } }).then(response => response.data);
  },

  createCategory(category: Category): Promise<Category> {
    return axios.post(API_BASE_URL, category).then(response => response.data);
  },

  updateCategory(id: number, category: Category): Promise<Category | null> {
    return axios.put(`${API_BASE_URL}${id}`, category).then(response => response.data);
  },

  deleteCategory(id: number): Promise<void> {
    return axios.delete(`${API_BASE_URL}${id}`).then(response => response.data);
  },
};