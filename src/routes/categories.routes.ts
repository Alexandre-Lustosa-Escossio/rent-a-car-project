import { Router } from 'express'
import {v4 as uuidV4} from 'uuid'
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body; 

  const category  = {
    name,
    description,
    id: uuidV4
  }

  categories.push(category)
1
  return res.status(201).json({message: 'Vehicle Succesfully Added'})
})

export { categoriesRoutes }