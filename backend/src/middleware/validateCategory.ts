import { Request, Response, NextFunction } from 'express';
import { categoryRepository } from '../repositories/categoryRepository'; // Ajuste o caminho conforme necessário

export const validateCategory = async (req: Request, res: Response, next: NextFunction) => {
  const { title } = req.body;
  const { id } = req.params;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ message: "The 'title' field is required and must be a non-empty string." });
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    const existingCategory = await categoryRepository.findByTitle(title.trim());
    const isUpdateAttempt = req.method === 'PUT';
    const isDifferentCategory = isUpdateAttempt && existingCategory && existingCategory.id !== parseInt(id);

    if (existingCategory && (!isUpdateAttempt || isDifferentCategory)) {
      return res.status(400).json({ message: "A category with the same title already exists." });
    }
  }

  if (['PUT', 'DELETE'].includes(req.method) && id) {
    const categoryExists = await categoryRepository.findById(parseInt(id));
    if (!categoryExists) {
      return res.status(404).json({ message: "Category not found." });
    }
  }

  next();
};
