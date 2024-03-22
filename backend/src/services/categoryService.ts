import { Category } from '../models/categoryModel';
import { categoryRepository } from '../repositories/categoryRepository';

class CategoryService {
  async getAllCategories(): Promise<Category[]> {
    return await categoryRepository.findAll();
  }

  async getCategoryById(id: number): Promise<Category | null> {
    return await categoryRepository.findById(id);
  }

  async findByTitle(title: string): Promise<Category | null> {
    return await categoryRepository.findByTitle(title);
  }

  async createCategory(category: Category): Promise<Category> {
    return await categoryRepository.create(category);
  }

  async updateCategory(id: number, category: Category): Promise<Category | null> {
    const existingCategory = await categoryRepository.findById(id);
    if (!existingCategory) {
      return null;
    }
    return await categoryRepository.update(id, category);
  }

  async deleteCategory(id: number): Promise<void> {
    await categoryRepository.delete(id);
  }
}

export const categoryService = new CategoryService();
