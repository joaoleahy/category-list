import express from 'express';
import * as categoryController from '../controllers/categoryController';
import { validateCategory } from '../middleware/validateCategory';

const router = express.Router();

router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.get('/categories/:title', categoryController.findByTitle);
router.post('/categories', validateCategory, categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

export default router;
