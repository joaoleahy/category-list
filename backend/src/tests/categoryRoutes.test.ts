import request from 'supertest';
import app from '../app';

const newCategory = {
  title: 'Test Category',
  description: 'Test Description'
};

let createdCategoryId: number;

describe('Category API', () => {
  it('should return a list of categories', async () => {
    const response = await request(app).get('/api/categories');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should create a new category', async () => {
    const response = await request(app).post('/api/categories').send(newCategory);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    createdCategoryId = response.body.id;
  });

  it('should retrieve a category by id', async () => {
    const response = await request(app).get(`/api/categories/${createdCategoryId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', createdCategoryId);
  });

  it('should update a category', async () => {
    const updatedCategory = {
      title: 'Updated Category',
      description: 'Updated Description'
    };
    const response = await request(app).put(`/api/categories/${createdCategoryId}`).send(updatedCategory);
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual(updatedCategory.title);
  });

  it('should delete a category', async () => {
    const response = await request(app).delete(`/api/categories/${createdCategoryId}`);
    expect(response.status).toBe(204);
    const fetchDeletedResponse = await request(app).get(`/api/categories/${createdCategoryId}`);
    expect(fetchDeletedResponse.status).toBe(404);
  });
});