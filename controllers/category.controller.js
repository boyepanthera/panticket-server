import Category from '../models/category.model';

export async function createCategory(req, res) {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json({
      message: 'category created successfully',
      event: newCategory,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Issues processing your request',
    });
  }
}
export function deleteCategory() {}
export function updateCategory() {}
export function fetchECategory() {}
