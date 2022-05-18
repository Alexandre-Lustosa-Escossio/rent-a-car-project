import { Router } from 'express'
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body; 

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date()
  })

  categories.push(category)
1
  return res.status(201).json({message: 'Vehicle Succesfully Added'})
})

export { categoriesRoutes }