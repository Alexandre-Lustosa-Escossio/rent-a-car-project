import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body; 
  categoriesRepository.create({name, description})
  return res.status(201).json({message: 'Vehicle Succesfully Added'})
})

categoriesRoutes.get('/', (req, res) => {
  const allCategories = categoriesRepository.list();
  res.status(200).json({categories: allCategories})
})

export { categoriesRoutes }