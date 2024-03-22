import { Request, Response } from 'express';
import { categoryService } from '../services/categoryService';

export async function getAllCategories(req: Request, res: Response) {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
}

export async function getCategoryById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(parseInt(id));
    if (!category) {
      res.status(404).send("Category not found");
    } else {
      res.json(category);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
}

export async function findByTitle(req: Request, res: Response) {
  const { title } = req.query;
  if (typeof title !== 'string') {
    return res.status(400).json({ message: "Title is required and must be a string." });
  }

  try {
    const category = await categoryService.findByTitle(title);
    if (category) {
      return res.json(category);
    } else {
      return res.status(404).json({ message: "Category not found." });
    }
  } catch (error) {
    console.error('findByTitle error:', error);
    return res.status(500).json({ message: "An error occurred while fetching the category." });
  }
}

export async function createCategory(req: Request, res: Response) {
  try {
    const { title, description } = req.body;
    const newCategory = await categoryService.createCategory({ title, description });
    res.status(201).json(newCategory);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
}

export async function updateCategory(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedCategory = await categoryService.updateCategory(parseInt(id), { title, description });
    res.json(updatedCategory);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
}

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await categoryService.deleteCategory(parseInt(id));
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
}
