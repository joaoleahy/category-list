import { Category } from '../models/categoryModel';
import knex from '../config/knexConfig';

class CategoryRepository {
  async findAll(): Promise<Category[]> {
    const categories = await knex('categories').select('*');
    return categories;
  }

  async findById(id: number): Promise<Category | null> {
    const category = await knex('categories').where({ id }).first();
    return category || null;
  }

  async findByTitle(title: string): Promise<Category | null> {
    const category = await knex('categories').where('title', title).first();
    return category || null;
  }

  async create(category: Category): Promise<Category> {
    const [newCategory] = await knex('categories').insert(category).returning('*');
    return newCategory;
  }

  async update(id: number, category: Category): Promise<Category> {
    const [updatedCategory] = await knex('categories').where({ id }).update(category).returning('*');
    return updatedCategory;
  }

  async delete(id: number): Promise<void> {
    await knex('categories').where({ id }).del();
  }
}

export const categoryRepository = new CategoryRepository();
